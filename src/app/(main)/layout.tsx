
"use client";

import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingAISkinAnalysisButton from '@/components/layout/FloatingAISkinAnalysisButton';
import FloatingWhatsAppButton from '@/components/layout/FloatingWhatsAppButton';
import Preloader from '@/components/layout/Preloader';
import { usePathname } from 'next/navigation';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Hide preloader after a delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, [pathname]); // Rerun on path change

  return (
    <div className="flex flex-col min-h-screen">
      <Preloader isLoading={isLoading} />
      <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsAppButton />
        <FloatingAISkinAnalysisButton />
      </div>
    </div>
  );
}
