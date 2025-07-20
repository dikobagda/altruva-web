
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
  group: 'Altruva Glow' | 'Altruva Lift';
  groupDescription: string;
  subgroup: string;
}

export const services: Service[] = [
  // --- Prejuvenation (< 40) ---
  {
    id: 'glacier-skin',
    title: 'Glacier Skin',
    description: 'Pore refining & oil control for a smooth, matte finish.',
    price: '4,000,000 IDR',
    category: 'Prejuvenation',
    Icon: Droplets,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'refined skin texture',
    group: 'Altruva Glow',
    groupDescription: 'The best aging strategy is prevention. Altruva Glow strengthens skin resilience, hydration, and defense mechanisms against premature aging, keeping your skin radiant and future-ready.',
    subgroup: 'Skin-geneering Boosters'
  },
  {
    id: 'dna-repair',
    title: 'DNA Repair',
    description: 'Environmental damage repair & skin barrier fortification.',
    price: '5,500,000 IDR',
    category: 'Prejuvenation',
    Icon: Shield,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'skin barrier protection',
    group: 'Altruva Glow',
    groupDescription: 'The best aging strategy is prevention. Altruva Glow strengthens skin resilience, hydration, and defense mechanisms against premature aging, keeping your skin radiant and future-ready.',
    subgroup: 'Skin-geneering Boosters'
  },
  {
    id: 'purifying-booster',
    title: 'Purifying Booster',
    description: 'Therapy for anti-inflammatory and reduced acne marks.',
    price: '2,500,000 IDR',
    category: 'Prejuvenation',
    Icon: Sparkles,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'clear skin',
    group: 'Altruva Glow',
    groupDescription: 'The best aging strategy is prevention. Altruva Glow strengthens skin resilience, hydration, and defense mechanisms against premature aging, keeping your skin radiant and future-ready.',
    subgroup: 'Skin-geneering Boosters'
  },
  {
    id: 'dark-spot-booster',
    title: 'Dark Spot Booster',
    description: 'Targeted hyperpigmentation correction.',
    price: '3,500,000 IDR',
    category: 'Prejuvenation',
    Icon: Sun,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'even skin tone',
    group: 'Altruva Glow',
    groupDescription: 'The best aging strategy is prevention. Altruva Glow strengthens skin resilience, hydration, and defense mechanisms against premature aging, keeping your skin radiant and future-ready.',
    subgroup: 'Skin-geneering Boosters'
  },
  {
    id: 'bio-prf',
    title: 'Bio-PRF',
    description: 'Platelet-rich fibrin therapy for deep tissue regeneration.',
    price: '2,500,000 IDR',
    category: 'Prejuvenation',
    Icon: HeartPulse,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'regenerative therapy',
    group: 'Altruva Glow',
    groupDescription: 'The best aging strategy is prevention. Altruva Glow strengthens skin resilience, hydration, and defense mechanisms against premature aging, keeping your skin radiant and future-ready.',
    subgroup: 'Skin-geneering Boosters'
  },
  {
    id: 'clarify-peel',
    title: 'Clarify Peel',
    description: 'Breakout-prone skin detox & renewal.',
    price: '500,000 IDR',
    category: 'Prejuvenation',
    Icon: Sparkles,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'chemical peel',
    group: 'Altruva Glow',
    groupDescription: 'The best aging strategy is prevention. Altruva Glow strengthens skin resilience, hydration, and defense mechanisms against premature aging, keeping your skin radiant and future-ready.',
    subgroup: 'Signature Peels'
  },
  {
    id: 'korean-luminous-peel',
    title: 'Korean Luminous Peel',
    description: 'Smoothes & brightens for a luminous glow.',
    price: '700,000 IDR',
    category: 'Prejuvenation',
    Icon: Star,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'glowing skin',
    group: 'Altruva Glow',
    groupDescription: 'The best aging strategy is prevention. Altruva Glow strengthens skin resilience, hydration, and defense mechanisms against premature aging, keeping your skin radiant and future-ready.',
    subgroup: 'Signature Peels'
  },
  {
    id: 'exion-lumi-laser',
    title: 'Exion Lumi Laser',
    description: 'Targets light pigmentation, PIH, and mild acne marks.',
    price: 'Price on consultation',
    category: 'Prejuvenation',
    Icon: Zap,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'laser treatment',
    group: 'Altruva Glow',
    groupDescription: 'The best aging strategy is prevention. Altruva Glow strengthens skin resilience, hydration, and defense mechanisms against premature aging, keeping your skin radiant and future-ready.',
    subgroup: 'Signature Laser'
  },
  {
    id: 'exion-scar-solver',
    title: 'Exion Scar Solver',
    description: 'Smooths textural irregularities and early acne scarring.',
    price: 'Price on consultation',
    category: 'Prejuvenation',
    Icon: Zap,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'acne scar treatment',
    group: 'Altruva Glow',
    groupDescription: 'The best aging strategy is prevention. Altruva Glow strengthens skin resilience, hydration, and defense mechanisms against premature aging, keeping your skin radiant and future-ready.',
    subgroup: 'Signature Laser'
  },
  {
    id: 'art-lyft-lite',
    title: 'A.R.T Lyft Lite by Sofwave',
    description: '(up to 300 shots) Personalized SUPERB Ultrasound-powered deep tissue tightening.',
    price: '20,000,000 IDR',
    category: 'Prejuvenation',
    Icon: Zap,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'ultrasound facelift',
    group: 'Altruva Lift',
    groupDescription: 'A sculpted face begins with structural integrity.',
    subgroup: 'Tightening & Contouring'
  },
  {
    id: 'gorgeous-lyft-prejuvenation',
    title: 'Gorgeous Lyft',
    description: 'Injectable liquid type biostimulators for structural longevity.',
    price: '6,000,000 IDR',
    category: 'Prejuvenation',
    Icon: HeartPulse,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'biostimulator injection',
    group: 'Altruva Lift',
    groupDescription: 'A sculpted face begins with structural integrity.',
    subgroup: 'Tightening & Contouring'
  },
  {
    id: 'exion-lumi-rf',
    title: 'Exion Lumi-RF (RF Face)',
    description: 'Fusion of RF and Ultrasound Technology. Best for maintenance after A.R.T Lyft.',
    price: 'Price on consultation',
    category: 'Prejuvenation',
    Icon: Zap,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'rf skin tightening',
    group: 'Altruva Lift',
    groupDescription: 'A sculpted face begins with structural integrity.',
    subgroup: 'Tightening & Contouring'
  },
  {
    id: 'slim-contour-injection',
    title: 'Slim Contour Injection',
    description: 'Facial fat detox & contouring.',
    price: '2,500,000 IDR',
    category: 'Prejuvenation',
    Icon: Droplets,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'facial contouring',
    group: 'Altruva Lift',
    groupDescription: 'A sculpted face begins with structural integrity.',
    subgroup: 'Signature Contouring'
  },
  {
    id: 'face-modulator-half',
    title: 'Face Modulator Half Dose',
    description: 'Subtle wrinkle softening while preserving natural expression.',
    price: '5,000,000 IDR',
    category: 'Prejuvenation',
    Icon: Sparkles,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'wrinkle treatment',
    group: 'Altruva Lift',
    groupDescription: 'A sculpted face begins with structural integrity.',
    subgroup: 'Signature Contouring'
  },
  {
    id: 'dermal-fillers',
    title: 'Dermal Fillers',
    description: 'Minimalist volume enhancement for refined definition.',
    price: '6,000,000 IDR',
    category: 'Prejuvenation',
    Icon: Star,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'dermal filler',
    group: 'Altruva Lift',
    groupDescription: 'A sculpted face begins with structural integrity.',
    subgroup: 'Signature Contouring'
  },

  // --- Rejuvenation (> 40) ---
  {
    id: 'exoprime-pro',
    title: 'Exoprime Pro',
    description: 'Deep regenerative exosome therapy.',
    price: '4,500,000 IDR',
    category: 'Rejuvenation',
    Icon: HeartPulse,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'exosome therapy',
    group: 'Altruva Glow',
    groupDescription: 'Aging is a shift, not a stop. Altruva Glow revitalizes skin function, ensuring long-term firmness, resilience, and radiance.',
    subgroup: 'Skin-geneering Boosters'
  },
  {
    id: 'dna-repair-pro',
    title: 'DNA Repair Pro',
    description: 'Reinforces skin’s cellular repair system.',
    price: '7,500,000 IDR',
    category: 'Rejuvenation',
    Icon: Shield,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'cellular repair',
    group: 'Altruva Glow',
    groupDescription: 'Aging is a shift, not a stop. Altruva Glow revitalizes skin function, ensuring long-term firmness, resilience, and radiance.',
    subgroup: 'Skin-geneering Boosters'
  },
  {
    id: 'dna-repair-eye',
    title: 'DNA Repair Eye',
    description: 'Reinforces skin’s cellular repair system for undereye area.',
    price: '5,000,000 IDR',
    category: 'Rejuvenation',
    Icon: Shield,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'eye treatment',
    group: 'Altruva Glow',
    groupDescription: 'Aging is a shift, not a stop. Altruva Glow revitalizes skin function, ensuring long-term firmness, resilience, and radiance.',
    subgroup: 'Skin-geneering Boosters'
  },
  {
    id: 'amino-booster',
    title: 'Amino Booster',
    description: 'Dermal protein replenishment for enhanced density.',
    price: '6,000,000 IDR',
    category: 'Rejuvenation',
    Icon: Droplets,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'skin density',
    group: 'Altruva Glow',
    groupDescription: 'Aging is a shift, not a stop. Altruva Glow revitalizes skin function, ensuring long-term firmness, resilience, and radiance.',
    subgroup: 'Skin-geneering Boosters'
  },
  {
    id: 'melabooster',
    title: 'MelaBooster',
    description: 'Powerful melanin modulation.',
    price: '4,500,000 IDR',
    category: 'Rejuvenation',
    Icon: Sun,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'pigmentation treatment',
    group: 'Altruva Glow',
    groupDescription: 'Aging is a shift, not a stop. Altruva Glow revitalizes skin function, ensuring long-term firmness, resilience, and radiance.',
    subgroup: 'Skin-geneering Boosters'
  },
  {
    id: 'bio-prf-rejuvenation',
    title: 'Bio-PRF',
    description: 'Comprehensive regenerative healing.',
    price: '3,000,000 IDR',
    category: 'Rejuvenation',
    Icon: HeartPulse,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'regenerative healing',
    group: 'Altruva Glow',
    groupDescription: 'Aging is a shift, not a stop. Altruva Glow revitalizes skin function, ensuring long-term firmness, resilience, and radiance.',
    subgroup: 'Skin-geneering Boosters'
  },
  {
    id: 'altruva-youth-elixir',
    title: 'Altruva Youth Elixir',
    description: 'The highest form of regenerative complexes combining polynucleotides, exosomes, HA, amino acids, and micronutrients.',
    price: '6,000,000 IDR',
    category: 'Rejuvenation',
    Icon: Star,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'advanced anti-aging',
    group: 'Altruva Glow',
    groupDescription: 'Aging is a shift, not a stop. Altruva Glow revitalizes skin function, ensuring long-term firmness, resilience, and radiance.',
    subgroup: 'Skin-geneering Boosters'
  },
  {
    id: 'radiant-advanced-peel',
    title: 'Radiant Advanced Peel',
    description: 'Bio-stimulatory resurfacing for skin renewal.',
    price: '1,000,000 IDR',
    category: 'Rejuvenation',
    Icon: Sparkles,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'advanced chemical peel',
    group: 'Altruva Glow',
    groupDescription: 'Aging is a shift, not a stop. Altruva Glow revitalizes skin function, ensuring long-term firmness, resilience, and radiance.',
    subgroup: 'Signature Peels'
  },
  {
    id: 'exion-regen-laser',
    title: 'Exion Regen Laser',
    description: 'Lunchtime laser targeting deep pigmentation, restoring skin luminosity without downtime.',
    price: 'Price on consultation',
    category: 'Rejuvenation',
    Icon: Zap,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'no-downtime laser',
    group: 'Altruva Glow',
    groupDescription: 'Aging is a shift, not a stop. Altruva Glow revitalizes skin function, ensuring long-term firmness, resilience, and radiance.',
    subgroup: 'Signature Laser'
  },
  {
    id: 'exion-fractiopro',
    title: 'Exion FractioPro',
    description: 'Deeper fractionated resurfacing for pronounced pigment and texture correction.',
    price: 'Price on consultation',
    category: 'Rejuvenation',
    Icon: Zap,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'fractional laser',
    group: 'Altruva Glow',
    groupDescription: 'Aging is a shift, not a stop. Altruva Glow revitalizes skin function, ensuring long-term firmness, resilience, and radiance.',
    subgroup: 'Signature Laser'
  },
  {
    id: 'art-lyft',
    title: 'A.R.T Lyft by Sofwave',
    description: '(up to 500 shots) Personalized SUPERB Ultrasound for deep dermal firming.',
    price: '30,000,000 IDR',
    category: 'Rejuvenation',
    Icon: Zap,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'advanced ultrasound lift',
    group: 'Altruva Lift',
    groupDescription: 'Aging is an evolution. Let’s refine the process.',
    subgroup: 'Restoration & Lifting'
  },
  {
    id: 'gorgeous-lyft-rejuvenation',
    title: 'Gorgeous Lyft',
    description: 'Liquid type biostimulators for strong collagen restoration.',
    price: '11,000,000 IDR',
    category: 'Rejuvenation',
    Icon: HeartPulse,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'collagen biostimulator',
    group: 'Altruva Lift',
    groupDescription: 'Aging is an evolution. Let’s refine the process.',
    subgroup: 'Restoration & Lifting'
  },
  {
    id: 'radiance-lyft',
    title: 'Radiance Lyft',
    description: 'Comprehensive deep skin tightening.',
    price: '9,000,000 IDR',
    category: 'Rejuvenation',
    Icon: Star,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'deep skin tightening',
    group: 'Altruva Lift',
    groupDescription: 'Aging is an evolution. Let’s refine the process.',
    subgroup: 'Restoration & Lifting'
  },
  {
    id: 'cocktail-contouring',
    title: 'Cocktail Contouring',
    description: 'Personalized bio-stimulator & selected filler fusion.',
    price: '15,500,000 IDR',
    category: 'Rejuvenation',
    Icon: Sparkles,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'custom contouring',
    group: 'Altruva Lift',
    groupDescription: 'Aging is an evolution. Let’s refine the process.',
    subgroup: 'Signature Restoration'
  },
  {
    id: 'dermal-fillers-pro',
    title: 'Dermal Fillers Pro',
    description: 'Precision volumization for facial balance.',
    price: '6,500,000 IDR',
    category: 'Rejuvenation',
    Icon: Star,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'advanced dermal filler',
    group: 'Altruva Lift',
    groupDescription: 'Aging is an evolution. Let’s refine the process.',
    subgroup: 'Signature Restoration'
  },
  {
    id: 'face-modulator-full',
    title: 'Face Modulator Full Dose',
    description: 'Dynamic wrinkle refinement.',
    price: '9,000,000 IDR',
    category: 'Rejuvenation',
    Icon: Sparkles,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'full wrinkle treatment',
    group: 'Altruva Lift',
    groupDescription: 'Aging is an evolution. Let’s refine the process.',
    subgroup: 'Signature Restoration'
  },
  {
    id: 'sculpt-lift-plus',
    title: 'Sculpt Lift +',
    description: 'Facial contour sculpting & detoxification.',
    price: '4,000,000 IDR',
    category: 'Rejuvenation',
    Icon: Zap,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'face sculpting',
    group: 'Altruva Lift',
    groupDescription: 'Aging is an evolution. Let’s refine the process.',
    subgroup: 'Signature Restoration'
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
