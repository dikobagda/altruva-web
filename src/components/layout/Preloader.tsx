
// src/components/layout/Preloader.tsx

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
        <img
          src="/images/logoaltruvanew.png"
          alt="Altruva Logo"
          width="120"
          height="120"
          style={{ width: '120px', height: '120px' }}
          fetchPriority="high"
        />
      </div>
    </div>
  );
}
