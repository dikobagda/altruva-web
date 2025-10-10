
"use client";

import { useState, Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { services } from '@/lib/data/services';
import { testimonials } from '@/lib/data/testimonials';
import { aiAnalysisFeatures } from '@/lib/data/ai-features';
import { insights } from '@/lib/data/insights';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import PageTitle from '@/components/shared/PageTitle';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import React from 'react';
import InsightCard from '@/components/insights/InsightCard';
import GlowQuiz from '@/components/quiz/GlowQuiz';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TestimonialCard from '@/components/testimonials/TestimonialCard';
import { useLanguage } from '@/context/LanguageContext';

type TreatmentCategory = 'Prejuvenation' | 'Rejuvenation';

export default function HomePage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<TreatmentCategory | null>(null);

  const filteredServices = activeCategory ? services.filter(service => service.category === activeCategory) : [];

  const categoryDetails = {
    Prejuvenation: {
      title: { en: '< 40 years old', id: '< 40 tahun' },
      subtitle: { en: 'Prejuvenation (Preserve & Enhance)', id: 'Prejuvenation (Memelihara & Meningkatkan)' },
      treatmentsTitle: { en: 'Prejuvenation Treatments', id: 'Perawatan Prejuvenation' },
    },
    Rejuvenation: {
      title: { en: '> 40 years old', id: '> 40 tahun' },
      subtitle: { en: 'Rejuvenation (Restore & Lift)', id: 'Rejuvenation (Memulihkan & Mengangkat)' },
      treatmentsTitle: { en: 'Rejuvenation Treatments', id: 'Perawatan Rejuvenation' },
    },
  };

  const groupedServices = filteredServices.reduce((acc, service) => {
    const groupName = service.group;
    if (!acc[groupName]) {
      acc[groupName] = {
        description: service.groupDescription, // This is a translation object
        subgroups: {},
      };
    }
    
    const subgroupName = service.subgroup;
    if (!acc[groupName].subgroups[subgroupName]) {
      acc[groupName].subgroups[subgroupName] = [];
    }
    
    acc[groupName].subgroups[subgroupName].push(service);
    return acc;
  }, {} as Record<string, { description: Record<'en'|'id', string>; subgroups: Record<string, typeof services> }>);

  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="!py-0 min-h-[70vh] md:min-h-[80vh] flex items-center relative overflow-hidden bg-secondary/30">
        <div className="absolute inset-0 z-0">
           {/* Mobile Image */}
          <Image
            src="/images/model1-face.png"
            alt={t({ en: 'An elegant woman with radiant skin', id: 'Wanita elegan dengan kulit bercahaya' })}
            fill
            className="object-cover object-top md:hidden"
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
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="md:pr-8 leading-7">
              <h1 className="font-sans text-3xl sm:text-5xl md:text-5xl font-bold text-primary mb-8 leading-tight">
                {t({ en: "Altruva — Jakarta's First Regenerative Contouring Clinic", id: "Altruva — Klinik Kontur Regeneratif Pertama di Jakarta" })}
              </h1>
              <h4 className="font-sans text-xl sm:text-xl md:text-xl font-bold text-primary mb-8 leading-tight">
                {t({ en: "Your Beauty, Future-Proofed", id: "Kecantikan Anda, Terjamin di Masa Depan" })}
              </h4>
              <Button
                asChild
                size="lg"
                className="bg-primary text-white font-semibold text-base px-10 py-6 rounded-full transition-colors duration-200"
              >
                <Link href="/book-appointment">{t({ en: 'Book an Appointment', id: 'Buat Janji Temu' })}</Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Intro Description Section */}
      <SectionWrapper className="bg-secondary/30">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl text-foreground/80">
            {t({ 
              en: "Welcome to Altruva Aesthetic Clinic — an aesthetic and medical clinic in Jakarta offering an ever-updated range of minimal to non-invasive, FDA-approved, and CE-marked medical aesthetic treatments. The primary goal is to empower you to become the best version of yourself.",
              id: "Selamat datang di Klinik Estetika Altruva — sebuah klinik estetika dan medis di Jakarta yang menawarkan rangkaian perawatan estetika medis minimal hingga non-invasif yang selalu diperbarui, disetujui FDA, dan bertanda CE. Tujuan utamanya adalah memberdayakan Anda untuk menjadi versi terbaik dari diri Anda."
            })}
          </p>
        </div>
      </SectionWrapper>
      
      {/* Age-based Service Selector */}
      <SectionWrapper className="bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">{t({ en: 'Your Regenerative Journey', id: 'Perjalanan Regeneratif Anda' })}</h2>
          <p className="text-lg text-foreground/80 mb-8">{t({ en: 'Choose your age group to discover treatments tailored to meet your unique needs.', id: 'Pilih kelompok usia Anda untuk menemukan perawatan yang disesuaikan untuk memenuhi kebutuhan unik Anda.' })}</p>
          <div className="flex justify-center gap-4 md:gap-8">
            {(Object.keys(categoryDetails) as TreatmentCategory[]).map(key => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={cn(
                  "flex-1 max-w-sm p-6 rounded-lg border-2 transition-all duration-300",
                  activeCategory === key ? 'bg-primary border-primary text-primary-foreground shadow-xl' : 'bg-card border-border hover:border-primary/50 hover:bg-card/90'
                )}
              >
                <h3 className="text-xl md:text-2xl font-bold font-serif">{t(categoryDetails[key].title)}</h3>
                <p className={cn("text-sm md:text-base", activeCategory === key ? 'text-primary-foreground/90' : 'text-foreground/70')}>{t(categoryDetails[key].subtitle)}</p>
              </button>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Services Overview Section */}
      {activeCategory && (
        <SectionWrapper id="treatments-overview">
          <PageTitle 
            title={t(categoryDetails[activeCategory].treatmentsTitle)}
          />
          <div className="max-w-6xl mx-auto">
            <div className="space-y-12">
              {Object.entries(groupedServices).map(([groupName, groupData]) => (
                <div key={groupName}>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-2">{groupName}</h3>
                  <p className="text-md md:text-lg text-foreground/80 mb-6">{t(groupData.description)}</p>
                  
                  <Card className="shadow-lg p-4 md:p-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[40%] font-semibold text-primary/90">{t({ en: 'Treatment', id: 'Perawatan' })}</TableHead>
                          <TableHead className="w-[60%] font-semibold text-primary/90">{t({ en: 'Description', id: 'Deskripsi' })}</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {Object.entries(groupData.subgroups).map(([subgroupName, subgroupServices]) => (
                           <Fragment key={subgroupName}>
                             <TableRow className="bg-secondary/30">
                               <TableCell colSpan={2} className="font-bold text-secondary-foreground text-base py-3">
                                 {subgroupName}
                               </TableCell>
                             </TableRow>
                             {subgroupServices.map((service) => (
                              <TableRow key={service.id}>
                                <TableCell className="font-semibold text-primary">
                                  <Link href={`/services/${service.id}`} className="hover:underline">{service.title}</Link>
                                </TableCell>
                                <TableCell className="text-foreground/80">{t(service.description)}</TableCell>
                              </TableRow>
                             ))}
                           </Fragment>
                        ))}
                      </TableBody>
                    </Table>
                  </Card>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg" variant="default">
                <Link href="/book-appointment">{t({ en: 'Book a Consultation', id: 'Jadwalkan Konsultasi' })}</Link>
              </Button>
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* Glow Quiz Section */}
      <SectionWrapper id="glow-quiz" className="bg-primary text-primary-foreground">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">{t({ en: 'Discover Your Perfect Harmony Plan', id: 'Temukan Paket Harmoni Sempurna Anda' })}</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            {t({ en: 'Take our short Glow Quiz to get a personalized aesthetic roadmap tailored to your age, skin needs, and goals.', id: 'Ikuti Kuis Cahaya singkat kami untuk mendapatkan peta jalan estetika yang dipersonalisasi yang disesuaikan dengan usia, kebutuhan kulit, dan tujuan Anda.' })}
          </p>
          <GlowQuiz />
        </div>
      </SectionWrapper>

      {/* AI Skin Analysis Teaser Section */}
      <SectionWrapper id="ai-skin-analysis-teaser" className="bg-secondary/30">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square max-w-md mx-auto">
            <Image
              src="/images/ai-skin.png"
              alt="Promotional image for AI Skin Analysis showing a woman's profile with text overlay"
              width={500}
              height={500}
              className="rounded-lg shadow-xl object-cover"
            />
             
          </div>
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
              {t({ en: 'Unlock Personalized Skincare with AI', id: 'Buka Perawatan Kulit Pribadi dengan AI' })}
            </h2>
            <p className="text-lg text-foreground/80 mb-8">
              {t({ 
                en: "Our advanced AI Skin Analysis tool helps you understand your skin better. Upload a photo, answer a few questions, and receive personalized recommendations.",
                id: 'Alat Analisis Kulit AI canggih kami membantu Anda memahami kulit Anda lebih baik. Unggah foto, jawab beberapa pertanyaan, dan terima rekomendasi yang dipersonalisasi.'
              })}
            </p>
            <ul className="space-y-4 mb-8">
              {aiAnalysisFeatures.map((feature) => (
                <li key={t(feature.title)} className="flex items-start">
                  <feature.Icon className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary">{t(feature.title)}</h4>
                    <p className="text-foreground/70">{t(feature.description)}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="font-semibold">
              <Link href="/skin-analysis">{t({ en: 'Try AI Skin Analysis', id: 'Coba Analisis Kulit AI' })}</Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* Testimonials Preview Section */}
      <SectionWrapper id="testimonials-preview">
        <PageTitle 
          title={t({ en: "Hear From Our Clients", id: "Dengar dari Klien Kami" })}
          subtitle={t({ en: "Real stories from those who have experienced the Altruva difference.", id: "Kisah nyata dari mereka yang telah merasakan perbedaan Altruva."})} 
        />
        <Carousel
          opts={{
            align: "start",
            loop: testimonials.length > 3,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <TestimonialCard testimonial={testimonial} className="h-full" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden lg:flex" />
          <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden lg:flex" />
        </Carousel>
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="default">
            <Link href="/book-appointment">{t({ en: 'Ready for your transformation?', id: 'Siap untuk transformasi Anda?' })}</Link>
          </Button>
        </div>
      </SectionWrapper>

      {/* Dr. Aldisa in Action Section */}
      <SectionWrapper className="bg-secondary/30">
        <PageTitle title={t({ en: "Dr. Aldisa in Action", id: "Dr. Aldisa Beraksi" })} />
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-3xl mx-auto"
        >
          <CarouselContent>
            <CarouselItem>
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/wBDINWzOPXM"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/DrqIbRAHoYw"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>
      </SectionWrapper>

      {/* Featured Insights Section */}
      <SectionWrapper id="featured-insights" className="bg-secondary/30">
        <PageTitle 
          title={t({ en: 'Featured Articles', id: 'Artikel Unggulan' })}
          subtitle={t({ en: 'Explore the latest in aesthetic science and wellness from our experts.', id: 'Jelajahi yang terbaru dalam ilmu estetika dan kesehatan dari para ahli kami.' })}
        />
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {insights.filter(insight => insight.href).map((insight) => (
              <CarouselItem key={insight.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <InsightCard insight={insight} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden lg:flex" />
          <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden lg:flex" />
        </Carousel>
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="default">
            <Link href="/articles">{t({ en: 'Explore All Articles', id: 'Jelajahi Semua Artikel' })}</Link>
          </Button>
        </div>
      </SectionWrapper>

      {/* Call to Action Section */}
      <SectionWrapper className="bg-primary text-primary-foreground">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">{t({ en: 'Ready to Begin Your Transformation?', id: 'Siap Memulai Transformasi Anda?' })}</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            {t({ en: 'Your journey to enhanced beauty and confidence starts here. Schedule your private consultation with our team of experts today.', id: 'Perjalanan Anda menuju kecantikan dan kepercayaan diri yang lebih baik dimulai di sini. Jadwalkan konsultasi pribadi Anda dengan tim ahli kami hari ini.' })}
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link href="/book-appointment">{t({ en: 'Book Your Consultation Now', id: 'Jadwalkan Konsultasi Anda Sekarang' })}</Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
