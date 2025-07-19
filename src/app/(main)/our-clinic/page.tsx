
import Image from 'next/image';
import Link from 'next/link';
import PageTitle from '@/components/shared/PageTitle';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { CheckCircle, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Our Clinic - Altruva',
  description: 'Explore our state-of-the-art aesthetic clinic. A serene, professional environment designed for your comfort and safety.',
};

const clinicImages = [
  {
    src: 'https://placehold.co/600x400.png',
    alt: 'Comfortable and modern reception area',
    title: 'Warm Welcome',
    hint: 'modern clinic reception',
  },
  {
    src: 'https://placehold.co/600x400.png',
    alt: 'Private and serene treatment room',
    title: 'Private Treatment Rooms',
    hint: 'serene treatment room',
  },
  {
    src: 'https://placehold.co/600x400.png',
    alt: 'Advanced aesthetic technology and equipment',
    title: 'Advanced Technology',
    hint: 'aesthetic laser machine',
  },
];

export default function OurClinicPage() {
  return (
    <>
      <SectionWrapper>
        
      </SectionWrapper>

      <SectionWrapper className="pt-0">
        <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-2xl">
          <Image
            src="https://placehold.co/1200x500.png"
            alt="Panoramic view of the Altruva clinic interior"
            fill
            className="object-cover"
            data-ai-hint="modern clinic interior panoramic"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8">
            <h2 className="text-4xl font-serif font-bold text-white shadow-lg">A Sanctuary for Your Transformation</h2>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-secondary/30">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold text-primary">Experience Tranquility & Technology</h2>
            <p className="text-lg text-foreground/80">
              At Altruva, every detail of our clinic has been thoughtfully curated to create an environment that is both welcoming and professional. We believe that a calm and beautiful space is an essential part of the healing and rejuvenation process.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary">Ultimate Privacy</h4>
                  <p className="text-foreground/70">Our spacious, private treatment rooms ensure your utmost comfort and confidentiality.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary">Medical-Grade Standards</h4>
                  <p className="text-foreground/70">We adhere to the highest standards of safety and hygiene for your peace of mind.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary">Advanced Equipment</h4>
                  <p className="text-foreground/70">We invest in the latest, clinically-proven technology to deliver superior results.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
             <Image
                src="https://placehold.co/600x750.png"
                alt="A detail shot of the clinic's calming decor"
                fill
                className="object-cover"
                data-ai-hint="calm clinic decor"
              />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-primary">A Glimpse Inside Altruva</h2>
            <p className="text-lg text-foreground/80 mt-2 max-w-2xl mx-auto">Explore the spaces where your aesthetic journey unfolds.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clinicImages.map((image) => (
            <Card key={image.title} className="overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-300">
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
                  <CardTitle className="font-serif text-xl text-primary">{image.title}</CardTitle>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>
      
      <SectionWrapper className="bg-primary text-primary-foreground">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Visit Us in Person</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            We invite you to experience the Altruva difference firsthand. Our clinic is conveniently located and ready to welcome you.
          </p>
           <div className="flex justify-center items-center text-lg mb-8 bg-black/10 p-3 rounded-lg">
             <MapPin className="h-6 w-6 mr-3"/> 
             <span>123 Beauty Lane, Serenity City, SC 12345</span>
           </div>
          <Button asChild size="lg" variant="secondary" className="font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link href="/book-appointment">Schedule Your Visit</Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
