
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { insights } from '@/lib/constants';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CalendarDays } from 'lucide-react';
import InsightCard from '@/components/insights/InsightCard';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return insights.map((insight) => ({
    slug: insight.href.split('/').pop(),
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const insight = insights.find((i) => i.href.endsWith(params.slug));

  if (!insight) {
    return {
      title: 'Insight Not Found',
    };
  }

  return {
    title: `${insight.title} - Altruva Insights`,
    description: insight.excerpt,
    keywords: insight.title.split(' ').concat(['Altruva', 'Aesthetic Clinic', 'dr. Olivia Aldisa']),
  };
}

export default function InsightDetailPage({ params }: { params: { slug: string } }) {
  const insight = insights.find((i) => i.href.endsWith(params.slug));

  if (!insight) {
    notFound();
  }

  const relatedInsights = insights.filter(i => i.id !== insight.id).slice(0, 3);

  return (
    <>
      <SectionWrapper className="pt-12 pb-8 md:pt-20 md:pb-12 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <Button asChild variant="ghost" className="mb-4">
             <Link href="/insights"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Insights</Link>
          </Button>
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <CalendarDays className="h-4 w-4 mr-2" />
            <span>{insight.date}</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">{insight.title}</h1>
          <p className="text-xl text-foreground/80">{insight.excerpt}</p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="pt-0">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            <article className="lg:col-span-2 prose prose-lg max-w-none text-foreground/90">
                {insight.imageSrc && (
                  <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-8 shadow-lg">
                      <Image 
                          src={insight.imageSrc}
                          alt={insight.title}
                          fill
                          className="object-cover"
                          data-ai-hint={insight.imageHint}
                          priority
                      />
                  </div>
                )}
                <div 
                    className="prose prose-lg max-w-none text-foreground/80 [&>p]:mb-4 [&>h2]:font-serif [&>h2]:text-primary [&>h2]:text-3xl [&>h2]:mb-4 [&>h3]:font-serif [&>h3]:text-primary" 
                    dangerouslySetInnerHTML={{ __html: insight.content || "<p>Content coming soon.</p>" }} 
                />
            </article>

            <aside className="lg:col-span-1 space-y-8 sticky top-24">
                <div className="p-6 rounded-lg bg-secondary/50">
                    <h3 className="font-serif text-2xl text-primary mb-4">Related Insights</h3>
                    <div className="space-y-6">
                        {relatedInsights.map(related => (
                            <Link href={related.href} key={related.id} className="flex items-center space-x-4 group">
                                {related.imageSrc && (
                                <div className="relative h-20 w-20 rounded-md overflow-hidden shrink-0">
                                    <Image 
                                        src={related.imageSrc}
                                        alt={related.title}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={related.imageHint}
                                    />
                                </div>
                                )}
                                <div>
                                    <p className="font-semibold text-primary group-hover:underline leading-tight">{related.title}</p>
                                    <p className="text-xs text-muted-foreground mt-1">{related.date}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </aside>
        </div>

      </SectionWrapper>
    </>
  );
}
