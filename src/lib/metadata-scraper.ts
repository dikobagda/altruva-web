export interface LinkMetadata {
  title?: string;
  description?: string;
  image?: string;
}

export async function fetchLinkMetadata(url: string): Promise<LinkMetadata> {
  try {
    // Prevent fetching invalid or empty URLs
    if (!url || !url.startsWith('http')) {
      return {};
    }

    // Set a 3-second timeout to prevent blocking server-side rendering
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
      },
      signal: controller.signal,
      next: { revalidate: 86400 } // Cache results for 24 hours
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      return {};
    }

    const html = await res.text();

    const getMetaTag = (htmlContent: string, nameOrProperty: string): string => {
      const regex = new RegExp(
        `<meta[^>]*?(?:name|property)=["']${nameOrProperty}["'][^>]*?content=["']([^"']+)["']`,
        'i'
      );
      const match = htmlContent.match(regex);
      if (match) return match[1];

      const regexReverse = new RegExp(
        `<meta[^>]*?content=["']([^"']+)["'][^>]*?(?:name|property)=["']${nameOrProperty}["']`,
        'i'
      );
      const matchReverse = htmlContent.match(regexReverse);
      if (matchReverse) return matchReverse[1];

      return '';
    };

    const image = getMetaTag(html, 'og:image') || getMetaTag(html, 'twitter:image');
    const description = getMetaTag(html, 'og:description') || getMetaTag(html, 'description');
    
    const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
    const title = titleMatch ? titleMatch[1] : undefined;

    return {
      title: title ? decodeHtmlEntities(title.trim()) : undefined,
      description: description ? decodeHtmlEntities(description.trim()) : undefined,
      image: image ? decodeHtmlEntities(image.trim()) : undefined
    };
  } catch (error) {
    // Log a warning instead of throwing to prevent crashing the Next.js render pipeline
    console.warn(`[Metadata Scraper] Failed to fetch metadata for ${url}:`, error instanceof Error ? error.message : error);
    return {};
  }
}

function decodeHtmlEntities(str: string): string {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&ldquo;/g, '“')
    .replace(/&rdquo;/g, '”')
    .replace(/&lsquo;/g, '‘')
    .replace(/&rsquo;/g, '’')
    .replace(/&ndash;/g, '–')
    .replace(/&mdash;/g, '—')
    .replace(/&#x27;/g, "'")
    .replace(/&#x2F;/g, '/')
    .replace(/&nbsp;/g, ' ');
}
