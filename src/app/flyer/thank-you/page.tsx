import type { Metadata } from 'next';
import ThankYouPageContent from './ThankYouContent';

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Thank you for downloading the Altruva complimentary guide. Book a personalized consultation to start your journey toward natural, radiant beauty.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function ThankYouPage() {
  return <ThankYouPageContent />;
}
