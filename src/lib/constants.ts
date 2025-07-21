
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
    title: 'Altruva Clarify Peel',
    description: 'Breakout-prone skin detox & renewal.',
    price: '500,000 IDR',
    category: 'Prejuvenation',
    Icon: Sparkles,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'chemical peel',
    group: 'Altruva Glow',
    groupDescription: 'The best aging strategy is prevention. Altruva Glow strengthens skin resilience, hydration, and defense mechanisms against premature aging, keeping your skin radiant and future-ready.',
    subgroup: 'Signature Peels',
    subtitle: 'Targeted Clarity for Blemish-Prone Skin',
    longDescription: 'At Altruva, we understand that breakout-prone skin needs more than just surface-level solutions. Altruva Clarify Peel is our advanced clearing peel that works deep within the skin to calm inflammation, combat acne, and brighten post-inflammatory pigmentation—without harsh disruption to your skin barrier.<br/><br/>Powered by a professional-strength blend of Salicylic Acid, Mandelic Acid, and the innovative Terpineol-Thymol Complex, this peel is curated for patients struggling with recurring blemishes, oil imbalance, and post-acne discoloration.',
    whatIsIt: {
        title: 'How It Works',
        description: `<ul class="list-disc pl-5 mt-2 space-y-1"><li>Salicylic Acid (BHA) deeply penetrates pores to dissolve sebum, clear blockages, and prevent future breakouts.</li><li>Mandelic Acid (AHA) offers gentle exfoliation to smooth skin texture and fade dark spots without irritation.</li><li>Terpineol-Thymol Complex is a patented antimicrobial technology that reduces redness, supports skin microbiome balance, and strengthens skin’s natural defenses.</li></ul>`
    },
    benefits: [
        'Helps clear active acne and reduce future breakouts',
        'Visibly lightens post-inflammatory hyperpigmentation (PIH)',
        'Balances sebum production for oily and congested skin',
        'Calms inflammation and redness without over-drying',
        'Enhances skin clarity and smoothness after just a few sessions'
    ],
    indications: [
        'Persistent blemishes and acne-prone skin',
        'Redness and post-acne marks',
        'Oily, congested, or rough skin texture'
    ],
    whyLoveIt: [
        'Unlike traditional acne peels that may cause flaking or irritation, our protocol is designed with regenerative dermatology in mind. Paired with a personalized Altruva Glow regimen or combined with Exion Lumi Laser, it offers a gentle yet highly effective path to clear, luminous skin—no downtime, no harshness.'
    ]
  },
  {
    id: 'korean-luminous-peel',
    title: 'Altruva Korean Luminous Peel',
    description: 'Smoothes & brightens for a luminous glow.',
    price: '700,000 IDR',
    category: 'Prejuvenation',
    Icon: Star,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'glowing skin',
    group: 'Altruva Glow',
    groupDescription: 'The best aging strategy is prevention. Altruva Glow strengthens skin resilience, hydration, and defense mechanisms against premature aging, keeping your skin radiant and future-ready.',
    subgroup: 'Signature Peels',
    subtitle: 'Effortless Radiance, Minimal Downtime',
    longDescription: "Inspired by the elegance of Korean skin philosophy, the Altruva Korean Luminous Peel is a next-generation chemical resurfacing treatment powered by LHA (Lipo-Hydroxy Acid) and HP-Sol™ technology. This gentle yet intelligent exfoliation system is designed for those who seek brighter, smoother, and more refined skin—without irritation, flaking, or social downtime.<br/>Unlike traditional peels that rely on high-acid concentrations to force skin shedding, this protocol honors your skin’s biology by supporting natural turnover, collagen renewal, and barrier integrity—making it ideal for sensitive skin or first-time peel users.",
    whatIsIt: {
      title: 'How It Works',
      description: `<ul class="list-disc pl-5 mt-2 space-y-1">
        <li>LHA (Lipo-Hydroxy Acid): A lipid-soluble salicylic acid derivative that penetrates slowly, targeting clogged pores and dull skin with precision while being extremely gentle on the skin barrier.</li>
        <li>HP-Sol™ Complex: A patented alkaline complex that stimulates fibroblast activity for collagen production, balances skin pH, and supports healing—creating a glow-from-within effect.</li>
        <li>Skin-Friendly Lipids: Incorporated to hydrate, protect, and soothe, these actives ensure skin comfort during and after exfoliation.</li>
      </ul>`
    },
    benefits: [
      'Minimizes pores and clears out congestion',
      'Fades pigmentation, dullness, and uneven tone',
      'Softens rough texture and smooths fine skin irregularities',
      'Boosts collagen production for firmer, more elastic skin',
      'Calms redness and irritation, even on reactive skin types',
      'No downtime—just instantly luminous, makeup-optional skin'
    ],
    indications: [
      'Dull, tired-looking skin',
      'Enlarged pores and uneven tone',
      'Mild pigmentation and early signs of aging',
      'Patients with sensitive skin who want visible results without harshness'
    ],
    whyLoveIt: [
      "This is more than a glow-up. It’s regenerative skin science delivered gently, crafted for modern skin that juggles pollution, stress, and aging. Pair it with our Exion Lumi Laser or Glacier Skin Booster for amplified glow and pore-refining synergy."
    ]
  },
  {
    id: 'exion-lumi-laser',
    title: 'Altruva Lumi Laser',
    description: 'Targets light pigmentation, PIH, and mild acne marks.',
    price: 'Price on consultation',
    category: 'Prejuvenation',
    Icon: Zap,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'laser treatment',
    group: 'Altruva Glow',
    groupDescription: 'The best aging strategy is prevention. Altruva Glow strengthens skin resilience, hydration, and defense mechanisms against premature aging, keeping your skin radiant and future-ready.',
    subgroup: 'Signature Laser',
    subtitle: 'Radiance Redefined – Illuminated From Within',
    longDescription: 'The Altruva Lumi Laser is a non-invasive skin optimization treatment that uses next-generation radiofrequency (RF) technology to target skin clarity, pigmentation, and textural refinement—all without downtime. This advanced protocol works deeply within the dermis to stimulate collagen, brighten the complexion, and refine pores, resulting in skin that’s visibly clearer, smoother, and more radiant after each session.<br/>Crafted for those seeking visible results with minimal interruption to daily life, Lumi Laser is a cornerstone treatment in Altruva’s Prejuvenation and Glow Optimization programs.',
    whatIsIt: {
        title: 'Technology in Action',
        description: `<ul class="list-disc pl-5 mt-2 space-y-1"><li><strong>Smart RF Energy Delivery:</strong> Gently penetrates the skin to awaken fibroblasts and trigger natural regeneration, without damaging the surface layer.</li><li><strong>Collagen & Elastin Biostimulation:</strong> Encourages dermal renewal and boosts elasticity for skin that’s visibly firmer and youthfully plump.</li><li><strong>Melanin Modulation:</strong> Reduces the appearance of age spots, sun damage, and uneven pigmentation, restoring a more even and luminous tone.</li><li><strong>Texture Refinement:</strong> Smoothes skin surface, minimizes pores, and restores a polished skin finish.</li></ul>`
    },
    benefits: [
        'Brightens dull, uneven skin tone',
        'Fades age spots, pigmentation, and redness',
        'Improves skin texture and clarity',
        'Tightens pores and supports long-term skin health',
        'Zero downtime, perfect for lunch break treatments',
        'Safe for all skin types'
    ],
    indications: [
        'Dull or uneven skin',
        'Hyperpigmentation or early sun damage',
        'Enlarged pores and textural roughness',
        'Early signs of aging',
        'Those who want non-invasive, no-downtime rejuvenation'
    ],
    whyLoveIt: [
        "Because clear skin is more than just cosmetic—it's a sign of internal skin vitality. Lumi Laser is tailored to your skin condition, often used as a foundation before bio-stimulator treatments like Gouri or Glacier Skin. It’s clarity, engineered."
    ]
  },
  {
    id: 'exion-scar-solver',
    title: 'Altruva Scar Solver',
    description: 'Smooths textural irregularities and early acne scarring.',
    price: 'Price on consultation',
    category: 'Prejuvenation',
    Icon: Zap,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'acne scar treatment',
    group: 'Altruva Glow',
    groupDescription: 'The best aging strategy is prevention. Altruva Glow strengthens skin resilience, hydration, and defense mechanisms against premature aging, keeping your skin radiant and future-ready.',
    subgroup: 'Signature Laser',
    subtitle: 'Deep Resurfacing. Precision Refinement. Regenerative Healing.',
    longDescription: "Altruva Scar Solver is our signature skin-texture treatment powered by Exion Fractional RF, an advanced microneedling radiofrequency platform enhanced by AI-optimized precision. Specially curated for those with acne scarring, enlarged pores, stretch marks, and post-inflammatory irregularities, this treatment delivers focused energy into the skin’s deeper layers—stimulating collagen, elastin, and hyaluronic acid regeneration.<br/>By bridging the benefits of controlled dermal injury and intelligent energy delivery, Scar Solver achieves smoother, firmer, and more even-toned skin—naturally, progressively, and with minimal downtime.",
    whatIsIt: {
      title: 'How It Works',
      description: `<ul class="list-disc pl-5 mt-2 space-y-2"><li><strong>Microneedling + RF Synergy:</strong> Ultrathin microneedles penetrate the skin to create micro-channels, triggering the skin’s natural wound-healing response. Simultaneously, radiofrequency energy is delivered into the dermis to heat and remodel tissue, supercharging collagen synthesis.</li><li><strong>AI Energy Delivery:</strong> The device’s smart algorithm tailors RF delivery in real-time based on skin feedback, ensuring maximum results with minimized discomfort or thermal injury.</li><li><strong>8mm Penetration Depth Without Full Needle Insertion:</strong> Unlike traditional RF microneedling, Altruva Scar Solver allows deep dermal targeting without the trauma of full-depth needle insertion—making it highly effective for textural scars and skin laxity, even in delicate zones.</li></ul>`
    },
    benefits: [
      'Softens and smoothens acne scars and textural irregularities',
      'Minimizes enlarged pores',
      'Refines rough or uneven skin texture',
      'Reduces fine lines and wrinkles in targeted zones',
      'Stimulates natural hyaluronic acid production',
      'Improves skin firmness and elasticity',
      'Suitable for all skin types, including darker tones'
    ],
    indications: [
      'Atrophic acne scars (icepick, boxcar, rolling)',
      'Post-acne pigmentation and roughness',
      'Enlarged pores on cheeks and nose',
      'Fine lines with reduced skin elasticity',
      'Stretch marks and dermal texture correction',
      'Patients not ready for ablative lasers or surgery'
    ],
    protocol: [
      { label: 'Recommended', value: '3–4 sessions, spaced 4–6 weeks apart' },
      { label: 'Maintenance', value: '1–2 sessions annually for long-term dermal integrity' },
      { label: 'Downtime', value: 'Mild redness or sensitivity for 1–3 days' },
      { label: 'Pre/Post-Care', value: 'Avoid sun, retinoids pre-treatment; moisturize and apply SPF diligently post-care' },
    ],
    whyLoveIt: ["Because true skin healing starts from within. Our regenerative contouring philosophy ensures that every textural correction is achieved not by force—but by guiding the skin’s own intelligence to remodel, rebuild, and reveal your most refined texture."]
  },
  {
    id: 'art-lyft-lite',
    title: 'Altruva A.R.T Lift (Lite) by dr. Aldisa',
    description: '(up to 300 shots) Personalized SUPERB Ultrasound-powered deep tissue tightening.',
    longDescription: `Anatomic Regenerative Targeting with Precision Sofwave Ultrasound. For those under 40, the best anti-aging strategy isn't reversal—it's prevention. A.R.T Lift Lite is Altruva’s signature collagen banking protocol, designed by dr. Olivia Aldisa, Sofwave Key Opinion Leader in Asia. This treatment uses SUPERB™ ultrasound technology to target areas of early collagen loss and prevent sagging before it starts. A.R.T (Anatomic Regenerative Targeting) Lift Lite is not just a facial—it’s a strategic investment in your skin’s future. <br/><br/><i>“At Altruva, we don’t chase aging—we engineer prevention. A.R.T Lift Lite is how we build long-term beauty without filler or surgery.” — dr. Olivia Aldisa</i>`,
    subtitle: "Signature Prejuvenation for Collagen Banking (<40 years old)",
    price: '20,000,000 IDR',
    category: 'Prejuvenation',
    Icon: Zap,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'ultrasound facelift',
    group: 'Altruva Lift',
    groupDescription: 'A sculpted face begins with structural integrity.',
    subgroup: 'Tightening &amp; Contouring',
    whatIsIt: {
      title: 'How It Works',
      description: `<p>A.R.T. Lift Lite uses precision ultrasound energy (Sofwave) to activate your skin's natural regenerative power. Focused beams of ultrasound energy reach the mid-dermis, heating tissue at just the right depth to stimulate fibroblasts—without damaging the skin surface. The gentle heat activates neocollagenesis, the body’s natural process of forming fresh collagen and elastin. With regenerative mapping by dr. Aldisa, each shot is planned to follow your unique fat pads, ligament structures, and collagen-rich zones to optimize long-term firming while preserving natural beauty.</p>`
    },
    howItDiffers: 'Designed by a Global Sofwave Expert, the A.R.T Lift Lite protocol is based on clinical knowledge and field data from dr. Aldisa’s work with thousands of Sofwave pulses. It targets collagen banking to prevent premature sagging and is a strategic prejuvenation for Millennials & Gen Z. It is non-invasive with zero downtime.',
    whyLoveIt: [
      'Targeted Collagen Banking: Prevents premature sagging in midface, jawline, and brow.',
      'Non-invasive with Zero Downtime: A lunchtime protocol with no redness, peeling, or bruising.',
      'Ideal for patients in their late 20s to mid-30s looking to future-proof their facial architecture.',
    ],
    indications: [
      'Early signs of facial laxity',
      'Flat mid-cheeks or soft jawline definition',
      '“Pre-jowl” or under-chin laxity',
      'Maintenance after filler or threads',
      'Skin prep before life events (weddings, media, international travel)',
    ],
    protocol: [
      { label: 'Duration', value: '35–45 minutes' },
      { label: 'Protocol', value: '200–300 pulses, focused on collagen reservoirs' },
      { label: 'Pain level', value: 'Mild warmth; cooling system ensures comfort' },
      { label: 'Downtime', value: 'None' },
      { label: 'Visible results', value: '3–4 weeks post-treatment, progressive improvement up to 12 weeks' },
      { label: 'Suggested frequency', value: 'Once annually for maintenance; twice yearly for visible lift' }
    ],
  },
  {
    id: 'gorgeous-lyft-prejuvenation',
    title: 'Altruva Gorgeous Lyft by dr. Aldisa',
    description: 'Injectable liquid type biostimulators for structural longevity.',
    price: '6,000,000 IDR',
    category: 'Prejuvenation',
    Icon: HeartPulse,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'biostimulator injection',
    group: 'Altruva Lift',
    groupDescription: 'A sculpted face begins with structural integrity.',
    subgroup: 'Tightening &amp; Contouring',
    subtitle: "The Signature Liquid Collagen Bioactivator Experience",
    longDescription: `Precision by Gouri International KOL. Gorgeous Lyft is the ultimate expression of regenerative luxury, exclusively available at Altruva Aesthetic Clinic and masterfully performed by dr. Olivia Aldisa, one of the world’s leading KOLs for Gouri.<br/><br/>This next-generation procedure harnesses the power of liquid Polycaprolactone (PCL) — a fully solubilized collagen biostimulator — to awaken your skin’s innate capacity to rebuild, rejuvenate, and restore youthful architecture. No volumization. No puffiness. Just glow-from-within firmness that whispers elegance.<br/><br/><i>“Collagen is your skin’s inheritance. Gorgeous Lyft helps you protect and grow it—elegantly, safely, and globally.”<br/>— dr. Olivia Aldisa, International KOL for Gouri</i>`,
    whatIsIt: {
      title: 'What is Gorgeous Lyft?',
      description: `Gorgeous Lyft is Altruva’s signature bio-collagen activation protocol using Gouri, the world’s first and only 100% liquid PCL injectable.
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li><strong>Liquid PCL:</strong> Unlike microparticle biostimulators, Gouri flows seamlessly across the dermis.</li>
        <li><strong>Multi-Zone Collagenesis:</strong> A few targeted injections can reach broad facial areas.</li>
        <li><strong>Gradual Lifting, Brightening &amp; Tightening:</strong> As fibroblasts activate, skin begins a months-long journey of self-renewal.</li>
        <li><strong>Doctor-Led Mapping:</strong> Injection patterns are personalized by dr. Aldisa to restore harmony across different facial zones — temples, nasojugal groove, marionette, cheeks, and preauricular area.</li>
      </ul>`
    },
    mechanism: [
      { title: 'Strategic Infiltration', description: "Minimal points are needed to activate widespread collagen induction. For enhanced safety and efficacy, dr. Aldisa always pre-infiltrates with lidocaine to create safe distribution channels." },
      { title: 'Controlled Dispersion', description: "Using the exclusive Gouri Dispersion Method (GDM) and post-injection 1-minute point compression, bruising is minimized and PCL diffusion is optimized." },
      { title: 'Bioregenerative Remodeling', description: "Over the next 3–12 weeks, your skin begins producing Type I and III collagen, resulting in firmer texture, lifted contours, and improved glow." }
    ],
    benefits: [
      "Stimulates natural collagen without adding artificial volume",
      "Improves laxity, skin tone, and texture",
      "Reduces wrinkles, tear trough, and marionette shadows",
      "Minimal downtime, low risk of lumps or overfilling",
      "Results that build over time and last up to 9–12 months"
    ],
    indications: [
        "Patients 30–55 seeking refinement rather than reshaping",
        "Individuals with early signs of sagging, dullness, or mild volume depletion",
        "Clients wanting a filler-free profile",
        "Postpartum mothers, perimenopausal women, and aesthetic minimalists"
    ],
    protocol: [
      { label: 'Duration', value: '~30 minutes' },
      { label: 'Technique', value: '5–7 injection points using micro-needle or cannula' },
      { label: 'Aftercare', value: 'Avoid excessive facial movement or massage for 24–48 hours' },
      { label: 'Redness/Swelling', value: 'Typically subsides within 1–3 days' }
    ]
  },
  {
    id: 'exion-lumi-rf',
    title: 'Altruva Lumi RF',
    description: 'Fusion of RF and Ultrasound Technology. Best for maintenance after A.R.T Lyft.',
    price: 'Price on consultation',
    category: 'Prejuvenation',
    Icon: Zap,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'rf skin tightening',
    group: 'Altruva Lift',
    groupDescription: 'A sculpted face begins with structural integrity.',
    subgroup: 'Tightening &amp; Contouring',
    subtitle: 'Next-Generation Needle-Free Skin Tightening & Radiance Activation',
    longDescription: `Altruva Lumi RF is a non-invasive, regenerative radiofrequency treatment uniquely engineered to awaken your skin’s collagen and elastin without needles, pain, or downtime. Powered by advanced Exion™ technology, Lumi RF delivers intelligent energy deep into the dermis to refine skin texture, tighten sagging areas, and amplify natural hyaluronic acid production—resulting in firmer, smoother, more radiant skin.<br/><br/>This is the future of RF-powered lifting—effortless, elegant, and effective.<br/><br/><i>“We believe skin should glow from its own wisdom. Lumi RF helps your face remember how.” — dr. Olivia Aldisa, Medical Director of Altruva Aesthetic Clinic</i>`,
    whatIsIt: {
        title: 'How Lumi RF Works',
        description: `<ul class="list-disc pl-5 mt-2 space-y-2"><li><strong>Smart Radiofrequency (RF) Energy:</strong> Exion-powered RF heats the deeper dermal layers in a controlled, uniform way—stimulating fibroblasts to regenerate collagen and elastin without damaging the surface. Expect visibly firmer contours and smoother skin over time.</li><li><strong>Targeted Ultrasound Boost:</strong> By combining targeted ultrasound, Lumi RF supercharges the regenerative process—enhancing collagen crosslinking and optimizing skin density in areas prone to laxity, like under the eyes or jawline.</li><li><strong>Needle-Free, AI-Guided Delivery:</strong> Unlike traditional microneedling RF, Lumi RF is completely needle-free and uses AI-driven thermal mapping to ensure safe, consistent energy delivery. The result? A comfortable experience with measurable results.</li></ul>`
    },
    whyLoveIt: [
      'Tightens Sagging Skin Naturally: Gently lifts and tones with no injectables and no downtime—ideal for cheeks, jawline, under-eye, and neck.',
      'Improves Hydration from Within: Promotes endogenous hyaluronic acid synthesis—a hallmark of youthful, “bouncy” skin.',
      'Reduces Fine Lines & Refines Texture: Smooths rough patches, shrinks pores, and restores skin clarity without harsh resurfacing.',
      'AI-Guided Precision: Smart feedback adjusts temperature and energy in real-time for safer, more predictable outcomes.',
      'Minimal Downtime, Maximal Glow: With no needles, bruising, or peeling, you can return to your routine immediately post-treatment—glowing and lifted.',
    ],
    indications: [
      'Women and men 25+ experiencing early signs of laxity or dullness',
      'Patients looking for needle-free facial rejuvenation',
      'Those prepping for important events without the risk of downtime',
      'Individuals with sensitive or thin skin not suited to aggressive procedures'
    ],
    protocol: [
      { label: 'Duration', value: '30–45 minutes per session' },
      { label: 'Sensation', value: 'Gentle warmth; no pain or numbing required' },
      { label: 'Downtime', value: 'Zero to minimal (mild redness may last 1–2 hours)' },
      { label: 'Frequency', value: '3–5 sessions spaced 2–4 weeks apart for optimal results' },
    ]
  },
  {
    id: 'slim-contour-injection',
    title: 'Altruva Slim Contour Injection',
    description: 'Facial fat detox &amp; contouring.',
    price: '2,500,000 IDR',
    category: 'Prejuvenation',
    Icon: Droplets,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'facial contouring',
    group: 'Altruva Lift',
    groupDescription: 'A sculpted face begins with structural integrity.',
    subgroup: 'Signature Contouring',
    subtitle: 'Sculpt Smart. Contour Clean. For a Lighter, Sharper You.',
    longDescription: `Altruva Slim Contour Injection is a targeted fat-dissolving injectable designed for individuals under 40 who struggle with stubborn facial fat in key areas like the lower cheeks, jawline, and submental (double chin) region. Whether due to genetics or lifestyle, facial heaviness can obscure natural bone structure—even in those with a healthy BMI.<br/><br/>This treatment provides a non-surgical solution to refine contours, improve definition, and reshape the face for a leaner, more V-shaped profile—without downtime.<br/><br/><i>“It’s not about changing your face. It’s about unlocking its best version—cleaner lines, lifted confidence, no unnecessary volume.”<br/>— dr. Olivia Aldisa, Facial Contouring Specialist & Altruva Founder</i>`,
    whatIsIt: {
        title: 'How It Works',
        description: `<ul class="list-disc pl-5 mt-2 space-y-2">
            <li><strong>Advanced Lipolytic Complex:</strong> Our formula is powered by clinically proven lipolytic compounds that selectively break down localized fat deposits while preserving skin integrity and surrounding tissues.</li>
            <li><strong>Microinjection Delivery:</strong> Administered via precise microinjections, the solution acts in the subcutaneous fat layer to liquefy fat cells, which are then naturally eliminated through the body’s lymphatic system.</li>
            <li><strong>Targeted Contouring:</strong> By reducing excess volume in specific areas, the treatment restores facial harmony and sharpens structural definition—especially in the jawline, jowl zone, and lower face.</li>
        </ul>`
    },
    benefits: [
        'Contours without surgery',
        'Improves facial proportions',
        'Boosts skin tone and elasticity',
        'Gentle and well-tolerated',
        'Clinically backed innovation'
    ],
    indications: [
        'Men and women under 40 with excess facial fat despite normal weight',
        'Individuals looking to define the V-line, reduce chipmunk cheeks, or lighten lower face heaviness',
        'Those hesitant about surgical buccal fat removal or invasive procedures',
        'Patients who want refined facial proportions without adding volume'
    ],
    protocol: [
      { label: 'Session Time', value: '30–45 minutes' },
      { label: 'Frequency', value: '2–4 sessions spaced 2–3 weeks apart' },
      { label: 'Recovery', value: 'Mild tenderness or swelling for 1–3 days' },
      { label: 'Maintenance', value: 'As needed based on lifestyle & metabolism' }
    ]
  },
  {
    id: 'face-modulator-half',
    title: 'Altruva Face Modulator (Half Dose)',
    description: 'Subtle wrinkle softening while preserving natural expression.',
    price: '5,000,000 IDR',
    category: 'Prejuvenation',
    Icon: Sparkles,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'wrinkle treatment',
    group: 'Altruva Lift',
    groupDescription: 'A sculpted face begins with structural integrity.',
    subgroup: 'Signature Contouring',
    subtitle: "Precision Redefined. Subtle Contour, Maximum Harmony — by dr. Aldisa.",
    longDescription: `In a world where subtlety matters, Altruva Face Modulator (Half Dose) offers a refined approach to facial sculpting using microdosed botulinum toxin. Curated for those under 40, this treatment focuses on preventative contour modulation, delivering natural, soft corrections — not frozen expressions.<br/><br/>Whether it’s jawline slimming, temple lifting, or refining the upper face, this procedure enhances your features without overt volume loss or exaggerated stiffness. It’s about precision, personalization, and respecting your facial identity.<br/><br/>Every Altruva Face Modulator treatment is custom-designed by dr. Olivia Aldisa, integrating anatomical mapping and muscle balance principles to ensure precision, proportion, and preservation of your identity.`,
    whatIsIt: {
        title: 'How It Works',
        description: `Botulinum toxin, in a calibrated half dose, is administered strategically to modulate overactive muscles that contribute to undesirable bulk, heaviness, or downward pull:<br/><ul class="list-disc pl-5 mt-2 space-y-1"><li><strong>Jawline:</strong> Slims bulky masseter muscles to enhance V-shape contours and reduce facial width.</li><li><strong>Upper Face:</strong> Softens glabella tension, subtly lifts brows, and prevents early wrinkle formation — all without freezing natural movement.</li></ul>`
    },
    howItDiffers: 'For those under 40, smaller doses are ideal to prevent dynamic lines and slow early sagging — while preserving natural expression. Rather than full paralysis, the focus is modulation: dialing down overactivity to reshape, contour, and harmonize facial dynamics. Lower doses mean less risk of asymmetry, frozen looks, or unwanted diffusion. This is bespoke aesthetic medicine — not one-size-fits-all.',
    benefits: [
      'Refines jawline and lower face bulkiness without surgery',
      'Gently lifts the brows and eyes for a more rested expression',
      'Softens frown lines and early crow’s feet',
      'Prevents premature skin laxity and facial aging',
      'Allows natural facial movement — no overdone look',
      'Minimal downtime with visible changes in 5–10 days',
    ],
    protocol: [
      { label: 'Duration', value: '15–20 minutes' },
      { label: 'Downtime', value: 'Minimal to none' },
      { label: 'Longevity', value: '3–4 months (may vary)' },
      { label: 'Ideal for', value: '▸ Jawline softening (masseter reduction)\n▸ Temple lift or brow support\n▸ Early wrinkle prevention in glabella, forehead, or crow’s feet\n▸ First-time users or toxin-sensitive skin' },
    ],
    indications: [
      'Jawline softening (masseter reduction)',
      'Temple lift or brow support',
      'Early wrinkle prevention in glabella, forehead, or crow’s feet',
      'First-time users or toxin-sensitive skin',
    ]
  },
  {
    id: 'dermal-fillers',
    title: 'Altruva Dermal Fillers',
    description: 'Minimalist volume enhancement for refined definition.',
    price: '6,000,000 IDR',
    category: 'Prejuvenation',
    Icon: Star,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'dermal filler',
    group: 'Altruva Lift',
    groupDescription: 'A sculpted face begins with structural integrity.',
    subgroup: 'Signature Contouring',
    subtitle: 'Refined. Personalized. Anatomically Precise — by dr. Aldisa. Signature Beautification for Under 40s',
    longDescription: `Altruva Dermal Fillers are not about chasing trends — they are about strategic enhancement. This protocol is built on the principle of harmonizing features using subtle, anatomically guided injections to enhance your natural bone structure, soften imbalances, and delay facial aging — before it ever becomes visible.<br/><br/>Led by dr. Olivia Aldisa, a trusted name in anatomical regenerative aesthetics, this treatment is fully personalized and intended for discerning patients under 40 who want refinement, not reinvention.<br/><br/><i>“The most beautiful result is one no one can point out — but everyone notices. That’s the art of natural beautification.” — dr. Olivia Aldisa, Facial Architect & Regenerative Strategist</i>`,
    whatIsIt: {
        title: 'The Philosophy: Face Optimization Before Correction',
        description: `Instead of reversing aging, Altruva Dermal Fillers focus on:<br/>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Enhancing natural beauty through proportional feature balancing</li>
        <li>Strengthening the facial foundation to delay sagging and volume loss</li>
        <li>Modulating fat compartments to optimize contour and symmetry</li>
        <li>Supporting prejuvenation with regenerative injection techniques</li>
      </ul>
      <h4 class="font-semibold text-primary mt-4">Treatment Areas May Include:</h4>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li><strong>Chin:</strong> Subtle projection to define your profile</li>
        <li><strong>Jawline:</strong> Soft contouring for a refined lower face</li>
        <li><strong>Cheeks:</strong> Gentle enhancement for structure and midface lift</li>
        <li><strong>Temples:</strong> Filling deflation for smoother transitions</li>
        <li><strong>Tear Troughs:</strong> Brighten tired-looking eyes (when indicated)</li>
        <li><strong>Lips:</strong> Optional volume or structure without distortion</li>
      </ul>`,
    },
    howItDiffers: 'Profile Balancing Approach: Each injection supports aesthetic harmony — not isolated features. Minimalism with Intent: We believe in doing less but doing it precisely. Product Synergy: HA fillers are selected based on elasticity, cohesivity, and area-specific need. Microcannula Precision: Safer and less traumatic delivery for most areas. Regenerative Add-ons: Optionally layered with PRF, PN, or skin boosters for longer-term support.',
    whyLoveIt: [
      "Why Start Fillers Under 40?",
      "Early Intervention = Preventative Aging",
      "Less Product Needed Over Time",
      "More Natural-Looking Results",
      "Supports Tissue Integrity Before Breakdown Begins"
    ],
    benefits: [
      'Defines and refines features without exaggeration',
      'Enhances facial symmetry and proportions',
      'Delays signs of structural aging',
      'Elevates appearance while preserving authenticity',
      'Boosts confidence through soft, visible enhancement',
    ],
    protocol: [
      { label: 'Duration', value: '30–60 minutes' },
      { label: 'Downtime', value: 'Minimal – may include temporary swelling or bruising' },
      { label: 'Results', value: 'Immediate structural enhancement; softens within 1–2 weeks' },
      { label: 'Longevity', value: '9 to 18 months, depending on product and area' },
      { label: 'Technique', value: 'Microcannula and needle, based on area and goals' },
      { label: 'Customization', value: 'Fully tailored, with comprehensive facial analysis' },
    ]
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
      { title: 'Tissue Repair &amp; Remodeling', description: 'Reactivates damaged skin cells, restores cutaneous density, and accelerates wound healing at the cellular level.' },
      { title: 'Hydration &amp; Barrier Support', description: 'Increases water retention and strengthens the skin’s defense mechanisms against oxidative stress and pollution.' },
      { title: 'Angiogenesis &amp; Oxygenation', description: 'Improves microvascular perfusion, supporting brighter tone and healthier skin metabolism.' },
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
    title: 'Altruva DNA Repair Eye',
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
    title: 'Altruva Amino Booster',
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
    title: 'Altruva Mela-Boosters',
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
    title: 'Altruva Bio-PRF',
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
    title: 'Altruva Radiant Advanced Peel',
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
    title: 'Altruva Regenerative Laser',
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
    title: 'Altruva FractioPro',
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
    title: 'Altruva A.R.T Lift PRO by dr. Aldisa',
    description: '(up to 500 shots) Personalized SUPERB Ultrasound for deep dermal firming.',
    price: '30,000,000 IDR',
    category: 'Rejuvenation',
    Icon: Zap,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'advanced ultrasound lift',
    group: 'Altruva Lift',
    groupDescription: 'Aging is an evolution. Let’s refine the process.',
    subgroup: 'Restoration &amp; Lifting',
    subtitle: 'Anatomic Regenerative Targeting for Restorative Contour, Lift & Radiance. The Signature Over-40 Protocol | Powered by Sofwave',
    longDescription: `For patients entering their 40s and beyond, skin aging isn’t just about fine lines — it's about structural shifts: collagen depletion, ligament laxity, and contour loss. Altruva A.R.T (Anatomic Regenerative Targeting) Lift PRO is a regenerative ultrasound-based protocol designed by dr. Olivia Aldisa, Asia’s Sofwave KOL, to address these challenges with unmatched anatomical precision.<br/><br/>Whether you're looking to reclaim lost volume, achieve superior lifting, or illuminate your complexion, A.R.T Lift PRO provides a data-driven, doctor-performed approach to regenerate your facial framework — without injectables or surgery.<br/><br/><i>“Over 40 is when regenerative planning matters most. A.R.T Lift PRO doesn't chase youth—it rebuilds the architecture of it.” — dr. Olivia Aldisa, Altruva Founder & Global Sofwave KOL</i>`,
    whatIsIt: {
      title: 'What Sets It Apart',
      description: `<ul class="list-disc pl-5 mt-2 space-y-2">
        <li><strong>Sofwave Technology + Anatomical Mapping:</strong> Utilizing SUPERB™ ultrasound energy, the treatment delivers targeted heating to collagen-rich zones, following dr. Aldisa’s anatomical blueprint of facial ligaments, fat compartments, and dermal layers.</li>
        <li><strong>Doctor-Driven Precision:</strong> Every pulse is guided by years of facial regenerative practice, ensuring customized treatment density whether your priority is volume restoration, tightening, or brightening.</li>
        <li><strong>Multifaceted Outcome:</strong> Beyond skin tightening, A.R.T Lift PRO can visibly improve malar descent, jawline sagging, under-eye hollowness, and even skin tone dullness — an all-in-one anti-aging investment.</li>
      </ul>`
    },
    mechanism: [
      { title: 'Ultrasound-Driven Collagen Induction', description: 'Sofwave’s 1.5mm depth penetration delivers energy directly to the mid-dermis, bypassing the epidermis — ideal for collagenesis without thermal damage.' },
      { title: 'Anatomic Regenerative Targeting', description: 'A proprietary mapping technique by dr. Aldisa that considers individual facial topography, addressing where fat loss or descent starts, rather than where it shows.' },
      { title: 'High-Energy Multi-Zonal Delivery', description: 'Up to 500 pulses, placed strategically across ligament anchor points, mid-cheek lift zones, submental tightening, and peri-orbital glow boost areas.' }
    ],
    benefits: [
      'Re-lifted midface contour',
      'Smoother jawline, reduced jowls',
      'Tighter neck profile',
      'Improved skin luminosity (from improved dermal oxygenation and perfusion)',
      'Gradual but long-lasting structural renewal'
    ],
    indications: [
      'Midface flattening',
      'Jowl formation and loss of mandibular definition',
      'Nasolabial and marionette depth',
      'General skin dullness and laxity',
      'Post-weight loss sagging',
      'Volume loss due to aging or overfilled correction',
      'Collagen collapse from chronic sun damage'
    ],
    protocol: [
      { label: 'Duration', value: '45–60 minutes' },
      { label: 'Sessions', value: 'One treatment per year is recommended; twice annually for advanced aging' },
      { label: 'Downtime', value: 'Minimal — some mild redness or swelling resolves in hours' },
      { label: 'Peak Results', value: '6–12 weeks post-treatment, with ongoing improvement for 3–6 months' }
    ]
  },
  {
    id: 'gorgeous-lyft-rejuvenation',
    title: 'Altruva Gorgeous Lyft by dr. Aldisa',
    description: 'Liquid type biostimulators for strong collagen restoration.',
    price: '11,000,000 IDR',
    category: 'Rejuvenation',
    Icon: HeartPulse,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'collagen biostimulator',
    group: 'Altruva Lift',
    groupDescription: 'Aging is an evolution. Let’s refine the process.',
    subgroup: 'Restoration &amp; Lifting',
    subtitle: "The Signature Liquid Collagen Bioactivator Experience",
    longDescription: `Precision by Gouri International KOL. Gorgeous Lyft is the ultimate expression of regenerative luxury, exclusively available at Altruva Aesthetic Clinic and masterfully performed by dr. Olivia Aldisa, one of the world’s leading KOLs for Gouri.<br/><br/>This next-generation procedure harnesses the power of liquid Polycaprolactone (PCL) — a fully solubilized collagen biostimulator — to awaken your skin’s innate capacity to rebuild, rejuvenate, and restore youthful architecture. No volumization. No puffiness. Just glow-from-within firmness that whispers elegance.<br/><br/><i>“Collagen is your skin’s inheritance. Gorgeous Lyft helps you protect and grow it—elegantly, safely, and globally.”<br/>— dr. Olivia Aldisa, International KOL for Gouri</i>`,
    whatIsIt: {
      title: 'What is Gorgeous Lyft?',
      description: `Gorgeous Lyft is Altruva’s signature bio-collagen activation protocol using Gouri, the world’s first and only 100% liquid PCL injectable.
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li><strong>Liquid PCL:</strong> Unlike microparticle biostimulators, Gouri flows seamlessly across the dermis.</li>
        <li><strong>Multi-Zone Collagenesis:</strong> A few targeted injections can reach broad facial areas.</li>
        <li><strong>Gradual Lifting, Brightening & Tightening:</strong> As fibroblasts activate, skin begins a months-long journey of self-renewal.</li>
        <li><strong>Doctor-Led Mapping:</strong> Injection patterns are personalized by dr. Aldisa to restore harmony across different facial zones — temples, nasojugal groove, marionette, cheeks, and preauricular area.</li>
      </ul>`
    },
    mechanism: [
      { title: 'Strategic Infiltration', description: "Minimal points are needed to activate widespread collagen induction. For enhanced safety and efficacy, dr. Aldisa always pre-infiltrates with lidocaine to create safe distribution channels." },
      { title: 'Controlled Dispersion', description: "Using the exclusive Gouri Dispersion Method (GDM) and post-injection 1-minute point compression, bruising is minimized and PCL diffusion is optimized." },
      { title: 'Bioregenerative Remodeling', description: "Over the next 3–12 weeks, your skin begins producing Type I and III collagen, resulting in firmer texture, lifted contours, and improved glow." }
    ],
    benefits: [
      "Stimulates natural collagen without adding artificial volume",
      "Improves laxity, skin tone, and texture",
      "Reduces wrinkles, tear trough, and marionette shadows",
      "Minimal downtime, low risk of lumps or overfilling",
      "Results that build over time and last up to 9–12 months"
    ],
    indications: [
        "Patients 30–55 seeking refinement rather than reshaping",
        "Individuals with early signs of sagging, dullness, or mild volume depletion",
        "Clients wanting a filler-free profile",
        "Postpartum mothers, perimenopausal women, and aesthetic minimalists"
    ],
    protocol: [
      { label: 'Duration', value: '~30 minutes' },
      { label: 'Technique', value: '5–7 injection points using micro-needle or cannula' },
      { label: 'Aftercare', value: 'Avoid excessive facial movement or massage for 24–48 hours' },
      { label: 'Redness/Swelling', value: 'Typically subsides within 1–3 days' }
    ]
  },
  {
    id: 'radiance-lyft',
    title: 'Altruva Regenerative RF',
    description: 'Comprehensive deep skin tightening.',
    price: '9,000,000 IDR',
    category: 'Rejuvenation',
    Icon: Star,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'deep skin tightening',
    group: 'Altruva Lift',
    groupDescription: 'Aging is an evolution. Let’s refine the process.',
    subgroup: 'Restoration &amp; Lifting',
    subtitle: 'The Intelligent RF Lift for Skin Over 40',
    longDescription: "Altruva Regenerative RF is a needle-free, non-invasive RF-based skin rejuvenation treatment designed specifically for individuals over 40 who are experiencing visible signs of aging—such as sagging skin, fine lines, enlarged pores, and texture loss. Utilizing Exion™ Radiofrequency + Targeted Ultrasound technology, this treatment works deep within the dermis to stimulate collagen, elastin, and hyaluronic acid synthesis, restoring youthful density and definition to mature skin.<br/><br/>This is regenerative science meeting natural elegance.<br/><br/><i>“Aging skin doesn’t need to be fought—it needs to be regenerated. With Altruva Regenerative RF, we respect your skin’s biology and help it perform at its best.”<br/>— dr. Olivia Aldisa, Medical Director & Global Regenerative Aesthetic KOL</i>",
    whatIsIt: {
      title: 'How It Works',
      description: `<ul class="list-disc pl-5 mt-2 space-y-2">
        <li><strong>Radiofrequency Energy:</strong> Controlled RF waves gently heat the deeper layers of the skin, activating fibroblasts and kickstarting collagen and elastin production—resulting in visibly lifted, firmer, and more resilient skin.</li>
        <li><strong>Targeted Ultrasound Synergy:</strong> Focused ultrasound enhances dermal stimulation, supporting skin remodeling in deeper layers without compromising the surface. It’s ideal for the full face, including fragile areas like the under-eye and jawline.</li>
        <li><strong>AI-Optimized Energy Delivery:</strong> Integrated AI systems read skin impedance in real time, adjusting energy output to deliver uniform heating and minimize risks—ensuring comfort and consistency in every session.</li>
        <li><strong>100% Needle-Free:</strong> Unlike traditional microneedling RF, Altruva Regenerative RF uses no needles, making it a safer, gentler option for aging skin that may be prone to thinning or bruising.</li>
      </ul>`
    },
    benefits: [
      'Lifts and tightens sagging skin',
      'Natural contour restoration without surgery or injectables.',
      'Improves skin density and elasticity',
      'Stimulates fibroblasts and boosts collagen for long-term firming effects.',
      'Refines texture and minimizes pores',
      'Smooths the skin’s surface and improves clarity, especially in areas prone to age-related roughness.',
      'Enhances skin hydration and glow',
      'Stimulates your own hyaluronic acid production, resulting in supple, luminous skin.',
      'Safe for all skin tones',
      'Clinically suitable for Asian and melanin-rich skin types with no risk of post-inflammatory hyperpigmentation.',
      'Minimal to zero downtime'
    ],
    indications: [
      'Skin laxity (jawline, cheeks, under-eye)',
      'Fine lines and moderate wrinkles',
      'Rough or uneven skin texture',
      'Enlarged pores and dullness',
      'Collagen depletion in mature skin',
      'Men and women 40+ experiencing visible skin aging',
      'Clients not yet ready for invasive lifting or injectables',
      'Individuals with textural decline, sagging contours, and early jowl formation',
      'Mature skin seeking regenerative improvement with minimal disruption'
    ],
    protocol: [
      { label: 'Session Duration', value: '45–60 minutes for full face' },
      { label: 'Comfort Level', value: 'Warm sensation; no numbing needed' },
      { label: 'Recommended Frequency', value: '4 sessions spaced 2–4 weeks apart' },
      { label: 'Maintenance', value: '1–2 times per year depending on aging profile' }
    ]
  },
  {
    id: 'cocktail-contouring',
    title: 'Altruva Cocktail Contouring',
    description: 'Personalized bio-stimulator &amp; selected filler fusion.',
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
    title: 'Altruva Dermal Filler Pro',
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
    title: 'Altruva Face Modulator (Full Dose)',
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
    description: 'Facial contour sculpting &amp; detoxification.',
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
    subgroup: 'Muscle &amp; Fat'
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
    subgroup: 'Restoration &amp; Lifting'
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


    

    



    
