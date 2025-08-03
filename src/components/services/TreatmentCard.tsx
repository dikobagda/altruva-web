
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface TreatmentCardProps {
  id: string;
  title: string;
  description: Record<'en' | 'id', string>;
  price: string;
  imageSrc: string;
  imageHint: string;
}

export default function TreatmentCard({ id, title, description, price, imageSrc, imageHint }: TreatmentCardProps) {
  const { t } = useLanguage();
  
  return (
    <Link href={`/services/${id}`} className="flex h-full">
      <Card id={id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full w-full group">
        {/* <div className="relative w-full aspect-video overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-ai-hint={imageHint}
          />
        </div> */}
        <CardHeader>
          <div className="flex items-center space-x-3 mb-2">
            <CardTitle className="font-serif text-2xl text-primary">{title}</CardTitle>
          </div>
          <CardDescription className="text-foreground/70 h-20 overflow-hidden text-ellipsis"> 
            {t(description)}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          {price.toLowerCase() !== 'price on consultation' ? (
            <div>
              <span className="text-xs font-normal text-muted-foreground">start from</span>
              <p className="text-xl font-semibold text-accent">{price}</p>
            </div>
          ) : (
            <p className="text-lg font-semibold text-accent">{price}</p>
          )}
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full font-semibold group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
