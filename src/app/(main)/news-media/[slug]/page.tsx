import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { pressFeatures } from '@/lib/data/news-media';
import { fetchLinkMetadata } from '@/lib/metadata-scraper';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ExternalLink, Newspaper, Calendar } from 'lucide-react';
import JsonLd from '@/components/shared/JsonLd';

interface Props {
  params: Promise<{ slug: string }>;
}

const formatDate = (dateStr: string) => {
  if (!dateStr) return '';
  const [year, month, day] = dateStr.split('-');
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return `${months[parseInt(month, 10) - 1]} ${parseInt(day, 10)}, ${year}`;
};

export async function generateStaticParams() {
  return pressFeatures.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const feature = pressFeatures.find((f) => f.slug === slug);
  if (!feature) return {};

  const meta = await fetchLinkMetadata(feature.link);
  const title = `${feature.publication} - ${feature.title}`;
  const description = meta.description || `Read the press feature from ${feature.publication}: "${feature.title}"`;
  
  return {
    title: `${title} | Altruva News & Media`,
    description: description.substring(0, 160),
    alternates: {
      canonical: `/news-media/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://altruva.co.id/news-media/${slug}`,
      images: meta.image ? [{ url: meta.image }] : [],
      type: 'article',
    },
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const feature = pressFeatures.find((f) => f.slug === slug);
  if (!feature) {
    notFound();
  }

  const meta = await fetchLinkMetadata(feature.link);

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://altruva.co.id",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "News & Media",
        "item": "https://altruva.co.id/news-media",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": feature.title,
        "item": `https://altruva.co.id/news-media/${slug}`,
      },
    ],
  };

  const newsArticleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": feature.title,
    "image": meta.image ? [meta.image] : [],
    "datePublished": new Date().toISOString(), // Fallback
    "publisher": {
      "@type": "Organization",
      "name": feature.publication,
    },
    "description": meta.description || feature.title,
    "mainEntityOfPage": feature.link,
  };

  return (
    <>
      <JsonLd schema={[breadcrumbSchema, newsArticleSchema]} />
      <SectionWrapper className="bg-secondary/10 pt-24 md:pt-32">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/news-media" 
            className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to News & Media
          </Link>

          <div className="space-y-6 mb-8">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent uppercase tracking-wider">
                <Newspaper className="h-3 w-3" /> {feature.publication}
              </span>
              {feature.date && (
                <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" /> {formatDate(feature.date)}
                </span>
              )}
            </div>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-primary leading-tight">
              {feature.title}
            </h1>
          </div>

          <Card className="overflow-hidden shadow-xl border-secondary/20">
            {meta.image && (
              <div className="relative w-full aspect-video md:aspect-[21/9]">
                <img
                  src={meta.image}
                  alt={feature.title}
                  className="w-full aspect-video md:aspect-[21/9] object-cover"
                  onError={(e) => {
                    const container = e.currentTarget.parentElement;
                    if (container) container.style.display = 'none';
                  }}
                />
              </div>
            )}
            <CardContent className="p-6 md:p-8 space-y-6">
              {meta.description && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-primary">Article Excerpt</h2>
                  <p className="text-foreground/80 leading-relaxed text-lg italic">
                    "{meta.description}"
                  </p>
                </div>
              )}

              <hr className="border-secondary/20" />

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-2">
                <div>
                  <h3 className="font-medium text-foreground">Original Source</h3>
                  <p className="text-muted-foreground text-sm">Read the complete article directly on {feature.publication}.</p>
                </div>
                <Button asChild size="lg" className="font-semibold shrink-0 group">
                  <a href={feature.link} target="_blank" rel="noopener noreferrer">
                    Read Full Article <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>
    </>
  );
}
