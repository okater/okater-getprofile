import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          {/* DNS Prefetch for external resources - improves request latency */}
          <link rel="dns-prefetch" href="//fonts.googleapis.com" />
          <link rel="dns-prefetch" href="//fonts.gstatic.com" />
          <link rel="dns-prefetch" href="//www.linkedin.com" />
          <link rel="dns-prefetch" href="//github.com" />
          <link rel="dns-prefetch" href="//www.salesforce.com" />
          
          {/* Performance optimization hints */}
          <meta httpEquiv="x-dns-prefetch-control" content="on" />
          <meta name="format-detection" content="telephone=no" />
          
          {/* Critical font loading with font-display: swap */}
          <style dangerouslySetInnerHTML={{
            __html: `
              /* Critical font loading optimization */
              @font-face {
                font-family: 'Rubik';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: url('/fonts/rubik-v14-latin-regular.woff2') format('woff2');
              }
              @font-face {
                font-family: 'Rubik';
                font-style: normal;
                font-weight: 600;
                font-display: swap;
                src: url('/fonts/rubik-v14-latin-600.woff2') format('woff2');
              }
              @font-face {
                font-family: 'Rubik';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: url('/fonts/rubik-v14-latin-700.woff2') format('woff2');
              }
              
              /* Critical above-the-fold styles */
              body {
                font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                margin: 0;
                padding: 0;
              }
              
              .hero {
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
              }
            `
          }} />
        </Head>
        <body className="antialiased bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}