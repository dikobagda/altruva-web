
'use client';

import Link from 'next/link';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Newspaper, Loader2 } from 'lucide-react';
import PageTitle from '@/components/shared/PageTitle';
import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';

const pressFeatures = [
  {
    publication: 'Fajar',
    title: 'Ingin Awet Muda? Lakukan Perawatan Regeneratif dan Filosofi Quiet Luxury',
    link: 'https://harian.fajar.co.id/2025/08/20/ingin-awet-muda-lakukan-perawatan-regeneratif-dan-filosofi-quiet-luxury/',
    type: 'article'
  },
  {
    publication: 'Lampung Post',
    title: 'Altruva Mengukir Keindahan Alami, Bukan Sekadar Mengubah Wajah',
    link: 'https://lampost.co/ekonomi-dan-bisnis/altruva-mengukir-keindahan-alami-bukan-sekadar-mengubah-wajah',
    type: 'article'
  },
  {
    publication: 'Warta Pontianak',
    title: 'Regeneratif dan Filosofi Quiet Luxury',
    link: 'https://wartapontianak.pikiran-rakyat.com/nasional/pr-1179596920/regeneratif-dan-filosofi-quiet-luxury?page=all',
    type: 'article'
  },
  {
    publication: 'Barito Post',
    title: 'Regeneratif dan Filosofi Quiet Luxury',
    link: 'https://www.baritopost.co.id/regeneratif-dan-filos',
    type: 'article'
  },
  {
    publication: 'Radar Lampung',
    title: 'Regeneratif dan Filosofi Quiet Luxury',
    link: 'https://radarlampung.bacakoran.co/read/25096/regeneratif-dan-filosofi-quiet-luxury',
    type: 'article'
  },
  {
    publication: 'Radar Banjarmasin',
    title: 'Regeneratif dan Filosofi Quiet Luxury',
    link: 'https://radarbanjarmasin.jawapos.com/ragam-info/1976477511/regeneratif-dan-filosofi-quiet-luxury?page=all',
    type: 'article'
  },
  {
    publication: 'Manado Post',
    title: 'Altruva Menghadirkan Estetika Regeneratif dengan Filosofi Quiet Luxury',
    link: 'https://manadopost.jawapos.com/ekbis/286477540/altruva-menghadirkan-estetika-regeneratif-dengan-filosofi-quiet-luxury',
    type: 'article'
  },
  {
    publication: 'Pontianak Post',
    title: 'Mengenal Autentisitas yang Jadi Fokus Layanan Estetika di Klinik Altruva',
    link: 'https://pontianakpost.jawapos.com/kesehatan/1466480189/mengenal-autentisitas-yang-jadi-fokus-layanan-estetika-di-klinik-altruva',
    type: 'article'
  },
  {
    publication: 'Balikpapan Pos',
    title: 'Altruva Aesthetic Clinic, Klinik Estetika Regeneratif Berkelas dengan Filosofi Quiet Luxury',
    link: 'https://www.balpos.com/ekonomi/1796482186/altruva-aesthetic-clinic-klinik-estetika-regeneratif-berkelas-dengan-filosofi-quiet-luxury',
    type: 'article'
  },
  {
    publication: 'Samarinda Pos',
    title: 'Regeneratif dan Filosofi Quiet Luxury',
    link: 'https://www.sapos.co.id/breaking-news/2456482231/regeneratif-dan-filosofi-quiet-luxury?page=all',
    type: 'article'
  },
  {
    publication: 'GoPos.id',
    title: 'Altruva Aesthetic Clinic Hadirkan Estetika Regeneratif dengan Sentuhan Quiet Luxury',
    link: 'https://gopos.id/altruva-aesthetic-clinic-hadirkan-estetika-regeneratif-dengan-sentuhan-quiet-luxury/',
    type: 'article'
  },
  {
    publication: 'Barometer News',
    title: 'Regeneratif dan Filosofi Quiet Luxury',
    link: 'https://barometernewsgo.com/2025/08/25/regeneratif-dan-filosofi-quiet-luxury/',
    type: 'article'
  },
  {
    publication: 'Radar Balikpapan',
    title: 'Altruva Aesthetic Clinic Kini Hadir di Jaksel',
    link: 'https://radarbalikpapan.com/altruva-aesthetic-clinic-kini-hadir-di-jaksel/',
    type: 'article'
  },
  {
    publication: 'Pojok Satu Sulsel',
    title: 'dr. Aldisa Buka Altruva Aesthetic Clinic, Hadir dengan Perawatan Quiet Luxury di Senopati',
    link: 'https://sulsel.pojoksatu.id/lifestyle/1146483693/dr-aldisa-buka-altruva-aesthetic-clinic-hadir-dengan-perawatan-quiet-luxury-di-senopati',
    type: 'article'
  },
  {
    publication: 'Kaltim Post',
    title: 'Enggak Perlu ke Luar Negeri, Rasakan Sensasi Perawatan Internasional di Altruva Aesthetic Clinic',
    link: 'https://kaltimpost.jawapos.com/selebritas/2386491466/enggak-perlu-ke-luar-negeri-rasakan-sensasi-perawatan-internasional-di-altruva-aesthetic-clinic',
    type: 'article'
  },
  {
    publication: 'Antara News Manado',
    title: 'Dokter Estetika: Kecantikan Perempuan Melalui Pendekatan Regeneratif',
    link: 'https://manado.antaranews.com/berita/292417/dokter-estetika-kecantikan-perempuan-melalui-pendekatan-regeneratif',
    type: 'article'
  },
];

const ITEMS_PER_PAGE = 8;

export default function NewsAndMediaPage() {
  const { t } = useLanguage();
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleItems(prev => prev + ITEMS_PER_PAGE);
      setIsLoading(false);
    }, 500); // Simulate network delay
  };

  return (
    <>
      <SectionWrapper>
        <PageTitle 
          title={t({ en: "Altruva in the Media", id: "Altruva di Media" })}
          subtitle={t({ en: "Discover what the press is saying about our innovative treatments and philosophy.", id: "Temukan apa yang media katakan tentang perawatan dan filosofi inovatif kami." })}
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {pressFeatures.slice(0, visibleItems).map((feature, index) => (
            <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex-grow">
                    <div className="flex items-center space-x-3 mb-2">
                         <Newspaper className="h-6 w-6 text-accent"/>
                        <h3 className="font-bold text-lg text-primary">{feature.publication}</h3>
                    </div>
                    <CardTitle className="font-serif text-xl leading-tight">{feature.title}</CardTitle>
                </CardHeader>
                <div className="p-6 pt-0 mt-auto">
                    <Button asChild className="w-full font-semibold">
                        <Link href={feature.link} target="_blank" rel="noopener noreferrer">
                            {t({ en: "Read More", id: "Baca Selengkapnya" })}
                        </Link>
                    </Button>
                </div>
            </Card>
          ))}
        </div>

        {visibleItems < pressFeatures.length && (
          <div className="text-center mt-12">
            <Button onClick={loadMore} disabled={isLoading} size="lg">
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {t({ en: 'Load More', id: 'Muat Lebih Banyak' })}
            </Button>
          </div>
        )}
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="bg-primary text-primary-foreground">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">{t({ en: "Stay Connected", id: "Tetap Terhubung" })}</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            {t({ en: "Follow us on social media for real-time updates and daily inspiration. For press inquiries, please contact us directly.", id: "Ikuti kami di media sosial untuk pembaruan waktu nyata dan inspirasi harian. Untuk pertanyaan pers, silakan hubungi kami secara langsung." })}
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link href="/contact">{t({ en: "Contact Us", id: "Hubungi Kami" })}</Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
