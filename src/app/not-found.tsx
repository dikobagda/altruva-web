"use client";

import Link from 'next/link';
import { LanguageProvider, useLanguage } from '@/context/LanguageContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

function NotFoundContent() {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center py-24 px-4">
        <div className="text-center max-w-xl mx-auto">
          <h1 className="font-serif text-xl md:text-2xl font-semibold text-foreground">
            404 | {t({ en: 'Oops, this page seems not found.', id: 'Ups, sepertinya halaman ini tidak ditemukan.' })}
          </h1>
          <p className="text-muted-foreground mt-3">
            {t({
              en: "We couldn't find what you're looking for. But don't worry — your beauty journey continues right here. Let's get you back on track.",
              id: 'Kami tidak menemukan yang Anda cari. Tapi tenang — perjalanan kecantikan Anda tetap berlanjut di sini. Mari kita kembali ke jalurnya.',
            })}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Button asChild size="lg">
              <Link href="/">{t({ en: 'Back to Home', id: 'Kembali ke Beranda' })}</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/treatments">{t({ en: 'View Treatments', id: 'Lihat Treatment' })}</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function NotFound() {
  return (
    <LanguageProvider>
      <NotFoundContent />
    </LanguageProvider>
  );
}