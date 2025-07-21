// src/components/layout/FloatingWhatsAppButton.tsx
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react'; // Using a reliable icon from lucide
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useEffect, useState } from 'react';

export default function FloatingWhatsAppButton() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  
  const phoneNumber = "6281216119392";
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button
              variant="default"
              size="icon"
              className="fixed bottom-[100px] right-6 h-14 w-14 rounded-full shadow-xl z-50 bg-green-500 hover:bg-green-600"
              aria-label="Contact us on WhatsApp"
            >
              <MessageCircle className="h-7 w-7 text-white" fill="white" />
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
