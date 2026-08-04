import type { Metadata } from 'next';
import SkinAnalysisContent from './SkinAnalysisContent';

export const metadata: Metadata = {
  title: 'AI Skin Analysis',
  description: 'Upload your photo and get a personalized AI-powered skin analysis with tailored recommendations from Altruva Aesthetic Clinic Jakarta.',
  alternates: {
    canonical: '/skin-analysis',
  },
  openGraph: {
    url: 'https://altruva.co.id/skin-analysis',
  },
};

export default function SkinAnalysisPage() {
  return <SkinAnalysisContent />;
}
