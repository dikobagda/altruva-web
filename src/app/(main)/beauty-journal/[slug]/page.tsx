import { notFound } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { beautyJournals } from '@/lib/data/beauty-journal';
import { journalArticles } from '@/lib/data/journal-articles';

export function generateStaticParams() {
    return beautyJournals
        .filter((journal) => journal.slug)
        .map((journal) => ({
            slug: journal.slug,
        }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const journal = beautyJournals.find((j) => j.slug === resolvedParams.slug);
    return {
        title: journal ? `${journal.title} - Beauty Journal | Altruva` : 'Beauty Journal - Altruva',
        description: journal ? `Read the ${journal.issue} edition of Altruva Beauty Journal: ${journal.title}.` : 'Altruva Beauty Journal Article',
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

    return (
        <SectionWrapper className="pt-24 md:pt-32 pb-16">
            <article className="max-w-4xl mx-auto">
                <Link
                    href="/beauty-journal"
                    className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-10 group"
                >
                    <div className="bg-muted w-8 h-8 rounded-full flex items-center justify-center mr-3 group-hover:bg-primary/10 transition-colors">
                        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
                    </div>
                    Back to Beauty Journals
                </Link>

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
    );
}
