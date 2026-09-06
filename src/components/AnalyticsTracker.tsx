'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Generate or retrieve session ID
    let sessionId = sessionStorage.getItem('site_session_id');
    if (!sessionId) {
      sessionId = crypto.randomUUID();
      sessionStorage.setItem('site_session_id', sessionId);
    }

    const trackPageView = async () => {
      try {
        const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
        
        await fetch('/api/analytics/track', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            path: url,
            referrer: document.referrer,
            session_id: sessionId,
          }),
        });
      } catch (error) {
        // Silently fail if tracking fails
        console.error('Failed to track page view:', error);
      }
    };

    // Small delay to ensure route change is complete
    const timeout = setTimeout(trackPageView, 500);
    return () => clearTimeout(timeout);
  }, [pathname, searchParams]);

  return null;
}
