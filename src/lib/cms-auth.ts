import crypto from 'crypto';

const SECRET = process.env.CMS_JWT_SECRET || 'supersecretaltruvacmsjwttoken123!';

export function generateSessionToken(username: string): string {
  const expires = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
  const signature = crypto
    .createHmac('sha256', SECRET)
    .update(`${username}:${expires}`)
    .digest('hex');
  return `${username}:${expires}:${signature}`;
}

export function verifySessionToken(token: string): boolean {
  try {
    const parts = token.split(':');
    if (parts.length !== 3) return false;
    const [username, expires, signature] = parts;
    
    // Check expiration
    if (parseInt(expires) < Date.now()) return false;
    
    // Validate signature
    const expectedSignature = crypto
      .createHmac('sha256', SECRET)
      .update(`${username}:${expires}`)
      .digest('hex');
      
    return signature === expectedSignature && username === (process.env.CMS_ADMIN_USERNAME || 'admin');
  } catch (error) {
    return false;
  }
}
