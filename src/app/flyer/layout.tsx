
"use client";

import { useState, useEffect } from 'react';
import Footer from '@/components/layout/Footer';
import Preloader from '@/components/layout/Preloader';
import { usePathname } from 'next/navigation';
import { LanguageProvider } from '@/context/LanguageContext';
import FloatingWhatsAppButton from '@/components/layout/FloatingWhatsAppButton';
import Script from 'next/script';

export default function FlyerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <LanguageProvider>
      {/* Google Tag Manager */}
      <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-M5XNZWDJ');`}
      </Script>
      {/* End Google Tag Manager */}
       {/* Google Tag Manager (noscript) */}
       <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M5XNZWDJ"
        height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        {/* End Google Tag Manager (noscript) */}
      <div className="flex flex-col min-h-screen">
        <Preloader isLoading={isLoading} />
        <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
          <main className="flex-grow">{children}</main>
          {isMounted && <Footer />}
          <FloatingWhatsAppButton size="large" />
        </div>
      </div>
       {/* Google Analytics */}
       <Script 
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-58LTL5Q4HE"
        />
        <Script 
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-58LTL5Q4HE');
          `}
        </Script>
    </LanguageProvider>
  );
}
