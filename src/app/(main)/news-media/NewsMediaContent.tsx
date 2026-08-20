'use client';

import Link from 'next/link';
import Image from 'next/image';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Newspaper, Loader2, BookOpen, Calendar } from 'lucide-react';
import PageTitle from '@/components/shared/PageTitle';
import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';

interface EnrichedPressFeature {
  publication: string;
  title: string;
  link: string;
  type: string;
  date?: string;
  slug: string;
  thumbnail: string | null;
  excerpt: string | null;
}

interface NewsMediaContentProps {
  initialFeatures: EnrichedPressFeature[];
}

const ITEMS_PER_PAGE = 8;

const formatDate = (dateStr: string) => {
  if (!dateStr) return '';
  const [year, month, day] = dateStr.split('-');
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return `${months[parseInt(month, 10) - 1]} ${parseInt(day, 10)}, ${year}`;
};

export default function NewsMediaContent({ initialFeatures }: NewsMediaContentProps) {
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
      <SectionWrapper className="pt-24 md:pt-32">
        <PageTitle 
          as="h1"
          title={t({ en: "Altruva in the Media", id: "Altruva di Media" })}
          subtitle={t({ 
            en: "Discover what the press is saying about our innovative treatments and philosophy.", 
            id: "Temukan apa yang media katakan tentang perawatan dan filosofi inovatif kami." 
          })}
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {initialFeatures.slice(0, visibleItems).map((feature, index) => (
            <Card key={feature.slug || index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-secondary/20 hover:-translate-y-1">
              <div className="relative w-full aspect-video bg-muted flex items-center justify-center overflow-hidden">
                {feature.thumbnail ? (
                  <img
                    src={feature.thumbnail}
                    alt={feature.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement | null;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div
                  className="flex flex-col items-center justify-center text-muted-foreground p-4 w-full h-full"
                  style={{ display: feature.thumbnail ? 'none' : 'flex' }}
                >
                  <Newspaper className="h-12 w-12 text-accent/40 mb-2" />
                  <span className="text-xs uppercase tracking-wider font-semibold">{feature.publication}</span>
                </div>
              </div>

              <CardHeader className="flex-grow p-6 pb-4">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-accent/10 text-accent uppercase tracking-wider">
                    {feature.publication}
                  </span>
                  {feature.date && (
                    <span className="flex items-center text-xs text-muted-foreground gap-1 shrink-0">
                      <Calendar className="h-3.5 w-3.5" />
                      {formatDate(feature.date)}
                    </span>
                  )}
                </div>
                <CardTitle className="font-serif text-lg leading-snug line-clamp-2 text-primary hover:text-accent transition-colors">
                  <Link href={`/news-media/${feature.slug}`}>
                    {feature.title}
                  </Link>
                </CardTitle>
              </CardHeader>

              <CardContent className="px-6 pb-6 pt-0 flex flex-col justify-between h-full">
                <p className="text-foreground/70 text-sm line-clamp-3 mb-6 leading-relaxed">
                  {feature.excerpt || t({
                    en: `Read the latest coverage from ${feature.publication} regarding Altruva's treatments and quiet luxury aesthetics philosophy.`,
                    id: `Baca liputan terbaru dari ${feature.publication} mengenai perawatan Altruva dan filosofi estetika quiet luxury.`
                  })}
                </p>
                <Button asChild className="w-full font-semibold mt-auto" variant="outline">
                  <Link href={`/news-media/${feature.slug}`}>
                    <BookOpen className="mr-2 h-4 w-4" /> {t({ en: "Read Article", id: "Baca Artikel" })}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {visibleItems < initialFeatures.length && (
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
            {t({ 
              en: "Follow us on social media for real-time updates and daily inspiration. For press inquiries, please contact us directly.", 
              id: "Ikuti kami di media sosial untuk pembaruan waktu nyata dan inspirasi harian. Untuk pertanyaan pers, silakan hubungi kami secara langsung." 
            })}
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link href="/contact">{t({ en: "Contact Us", id: "Hubungi Kami" })}</Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
