
'use client';

import React from 'react';
import Image from 'next/image';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ProvenResultsSectionProps {
  whatsappLink: string;
}

const beforeAfters = [
    { src: "/images/flyer/paulina-before-after-2.webp", hint: 'facial contouring before after' },
    { src: "/images/flyer/atiqah-bf.webp", hint: 'facial rejuvenation before after' },
    { src: "/images/flyer/unk-bf.webp", hint: 'skin tightening before after' },
];

export default function ProvenResultsSection({ whatsappLink }: ProvenResultsSectionProps) {
  return (
    <SectionWrapper>
      <h2 className="font-serif text-3xl md:text-4xl text-center mb-12 text-primary font-bold">Proven results</h2>
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
          <Link href={whatsappLink} target="_blank">Book Appointment Now!</Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
