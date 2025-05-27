
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { GalleryImage } from '@/lib/constants';

interface GalleryItemProps {
  item: GalleryImage;
}

export default function GalleryItem({ item }: GalleryItemProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="pb-2">
        <CardTitle className="font-serif text-xl text-primary">{item.procedure}</CardTitle>
        <CardDescription className="text-foreground/70">{item.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-sm mb-1 text-center text-muted-foreground">Before</h4>
            <div className="aspect-square relative rounded-md overflow-hidden border border-border">
              <Image
                src={item.beforeSrc}
                alt={`Before - ${item.procedure}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 15vw"
                data-ai-hint={item.beforeHint}
              />
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-1 text-center text-muted-foreground">After</h4>
            <div className="aspect-square relative rounded-md overflow-hidden border border-border">
              <Image
                src={item.afterSrc}
                alt={`After - ${item.procedure}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 15vw"
                data-ai-hint={item.afterHint}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
