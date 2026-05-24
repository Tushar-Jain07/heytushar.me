import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <meta name="title" content="Tushar Jain - Full Stack Developer Portfolio" />
        <meta name="description" content="Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Based in Ahmedabad, India. Available for freelance projects and collaborations." />
        <meta name="keywords" content="Tushar Jain, Full Stack Developer, React, Next.js, Node.js, JavaScript, TypeScript, Web Developer, Portfolio, Ahmedabad, India, Freelance Developer" />
        <meta name="author" content="Tushar Jain" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://heytushar.me/" />
        <meta property="og:title" content="Tushar Jain - Full Stack Developer Portfolio" />
        <meta property="og:description" content="Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Building impactful digital experiences." />
        <meta property="og:image" content="https://heytushar.me/og-image.svg" />
        <meta property="og:site_name" content="Tushar Jain Portfolio" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://heytushar.me/" />
        <meta property="twitter:title" content="Tushar Jain - Full Stack Developer Portfolio" />
        <meta property="twitter:description" content="Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Building impactful digital experiences." />
        <meta property="twitter:image" content="https://heytushar.me/og-image.svg" />
        
        {/* Preconnect to domains for faster resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload critical fonts */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" 
          rel="stylesheet"
        />
        
        {/* PWA Meta Tags */}
        <meta name="application-name" content="Tushar Jain Portfolio" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Tushar Jain" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Favicon - Using SVG for better compatibility */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://heytushar.me/" />
        
        {/* Service Worker for PWA offline support */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(function(reg) {
                    console.log('SW registered:', reg.scope);
                  }).catch(function(err) {
                    console.log('SW registration failed:', err);
                  });
                });
              }
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 