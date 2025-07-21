
import type { LucideIcon } from 'lucide-react';
import { HeartPulse, Droplets, Bot, HelpCircle, MessageSquare, Star, CheckCircle, Shield, Sparkles, Zap, Sun, Dna, Microscope, BookOpen, Layers, Info } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription?: string;
  price: string;
  Icon?: LucideIcon;
  imageSrc: string;
  imageHint: string;
  category: 'Prejuvenation' | 'Rejuvenation' | 'Body' | 'Hair' | 'Facial';
  group: 'Altruva Glow' | 'Altruva Lift' | 'Body Contouring' | 'Hair Restoration' | 'Signature Facials';
  groupDescription: string;
  subgroup: string;

  // New detailed fields
  whatIsIt?: {
    title: string;
    description: string;
  };
  mechanism?: {
    title: string;
    description: string;
  }[];
  benefits?: string[];
  indications?: string[];
  protocol?: {
    label: string;
    value: string;
  }[];
  howItDiffers?: string;
  whyLoveIt?: string[];
}

export const services: Service[] = [
  // --- Signature Facials ---
  {
    id: 'altruva-signature-facial',
    title: 'Altruva Signature Facial (Pore Clean Facial)',
    description: 'A deep cleansing facial to purify pores and refresh the skin.',
    price: 'Price on consultation',
    category: 'Facial',
    Icon: Sparkles,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'deep pore cleansing',
    group: 'Signature Facials',
    groupDescription: 'Customized facials to address your unique skin needs.',
    subgroup: 'Core Facials'
  },
  {
    id: 'altruva-hydraglow-facial',
    title: 'Altruva HydraGlow Facial',
    description: 'Intense hydration for a luminous, dewy complexion.',
    price: 'Price on consultation',
    category: 'Facial',
    Icon: Droplets,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'hydrated glowing skin',
    group: 'Signature Facials',
    groupDescription: 'Customized facials to address your unique skin needs.',
    subgroup: 'Core Facials'
  },

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
    longDescription: `Altruva DNA Repair is a specialized prejuvenation protocol utilizing Polynucleotides (PN) to proactively strengthen your skin's core structures. This treatment focuses on fortifying the skin barrier, preserving healthy collagen, and boosting resilience against the first signs of aging caused by environmental stressors. It's an investment in your skin's future, ensuring it remains vibrant, hydrated, and strong.`,
    subtitle: "Protective Polynucleotide Skin Fortification",
    price: '5,500,000 IDR',
    category: 'Prejuvenation',
    Icon: Shield,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'skin barrier protection',
    group: 'Altruva Glow',
    groupDescription: 'The best aging strategy is prevention. Altruva Glow strengthens skin resilience, hydration, and defense mechanisms against premature aging, keeping your skin radiant and future-ready.',
    subgroup: 'Skin-geneering Boosters',
    whatIsIt: {
      title: 'What is DNA Repair for Prejuvenation?',
      description: 'For prejuvenation, Polynucleotides act as a biological shield and personal trainer for your skin. These DNA-derived biostimulators coach your skin cells to function optimally, enhancing their ability to resist damage from UV rays, pollution, and stress. It is not about changing your appearance, but about fortifying your skin’s natural defenses for long-term health and a sustained glow.',
    },
    mechanism: [
      { title: 'Barrier Fortification', description: 'Strengthens the skin’s natural defense system, making it more resilient to environmental damage.' },
      { title: 'Collagen Preservation', description: 'Stimulates fibroblasts to maintain healthy collagen and elastin levels, preserving skin’s firmness and bounce.' },
      { title: 'Deep Hydration', description: 'Improves the skin’s ability to retain moisture, preventing dryness and maintaining a healthy glow.' },
      { title: 'Oxidative Stress Reduction', description: 'Helps neutralize free radicals from pollution and UV rays, preventing them from causing cellular damage.' },
    ],
    benefits: [
      'Reduces early signs of sun damage',
      'Improves skin texture and smoothness',
      'Enhances skin hydration and radiance',
      'Minimizes the appearance of large pores',
      'Reduces redness and sensitivity',
      'Strengthens the skin barrier for long-term health'
    ],
    protocol: [
      { label: 'Session Time', value: '20 minutes' },
      { label: 'Protocol', value: '2–3 sessions spaced 3 weeks apart' },
      { label: 'Maintenance', value: 'Every 6 months' },
      { label: 'Ideal For', value: 'Ages 20-40 focused on prevention' },
    ],
    howItDiffers: 'Unlike hydrating skin boosters, which primarily add moisture, DNA Repair works deeper to improve the fundamental health and resilience of your skin cells, providing benefits that are structural and long-lasting.',
    whyLoveIt: [
      'It’s the ultimate preventative step for long-term skin health.',
      'Results in a natural, "lit-from-within" glow.',
      'Minimal to no downtime.',
      'Improves overall skin resilience.',
      'A scientifically-backed approach to "future-proofing" your skin.'
    ]
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
    title: 'Altruva DNA Repair Pro',
    description: 'Reinforces skin’s cellular repair system.',
    longDescription: `Altruva DNA Repair Pro is a next-generation regenerative protocol powered by Polynucleotides (PN) — clinically purified DNA fragments that stimulate deep dermal healing, reverse cellular fatigue, and restore skin architecture from the inside out. Far beyond hydration, this treatment reactivates fibroblasts, encourages collagen remodeling, and reestablishes skin homeostasis — making it a cornerstone for age-related skin degeneration, post-acne scarring, and periocular rejuvenation.`,
    subtitle: 'Advanced Polynucleotide Skin Regeneration by dr. Aldisa',
    price: '7,500,000 IDR',
    category: 'Rejuvenation',
    Icon: Shield,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'cellular repair',
    group: 'Altruva Glow',
    groupDescription: 'Aging is a shift, not a stop. Altruva Glow revitalizes skin function, ensuring long-term firmness, resilience, and radiance.',
    subgroup: 'Skin-geneering Boosters',
    whatIsIt: {
      title: 'What Are Polynucleotides (PN)?',
      description: 'Polynucleotides are DNA-derived biopolymers extracted and purified from fish sources (with high biocompatibility). When injected into the skin, they act as powerful biomodulators, awakening fibroblasts and enhancing microcirculation — laying the foundation for true skin renewal, not just temporary glow.',
    },
    mechanism: [
      { title: 'Fibroblast Activation', description: 'Stimulates dermal fibroblasts to enhance collagen, elastin, and extracellular matrix (ECM) synthesis.' },
      { title: 'Tissue Repair & Remodeling', description: 'Reactivates damaged skin cells, restores cutaneous density, and accelerates wound healing at the cellular level.' },
      { title: 'Hydration & Barrier Support', description: 'Increases water retention and strengthens the skin’s defense mechanisms against oxidative stress and pollution.' },
      { title: 'Angiogenesis & Oxygenation', description: 'Improves microvascular perfusion, supporting brighter tone and healthier skin metabolism.' },
    ],
    benefits: [
      'Smooths fine lines and early wrinkles',
      'Improves skin laxity and firmness',
      'Brightens dull, fatigued skin',
      'Reduces acne scars and post-inflammatory pigmentation',
      'Revives under-eye hollowness and crepey texture',
      'Supports recovery post-laser or peeling',
      'Safe for sensitive, inflamed, or barrier-compromised skin'
    ],
    indications: [
      'Early to moderate signs of aging',
      'Periorbital and perioral fine lines',
      'Acne scarring and skin trauma',
      'Chronically dry or sensitive skin',
      'Preparation or recovery from energy-based treatments (laser, RF, ultrasound)',
      'Maintenance post-fillers or threads'
    ],
    protocol: [
      { label: 'Session Time', value: '20–30 minutes' },
      { label: 'Protocol', value: '3–4 sessions spaced 2–3 weeks apart' },
      { label: 'Maintenance', value: 'Every 4–6 months' },
      { label: 'Delivery', value: 'Microinjections or papule technique' },
      { label: 'Add-ons', value: 'Safe to layer with PN eye, PRF, Cellbooster, or light energy devices' },
    ],
    howItDiffers: 'Unlike hyaluronic acid fillers that volumize, Altruva DNA Repair Pro works at the cellular and structural level — healing, rebuilding, and reviving skin tissues. Think foundation first, not just finishing touch.',
    whyLoveIt: [
      'Non-volumizing, natural result',
      'Low risk of puffiness or asymmetry',
      'Scientifically backed with a long safety profile',
      'Suitable for multiple areas: face, neck, under-eyes, and décolleté',
      'Noticeably improved skin texture, bounce, and resilience within weeks'
    ]
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

  // --- Body Treatments ---
  {
    id: 'altruva-neocurve',
    title: 'Altruva NeoCurve by EmSculpt Neo',
    description: 'Advanced body contouring to build muscle and reduce fat.',
    price: 'Price on consultation',
    category: 'Body',
    Icon: Zap,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'body sculpting machine',
    group: 'Body Contouring',
    groupDescription: 'Sculpt, tone, and refine your body with our advanced treatments.',
    subgroup: 'Muscle & Fat'
  },
  {
    id: 'altruva-lipo-elixir',
    title: 'Altruva Lipo Elixir',
    description: 'Targeted fat-dissolving injections for stubborn areas.',
    price: 'Price on consultation',
    category: 'Body',
    Icon: Droplets,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'injection treatment',
    group: 'Body Contouring',
    groupDescription: 'Sculpt, tone, and refine your body with our advanced treatments.',
    subgroup: 'Fat Reduction'
  },
  {
    id: 'altruva-regenerative-rf-body',
    title: 'Altruva Regenerative RF (Body)',
    description: 'Radiofrequency for skin tightening and cellulite reduction on the body.',
    price: 'Price on consultation',
    category: 'Body',
    Icon: HeartPulse,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'rf body treatment',
    group: 'Body Contouring',
    groupDescription: 'Sculpt, tone, and refine your body with our advanced treatments.',
    subgroup: 'Skin Tightening'
  },
  {
    id: 'altruva-lipofreeze',
    title: 'Altruva LipoFreeze by CoolSculpting®',
    description: 'Freeze away unwanted fat cells permanently with cryolipolysis.',
    price: 'Price on consultation',
    category: 'Body',
    Icon: Star,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'cryolipolysis machine',
    group: 'Body Contouring',
    groupDescription: 'Sculpt, tone, and refine your body with our advanced treatments.',
    subgroup: 'Fat Reduction'
  },

  // --- Hair Treatments ---
  {
    id: 'altruva-micrograft-technology',
    title: 'Altruva Micrograft Technology',
    description: 'A revolutionary approach to hair restoration using your own tissue.',
    price: 'Price on consultation',
    category: 'Hair',
    Icon: Microscope,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'hair follicle science',
    group: 'Hair Restoration',
    groupDescription: 'Advanced solutions for hair thinning and loss.',
    subgroup: 'Advanced Restoration'
  },
  {
    id: 'altruva-hair-prf',
    title: 'Altruva Hair PRF',
    description: 'Platelet-Rich Fibrin therapy to stimulate hair follicles and promote growth.',
    price: 'Price on consultation',
    category: 'Hair',
    Icon: HeartPulse,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'hair growth therapy',
    group: 'Hair Restoration',
    groupDescription: 'Advanced solutions for hair thinning and loss.',
    subgroup: 'Growth Boosters'
  },
  {
    id: 'altruva-hair-booster',
    title: 'Altruva Hair Booster',
    description: 'A potent cocktail of nutrients and growth factors injected into the scalp.',
    price: 'Price on consultation',
    category: 'Hair',
    Icon: Droplets,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'scalp injection',
    group: 'Hair Restoration',
    groupDescription: 'Advanced solutions for hair thinning and loss.',
    subgroup: 'Growth Boosters'
  },
  {
    id: 'altruva-lift-signature',
    title: 'Altruva Lift Signature',
    description: 'A combination therapy for maximum lift and rejuvenation, tailored to you.',
    price: 'Price on consultation',
    category: 'Rejuvenation',
    Icon: Star,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'signature facelift procedure',
    group: 'Altruva Lift',
    groupDescription: 'Aging is an evolution. Let’s refine the process.',
    subgroup: 'Restoration & Lifting'
  }
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

export interface Insight {
  id: string;
  title: string;
  excerpt: string;
  imageSrc: string;
  imageHint: string;
  date: string;
  href: string;
  content?: string;
}

export const insights: Insight[] = [
  {
    id: '1',
    title: 'The Truth About Polynucleotides: Beyond the Hype',
    excerpt: 'We dive deep into the science of Polynucleotides (PN), exploring how these DNA-derived biopolymers are revolutionizing skin regeneration from a cellular level.',
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'dna helix science',
    date: 'August 5, 2024',
    href: '/insights/truth-about-polynucleotides',
    content: `
      <h2>The Science of Cellular Regeneration</h2>
      <p>Polynucleotides, often referred to as PN, are more than just a trend in aesthetic medicine; they represent a significant leap forward in how we approach skin health. Derived from purified fragments of fish DNA, these biostimulators work in harmony with our own bodies to awaken the skin's natural regenerative processes. Unlike treatments that simply add volume or mask imperfections, PN works at the cellular level to repair damage and rebuild the very foundation of healthy skin.</p>
      <h3>How Do They Work?</h3>
      <p>When introduced into the skin, Polynucleotides signal our fibroblasts—the cells responsible for producing collagen and elastin—to get back to work. This results in firmer, denser, and more resilient skin over time. They also improve microcirculation, bringing more oxygen and nutrients to the skin, which contributes to a brighter, more vibrant complexion. It's a holistic approach that fosters true, long-lasting rejuvenation from within.</p>
    `
  },
  {
    id: '2',
    title: 'Prejuvenation: The Philosophy of "Future-Proofing" Your Skin',
    excerpt: 'Discover why the best anti-aging strategy is starting early. We explain the concept of prejuvenation and how it preserves your skin\'s youthful vitality.',
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'youthful glowing skin',
    date: 'July 28, 2024',
    href: '/insights/prejuvenation-philosophy',
    content: `
      <h2>An Investment in Your Future Self</h2>
      <p>Prejuvenation is a proactive approach to skincare and aesthetics that focuses on preventing the signs of aging before they become prominent. Instead of waiting to correct wrinkles, sagging, and volume loss, prejuvenation uses targeted, minimally invasive treatments to maintain the skin's structural integrity and youthful function. This might include treatments that boost collagen production, protect against environmental damage, and optimize skin hydration. By starting early, you can significantly slow down the aging process, ensuring your skin stays healthier and more vibrant for longer.</p>
    `
  },
  {
    id: '3',
    title: 'A.R.T Lyft by Sofwave: The Future of Non-Surgical Lifting',
    excerpt: 'Learn how SUPERB™ (Synchronous Ultrasound Parallel Beam) technology is setting a new standard for non-invasive facelifts, delivering natural results without the downtime.',
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'ultrasound facial treatment',
    date: 'July 21, 2024',
    href: '/insights/art-lyft-sofwave',
    content: `
      <h2>Lifting, Redefined</h2>
      <p>For those seeking a noticeable lift without the surgery, A.R.T Lyft by Sofwave offers a groundbreaking solution. Using SUPERB™ (Synchronous Ultrasound Parallel Beam) technology, this treatment delivers controlled thermal energy to the mid-dermis, the precise depth where collagen production is most critical. This process stimulates a powerful healing response, leading to the creation of new collagen and elastin. The result is a significant reduction in fine lines and wrinkles and a visible lifting and tightening of the skin, all with minimal to no downtime.</p>
    `
  },
  {
    id: '4',
    title: 'Understanding Your Skin Type: An AI-Powered Approach',
    excerpt: 'Our AI Skin Analysis tool demystifies your unique skin needs. Find out how technology can guide you to your most effective skincare routine ever.',
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'ai skin analysis technology',
    date: 'July 14, 2024',
    href: '/insights/ai-skin-analysis',
    content: `
      <h2>Personalization Through Technology</h2>
      <p>The one-size-fits-all approach to skincare is a thing of the past. To achieve the best results, you need to understand your skin's unique characteristics and concerns. Our AI Skin Analysis tool takes the guesswork out of the equation. By analyzing a photo of your skin and your answers to a brief questionnaire, our advanced algorithm can identify your skin type, detect underlying conditions, and provide personalized recommendations for both at-home products and in-clinic treatments. It's the first step toward a truly effective, data-driven skincare journey.</p>
    `
  },
];


// Glow Quiz Data
export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    score: number;
  }[];
}

export const glowQuizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What’s your current skin/aesthetic priority?",
    options: [
      { text: "I want glowing, hydrated skin and to delay signs of aging", score: 1 },
      { text: "I want to firm up some areas and reduce pigmentation or early sagging", score: 2 },
      { text: "I want visible lift, volume restoration, and long-term rejuvenation", score: 3 },
    ],
  },
  {
    id: 2,
    question: "How often are you realistically able to visit the clinic in a year?",
    options: [
      { text: "2–3 times a year (quarterly or less)", score: 1 },
      { text: "Every 2–3 months, I can commit", score: 2 },
      { text: "Monthly visits are fine if structured", score: 3 },
    ],
  },
  {
    id: 3,
    question: "What’s your comfort level with injectable treatments (e.g., Skinboosters, Botox, Biostimulators, Fillers)?",
    options: [
      { text: "Prefer minimal or light injections", score: 1 },
      { text: "I’m open to injectables if they’re gradual", score: 2 },
      { text: "I’m comfortable with structural injections and fillers", score: 3 },
    ],
  },
  {
    id: 4,
    question: "Which outcome matters most to you?",
    options: [
      { text: "Skin quality, glow, and maintaining youthful texture", score: 1 },
      { text: "Preventing aging signs like mild laxity or pigmentation", score: 2 },
      { text: "Sculpting, restoring contour, and reversing deeper aging signs", score: 3 },
    ],
  },
  {
    id: 5,
    question: "What is your intended investment per year (approximate)?",
    options: [
      { text: "Up to IDR 25–35 million/year", score: 1 },
      { text: "IDR 50–60 million/year", score: 2 },
      { text: "IDR 70–80+ million/year", score: 3 },
    ],
  },
];

export interface QuizResult {
  tier: 'LUMI' | 'AURA' | 'ÉLEVÉ';
  icon: string;
  profile: string;
  description: string;
}

export const quizResults: Record<string, QuizResult> = {
  LUMI: {
    tier: 'LUMI',
    icon: '✨',
    profile: 'Young glow seeker, prejuvenation-focused, minimalist.',
    description: "Your focus is on prevention and maintaining that beautiful glow. The LUMI plan is designed to give your skin the foundational support it needs."
  },
  AURA: {
    tier: 'AURA',
    icon: '🌸',
    profile: 'Balanced maintenance, Botox-friendly, mid-life glow builder.',
    description: "You're looking for balance and a gentle lift. The AURA plan offers consistent support to restore harmony and keep you looking refreshed."
  },
  ELEVÉ: {
    tier: 'ÉLEVÉ',
    icon: '💎',
    profile: 'Committed sculpting, collagen investor, structure corrector.',
    description: "You are ready for a transformative journey. The ÉLEVÉ plan provides comprehensive, deep support for visible and lasting rejuvenation."
  },
};
