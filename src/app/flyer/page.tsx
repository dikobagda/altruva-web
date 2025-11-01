
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

export default function FlyerPage() {

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
    { src: "/images/flyer/atiqah-before-after.jpg", hint: 'facial rejuvenation before after' },
    { src: "/images/flyer/paulina-before-after-v2.jpg", hint: 'skin tightening before after' },
  ];
  
  const socialVideos = [
    { id: 'DNxwCZywnvQ' },
    { id: 'DO2lscdAXll' },
    { id: 'DNGQrSBBk2z' },
    { id: 'DMSf9MbBbbe' },
  ];
  
  const certificates = [
    { image: { src: "/images/flyer/cert1.webp" }, imageHint: "UMA Academy certificate" },
    { image: { src: "/images/flyer/cert2.webp" }, imageHint: "speaker award" },
    { image: { src: "/images/flyer/cert3.webp" }, imageHint: "AMWC Award certificate" },
    { image: { src: "/images/flyer/cert4.webp" }, imageHint: "GOURI trainer award" },
    { image: { src: "/images/flyer/cert5.webp" }, imageHint: "international certificate" },
    { image: { src: "/images/flyer/cert6.webp" }, imageHint: "international certificate" },
  ];

  return (
    <>
      {/* Section 1: Hero */}
      <SectionWrapper className="pb-12 min-h-[80vh] flex items-start pt-24 relative overflow-hidden bg-secondary/30">
        <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="mb-6">
              <Image
                src="/images/logo-altruva.png"
                width={120}
                height={120}
                alt="Altruva Logo"
                className="mx-auto"
              />
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-4">
              Kencangkan wajah kendur di klinik kami
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-3xl mx-auto">
              Klinik kecantikan dengan dokter ahli estetika unggulan Indonesia dengan teknologi terkini
            </p>
            <Button asChild size="lg">
                <Link href="/book-appointment">Book Appointment Now!</Link>
            </Button>
            <div className="mt-12 flex flex-wrap justify-center gap-4 md:gap-6">
                {highlights.map((text, index) => (
                    <div key={index} className="flex items-center gap-2 bg-background/70 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold text-primary shadow-sm">
                        <Star className="h-4 w-4 text-accent"/>
                        <span>{text}</span>
                    </div>
                ))}
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
                    <div className="aspect-video w-full">
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

      {/* Section 4: Proven Results */}
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
                 <a href={`https://www.instagram.com/reel/${video.id}/`} target="_blank" rel="noopener noreferrer" key={video.id} className="block relative aspect-[9/16] rounded-lg overflow-hidden shadow-lg group">
                    <iframe
                        className="w-full h-full absolute inset-0"
                        src={`https://www.instagram.com/reel/${video.id}/embed`}
                        scrolling="no"
                        allowFullScreen
                        title={`Instagram Reel ${video.id}`}
                        loading="lazy"
                    ></iframe>
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        <Video className="w-12 h-12 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
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
}
