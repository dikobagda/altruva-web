
"use client";

import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppClickTracker from '@/components/analytics/WhatsAppClickTracker';
import FloatingWhatsAppButton from '@/components/layout/FloatingWhatsAppButton';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <WhatsAppClickTracker />
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
        <FloatingWhatsAppButton />
      </div>
    </LanguageProvider>
  );
}
