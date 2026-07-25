

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { insights } from '@/lib/data/insights';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CalendarDays } from 'lucide-react';
import InsightCard from '@/components/insights/InsightCard';
import type { Metadata } from 'next';
import JsonLd from '@/components/shared/JsonLd';

export async function generateStaticParams() {
  return insights
    .filter((insight) => insight.href) // Filter out insights without an href
    .map((insight) => ({
      slug: insight.href!.split('/').pop(),
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const insight = insights.find((i) => i.href && i.href.endsWith(slug));

  if (!insight) {
    return {
      title: 'Article Not Found',
    };
  }

  const baseKeywords = ['Altruva', 'Aesthetic Clinic', 'dr. Olivia Aldisa'];
  const dynamicKeywords = insight.keywords ? insight.keywords : insight.title.split(' ');

  return {
    title: `${insight.title} - Altruva Articles`,
    description: insight.excerpt,
    keywords: [...new Set([...dynamicKeywords, ...baseKeywords])], // Combine and remove duplicates
  };
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = insights.find((i) => i.href && i.href.endsWith(slug));

  if (!insight) {
    notFound();
  }

  const relatedInsights = insights.filter(i => i.id !== insight.id && i.href).slice(0, 3);

  let datePublished: string | undefined;
  try {
    if (insight.date) {
      datePublished = new Date(insight.date).toISOString();
    }
  } catch (e) {
    // Ignore and fallback
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://altruva.co.id/insights/${slug}#post`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://altruva.co.id/insights/${slug}`
    },
    "headline": insight.title,
    "description": insight.excerpt,
    "image": insight.imageSrc ? `https://altruva.co.id${insight.imageSrc}` : undefined,
    "datePublished": datePublished,
    "author": {
      "@type": "Person",
      "name": "dr. Olivia Aldisa",
      "jobTitle": "Aesthetic Doctor & Clinic Founder",
      "url": "https://altruva.co.id/about-us/meet-dr-olivia-aldisa"
    },
    "publisher": {
      "@type": "MedicalBusiness",
      "@id": "https://altruva.co.id/#clinic",
      "name": "Altruva Aesthetic Clinic",
      "logo": {
        "@type": "ImageObject",
        "url": "https://altruva.co.id/images/logoaltruvanew.webp"
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://altruva.co.id"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Insights",
        "item": "https://altruva.co.id/insights"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": insight.title,
        "item": `https://altruva.co.id/insights/${slug}`
      }
    ]
  };

  return (
    <>
      <JsonLd schema={[articleSchema, breadcrumbSchema]} />
      <SectionWrapper className="pt-12 pb-8 md:pt-20 md:pb-12 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <Button asChild variant="ghost" className="mb-4">
             <Link href="/insights"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Articles</Link>
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
                    <h3 className="font-serif text-2xl text-primary mb-4">Related Articles</h3>
                    <div className="space-y-6">
                        {relatedInsights.map(related => (
                            <Link href={related.href!} key={related.id} className="flex items-center space-x-4 group">
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
