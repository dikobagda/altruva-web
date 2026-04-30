
'use client';

import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import PageTitle from '@/components/shared/PageTitle';
import SectionWrapper from '@/components/shared/SectionWrapper';

const Carousel = dynamic(() => import('@/components/ui/carousel').then(mod => mod.Carousel), { ssr: false });
const CarouselContent = dynamic(() => import('@/components/ui/carousel').then(mod => mod.CarouselContent), { ssr: false });
const CarouselItem = dynamic(() => import('@/components/ui/carousel').then(mod => mod.CarouselItem), { ssr: false });
const CarouselNext = dynamic(() => import('@/components/ui/carousel').then(mod => mod.CarouselNext), { ssr: false });
const CarouselPrevious = dynamic(() => import('@/components/ui/carousel').then(mod => mod.CarouselPrevious), { ssr: false });

const Dialog = dynamic(() => import('@/components/ui/dialog').then(mod => mod.Dialog), { ssr: false });
const DialogContent = dynamic(() => import('@/components/ui/dialog').then(mod => mod.DialogContent), { ssr: false });
const DialogHeader = dynamic(() => import('@/components/ui/dialog').then(mod => mod.DialogHeader), { ssr: false });
const DialogTitle = dynamic(() => import('@/components/ui/dialog').then(mod => mod.DialogTitle), { ssr: false });
const DialogTrigger = dynamic(() => import('@/components/ui/dialog').then(mod => mod.DialogTrigger), { ssr: false });

const certificates = [
    { image: { src: "/images/flyer/cert/cert_7.webp" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert_8.webp" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert_9.webp" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert_1.webp" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert_2.webp" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert_3.webp" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert_4.webp" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert_5.webp" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert_6.webp" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert_10.webp" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert_11.webp" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert_12.webp" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert_13.webp" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert_14.webp" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert_15.webp" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert_16.webp" }, imageHint: "certificate" },
    { image: { src: "/images/flyer/cert/cert_17.webp" }, imageHint: "certificate" },
];

export default function CertificatesSection() {
  return (
    <SectionWrapper>
        <PageTitle title="Certificates and Awards" />
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {certificates.map((cert, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="relative aspect-video w-full rounded-lg overflow-hidden cursor-pointer group border-none p-0 bg-transparent block">
                        <Image src={cert.image.src} alt="Certificate" fill sizes="(max-width: 768px) 50vw, 33vw" className="object-contain group-hover:scale-105 transition-transform" data-ai-hint={cert.imageHint} />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="p-0 border-0 max-w-4xl">
                      <DialogHeader>
                        <DialogTitle className="sr-only">Certificate</DialogTitle>
                      </DialogHeader>
                      <Image
                        src={cert.image.src}
                        alt="Certificate"
                        width={1200}
                        height={675}
                        className="w-full h-auto rounded-lg object-contain"
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
  );
}
