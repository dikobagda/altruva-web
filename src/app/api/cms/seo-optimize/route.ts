import { NextResponse } from 'next/server';

interface OptimizeRequest {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  imageHint: string;
}

export async function POST(request: Request) {
  try {
    const { title, slug, excerpt, content, imageHint } = await request.json() as OptimizeRequest;

    const wordCountRaw = content ? content.replace(/<[^>]*>/g, '').split(/\s+/).length : 0;

    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey) {
      // Call Gemini API for smart optimization suggestions
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
                      text: `You are an expert SEO and GEO (Generative Engine Optimization) expert for an upscale aesthetic clinic website (Altruva).
Analyze the following article details and return optimized versions of the Title, Slug, Excerpt, Image Alt text, Content Body (HTML), and Actionable Content Improvements.

Input data:
- Title: "${title}"
- Slug: "${slug}"
- Excerpt: "${excerpt}"
- Image Alt: "${imageHint}"
- Content Body (HTML): "${content}"
- Word Count: ${wordCountRaw}

Rules for optimization:
1. Title: Must be exactly between 50 and 70 characters, compelling, and SEO-friendly.
2. Slug: Clean URL (lowercase, alphanumeric, hyphens only, short).
3. Excerpt: Compelling summary between 120 and 160 characters.
4. Image Alt: Descriptive alt tag for image SEO (e.g. clinics, treatments, modern lobbies).
5. Content Body (HTML): Enhance the text structure to improve AI capture score. Keep original paragraphs, but inject a short bullet list summary of key points at the top (within <ul>/<li>), ensure clear semantic headings (<h2> and <h3>), and include clear definition statements (e.g. "X adalah...") for direct Q&A boxes. Keep all HTML tags valid.
6. Content Improvements: Actionable suggestions for hierarchy, bullet points, readability.

Return response strictly as a JSON object with this shape:
{
  "optimizedTitle": "New Title Here",
  "optimizedSlug": "new-slug-here",
  "optimizedExcerpt": "New excerpt summary here...",
  "optimizedImageHint": "new image alt description here",
  "optimizedContent": "New HTML Content Body Here",
  "contentSuggestions": [
    "Suggestion 1...",
    "Suggestion 2..."
  ]
}`
                    }
                  ]
                }
              ],
              generationConfig: {
                responseMimeType: "application/json"
              }
            })
          }
        );

        if (response.ok) {
          const resData = await response.json();
          const jsonText = resData.candidates?.[0]?.content?.parts?.[0]?.text;
          if (jsonText) {
            return NextResponse.json(JSON.parse(jsonText.trim()));
          }
        }
      } catch (geminiErr) {
        console.error('Gemini API optimization failed, falling back:', geminiErr);
      }
    }

    // High quality semantic rule-based fallback optimization
    // High quality semantic rule-based fallback optimization
    let optimizedTitle = title;
    if (title.length < 50) {
      optimizedTitle = `${title} | Altruva Aesthetic Clinic Jakarta`;
      if (optimizedTitle.length > 70) {
        optimizedTitle = `${title} | Altruva Clinic`;
      }
      if (optimizedTitle.length > 70) {
        optimizedTitle = title; 
      }
    } else if (title.length > 70) {
      // Smart split on colon, dash or pipe to avoid ugly truncation
      const parts = title.split(/[:|\-–—]/);
      const firstPart = parts[0]?.trim();
      if (firstPart && firstPart.length >= 45 && firstPart.length <= 70) {
        optimizedTitle = firstPart;
      } else if (firstPart && firstPart.length < 45 && firstPart.length > 10) {
        const candidate1 = `${firstPart} | Altruva Aesthetic Clinic`;
        const candidate2 = `${firstPart} | Altruva Clinic`;
        if (candidate1.length >= 50 && candidate1.length <= 70) {
          optimizedTitle = candidate1;
        } else if (candidate2.length >= 50 && candidate2.length <= 70) {
          optimizedTitle = candidate2;
        } else {
          optimizedTitle = candidate2;
        }
      } else {
        const cropped = title.substring(0, 67);
        const lastSpace = cropped.lastIndexOf(' ');
        optimizedTitle = lastSpace > 30 ? cropped.substring(0, lastSpace) + '...' : cropped + '...';
      }
    }

    const optimizedSlug = slug
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .substring(0, 50);

    let optimizedExcerpt = excerpt;
    if (excerpt.length < 120) {
      optimizedExcerpt = `${excerpt} Temukan penjelasan lengkap mengenai ${title.toLowerCase()} untuk kesehatan kulit wajah terbaik di Altruva Clinic Jakarta.`;
    }
    if (optimizedExcerpt.length > 160) {
      const cropped = optimizedExcerpt.substring(0, 157);
      const lastSpace = cropped.lastIndexOf(' ');
      optimizedExcerpt = lastSpace > 60 ? cropped.substring(0, lastSpace) + '...' : cropped + '...';
    }

    const optimizedImageHint = imageHint || `${title.toLowerCase()} treatment altruva aesthetic clinic jakarta`;

    // Optimize content body programmatically for the fallback
    let optimizedContent = content;
    const contentSuggestions = [];

    // Prepend heading if missing
    if (!content.includes('<h2') && !content.includes('&lt;h2')) {
      optimizedContent = `<h2>Mengenal Lebih Dekat tentang ${title}</h2>\n` + optimizedContent;
      contentSuggestions.push('Prepend H2 heading at the beginning of the article.');
    }
    // Prepend key takeaways summary list if missing
    if (!content.includes('<ul') && !content.includes('<ol')) {
      const summaryBox = `
<div class="bg-slate-50 p-5 rounded-lg border border-slate-100 my-6">
  <h3 class="font-serif text-primary text-lg font-bold mb-2">Poin Penting (Key Takeaways):</h3>
  <ul class="list-disc pl-5 space-y-1.5 text-slate-700">
    <li><strong>Definisi & Esensi:</strong> Memahami dasar penting dari ${title}.</li>
    <li><strong>Perawatan Terbaik:</strong> Solusi klinis modern untuk hasil optimal di Altruva.</li>
    <li><strong>Hasil Jangka Panjang:</strong> Rekomendasi ahli untuk menjaga kesehatan kulit wajah Anda.</li>
  </ul>
</div>\n`;
      // Find insertion index after first heading or insert at start
      const firstHeadingEnd = optimizedContent.indexOf('</h2>');
      if (firstHeadingEnd !== -1) {
        optimizedContent = optimizedContent.slice(0, firstHeadingEnd + 5) + summaryBox + optimizedContent.slice(firstHeadingEnd + 5);
      } else {
        optimizedContent = summaryBox + optimizedContent;
      }
      contentSuggestions.push('Prepend a key takeaways summary box with bullet points to improve search indexing.');
    }

    const plainText = content ? content.replace(/<[^>]*>/g, '') : '';
    const wordCount = plainText.split(/\s+/).length;

    if (wordCount < 500) {
      contentSuggestions.push(`Write more details to increase word count from ${wordCount} to at least 500 words.`);
    }
    if (!content.toLowerCase().includes('adalah') && !content.toLowerCase().includes('merupakan')) {
      contentSuggestions.push('Inject definitional words like "adalah" or "merupakan" to trigger GenAI response boxes.');
    }

    if (contentSuggestions.length === 0) {
      contentSuggestions.push('Content structure is fully optimized for readability and keyword density!');
    }

    return NextResponse.json({
      optimizedTitle,
      optimizedSlug,
      optimizedExcerpt,
      optimizedImageHint,
      optimizedContent,
      contentSuggestions,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
