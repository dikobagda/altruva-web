"use client";

import { useEffect } from 'react';

export default function WhatsAppClickTracker() {
  useEffect(() => {
    const trackClick = async (event: Event) => {
      const target = event.target as HTMLElement | null;
      const trackedEl = target?.closest?.('[data-track]') as HTMLElement | null;
      if (!trackedEl) return;

      const eventType = trackedEl.getAttribute('data-track');
      const href = trackedEl.getAttribute('href') || '';
      const page = window.location.pathname;

      try {
        await fetch('/api/clicks', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ event_type: eventType, href, page }),
        });
      } catch {
        // Fire-and-forget: ignore tracking failures
      }
    };

    document.addEventListener('click', trackClick);
    return () => document.removeEventListener('click', trackClick);
  }, []);

  return null;
}