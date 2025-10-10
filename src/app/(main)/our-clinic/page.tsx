
'use client';

import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { CheckCircle, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function OurClinicPage() {
  const { t } = useLanguage();

  const clinicImages = [
    {
      src: 'https://placehold.co/600x400.png',
      alt: 'Comfortable and modern reception area',
      title: { en: 'Warm Welcome', id: 'Sambutan Hangat' },
      hint: 'modern clinic reception',
    },
    {
      src: 'https://placehold.co/600x400.png',
      alt: 'Private and serene treatment room',
      title: { en: 'Private Treatment Rooms', id: 'Ruang Perawatan Pribadi' },
      hint: 'serene treatment room',
    },
    {
      src: 'https://placehold.co/600x400.png',
      alt: 'Advanced aesthetic technology and equipment',
      title: { en: 'Advanced Technology', id: 'Teknologi Canggih' },
      hint: 'aesthetic laser machine',
    },
  ];

  return (
    <>
      <SectionWrapper className="pt-0">
        <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-2xl">
          <Image
            src="/images/clinic-front.jpeg"
            alt="The modern and welcoming entrance of Altruva Aesthetic Clinic"
            fill
            className="object-cover"
            data-ai-hint="modern clinic exterior"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8">
            <h2 className="text-4xl font-serif font-bold text-white shadow-lg">
              {t({ en: 'A Sanctuary for Your Transformation', id: 'Sebuah Suaka untuk Transformasi Anda' })}
            </h2>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-secondary/30">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold text-primary">
              {t({ en: 'Experience Tranquility & Technology', id: 'Rasakan Ketenangan & Teknologi' })}
            </h2>
            <p className="text-lg text-foreground/80">
              {t({
                en: 'At Altruva, every detail of our clinic has been thoughtfully curated to create an environment that is both welcoming and professional. We believe that a calm and beautiful space is an essential part of the healing and rejuvenation process.',
                id: 'Di Altruva, setiap detail klinik kami telah dirancang dengan cermat untuk menciptakan lingkungan yang ramah dan profesional. Kami percaya bahwa ruang yang tenang dan indah adalah bagian penting dari proses penyembuhan dan peremajaan.',
              })}
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary">{t({ en: 'Ultimate Privacy', id: 'Privasi Utama' })}</h4>
                  <p className="text-foreground/70">
                    {t({
                      en: 'Our spacious, private treatment rooms ensure your utmost comfort and confidentiality.',
                      id: 'Ruang perawatan kami yang luas dan pribadi memastikan kenyamanan dan kerahasiaan tertinggi Anda.',
                    })}
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary">{t({ en: 'Medical-Grade Standards', id: 'Standar Kelas Medis' })}</h4>
                  <p className="text-foreground/70">
                    {t({
                      en: 'We adhere to the highest standards of safety and hygiene for your peace of mind.',
                      id: 'Kami mematuhi standar keamanan dan kebersihan tertinggi untuk ketenangan pikiran Anda.',
                    })}
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary">{t({ en: 'Advanced Equipment', id: 'Peralatan Canggih' })}</h4>
                  <p className="text-foreground/70">
                    {t({
                      en: 'We invest in the latest, clinically-proven technology to deliver superior results.',
                      id: 'Kami berinvestasi pada teknologi terbaru yang teruji secara klinis untuk memberikan hasil yang unggul.',
                    })}
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
             <Image
                src="/images/treatment-clinic.jpeg"
                alt="A detail shot of the clinic's calming decor"
                fill
                className="object-cover"
                data-ai-hint="calm clinic decor"
              />
          </div>
        </div>
      </SectionWrapper>
      {/*
      <SectionWrapper>
        <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-primary">
              {t({ en: 'A Glimpse Inside Altruva', id: 'Sekilas Tentang Altruva' })}
            </h2>
            <p className="text-lg text-foreground/80 mt-2 max-w-2xl mx-auto">
              {t({ en: 'Explore the spaces where your aesthetic journey unfolds.', id: 'Jelajahi ruang di mana perjalanan estetika Anda terungkap.' })}
            </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clinicImages.map((image) => (
            <Card key={t(image.title)} className="overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={image.hint}
                  />
                </div>
                <div className="p-4 bg-card">
                  <CardTitle className="font-serif text-xl text-primary">{t(image.title)}</CardTitle>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>
      
      <SectionWrapper className="bg-primary text-primary-foreground">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            {t({ en: 'Visit Us in Person', id: 'Kunjungi Kami Secara Langsung' })}
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            {t({
              en: 'We invite you to experience the Altruva difference firsthand. Our clinic is conveniently located and ready to welcome you.',
              id: 'Kami mengundang Anda untuk merasakan perbedaan Altruva secara langsung. Klinik kami berlokasi strategis dan siap menyambut Anda.',
            })}
          </p>
           <div className="flex justify-center items-center text-lg mb-8 bg-black/10 p-3 rounded-lg text-center">
             <MapPin className="h-6 w-6 mr-3 flex-shrink-0"/> 
             <span>Jl. Ciasem I No.2, RT.2/RW.4, Rw. Bar, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12180</span>
           </div>
          <Button asChild size="lg" variant="secondary" className="font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link href="/book-appointment">{t({ en: 'Schedule Your Visit', id: 'Jadwalkan Kunjungan Anda' })}</Link>
          </Button>
        </div>
      </SectionWrapper>
      */}
    </>
  );
}
