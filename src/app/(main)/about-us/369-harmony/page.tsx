import type { Metadata } from 'next';
import Harmony369Content from './Harmony369Content';

export const metadata: Metadata = {
  title: '369 Harmony Approach',
  description: 'The Altruva 369 Harmony Approach is your intelligent, year-round beauty roadmap for natural, long-term rejuvenation based on regenerative medicine.',
  alternates: {
    canonical: '/about-us/369-harmony',
  },
};

export default function Harmony369Page() {
  return <Harmony369Content />;
}
