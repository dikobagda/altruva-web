
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Testimonial } from '@/lib/constants';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export default function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  const { t } = useLanguage();
  return (
    <Card className={cn("flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300", className)}>
      <CardHeader>
        <div className="flex items-center space-x-4 mb-2">
          <div>
            <CardTitle className="font-serif text-xl text-primary">{testimonial.name}</CardTitle>
            <CardDescription className="text-sm text-accent">{testimonial.procedure}</CardDescription>
          </div>
        </div>
         <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`} 
              />
            ))}
          </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-foreground/80 italic leading-relaxed">"{t(testimonial.text)}"</p>
      </CardContent>
    </Card>
  );
}
