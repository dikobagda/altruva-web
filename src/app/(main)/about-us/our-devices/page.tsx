
'use client';

import Image from 'next/image';
import PageTitle from '@/components/shared/PageTitle';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function OurDevicesPage() {
  const { t } = useLanguage();

  const devices = [
    {
      name: 'Sofwave',
      image: '/images/devices/sofwave.webp',
      description: {
        en: 'Next-generation SUPERB™ Synchronous Ultrasound Parallel Beam technology for non-invasive wrinkle reduction and lifting of the eyebrows, neck, and submental area.',
        id: 'Teknologi SUPERB™ Synchronous Ultrasound Parallel Beam generasi berikutnya untuk pengurangan kerutan non-invasif dan pengencangan alis, leher, dan area submental.',
      },
      href: '/services/art-lyft',
    },
    {
      name: 'Emsculpt Neo',
      image: '/images/devices/emsculpt.png',
      description: {
        en: 'The first and only non-invasive body shaping procedure that provides simultaneous fat elimination and muscle building in a combined 30-minute session.',
        id: 'Prosedur pembentukan tubuh non-invasif pertama dan satu-satunya yang menyediakan eliminasi lemak dan pembentukan otot secara bersamaan dalam sesi gabungan 30 menit.',
      },
      href: '/services/altruva-neocurve',
    },
    {
      name: 'Exion',
      image: '/images/devices/exion.avif',
      description: {
        en: 'A multi-platform device offering radiofrequency and targeted ultrasound for skin tightening, textural refinement, and enhanced hyaluronic acid production.',
        id: 'Perangkat multi-platform yang menawarkan frekuensi radio dan ultrasound yang ditargetkan untuk pengencangan kulit, penyempurnaan tekstur, dan peningkatan produksi asam hialuronat.',
      },
      href: '/services/exion-lumi-rf',
    },
    {
      name: 'Remee',
      image: '/images/devices/remee_trans.png',
      description: {
        en: 'Advanced technology for deep dermal analysis and diagnostics, allowing for hyper-personalized treatment planning.',
        id: 'Teknologi canggih untuk analisis dan diagnostik dermal mendalam, memungkinkan perencanaan perawatan yang sangat dipersonalisasi.',
      },
      href: '#',
    },
  ];

  return (
    <SectionWrapper>
      <PageTitle
        title={t({ en: 'Our Technology', id: 'Teknologi Kami' })}
        subtitle={t({
          en: 'We invest in the world’s leading, clinically-proven technologies to ensure every treatment is safe, effective, and delivers superior results.',
          id: 'Kami berinvestasi pada teknologi terdepan dunia yang teruji secara klinis untuk memastikan setiap perawatan aman, efektif, dan memberikan hasil yang unggul.',
        })}
      />
      <div className="space-y-20">
        {devices.map((device, index) => (
          <div key={device.name} className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className={cn("relative aspect-video w-full", index % 2 === 1 && "md:order-2")}>
              <Image
                src={device.image}
                alt={device.name}
                fill
                className="object-contain rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className={cn("space-y-4", index % 2 === 1 && "md:order-1")}>
              <h3 className="font-serif text-3xl font-bold text-primary">{device.name}</h3>
              <p className="text-lg text-foreground/80">{t(device.description)}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
