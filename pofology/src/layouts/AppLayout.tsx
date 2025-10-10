import React from 'react';
import Head from 'next/head';
import Menu from '@/components/partials/Menu';
import Footer from '@/components/partials/Footer';
import ScrollToTop from 'react-scroll-to-top';
import { FiArrowUp } from 'react-icons/fi';

interface Props {
  title?: string;
  children: React.ReactNode;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

const AppLayout: React.FC<Props> = ({ 
  children, 
  title,
  description = 'Experienced Salesforce Commerce Cloud Tech Lead and Architect specializing in B2C Commerce, JavaScript development, and e-commerce solutions. Available for consulting and development projects.',
  keywords = 'Salesforce Commerce Cloud, B2C Commerce, Tech Lead, Architect, JavaScript Developer, E-commerce, SFCC, Salesforce Developer, Commerce Cloud Einstein, Agentforce',
  ogImage = '/images/og-image.webp',
  canonical
}) => {
  const pageTitle = title || 'Oleksandr Katerynchuk - Salesforce Commerce Cloud Tech Lead';
  const siteUrl = 'https://www.okater.com';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    'name': 'Oleksandr Katerynchuk',
    'alternateName': 'okater',
    'jobTitle': 'Salesforce Commerce Cloud Tech Lead',
    'description': description,
    'url': siteUrl,
    'image': `${siteUrl}${ogImage}`,
    'sameAs': [
      'https://www.linkedin.com/in/okater/',
      'https://github.com/okater/'
    ],
    'knowsAbout': [
      'Salesforce Commerce Cloud',
      'B2C Commerce',
      'JavaScript',
      'TypeScript',
      'E-commerce Development',
      'Technical Leadership',
      'Software Architecture'
    ],
    'hasCredential': [
      {
        '@type': 'EducationalOccupationalCredential',
        'name': 'Salesforce Certified B2C Commerce Architect'
      },
      {
        '@type': 'EducationalOccupationalCredential', 
        'name': 'Salesforce Certified B2C Commerce Developer'
      },
      {
        '@type': 'EducationalOccupationalCredential',
        'name': 'Salesforce Certified JavaScript Developer'
      },
      {
        '@type': 'EducationalOccupationalCredential', 
        'name': 'Salesforce Certified Agentforce Specialist'
      }
    ],
    'worksFor': {
      '@type': 'Organization',
      'name': 'Freelance/Consulting'
    }
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Oleksandr Katerynchuk" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={fullCanonical} />
        
        {/* Favicons */}
        <link rel="icon" type="image/x-icon" href="/images/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/favicons/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/images/favicons/android-chrome-512x512.png" />
        
        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={fullCanonical} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${siteUrl}${ogImage}`} />
        <meta property="og:image:alt" content="Oleksandr Katerynchuk - Salesforce Commerce Cloud Tech Lead" />
        <meta property="og:site_name" content="Oleksandr Katerynchuk Portfolio" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={fullCanonical} />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={`${siteUrl}${ogImage}`} />
        <meta property="twitter:image:alt" content="Oleksandr Katerynchuk - Salesforce Commerce Cloud Tech Lead" />
        
        {/* LinkedIn */}
        <meta property="linkedin:owner" content="okater" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#3B82F6" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        <meta name="application-name" content="Oleksandr Katerynchuk Portfolio" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData, null, 2)
          }}
        />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload critical fonts */}
        <link 
          rel="preload" 
          href="/fonts/rubik-v14-latin-500.woff2" 
          as="font" 
          type="font/woff2" 
          crossOrigin="anonymous"
        />
        <link 
          rel="preload" 
          href="/fonts/rubik-v14-latin-600.woff2" 
          as="font" 
          type="font/woff2" 
          crossOrigin="anonymous"
        />
        
        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="//www.linkedin.com" />
        <link rel="dns-prefetch" href="//github.com" />
        
        {/* Performance hints */}
        <meta httpEquiv="X-DNS-Prefetch-Control" content="on" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <div className="flex min-h-screen flex-col">
        {/* Skip to main content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:bg-primary-600 focus:text-white focus:px-4 focus:py-2 focus:no-underline"
        >
          Skip to main content
        </a>
        <ScrollToTop
          smooth
          className="fixed bottom-16 right-8 z-10 cursor-pointer rounded-lg bg-primary-500 p-3 text-white transition-colors duration-150 hover:bg-primary-600 "
          component={
            <div className="flex justify-center">
              <FiArrowUp />
            </div>
          }
        />
        <Menu />
        <main id="main-content" className="mt-16">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
