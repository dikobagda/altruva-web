import type { Metadata } from 'next';
import OurDevicesContent from './OurDevicesContent';

export const metadata: Metadata = {
  title: 'Our Technology & Devices | Altruva Aesthetic Clinic',
  description: 'Discover the cutting-edge devices and clinically proven technologies used at Altruva Aesthetic Clinic, including Sofwave, EmSculpt Neo, and GOURI.',
  alternates: {
    canonical: '/about-us/our-devices',
  },
};

export default function OurDevicesPage() {
  return <OurDevicesContent />;
}
