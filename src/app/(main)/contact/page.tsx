import type { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact Altruva Aesthetic Clinic',
  description: 'Get in touch with Altruva Aesthetic Clinic in Kebayoran Baru, Jakarta Selatan. Find our location, contact details, and reach out for consultations.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
