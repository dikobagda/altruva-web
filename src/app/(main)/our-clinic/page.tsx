import type { Metadata } from 'next';
import OurClinicContent from './OurClinicContent';

export const metadata: Metadata = {
  title: 'Our Clinic | Altruva Aesthetic Clinic',
  description: 'Experience the warm, private, and technologically advanced environment of Altruva Aesthetic Clinic in Kebayoran Baru, Jakarta Selatan.',
  alternates: {
    canonical: '/our-clinic',
  },
};

export default function OurClinicPage() {
  return <OurClinicContent />;
}
