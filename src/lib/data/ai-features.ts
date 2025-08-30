import type { LucideIcon } from 'lucide-react';
import { Bot, Star, Sun } from 'lucide-react';

export interface aiAnalysisFeature {
    Icon: LucideIcon;
    title: Record<'en' | 'id', string>;
    description: Record<'en' | 'id', string>;
}

export const aiAnalysisFeatures: aiAnalysisFeature[] = [
    {
      Icon: Bot,
      title: {
        en: "Personalized Insights",
        id: "Wawasan yang Dipersonalisasi"
      },
      description: {
        en: "Receive skin type and condition analysis tailored to you.",
        id: "Terima analisis jenis dan kondisi kulit yang disesuaikan untuk Anda."
      }
    },
    {
      Icon: Star,
      title: {
        en: "Custom Recommendations",
        id: "Rekomendasi Khusus"
      },
      description: {
        en: "Get product and routine suggestions based on your unique needs.",
        id: "Dapatkan saran produk dan rutinitas berdasarkan kebutuhan unik Anda."
      }
    },
    {
      Icon: Sun,
      title: {
        en: "Targeted Treatments",
        id: "Perawatan yang Ditargetkan"
      },
      description: {
        en: "Discover suitable treatments for your specific skin concerns.",
        id: "Temukan perawatan yang sesuai untuk masalah kulit spesifik Anda."
      }
    }
];
