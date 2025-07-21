
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
    subgroup: 'Core Facials',
    subtitle: 'Pore Purity. Cellular Rejuvenation. Personalized Glow.',
    longDescription: 'At Altruva, our Signature Facial isn’t just a routine — it’s a custom-engineered skin therapy, crafted for your unique skin biology and life rhythms. Tailored by our in-house skin therapists and supported by clinical-grade protocols, this treatment synergizes deep pore purification, targeted light therapy (PDT), and dermal restoration into one comprehensive facial ritual.',
    whatIsIt: {
      title: 'What Makes It Signature?',
      description: `<ul class="list-disc pl-5 space-y-2">
        <li><strong class="text-primary">Fully Personalized Protocol:</strong> Whether you're battling congestion, sensitivity, dullness, or early signs of aging — your facial will be individually customized to treat your skin’s real-time needs.</li>
        <li><strong class="text-primary">PDT Light Technology (Photodynamic Therapy):</strong> Targeted LED wavelengths are incorporated based on your skin goals:
          <ul class="list-disc pl-5 mt-1">
            <li><strong>Blue Light (415 nm):</strong> For acne-prone skin, kills P. acnes bacteria and calms inflammation.</li>
            <li><strong>Red Light (630 nm):</strong> Stimulates collagen, improves circulation, and supports cellular renewal.</li>
            <li><strong>Infrared Light (830 nm):</strong> Penetrates deeply to reduce inflammation, increase elasticity, and accelerate healing — ideal for mature, reactive, or post-procedure skin.</li>
          </ul>
        </li>
        <li><strong class="text-primary">Signature Extraction Method:</strong> Gentle yet thorough extractions ensure deep cleansing without compromising skin barrier or comfort — especially ideal for clogged pores, blackheads, and t-zone buildup.</li>
        <li><strong class="text-primary">Skin Diagnostics & Recovery Mapping:</strong> Every session begins with a detailed consultation and is concluded with barrier repair serums or hydration shields based on your current dermal state.</li>
      </ul>`,
    },
    benefits: [
      'Deeply purifies congested skin and minimizes pores',
      'Brightens dull or uneven complexion',
      'Soothes inflamed or acne-prone skin with targeted LED',
      'Promotes dermal regeneration and collagen synthesis',
      'Improves hydration levels and barrier resilience',
      'Leaves skin smoother, cleaner, and visibly more luminous',
    ],
    protocol: [
      { label: 'Duration', value: '60–75 minutes' },
      { label: 'Downtime', value: 'None' },
      { label: 'Ideal For', value: 'All skin types, especially oily/acneic, dull, fatigued, or aging skin' },
      { label: 'Frequency', value: 'Every 2–4 weeks for optimal skin health' },
      { label: 'Add-ons Available', value: 'Enzyme peeling, Oxygeneo infusion, Glass Skin serum therapy' }
    ],
    whyLoveIt: [
      'Because no skin is generic.',
      'Altruva’s facial protocols are built on a hybrid model of spa-grade indulgence and medical-grade insight, ensuring your glow isn’t superficial — it’s cellular.',
      '<i>“True clarity isn’t achieved by stripping skin — it’s by teaching it to function optimally. This facial isn’t just cleansing; it’s re-education.”</i> — dr. Olivia Aldisa, Founder of Altruva & Expert in Skin Health Optimization'
    ],
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
    subgroup: 'Core Facials',
    subtitle: 'Exfoliate. Infuse. Illuminate. The Gold Standard of Hydrodermabrasion.',
    longDescription: 'For skin that craves clarity, hydration, and luminosity in one seamless protocol, Altruva HydraGlow Facial delivers results beyond the surface. This is Altruva’s elevated version of the Dermalinfusion, combining diamond-tip exfoliation, vacuum-assisted extraction, and targeted serum infusion — all in one high-performance session tailored to your skin’s real-time needs. Powered by vortex technology and curated infusions, this facial isn’t just about glow — it’s about deep nourishment, barrier support, and clinical rejuvenation without downtime.',
    whatIsIt: {
      title: 'How HydraGlow Works: 3-in-1 Dermal Technology',
      description: `<ol class="list-decimal pl-5 space-y-2">
        <li><strong class="text-primary">Exfoliate:</strong> A medical-grade diamond or vortex tip gently removes dull, dead cells from the skin’s surface — revealing smoother, more radiant skin underneath.</li>
        <li><strong class="text-primary">Extract:</strong> Simultaneous suction clears clogged pores, blackheads, and surface impurities — leaving skin feeling clean, light, and less congested.</li>
        <li><strong class="text-primary">Infuse:</strong> While exfoliating and extracting, the device also infuses targeted serums — chosen by your therapist — to address hydration, pigmentation, acne, or dullness. These actives penetrate deeply for immediate and visible impact.</li>
      </ol>
      <h4 class="font-semibold text-primary mt-4">Custom-Infused Serums May Include:</h4>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li><strong class="text-primary">Hyaluronic Acid:</strong> Deep hydration + plumping</li>
        <li><strong class="text-primary">Salicylic Acid:</strong> Acne, oil control, and decongestion</li>
        <li><strong class="text-primary">Vitamin C:</strong> Brightening and antioxidant protection</li>
        <li><strong class="text-primary">Niacinamide:</strong> Strengthens barrier and evens tone</li>
      </ul>`,
    },
    benefits: [
      'Polishes away dead skin without irritation',
      'Deeply hydrates and restores skin suppleness',
      'Brightens and evens skin tone',
      'Decongests pores and minimizes blackheads',
      'Diminishes the appearance of fine lines and early wrinkles',
      'Improves the effectiveness of skincare absorption',
      'Delivers an instant “camera-ready” glow',
    ],
    protocol: [
      { label: 'Duration', value: '45–60 minutes' },
      { label: 'Downtime', value: 'None' },
      { label: 'Results', value: 'Visible immediately; optimal over 24–48 hrs' },
      { label: 'Frequency', value: 'Every 4–6 weeks for skin maintenance' },
      { label: 'Ideal For', value: 'Dehydrated, acne-prone, dull, sensitive, or aging skin types' },
    ],
    whyLoveIt: [
      '<strong>Custom PDT Integration:</strong> Add Blue, Red, or Infrared LED for acne control or regenerative glow.',
      '<strong>Barrier-Safe Approach:</strong> No harsh acids. Skin remains calm, hydrated, and non-reactive.',
      '<strong>Clinically Formulated Protocols:</strong> Designed by dr. Olivia Aldisa for enhanced cellular turnover and skin integrity.',
      '<strong>Makeup-Optional Finish:</strong> Walk out with hydrated, luminous skin ready for the day or night.',
      '<i>“Hydration is not a trend — it’s the foundation of skin longevity. This treatment makes your skin feel alive again.”</i> — dr. Olivia Aldisa, Founder of Altruva & Regenerative Skin Strategist',
    ],
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
    title: 'Altruva Bio-PRF',
    description: 'Platelet-rich fibrin therapy for deep tissue regeneration.',
    price: '2,500,000 IDR',
    category: 'Prejuvenation',
    Icon: HeartPulse,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'regenerative therapy',
    group: 'Altruva Glow',
    groupDescription: 'The best aging strategy is prevention. Altruva Glow strengthens skin resilience, hydration, and defense mechanisms against premature aging, keeping your skin radiant and future-ready.',
    subgroup: 'Skin-geneering Boosters',
    subtitle: 'Next-Generation Regeneration from Within',
    longDescription: `At Altruva, we embrace the future of regenerative medicine. Altruva Bio-PRF (Platelet-Rich Fibrin) is our most advanced autologous treatment, using your body’s own biology to stimulate repair, rejuvenation, and regeneration—naturally.<br/><br/>Unlike traditional PRP, which offers a quick release of growth factors, Bio-PRF is designed for sustained, long-acting regeneration through its intelligent fibrin matrix. This makes it a cornerstone of our regenerative contouring philosophy—supporting structural collagen repair, improved tissue quality, and healing from the inside out.`,
    whatIsIt: {
      title: 'What Is Bio-PRF?',
      description: `Bio-PRF is an evolution of platelet therapy. It contains not only high concentrations of platelets, but also leukocytes (white blood cells) and a natural fibrin scaffold—all prepared without anticoagulants. This allows the formation of a soft gel-like matrix that:
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Traps regenerative growth factors</li>
        <li>Releases them slowly over 7–10 days</li>
        <li>Supports long-term tissue healing and collagen induction</li>
      </ul>
      <p class="mt-2">It is completely autologous, meaning it's 100% derived from your own blood—no additives, no foreign substances, and no risk of rejection.</p>`
    },
    howItDiffers: 'Unlike PRP, which requires anticoagulants and offers a quick burst of growth factors, Bio-PRF creates a natural fibrin matrix that allows for a sustained release of growth factors over 7-10 days. This prolonged action provides more robust and lasting regenerative signals to the tissue.',
    benefits: [
      'Stimulates long-term collagen and elastin production',
      'Improves skin quality, elasticity, and density',
      'Enhances wound healing and reduces inflammation',
      'Effective for hair regrowth, acne scars, dark undereyes, and skin rejuvenation',
      'Excellent addition to GOURI, skinboosters, and energy-based devices'
    ],
    indications: [
        'Face: Improves dermal thickness, glow, and firmness. A perfect complement to biostimulators or post-laser healing.',
        'Hair: Encourages follicle repair and growth, ideal for early hair thinning.',
        'Eye Area: Reduces dark circles and crepey skin with natural, regenerative power.',
        'Scars: Reduces acne and atrophic scar depth by promoting healthy tissue remodeling.'
    ],
    whyLoveIt: [
      'In a market saturated with synthetic fillers and quick fixes, Altruva Bio-PRF offers a return to nature—backed by science. It’s biocompatible, chemical-free, and patient-specific. At Altruva, we don’t just treat symptoms—we engineer skin longevity.'
    ]
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
        description: `<ul class="list-disc pl-5 mt-2 space-y-1"><li><strong>Salicylic Acid (BHA):</strong> deeply penetrates pores to dissolve sebum, clear blockages, and prevent future breakouts.</li><li><strong>Mandelic Acid (AHA):</strong> offers gentle exfoliation to smooth skin texture and fade dark spots without irritation.</li><li><strong>Terpineol-Thymol Complex:</strong> is a patented antimicrobial technology that reduces redness, supports skin microbiome balance, and strengthens skin’s natural defenses.</li></ul>`
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
      "Unlike traditional acne peels that may cause flaking or irritation, our protocol is designed with regenerative dermatology in mind. Paired with a personalized Altruva Glow regimen or combined with Exion Lumi Laser, it offers a gentle yet highly effective path to clear, luminous skin—no downtime, no harshness."
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
      description: `<ul class="list-disc pl-5 mt-2 space-y-1"><li><strong>LHA (Lipo-Hydroxy Acid):</strong> A lipid-soluble salicylic acid derivative that penetrates slowly, targeting clogged pores and dull skin with precision while being extremely gentle on the skin barrier.</li><li><strong>HP-Sol™ Complex:</strong> A patented alkaline complex that stimulates fibroblast activity for collagen production, balances skin pH, and supports healing—creating a glow-from-within effect.</li><li><strong>Skin-Friendly Lipids:</strong> Incorporated to hydrate, protect, and soothe, these actives ensure skin comfort during and after exfoliation.</li></ul>`
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
    longDescription: 'The Altruva Lumi Laser is a non-invasive skin optimization treatment that uses next-generation radiofrequency (RF) technology to target skin clarity, pigmentation, and textural refinement—all without downtime. This advanced protocol works deeply within the dermis to stimulate collagen, brighten the complexion, and refine pores, resulting in skin that’s visibly clearer, smoother, and more radiant after each session.<br/><br/>Crafted for those seeking visible results with minimal interruption to daily life, Lumi Laser is a cornerstone treatment in Altruva’s Prejuvenation and Glow Optimization programs.',
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
    howItDiffers: 'Designed by a Global Sofwave Expert. The A.R.T Lift Lite protocol is based on clinical knowledge and field data from dr. Aldisa’s work with thousands of Sofwave pulses. It targets collagen banking to prevent premature sagging and is a strategic prejuvenation for Millennials & Gen Z. It is non-invasive with zero downtime.',
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
      { label: 'Visible results', value: '3–4 weeks post-treatment, with progressive improvement for up to 12 weeks' },
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
      'Tightens Sagging Skin Naturally',
      'Improves Hydration from Within',
      'Reduces Fine Lines & Refines Texture',
      'AI-Guided Precision',
      'Minimal Downtime, Maximal Glow',
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
    title: 'Altruva Exoprime Pro',
    description: 'Deep regenerative exosome therapy.',
    price: '4,500,000 IDR',
    category: 'Rejuvenation',
    Icon: HeartPulse,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'exosome therapy',
    group: 'Altruva Glow',
    groupDescription: 'Aging is a shift, not a stop. Altruva Glow revitalizes skin function, ensuring long-term firmness, resilience, and radiance.',
    subgroup: 'Skin-geneering Boosters',
    subtitle: 'Origin & Purity',
    longDescription: 'Altruva Exoprime Pro is an advanced, non-invasive regenerative treatment leveraging the science of exosomes to enhance skin health, promote rejuvenation, and support hair vitality. Exosomes are microscopic vesicles naturally secreted by cells, rich in bioactive compounds such as proteins, lipids, mRNA, and microRNAs—essential for cellular communication and repair. These vesicles act as messengers, triggering key biological processes that lead to improved skin texture, reduced inflammation and pigmentation, enhanced wound healing, and stimulation of hair growth.',
    whatIsIt: {
      title: 'Core Applications',
      description: `<ul class="list-disc pl-5 mt-2 space-y-1"><li>Skin Rejuvenation</li><li>Wound and Scar Repair</li><li>Anti-aging and Texture Refinement</li><li>Hair Restoration and Scalp Revitalization</li></ul>`
    },
    mechanism: [
      { title: 'Boosts Collagen & Elastin', description: 'Supports dermal remodeling by accelerating fibroblast activity' },
      { title: 'Neutralizes Free Radicals', description: 'Reduces oxidative stress from pollution, UV, and internal aging' },
      { title: 'Improves Skin Texture', description: 'Softens unevenness, smoothens skin surface' },
      { title: 'Deep Skin Hydration', description: 'Enhances water retention and replenishes the extracellular matrix' },
      { title: 'Enhances Microcirculation', description: 'Improves oxygenation and nutrient flow for a lit-from-within glow' },
      { title: 'Supports Skin Recovery', description: 'Ideal for post-laser, peeling, or stress-related skin fatigue' },
    ],
    benefits: [
      'Supports accelerated skin repair and regeneration',
      'Minimizes fine lines and wrinkles',
      'Improves skin elasticity, tone, and resilience',
      'Boosts collagen synthesis and fibroblast activity',
      'Enhances overall texture and luminosity',
      'Strengthens hair structure and shaft integrity',
      'Promotes accelerated hair growth',
      'Reduces excessive shedding',
      'Optimizes scalp condition for healthier follicles',
    ],
    whyLoveIt: [
      '<strong>Synergistic with Energy-Based Devices:</strong> Ideal as a post-treatment bio-repair system following microneedling, lasers, or RF—enhancing outcomes and reducing downtime.',
      '<strong>Scientifically Validated:</strong> Rigorously tested and developed under stringent laboratory protocols, ensuring quality, safety, and efficacy.',
      '<strong>Visible, Long-Lasting Results:</strong> Improvements are often visible within a week. With consistent use (minimum 3 sessions), results may last 6–12 months depending on individual skin conditions and treatment protocols.',
    ]
  },
  {
    id: 'dna-repair-pro',
    title: 'Altruva DNA Repair Pro',
    description: 'Reinforces skin’s cellular repair system.',
    subtitle: 'Advanced Polynucleotide Skin Regeneration by dr. Aldisa',
    longDescription: `Altruva DNA Repair Pro is a next-generation regenerative protocol powered by Polynucleotides (PN) — clinically purified DNA fragments that stimulate deep dermal healing, reverse cellular fatigue, and restore skin architecture from the inside out. Far beyond hydration, this treatment reactivates fibroblasts, encourages collagen remodeling, and reestablishes skin homeostasis — making it a cornerstone for age-related skin degeneration, post-acne scarring, and periocular rejuvenation.<br/><br/><i>“DNA Repair isn’t just about reversing aging — it’s about restoring vitality at a cellular level. That’s regenerative beauty.” — dr. Olivia Aldisa, Facial Architect & Cellular Rejuvenation Specialist</i>`,
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
      'Noticeably improved skin texture, bounce, and resilience within weeks',
      '<i>“DNA Repair isn’t just about reversing aging — it’s about restoring vitality at a cellular level. That’s regenerative beauty.”</i> — dr. Olivia Aldisa, Facial Architect & Cellular Rejuvenation Specialist'
    ]
  },
  {
    id: 'dna-repair-eye',
    title: 'Altruva DNA Repair Eye',
    description: 'Reinforces skin’s cellular repair system for undereye area.',
    subtitle: 'Targeted Polynucleotide Eye Regeneration – Tailored by dr. Aldisa',
    longDescription: `Altruva DNA Repair Eye is a specialized micro-regeneration protocol powered by ultra-purified polynucleotides (PN) designed specifically for the delicate under-eye area. Crafted to combat dark circles, fine lines, volume thinning, and crepey texture, this treatment reactivates cellular vitality while hydrating and restoring periocular firmness — without puffiness or unnatural volume.<br/><br/>This is not a filler — this is cellular awakening for tired, aging eyes.<br/><br/><i>“The eyes are where fatigue, age, and emotion show first. DNA Repair Eye restores their language to one of radiance.” — dr. Olivia Aldisa, Periocular Harmony Specialist</i>`,
    price: '5,000,000 IDR',
    category: 'Rejuvenation',
    Icon: Shield,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'eye treatment',
    group: 'Altruva Glow',
    groupDescription: 'Aging is a shift, not a stop. Altruva Glow revitalizes skin function, ensuring long-term firmness, resilience, and radiance.',
    subgroup: 'Skin-geneering Boosters',
    whatIsIt: {
      title: 'How Altruva DNA Repair Eye Works',
      description: `The periorbital region is thinner, more vascular, and more prone to early aging due to its fragility and constant micro-movement. Conventional injectables often fail here due to the risk of Tyndall effect, puffiness, or migration. Polynucleotides, with their regenerative but non-volumizing action, offer the ideal solution for this high-risk zone. They work by:
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li><strong>Polynucleotide Power (PN):</strong> DNA fragments derived from marine origin stimulate fibroblast proliferation, enhancing collagen and elastin synthesis while repairing extracellular matrix integrity.</li>
        <li><strong>Microcirculation Activation:</strong> Improves oxygen and nutrient flow in the infraorbital area — reducing dark circles and dullness caused by stagnation or vascular congestion.</li>
        <li><strong>Fibrillar Regeneration:</strong> Targets thinning dermis, reinforcing skin structure without the heaviness of fillers.</li>
        <li><strong>Barrier Protection & Hydration:</strong> Enhances skin’s own hyaluronic acid production, restoring hydration and comfort to dry or sensitive under-eyes.</li>
      </ul>`
    },
    benefits: [
      'Reduces dark circles and vascular shadows',
      'Smooths fine lines and crêpey texture',
      'Tightens and firms thinning under-eye skin',
      'Restores radiance to tired eyes',
      'Safe for use in tear troughs and eyelid junctions',
      'Non-puffy, filler-free eye rejuvenation',
      'Gentle, natural outcome with zero distortion'
    ],
    protocol: [
      { label: 'Session Duration', value: '15–20 minutes' },
      { label: 'Protocol', value: '3–4 sessions spaced 2–3 weeks apart' },
      { label: 'Longevity', value: '6–9 months (may vary)' },
      { label: 'Technique', value: 'Microinjection or microbolus' },
      { label: 'Layering Option', value: 'Safe to combine with PRF, skin boosters, or laser-based rejuvenation' },
    ],
    whyLoveIt: [
      'Zero Tyndall Risk: No blue hue or light reflection',
      'Volume-Free Approach: No risk of puffiness or overcorrection',
      'Science-Based Safety: Derived from sterile, bio-purified DNA',
      'Proven Regeneration: Backed by clinical evidence on dermal repair and collagen activation'
    ]
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
    subgroup: 'Skin-geneering Boosters',
    subtitle: 'Smart Skin Recharging with Hyaluronic Acid, Amino Acids & Vitamins',
    longDescription: `Altruva Amino Booster is a multi-functional skinboosters protocol formulated to restore vitality, elasticity, and hydration to the skin. This intradermal injectable cocktail contains hyaluronic acid, essential amino acids, and skin-repairing vitamins, designed to revive dull, tired, and aging skin from the inside out.<br/><br/>It’s more than a glow treatment — it’s cellular nutrition that rewires how your skin behaves.`,
    whatIsIt: {
      title: 'What’s Inside & Why It Matters',
      description: `<ul class="list-disc pl-5 mt-2 space-y-2"><li><h4 class="font-semibold text-primary">Hyaluronic Acid</h4><p>Deeply hydrates and plumps the dermis, reducing fine lines</p></li><li><h4 class="font-semibold text-primary">Amino Acids</h4><p>Fundamental for collagen synthesis, skin repair, and resilience</p></li><li><h4 class="font-semibold text-primary">Vitamins (B-complex, C, E)</h4><p>Protects against oxidative stress, supports microcirculation, boosts glow</p></li></ul><p class="mt-4">Together, they reactivate your skin’s metabolic engine for healthier structure, tone, and function.</p>`
    },
    mechanism: [
      { title: 'Boosts Collagen & Elastin', description: 'Supports dermal remodeling by accelerating fibroblast activity' },
      { title: 'Neutralizes Free Radicals', description: 'Reduces oxidative stress from pollution, UV, and internal aging' },
      { title: 'Improves Skin Texture', description: 'Softens unevenness, smoothens skin surface' },
      { title: 'Deep Skin Hydration', description: 'Enhances water retention and replenishes the extracellular matrix' },
      { title: 'Enhances Microcirculation', description: 'Improves oxygenation and nutrient flow for a lit-from-within glow' },
      { title: 'Supports Skin Recovery', description: 'Ideal for post-laser, peeling, or stress-related skin fatigue' },
    ],
    benefits: [
      'Improves skin elasticity and hydration',
      'Softens fine lines and crepey texture',
      'Brightens dull complexion',
      'Supports skin regeneration and tissue repair',
      'Enhances firmness and barrier resilience',
      'Well tolerated, with minimal downtime and suitable for all skin types'
    ],
    indications: [
      '40+ patients showing early signs of collagen loss or dullness',
      'Those with fatigue-induced skin damage',
      'Patients undergoing skin repair programs after laser, sun exposure, or pollution',
      'Individuals with textural irregularities, dehydration, or pigmentary imbalance',
    ],
    protocol: [
      { label: 'Initial Program', value: '3–4 sessions, spaced 2–3 weeks apart' },
      { label: 'Injection Techniques', value: 'Papular, microbolus, linear retrograde' },
      { label: 'Maintenance', value: 'Every 2–3 months as skin maintenance' },
    ],
    whyLoveIt: [
      `<i>“Think of it as your skin’s daily supplement — but delivered with clinical precision for real transformation.”</i> — dr. Olivia Aldisa, Altruva Clinical Director`
    ]
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
    subgroup: 'Skin-geneering Boosters',
    subtitle: 'Brightening Science for Stubborn Pigmentation',
    longDescription: 'Altruva Mela-Boosters is an advanced depigmenting protocol specifically formulated to treat melasma and persistent hyperpigmentation in Asian skin. By synergistically combining the brightening power of Vitamin C, Arbutin, Succinic Acid, and Mulberry Extracts, this multi-targeted treatment works to suppress melanin production, accelerate cellular repair, and calm low-grade inflammation that often exacerbates pigmentation.<br/><br/>Melasma affects both physical appearance and emotional well-being. It often causes reduced self-confidence and may be accompanied by symptoms such as itchiness, dryness, or a mild burning sensation.',
    whatIsIt: {
        title: 'Key Active Ingredients',
        description: `These four components are designed to work synergistically—not only reducing visible pigmentation but also restoring healthy skin structure from within.<br/><ul class="list-disc pl-5 mt-2 space-y-1"><li><strong>Vitamin C:</strong> A powerful antioxidant that inhibits tyrosinase activity and promotes collagen synthesis.</li><li><strong>Arbutin:</strong> A gentle melanin-suppressing brightener with minimal irritation risk.</li><li><strong>Succinic Acid:</strong> A natural derivative with anti-inflammatory and antioxidant benefits.</li><li><strong>Mulberry Extract:</strong> A botanical ingredient that brightens skin, soothes irritation, and protects DNA from damage.</li></ul>`
    },
    mechanism: [
        { title: 'Inhibits Tyrosinase', description: 'Blocks the key enzyme involved in melanin synthesis.' },
        { title: 'Reduces Micro-inflammation', description: 'Calms the low-grade inflammation that often triggers melasma flare-ups.' },
        { title: 'Soothes UV-Induced Irritation', description: 'Calms sensitivity from sun exposure and harsh products.' },
        { title: 'Accelerates Skin Regeneration', description: 'Enables faster fading of dark spots by promoting cellular turnover.' },
        { title: 'Safe for Sensitive Skin', description: 'Suitable for all Fitzpatrick skin types, especially types III–V.' }
    ],
    benefits: [
        'Safe for long-term use',
        'Does not cause rebound hyperpigmentation',
        'Soothes and strengthens the skin barrier',
        'Effective as a maintenance protocol post-laser or peeling',
        'Non-irritating and does not increase photosensitivity'
    ],
    indications: [
        'Patients with epidermal or dermal melasma',
        'Individuals with post-inflammatory hyperpigmentation (PIH) from acne or injury',
        'Those seeking overall facial brightening with no downtime',
        'Patients intolerant to strong acids such as hydroquinone or retinoids',
        'Breastfeeding mothers or individuals preferring non-invasive therapies'
    ]
  },
  {
    id: 'bio-prf-rejuvenation',
    title: 'Altruva Bio-PRF Rejuvenation',
    description: 'Comprehensive regenerative healing.',
    price: '3,000,000 IDR',
    category: 'Rejuvenation',
    Icon: HeartPulse,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'regenerative healing',
    group: 'Altruva Glow',
    groupDescription: 'Aging is a shift, not a stop. Altruva Glow revitalizes skin function, ensuring long-term firmness, resilience, and radiance.',
    subgroup: 'Skin-geneering Boosters',
    subtitle: 'Next-Generation Regeneration from Within',
    longDescription: `At Altruva, we embrace the future of regenerative medicine. Altruva Bio-PRF (Platelet-Rich Fibrin) is our most advanced autologous treatment, using your body’s own biology to stimulate repair, rejuvenation, and regeneration—naturally.<br/><br/>Unlike traditional PRP, which offers a quick release of growth factors, Bio-PRF is designed for sustained, long-acting regeneration through its intelligent fibrin matrix. This makes it a cornerstone of our regenerative contouring philosophy—supporting structural collagen repair, improved tissue quality, and healing from the inside out.`,
    whatIsIt: {
      title: 'What Is Bio-PRF?',
      description: `Bio-PRF is an evolution of platelet therapy. It contains not only high concentrations of platelets, but also leukocytes (white blood cells) and a natural fibrin scaffold—all prepared without anticoagulants. This allows the formation of a soft gel-like matrix that:
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Traps regenerative growth factors</li>
        <li>Releases them slowly over 7–10 days</li>
        <li>Supports long-term tissue healing and collagen induction</li>
      </ul>
      <p class="mt-2">It is completely autologous, meaning it's 100% derived from your own blood—no additives, no foreign substances, and no risk of rejection.</p>`
    },
    howItDiffers: 'Unlike PRP, which requires anticoagulants and offers a quick burst of growth factors, Bio-PRF creates a natural fibrin matrix that allows for a sustained release of growth factors over 7-10 days. This prolonged action provides more robust and lasting regenerative signals to the tissue.',
    benefits: [
      'Stimulates long-term collagen and elastin production',
      'Improves skin quality, elasticity, and density',
      'Enhances wound healing and reduces inflammation',
      'Effective for hair regrowth, acne scars, dark undereyes, and skin rejuvenation',
      'Excellent addition to GOURI, skinboosters, and energy-based devices'
    ],
    indications: [
        'Face: Improves dermal thickness, glow, and firmness. A perfect complement to biostimulators or post-laser healing.',
        'Hair: Encourages follicle repair and growth, ideal for early hair thinning.',
        'Eye Area: Reduces dark circles and crepey skin with natural, regenerative power.',
        'Scars: Reduces acne and atrophic scar depth by promoting healthy tissue remodeling.'
    ],
    whyLoveIt: [
      'In a market saturated with synthetic fillers and quick fixes, Altruva Bio-PRF offers a return to nature—backed by science. It’s biocompatible, chemical-free, and patient-specific. At Altruva, we don’t just treat symptoms—we engineer skin longevity.'
    ]
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
    subgroup: 'Skin-geneering Boosters',
    subtitle: 'The Science of Self-Renewal. Delivered.',
    longDescription: 'Altruva Youth Elixir is an advanced, multi-tiered bioregenerative protocol formulated for individuals seeking long-term skin vitality, healing, and visible rejuvenation. This elite combination treatment merges three of the most potent tools in regenerative aesthetics: Polynucleotides (Plinest®), Cellbooster® Lift, and ProStem Secretome — each selected for their complementary mechanisms in cellular repair, dermal hydration, and collagen renewal.<br/><br/>Created as a biological elixir for the modern skin, this treatment transcends superficial hydration or anti-aging promises. Instead, it directly enhances the skin’s repair architecture, combats oxidative damage, and strengthens the dermal matrix from within.',
    whatIsIt: {
      title: 'What Makes Up the Youth Elixir?',
      description: `<div class="space-y-4"><div><h4 class="font-semibold text-primary">Polynucleotides</h4><p>Derived from purified DNA fragments, polynucleotides act as bioactive cell messengers, enhancing fibroblast proliferation, tissue healing, and elasticity. Proven to be especially effective in post-acne scarring, wrinkle reduction, and barrier repair.</p></div><div><h4 class="font-semibold text-primary">Amino Acid Boosters</h4><p>A mesotherapy complex containing non-crosslinked hyaluronic acid, amino acids, and vitamins to improve microcirculation, collagen biosynthesis, and dermal hydration. It enhances skin texture, tone, and combats fine lines by feeding essential nutrients directly into the dermis.</p></div><div><h4 class="font-semibold text-primary">Secretome</h4><p>Rich in bio-signals including growth factors, cytokines, and exosomes, this ethically sourced stem cell-derived secretome stimulates deep tissue repair, improves mitochondrial function, reduces inflammation, and orchestrates global dermal rejuvenation.</p></div></div>`
    },
    benefits: [
      'Enhances cell turnover and tissue regeneration',
      'Boosts hydration while promoting long-term collagen production',
      'Reduces the appearance of fine lines, scars, and hyperpigmentation',
      'Improves skin elasticity, texture, and firmness',
      'Accelerates post-inflammatory healing, ideal after laser or RF',
      'Evens out skin tone and imparts a refined, radiant complexion'
    ],
    indications: [
      'Patients over 40 seeking long-term collagen banking and wrinkle prevention',
      'Post-acne or atrophic scarring concerns',
      'Dull, dry, or uneven skin tone',
      'Individuals undergoing stacked regenerative protocols (e.g., fractional RF, ultrasound lifting)',
      'Those with stress-induced inflammation, early signs of glycation, or slow dermal healing'
    ],
    protocol: [
      { label: 'Sessions', value: '3–4 sessions, spaced 2–4 weeks apart' },
      { label: 'Customization', value: 'Personalized by dr. Olivia Aldisa based on anatomic map and regenerative profile' },
      { label: 'Synergy', value: 'Can be combined with A.R.T Lift, Fractional RF, or Regenerative Laser' },
      { label: 'Maintenance', value: '1–2 sessions every 6 months' },
    ],
    whyLoveIt: [
      '<i>“Because beauty isn’t built in a single session. It’s cultivated through cellular intelligence, tissue harmony, and precise bio-signaling. At Altruva, we don’t chase the glow — we rebuild it from the inside out.”</i> — dr. Olivia Aldisa, International Trainer & Regenerative Aesthetics Expert'
    ]
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
    subgroup: 'Signature Peels',
    subtitle: 'Reset. Rebuild. Radiate. Age-Evolved Peeling for Skin Over 40',
    longDescription: `Altruva Radiant Advanced Peel is a prejuvenation-driven chemical resurfacing treatment tailored for mature skin that needs intelligent exfoliation before undergoing regenerative procedures. Designed as the first step in your advanced rejuvenation journey, this peel harnesses Lipo-Hydroxy Acid (LHA) and HP-Sol™ Complex, targeting uneven texture, discoloration, and loss of clarity — all without compromising skin integrity.<br/><br/>Ideal for preparing the skin for lasers, collagen biostimulators, ultrasound lifting, or injectable programs, this protocol sets the foundation for superior clinical outcomes by optimizing cellular turnover, dermal receptivity, and epidermal renewal.`,
    whatIsIt: {
      title: 'How It Works',
      description: `<ul class="list-disc pl-5 mt-2 space-y-2"><li><h4 class="font-semibold text-primary">Lipo-Hydroxy Acid (LHA)</h4><p>Promotes controlled exfoliation, unclogs pores, and softens fine lines with minimal irritation</p></li><li><h4 class="font-semibold text-primary">HP-Sol™ Complex</h4><p>A patented alkaline matrix that activates fibroblast function, balances pH, and supports collagen synthesis</p></li><li><h4 class="font-semibold text-primary">Dermal Conditioning Lipids</h4><p>Reinforce the skin barrier, ensuring comfort, hydration, and healing throughout the peeling process</p></li></ul><p class="mt-4">This multi-layered approach resets the skin's biological rhythm, laying the groundwork for long-term anti-aging transformations.</p>`
    },
    benefits: [
      'Smooths skin texture and primes dermis for deeper treatments',
      'Fades pigmentation, age spots, and sun damage',
      'Prepares skin for better response to energy-based or injectable procedures',
      'Stimulates natural collagen for structural skin support',
      'Minimizes surface roughness, pores, and dull tone',
      'Zero social downtime — treatment-ready in 24 hours'
    ],
    indications: [
      'Individuals 40+ with visible signs of aging (wrinkles, pigmentation, loss of tone)',
      'Patients preparing for Sofwave, fractional RF, collagen biostimulators (Gouri, PRF, PLLA)',
      'Skin experiencing cumulative photodamage, stress, or sluggish regeneration',
      'Those with sensitive or thinning skin who need an exfoliation alternative without acid trauma'
    ],
    whyLoveIt: [
      `Unlike traditional peels designed to strip, this protocol is designed to strengthen — making it a cornerstone of Altruva’s regenerative protocol layering strategy.`,
      `<i>“Think of this peel as your skin’s warm-up routine — aligning surface renewal with deeper regenerative potential.”</i> — dr. Olivia Aldisa, Founder & Clinical Director`,
      `<strong>Recommended Pairings:</strong> Before: ART Lift Pro, Gorgeous Lyft, Lumi Laser, or Altruva Youth Elixir. After: Hydration-focused boosters, PN/HA mesotherapy, or low-level light therapy (LLLT).`
    ]
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
    subgroup: 'Signature Laser',
    subtitle: "Resurface. Restore. Regenerate.",
    longDescription: "The Altruva Regenerative Laser leverages smart fractional microablation technology to deliver powerful skin resurfacing while preserving the skin barrier—a rare synergy in the world of aesthetic lasers. Designed for those battling visible signs of aging, sun damage, or stubborn pigmentation, this treatment offers precision regeneration with minimal trauma, minimal downtime, and maximum results.<br/>Unlike aggressive CO₂ lasers, this intelligent device respects dermal integrity, making it a preferred choice in our Rejuvenation Program for patients over 40 or with environmentally stressed skin.",
    whatIsIt: {
      title: "Technology in Action",
      description: `<ul class="list-disc pl-5 mt-2 space-y-1"><li><strong>Fractional Microablation:</strong> Targets damaged tissue zones while leaving surrounding skin intact for faster recovery and enhanced collagen remodeling.</li><li><strong>Dual Action – Resurfacing + Healing:</strong> Stimulates the skin’s own regenerative pathways, replacing damaged cells with renewed, radiant tissue.</li><li><strong>Smart Depth Control:</strong> Reaches both epidermal and dermal layers, addressing texture, tone, and structural support in one protocol.</li></ul>`
    },
    benefits: [
      'Fades lentigo, sun spots, melasma, and photoaging',
      'Smoothes rough texture and fine lines',
      'Refines pores and boosts overall radiance',
      'Improves redness and blotchy tone',
      'Triggers natural collagen remodeling',
      'Minimal downtime with no harsh peeling'
    ],
    indications: [
      'Skin over 40 showing early to moderate aging',
      'Hyperpigmentation and dullness',
      'Uneven texture and mild to moderate wrinkling',
      'Post-acne discoloration or photo-damaged skin',
      'Those seeking true regenerative transformation'
    ],
    whyLoveIt: [
      'Because resurfacing should be regenerative, not aggressive. At Altruva, we pair smart energy with skin-geneering principles to ensure every treatment fuels skin longevity—not just short-term glow. Ideal as a prep step before biostimulators or as a standalone renewal for aging skin.'
    ]
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
    subgroup: 'Signature Laser',
    subtitle: "Precision Texture Refinement & Dermal Rejuvenation for Mature Skin",
    longDescription: "Altruva FractioPro is our most advanced radiofrequency microneedling protocol, expertly designed to address the hallmarks of skin aging—textural deterioration, dermal thinning, and laxity—especially for skin over 40 years old. Powered by AI-enhanced Exion Fractional RF, this treatment stimulates your skin’s own collagen, elastin, and hyaluronic acid regeneration—restoring firmness, structure, and refined smoothness without invasive surgery.<br/>This is not just another skin rejuvenation treatment. Altruva FractioPro recalibrates skin architecture from within, turning back the effects of time intelligently and gracefully.",
    whatIsIt: {
      title: "How It Works",
      description: `<ul class="list-disc pl-5 mt-2 space-y-2">
        <li><strong>AI-Controlled Energy Mapping:</strong> Using real-time feedback and smart energy regulation, FractioPro adapts intensity to your skin’s needs—delivering safe, precise, and optimized outcomes with minimal discomfort.</li>
        <li><strong>Fractional RF + Microneedling Fusion:</strong> Ultrathin needles deliver heat into the deep dermal matrix, creating micro-injuries that activate skin repair, while RF energy intensifies collagen remodeling and tissue contraction.</li>
        <li><strong>Deep Dermal Reach (Up to 8mm):</strong> Without full needle insertion, FractioPro reaches deeper layers for effective treatment of skin laxity, deep wrinkles, and midface sagging.</li>
        <li><strong>Full-Spectrum Rejuvenation:</strong> Beyond superficial improvement, FractioPro triggers long-term changes in skin density, texture, and tone—making it ideal for regenerative anti-aging.</li>
      </ul>`
    },
    benefits: [
      'Rebuilds collagen & elastin naturally',
      'Visibly firms sagging skin on cheeks, jawline, and under-eyes',
      'Smooths coarse texture, fine lines, and enlarged pores',
      'Improves overall tone, resilience, and radiance',
      'Supports HA stimulation for improved hydration and bounce',
      'Gentle, adaptable for various Fitzpatrick types'
    ],
    indications: [
      'Mature skin (>40 years old) showing visible signs of laxity & thinning',
      'Deep wrinkles, fine lines, and early jowling',
      'Uneven, rough skin texture due to age or environmental damage',
      'Dehydrated, crepey skin in areas like cheeks, lower face, and neck',
      'Patients looking for an elegant, regenerative alternative to surgical lifting'
    ],
    protocol: [
      { label: 'Protocol', value: '3–4 sessions spaced 4–6 weeks apart' },
      { label: 'Maintenance', value: '1–2 sessions yearly to preserve firmness' },
      { label: 'Downtime', value: 'Mild redness or warmth for 1–2 days' },
      { label: 'Prep', value: 'Discontinue retinoids and avoid sun 3 days before' },
      { label: 'Aftercare', value: 'Intense hydration + SPF protection for optimal healing' },
    ],
    whyLoveIt: [
      "Because skin after 40 deserves intelligent repair, not aggressive resurfacing. We treat aging as an evolution—not a flaw, and FractioPro embodies that philosophy: Restoring the skin’s quiet strength from within."
    ]
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
    ],
  },
  {
    id: 'gorgeous-lyft-rejuvenation',
    title: 'Altruva Gorgeous Lyft by dr. Aldisa',
    description: 'Injectable liquid type biostimulators for strong collagen restoration.',
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
      { label: 'Technique', value: '5–7 injection points using micro-needle or cannula, depending on face type' },
      { label: 'Aftercare', value: 'Avoid excessive facial movement or massage for 24–48 hours' },
      { label: 'Redness or swelling', value: 'typically subsides within 1–3 days' }
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
    longDescription: 'Altruva Regenerative RF is a needle-free, non-invasive RF-based skin rejuvenation treatment designed specifically for individuals over 40 who are experiencing visible signs of aging—such as sagging skin, fine lines, enlarged pores, and texture loss. Utilizing Exion™ Radiofrequency + Targeted Ultrasound technology, this treatment works deep within the dermis to stimulate collagen, elastin, and hyaluronic acid synthesis, restoring youthful density and definition to mature skin.<br/><br/>This is regenerative science meeting natural elegance.',
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
      'Improves skin density and elasticity',
      'Refines texture and minimizes pores',
      'Enhances skin hydration and glow',
      'Safe for all skin tones',
      'Minimal to zero downtime'
    ],
    indications: [
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
    ],
    whyLoveIt: [
      `“Aging skin doesn’t need to be fought—it needs to be regenerated. With Altruva Regenerative RF, we respect your skin’s biology and help it perform at its best.” — dr. Olivia Aldisa, Medical Director & Global Regenerative Aesthetic KOL`
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
    subgroup: 'Signature Restoration',
    subtitle: 'Regenerative Sculpting. Intelligent Precision.',
    longDescription: `Altruva Cocktail Contouring is an advanced, physician-personalized facial harmonization protocol that synergizes the volumizing structure of hyaluronic acid (HA) fillers with the collagen-stimulating power of calcium hydroxylapatite (CaHA). This hybrid regenerative approach is ideal for those seeking natural-looking contouring, fat repositioning, and bioactive lifting — without the heaviness or overfilled appearance often associated with traditional volumizing methods.<br/><br/>Inspired and developed from the pioneering methodologies of dr. Jani van Loghem (The Netherlands) and honed under the UMA Academy, this protocol is exclusively delivered by dr. Olivia Aldisa, reflecting her commitment to anatomical precision and cellular-level rejuvenation.`,
    whatIsIt: {
      title: 'What Is Cocktail Contouring?',
      description: `Cocktail Contouring refers to the intelligent layering and combination of:<br/><ul class="list-disc pl-5 mt-2 space-y-1"><li><strong>CaHA (Calcium Hydroxylapatite):</strong> A biostimulatory filler that acts like a scaffold, triggering collagen and elastin synthesis while offering subtle structure.</li><li><strong>HA (Hyaluronic Acid):</strong> A hydrophilic volumizer that enhances facial contours, corrects asymmetries, and refines projection—delivering immediate, natural results with reversibility when needed.</li></ul><p class="mt-2">These two technologies, when blended precisely, mimic natural fat pads, reposition volume, and revitalize the dermis without excessive projection or puffiness.</p>`
    },
    benefits: [
      'Repositions deep fat pads without distortion',
      'Stimulates native collagen production for long-term lift and firmness',
      'Contours mid-face, jawline, and temple naturally',
      'Enhances structural integrity without overfilling',
      'Corrects asymmetries and restores facial balance',
      'Improves skin quality through dermal regeneration',
      'Suitable for under 40s looking for contour with minimal filler load',
      'Ideal for over 40s seeking regenerative contouring and volume repositioning',
    ],
    indications: [
      'Subtle mid-face contouring',
      'Jawline and chin refinement',
      'Temple hollow correction',
      'Volume descent or fat loss in dynamic zones',
      'Post-weight loss facial reshaping',
      'Early signs of skeletal shrinkage without need for invasive lifting',
    ],
    protocol: [
      { label: 'Protocol', value: '1 session with personalized mapping' },
      { label: 'Follow-up', value: '6–12 months' },
      { label: 'Stackable with', value: 'A.R.T Lift PRO, Altruva Youth Elixir, or Exion Fractio Pro' },
    ],
    whyLoveIt: [
      "This technique is refined under the mentorship of dr. Jani van Loghem—a global authority in aesthetic medicine known for developing advanced facial mapping systems, CaHA biostimulation protocols, and profile-balancing techniques. His mentorship through UMA Academy ensures that every Altruva Cocktail Contouring procedure reflects the highest international standards of safety, anatomy, and regenerative results."
    ],
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
    subgroup: 'Signature Restoration',
    subtitle: "Volume Reclaimed. Contours Reawakened. Elegantly Executed by dr. Aldisa",
    longDescription: `Aging is not just about wrinkles — it’s about deflation, descent, and disruption of volume harmony. Altruva Dermal Filler Pro is an advanced volumization protocol tailored for those over 40, where the priority shifts from enhancement to restoration.<br/><br/>Led by dr. Olivia Aldisa, a pioneer in regenerative and anatomical aesthetics, this protocol focuses on replacing structural volume loss, especially around the temples, forehead, midface, and preauricular zones, with sophisticated placement that respects your facial dynamics — never overfilling, never distorting.<br/><br/><i>“We’re not chasing youth — we’re restoring structure. When you lift the face the right way, you lift the spirit too.” — dr. Olivia Aldisa, Expert in Volumetric Harmony & Anatomical Restoration</i>`,
    whatIsIt: {
        title: 'The Methodology',
        description: `With Altruva Dermal Filler Pro, dr. Aldisa maps the entire facial framework, identifying where volume has been lost and how to rebuild with tastefully conservative doses, using:<br/><ul class="list-disc pl-5 mt-2 space-y-1"><li><strong>Dynamic HA Fillers:</strong> Only premium, FDA-approved fillers with optimal tissue integration, elasticity, and safety profiles</li><li><strong>Microcannula & Needle Strategy:</strong> Safe and precise delivery based on vascular maps and anatomical zones</li><li><strong>Fat Pad Mapping:</strong> Volume is replaced according to fat compartment anatomy for predictable, natural lift</li><li><strong>Tissue Behavior Analysis:</strong> Ensures movement remains dynamic — never stiff or “stuffed”</li></ul>`
    },
    howItDiffers: "This isn't just about filling lines; it's about architectural restoration. For mature skin, filler placement must follow different principles: balance, support, and restraint. Restoring this scaffolding amplifies the effects of other treatments like lasers, threads, and collagen-stimulators.",
    benefits: [
      'Restores youthful curves and volume without puffiness',
      'Reduces shadowing that contributes to a tired appearance',
      'Lifts and supports surrounding tissues through volumetric anchoring',
      'Rejuvenates high-risk zones like temples and forehead safely',
      'Enhances harmony between upper, mid, and lower face',
      'Rebuilds confidence with visible, yet undetectable change'
    ],
    indications: [
      'Temples: Correct hollowing that creates shadowing and skeletal contours',
      'Forehead: Restore gentle convexity and correct bony exposure or contour dips',
      'Midface: Rebuild deep medial cheek fat and support tear trough integrity',
      'Preauricular/Lower Face: Smooth hollowing, replenish lateral support, and contour jawline without heaviness',
      'Chin & Perioral: Address perioral collapse and restore vertical height when needed'
    ],
    protocol: [
        { label: 'Duration', value: '45–75 minutes' },
        { label: 'Downtime', value: 'Minimal; mild swelling or bruising possible' },
        { label: 'Results', value: 'Immediate soft volume; peak in 1–2 weeks' },
        { label: 'Longevity', value: '12–18 months, depending on area & product' },
        { label: 'Method', value: 'Microcannula and/or needle' },
        { label: 'Ideal For', value: 'Volume loss, hollow temples, forehead dips, soft midface support' },
        { label: 'Complementary To', value: 'Sofwave, collagen biostimulators, skinboosters' },
    ]
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
    subgroup: 'Signature Restoration',
    subtitle: "Total Muscle Harmony. Signature Precision. By dr. Aldisa.",
    longDescription: `Altruva Face Modulator (Full Dose) is a full-spectrum neuromodulation protocol that redefines facial freshness through strategic, personalized botulinum toxin mapping. Engineered for those over 40, this treatment is not about freezing expression — it’s about resetting facial balance, lifting fatigue, and restoring dynamic symmetry with natural grace.<br/><br/>Dr. Aldisa applies her expertise in facial anatomy, aging patterns, and personalized dosing to harmonize muscle activity across the face — from frown lines and jaw tension to brow positioning and perioral movement. The result? A refreshed, rested, and refined look that feels like you — only better.<br/><br/><i>“Expression is human. Modulation is art. My role is to enhance your face’s natural rhythm — not mute it.” — dr. Olivia Aldisa, Architect of Altruva Face Modulator</i>`,
    whatIsIt: {
      title: "How It Works",
      description: `<p class="mb-2">Utilizing full-dose botulinum toxin, dr. Aldisa performs full-face mapping to:</p>
      <ul class="list-disc pl-5 space-y-1">
        <li><strong>Modulate muscle tone</strong> contributing to fatigue, imbalance, or aged expressions</li>
        <li><strong>Lift areas prone to descent</strong> without the heaviness of dermal filler</li>
        <li><strong>Reset overused muscles</strong> for a more neutral, rested facial state</li>
      </ul>
      <p class="mt-4">This protocol supports muscle balance, not paralysis — delivering a naturally lifted, refreshed result with smooth transitions and intentional preservation of character lines when desired.</p>`
    },
    howItDiffers: `Why Full Dose? Post-40 facial shifts deepen lines and create downward vectors; full-dose modulation reverses this. Comprehensive mapping enables precise targeting of asymmetry and tension. This is a bespoke neuromodulation blueprint, where every injection serves a purpose in the harmony of your facial expression.`,
    benefits: [
      'Custom eyebrow lifting without “surprised” brows',
      'Reduces tired or tense look around the eyes',
      'Softens static and dynamic wrinkles (glabella, forehead, crow’s feet)',
      'Refines jawline and smooths neck bands',
      'Reduces downward pull around mouth and chin',
      'Delivers balanced muscle tone for long-term facial wellness',
      'Maintains expression integrity — no “overdone” look'
    ],
    indications: [
      'Women and men >40 seeking refreshed, lifted, yet natural expression',
      'Facial asymmetry or signs of muscular imbalance',
      'Long-term neuromodulator users ready for elevated customization',
      'Patients desiring facial lifting without fillers or surgery',
    ],
    protocol: [
      { label: 'Duration', value: '20–30 minutes' },
      { label: 'Downtime', value: 'Minimal (some bruising possible)' },
      { label: 'Onset', value: '5–7 days, with full results in 10–14 days' },
      { label: 'Longevity', value: '3–5 months (patient-dependent)' },
    ]
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
    subgroup: 'Advanced Restoration',
    subtitle: 'Activate Dormant Follicles. Regrow What’s Yours — Naturally.',
    longDescription: 'Altruva Micrograft Technology is a cutting-edge autologous cellular regeneration treatment that utilizes your own biological blueprint to restore thinning hair and enhance follicular vitality — without surgery, foreign substances, or downtime.<br/><br/>This next-generation hair rejuvenation protocol isolates progenitor cells, growth factors, and regenerative matrices from your own scalp tissue and reintroduces them into thinning zones — where they reawaken dormant follicles, improve scalp microcirculation, and lay the foundation for thicker, denser, and more resilient hair.',
    whatIsIt: {
      title: 'How It Works: From You, For You',
      description: `<ol class="list-decimal pl-5 space-y-2">
        <li><strong class="text-primary">Tissue Harvesting:</strong> A small punch biopsy (usually from the occipital scalp) is taken — typically less than 2.5mm, requiring no sutures.</li>
        <li><strong class="text-primary">Cellular Isolation:</strong> Using sterile, closed-loop processing, the tissue is gently fragmented to release a regenerative blend of:
          <ul class="list-disc pl-5 mt-1">
            <li>Progenitor cells</li>
            <li>Fibroblasts</li>
            <li>Growth factors</li>
            <li>Extracellular matrix fragments</li>
          </ul>
        </li>
        <li><strong class="text-primary">Precision Injection:</strong> This bioactive micrograft suspension is then re-injected into areas of thinning, typically the frontal, temporal, and crown regions.</li>
        <li><strong class="text-primary">Regeneration Begins:</strong> These cells work to stimulate angiogenesis, revive follicular niches, and rebalance the hair cycle — from resting (telogen) back to growing (anagen).</li>
      </ol>`
    },
    benefits: [
      '100% from your body. No chemicals. No risk of rejection.',
      'Particularly effective in early to moderate androgenetic alopecia.',
      'Especially beneficial for miniaturized or inactive follicles.',
      'Return to daily activities almost immediately after the procedure.',
      'Amplify results with oral nutricosmetics, hair serums, LLLT (laser caps), or RF microneedling.'
    ],
    protocol: [
      { label: 'Duration', value: '45–60 minutes (including harvest + injection)' },
      { label: 'Downtime', value: 'Minimal – mild sensitivity for 24–48 hrs' },
      { label: 'Sessions', value: '1–2 yearly for maintenance (based on severity)' },
      { label: 'Results', value: 'Visible improvements from 2–3 months onward' },
      { label: 'Ideal For', value: 'Early to moderate hair thinning, both men and women' },
      { label: 'Not Ideal For', value: 'Complete bald areas or scarred scalp zones' },
    ],
    whyLoveIt: [
      'Each Altruva Micrograft treatment is mapped and performed by dr. Olivia Aldisa, ensuring targeted precision and optimal integration with your scalp’s vascular pattern and follicular anatomy.',
      '<i>“We’re no longer just trying to cover thinning — we’re going upstream to biologically revive the scalp itself.”</i> — dr. Olivia Aldisa, Regenerative Strategist & Founder of Altruva'
    ]
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
    subgroup: 'Growth Boosters',
    subtitle: "Awaken Your Follicles. Heal From Within.",
    longDescription: `Altruva Hair PRF is a powerful regenerative scalp therapy that leverages your body’s own healing intelligence to restore thinning hair, reduce shedding, and improve scalp vitality — all without synthetic additives or foreign substances.<br/><br/>Using Platelet-Rich Fibrin (PRF) — a second-generation regenerative concentrate rich in growth factors, fibrin scaffolds, white blood cells, and stem-like cells — this treatment reactivates dormant follicles and amplifies the scalp’s microenvironment for healthy, resilient hair regrowth.<br/><br/>Curated by dr. Olivia Aldisa, this protocol is ideal for both men and women experiencing early to moderate hair thinning, especially in androgenetic alopecia.`,
    whatIsIt: {
      title: "What is PRF (Platelet-Rich Fibrin)?",
      description: `Unlike traditional PRP, PRF is spun at a lower centrifugation speed and contains no anticoagulants, allowing for:
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>A natural fibrin matrix that acts as a scaffold for cell signaling</li>
        <li>Slow, sustained release of growth factors for prolonged stimulation</li>
        <li>Higher concentrations of platelets, leukocytes, and CD34+ cells (progenitor-like stem cells)</li>
      </ul>`
    },
    howItDiffers: "PRF is spun at a lower centrifugation speed without anticoagulants, creating a natural fibrin matrix that allows for a slow, sustained release of growth factors over several days. This is in contrast to PRP, which provides a quick burst. PRF also contains a higher concentration of beneficial cells, making it a more advanced regenerative option.",
    mechanism: [
      { title: 'Blood Collection', description: 'A small blood sample is drawn in a special PRF tube.' },
      { title: 'Centrifugation', description: 'The sample is spun gently to separate components while preserving cellular integrity.' },
      { title: 'Injection Into the Scalp', description: 'The golden PRF layer is injected precisely into areas of thinning.' },
      { title: 'Gradual Activation', description: 'The fibrin matrix releases potent growth signals over several days, rejuvenating hair follicles and improving tissue oxygenation.' }
    ],
    benefits: [
      'Thicker Hair Shafts: Encourages stronger, denser regrowth',
      'Slows Hair Loss: Reduces miniaturization and active shedding',
      'Boosts Scalp Circulation: Enhances delivery of oxygen and nutrients',
      'Improves Scalp Health: Anti-inflammatory and reparative for compromised scalps',
      'Completely Natural: No foreign substances, additives, or medications'
    ],
    protocol: [
      { label: 'Duration', value: '30–45 minutes' },
      { label: 'Downtime', value: 'None (mild tenderness for 1–2 days possible)' },
      { label: 'Sessions', value: '3–4 sessions, spaced 4–6 weeks apart' },
      { label: 'Maintenance', value: '1–2 times yearly for sustained results' },
      { label: 'Ideal For', value: 'Men and women with mild to moderate hair thinning' }
    ],
    whyLoveIt: [
      'Each session is mapped and executed by dr. Olivia Aldisa, who applies her expertise in aesthetic regenerative medicine to ensure precision delivery and custom dosage based on the patient’s needs.',
      '<i>“Hair loss isn’t always about genetics. Sometimes, it’s about giving your follicles the right environment to thrive. And that’s exactly what we do with PRF.”</i> — dr. Olivia Aldisa, Aesthetic Regeneration Specialist'
    ]
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
      { text: "I want to firm up some areas and to reduce pigmentation or early sagging", score: 2 },
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


    

    



    

















