
import Image from 'next/image';
import Link from 'next/link';
import PageTitle from '@/components/shared/PageTitle';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { DownloadCloud } from 'lucide-react';
import { beautyJournals } from '@/lib/data/beauty-journal';

export const metadata = {
  title: 'Beauty Journal - Altruva',
  description: 'Download the latest monthly e-magazine from Altruva for beauty insights and trends.',
};

export default function BeautyJournalPage() {
  return (
    <SectionWrapper>
      <PageTitle
        title="Beauty Journal"
        subtitle="Your monthly source for regenerative aesthetics, wellness, and timeless beauty. Download the latest edition."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {beautyJournals.map((journal) => (
          <Card key={journal.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="relative w-full aspect-[3/4]">
                <Image
                  src={journal.coverImage}
                  alt={`Cover for ${journal.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </CardContent>
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-primary">{journal.title}</CardTitle>
              <CardDescription>{journal.issue}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
              {journal.slug ? (
                <Button asChild className="w-full font-semibold group relative overflow-hidden">
                  <Link href={`/beauty-journal/${journal.slug}`}>
                    <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">Read Article</span>
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </Button>
              ) : journal.downloadUrl ? (
                <Button asChild className="w-full font-semibold group relative overflow-hidden" variant="outline">
                  <a href={journal.downloadUrl} download>
                    <DownloadCloud className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" />
                    <span className="relative z-10">Download PDF</span>
                    <div className="absolute inset-0 bg-muted/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                </Button>
              ) : null}
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
