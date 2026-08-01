import type { Metadata } from 'next';
import AboutUsContent from './AboutUsContent';

export const metadata: Metadata = {
  title: 'About Us | Altruva Aesthetic Clinic',
  description: 'Learn about Altruva Aesthetic Clinic in Jakarta, our philosophy of regenerative contouring, and why patients choose us for natural, elegant results led by dr. Olivia Aldisa.',
  alternates: {
    canonical: '/about-us',
  },
};

export default function AboutUsPage() {
  return <AboutUsContent />;
}
