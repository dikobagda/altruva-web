import type { Metadata } from 'next';
import ThankYouPageContent from './ThankYouContent';

export const metadata: Metadata = {
  title: 'Thank You | Altruva Aesthetic Clinic',
  robots: {
    index: false,
    follow: true,
  },
};

export default function ThankYouPage() {
  return <ThankYouPageContent />;
}
