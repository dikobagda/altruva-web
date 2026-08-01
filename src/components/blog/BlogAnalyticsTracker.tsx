'use client';

import { useEffect } from 'react';

interface BlogAnalyticsTrackerProps {
  slug: string;
}

export default function BlogAnalyticsTracker({ slug }: BlogAnalyticsTrackerProps) {
  useEffect(() => {
    // Jalankan tracker view pada client-side setelah halaman termuat sempurna di browser
    const trackView = async () => {
      try {
        await fetch('/api/analytics/view', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ slug }),
        });
      } catch (err) {
        console.error('[Analytics] Failed to track page view:', err);
      }
    };

    // Delay sedikit agar pemuatan halaman utama selesai & menghindari blocking UI thread
    const timer = setTimeout(trackView, 1000);
    return () => clearTimeout(timer);
  }, [slug]);

  return null; // Komponen ini hanya menjalankan efek samping tracking (tidak merender UI apa pun)
}
