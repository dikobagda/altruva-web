
"use client";

import { useState, Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { services, testimonials, aiAnalysisFeatures, insights } from '@/lib/constants';
import { ArrowRight, Star } from 'lucide-react';
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

type TreatmentCategory = 'Prejuvenation' | 'Rejuvenation';

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<TreatmentCategory | null>(null);

  const filteredServices = activeCategory ? services.filter(service => service.category === activeCategory) : [];

  const categoryDetails = {
    Prejuvenation: {
      title: '< 40 years old',
      subtitle: 'Prejuvenation (Preserve & Enhance)',
      treatmentsTitle: 'Prejuvenation Treatments',
    },
    Rejuvenation: {
      title: '> 40 years old',
      subtitle: 'Rejuvenation (Restore & Lift)',
      treatmentsTitle: 'Rejuvenation Treatments',
    },
  };

  const groupedServices = filteredServices.reduce((acc, service) => {
    const groupName = service.group;
    if (!acc[groupName]) {
      acc[groupName] = {
        description: service.groupDescription,
        subgroups: {},
      };
    }
    
    const subgroupName = service.subgroup;
    if (!acc[groupName].subgroups[subgroupName]) {
      acc[groupName].subgroups[subgroupName] = [];
    }
    
    acc[groupName].subgroups[subgroupName].push(service);
    return acc;
  }, {} as Record<string, { description: string; subgroups: Record<string, typeof services> }>);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative pt-28 md:pt-32 pb-20 md:pb-32 min-h-[50vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/herobackground-new.png')" }}
      >
        <div className="absolute inset-0 bg-black/30 z-0" data-ai-hint="dark overlay"></div>
        <div className="container mx-auto px-20 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="md:pr-8 leading-7">
              <h1 className="md:pl-8 font-sans text-3xl sm:text-5xl md:text-5xl font-bold text-primary mb-8 leading-tight">
              Altruva – Klinik Kontur Regeneratif Pertama di Jakarta
              </h1>
              <h4 className="md:pl-8 font-sans text-xl sm:text-xl md:text-xl font-bold text-primary mb-8 leading-tight">Kecantikan Anda, Direkayasa untuk Masa Depan</h4>
              <Button
                asChild
                size="lg"
                className="bg-primary text-white font-semibold text-base px-10 py-6 rounded-full transition-colors duration-200"
              >
                <Link className="md:ml-8" href="/book-appointment">Buat Janji Temu</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Description Section */}
      <SectionWrapper className="bg-secondary/30">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl text-foreground/80">
          Selamat datang di Klinik Estetika Altruva — sebuah klinik estetika dan medis di Jakarta yang menawarkan rangkaian perawatan estetika medis yang terus diperbarui, minimal hingga non-invasif, disetujui FDA dan ditandai CE. Tujuan utamanya adalah memberdayakan Anda untuk menjadi versi terbaik dari diri Anda.
          </p>
        </div>
      </SectionWrapper>
      
      {/* Age-based Service Selector */}
      <SectionWrapper className="bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Perjalanan Regeneratif Anda</h2>
          <p className="text-lg text-foreground/80 mb-8">Pilih kelompok usia Anda untuk menemukan perawatan yang disesuaikan untuk memenuhi kebutuhan unik Anda.</p>
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
                <h3 className="text-xl md:text-2xl font-bold font-serif">{categoryDetails[key].title}</h3>
                <p className={cn("text-sm md:text-base", activeCategory === key ? 'text-primary-foreground/90' : 'text-foreground/70')}>{categoryDetails[key].subtitle}</p>
              </button>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Services Overview Section */}
      {activeCategory && (
        <SectionWrapper id="treatments-overview">
          <PageTitle 
            title={categoryDetails[activeCategory].treatmentsTitle}
          />
          <div className="max-w-6xl mx-auto">
            <div className="space-y-12">
              {Object.entries(groupedServices).map(([groupName, groupData]) => (
                <div key={groupName}>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-2">{groupName}</h3>
                  <p className="text-md md:text-lg text-foreground/80 mb-6">{groupData.description}</p>
                  
                  <Card className="shadow-lg p-4 md:p-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[40%] font-semibold text-primary/90">Perawatan</TableHead>
                          <TableHead className="w-[60%] font-semibold text-primary/90">Deskripsi</TableHead>
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
                                <TableCell className="text-foreground/80">{service.description}</TableCell>
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
                <Link href="/book-appointment">Buat Janji Temu Konsultasi</Link>
              </Button>
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* Glow Quiz Section */}
      <SectionWrapper id="glow-quiz" className="bg-primary text-primary-foreground">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Temukan Rencana Harmoni Sempurna Anda</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
          Ikuti Kuis Cahaya singkat kami untuk mendapatkan peta jalan estetika yang dipersonalisasi yang disesuaikan dengan usia, kebutuhan kulit, dan tujuan Anda.
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
            Buka Perawatan Kulit yang Dipersonalisasi dengan AI
            </h2>
            <p className="text-lg text-foreground/80 mb-8">
            Alat Analisis Kulit AI canggih kami membantu Anda memahami kulit Anda dengan lebih baik. Unggah foto, jawab beberapa pertanyaan, dan terima rekomendasi yang dipersonalisasi.
            </p>
            <ul className="space-y-4 mb-8">
              {aiAnalysisFeatures.map((feature) => (
                <li key={feature.title} className="flex items-start">
                  <feature.Icon className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary">{feature.title}</h4>
                    <p className="text-foreground/70">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="font-semibold">
              <Link href="/skin-analysis">Coba Analisis Kulit AI</Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* Testimonials Preview Section */}
      <SectionWrapper id="testimonials-preview">
        <PageTitle title="Dengar dari Pelanggan Kami" subtitle="Kisah nyata dari mereka yang pernah merasakan perbedaan Altruva." />
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
            <Link href="/book-appointment">Siap untuk transformasi Anda?</Link>
          </Button>
        </div>
      </SectionWrapper>

      {/* Featured Insights Section */}
      <SectionWrapper id="featured-insights" className="bg-secondary/30">
        <PageTitle title="Wawasan Unggulan" subtitle="Jelajahi yang terbaru dalam ilmu estetika dan kesehatan dari para ahli kami." />
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {insights.map((insight) => (
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
            <Link href="/insights">Jelajahi Semua Wawasan</Link>
          </Button>
        </div>
      </SectionWrapper>

      {/* Call to Action Section */}
      <SectionWrapper className="bg-primary text-primary-foreground">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Siap Memulai Transformasi Anda?</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
          Perjalanan Anda menuju kecantikan dan kepercayaan diri yang lebih baik dimulai di sini. Jadwalkan konsultasi pribadi Anda dengan tim ahli kami hari ini.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link href="/book-appointment">Pesan Konsultasi Anda Sekarang</Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
