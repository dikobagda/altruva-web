
'use client';

import Image from 'next/image';
import Link from 'next/link';
import PageTitle from '@/components/shared/PageTitle';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Star, Zap, Gem, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function FlyerPage() {
  const { t } = useLanguage();

  const featuredOfferings = [
    {
      Icon: Star,
      title: { en: 'A.R.T Lift PRO', id: 'A.R.T Lift PRO' },
      description: { en: 'Signature ultrasound lifting for deep, structural rejuvenation.', id: 'Pengangkatan ultrasound khas untuk peremajaan struktural yang mendalam.' },
      href: '/services/art-lyft',
    },
    {
      Icon: Zap,
      title: { en: 'Gorgeous Lyft by dr. Aldisa', id: 'Gorgeous Lyft oleh dr. Aldisa' },
      description: { en: 'Liquid collagen bio-activator for natural firmness and glow.', id: 'Bio-aktivator kolagen cair untuk kekencangan dan kilau alami.' },
      href: '/services/gorgeous-lyft-rejuvenation',
    },
    {
      Icon: Gem,
      title: { en: '369 Harmony™', id: '369 Harmony™' },
      description: { en: 'Your intelligent, year-round roadmap to lasting beauty.', id: 'Peta jalan cerdas Anda sepanjang tahun menuju kecantikan abadi.' },
      href: '/about-us/369-harmony',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="!py-0 min-h-[70vh] md:min-h-[80vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://placehold.co/1200x800.png"
            alt={t({ en: 'An elegant woman with radiant skin', id: 'Wanita elegan dengan kulit bercahaya' })}
            fill
            className="object-cover"
            data-ai-hint="elegant woman radiant skin"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
        </div>
        <div className="relative z-20 text-center max-w-3xl p-4">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-4 text-shadow">
            {t({ en: 'Reveal Your Regenerative Beauty', id: 'Ungkap Kecantikan Regeneratif Anda' })}
          </h1>
          <p className="text-lg md:text-xl text-foreground/90 mb-8 text-shadow-sm">
            {t({ en: 'Experience the art of aesthetic science at Altruva, where your unique beauty is enhanced, never changed.', id: 'Rasakan seni ilmu estetika di Altruva, di mana kecantikan unik Anda disempurnakan, bukan diubah.' })}
          </p>
          <Button asChild size="lg">
            <Link href="/book-appointment">{t({ en: 'Book Your Consultation', id: 'Pesan Konsultasi Anda' })}</Link>
          </Button>
        </div>
      </SectionWrapper>

      {/* Featured Offerings Section */}
      <SectionWrapper id="offerings">
        <PageTitle
          title={t({ en: 'The Altruva Difference', id: 'Perbedaan Altruva' })}
          subtitle={t({ en: 'Signature treatments designed for natural, elegant, and lasting results.', id: 'Perawatan khas yang dirancang untuk hasil yang alami, elegan, dan tahan lama.' })}
        />
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredOfferings.map((offering) => (
            <Card key={t(offering.title)} className="text-center shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="flex-grow">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                  <offering.Icon className="w-8 h-8" />
                </div>
                <CardTitle className="font-serif text-2xl text-primary">{t(offering.title)}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/80">{t(offering.description)}</p>
              </CardContent>
              <div className="p-6 pt-0">
                  <Button asChild variant="link" className="font-semibold text-primary">
                      <Link href={offering.href}>{t({ en: 'Learn More', id: 'Pelajari Lebih Lanjut' })} <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Final CTA Section */}
      <SectionWrapper className="bg-primary text-primary-foreground">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">{t({ en: 'Begin Your Transformation', id: 'Mulailah Transformasi Anda' })}</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            {t({ en: 'Your journey to enhanced beauty and confidence starts here. Schedule your private consultation with our team of experts today.', id: 'Perjalanan Anda menuju kecantikan dan kepercayaan diri yang lebih baik dimulai di sini. Jadwalkan konsultasi pribadi Anda dengan tim ahli kami hari ini.' })}
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link href="/book-appointment">{t({ en: 'Request a Consultation', id: 'Minta Konsultasi' })}</Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
