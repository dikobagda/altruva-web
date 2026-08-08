
"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { LanguageProvider } from '@/context/LanguageContext';
import dynamic from 'next/dynamic';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Preloader from '@/components/layout/Preloader';
import WhatsAppClickTracker from '@/components/analytics/WhatsAppClickTracker';

// Only dynamically import heavy secondary widgets
const FloatingWhatsAppButton = dynamic(() => import('@/components/layout/FloatingWhatsAppButton'), { ssr: false });

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
        <WhatsAppClickTracker />
        <Preloader isLoading={isLoading} />
        <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
          <Header />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
          <FloatingWhatsAppButton />
        </div>
      </div>
    </LanguageProvider>
  );
}
