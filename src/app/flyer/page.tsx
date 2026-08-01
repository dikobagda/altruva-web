import type { Metadata } from 'next';
import FlyerContent from './FlyerContent';

export const metadata: Metadata = {
  title: 'Complimentary Guide | Altruva Aesthetic Clinic',
  description: 'Download the Altruva complimentary guide and discover our signature treatments including Altruva Cocktail Contouring, A.R.T Lift by Sofwave, and Advanced Sofwave x GOURI.',
  alternates: {
    canonical: '/flyer',
  },
};

export default function FlyerPage() {
  return <FlyerContent />;
}
