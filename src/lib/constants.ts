
import type { LucideIcon } from 'lucide-react';
import { HeartPulse, Droplets, Bot, HelpCircle, MessageSquare, Star, CheckCircle, Shield, Sparkles, Zap, Sun } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  price: string;
  Icon?: LucideIcon;
  imageSrc: string;
  imageHint: string;
  category: 'Prejuvenation' | 'Rejuvenation';
}

export const services: Service[] = [
  // --- Prejuvenation (< 40) ---
  {
    id: 'glacier-skin',
    title: 'Glacier Skin',
    description: 'Pore refining & oil control for a smooth, matte finish. From Altruva Glow for skin quality optimization.',
    price: '4,000,000 IDR',
    category: 'Prejuvenation',
    Icon: Droplets,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'refined skin texture'
  },
  {
    id: 'dna-repair',
    title: 'DNA Repair',
    description: 'Environmental damage repair & skin barrier fortification. From Altruva Glow for skin quality optimization.',
    price: '5,500,000 IDR',
    category: 'Prejuvenation',
    Icon: Shield,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'skin barrier protection'
  },
  {
    id: 'purifying-booster',
    title: 'Purifying Booster',
    description: 'Therapy for anti-inflammatory and reduced acne marks. From Altruva Glow for skin quality optimization.',
    price: '2,500,000 IDR',
    category: 'Prejuvenation',
    Icon: Sparkles,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'clear skin'
  },
  {
    id: 'dark-spot-booster',
    title: 'Dark Spot Booster',
    description: 'Targeted hyperpigmentation correction. From Altruva Glow for skin quality optimization.',
    price: '3,500,000 IDR',
    category: 'Prejuvenation',
    Icon: Sun,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'even skin tone'
  },
  {
    id: 'bio-prf',
    title: 'Bio-PRF',
    description: 'Platelet-rich fibrin therapy for deep tissue regeneration. From Altruva Glow for skin quality optimization.',
    price: '2,500,000 IDR',
    category: 'Prejuvenation',
    Icon: HeartPulse,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'regenerative therapy'
  },
  {
    id: 'clarify-peel',
    title: 'Clarify Peel',
    description: 'Breakout-prone skin detox & renewal. From Altruva Glow\'s Signature Peels.',
    price: '500,000 IDR',
    category: 'Prejuvenation',
    Icon: Sparkles,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'chemical peel'
  },
  {
    id: 'korean-luminous-peel',
    title: 'Korean Luminous Peel',
    description: 'Smoothes & brightens for a luminous glow. From Altruva Glow\'s Signature Peels.',
    price: '700,000 IDR',
    category: 'Prejuvenation',
    Icon: Star,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'glowing skin'
  },
  {
    id: 'exion-lumi-laser',
    title: 'Exion Lumi Laser',
    description: 'Targets light pigmentation, PIH, and mild acne marks. From Altruva Glow\'s Signature Laser.',
    price: 'Price on consultation',
    category: 'Prejuvenation',
    Icon: Zap,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'laser treatment'
  },
  {
    id: 'exion-scar-solver',
    title: 'Exion Scar Solver',
    description: 'Smooths textural irregularities and early acne scarring. From Altruva Glow\'s Signature Laser.',
    price: 'Price on consultation',
    category: 'Prejuvenation',
    Icon: Zap,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'acne scar treatment'
  },
  {
    id: 'art-lyft-lite',
    title: 'A.R.T Lyft Lite by Sofwave',
    description: 'Up to 300 shots. Personalized SUPERB Ultrasound-powered deep tissue tightening. From Altruva Lift.',
    price: '20,000,000 IDR',
    category: 'Prejuvenation',
    Icon: Zap,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'ultrasound facelift'
  },
  {
    id: 'gorgeous-lyft-prejuvenation',
    title: 'Gorgeous Lyft',
    description: 'Injectable liquid type biostimulators for structural longevity. From Altruva Lift.',
    price: '6,000,000 IDR',
    category: 'Prejuvenation',
    Icon: HeartPulse,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'biostimulator injection'
  },
  {
    id: 'exion-lumi-rf',
    title: 'Exion Lumi-RF (RF Face)',
    description: 'Fusion of RF and Ultrasound Technology. Best for maintenance after A.R.T Lyft. From Altruva Lift.',
    price: 'Price on consultation',
    category: 'Prejuvenation',
    Icon: Zap,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'rf skin tightening'
  },
  {
    id: 'slim-contour-injection',
    title: 'Slim Contour Injection',
    description: 'Facial fat detox & contouring. From Altruva Lift\'s Signature Contouring.',
    price: '2,500,000 IDR',
    category: 'Prejuvenation',
    Icon: Droplets,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'facial contouring'
  },
  {
    id: 'face-modulator-half',
    title: 'Face Modulator Half Dose',
    description: 'Subtle wrinkle softening while preserving natural expression. From Altruva Lift\'s Signature Contouring.',
    price: '5,000,000 IDR',
    category: 'Prejuvenation',
    Icon: Sparkles,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'wrinkle treatment'
  },
  {
    id: 'dermal-fillers',
    title: 'Dermal Fillers',
    description: 'Minimalist volume enhancement for refined definition. From Altruva Lift\'s Signature Contouring.',
    price: '6,000,000 IDR',
    category: 'Prejuvenation',
    Icon: Star,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'dermal filler'
  },

  // --- Rejuvenation (> 40) ---
  {
    id: 'exoprime-pro',
    title: 'Exoprime Pro',
    description: 'Deep regenerative exosome therapy. From Altruva Glow for regenerative rejuvenation.',
    price: '4,500,000 IDR',
    category: 'Rejuvenation',
    Icon: HeartPulse,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'exosome therapy'
  },
  {
    id: 'dna-repair-pro',
    title: 'DNA Repair Pro',
    description: 'Reinforces skin’s cellular repair system. From Altruva Glow for regenerative rejuvenation.',
    price: '7,500,000 IDR',
    category: 'Rejuvenation',
    Icon: Shield,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'cellular repair'
  },
  {
    id: 'dna-repair-eye',
    title: 'DNA Repair Eye',
    description: 'Reinforces skin’s cellular repair system for undereye area. From Altruva Glow for regenerative rejuvenation.',
    price: '5,000,000 IDR',
    category: 'Rejuvenation',
    Icon: Shield,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'eye treatment'
  },
  {
    id: 'amino-booster',
    title: 'Amino Booster',
    description: 'Dermal protein replenishment for enhanced density. From Altruva Glow for regenerative rejuvenation.',
    price: '6,000,000 IDR',
    category: 'Rejuvenation',
    Icon: Droplets,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'skin density'
  },
  {
    id: 'melabooster',
    title: 'MelaBooster',
    description: 'Powerful melanin modulation. From Altruva Glow for regenerative rejuvenation.',
    price: '4,500,000 IDR',
    category: 'Rejuvenation',
    Icon: Sun,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'pigmentation treatment'
  },
  {
    id: 'bio-prf-rejuvenation',
    title: 'Bio-PRF',
    description: 'Comprehensive regenerative healing. From Altruva Glow for regenerative rejuvenation.',
    price: '3,000,000 IDR',
    category: 'Rejuvenation',
    Icon: HeartPulse,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'regenerative healing'
  },
  {
    id: 'altruva-youth-elixir',
    title: 'Altruva Youth Elixir',
    description: 'The highest form of regenerative complexes combining polynucleotides, exosomes, HA, amino acids, and micronutrients.',
    price: '6,000,000 IDR',
    category: 'Rejuvenation',
    Icon: Star,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'advanced anti-aging'
  },
  {
    id: 'radiant-advanced-peel',
    title: 'Radiant Advanced Peel',
    description: 'Bio-stimulatory resurfacing for skin renewal. From Altruva Glow\'s Signature Peels.',
    price: '1,000,000 IDR',
    category: 'Rejuvenation',
    Icon: Sparkles,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'advanced chemical peel'
  },
  {
    id: 'exion-regen-laser',
    title: 'Exion Regen Laser',
    description: 'Lunchtime laser targeting deep pigmentation, restoring skin luminosity without downtime.',
    price: 'Price on consultation',
    category: 'Rejuvenation',
    Icon: Zap,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'no-downtime laser'
  },
  {
    id: 'exion-fractiopro',
    title: 'Exion FractioPro',
    description: 'Deeper fractionated resurfacing for pronounced pigment and texture correction.',
    price: 'Price on consultation',
    category: 'Rejuvenation',
    Icon: Zap,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'fractional laser'
  },
  {
    id: 'art-lyft',
    title: 'A.R.T Lyft by Sofwave',
    description: 'Up to 500 shots. Personalized SUPERB Ultrasound for deep dermal firming. From Altruva Lift.',
    price: '30,000,000 IDR',
    category: 'Rejuvenation',
    Icon: Zap,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'advanced ultrasound lift'
  },
  {
    id: 'gorgeous-lyft-rejuvenation',
    title: 'Gorgeous Lyft',
    description: 'Liquid type biostimulators for strong collagen restoration. From Altruva Lift.',
    price: '11,000,000 IDR',
    category: 'Rejuvenation',
    Icon: HeartPulse,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'collagen biostimulator'
  },
  {
    id: 'radiance-lyft',
    title: 'Radiance Lyft',
    description: 'Comprehensive deep skin tightening. From Altruva Lift.',
    price: '9,000,000 IDR',
    category: 'Rejuvenation',
    Icon: Star,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'deep skin tightening'
  },
  {
    id: 'cocktail-contouring',
    title: 'Cocktail Contouring',
    description: 'Personalized bio-stimulator & selected filler fusion. From Altruva Lift\'s Signature Restoration.',
    price: '15,500,000 IDR',
    category: 'Rejuvenation',
    Icon: Sparkles,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'custom contouring'
  },
  {
    id: 'dermal-fillers-pro',
    title: 'Dermal Fillers Pro',
    description: 'Precision volumization for facial balance. From Altruva Lift\'s Signature Restoration.',
    price: '6,500,000 IDR',
    category: 'Rejuvenation',
    Icon: Star,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'advanced dermal filler'
  },
  {
    id: 'face-modulator-full',
    title: 'Face Modulator Full Dose',
    description: 'Dynamic wrinkle refinement. From Altruva Lift\'s Signature Restoration.',
    price: '9,000,000 IDR',
    category: 'Rejuvenation',
    Icon: Sparkles,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'full wrinkle treatment'
  },
  {
    id: 'sculpt-lift-plus',
    title: 'Sculpt Lift +',
    description: 'Facial contour sculpting & detoxification. From Altruva Lift\'s Signature Restoration.',
    price: '4,000,000 IDR',
    category: 'Rejuvenation',
    Icon: Zap,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'face sculpting'
  },
];


export interface GalleryImage {
  id: string;
  beforeSrc: string;
  afterSrc: string;
  procedure: string;
  description: string;
  beforeHint: string;
  afterHint: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    beforeSrc: 'https://placehold.co/400x400.png',
    afterSrc: 'https://placehold.co/400x400.png',
    procedure: 'Age-Defy Injections',
    description: 'Significant reduction in forehead lines and crow\'s feet.',
    beforeHint: 'wrinkled forehead',
    afterHint: 'smooth forehead'
  },
  {
    id: '2',
    beforeSrc: 'https://placehold.co/400x400.png',
    afterSrc: 'https://placehold.co/400x400.png',
    procedure: 'Laser Rejuvenation',
    description: 'Improved skin tone and texture, reduction in sun spots.',
    beforeHint: 'sun damaged skin',
    afterHint: 'clear skin'
  },
  {
    id: '3',
    beforeSrc: 'https://placehold.co/400x400.png',
    afterSrc: 'https://placehold.co/400x400.png',
    procedure: 'Divine Glow Facial',
    description: 'Enhanced radiance and clarity after a series of facials.',
    beforeHint: 'dull skin',
    afterHint: 'glowing skin'
  },
  {
    id: '4',
    beforeSrc: 'https://placehold.co/400x400.png',
    afterSrc: 'https://placehold.co/400x400.png',
    procedure: 'Lip Enhancement',
    description: 'Fuller, more defined lips with a natural look.',
    beforeHint: 'thin lips',
    afterHint: 'full lips'
  },
];

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  procedure: string;
  avatarSrc?: string;
  rating: number; // 1-5 stars
  avatarHint?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah L.',
    text: 'Altruva has completely transformed my skin! The staff is incredibly knowledgeable and caring. I highly recommend their Divine Glow Facial.',
    procedure: 'Divine Glow Facial',
    avatarSrc: 'https://placehold.co/100x100.png',
    rating: 5,
    avatarHint: 'woman smiling'
  },
  {
    id: '2',
    name: 'John B.',
    text: 'I was hesitant about injections, but the results from Age-Defy are amazing and look so natural. The team at Altruva made me feel comfortable throughout the process.',
    procedure: 'Age-Defy Injections',
    rating: 5,
    avatarHint: 'man portrait'
  },
  {
    id: '3',
    name: 'Emily K.',
    text: 'The laser rejuvenation treatments have done wonders for my sun damage. My skin looks years younger. Thank you, Altruva!',
    procedure: 'Laser Rejuvenation',
    avatarSrc: 'https://placehold.co/100x100.png',
    rating: 4,
    avatarHint: 'happy person'
  },
];

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  Icon?: LucideIcon;
}

export const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'What is the downtime for Age-Defy Injections?',
    answer: 'Downtime is minimal for most neurotoxin injections, often allowing you to return to daily activities immediately. Some minor bruising or swelling may occur. For dermal fillers, downtime can range from a few hours to a few days, depending on the area treated and individual response. We will discuss this thoroughly during your consultation.',
    Icon: HelpCircle,
  },
  {
    id: '2',
    question: 'How many sessions of Laser Rejuvenation will I need?',
    answer: 'The number of sessions varies depending on your skin concerns and the type of laser treatment. Typically, a series of 3-5 sessions is recommended for optimal results. We will create a personalized treatment plan for you.',
    Icon: HelpCircle,
  },
  {
    id: '3',
    question: 'Are the treatments painful?',
    answer: 'We prioritize your comfort. Most treatments involve minimal discomfort. Topical numbing creams are often used for procedures like injections or some laser treatments. Our team will ensure you are as comfortable as possible.',
    Icon: HelpCircle,
  },
  {
    id: '4',
    question: 'How do I book a consultation?',
    answer: 'You can easily book a consultation online through our "Book Appointment" page or by calling our clinic directly. We look forward to meeting you!',
    Icon: MessageSquare,
  },
];

export const aiAnalysisFeatures = [
    {
      Icon: Bot,
      title: "Personalized Insights",
      description: "Receive skin type and condition analysis tailored to you."
    },
    {
      Icon: Star, // Changed from CheckCircle to Star for variety, or keep CheckCircle if preferred for consistency
      title: "Custom Recommendations",
      description: "Get product and routine suggestions based on your unique needs."
    },
    {
      Icon: Sun,
      title: "Targeted Treatments",
      description: "Discover suitable treatments for your specific skin concerns."
    }
];
