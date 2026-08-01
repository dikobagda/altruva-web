'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Calendar, ImagePlus, Loader2, Save, X } from 'lucide-react';
import Link from 'next/link';
import WysiwygEditor from './WysiwygEditor';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface BlogFormProps {
  initialData?: {
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
  };
  isEdit?: boolean;
}

export default function BlogForm({ initialData, isEdit = false }: BlogFormProps) {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [date, setDate] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const [imageHint, setImageHint] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [keywordsInput, setKeywordsInput] = useState('');
  const [author, setAuthor] = useState('Altruva Aesthetic Clinic');
  const [reviewedBy, setReviewedBy] = useState('dr. Olivia Aldisa');
  const [status, setStatus] = useState<'published' | 'draft'>('published');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [imageUploading, setImageUploading] = useState(false);
  const dateInputRef = useRef<HTMLInputElement>(null);
  const thumbnailInputRef = useRef<HTMLInputElement>(null);
  const [isGeneratingKeywords, setIsGeneratingKeywords] = useState(false);
  const [isGeneratingExcerpt, setIsGeneratingExcerpt] = useState(false);
  const [isGeneratingAltText, setIsGeneratingAltText] = useState(false);
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const router = useRouter();

  const generateAiImage = async () => {
    // Flow Requirement: check if title or content is empty
    const plainText = content?.replace(/<[^>]*>/g, '').trim();
    if (!title || !plainText) {
      alert("Please fill in the Title and Article Body first before generating a Cover Image with AI.");
      return;
    }

    setIsGeneratingImage(true);
    try {
      const res = await fetch('/api/cms/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, promptHint: plainText.substring(0, 500) }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.url) {
          setImageSrc(data.url);
          if (!imageHint) {
            setImageHint(title.toLowerCase() + ' treatment at altruva');
          }
        }
      } else {
        alert('Failed to generate image. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred during image generation.');
    } finally {
      setIsGeneratingImage(false);
    }
  };

  const generateAiField = async (field: 'keywords' | 'excerpt' | 'altText') => {
    // Flow Requirement: check if content (article body) is empty
    const plainText = content?.replace(/<[^>]*>/g, '').trim();
    if (!plainText) {
      alert("Please fill in the Article Body first before generating SEO metadata with AI.");
      return;
    }

    if (field === 'keywords') setIsGeneratingKeywords(true);
    if (field === 'excerpt') setIsGeneratingExcerpt(true);
    if (field === 'altText') setIsGeneratingAltText(true);

    try {
      const res = await fetch('/api/cms/seo-optimize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          slug,
          excerpt,
          content,
          imageHint,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (field === 'keywords' && data.optimizedKeywords) {
          setKeywordsInput(Array.isArray(data.optimizedKeywords) ? data.optimizedKeywords.join(', ') : data.optimizedKeywords);
        } else if (field === 'excerpt' && data.optimizedExcerpt) {
          setExcerpt(data.optimizedExcerpt);
        } else if (field === 'altText' && data.optimizedImageHint) {
          setImageHint(data.optimizedImageHint);
        }
      } else {
        alert('Failed to generate metadata using AI. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred during generation.');
    } finally {
      if (field === 'keywords') setIsGeneratingKeywords(false);
      if (field === 'excerpt') setIsGeneratingExcerpt(false);
      if (field === 'altText') setIsGeneratingAltText(false);
    }
  };

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setSlug(initialData.slug);
      // Convert stored display date ("July 3, 2026") → ISO format ("2026-07-03") for the date input
      const parsed = new Date(initialData.date);
      if (!isNaN(parsed.getTime())) {
        setDate(parsed.toISOString().split('T')[0]);
      } else {
        setDate(initialData.date);
      }
      setImageSrc(initialData.image_src);
      setImageHint(initialData.image_hint);
      setExcerpt(initialData.excerpt);
      setContent(initialData.content);
      setKeywordsInput(Array.isArray(initialData.keywords) ? initialData.keywords.join(', ') : '');
      setAuthor(initialData.author || 'Altruva Aesthetic Clinic');
      setReviewedBy(initialData.reviewed_by || 'dr. Olivia Aldisa');
      setStatus(initialData.status || 'published');
    } else {
      // Default date to today in YYYY-MM-DD format
      const today = new Date().toISOString().split('T')[0];
      setDate(today);
      setStatus('published');
    }
  }, [initialData]);

  // Auto-generate slug from title
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setTitle(val);
    if (!isEdit) {
      const generatedSlug = val
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
      setSlug(generatedSlug);
    }
  };

  const handleThumbnailUpload = async (file: File) => {
    setImageUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    try {
      const res = await fetch('/api/cms/upload', { method: 'POST', body: formData });
      if (res.ok) {
        const data = await res.json();
        setImageSrc(data.url);
        // Auto-fill image hint from filename if empty
        if (!imageHint) {
          setImageHint(file.name.replace(/[_-]/g, ' ').replace(/\.[^.]+$/, ''));
        }
      } else {
        alert('Image upload failed. Please try again.');
      }
    } catch {
      alert('Upload error. Please try again.');
    } finally {
      setImageUploading(false);
      if (thumbnailInputRef.current) thumbnailInputRef.current.value = '';
    }
  };

  const handleThumbnailDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) handleThumbnailUpload(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const keywords = keywordsInput
      .split(',')
      .map((k) => k.trim())
      .filter((k) => k.length > 0);

    // Convert ISO date ("2026-07-03") → display format ("July 3, 2026") for storage
    const displayDate = date
      ? new Date(date + 'T00:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
      : date;

    const payload = {
      slug,
      title,
      excerpt,
      content,
      imageSrc,
      imageHint,
      date: displayDate,
      keywords,
      author,
      reviewedBy,
      status,
    };

    try {
      const endpoint = isEdit ? `/api/cms/blogs/${initialData?.slug}` : '/api/cms/blogs';
      const method = isEdit ? 'PUT' : 'POST';

      const res = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok) {
        router.push('/cms/dashboard');
        router.refresh();
      } else {
        setError(data.error || 'An error occurred while saving the article.');
      }
    } catch (err) {
      setError('Connection failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <Button asChild variant="ghost" size="sm">
          <Link href="/cms/dashboard" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
          </Link>
        </Button>
      </div>

      <Card className="border-slate-200 shadow-lg bg-background">
        <CardHeader>
          <CardTitle className="font-serif text-2xl text-primary font-bold">
            {isEdit ? 'Edit Article' : 'Create New Article'}
          </CardTitle>
          <CardDescription>
            {isEdit ? 'Update details of your existing article' : 'Add a new article with title, excerpt, and content'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-destructive/10 border border-destructive/20 text-destructive text-sm rounded-lg p-3 text-center">
                {error}
              </div>
            )}

            {/* Title — full width */}
            <div className="space-y-2">
              <Label htmlFor="title" className="text-primary font-medium">Title</Label>
              <Input
                id="title"
                type="text"
                value={title}
                onChange={handleTitleChange}
                placeholder="e.g. Presence Has No Gender"
                required
                className="border-slate-200 focus:border-primary bg-white text-lg"
              />
            </div>

            {/* Slug */}
            <div className="space-y-2">
              <Label htmlFor="slug" className="text-primary font-medium">Slug (URL Path)</Label>
              <Input
                id="slug"
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/\s+/g, '-'))}
                placeholder="e.g. presence-has-no-gender"
                required
                disabled={isEdit}
                className="border-slate-200 focus:border-primary bg-white disabled:bg-slate-100"
              />
            </div>

            {/* Content (HTML Editor/TextArea) */}
            <div className="space-y-2">
              <Label htmlFor="content" className="text-primary font-medium">Article Body</Label>
              <WysiwygEditor value={content} onChange={setContent} />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Publish Date */}
              <div className="space-y-2">
                <div className="flex items-center justify-between h-6">
                  <Label htmlFor="date" className="text-primary font-medium">Publish Date</Label>
                </div>
                <div className="relative">
                  {/* Display value */}
                  <input
                    readOnly
                    value={date ? new Date(date + 'T00:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : ''}
                    placeholder="Pick a date..."
                    onClick={() => dateInputRef.current?.showPicker()}
                    className="w-full h-10 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm pr-10 cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  />
                  {/* Calendar icon trigger */}
                  <button
                    type="button"
                    onClick={() => dateInputRef.current?.showPicker()}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors"
                  >
                    <Calendar className="h-4 w-4" />
                  </button>
                  {/* Hidden native date input */}
                  <input
                    ref={dateInputRef}
                    id="date"
                    type="date"
                    value={date}
                    required
                    onChange={(e) => setDate(e.target.value)}
                    className="sr-only"
                  />
                </div>
              </div>

              {/* Keywords */}
              <div className="space-y-2">
                <div className="flex items-center justify-between h-6">
                  <Label htmlFor="keywords" className="text-primary font-medium">Keywords / Tags (comma-separated)</Label>
                  <button
                    type="button"
                    onClick={() => generateAiField('keywords')}
                    disabled={isGeneratingKeywords}
                    className="text-xs text-primary font-semibold hover:underline flex items-center gap-1"
                  >
                    {isGeneratingKeywords ? (
                      <><Loader2 className="h-3 w-3 animate-spin" /> Generating...</>
                    ) : (
                      '✨ Generate with AI'
                    )}
                  </button>
                </div>
                <Input
                  id="keywords"
                  type="text"
                  value={keywordsInput}
                  onChange={(e) => setKeywordsInput(e.target.value)}
                  placeholder="e.g. skincare, beauty, aesthetics"
                  className="border-slate-200 focus:border-primary bg-white"
                />
              </div>
            </div>

            {/* Author + Reviewer + Status fields */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="author" className="text-primary font-medium">Written By</Label>
                <Input
                  id="author"
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="e.g. Altruva Aesthetic Clinic"
                  className="border-slate-200 focus:border-primary bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reviewedBy" className="text-primary font-medium">Reviewed By</Label>
                <Input
                  id="reviewedBy"
                  type="text"
                  value={reviewedBy}
                  onChange={(e) => setReviewedBy(e.target.value)}
                  placeholder="e.g. dr. Olivia Aldisa"
                  className="border-slate-200 focus:border-primary bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="status" className="text-primary font-medium">Publishing Status</Label>
                <Select value={status} onValueChange={(val: 'published' | 'draft') => setStatus(val)}>
                  <SelectTrigger id="status" className="w-full bg-white border-slate-200 focus:ring-primary focus:border-primary">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-slate-200 shadow-md">
                    <SelectItem value="published">
                      <span className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-green-500 shrink-0" />
                        Published
                      </span>
                    </SelectItem>
                    <SelectItem value="draft">
                      <span className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-amber-500 shrink-0" />
                        Draft
                      </span>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Thumbnail Upload */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-primary font-medium">Cover Image</Label>
                <button
                  type="button"
                  onClick={generateAiImage}
                  disabled={isGeneratingImage}
                  className="text-xs text-primary font-semibold hover:underline flex items-center gap-1"
                >
                  {isGeneratingImage ? (
                    <><Loader2 className="h-3 w-3 animate-spin" /> Generating Image...</>
                  ) : (
                    '✨ Generate with AI'
                  )}
                </button>
              </div>
              <input
                ref={thumbnailInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => { const f = e.target.files?.[0]; if (f) handleThumbnailUpload(f); }}
              />
              {imageSrc ? (
                /* Preview */
                <div className="relative group rounded-lg overflow-hidden border border-slate-200 bg-white">
                  <img
                    src={imageSrc}
                    alt={imageHint || 'thumbnail'}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => thumbnailInputRef.current?.click()}
                      className="bg-white text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-md hover:bg-slate-100 transition-colors"
                    >
                      Change Image
                    </button>
                    <button
                      type="button"
                      onClick={() => setImageSrc('')}
                      className="bg-red-500 text-white p-1.5 rounded-md hover:bg-red-600 transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ) : (
                /* Drop Zone */
                <div
                  onClick={() => thumbnailInputRef.current?.click()}
                  onDrop={handleThumbnailDrop}
                  onDragOver={(e) => e.preventDefault()}
                  className="flex flex-col items-center justify-center h-48 rounded-lg border-2 border-dashed border-slate-200 bg-white hover:border-primary hover:bg-primary/5 transition-colors cursor-pointer"
                >
                  {imageUploading ? (
                    <>
                      <Loader2 className="h-7 w-7 text-primary animate-spin mb-2" />
                      <p className="text-sm text-slate-500">Uploading...</p>
                    </>
                  ) : (
                    <>
                      <ImagePlus className="h-8 w-8 text-slate-300 mb-2" />
                      <p className="text-sm font-medium text-slate-500">Click or drag to upload</p>
                      <p className="text-xs text-slate-400 mt-1">PNG, JPG, WEBP up to 10MB</p>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Image Alt Text */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="imageHint" className="text-primary font-medium">Image Alt Text (SEO)</Label>
                <button
                  type="button"
                  onClick={() => generateAiField('altText')}
                  disabled={isGeneratingAltText}
                  className="text-xs text-primary font-semibold hover:underline flex items-center gap-1"
                >
                  {isGeneratingAltText ? (
                    <><Loader2 className="h-3 w-3 animate-spin" /> Generating...</>
                  ) : (
                    '✨ Generate with AI'
                  )}
                </button>
              </div>
              <Input
                id="imageHint"
                type="text"
                value={imageHint}
                onChange={(e) => setImageHint(e.target.value)}
                placeholder="e.g. modern aesthetic clinic lobby"
                className="border-slate-200 focus:border-primary bg-white"
              />
              {imageSrc && (
                <p className="text-xs text-slate-400 break-all">Path: <code>{imageSrc}</code></p>
              )}
            </div>


            {/* Excerpt */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="excerpt" className="text-primary font-medium">Excerpt / Summary</Label>
                <button
                  type="button"
                  onClick={() => generateAiField('excerpt')}
                  disabled={isGeneratingExcerpt}
                  className="text-xs text-primary font-semibold hover:underline flex items-center gap-1"
                >
                  {isGeneratingExcerpt ? (
                    <><Loader2 className="h-3 w-3 animate-spin" /> Generating...</>
                  ) : (
                    '✨ Generate with AI'
                  )}
                </button>
              </div>
              <Textarea
                id="excerpt"
                rows={3}
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="Write a brief overview of the article..."
                className="border-slate-200 focus:border-primary bg-white resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-primary/95 text-primary-foreground font-semibold py-6"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving article...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" /> Save Article
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
