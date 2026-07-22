'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Download, ArrowLeft, MessageCircle } from 'lucide-react';

export default function ThankYouPage() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const shouldDownload = searchParams.get('download') !== 'false';
  const whatsappLink = "https://wa.me/6281216119392?text=Hai%20Altruva,%20saya%20sudah%20mendownload%20Complimentary%20Guide.%20Saya%20tertarik%20tahu%20lebih%20lanjut%20tentang%20treatment%20di%20sini";

  useEffect(() => {
    if (shouldDownload) {
      // Trigger the file download
      const link = document.createElement('a');
      link.href = '/complimentary_book.jpg';
      link.setAttribute('download', 'complimentary_book.jpg');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, [shouldDownload]);

  return (
    <SectionWrapper className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4 max-w-xl text-center">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-primary/10 relative overflow-hidden">
          {/* Top decorative accent */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#4a301b] via-[#8c6239] to-[#4a301b]" />

          {/* Success Checkmark Circle with ripple animation */}
          <div className="relative flex justify-center mb-6">
            <div className="absolute inset-0 m-auto w-20 h-20 bg-emerald-100 rounded-full animate-ping opacity-25" />
            <div className="relative w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-200">
              <CheckCircle2 className="w-12 h-12 text-emerald-600" />
            </div>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl text-primary font-bold mb-4 tracking-tight">
            {t({ en: 'Thank You!', id: 'Terima Kasih!' })}
          </h1>
          
          <p className="text-foreground/80 text-lg mb-8 leading-relaxed">
            {t({ 
              en: 'Your complimentary guide has been prepared. The download should start automatically in a few seconds.', 
              id: 'Complimentary guide Anda telah disiapkan. Unduhan akan berjalan secara otomatis dalam beberapa detik.' 
            })}
          </p>

          {/* Fallback download button */}
          <div className="bg-secondary/40 rounded-2xl p-4 mb-8 border border-secondary/60 flex flex-col items-center gap-2">
            <p className="text-sm font-medium text-foreground/75">
              {t({ en: "If your download didn't start, please click below:", id: 'Jika unduhan Anda belum berjalan, silakan klik tombol di bawah:' })}
            </p>
            <Button asChild size="sm" className="bg-[#4a301b] hover:bg-[#5a402b] text-white gap-2 rounded-full px-6">
              <a href="/complimentary_book.jpg" download="complimentary_book.jpg">
                <Download className="w-4 h-4" />
                {t({ en: 'Download Guide', id: 'Unduh Panduan' })}
              </a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild variant="outline" className="w-full sm:w-auto border-[#4a301b] text-[#4a301b] hover:bg-[#4a301b]/5 gap-2 rounded-full py-6 px-8">
              <Link href="/flyer">
                <ArrowLeft className="w-4 h-4" />
                {t({ en: 'Back to Flyer', id: 'Kembali ke Flyer' })}
              </Link>
            </Button>

            <Button asChild className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba5a] text-white gap-2 rounded-full py-6 px-8">
              <Link href={whatsappLink} target="_blank">
                <MessageCircle className="w-4 h-4" />
                {t({ en: 'Chat with Us', id: 'Hubungi Kami via WA' })}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
