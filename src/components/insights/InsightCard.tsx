
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Insight } from '@/lib/constants';
import { ArrowRight, CalendarDays } from 'lucide-react';

interface InsightCardProps {
  insight: Insight;
}

export default function InsightCard({ insight }: InsightCardProps) {
  return (
    <Link href={insight.href} className="flex h-full">
      <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full w-full group">
        <div className="relative w-full aspect-video overflow-hidden">
          <Image
            src={insight.imageSrc}
            alt={insight.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            data-ai-hint={insight.imageHint}
          />
        </div>
        <CardHeader>
          <CardTitle className="font-serif text-xl text-primary leading-tight h-14 overflow-hidden">{insight.title}</CardTitle>
           <div className="flex items-center text-sm text-muted-foreground pt-1">
             <CalendarDays className="h-4 w-4 mr-2" />
             <span>{insight.date}</span>
           </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-foreground/80 text-sm h-24 overflow-hidden text-ellipsis">
            {insight.excerpt}
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="link" className="p-0 font-semibold text-primary group-hover:underline">
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
