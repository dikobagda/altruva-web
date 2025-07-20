
import PageTitle from '@/components/shared/PageTitle';
import SectionWrapper from '@/components/shared/SectionWrapper';
import InsightCard from '@/components/insights/InsightCard';
import { insights } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'Insights - Altruva',
  description: 'Explore the latest in aesthetic science, wellness, and beauty from the experts at Altruva.',
};

export default function InsightsPage() {
  const featuredInsight = insights[0];
  const otherInsights = insights.slice(1);

  return (
    <SectionWrapper>
      <PageTitle 
        title="Insights from Altruva" 
        subtitle="Explore the latest in aesthetic science, wellness, and beauty from our experts." 
      />

      {/* Featured Insight */}
      {featuredInsight && (
        <Link href={featuredInsight.href} className="block mb-12 group">
            <Card className="grid md:grid-cols-2 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full h-64 md:h-auto min-h-[300px]">
                    <Image
                        src={featuredInsight.imageSrc}
                        alt={featuredInsight.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={featuredInsight.imageHint}
                        priority
                    />
                </div>
                <div className="flex flex-col p-8 justify-center">
                    <CardHeader className="p-0 mb-4">
                        <p className="text-sm text-accent font-semibold mb-2">Featured Article</p>
                        <CardTitle className="font-serif text-3xl text-primary leading-tight">{featuredInsight.title}</CardTitle>
                        <div className="flex items-center text-sm text-muted-foreground pt-2">
                            <CalendarDays className="h-4 w-4 mr-2" />
                            <span>{featuredInsight.date}</span>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0 flex-grow">
                        <p className="text-foreground/80 text-lg">{featuredInsight.excerpt}</p>
                    </CardContent>
                    <div className="mt-6">
                        <Button variant="link" className="p-0 text-lg font-semibold text-primary group-hover:underline">
                            Read More <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </Card>
        </Link>
      )}

      {/* Other Insights */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {otherInsights.map((insight) => (
          <InsightCard key={insight.id} insight={insight} />
        ))}
      </div>
    </SectionWrapper>
  );
}
