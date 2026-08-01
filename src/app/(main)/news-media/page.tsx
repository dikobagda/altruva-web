import type { Metadata } from 'next';
import NewsMediaContent from './NewsMediaContent';

export const metadata: Metadata = {
  title: 'News & Media Coverage | Altruva Aesthetic Clinic',
  description: 'Discover what the press is saying about Altruva Aesthetic Clinic\'s innovative regenerative treatments, technology, and philosophy of natural beauty.',
  alternates: {
    canonical: '/news-media',
  },
};

export default function NewsAndMediaPage() {
  return <NewsMediaContent />;
}
