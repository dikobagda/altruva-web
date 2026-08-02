import { NextResponse } from 'next/server';

interface FixHeadingsRequest {
  title: string;
  content: string;
}

interface OutlineItem {
  level: 'h2' | 'h3';
  text: string;
}

interface FixHeadingsResult {
  content: string;
  outline: OutlineItem[];
  suggestions: string[];
}

const BLOCK_TAGS = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'blockquote'];

const STOPWORDS = new Set([
  'yang', 'dan', 'untuk', 'dengan', 'pada', 'dari', 'di', 'ke', 'atau', 'ini', 'itu',
  'adalah', 'merupakan', 'secara', 'sebuah', 'serta', 'dalam', 'sebagai', 'menjadi',
  'dapat', 'akan', 'tidak', 'juga', 'dengan', 'the', 'and', 'for', 'with', 'from',
  'this', 'that', 'are', 'is', 'of', 'in', 'to', 'on', 'or', 'but', 'be', 'as',
]);

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Split raw HTML into an array of top-level block chunks (outer HTML), keeping
// any non-block fragments (e.g. <div> boxes, images, stray text) as opaque blocks.
function splitBlocks(html: string): string[] {
  const tagRe = new RegExp(`<(${BLOCK_TAGS.join('|')})\\b[^>]*>[\\s\\S]*?<\\/\\1>`, 'gi');
  const blocks: string[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = tagRe.exec(html)) !== null) {
    const between = html.slice(lastIndex, match.index).trim();
    if (between) blocks.push(between);
    blocks.push(match[0].trim());
    lastIndex = match.index + match[0].length;
  }
  const trailing = html.slice(lastIndex).trim();
  if (trailing) blocks.push(trailing);
  return blocks.filter(Boolean);
}

const blockTag = (block: string): string => {
  const m = block.match(/^<\s*([a-zA-Z0-9]+)/);
  return m ? m[1].toLowerCase() : '';
};

const isHeading = (block: string): boolean => /^<h[1-6]\b/i.test(block);

const textOf = (block: string): string =>
  block.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim();

function makeHeading(text: string, maxWords = 5): string {
  const words = text.replace(/<[^>]*>/g, '').trim().split(/\s+/);
  const significant: string[] = [];
  for (const word of words) {
    const clean = word.replace(/[^a-zA-ZÀ-ž0-9&.,'()-]/g, '').trim();
    if (clean.length === 0) continue;
    if (STOPWORDS.has(clean.toLowerCase())) continue;
    significant.push(clean);
    if (significant.length >= maxWords) break;
  }
  if (significant.length === 0) return 'Informasi Penting';
  let heading = significant.join(' ');
  return heading.charAt(0).toUpperCase() + heading.slice(1);
}

function fixHeadingsRuleBased(title: string, content: string): FixHeadingsResult {
  const blocks = splitBlocks(content);
  const out: string[] = [];
  const outline: OutlineItem[] = [];
  const suggestions: string[] = [];
  let buffer: string[] = [];
  let hasH2 = false;
  let hasH3 = false;

  const flush = () => {
    if (buffer.length === 0) return;
    const h2Text = makeHeading(textOf(buffer[0]) || title, 6);
    out.push(`<h2>${escapeHtml(h2Text)}</h2>`);
    outline.push({ level: 'h2', text: h2Text });
    hasH2 = true;
    buffer.forEach((block, i) => {
      if (i > 0 && !/^<(ul|ol)\b/i.test(block)) {
        const h3Text = makeHeading(textOf(block), 4);
        out.push(`<h3>${escapeHtml(h3Text)}</h3>`);
        outline.push({ level: 'h3', text: h3Text });
        hasH3 = true;
      }
      out.push(block);
    });
    buffer = [];
  };

  for (const block of blocks) {
    if (isHeading(block)) {
      flush();
      const tag = blockTag(block);
      if (tag === 'h2') hasH2 = true;
      if (tag === 'h3') hasH3 = true;
      outline.push({ level: tag === 'h2' ? 'h2' : 'h3', text: textOf(block) });
      out.push(block);
      continue;
    }
    if (buffer.length >= 3) flush();
    buffer.push(block);
  }
  flush();

  if (!hasH2) suggestions.push('Added H2 section headings so search engines can parse the article by sections.');
  if (!hasH3) suggestions.push('Added H3 subheadings under key sections to deepen the semantic hierarchy.');
  if (outline.length === 0) suggestions.push('Content is too short to derive a heading structure - consider expanding the article.');
  if (hasH2 && hasH3) suggestions.push('Heading hierarchy is complete (H2 + H3 present).');

  return { content: out.join('\n'), outline, suggestions };
}

export async function POST(request: Request) {
  try {
    const { title, content } = await request.json() as FixHeadingsRequest;
    if (!content) {
      return NextResponse.json({ error: 'Content is required' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [
                {
                  parts: [
                    {
                      text: `You are an expert SEO content editor for Altruva, an upscale aesthetic clinic.
Restructure the article HTML below into a clean semantic heading hierarchy: use <h2> for main sections and <h3> for subsections.

Rules:
- Keep ALL original text, paragraphs, lists, quotes, images and formatting intact. Do NOT delete, summarize or rewrite the body copy.
- Only ADD or reorganize <h2>/<h3> headings and split the content into logical sections.
- If headings already exist, fill in the gaps and correct the hierarchy (avoid skipping levels).
- Each heading text must be concise (4-9 words), descriptive, and derived from the section content.
- Return strict JSON with this exact shape:
{
  "content": "<full restructured HTML with headings>",
  "outline": [{"level": "h2", "text": "..."}, {"level": "h3", "text": "..."}],
  "suggestions": ["actionable tip 1", "actionable tip 2"]
}

Article title: "${title}"

Content HTML:
"${content}"`
                    }
                  ]
                }
              ],
              generationConfig: { responseMimeType: 'application/json' }
            })
          }
        );

        if (response.ok) {
          const resData = await response.json();
          const jsonText = resData.candidates?.[0]?.content?.parts?.[0]?.text;
          if (jsonText) {
            const parsed = JSON.parse(jsonText.trim());
            return NextResponse.json({
              content: parsed.content ?? content,
              outline: Array.isArray(parsed.outline) ? parsed.outline : [],
              suggestions: Array.isArray(parsed.suggestions) ? parsed.suggestions : [],
            });
          }
        }
      } catch (geminiErr) {
        console.error('Gemini heading fix failed, falling back:', geminiErr);
      }
    }

    return NextResponse.json(fixHeadingsRuleBased(title || '', content));
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
