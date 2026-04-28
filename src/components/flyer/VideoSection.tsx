
'use client';

import React from 'react';
import PageTitle from '@/components/shared/PageTitle';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

import VideoFacade from '@/components/shared/VideoFacade';

interface VideoSectionProps {
  whatsappLink: string;
}

const treatmentVideos = [
    { id: 's3JGxiB-8R4', title: "dr. Aldisa & Atiqah Cocktail Contouring™" },
    { id: 'AEHYP6BJsQU', title: "Paulina's Sofwave Journey" },
    { id: 'gn_1wzedRAA', title: "Indy's Gouri Experience" },
];

const socialVideos = [
    { id: 'fyYd0wE4uDY' },
    { id: '8j5eQI4nYA8' },
    { id: 'm4asSg5piJY' },
    { id: 'dODOyXmNSVA' },
];

export default function VideoSection({ whatsappLink }: VideoSectionProps) {
  return (
    <>
      <SectionWrapper className="bg-secondary/30">
        <PageTitle title="A glimpse of Altruva treatments" />
        <div className="grid md:grid-cols-3 gap-8">
          {treatmentVideos.map(video => (
            <Card key={video.id} className="shadow-lg overflow-hidden">
              <div className="aspect-[9/16] w-full relative">
                <VideoFacade videoId={video.id} title={video.title} />
              </div>
              <CardHeader>
                <CardTitle className="font-serif text-lg text-primary">{video.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href={whatsappLink} target="_blank">Book Appointment Now!</Link>
          </Button>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-secondary/30">
        <PageTitle title="Get to know us more at @altruvaclinic" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {socialVideos.map(video => (
            <div key={video.id} className="block relative aspect-[9/16] rounded-lg overflow-hidden shadow-lg group">
              <VideoFacade videoId={video.id} isShort={true} />
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
