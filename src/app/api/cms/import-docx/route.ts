import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifySessionToken } from '@/lib/cms-auth';
import mammoth from 'mammoth';

async function checkAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get('cms_session')?.value;
  return token && verifySessionToken(token);
}

function htmlToText(html: string): string {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .substring(0, 80);
}

function extractTitle(html: string, fallback: string): string {
  const match = html.match(/<h[12][^>]*>(.*?)<\/h[12]>/i);
  if (match) {
    const text = htmlToText(match[1]);
    if (text) return text;
  }
  return fallback.replace(/\.docx$/i, '').replace(/[_-]+/g, ' ').trim();
}

function buildExcerpt(html: string, title: string): string {
  let text = htmlToText(html);
  text = text
    .replace(new RegExp(`^${title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'i'), '')
    .trim();
  if (text.length <= 160) return text;
  const cropped = text.substring(0, 157);
  const lastSpace = cropped.lastIndexOf(' ');
  return lastSpace > 60 ? cropped.substring(0, lastSpace) + '...' : cropped + '...';
}

function normalizeContent(html: string): string {
  let content = html
    .replace(/<\/?a[^>]*>/g, '')
    .replace(/<img[^>]*>/g, '');
  content = content
    .split(/\r?\n\s*\r?\n/)
    .map((block) => block.trim())
    .filter(Boolean)
    .join('\n\n');
  content = content.replace(/<(h[1-6]|p|ul|ol|li|blockquote)[^>]*>\s*<\/(h[1-6]|p|ul|ol|li|blockquote)>/g, '');
  return content;
}

async function structureWithGemini(title: string, content: string) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `You are an expert content editor for an upscale aesthetic clinic website (Altruva).
An article was extracted from a Microsoft Word (.docx) document. Restructure it into clean, well-organized HTML for the CMS.

Input title: "${title}"
Input body (HTML): "${content}"

Rules:
1. Title: Improve the title to be compelling and SEO-friendly (50-70 characters ideally). Keep the meaning of the original.
2. Excerpt: Write a compelling summary of the article between 120 and 160 characters.
3. Content Body (HTML): Keep the original paragraphs and information (do NOT invent new medical facts). Structure with semantic headings:
   - Use <h2> for main sections and <h3> for sub-sections.
   - Wrap paragraphs in <p> tags.
   - Convert bulleted/numbered points into <ul>/<li> or <ol>/<li>.
   - Add a short bullet list of key takeaways at the top inside <div class="bg-slate-50 p-5 rounded-lg border border-slate-100 my-6"> with an <h3> "Poin Penting (Key Takeaways):" heading and a <ul>.
   - Include definitional sentences with "adalah" or "merupakan" where natural.
   - Use Indonesian language if the source is Indonesian. Keep all HTML tags valid.

Return response strictly as a JSON object with this shape:
{
  "title": "Improved title here",
  "excerpt": "Compelling 120-160 char summary",
  "content": "Full structured HTML body"
}`,
              },
            ],
          },
        ],
        generationConfig: {
          responseMimeType: 'application/json',
          temperature: 0.4,
        },
      }),
    }
  );

  if (!response.ok) return null;

  const resData = await response.json();
  const jsonText = resData.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!jsonText) return null;

  try {
    const parsed = JSON.parse(jsonText.trim());
    return {
      title: typeof parsed.title === 'string' && parsed.title.trim() ? parsed.title.trim() : null,
      excerpt: typeof parsed.excerpt === 'string' && parsed.excerpt.trim() ? parsed.excerpt.trim() : null,
      content: typeof parsed.content === 'string' && parsed.content.trim() ? parsed.content.trim() : null,
    };
  } catch {
    return null;
  }
}

export async function POST(request: Request) {
  const authenticated = await checkAuth();
  if (!authenticated) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const isDocx =
      file.name.toLowerCase().endsWith('.docx') ||
      file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    if (!isDocx) {
      return NextResponse.json({ error: 'Only .docx files are supported' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    let rawHtml: string;
    try {
      const result = await mammoth.convertToHtml({ buffer });
      rawHtml = result.value;
    } catch {
      return NextResponse.json({ error: 'Failed to parse the .docx file' }, { status: 422 });
    }

    const fallbackTitle = file.name.replace(/\.docx$/i, '').replace(/[_-]+/g, ' ').trim();
    const extractedTitle = extractTitle(rawHtml, fallbackTitle);
    let content = normalizeContent(rawHtml);

    const structured = await structureWithGemini(extractedTitle, content);

    const title = structured?.title || extractedTitle;
    const excerpt = structured?.excerpt || buildExcerpt(content, title);

    if (structured?.content) {
      content = structured.content;
    }

    return NextResponse.json({
      success: true,
      title,
      slug: slugify(title),
      excerpt,
      content,
      wordCount: htmlToText(content).split(/\s+/).filter(Boolean).length,
      usedAi: Boolean(structured),
    });
  } catch (error: any) {
    console.error('Docx import error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
