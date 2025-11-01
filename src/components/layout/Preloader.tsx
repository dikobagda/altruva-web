
// src/components/layout/Preloader.tsx
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface PreloaderProps {
  isLoading: boolean;
}

export default function Preloader({ isLoading }: PreloaderProps) {
  return (
    <div
      className={cn(
        'preloader fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-1000',
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <div className="logo-container">
        <Image
          src="/images/altruvanew.png"
          alt="Altruva Logo"
          width={120}
          height={120}
          priority
        />
      </div>
    </div>
  );
}
