
import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Rss, Megaphone } from 'lucide-react';

export const metadata = {
  title: 'News & Media - Altruva',
  description: 'Stay updated with the latest news, press features, and announcements from Altruva Aesthetic Clinic.',
};

const pressFeatures = [
  {
    name: 'Vogue',
    logo: 'https://placehold.co/150x50.png',
    link: '#',
    description: "The Future of Aesthetics: Altruva's Regenerative Approach",
    hint: 'vogue logo'
  },
  {
    name: "Harper's Bazaar",
    logo: 'https://placehold.co/150x50.png',
    link: '#',
    description: 'A Sanctuary of Science and Beauty in the City',
    hint: 'harpers bazaar logo'
  },
  {
    name: 'Elle',
    logo: 'https://placehold.co/150x50.png',
    link: '#',
    description: 'Why Non-Invasive Treatments Are The New Go-To',
    hint: 'elle logo'
  },
  {
    name: 'Tatler',
    logo: 'https://placehold.co/150x50.png',
    link: '#',
    description: "Inside Jakarta's Most Exclusive Aesthetic Clinic",
    hint: 'tatler logo'
  },
];

const latestNews = [
  {
    id: '1',
    title: 'Altruva Introduces the New "Liquid Gold" Treatment',
    date: 'July 15, 2024',
    excerpt: 'We are thrilled to announce our latest innovation in regenerative skincare, a treatment designed to deeply nourish and restore your skin\'s natural radiance from within.',
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'glowing skincare product',
  },
  {
    id: '2',
    title: 'Dr. Evelyn Reed to Speak at Global Aesthetics Conference',
    date: 'June 28, 2024',
    excerpt: 'Our lead practitioner, Dr. Evelyn Reed, has been invited to share her insights on the future of non-surgical facelifts at the upcoming Global Aesthetics Conference in Geneva.',
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'professional conference presentation',
  },
];

export default function NewsAndMediaPage() {
  return (
    <>
      <SectionWrapper>
        <div className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-3">News & Media</h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
              Follow our journey and discover our features in leading publications and our latest announcements.
            </p>
        </div>
      </SectionWrapper>

      {/* As Featured In Section */}
      <SectionWrapper className="bg-secondary/30">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-primary">As Featured In</h2>
          <p className="text-lg text-foreground/80 mt-2">Altruva is proud to be recognized by leading voices in beauty and lifestyle.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {pressFeatures.map((feature) => (
            <Link key={feature.name} href={feature.link} target="_blank" rel="noopener noreferrer" className="group">
                <div className="p-4 bg-card rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
                    <Image 
                        src={feature.logo}
                        alt={`${feature.name} Logo`}
                        width={150}
                        height={50}
                        className="mx-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                        data-ai-hint={feature.hint}
                    />
                </div>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* Latest News Section */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-primary">Latest From Altruva</h2>
           <p className="text-lg text-foreground/80 mt-2">Stay informed about our new treatments, events, and clinic news.</p>
        </div>
        <div className="max-w-4xl mx-auto space-y-12">
          {latestNews.map((item) => (
            <Card key={item.id} className="grid md:grid-cols-2 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full h-64 md:h-auto">
                    <Image
                        src={item.imageSrc}
                        alt={item.title}
                        fill
                        className="object-cover"
                        data-ai-hint={item.imageHint}
                    />
                </div>
                <div className="flex flex-col p-6">
                    <CardHeader className="p-0 mb-4">
                        <CardDescription className="text-sm text-muted-foreground">{item.date}</CardDescription>
                        <CardTitle className="font-serif text-2xl text-primary leading-tight">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 flex-grow">
                        <p className="text-foreground/80">{item.excerpt}</p>
                    </CardContent>
                    <div className="mt-6">
                        <Button variant="link" className="p-0 text-primary">Read More</Button>
                    </div>
                </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="bg-primary text-primary-foreground">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Stay Connected</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Follow us on social media for real-time updates and daily inspiration. For press inquiries, please contact us directly.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
