'use client';

import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import { services } from '@/lib/constants';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Microscope, Dna, Star, Layers, Info, BookOpen } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useEffect } from 'react';

const DetailSection: React.FC<{ title: string; children: React.ReactNode; Icon: React.ElementType, className?: string }> = ({ title, children, Icon, className }) => (
  <Card className={className}>
    <CardHeader className="flex flex-row items-center space-x-3">
      <Icon className="h-8 w-8 text-accent" />
      <CardTitle className="font-serif text-2xl text-primary m-0">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      {children}
    </CardContent>
  </Card>
);

const QuoteSection: React.FC<{ quote: { text: Record<'en' | 'id', string>; author: Record<'en' | 'id', string> } }> = ({ quote }) => {
    const { t } = useLanguage();
    return (
        <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-8">
            <blockquote className="text-xl italic text-primary/90">
                "{t(quote.text)}"
            </blockquote>
            <cite className="block text-right mt-4 text-base font-semibold text-accent not-italic">— {t(quote.author)}</cite>
        </div>
    );
};


export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { t } = useLanguage();
  const service = services.find((s) => s.id === slug);

  useEffect(() => {
    if (service) {
      document.title = `${service.title} - Altruva Treatments`;
    }
  }, [service]);

  if (!service) {
    notFound();
  }

  return (
    <>
      <SectionWrapper className="bg-secondary/30 pt-24 md:pt-32 pb-12">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-accent font-semibold mb-2">{service.group}</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">{service.title}</h1>
            {service.subtitle && <p className="text-xl md:text-2xl text-foreground/80">{t(service.subtitle)}</p>}
          </div>
      </SectionWrapper>

      <SectionWrapper className="pt-0">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardContent className="p-0">
                  <div className="relative aspect-video rounded-t-lg overflow-hidden">
                    <Image
                      src={service.imageSrc}
                      alt={service.title}
                      fill
                      className="object-cover"
                      data-ai-hint={service.imageHint}
                      priority
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="font-serif text-2xl text-primary mb-4">{t({en: "About This Treatment", id: "Tentang Perawatan Ini"})}</h2>
                    <div className="prose prose-lg max-w-none text-foreground/80" dangerouslySetInnerHTML={{ __html: t(service.longDescription || service.description) }} />
                  </div>
              </CardContent>
            </Card>

            {service.quote && <QuoteSection quote={service.quote} />}

            {service.whatIsIt && (
              <DetailSection title={t(service.whatIsIt.title)} Icon={Microscope}>
                <div className="prose max-w-none text-foreground/80" dangerouslySetInnerHTML={{ __html: t(service.whatIsIt.description) }} />
              </DetailSection>
            )}

            {service.mechanism && (
              <DetailSection title={t({en: "Mechanism of Action", id: "Mekanisme Aksi"})} Icon={Dna}>
                <ul className="space-y-4 pl-4">
                  {service.mechanism.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 shrink-0" />
                      <div>
                        <h4 className="font-semibold text-primary">{t(item.title)}</h4>
                        <p className="text-foreground/70">{t(item.description)}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </DetailSection>
            )}

             {service.benefits && (
              <DetailSection title={t({en: "Key Benefits", id: "Manfaat Utama"})} Icon={Star}>
                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 pl-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 shrink-0" />
                      <span className="text-foreground/80">{t(benefit)}</span>
                    </li>
                  ))}
                </ul>
              </DetailSection>
            )}

            {service.howItDiffers && (
               <DetailSection title={t({en: "How It Differs", id: "Perbedaannya"})} Icon={Layers}>
                 <p className="text-foreground/80">{t(service.howItDiffers)}</p>
               </DetailSection>
            )}

            {service.whyLoveIt && service.whyLoveIt.length > 0 && (
               <DetailSection title={t({en: "Why Patients Love It", id: "Mengapa Pasien Menyukainya"})} Icon={Info}>
                 <ul className="space-y-2 pl-4">
                  {service.whyLoveIt.map((item, index) => (
                     <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-accent mr-3 mt-1 shrink-0" />
                      <span className="text-sm text-foreground/80" dangerouslySetInnerHTML={{ __html: t(item) }}></span>
                    </li>
                  ))}
                 </ul>
               </DetailSection>
            )}
          </div>

          <aside className="lg:col-span-1 space-y-8 sticky top-24">
            
            {service.indications && service.indications.length > 0 && (
                <DetailSection title={t({en: "Best For", id: "Terbaik Untuk"})} Icon={Info}>
                    <ul className="space-y-2 pl-4">
                        {service.indications.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-accent mr-3 mt-1 shrink-0" />
                                <span className="text-sm text-foreground/80">{t(item)}</span>
                            </li>
                        ))}
                    </ul>
                </DetailSection>
            )}

            {service.protocol && (
               <DetailSection title={t({en: "Protocol Overview", id: "Tinjauan Protokol"})} Icon={BookOpen}>
                <ul className="space-y-3">
                  {service.protocol.map((item, index) => (
                    <li key={index} className="flex justify-between items-center text-sm">
                      <span className="font-semibold text-primary/90">{t(item.label)}:</span>
                      <span className="text-right text-foreground/80">{t(item.value)}</span>
                    </li>
                  ))}
                </ul>
               </DetailSection>
            )}

          </aside>

        </div>
      </SectionWrapper>
    </>
  );
}
