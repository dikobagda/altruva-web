import type { Metadata } from 'next';
import OurDevicesContent from './OurDevicesContent';

export const metadata: Metadata = {
  title: 'Our Technology & Devices',
  description: 'Discover the cutting-edge devices and clinically proven technologies used at Altruva Aesthetic Clinic, including Sofwave, EmSculpt Neo, and GOURI.',
  alternates: {
    canonical: '/about/our-devices',
  },
  openGraph: {
    url: 'https://altruva.co.id/about/our-devices',
  },
};

export default function OurDevicesPage() {
  return <OurDevicesContent />;
}
