
"use client";

import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingAISkinAnalysisButton from '@/components/layout/FloatingAISkinAnalysisButton';
import FloatingWhatsAppButton from '@/components/layout/FloatingWhatsAppButton';
import Preloader from '@/components/layout/Preloader';
import { usePathname } from 'next/navigation';
import { LanguageProvider } from '@/context/LanguageContext';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Let's rely on actual loading state rather than an arbitrary timer
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      // Fallback timeout in case the load event is finicky
      const timer = setTimeout(handleLoad, 500); 
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(timer);
      };
    }
  }, [pathname]);

  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <Preloader isLoading={isLoading} />
        <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
          <Header />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
          <FloatingWhatsAppButton />
          <FloatingAISkinAnalysisButton />
        </div>
      </div>
    </LanguageProvider>
  );
}
