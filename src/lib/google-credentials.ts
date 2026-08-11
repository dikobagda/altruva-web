const PEM_BEGIN = '-----BEGIN PRIVATE KEY-----';
const PEM_END = '-----END PRIVATE KEY-----';

export interface GoogleCredentials {
  client_email: string;
  private_key: string;
}

/**
 * Builds Google service-account credentials from env vars, parsing the private
 * key defensively (base64 single-line value, wrapped quotes, literal \n,
 * CRLF, and body-only base64) so OpenSSL always receives a valid PEM block.
 */
export function getGoogleCredentials(): GoogleCredentials {
  const clientEmail = process.env.GCS_CLIENT_EMAIL;
  if (!clientEmail) {
    throw new Error('GCS_CLIENT_EMAIL environment variable is missing.');
  }

  const privateKey = getServiceAccountPrivateKey();
  if (!privateKey) {
    throw new Error(
      'Google service account private key is missing or malformed (check GCS_PRIVATE_KEY / GCS_PRIVATE_KEY_BASE64).'
    );
  }

  return { client_email: clientEmail, private_key: privateKey };
}

export function getServiceAccountPrivateKey(): string {
  // 1. Prefer a base64-encoded value: immune to newline/escaping issues
  const base64Key = (process.env.GCS_PRIVATE_KEY_BASE64 || '').trim();
  if (base64Key) {
    try {
      const decoded = Buffer.from(base64Key, 'base64').toString('utf8');
      const normalized = normalizePem(decoded);
      if (normalized) return normalized;
    } catch {
      // Ignore and fall through to the raw key
    }
  }

  // 2. Raw PEM key
  return normalizePem(process.env.GCS_PRIVATE_KEY || '');
}

function normalizePem(raw: string): string {
  let key = (raw || '').trim();

  // Strip wrapping single/double quotes (common when pasting from .env files)
  if (
    (key.startsWith('"') && key.endsWith('"')) ||
    (key.startsWith("'") && key.endsWith("'"))
  ) {
    key = key.slice(1, -1);
  }

  // Unescape literal \n sequences and normalize line endings
  key = key.replace(/\\n/g, '\n').replace(/\r\n/g, '\n').replace(/\r/g, '\n').trim();

  // Already a PEM block: make sure it ends with a newline
  if (key.includes(PEM_BEGIN) && key.includes(PEM_END)) {
    return key.endsWith('\n') ? key : key + '\n';
  }

  // Bare base64 body only (no PEM headers): wrap it into a valid PEM block
  const body = key.replace(/\s/g, '');
  if (!body || body.includes('-----')) return '';

  const lines = body.match(/.{1,64}/g) || [];
  if (!lines.length) return '';
  return `${PEM_BEGIN}\n${lines.join('\n')}\n${PEM_END}\n`;
}