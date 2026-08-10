"use client";

import { useEffect } from 'react';

const IP_TRACKING_ENABLED = process.env.NEXT_PUBLIC_IP_TRACKING === '1';

export default function IpLocationTracker() {
  useEffect(() => {
    if (!IP_TRACKING_ENABLED) return;

    if (sessionStorage.getItem('altruva_ip_tracked')) return;
    sessionStorage.setItem('altruva_ip_tracked', '1');

    fetch('https://ipapi.co/json/')
      .then((res) => res.json())
      .then((data) => {
        const payload = {
          estimated_city: data.city,
          estimated_region: data.region,
        };

        if (typeof window.gtag === 'function') {
          gtag('event', 'auto_ip_location', payload);
        } else if (Array.isArray(window.dataLayer)) {
          window.dataLayer.push({ event: 'auto_ip_location', ...payload });
        }
      })
      .catch(() => {
        // Fire-and-forget: ignore location tracking failures
      });
  }, []);

  return null;
}