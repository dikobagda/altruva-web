// src/components/icons/IdFlagIcon.tsx
import type { SVGProps } from 'react';

export function IdFlagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="16"
      viewBox="0 0 3 2" // Simplified viewBox for 3:2 aspect ratio
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="3" height="1" fill="#CE1126"/> {/* Red part */}
      <rect y="1" width="3" height="1" fill="#FFFFFF"/> {/* White part */}
    </svg>
  );
}
