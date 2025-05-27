// src/components/icons/UkFlagIcon.tsx
import type { SVGProps } from 'react';

export function UkFlagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg 
      width="24" 
      height="18" 
      viewBox="0 0 24 18" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="24" height="18" fill="#012169"/>
      <path d="M0 0L24 18M24 0L0 18" stroke="white" strokeWidth="3.6"/>
      <path d="M0 0L24 18M24 0L0 18" stroke="#C8102E" strokeWidth="2.4"/>
      <path d="M12 0V18M0 9H24" stroke="white" strokeWidth="6"/>
      <path d="M12 0V18M0 9H24" stroke="#C8102E" strokeWidth="3.6"/>
    </svg>
  );
}
