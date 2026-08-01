import type { Metadata } from 'next';
import AboutUsContent from './AboutUsContent';

export const metadata: Metadata = {
  title: 'About Altruva Aesthetic Clinic',
  description: 'Discover Altruva Aesthetic Clinic Jakarta\'s philosophy of regenerative contouring and why patients trust us for natural, elegant, non-surgical results.',
  alternates: {
    canonical: '/about-us',
  },
};

export default function AboutUsPage() {
  return <AboutUsContent />;
}
