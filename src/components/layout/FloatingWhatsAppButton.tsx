
// src/components/layout/FloatingWhatsAppButton.tsx
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface FloatingWhatsAppButtonProps {
  size?: 'default' | 'large';
}

export default function FloatingWhatsAppButton({ size = 'default' }: FloatingWhatsAppButtonProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  
  const phoneNumber = "6281216119392";
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  const sizeClasses = {
    default: 'h-14 w-14 p-3',
    large: 'h-16 w-16 p-4', // Larger size
  };

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button
              variant="default"
              size="icon"
              className={cn(
                "fixed bottom-[100px] right-6 rounded-full shadow-xl z-50",
                sizeClasses[size]
              )}
              style={{ backgroundColor: '#3ea81f' }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#35931a')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#3ea81f')}
              aria-label="Contact us on WhatsApp"
            >
              <Image 
                src="/images/whatsapp.png" 
                alt="WhatsApp Icon" 
                width={40} 
                height={40} 
                className="object-contain"
              />
            </Button>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-primary text-primary-foreground">
          <p>Chat on WhatsApp</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
