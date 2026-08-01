
import type { Metadata } from 'next';
import { Libre_Baskerville, Nunito_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from "@/components/ui/toaster";
import JsonLd from '@/components/shared/JsonLd';

import Script from 'next/script';

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre-baskerville',
});

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-nunito-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://altruva.co.id'),
  title: {
    default: 'Altruva Aesthetic Clinic - Regenerative Contouring in Jakarta',
    template: '%s | Altruva Aesthetic Clinic',
  },
  description: 'Discover premier regenerative & aesthetic treatments at Altruva Clinic Jakarta. Specializing in Sofwave, EmSculpt Neo, & Gouri led by dr. Olivia Aldisa.',
  keywords: 'aesthetic clinic jakarta, klinik kecantikan, regenerative contouring, dr olivia aldisa, sofwave, emsculpt neo, gouri, facial, skin treatment, Klinik kecantikan terbaik di Jakarta Selatan, Perawatan wajah glowing tanpa operasi, Harga treatment Sofwave di Jakarta, Perawatan anti aging terbaik 2025, Perawatan pori-pori besar yang aman, Treatment melasma efektif dan aman, Body contouring non-surgery Jakarta, Skin booster terbaik untuk glowing, Klinik estetika dengan dokter berpengalaman, Rekomendasi klinik aesthetic premium di Indonesia',
  icons: {
    icon: '/images/altruva.ico',
  },
  openGraph: {
    title: 'Altruva Aesthetic Clinic - Regenerative Contouring in Jakarta',
    description: 'Discover premier regenerative & aesthetic treatments at Altruva Clinic Jakarta. Specializing in Sofwave, EmSculpt Neo, & Gouri led by dr. Olivia Aldisa.',
    url: 'https://altruva.co.id',
    siteName: 'Altruva Aesthetic Clinic',
    images: [
      {
        url: '/images/herobackground-new.png',
        width: 1200,
        height: 630,
        alt: 'Altruva Aesthetic Clinic',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Altruva Aesthetic Clinic - Regenerative Contouring in Jakarta',
    description: 'Discover premier regenerative & aesthetic treatments at Altruva Clinic Jakarta. Specializing in Sofwave, EmSculpt Neo, & Gouri led by dr. Olivia Aldisa.',
    images: ['/images/herobackground-new.png'],
  },
};

const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": "https://altruva.co.id/#clinic",
  "name": "Altruva Aesthetic Clinic",
  "url": "https://altruva.co.id",
  "logo": "https://altruva.co.id/images/logoaltruvanew.webp",
  "image": "https://altruva.co.id/images/herobackground-new.png",
  "description": "Premier regenerative and aesthetic treatments clinic in Kebayoran Baru, Jakarta Selatan. Specializing in non-invasive procedures like Sofwave, EmSculpt Neo, and Gouri, led by dr. Olivia Aldisa.",
  "telephone": "+6281216119392",
  "email": "admin@altruva.co.id",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Ciasem I No.2 Kebayoran Baru",
    "addressLocality": "Jakarta Selatan",
    "addressRegion": "DKI Jakarta",
    "postalCode": "12180",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-6.2385236",
    "longitude": "106.80901"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Sunday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "founder": {
    "@type": "Person",
    "name": "dr. Olivia Aldisa",
    "jobTitle": "Aesthetic Doctor & Clinic Founder"
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Altruva Aesthetic Clinic",
  "url": "https://altruva.co.id"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Gunakan Google Analytics Measurement ID untuk Altruva (menggunakan env atau fallback default jika belum diset)
  const gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-K3L4EYNW4X';

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/images/logoaltruvanew.webp" as="image" fetchPriority="high" />
        {/* Google Analytics (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          libreBaskerville.variable,
          nunitoSans.variable
        )}
      >
        <JsonLd schema={[clinicSchema, websiteSchema]} />
        <NextTopLoader
          color="hsl(var(--primary))"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px hsl(var(--primary)), 0 0 5px hsl(var(--primary))"
        />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
