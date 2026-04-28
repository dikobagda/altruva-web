
"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { LanguageProvider } from '@/context/LanguageContext';
import dynamic from 'next/dynamic';

// Dynamic imports to reduce initial bundle size and "unused JS"
const Header = dynamic(() => import('@/components/layout/Header'), { ssr: true });
const Footer = dynamic(() => import('@/components/layout/Footer'), { ssr: true });
const FloatingAISkinAnalysisButton = dynamic(() => import('@/components/layout/FloatingAISkinAnalysisButton'), { ssr: false });
const FloatingWhatsAppButton = dynamic(() => import('@/components/layout/FloatingWhatsAppButton'), { ssr: false });
const Preloader = dynamic(() => import('@/components/layout/Preloader'), { ssr: true });

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <Preloader isLoading={isLoading} />
        <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
          <Header />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
          <div className="hidden md:block">
            <FloatingWhatsAppButton />
          </div>
          <FloatingAISkinAnalysisButton />
        </div>
      </div>
    </LanguageProvider>
  );
}
