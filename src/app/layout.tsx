import type { Metadata } from 'next';
import { Libre_Baskerville, Nunito_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';

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
  title: 'Altruva - Aesthetic Clinic',
  description: 'Welcome to Altruva, your partner in aesthetic transformations.',
  // Removed placeholder favicon
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          libreBaskerville.variable, 
          nunitoSans.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
