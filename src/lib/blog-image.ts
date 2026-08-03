const GCS_PUBLIC_BASE = `https://storage.googleapis.com/${process.env.GCS_BUCKET_NAME || 'altruva-dev'}`;

// Resolve legacy local "/uploads/..." paths stored in the DB to their GCS URL,
// so images keep working in production where the local folder doesn't exist.
export function resolveBlogImageUrl(src?: string | null): string {
  if (!src) return '';
  if (src.startsWith('/uploads/')) {
    return `${GCS_PUBLIC_BASE}${src}`;
  }
  return src;
}

// Rewrite legacy "/uploads/..." image paths inside article HTML content to GCS URLs.
export function resolveBlogContent(content?: string | null): string {
  if (!content) return '';
  if (!content.includes('/uploads/')) return content;
  return content.replace(/\/uploads\/([a-zA-Z0-9.-_]+)/g, (match, filename) => {
    return `${GCS_PUBLIC_BASE}/uploads/${filename}`;
  });
}
