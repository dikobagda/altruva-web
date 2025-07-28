
'use client';

import Image from 'next/image';
import Link from 'next/link';
import PageTitle from '@/components/shared/PageTitle';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Star, Zap, Gem, ArrowRight, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function FlyerPage() {
  const { t } = useLanguage();

  const featuredOfferings = [
    {
      imageSrc: '/images/softwave.jpg',
      imageHint: 'ultrasound facelift',
      title: { en: 'A.R.T Lift by Sofwave', id: 'A.R.T Lift PRO' },
      description: { en: 'Signature ultrasound lifting for deep, structural rejuvenation.', id: 'Pengangkatan ultrasound khas untuk peremajaan struktural yang mendalam.' },
      href: '/services/art-lyft',
    },
    {
      imageSrc: '/images/gouri.jpg',
      imageHint: 'biostimulator injection',
      title: { en: 'Gorgeous Lyft by dr. Aldisa', id: 'Gorgeous Lyft oleh dr. Aldisa' },
      description: { en: 'Liquid collagen bio-activator for natural firmness and glow.', id: 'Bio-aktivator kolagen cair untuk kekencangan dan kilau alami.' },
      href: '/services/gorgeous-lyft-rejuvenation',
    },
    {
      imageSrc: '/images/369.webp',
      imageHint: 'holistic skincare diagram',
      title: { en: '369 Harmony™', id: '369 Harmony™' },
      description: { en: 'Your intelligent, year-round roadmap to lasting beauty.', id: 'Peta jalan cerdas Anda sepanjang tahun menuju kecantikan abadi.' },
      href: '/about-us/369-harmony',
    },
  ];

  const whyChooseUs = [
      {
          Icon: Heart,
          title: {en: "Expert-Led Care", id: "Perawatan oleh Ahli"},
          description: {en: "Led by dr. Olivia Aldisa, an international KOL and expert in regenerative aesthetics.", id: "Dipimpin oleh dr. Olivia Aldisa, seorang KOL internasional dan ahli estetika regeneratif."},
      },
      {
          Icon: ShieldCheck,
          title: {en: "Advanced Technology", id: "Teknologi Canggih"},
          description: {en: "We utilize only the latest, clinically-proven technologies for safe and effective treatments.", id: "Kami hanya menggunakan teknologi terbaru yang teruji secara klinis untuk perawatan yang aman dan efektif."},
      },
      {
          Icon: Sparkles,
          title: {en: "Natural Results", id: "Hasil Alami"},
          description: {en: "Our philosophy is to enhance your unique beauty, not alter it. We believe in elegant, subtle outcomes.", id: "Filosofi kami adalah untuk menyempurnakan kecantikan unik Anda, bukan mengubahnya. Kami percaya pada hasil yang elegan dan halus."},
      }
  ]

  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="!py-0 min-h-[70vh] md:min-h-[80vh] flex items-center relative overflow-hidden bg-secondary/30">
        <div className="absolute inset-0 z-0">
          {/* Mobile Image */}
          <Image
            src="/images/model1.png"
            alt={t({ en: 'An elegant woman with radiant skin', id: 'Wanita elegan dengan kulit bercahaya' })}
            fill
            className="object-cover md:hidden"
            data-ai-hint="elegant woman radiant skin"
            priority
          />
          {/* Desktop Image */}
          <Image
            src="/images/herobackground-new.png"
            alt={t({ en: 'An elegant woman with radiant skin', id: 'Wanita elegan dengan kulit bercahaya' })}
            fill
            className="object-cover hidden md:block"
            data-ai-hint="elegant woman radiant skin"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
        </div>
        <div className="relative z-20 w-full">
            <div className="text-left max-w-3xl mx-auto p-4">
                <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-4 md:text-shadow">
                    {t({ en: "Altruva — Jakarta's First Regenerative Contour Clinic", id: "Altruva — Klinik Kontur Regeneratif Pertama di Jakarta" })}
                </h1>
                <p className="text-lg md:text-xl text-foreground/90 mb-8 md:text-shadow-sm">
                    {t({ en: 'Experience the art of aesthetic science at Altruva, where your unique beauty is enhanced, never changed.', id: 'Rasakan seni ilmu estetika di Altruva, di mana kecantikan unik Anda disempurnakan, bukan diubah.' })}
                </p>
                <Button asChild size="lg">
                    <Link href="/book-appointment">{t({ en: 'Book Your Consultation', id: 'Pesan Konsultasi Anda' })}</Link>
                </Button>
            </div>
        </div>
      </SectionWrapper>
      
      {/* Philosophy Section */}
       <SectionWrapper id="philosophy" className="bg-secondary/30">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <Image
                src="/images/altruva-hires.png"
                alt="serene clinic interior"
                fill
                className="object-cover"
                data-ai-hint="serene clinic interior"
                />
            </div>
            <div className="space-y-4">
                <h2 className="font-serif text-3xl font-bold text-primary">{t({ en: 'Our Philosophy', id: 'Filosofi Kami' })}</h2>
                <p className="text-lg text-foreground/80">
                {t({ 
                    en: "True beauty is not about transformation, but revelation. We utilize the latest advancements in regenerative medicine and non-surgical treatments to work in harmony with your body, promoting cellular renewal and achieving authentic, lasting results.",
                    id: "Kecantikan sejati bukan tentang transformasi, melainkan pengungkapan. Kami memanfaatkan kemajuan terbaru dalam pengobatan regeneratif dan perawatan non-bedah untuk bekerja selaras dengan tubuh Anda, mendorong pembaruan seluler dan mencapai hasil yang otentik dan tahan lama."
                })}
                </p>
            </div>
        </div>
      </SectionWrapper>

      {/* Featured Offerings Section */}
      <SectionWrapper id="offerings">
        <PageTitle
          title={t({ en: 'Signature Treatments', id: 'Perawatan Khas' })}
          subtitle={t({ en: 'Clinically-proven solutions designed for natural, elegant, and lasting results.', id: 'Solusi teruji klinis yang dirancang untuk hasil yang alami, elegan, dan tahan lama.' })}
        />
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredOfferings.map((offering) => (
            <Card key={t(offering.title)} className="text-center shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden group">
              <CardContent className="p-0 flex-grow">
                <div className="relative aspect-video">
                  <Image
                    src={offering.imageSrc}
                    alt={t(offering.title)}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={offering.imageHint}
                  />
                </div>
                <div className="p-6">
                    <CardTitle className="font-serif text-2xl text-primary mb-2">{t(offering.title)}</CardTitle>
                    <p className="text-foreground/80">{t(offering.description)}</p>
                </div>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                  <Button asChild variant="link" className="font-semibold text-primary">
                      <Link href={offering.href}>{t({ en: 'Learn More', id: 'Pelajari Lebih Lanjut' })} <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>
      
       {/* Meet Dr. Aldisa Section */}
      <SectionWrapper id="meet-the-doctor" className="bg-secondary/30">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-xl max-w-md mx-auto">
                <Image
                    src="/images/draldisanew.jpg"
                    alt={t({ en: "dr. Olivia Aldisa, Founder of Altruva", id: "dr. Olivia Aldisa, Pendiri Altruva"})}
                    width={500}
                    height={625}
                    className="object-cover object-top"
                />
            </div>
            <div className="space-y-4">
                <h2 className="font-serif text-3xl font-bold text-primary">{t({ en: 'Meet dr. Olivia Aldisa', id: 'Temui dr. Olivia Aldisa' })}</h2>
                <p className="text-lg font-semibold text-accent">{t({ en: "A Globally-Recognized Expert in Regenerative Aesthetics", id: "Seorang Ahli Estetika Regeneratif yang Diakui Secara Global"})}</p>
                <p className="text-foreground/80">
                {t({ 
                    en: "Known for her perfect balance of medical-scientific knowledge and artistic forte, dr. Olivia Aldisa is an international Key Opinion Leader (KOL) and trainer for premier aesthetic technologies. She brings her vision for natural, regenerative results to life at Altruva.",
                    id: "Dikenal karena keseimbangan sempurna antara pengetahuan medis-ilmiah dan keahlian artistiknya, dr. Olivia Aldisa adalah seorang Key Opinion Leader (KOL) internasional dan pelatih untuk teknologi estetika terkemuka. Dia mewujudkan visinya untuk hasil yang alami dan regeneratif di Altruva."
                })}
                </p>
                <Button asChild variant="outline">
                    <Link href="/about-us/meet-dr-olivia-aldisa">{t({ en: 'Learn More About Dr. Aldisa', id: 'Pelajari Lebih Lanjut Tentang Dr. Aldisa' })}</Link>
                </Button>
            </div>
        </div>
      </SectionWrapper>

      {/* Why Choose Altruva Section */}
      <SectionWrapper id="why-choose">
        <PageTitle
          title={t({ en: 'Why Choose Altruva?', id: 'Mengapa Memilih Altruva?' })}
          subtitle={t({ en: 'Your trust is our highest priority. We are committed to providing an exceptional experience.', id: 'Kepercayaan Anda adalah prioritas utama kami. Kami berkomitmen untuk memberikan pengalaman yang luar biasa.' })}
        />
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyChooseUs.map((item) => (
                <div key={t(item.title)} className="text-center">
                    <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                           <item.Icon className="w-8 h-8"/>
                        </div>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-primary mb-2">{t(item.title)}</h3>
                    <p className="text-foreground/80">{t(item.description)}</p>
                </div>
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

    