
import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Rss, Megaphone, Youtube, Newspaper } from 'lucide-react';
import PageTitle from '@/components/shared/PageTitle';

export const metadata = {
  title: 'News & Media - Altruva',
  description: 'Stay updated with the latest news, press features, and announcements from Altruva Aesthetic Clinic.',
};

const pressFeatures = [
  {
    publication: 'Fimela',
    title: 'Jelang Usia 40 Tahun, Atiqah Hasiholan Lakukan Filler Rejuvenation Cocktail untuk Perawatan Wajah',
    link: 'https://www.fimela.com/amp/4592983/jelang-usia-40-tahun-atiqah-hasiholan-lakukan-filler-rejuvenation-cocktail-untuk-perawatan-wajah',
    type: 'article'
  },
  {
    publication: 'Liputan6',
    title: 'Jelang Usia Kepala 4, Atiqah Hasiholan Lirik Filler Sambil Tetap Cintai Buah dan Sayur',
    link: 'https://www.liputan6.com/showbiz/read/4590906/jelang-usia-kepala-4-atiqah-hasiholan-lirik-filler-sambil-tetap-cintai-buah-dan-sayur',
    type: 'article'
  },
  {
    publication: 'Stylo Grid',
    title: 'Pilihan Perawatan Wajah Bopeng (Acne Scar) di Klinik Kecantikan dengan Biostimulator Filler dan Picolaser serta Chemical Peeling',
    link: 'https://stylo.grid.id/amp/142758372/pilihan-perawatan-wajah-bopeng-acne-scar-di-klinik-kecantikan-dengan-biostimulator-filler-dan-picolaser-serta-chemical-peeling?page=all',
    type: 'article'
  },
  {
    publication: 'Antara News',
    title: 'Mengatasi kulit kendur dengan filler yang tepat',
    link: 'https://m.antaranews.com/amp/berita/2231398/mengatasi-kulit-kendur-dengan-filler-yang-tepat',
    type: 'article'
  },
];

export default function NewsAndMediaPage() {
  return (
    <>
      <SectionWrapper>
        <PageTitle 
          title="Altruva in the Media" 
          subtitle="Discover what the press is saying about our innovative treatments and philosophy." 
        />
        
        {/* YouTube Video Section */}
        <Card className="mb-12 shadow-xl overflow-hidden">
            <CardHeader>
                <div className="flex items-center space-x-3">
                    <Youtube className="h-8 w-8 text-red-600"/>
                    <CardTitle className="font-serif text-2xl text-primary">Filler Rejuvenation Cocktail for Atiqah Hasiholan</CardTitle>
                </div>
                <CardDescription>Watch the feature on Fimela com</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="aspect-video w-full rounded-lg overflow-hidden">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/T6WsQB8FEBw"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </CardContent>
        </Card>
        
        {/* Press Articles Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {pressFeatures.map((feature, index) => (
            <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex-grow">
                    <div className="flex items-center space-x-3 mb-2">
                         <Newspaper className="h-6 w-6 text-accent"/>
                        <h3 className="font-bold text-lg text-primary">{feature.publication}</h3>
                    </div>
                    <CardTitle className="font-serif text-xl leading-tight">{feature.title}</CardTitle>
                </CardHeader>
                <div className="p-6 pt-0 mt-auto">
                    <Button asChild className="w-full font-semibold">
                        <Link href={feature.link} target="_blank" rel="noopener noreferrer">
                            Read More
                        </Link>
                    </Button>
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
