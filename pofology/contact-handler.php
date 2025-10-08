<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

// Validate required fields
$required_fields = ['name', 'email', 'subject', 'message'];
foreach ($required_fields as $field) {
    if (empty($input[$field])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => "Field '$field' is required"]);
        exit();
    }
}

// Sanitize inputs
$name = filter_var(trim($input['name']), FILTER_SANITIZE_STRING);
$email = filter_var(trim($input['email']), FILTER_SANITIZE_EMAIL);
$subject = filter_var(trim($input['subject']), FILTER_SANITIZE_STRING);
$message = filter_var(trim($input['message']), FILTER_SANITIZE_STRING);
$honeypot = isset($input['website']) ? trim($input['website']) : '';

// Bot protection checks
$errors = [];

// 1. Honeypot field (should be empty)
if (!empty($honeypot)) {
    error_log("Bot detected: Honeypot field filled - IP: " . $_SERVER['REMOTE_ADDR']);
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid submission']);
    exit();
}

// 2. Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Invalid email format';
}

// 3. Check for suspicious patterns
$suspicious_patterns = [
    '/\[url=/',
    '/\[link=/',
    '/<a href/',
    '/http:\/\//',
    '/https:\/\//',
    '/www\./i',
    '/viagra/i',
    '/casino/i',
    '/loan/i',
    '/bitcoin/i',
    '/crypto/i'
];

$content_to_check = $name . ' ' . $subject . ' ' . $message;
foreach ($suspicious_patterns as $pattern) {
    if (preg_match($pattern, $content_to_check)) {
        error_log("Bot detected: Suspicious content - IP: " . $_SERVER['REMOTE_ADDR']);
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Invalid submission']);
        exit();
    }
}

// 4. Rate limiting (simple file-based)
$rate_limit_file = 'contact_rates.txt';
$current_time = time();
$ip = $_SERVER['REMOTE_ADDR'];

// Clean old entries and check rate limit
$rates = [];
if (file_exists($rate_limit_file)) {
    $rates = json_decode(file_get_contents($rate_limit_file), true) ?: [];
}

// Remove entries older than 1 hour
$rates = array_filter($rates, function($timestamp) use ($current_time) {
    return ($current_time - $timestamp) < 3600;
});

// Check if IP has submitted more than 3 times in the last hour
$ip_submissions = array_filter($rates, function($timestamp, $recorded_ip) use ($ip) {
    return $recorded_ip === $ip;
}, ARRAY_FILTER_USE_BOTH);

if (count($ip_submissions) >= 3) {
    error_log("Rate limit exceeded - IP: " . $ip);
    http_response_code(429);
    echo json_encode(['success' => false, 'message' => 'Too many requests. Please try again later.']);
    exit();
}

// 5. Basic length validation
if (strlen($name) > 100 || strlen($subject) > 200 || strlen($message) > 2000) {
    $errors[] = 'Content too long';
}

if (strlen($message) < 10) {
    $errors[] = 'Message too short';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => implode('. ', $errors)]);
    exit();
}

// Configuration
$to_email = 'i@okater.com';
$from_email = 'noreply@okater.com'; // Replace with your domain
$site_name = 'Portfolio Contact Form';

// Prepare email
$email_subject = "Contact Form: " . $subject;
$email_body = "
New message from your portfolio contact form:

Name: $name
Email: $email
Subject: $subject

Message:
$message

---
Sent from: {$_SERVER['HTTP_HOST']}
IP Address: {$_SERVER['REMOTE_ADDR']}
User Agent: {$_SERVER['HTTP_USER_AGENT']}
Time: " . date('Y-m-d H:i:s') . "
";

$headers = [
    'From: ' . $site_name . ' <' . $from_email . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion()
];

// Send email
$mail_sent = mail($to_email, $email_subject, $email_body, implode("\r\n", $headers));

if ($mail_sent) {
    // Log successful submission and update rate limit
    $rates[$ip . '_' . $current_time] = $current_time;
    file_put_contents($rate_limit_file, json_encode($rates), LOCK_EX);
    
    // Log success
    error_log("Contact form submission successful - From: $email, IP: " . $_SERVER['REMOTE_ADDR']);
    
    echo json_encode([
        'success' => true, 
        'message' => 'Thank you for your message! I will get back to you soon.'
    ]);
} else {
    error_log("Failed to send email - From: $email, IP: " . $_SERVER['REMOTE_ADDR']);
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'Sorry, there was an error sending your message. Please try again later.'
    ]);
}
?>