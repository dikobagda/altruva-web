'use client';

import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Edit, Eye, TrendingUp, Calendar, Clock, Tag, ExternalLink, ShieldCheck, CheckCircle2, AlertCircle, Cpu } from 'lucide-react';

interface Blog {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image_src: string;
  image_hint: string;
  date: string;
  keywords: string[];
  author?: string;
  reviewed_by?: string;
  status?: 'published' | 'draft';
}

interface TrendDay {
  day: string;
  views: number;
  unique_views: number;
}

export default function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const router = useRouter();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [analytics, setAnalytics] = useState<{ total: number; unique: number; trend: TrendDay[] } | null>(null);
  const [loading, setLoading] = useState(true);

  // SEO Optimizer state variables
  const [isOptimizeOpen, setIsOptimizeOpen] = useState(false);
  const [seoOptimizations, setSeoOptimizations] = useState<any>(null);
  const [optimizing, setOptimizing] = useState(false);
  const [applyingField, setApplyingField] = useState<string | null>(null);
  const [isEeatReasonOpen, setIsEeatReasonOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, [slug]);

  const handleOptimizeRequest = async () => {
    if (!blog) return;
    setOptimizing(true);
    try {
      const res = await fetch('/api/cms/seo-optimize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: blog.title,
          slug: blog.slug,
          excerpt: blog.excerpt,
          content: blog.content,
          imageHint: blog.image_hint,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        setSeoOptimizations(data);
        setIsOptimizeOpen(true);
      } else {
        alert('Failed to generate recommendations.');
      }
    } catch {
      alert('Error fetching recommendations.');
    } finally {
      setOptimizing(false);
    }
  };

  const handleApplySuggestion = async (field: 'title' | 'slug' | 'excerpt' | 'image_hint' | 'content', newValue: string) => {
    if (!blog) return;
    setApplyingField(field);
    try {
      const updatedBlog = {
        title: field === 'title' ? newValue : blog.title,
        slug: field === 'slug' ? newValue : blog.slug,
        excerpt: field === 'excerpt' ? newValue : blog.excerpt,
        content: field === 'content' ? newValue : blog.content,
        imageSrc: blog.image_src,
        imageHint: field === 'image_hint' ? newValue : blog.image_hint,
        date: blog.date,
        keywords: blog.keywords,
      };

      const res = await fetch(`/api/cms/blogs/${blog.slug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedBlog),
      });

      if (res.ok) {
        setBlog({
          ...blog,
          title: updatedBlog.title,
          slug: updatedBlog.slug,
          excerpt: updatedBlog.excerpt,
          image_hint: updatedBlog.imageHint,
          content: updatedBlog.content,
        });
        
        const mapKey: Record<string, string> = {
          title: 'optimizedTitle',
          slug: 'optimizedSlug',
          excerpt: 'optimizedExcerpt',
          image_hint: 'optimizedImageHint',
          content: 'optimizedContent',
        };
        const suggestionKey = mapKey[field];
        setSeoOptimizations((prev: any) => ({
          ...prev,
          [suggestionKey]: '', 
        }));

        if (field === 'slug') {
          router.replace(`/cms/dashboard/post/${newValue}`);
        }
      } else {
        alert('Failed to apply optimization.');
      }
    } catch {
      alert('Error updating field.');
    } finally {
      setApplyingField(null);
    }
  };

  const fetchData = async () => {
    try {
      const [blogRes, analyticsRes] = await Promise.all([
        fetch(`/api/cms/blogs/${slug}`),
        fetch(`/api/analytics/view?slug=${slug}`),
      ]);

      if (blogRes.status === 401) {
        router.push('/cms/login');
        return;
      }

      if (blogRes.ok) {
        const blogData = await blogRes.json();
        setBlog(blogData);
      } else {
        router.push('/cms/dashboard');
        return;
      }

      if (analyticsRes.ok) {
        const analyticsData = await analyticsRes.json();
        setAnalytics(analyticsData);
      }
    } catch (err) {
      console.error('Error fetching detail data:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (!blog) return null;

  // Words count calculation
  const wordCount = blog.content ? blog.content.replace(/<[^>]*>/g, '').split(/\s+/).length : 0;
  const readTime = Math.max(1, Math.round(wordCount / 200));

  const calculateSEO = (blogData: Blog) => {
    let score = 0;
    const checks: { title: string; passed: boolean; desc: string; impact: number }[] = [];

    // 1. Title Length (ideal: 50-70 characters)
    const titleLen = blogData.title?.length || 0;
    const isTitleGood = titleLen >= 50 && titleLen <= 70;
    checks.push({
      title: "Title Length",
      passed: isTitleGood,
      impact: 20,
      desc: isTitleGood
        ? `Good (${titleLen} characters). Ideal range is 50-70.`
        : `Title has ${titleLen} characters. Ideal length is 50-70 characters for optimal display in search results.`,
    });
    if (isTitleGood) score += 20;

    // 2. URL Slug Optimization
    const isSlugClean = /^[a-z0-9-]+$/.test(blogData.slug);
    const slugLen = blogData.slug?.length || 0;
    const isSlugGood = isSlugClean && slugLen > 3 && slugLen < 100;
    checks.push({
      title: "URL Slug Optimization",
      passed: isSlugGood,
      impact: 15,
      desc: isSlugGood
        ? "Clean URL structure containing only lowercase letters, numbers, and hyphens."
        : "Ensure the slug uses only lowercase letters, numbers, and hyphens, and keeps slugs descriptive but concise.",
    });
    if (isSlugGood) score += 15;

    // 3. Excerpt Length (ideal: 120-160 characters)
    const excerptLen = blogData.excerpt?.length || 0;
    const isExcerptGood = excerptLen >= 120 && excerptLen <= 160;
    checks.push({
      title: "Meta Excerpt / Description",
      passed: isExcerptGood,
      impact: 20,
      desc: isExcerptGood
        ? `Good (${excerptLen} characters). Ideal range is 120-160.`
        : `Excerpt has ${excerptLen} characters. Aim for 120-160 characters to avoid search engines clipping your description.`,
    });
    if (isExcerptGood) score += 20;

    // 4. Content Length
    const isContentLong = wordCount >= 500;
    checks.push({
      title: "Article Word Count",
      passed: isContentLong,
      impact: 25,
      desc: isContentLong
        ? `Excellent word count (${wordCount} words). Long-form content ranks higher.`
        : `Short content (${wordCount} words). Search engines prefer detailed articles (> 500 words).`,
    });
    if (isContentLong) score += 25;
    else if (wordCount > 200) score += 12;

    // 5. Image Alt text optimization
    const hasImage = !!blogData.image_src;
    const hasImageHint = !!blogData.image_hint && blogData.image_hint.length > 5;
    const isImageSEO = hasImage && hasImageHint;
    checks.push({
      title: "Image Alt Text (SEO Alt)",
      passed: isImageSEO,
      impact: 20,
      desc: isImageSEO
        ? `Perfect Alt Text hint configured: "${blogData.image_hint}".`
        : "Cover image is missing descriptive Alt Text (Image Alt Text field). Add alt text to boost search presence.",
    });
    if (isImageSEO) score += 20;

    return { score, checks };
  };

  const calculateAIVisibility = (blogData: Blog) => {
    let score = 0;
    const checks: { title: string; passed: boolean; desc: string; impact: number }[] = [];

    // 1. Semantic Structure & Headings (25 points)
    const contentHtml = blogData.content || '';
    const hasH2 = contentHtml.includes('<h2') || contentHtml.includes('&lt;h2');
    const hasH3 = contentHtml.includes('<h3') || contentHtml.includes('&lt;h3');
    const isSemantic = hasH2 && hasH3;
    checks.push({
      title: "Semantic Heading Hierarchy",
      passed: isSemantic,
      impact: 25,
      desc: isSemantic
        ? "Good hierarchy (H2 & H3 tags present). Generative AI models index context section by section using headings."
        : "Missing H2 or H3 structures. Break your article into semantic sections so engines can parse sections easily.",
    });
    if (isSemantic) score += 25;
    else if (hasH2 || hasH3) score += 12;

    // 2. Structured Lists (20 points)
    const hasLists = contentHtml.includes('<ul') || contentHtml.includes('<ol') || contentHtml.includes('<li') || contentHtml.includes('&lt;ul');
    checks.push({
      title: "Bullet Lists & Bullet Summaries",
      passed: hasLists,
      impact: 20,
      desc: hasLists
        ? "Bullet/numbered lists detected. Generative engines prefer listing points when outputting citations."
        : "No bullet list found. Re-organize takeaways or definitions as clean key lists to ease GenAI indexing.",
    });
    if (hasLists) score += 20;

    // 3. E-E-A-T Trust Attribution & Content Signals (20 points)
    const contentLower = contentHtml.toLowerCase();
    const hasDisclaimer = contentLower.includes('disclaimer') || contentLower.includes('bukan pengganti') || contentLower.includes('saran medis') || contentLower.includes('konsultasikan dengan dokter') || contentLower.includes('konsultasikan ke dokter');
    const hasCitations = contentLower.includes('riset') || contentLower.includes('studi') || contentLower.includes('jurnal') || contentLower.includes('penelitian') || contentLower.includes('clinical') || contentLower.includes('menurut dr.') || contentLower.includes('berdasarkan penelitian');
    const hasExpertDetails = !!blogData.author && !!blogData.reviewed_by;
    
    const isAuthoritative = hasExpertDetails && hasDisclaimer && hasCitations;
    const eeatScore = (hasExpertDetails ? 8 : 0) + (hasDisclaimer ? 6 : 0) + (hasCitations ? 6 : 0);
    
    checks.push({
      title: "E-E-A-T Trust Attribution",
      passed: isAuthoritative,
      impact: 20,
      desc: isAuthoritative
        ? "Excellent E-E-A-T signals. Article includes medical disclaimers, references clinical studies/citations, and features expert attributions."
        : `Lacks trust signals in text. Suggestions: ${!hasDisclaimer ? 'Add a standard medical disclaimer at the bottom. ' : ''}${!hasCitations ? 'Reference clinical studies or research to justify treatment efficacy. ' : ''}${!hasExpertDetails ? 'Specify both the author and the clinical reviewer.' : ''}`,
    });
    score += eeatScore;

    // 4. Conversational Direct Q&A Signals (20 points)
    const qaKeywords = ['mengapa', 'bagaimana', 'apa', 'how', 'why', 'what', 'apakah', 'adalah', 'adalah salah satu'];
    const hasQASignal = qaKeywords.some(w => contentLower.includes(w));
    checks.push({
      title: "Syntactic Direct Q&A Targets",
      passed: hasQASignal,
      impact: 20,
      desc: hasQASignal
        ? "Direct definitional & conversational answer structures detected. Matches user natural language search queries."
        : "Add direct Q&A phrases (e.g. 'Apa itu X...', 'Mengapa Y...') to trigger GenAI response boxes directly.",
    });
    if (hasQASignal) score += 20;

    // 5. LLM Token Context length optimization (15 points)
    const isPerfectLen = wordCount > 0 && wordCount <= 1200;
    checks.push({
      title: "Summarization Length Sweetspot",
      passed: isPerfectLen,
      impact: 15,
      desc: isPerfectLen
        ? "Excellent size (under 1200 words). Prevents citation loss during GenAI document context parsing."
        : "Content is extremely long. Consuming high token capacity can dilute keyword significance for AI summaries.",
    });
    if (isPerfectLen) score += 15;

    return { score, checks };
  };

  const seoData = calculateSEO(blog);
  const aiData = calculateAIVisibility(blog);

  // Find max value in trend for bar chart scaling
  const maxViewsVal = analytics?.trend && analytics.trend.length > 0
    ? Math.max(...analytics.trend.map(d => d.views))
    : 10;

  return (
    <div className="min-h-screen bg-slate-50/60 pb-12">
      {/* Header Bar */}
      <header className="border-b bg-white sticky top-0 z-10 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center space-x-3">
          <Button asChild variant="ghost" size="sm">
            <Link href="/cms/dashboard" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Link>
          </Button>
          <span className="text-slate-300">|</span>
          <span className="font-serif text-lg font-semibold text-primary truncate max-w-xs md:max-w-md">
            Article Details
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <Button asChild variant="outline" size="sm">
            <Link href={`/blog/${blog.slug}`} target="_blank" className="flex items-center">
              View Live <ExternalLink className="ml-2 h-3.5 w-3.5" />
            </Link>
          </Button>
          <Button asChild size="sm">
            <Link href={`/cms/dashboard/edit/${blog.slug}`} className="flex items-center">
              <Edit className="mr-2 h-3.5 w-3.5" /> Edit Article
            </Link>
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 md:p-8 grid md:grid-cols-3 gap-8">
        {/* Main Preview Column */}
        <div className="md:col-span-2 space-y-6">
          <Card className="bg-white border-slate-200 overflow-hidden shadow-sm">
            {blog.image_src && (
              <div className="relative h-64 w-full bg-slate-100">
                <img
                  src={blog.image_src}
                  alt={blog.image_hint || blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <CardContent className="p-8">
              {/* Meta information tags */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mb-4 border-b pb-4 border-slate-100">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" /> {blog.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> {readTime} min read ({wordCount} words)
                </span>
                {blog.keywords && blog.keywords.length > 0 && (
                  <span className="flex items-center gap-1">
                    <Tag className="h-3.5 w-3.5" /> {blog.keywords.join(', ')}
                  </span>
                )}
              </div>

              {/* Title & Excerpt */}
              <h1 className="font-serif text-3xl font-bold text-primary mb-4 leading-tight">
                {blog.title}
              </h1>
              
              <div className="bg-slate-50 border border-slate-100 rounded-lg p-4 mb-6 text-sm text-slate-600 leading-relaxed italic">
                <span className="font-semibold block text-slate-700 not-italic mb-1">Excerpt:</span>
                "{blog.excerpt}"
              </div>

              {/* HTML Body Render */}
              <article 
                className="prose prose-slate max-w-none text-slate-800 leading-relaxed [&_h1]:font-serif [&_h1]:text-primary [&_h1]:text-3xl [&_h1]:mt-8 [&_h1]:mb-4 [&_h2]:font-serif [&_h2]:text-primary [&_h2]:text-2xl [&_h2]:mt-6 [&_h2]:mb-3 [&_h3]:font-serif [&_h3]:text-primary [&_h3]:text-xl [&_h3]:mt-4 [&_h3]:mb-2 [&_p]:mb-4"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </CardContent>
          </Card>
        </div>

        {/* Analytics Sidebar */}
        <div className="space-y-6">
          <Card className="bg-white border-slate-200 shadow-sm">
            <CardHeader className="border-b border-slate-100 pb-4">
              <CardTitle className="font-serif text-lg text-primary flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" /> Traffic Performance
              </CardTitle>
              <CardDescription>Views performance metrics for this article</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              {/* Stat figures */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50/50 p-4 rounded-lg border border-slate-100">
                  <span className="text-xs text-slate-500 font-medium block uppercase tracking-wider">Total Views</span>
                  <span className="text-2xl font-bold text-primary mt-1 block">
                    {analytics?.total.toLocaleString() || 0}
                  </span>
                </div>
                <div className="bg-slate-50/50 p-4 rounded-lg border border-slate-100">
                  <span className="text-xs text-slate-500 font-medium block uppercase tracking-wider">Unique Visitors</span>
                  <span className="text-2xl font-bold text-primary mt-1 block">
                    {analytics?.unique.toLocaleString() || 0}
                  </span>
                </div>
              </div>

              {/* 30 Day Trend Bar Chart */}
              <div>
                <span className="text-xs text-slate-500 font-medium block uppercase tracking-wider mb-4">
                  Views Trend (Last 30 Days)
                </span>
                
                {analytics?.trend && analytics.trend.length > 0 ? (
                  <div className="space-y-3">
                    {/* Visual CSS-based Bar Chart */}
                    <div className="flex items-end gap-1.5 h-32 pt-2 border-b border-slate-100 px-1">
                      {analytics.trend.slice(-15).map((d, index) => {
                        const heightPct = maxViewsVal > 0 ? (d.views / maxViewsVal) * 100 : 0;
                        const dateObj = new Date(d.day);
                        const label = dateObj.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
                        return (
                          <div key={index} className="flex-1 flex flex-col items-center h-full group relative">
                            {/* Hover tooltip */}
                            <div className="absolute bottom-full mb-1 bg-slate-800 text-white text-[10px] rounded px-1.5 py-0.5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                              {label}: {d.views} views ({d.unique_views} unique)
                            </div>
                            {/* Bar container */}
                            <div className="w-full flex items-end h-full">
                              <div 
                                style={{ height: `${Math.max(4, heightPct)}%` }} 
                                className="w-full bg-primary/20 group-hover:bg-primary rounded-t transition-all cursor-pointer"
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-400">
                      <span>{new Date(analytics.trend[0]?.day).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}</span>
                      <span>30 Days Summary</span>
                      <span>{new Date(analytics.trend[analytics.trend.length - 1]?.day).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}</span>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-xs text-slate-400 border border-dashed rounded-lg">
                    No view events recorded yet
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* SEO Performance Analyzer Card */}
          <Card className="bg-white border-slate-200 shadow-sm">
            <CardHeader className="border-b border-slate-100 pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="font-serif text-lg text-primary flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary" /> SEO Score Analyzer
                </CardTitle>
                <Button 
                  onClick={handleOptimizeRequest} 
                  disabled={optimizing}
                  size="sm" 
                  className="h-8 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-semibold text-xs"
                >
                  {optimizing ? 'Analyzing...' : '✨ Fix with AI'}
                </Button>
              </div>
              <CardDescription>Search engine optimization health check</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              {/* Score Display Ring */}
              <div className="flex items-center gap-4 border-b pb-4 border-slate-100">
                <div className="relative flex items-center justify-center h-20 w-20 shrink-0">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="40" cy="40" r="34" className="stroke-slate-100" strokeWidth="6" fill="transparent" />
                    <circle 
                      cx="40" 
                      cy="40" 
                      r="34" 
                      className={`${
                        seoData.score >= 80 ? 'stroke-green-500' : seoData.score >= 50 ? 'stroke-amber-500' : 'stroke-red-500'
                      } transition-all duration-1000`} 
                      strokeWidth="6" 
                      fill="transparent" 
                      strokeDasharray={2 * Math.PI * 34}
                      strokeDashoffset={2 * Math.PI * 34 * (1 - seoData.score / 100)}
                    />
                  </svg>
                  <span className="absolute text-xl font-bold text-slate-800">{seoData.score}%</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">
                    {seoData.score >= 80 ? 'Excellent SEO Health' : seoData.score >= 50 ? 'Needs Improvement' : 'Critical SEO Audit'}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Evaluated across 5 search ranking rules.
                  </p>
                </div>
              </div>

              {/* Aspects Checklist with Explanations */}
              <div className="space-y-4">
                {seoData.checks.map((check, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    {check.passed ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    )}
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-semibold text-slate-700">{check.title}</span>
                        <span className="text-[10px] text-slate-400 font-mono">({check.impact} pts)</span>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        {check.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI Visibility GEO Analyzer Card */}
          <Card className="bg-white border-slate-200 shadow-sm">
            <CardHeader className="border-b border-slate-100 pb-4">
              <CardTitle className="font-serif text-lg text-primary flex items-center gap-2">
                <Cpu className="h-5 w-5 text-primary" /> AI Visibility Analyzer
              </CardTitle>
              <CardDescription>GEO (Generative Engine Optimization) check</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              {/* Score Display Ring */}
              <div className="flex items-center gap-4 border-b pb-4 border-slate-100">
                <div className="relative flex items-center justify-center h-20 w-20 shrink-0">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="40" cy="40" r="34" className="stroke-slate-100" strokeWidth="6" fill="transparent" />
                    <circle 
                      cx="40" 
                      cy="40" 
                      r="34" 
                      className={`${
                        aiData.score >= 80 ? 'stroke-green-500' : aiData.score >= 50 ? 'stroke-amber-500' : 'stroke-red-500'
                      } transition-all duration-1000`} 
                      strokeWidth="6" 
                      fill="transparent" 
                      strokeDasharray={2 * Math.PI * 34}
                      strokeDashoffset={2 * Math.PI * 34 * (1 - aiData.score / 100)}
                    />
                  </svg>
                  <span className="absolute text-xl font-bold text-slate-800">{aiData.score}%</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">
                    {aiData.score >= 80 ? 'Optimal AI Visibility' : aiData.score >= 50 ? 'Moderate AI Capture' : 'Low AI Capture Potential'}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Evaluated for SearchGPT, Gemini, & Perplexity indexing.
                  </p>
                </div>
              </div>              {/* Aspects Checklist with Explanations */}
              <div className="space-y-4">
                {aiData.checks.map((check, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    {check.passed ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    )}
                    <div className="space-y-0.5 flex-1">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-xs font-semibold text-slate-700">{check.title}</span>
                        <span className="text-[10px] text-slate-400 font-mono">({check.impact} pts)</span>
                        {check.title === "E-E-A-T Trust Attribution" && (
                          <button
                            type="button"
                            onClick={() => setIsEeatReasonOpen(true)}
                            className="text-[10px] text-primary hover:underline font-semibold"
                          >
                            See reason
                          </button>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        {check.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* EEAT Reason Modal Dialog */}
      {isEeatReasonOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-lg overflow-hidden flex flex-col p-6">
            <div className="flex items-center justify-between border-b pb-3 mb-4">
              <h3 className="font-serif text-lg font-bold text-primary">E-E-A-T Analyzer Report</h3>
              <button 
                onClick={() => setIsEeatReasonOpen(false)}
                className="text-slate-400 hover:text-slate-600 text-sm font-semibold"
              >
                Close
              </button>
            </div>
            
            <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
              <p>
                Analisis E-E-A-T didasarkan pada keberadaan sinyal kredibilitas berikut di dalam teks artikel:
              </p>
              
              <div className="space-y-3 bg-slate-50 p-4 rounded-lg border border-slate-100 font-sans">
                <div>
                  <div className="flex items-center justify-between font-semibold text-slate-700 mb-1">
                    <span>1. Medical Disclaimer (Penafian Medis)</span>
                    <span className={blog.content?.toLowerCase().includes('disclaimer') || blog.content?.toLowerCase().includes('bukan pengganti') || blog.content?.toLowerCase().includes('saran medis') || blog.content?.toLowerCase().includes('konsultasikan dengan dokter') || blog.content?.toLowerCase().includes('konsultasikan ke dokter') ? "text-green-600" : "text-amber-600"}>
                      {blog.content?.toLowerCase().includes('disclaimer') || blog.content?.toLowerCase().includes('bukan pengganti') || blog.content?.toLowerCase().includes('saran medis') || blog.content?.toLowerCase().includes('konsultasikan dengan dokter') || blog.content?.toLowerCase().includes('konsultasikan ke dokter') ? "✓ Found" : "✗ Missing"}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400">
                    Mencari kata kunci: <em>disclaimer, bukan pengganti, saran medis, konsultasikan dengan dokter, konsultasikan ke dokter</em>
                  </p>
                </div>

                <div className="border-t pt-2.5">
                  <div className="flex items-center justify-between font-semibold text-slate-700 mb-1">
                    <span>2. Clinical Citations (Rujukan Riset &amp; Studi)</span>
                    <span className={blog.content?.toLowerCase().includes('riset') || blog.content?.toLowerCase().includes('studi') || blog.content?.toLowerCase().includes('jurnal') || blog.content?.toLowerCase().includes('penelitian') || blog.content?.toLowerCase().includes('clinical') || blog.content?.toLowerCase().includes('menurut dr.') || blog.content?.toLowerCase().includes('berdasarkan penelitian') ? "text-green-600" : "text-amber-600"}>
                      {blog.content?.toLowerCase().includes('riset') || blog.content?.toLowerCase().includes('studi') || blog.content?.toLowerCase().includes('jurnal') || blog.content?.toLowerCase().includes('penelitian') || blog.content?.toLowerCase().includes('clinical') || blog.content?.toLowerCase().includes('menurut dr.') || blog.content?.toLowerCase().includes('berdasarkan penelitian') ? "✓ Found" : "✗ Missing"}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400">
                    Mencari kata kunci: <em>riset, studi, jurnal, penelitian, clinical, menurut dr., berdasarkan penelitian</em>
                  </p>
                </div>

                <div className="border-t pt-2.5">
                  <div className="flex items-center justify-between font-semibold text-slate-700 mb-1">
                    <span>3. Expert Attributions (Penulis &amp; Reviewer)</span>
                    <span className={blog.author && blog.reviewed_by ? "text-green-600" : "text-amber-600"}>
                      {blog.author && blog.reviewed_by ? "✓ Found" : "✗ Missing"}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400">
                    Memastikan kolom <strong>Author</strong> dan <strong>Reviewed By</strong> pada artikel terisi.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded p-3 text-amber-800 text-[11px]">
                <strong className="block mb-0.5">💡 Tips Optimasi:</strong>
                Anda dapat menambahkan disclaimer medis seperti <em>"Artikel ini bukan pengganti saran medis profesional, selalu konsultasikan dengan dokter Anda..."</em> dan rujukan riset <em>"Berdasarkan penelitian/studi klinis..."</em> di bagian bawah artikel.
              </div>
            </div>
            
            <div className="mt-5 flex justify-end">
              <Button onClick={() => setIsEeatReasonOpen(false)} className="h-9 px-4 rounded-full">
                Close Report
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* AI SEO Optimizer Modal Overlay */}
      {isOptimizeOpen && seoOptimizations && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-3xl overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center gap-2">
                <Cpu className="h-5 w-5 text-primary animate-pulse" />
                <h3 className="font-serif text-lg font-bold text-primary">AI SEO Recommendations</h3>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setIsOptimizeOpen(false)} className="text-slate-400 hover:text-slate-600">
                Close
              </Button>
            </div>
            
            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 flex-grow">
              {/* Aspect Fixes */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-slate-800 border-b pb-2">Optimize Metadata Fields</h4>
                
                {/* Title Opt */}
                {seoOptimizations.optimizedTitle && seoOptimizations.optimizedTitle !== blog?.title && (
                  <div className="p-4 rounded-lg border border-slate-100 bg-slate-50/50 space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-700">Article Title</span>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="h-7 text-xs font-semibold hover:bg-primary/5 border-primary/20 text-primary"
                        onClick={() => handleApplySuggestion('title', seoOptimizations.optimizedTitle)}
                        disabled={applyingField === 'title'}
                      >
                        {applyingField === 'title' ? 'Applying...' : 'Apply Suggestion'}
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase font-mono">Current ({blog?.title?.length || 0} chars)</span>
                        <p className="text-slate-600 font-medium break-words mt-0.5">{blog?.title}</p>
                      </div>
                      <div>
                        <span className="text-[10px] text-primary block uppercase font-mono font-semibold">AI Suggestion ({seoOptimizations.optimizedTitle?.length || 0} chars)</span>
                        <p className="text-primary bg-primary/5 border border-primary/10 rounded px-2.5 py-1.5 mt-0.5 font-medium break-words">{seoOptimizations.optimizedTitle}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Slug Opt */}
                {seoOptimizations.optimizedSlug && seoOptimizations.optimizedSlug !== blog?.slug && (
                  <div className="p-4 rounded-lg border border-slate-100 bg-slate-50/50 space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-700">URL Slug</span>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="h-7 text-xs font-semibold hover:bg-primary/5 border-primary/20 text-primary"
                        onClick={() => handleApplySuggestion('slug', seoOptimizations.optimizedSlug)}
                        disabled={applyingField === 'slug'}
                      >
                        {applyingField === 'slug' ? 'Applying...' : 'Apply Suggestion'}
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase font-sans">Current</span>
                        <p className="text-slate-600 mt-0.5 break-all">/{blog?.slug}</p>
                      </div>
                      <div>
                        <span className="text-[10px] text-primary block uppercase font-sans font-semibold">AI Suggestion</span>
                        <p className="text-primary bg-primary/5 border border-primary/10 rounded px-2 py-1.5 mt-0.5 break-all">/{seoOptimizations.optimizedSlug}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Excerpt Opt */}
                {seoOptimizations.optimizedExcerpt && seoOptimizations.optimizedExcerpt !== blog?.excerpt && (
                  <div className="p-4 rounded-lg border border-slate-100 bg-slate-50/50 space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-700">Excerpt / Description Summary</span>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="h-7 text-xs font-semibold hover:bg-primary/5 border-primary/20 text-primary"
                        onClick={() => handleApplySuggestion('excerpt', seoOptimizations.optimizedExcerpt)}
                        disabled={applyingField === 'excerpt'}
                      >
                        {applyingField === 'excerpt' ? 'Applying...' : 'Apply Suggestion'}
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase font-mono">Current ({blog?.excerpt?.length || 0} chars)</span>
                        <p className="text-slate-500 line-clamp-3 mt-0.5 leading-relaxed">{blog?.excerpt}</p>
                      </div>
                      <div>
                        <span className="text-[10px] text-primary block uppercase font-mono font-semibold">AI Suggestion ({seoOptimizations.optimizedExcerpt?.length || 0} chars)</span>
                        <p className="text-primary bg-primary/5 border border-primary/10 rounded px-2.5 py-2 mt-0.5 text-primary leading-relaxed">{seoOptimizations.optimizedExcerpt}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Alt Text Opt */}
                {seoOptimizations.optimizedImageHint && seoOptimizations.optimizedImageHint !== blog?.image_hint && (
                  <div className="p-4 rounded-lg border border-slate-100 bg-slate-50/50 space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-700">Cover Image Alt Tag (SEO)</span>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="h-7 text-xs font-semibold hover:bg-primary/5 border-primary/20 text-primary"
                        onClick={() => handleApplySuggestion('image_hint', seoOptimizations.optimizedImageHint)}
                        disabled={applyingField === 'image_hint'}
                      >
                        {applyingField === 'image_hint' ? 'Applying...' : 'Apply Suggestion'}
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase font-mono">Current</span>
                        <p className="text-slate-500 mt-0.5">{blog?.image_hint || '(None)'}</p>
                      </div>
                      <div>
                        <span className="text-[10px] text-primary block uppercase font-mono font-semibold">AI Suggestion</span>
                        <p className="text-primary bg-primary/5 border border-primary/10 rounded px-2 py-1.5 mt-0.5">{seoOptimizations.optimizedImageHint}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Content Body Optimization */}
                {seoOptimizations.optimizedContent && seoOptimizations.optimizedContent !== blog?.content && (
                  <div className="p-4 rounded-lg border border-slate-100 bg-slate-50/50 space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-700">Article Content Body (HTML Structure)</span>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="h-7 text-xs font-semibold hover:bg-primary/5 border-primary/20 text-primary"
                        onClick={() => handleApplySuggestion('content', seoOptimizations.optimizedContent)}
                        disabled={applyingField === 'content'}
                      >
                        {applyingField === 'content' ? 'Applying...' : 'Apply Suggestion'}
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase font-mono">Current Length ({blog?.content?.length || 0} chars)</span>
                        <div className="text-slate-500 mt-1 border rounded p-2 bg-white max-h-28 overflow-y-auto font-mono text-[10px] whitespace-pre-wrap">
                          {blog?.content}
                        </div>
                      </div>
                      <div>
                        <span className="text-[10px] text-primary block uppercase font-mono font-semibold">AI Optimized Content (With Headings & Lists)</span>
                        <div className="text-primary bg-primary/5 border border-primary/10 rounded p-2 max-h-28 overflow-y-auto font-mono text-[10px] whitespace-pre-wrap mt-1">
                          {seoOptimizations.optimizedContent}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Actionable Content advice */}
              {seoOptimizations.contentSuggestions && seoOptimizations.contentSuggestions.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h4 className="text-sm font-semibold text-slate-800 border-b pb-2">Actionable Content Structure Optimizations</h4>
                  <ul className="space-y-2">
                    {seoOptimizations.contentSuggestions.map((s: string, i: number) => (
                      <li key={i} className="flex gap-2.5 text-xs text-slate-600 leading-relaxed items-start">
                        <span className="text-primary font-bold">•</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
