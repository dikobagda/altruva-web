import { notFound } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, DownloadCloud } from 'lucide-react';
import Link from 'next/link';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { beautyJournals } from '@/lib/data/beauty-journal';
import { journalArticles } from '@/lib/data/journal-articles';
import { getDbBlogs } from '@/lib/api/db-blog';
import JsonLd from '@/components/shared/JsonLd';

export function generateStaticParams() {
    return beautyJournals
        .filter((journal) => journal.slug)
        .map((journal) => ({
            slug: journal.slug,
        }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;
    const journal = beautyJournals.find((j) => j.slug === slug);
    const blogsList = await getDbBlogs();
    const matchingInsight = blogsList.find((b) => b.href && b.href.endsWith(slug));

    const baseKeywords = ['Altruva', 'Beauty Journal', 'Aesthetic Clinic Jakarta', 'dr. Olivia Aldisa'];
    const dynamicKeywords = matchingInsight?.keywords 
        ? matchingInsight.keywords 
        : journal?.title.split(' ') || [];
    const keywords = [...new Set([...dynamicKeywords, ...baseKeywords])];

    return {
        title: journal ? `${journal.title} - Beauty Journal` : 'Beauty Journal',
        description: matchingInsight?.excerpt || (journal ? `Read the ${journal.issue} edition of Altruva Beauty Journal: ${journal.title}.` : 'Altruva Beauty Journal Article'),
        keywords: keywords,
    };
}

export default async function BeautyJournalArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;
    const journal = beautyJournals.find((j) => j.slug === slug);
    const articleContent = journalArticles[slug];

    if (!journal || !articleContent) {
        notFound();
    }

    const blogsList = await getDbBlogs();
    const matchingInsight = blogsList.find((b) => b.href && b.href.endsWith(slug));

    let datePublished: string | undefined;
    try {
        if (matchingInsight?.date) {
            datePublished = new Date(matchingInsight.date).toISOString();
        }
    } catch (e) {
        // Ignore and fallback
    }

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `https://altruva.co.id/beauty-journal/${slug}#article`,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://altruva.co.id/beauty-journal/${slug}`
        },
        "headline": journal.title,
        "description": matchingInsight?.excerpt || `Read the ${journal.issue} edition of Altruva Beauty Journal: ${journal.title}.`,
        "image": journal.coverImage ? `https://altruva.co.id${journal.coverImage}` : undefined,
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
            "url": "https://altruva.co.id",
            "logo": {
                "@type": "ImageObject",
                "url": "https://altruva.co.id/images/logoaltruvanew.webp"
            },
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Ciasem I No.2 Kebayoran Baru",
                "addressLocality": "Jakarta Selatan",
                "addressRegion": "DKI Jakarta",
                "postalCode": "12180",
                "addressCountry": "ID"
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
                "name": "Beauty Journal",
                "item": "https://altruva.co.id/beauty-journal"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": journal.title,
                "item": `https://altruva.co.id/beauty-journal/${slug}`
            }
        ]
    };

    return (
        <>
            <JsonLd schema={[articleSchema, breadcrumbSchema]} />
            <SectionWrapper className="pt-24 md:pt-32 pb-16">
            <article className="max-w-4xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
                    <Link
                        href="/beauty-journal"
                        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors group"
                    >
                        <div className="bg-muted w-8 h-8 rounded-full flex items-center justify-center mr-3 group-hover:bg-primary/10 transition-colors">
                            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
                        </div>
                        Back to Beauty Journals
                    </Link>

                    {journal.downloadUrl && (
                        <Button asChild variant="outline" className="sm:self-auto self-start font-semibold group relative overflow-hidden">
                            <a href={journal.downloadUrl} download>
                                <DownloadCloud className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" />
                                <span className="relative z-10">Download PDF Version</span>
                                <div className="absolute inset-0 bg-muted/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </a>
                        </Button>
                    )}
                </div>

                <header className="mb-14 text-center">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider uppercase mb-6">
                        {journal.issue}
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight mb-8 max-w-3xl mx-auto">
                        {journal.title}
                    </h1>

                    <div className="relative w-full aspect-[21/9] md:aspect-[3/1] rounded-3xl overflow-hidden shadow-xl mb-12 group">
                        <Image
                            src={journal.coverImage}
                            alt={journal.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                            sizes="(max-width: 1024px) 100vw, 1024px"
                        />
                        {/* Subtle overlay for better text readability if there was text on top */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300"></div>
                    </div>
                </header>

                <div className="bg-background rounded-3xl p-6 sm:p-12 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border/40 relative">
                    {/* Decorative element */}
                    <div className="absolute top-0 left-12 w-24 h-1 bg-primary/20 rounded-b-md"></div>

                    <div className="max-w-3xl mx-auto">
                        {articleContent}
                    </div>
                </div>
            </article>
        </SectionWrapper>
        </>
    );
}
