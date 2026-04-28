
'use client';

import React from 'react';
import Image from 'next/image';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface BenefitsSectionProps {
  whatsappLink: string;
}

const benefits = [
    {
      title: "Hasil kontur wajah yang harmonis dan natural",
      image: { src: "/images/flyer/atiqah1.webp" },
      imageHint: "natural facial contour"
    },
    {
      title: "Wajah kencang, kenyal dan cerah tanpa downtime",
      image: { src: "/images/flyer/atiqah2.webp" },
      imageHint: "sofwave treatment"
    },
    {
      title: "Memproduksi ulang kolagen yang hilang",
      image: { src: "/images/flyer/softwave1.webp" },
      imageHint: "collagen stimulation"
    },
    {
      title: "Prosedur yang nyaman berdasarkan standar internasional",
      image: { src: "/images/flyer/softwave2.webp" },
      imageHint: "comfortable aesthetic procedure"
    }
];

export default function BenefitsSection({ whatsappLink }: BenefitsSectionProps) {
  return (
    <SectionWrapper
      className="relative !py-20"
      style={{
        backgroundImage: "url('/images/flyer/bg-softwave.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="text-center">
        <h2 className="font-serif text-5xl md:text-6xl text-primary" style={{ color: '#4a301b' }}>Sofwave</h2>
        <p className="font-serif text-3xl md:text-4xl text-primary/90" style={{ color: '#4a301b' }}>The Luxury of Looking Effortlessly Beautiful</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {benefits.map((benefit, index) => (
          <div key={index} className="relative aspect-[3/4] rounded-2xl overflow-hidden group shadow-xl text-white">
            <Image src={benefit.image.src} alt={benefit.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={benefit.imageHint} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end">
              <p className="font-bold text-6xl md:text-7xl drop-shadow-lg italic opacity-80">0{index + 1}</p>
              <p className="font-semibold text-lg md:text-xl leading-tight drop-shadow-md mt-2">{benefit.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button asChild size="lg" className="bg-[#4a301b] text-white hover:bg-[#5a402b] rounded-full px-10 py-6 text-lg font-semibold">
          <Link href={whatsappLink} target="_blank">Begin Your Transformation</Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
