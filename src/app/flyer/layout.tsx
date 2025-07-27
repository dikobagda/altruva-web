
"use client";

import { useState, useEffect } from 'react';
import Footer from '@/components/layout/Footer';
import Preloader from '@/components/layout/Preloader';
import { usePathname } from 'next/navigation';
import { LanguageProvider } from '@/context/LanguageContext';

export default function FlyerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <Preloader isLoading={isLoading} />
        <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}
