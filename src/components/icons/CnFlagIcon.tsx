// src/components/icons/CnFlagIcon.tsx
import type { SVGProps } from 'react';

export function CnFlagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg 
      width="24" 
      height="16" 
      viewBox="0 0 30 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="30" height="20" fill="#DE2910"/>
      <path d="M5 5L3.09 6.235L3.694 3.927L1.789 2.765L4.142 2.618L5 0.5L5.858 2.618L8.211 2.765L6.306 3.927L6.91 6.235L5 5Z" fill="#FFDE00"/>
      <path d="M10 2L8.695 2.947L9.073 1.309L7.595 0.553L9.29 0.691L10 0L10.71 0.691L12.405 0.553L10.927 1.309L11.305 2.947L10 2Z" fill="#FFDE00" transform="rotate(20 10 2)"/>
      <path d="M12 5L10.695 5.947L11.073 4.309L9.595 3.553L11.29 3.691L12 3L12.71 3.691L14.405 3.553L12.927 4.309L13.305 5.947L12 5Z" fill="#FFDE00" transform="rotate(40 12 5)"/>
      <path d="M10 8L8.695 8.947L9.073 7.309L7.595 6.553L9.29 6.691L10 6L10.71 6.691L12.405 6.553L10.927 7.309L11.305 8.947L10 8Z" fill="#FFDE00" transform="rotate(-25 10 8)"/>
    </svg>
  );
}
