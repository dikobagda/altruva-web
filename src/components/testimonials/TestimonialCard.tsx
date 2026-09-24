
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Testimonial } from '@/lib/data/testimonials';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

const TestimonialCard = React.memo(function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  
  const text = t(testimonial.text);
  const isLong = text.length > 150;
  
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
      <CardContent className="flex-grow flex flex-col justify-start">
        <p className={cn("text-foreground/80 italic leading-relaxed", !isExpanded && "line-clamp-4")}>
          "{text}"
        </p>
        {isLong && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary font-semibold text-sm mt-2 text-left hover:underline"
          >
            {isExpanded ? (t({ en: 'Read less', id: 'Lebih sedikit' })) : (t({ en: 'Read more', id: 'Selengkapnya' }))}
          </button>
        )}
      </CardContent>
    </Card>
  );
});

TestimonialCard.displayName = 'TestimonialCard';
export default TestimonialCard;
