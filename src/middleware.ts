import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host') || '';

  // 1. WWW to Non-WWW Redirect Consistency (Prevent internal port :3000 leak)
  if (host === 'www.altruva.co.id' || host.includes('www.altruva.co.id')) {
    const secureUrl = `https://altruva.co.id${url.pathname}${url.search}`;
    return NextResponse.redirect(secureUrl, 301);
  }

  // 2. Subdomain Rewrite: If request is from cms.altruva.co.id
  if (host.startsWith('cms.altruva.') || host.startsWith('cms.localhost:')) {
    if (!url.pathname.startsWith('/cms')) {
      url.pathname = `/cms${url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  // 2. Auth Guard: Secure all /cms pages (except login and api routes)
  if (url.pathname.startsWith('/cms') && !url.pathname.startsWith('/cms/login') && !url.pathname.startsWith('/api')) {
    const token = request.cookies.get('cms_session')?.value;
    
    if (!token) {
      const loginUrl = new URL('/cms/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

// Apply middleware to cms and rewrite endpoints
export const config = {
  matcher: ['/cms/:path*', '/((?!_next/static|_next/image|images|favicon.ico).*)'],
};
