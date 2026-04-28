
'use client';

import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import React from 'react';
import dynamic from 'next/dynamic';
import { useLanguage } from '@/context/LanguageContext';

const CertificatesSection = dynamic(() => import('@/components/flyer/CertificatesSection'), { 
  ssr: false,
  loading: () => <div className="py-20 text-center">Loading certificates...</div>
});

const VideoSection = dynamic(() => import('@/components/flyer/VideoSection'), { 
  ssr: false,
  loading: () => <div className="py-20 text-center">Loading videos...</div>
});

const BenefitsSection = dynamic(() => import('@/components/flyer/BenefitsSection'), { 
  ssr: false,
  loading: () => <div className="py-20 text-center">Loading benefits...</div>
});

const ProvenResultsSection = dynamic(() => import('@/components/flyer/ProvenResultsSection'), { 
  ssr: false,
  loading: () => <div className="py-20 text-center">Loading results...</div>
});

export default function FlyerPage() {
  const { t } = useLanguage();
  const whatsappLink = "https://wa.me/6281216119392?text=Hai%20Altruva,%20saya%20tertarik%20booking%20konsultasi%20dengan%20dokter%20untuk%20tahu%20advanced%20treatment%20yang%20paling%20sesuai";

  const agingConcerns = [
    {
      number: '01',
      text: 'Kulit kendur di area pipi, rahang, & leher',
      image: { src: '/images/flyer/aging/aging1.webp', hint: 'sagging skin' }
    },
    {
      number: '02',
      text: 'Garis halus & kerutan di sekitar mata dan dahi',
      image: { src: '/images/flyer/aging/aging2.webp', hint: 'wrinkles forehead' }
    },
    {
      number: '03',
      text: 'Kulit kusam efek penuaan dini',
      image: { src: '/images/flyer/aging/aging3.webp', hint: 'dull skin' }
    },
    {
      number: '04',
      text: 'Kontur wajah menurun',
      image: { src: '/images/flyer/aging/aging4.webp', hint: 'drooping face' }
    }
  ];

  const signatureTreatments = [
    {
      number: '01',
      title: 'Altruva Cocktail Contouring',
      description: 'Rasakan transformasi kulit dari dalam dengan menstimulasi kolagen dan meningkatkan struktur alami wajah untuk hasil natural, tanpa downtime, dan tahan lama.',
      image: '/images/flyer/personalized/personalized4.webp',
      hint: 'regenerative lifting'
    },
    {
      number: '02',
      title: 'A.R.T Lift by Sofwave ',
      description: 'Lifting alami dengan meningkatkan kolagen & elastin secara signifikan untuk wajah kencang, tanpa downtime, dan lebih nyaman dari HIFU generasi lama.',
      image: '/images/flyer/personalized/personalized3.webp',
      hint: 'sofwave treatment'

    },
    {
      number: '03',
      title: 'Advanced Sofwave x Gorgeous Lyft (GOURI)',

      description: 'Ultimate regenerative lifting 10x lebih efektif dalam menstimulasi kolagen untuk mengencangkan kulit dan memperbaiki struktur wajah untuk hasil lifting alami tanpa operasi',
      image: '/images/flyer/personalized/personalized2.webp',
      hint: 'facial contouring'
    },
  ];


  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="!py-0 min-h-screen flex flex-col justify-between text-left relative overflow-hidden bg-secondary/30">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/flyer/landingpage_banner_mobile.webp"
            alt={t({ en: 'An elegant woman with radiant skin', id: 'Wanita elegan dengan kulit bercahaya' })}
            fill
            sizes="100vw"
            className="object-cover object-top md:hidden"
            data-ai-hint="elegant woman radiant skin"
            priority
          />
          <Image
            src="/images/landingpage_banner_desktop_main.webp"
            alt={t({ en: 'An elegant woman with radiant skin', id: 'Wanita elegan dengan kulit bercahaya' })}
            fill
            sizes="100vw"
            className="object-cover object-top hidden md:block"
            data-ai-hint="elegant woman radiant skin"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
        </div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col flex-grow justify-between h-full pt-8 md:pt-12">

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="md:pr-8 leading-7">
              <h1 className="font-sans text-3xl sm:text-5xl md:text-5xl font-bold text-primary mb-8 leading-tight">
                {t({ en: "Quiet Luxury of Aging Gracefully for Timeless Beauty", id: "Kemewahan Tenang dari Penuaan yang Anggun untuk Kecantikan Abadi" })}
              </h1>
              <h2 className="font-sans text-xl sm:text-xl md:text-xl font-bold text-primary mb-8 leading-tight">
                Wajah kencang alami tanpa operasi dan tanpa downtime — di Jakarta’s First Regenerative Contouring Clinic
              </h2>
              <Button
                asChild
                size="lg"
                className="hidden md:inline-flex bg-primary text-white font-semibold text-base px-10 py-6 rounded-full transition-colors duration-200"
              >
                <Link href={whatsappLink} target="_blank">{t({ en: 'Begin Your Transformation', id: 'Mulailah Transformasi Anda' })}</Link>
              </Button>
            </div>
          </div>

          <div className="w-full md:hidden pb-8">
            <Button
              asChild
              size="lg"
              className="w-full bg-primary text-white font-semibold text-base px-10 py-6 rounded-full transition-colors duration-200"
            >
              <Link href={whatsappLink} target="_blank">{t({ en: 'Begin Your Transformation', id: 'Mulailah Transformasi Anda' })}</Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* Aging is Natural Section */}
      <SectionWrapper
        className="relative"
      >
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/images/flyer/aging/bg-section.webp"
            alt="background"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center relative">
            <div className="space-y-4">
              <h2 className="font-serif text-5xl md:text-6xl text-primary leading-tight">
                Aging is natural,
                <br />
                but don't let it
                <br />
                <span className="italic">take away</span>
                <br />
                <span className="italic">your confidence</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {agingConcerns.map((item) => (
                <div key={item.number} className="relative aspect-[3/4] rounded-2xl overflow-hidden group shadow-lg">
                  <Image
                    src={item.image.src}
                    alt={item.text}
                    fill
                    sizes="(max-width: 768px) 50vw, 300px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={item.image.hint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 flex flex-col justify-end">
                    <p className="text-white font-bold text-4xl md:text-5xl drop-shadow-lg italic">{item.number}</p>
                    <p className="text-white font-semibold text-sm md:text-base leading-tight drop-shadow-md">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 7: Doctor's Profile */}
      <SectionWrapper className="bg-background">
        <div className="grid md:grid-cols-2 gap-8 items-center text-left">
          <div className="md:col-span-1 flex justify-center">
            <div className="relative aspect-square max-w-xs w-full">
              <Image src="/images/flyer/draldisa_new.webp" alt="dr Olivia Aldisa" fill sizes="320px" className="object-contain" />
            </div>
          </div>
          <div className="md:col-span-1">
            <h2 className="font-serif text-3xl font-bold text-primary">dr. Olivia Aldisa M.Sc Aest. Med (UK)</h2>
            <p className="font-semibold text-lg text-accent">Founder & Medical Director</p>
            <p className="mt-4 text-lg text-foreground/80 max-w-xl">
              Berpengalaman lebih dari 12 tahun sebagai dokter estetika dan juga trainer international. Pakar dalam combination treatment yang menggabungkan produk terbaik, presisi tindakan, dengan teknologi medical device terkini untuk hasil yang nyata.
            </p>
            <Button asChild size="lg" variant="default" className="mt-6 font-semibold">
              <Link href={whatsappLink} target="_blank">Book Consultation Now</Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* Jakarta's 1st Regenerative Clinic Section */}
      <section className="relative w-full" style={{ minHeight: '700px' }}>
        <Image
          src="/images/flyer/landingpage_personalize_mobile.webp"
          alt="Jakarta's 1st Regenerative Contouring Clinic"
          fill
          sizes="100vw"
          className="object-cover object-top md:hidden"
        />
        <Image
          src="/images/flyer/landingpage_banner_desktop.webp"
          alt="Jakarta's 1st Regenerative Contouring Clinic"
          fill
          sizes="100vw"
          className="object-cover object-top hidden md:block"
        />
        <div className="absolute inset-0 bg-black/10 z-10" />
        <div className="relative z-20 h-full flex flex-col items-center md:items-start justify-start text-center md:text-left text-primary-foreground p-4 pt-12 md:p-12 md:justify-center" style={{ minHeight: '700px' }}>

          <h2 className="font-serif text-3xl md:text-5xl text-white" style={{ color: '#4a301b' }}>
            Jakarta's 1st Regenerative
            <br />
            Contouring Clinic
          </h2>
          <div className="mt-8 grid grid-cols-3 gap-4 md:gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 text-center" style={{ color: '#4a301b' }}>
              <p className="text-3xl md:text-4xl font-bold">10+</p>
              <p className="text-sm md:text-base">Dokter & Staff<br />Bersertifikasi</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 text-center" style={{ color: '#4a301b' }}>
              <p className="text-3xl md:text-4xl font-bold">12+</p>
              <p className="text-sm md:text-base">Tahun<br />Pengalaman</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 text-center" style={{ color: '#4a301b' }}>
              <p className="text-3xl md:text-4xl font-bold">1000+</p>
              <p className="text-sm md:text-base">Pasien<br />Ditangani</p>
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Signature Treatments Section */}
      <SectionWrapper
        className="relative"
      >
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/images/flyer/aging/bg-section.webp"
            alt="background"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div
          className="container mx-auto py-12 relative z-10"
        >
          <div className="text-center mb-8">
            <h2 className="font-serif text-4xl md:text-5xl text-primary font-bold">Personalized Signature Treatments</h2>
            <p className="font-serif text-3xl md:text-4xl text-primary/90 mt-2">for Timeless Beauty</p>
            <div className="mt-4 inline-block">
              <Button variant="default" className="rounded-full bg-[#4a301b] text-white">Altruva Lift Tightening & Contouring</Button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {signatureTreatments.map((treatment) => (
              <div key={treatment.number} className="relative group">
                <div className="relative aspect-[3/4] bg-white rounded-3xl shadow-lg overflow-hidden p-6 flex flex-col justify-end">
                  <div className="absolute inset-0">
                    <Image src={treatment.image} alt={treatment.title} fill sizes="(max-width: 768px) 100vw, 400px" className="object-cover rounded-3xl" data-ai-hint={treatment.hint} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl" />
                  </div>
                  <div className="relative text-white z-10 text-left">
                    <p className="font-serif text-8xl font-bold opacity-80">{treatment.number}</p>
                    <h3 className="font-serif text-2xl font-bold">{treatment.title}</h3>
                    <p className="text-sm mt-2">{treatment.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href={whatsappLink} target="_blank" className="inline-block">
              <Button asChild size="lg" className="rounded-full bg-[#4a301b] text-white hover:bg-[#5a402b] px-10 py-6 text-lg font-semibold">
                <span>Get Your Personalized Assessment</span>
              </Button>
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 2: Sofwave (Dynamically Imported) */}
      <BenefitsSection whatsappLink={whatsappLink} />


      {/* Section 3 & 5: Video & Social Media (Dynamically Imported) */}
      <VideoSection whatsappLink={whatsappLink} />


      {/* Section 4: Proven results (Dynamically Imported) */}
      <ProvenResultsSection whatsappLink={whatsappLink} />


      {/* Section 6: Certificates (Dynamically Imported) */}
      <CertificatesSection />

      <SectionWrapper className="!py-16 bg-primary">
        <div className="text-center">
          <p className="font-serif text-4xl italic text-primary-foreground">Your skin has a story</p>
          <p className="font-serif text-4xl italic text-primary-foreground mt-2">let's make it a beautiful one</p>
        </div>
      </SectionWrapper>
    </>
  );
}
