import type { Metadata } from 'next';
import FlyerContent from './FlyerContent';

export const metadata: Metadata = {
  title: "Altruva Aesthetic Clinic | The 1's Regenerative Contouring in Jakarta",
  description: "Altruva Aesthetic Clinic, treatments like Cocktail Contouring, A.R.T Lift by Sofwave, and Advanced Sofwave x GOURI.",
  alternates: {
    canonical: '/flyer',
  },
};

export default function FlyerPage() {
  return <FlyerContent />;
}
