

import { notFound } from 'next/navigation';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { getDbBlogs, getDbBlogBySlug } from '@/lib/api/db-blog';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CalendarDays, Clock, Tag } from 'lucide-react';
import BlogCard from '@/components/blog/BlogCard';
import type { Metadata } from 'next';
import JsonLd from '@/components/shared/JsonLd';

export async function generateStaticParams() {
  const blogsList = await getDbBlogs();
  return blogsList
    .filter((blog) => blog.href) // Filter out blogs without an href
    .map((blog) => ({
      slug: blog.href!.split('/').pop(),
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const insight = await getDbBlogBySlug(slug);

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
  const insight = await getDbBlogBySlug(slug);

  if (!insight) {
    notFound();
  }

  const blogsList = await getDbBlogs();
  const relatedInsights = blogsList.filter(i => i.id !== insight.id && i.href).slice(0, 3);

  // Track page view — forward visitor real IP, fire and forget
  try {
    const reqHeaders = await headers();
    const ip =
      reqHeaders.get('cf-connecting-ip') ||
      reqHeaders.get('x-real-ip') ||
      reqHeaders.get('x-forwarded-for')?.split(',')[0].trim() ||
      '0.0.0.0';
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    fetch(`${baseUrl}/api/analytics/view`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-forwarded-for': ip,
      },
      body: JSON.stringify({ slug }),
    }).catch(() => {});
  } catch (_) {}

  // Words count calculation
  const wordCount = insight.content ? insight.content.replace(/<[^>]*>/g, '').split(/\s+/).length : 0;
  const readTime = Math.max(1, Math.round(wordCount / 200));

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
    "@id": `https://altruva.co.id/blog/${slug}#post`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://altruva.co.id/blog/${slug}`
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
        "name": "Blog",
        "item": "https://altruva.co.id/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": insight.title,
        "item": `https://altruva.co.id/blog/${slug}`
      }
    ]
  };

  return (
    <>
      <JsonLd schema={[articleSchema, breadcrumbSchema]} />
      <SectionWrapper className="pt-12 pb-8 md:pt-20 md:pb-12 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <Button asChild variant="ghost" className="mb-4">
             <Link href="/blog"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Articles</Link>
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
                  <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-4 shadow-lg">
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

                {/* Article Meta Bar below image */}
                <div className="flex flex-col gap-3 text-xs text-slate-500 mb-8 border-b pb-6 border-slate-100/80">
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="h-4 w-4 text-slate-400" /> {insight.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-slate-400" /> {readTime} min read ({wordCount} words)
                    </span>
                    {insight.updatedAt && (
                      <span className="text-slate-400 font-medium">
                        Terakhir Dimodifikasi: {new Date(insight.updatedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-x-5 gap-y-2 border-t pt-2.5 border-slate-100/40">
                    <span>Ditulis oleh: <strong className="text-slate-700 font-semibold">{insight.author || 'Altruva Aesthetic Clinic'}</strong></span>
                    <span>Ditinjau oleh: <strong className="text-slate-700 font-semibold">{insight.reviewedBy || 'dr. Olivia Aldisa'}</strong></span>
                  </div>
                  {insight.keywords && insight.keywords.length > 0 && (
                    <div className="flex items-start gap-2 leading-relaxed mt-1">
                      <Tag className="h-3.5 w-3.5 text-slate-400 mt-0.5 shrink-0" />
                      <span className="break-words">{insight.keywords.join(', ')}</span>
                    </div>
                  )}
                </div>

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
