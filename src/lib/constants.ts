
import type { LucideIcon } from 'lucide-react';
import { HeartPulse, SprayCan, Sun, Droplets, Bot, HelpCircle, MessageSquare, Star } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  price: string;
  Icon?: LucideIcon;
  imageSrc: string;
  imageHint: string;
}

export const services: Service[] = [
  {
    id: 'facial',
    title: 'Divine Glow Facial',
    description: 'Rejuvenate your skin with our signature facial treatment.',
    longDescription: 'Our Divine Glow Facial is a luxurious experience designed to cleanse, exfoliate, and nourish your skin, leaving it radiant and refreshed. Tailored to your specific skin type and concerns, this treatment includes a deep cleanse, gentle exfoliation, extractions if needed, a customized mask, and a relaxing facial massage. Ideal for all skin types seeking a healthy, luminous complexion.',
    price: '$150',
    Icon: HeartPulse,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'facial treatment'
  },
  {
    id: 'injections',
    title: 'Age-Defy Injections',
    description: 'Smooth fine lines and wrinkles for a youthful appearance.',
    longDescription: 'Combat the signs of aging with our expertly administered Age-Defy Injections. Using premium neurotoxins or dermal fillers, we target fine lines, wrinkles, and volume loss to restore a smoother, more youthful contour to your face. Our experienced practitioners ensure natural-looking results with minimal downtime. Consultation required to determine the best approach for your goals.',
    price: 'Starting at $300',
    Icon: SprayCan,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'cosmetic injection'
  },
  {
    id: 'laser',
    title: 'Laser Rejuvenation',
    description: 'Advanced laser treatments for skin resurfacing and tightening.',
    longDescription: 'Experience the transformative power of laser technology with our Laser Rejuvenation services. We offer a range of treatments to address concerns such as sun damage, uneven skin tone, texture irregularities, and skin laxity. Our state-of-the-art lasers stimulate collagen production and promote cellular renewal for firmer, smoother, and more even-toned skin. A series of treatments may be recommended for optimal results.',
    price: 'Varies',
    Icon: Sun,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'laser treatment'
  },
  {
    id: 'hydration',
    title: 'AquaBoost Hydration Therapy',
    description: 'Deeply hydrate and plump your skin for a dewy finish.',
    longDescription: 'Quench your skin\'s thirst with our AquaBoost Hydration Therapy. This intensive treatment infuses your skin with vital moisture and nutrients, improving elasticity, reducing the appearance of fine lines, and leaving your skin feeling soft, supple, and dewy. Perfect for dry, dehydrated, or travel-weary skin.',
    price: '$180',
    Icon: Droplets,
    imageSrc: 'https://placehold.co/600x400.png',
    imageHint: 'skin hydration'
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
      Icon: Star,
      title: "Custom Recommendations",
      description: "Get product and routine suggestions based on your unique needs."
    },
    {
      Icon: Sun,
      title: "Targeted Treatments",
      description: "Discover suitable treatments for your specific skin concerns."
    }
];
