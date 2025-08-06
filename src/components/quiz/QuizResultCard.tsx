
import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { QuizResult } from '@/lib/constants';

interface QuizResultCardProps {
  result: QuizResult;
}

const QuizResultCard = React.memo(function QuizResultCard({ result }: QuizResultCardProps) {
  return (
    <Card className="border-primary border-2 shadow-xl text-center">
      <CardHeader>
        <CardDescription className="text-base">Your Recommended Harmony Plan is...</CardDescription>
        <CardTitle className="font-serif text-5xl text-primary">
          {result.tier} <span className="text-3xl">{result.icon}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="font-semibold text-accent">{result.profile}</p>
        <p className="text-foreground/80 max-w-md mx-auto">{result.description}</p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button asChild>
          <Link href="/about-us/369-harmony">
            Explore Your Plan <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
});

QuizResultCard.displayName = 'QuizResultCard';
export default QuizResultCard;
