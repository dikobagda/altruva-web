
import type { Metadata } from 'next';
import { Libre_Baskerville, Nunito_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import NextTopLoader from 'nextjs-toploader';
import Script from 'next/script';

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre-baskerville',
});

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300'], // Nunito Sans Light
  variable: '--font-nunito-sans',
});

export const metadata: Metadata = {
  title: 'Altruva Aesthetic Clinic - Regenerative Contouring in Jakarta',
  description: 'Discover premier regenerative and aesthetic treatments at Altruva Clinic in Jakarta. Specializing in non-invasive procedures like Sofwave, EmSculpt Neo, and Gouri, led by dr. Olivia Aldisa.',
  keywords: 'aesthetic clinic jakarta, klinik kecantikan, regenerative contouring, dr olivia aldisa, sofwave, emsculpt neo, gouri, facial, skin treatment, Klinik kecantikan terbaik di Jakarta Selatan, Perawatan wajah glowing tanpa operasi, Harga treatment Sofwave di Jakarta, Perawatan anti aging terbaik 2025, Perawatan pori-pori besar yang aman, Treatment melasma efektif dan aman, Body contouring non-surgery Jakarta, Skin booster terbaik untuk kulit glowing, Klinik estetika dengan dokter berpengalaman, Rekomendasi klinik aesthetic premium di Indonesia',
  icons: {
    icon: '/images/altruva.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-M5XNZWDJ');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body 
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          libreBaskerville.variable, 
          nunitoSans.variable
        )}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M5XNZWDJ"
        height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        {/* End Google Tag Manager (noscript) */}

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
        
        {/* Google Analytics */}
        <Script 
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-58LTL5Q4HE"
        />
        <Script 
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-58LTL5Q4HE');
          `}
        </Script>
      </body>
    </html>
  );
}
