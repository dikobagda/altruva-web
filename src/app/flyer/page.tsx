
'use client';

import Image from 'next/image';
import Link from 'next/link';
import PageTitle from '@/components/shared/PageTitle';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Award, Star, Video } from 'lucide-react';
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

export default function FlyerPage() {
  const { t } = useLanguage();

  const highlights = [
    "International KOL and Trainer for Sofwave",
    "International KOL and Trainer for GOURI",
    "Creator of Cocktail Contouring ™"
  ];

  const benefits = [
    {
      title: "Hasil kontur wajah yang harmonis dan natural",
      image: { src: "/images/flyer/atiqah1.jpeg" },
      imageHint: "natural facial contour"
    },
    {
      title: "Sofwave utk wajah kencang, kenyal, dan cerah (tanpa downtime)",
      image: { src: "/images/flyer/atiqah2.jpeg" },
      imageHint: "sofwave treatment"
    },
    {
      title: "Memproduksi ulang kolagen yang hilang",
      image: { src: "/images/flyer/maria1.jpeg" },
      imageHint: "collagen stimulation"
    },
    {
      title: "Prosedur yang nyaman berdasarkan standar intenasional",
      image: { src: "/images/flyer/maria2.jpeg" },
      imageHint: "comfortable aesthetic procedure"
    }
  ];
  
  const treatmentVideos = [
    { id: 's3JGxiB-8R4', title: "dr. Aldisa & Atiqah Cocktail Contouring™" },
    { id: 'AEHYP6BJsQU', title: "Paulina's Sofwave Journey" },
    { id: 'gn_1wzedRAA', title: "Indy's Gouri Experience" },
  ];

  const beforeAfters = [
    { src: "/images/flyer/paulina-before-after.png", hint: 'facial contouring before after' },
    { src: "/images/flyer/atiqah-bf.png", hint: 'facial rejuvenation before after' },
    { src: "/images/flyer/unk-bf.png", hint: 'skin tightening before after' },
  ];
  
  const socialVideos = [
    { id: 'fyYd0wE4uDY' },
    { id: '8j5eQI4nYA8' },
    { id: 'm4asSg5piJY' },
    { id: 'dODOyXmNSVA' },
  ];
  
  const certificates = [
    { image: { src: "/images/flyer/cert/cert1.jpg" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert2.jpg" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert3.jpg" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert4.jpg" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert5.jpg" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert6.jpg" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert7.jpg" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert8.jpg" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert9.jpg" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert10.jpg" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert11.jpg" }, imageHint: "certificate" },
  ];

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
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-start">
            <div className="mb-8">
              <Image
                src="/images/logoaltruvanew.png"
                width={120}
                height={120}
                alt="Altruva Logo"
              />
            </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="md:pr-8 leading-7">
              <h1 className="font-sans text-3xl sm:text-5xl md:text-5xl font-bold text-primary mb-8 leading-tight">
                {t({ en: "Quiet Luxury of Aging Gracefully for Timeless Beauty", id: "Kemewahan Tenang dari Penuaan yang Anggun untuk Kecantikan Abadi" })}
              </h1>
              <h4 className="font-sans text-xl sm:text-xl md:text-xl font-bold text-primary mb-8 leading-tight">
                Wajah kencang alami tanpa operasi dan tanpa downtime — di Jakarta’s First Regenerative Contouring Clinic
              </h4>
              <Button
                asChild
                size="lg"
                className="bg-primary text-white font-semibold text-base px-10 py-6 rounded-full transition-colors duration-200"
              >
                <Link href="/book-appointment">{t({ en: 'Begin Your Transformation', id: 'Mulailah Transformasi Anda' })}</Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 2: Personalized Treatment */}
      <SectionWrapper>
        <PageTitle
          title="Personalized Treatment paling aman dan efektif"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center shadow-lg overflow-hidden group">
              <CardContent className="p-0">
                <div className="relative aspect-square">
                    <Image src={benefit.image.src} alt={benefit.title} fill className="object-cover group-hover:scale-105 transition-transform" data-ai-hint={benefit.imageHint}/>
                </div>
              </CardContent>
              <CardHeader>
                <CardTitle className="font-serif text-xl text-primary">{benefit.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
            <Button asChild size="lg">
                <Link href="/book-appointment">Book Appointment Now!</Link>
            </Button>
        </div>
      </SectionWrapper>

      {/* Section 3: Glimpse of Treatments */}
      <SectionWrapper className="bg-secondary/30">
        <PageTitle title="A glimpse of Altruva treatments" />
        <div className="grid md:grid-cols-3 gap-8">
            {treatmentVideos.map(video => (
                <Card key={video.id} className="shadow-lg overflow-hidden">
                    <div className="aspect-[9/16] w-full">
                        <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${video.id}`}
                            title={video.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                    <CardHeader>
                        <CardTitle className="font-serif text-lg text-primary">{video.title}</CardTitle>
                    </CardHeader>
                </Card>
            ))}
        </div>
        <div className="text-center mt-12">
            <Button asChild size="lg">
                <Link href="/book-appointment">Book Appointment Now!</Link>
            </Button>
        </div>
      </SectionWrapper>

      {/* Section 4: Proven results */}
      <SectionWrapper>
        <PageTitle title="Proven results" subtitle="Tampil cantik percaya diri di segala usia" />
        <div className="grid md:grid-cols-3 gap-8">
          {beforeAfters.map((item, index) => (
            <div key={index} className="relative w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src={item.src}
                alt="Before and after treatment"
                width={600}
                height={300}
                className="w-full h-auto"
                data-ai-hint={item.hint}
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/book-appointment">Book Appointment Now!</Link>
          </Button>
        </div>
      </SectionWrapper>


      {/* Section 5: Social Media */}
      <SectionWrapper className="bg-secondary/30">
        <PageTitle title="Get to know us more at @altruvaclinic" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {socialVideos.map(video => (
                 <a href={`https://www.youtube.com/shorts/${video.id}/`} target="_blank" rel="noopener noreferrer" key={video.id} className="block relative aspect-[9/16] rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        className="w-full h-full absolute inset-0"
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={`YouTube Short ${video.id}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </a>
            ))}
        </div>
      </SectionWrapper>
      
      {/* Section 6: Certificates */}
      <SectionWrapper>
        <PageTitle title="Certificates and Awards" />
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {certificates.map((cert, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="relative aspect-[3/4] rounded-lg overflow-hidden border shadow-md cursor-pointer group">
                         <Image src={cert.image.src} alt="Certificate" fill className="object-cover group-hover:scale-105 transition-transform" />
                         <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors"></div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="p-0 border-0 max-w-3xl">
                       <DialogHeader>
                        <DialogTitle className="sr-only">Certificate</DialogTitle>
                      </DialogHeader>
                      <Image 
                        src={cert.image.src} 
                        alt="Certificate" 
                        width={800} 
                        height={1067} 
                        className="w-full h-auto rounded-lg"
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>
      </SectionWrapper>

      {/* Section 7: Doctor's Profile */}
      <SectionWrapper className="bg-primary text-primary-foreground">
        <div className="grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
            <div className="md:col-span-1">
                 <div className="relative aspect-square max-w-xs mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-primary-foreground">
                     <Image src="/images/draldisanew.jpg" alt="dr Olivia Aldisa" fill className="object-cover object-top" />
                 </div>
            </div>
            <div className="md:col-span-2">
                 <h2 className="font-serif text-3xl font-bold">dr Olivia Aldisa, M.Sc.</h2>
                 <p className="font-semibold text-lg text-primary-foreground/80">Aesthetic Medicine (UK)</p>
                 <p className="font-semibold text-accent-foreground/90 mt-1">Founder and Medical Director</p>
                 <p className="mt-4 text-lg opacity-90 max-w-xl mx-auto md:mx-0">
                    Berpengalaman lebih dari 12 tahun sebagai dokter estetika dan juga trainer international. Pakar dalam combination treatment yang menggabungkan produk terbaik, presisi tindakan, dengan teknologi medical device terkini untuk hasil yang nyata.
                 </p>
            </div>
        </div>
      </SectionWrapper>
    </>
  );

    

