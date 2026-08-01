import type { Metadata } from 'next';
import FlyerContent from './FlyerContent';

export const metadata: Metadata = {
  title: 'Complimentary Guide',
  description: 'Download the Altruva complimentary guide to signature treatments like Cocktail Contouring, A.R.T Lift by Sofwave, and Advanced Sofwave x GOURI.',
  alternates: {
    canonical: '/flyer',
  },
};

export default function FlyerPage() {
  return <FlyerContent />;
}
