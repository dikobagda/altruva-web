// src/components/icons/AltruvaLogoIcon.tsx
import type { SVGProps } from 'react';

// This is a simplified representation of the Altruva logo's sunburst/eye element.
// It uses a central filled dot and 8 main rays + 8 shorter intermediate rays for a sun-like appearance.
export function AltruvaLogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5" // Adjusted for a slightly more delicate look like the logo
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="1.25" fill="currentColor" stroke="none" />
      {/* 8 Main Rays */}
      <line x1="12" y1="3" x2="12" y2="6.5" /> {/* N */}
      <line x1="12" y1="17.5" x2="12" y2="21" /> {/* S */}
      <line x1="3" y1="12" x2="6.5" y2="12" /> {/* W */}
      <line x1="17.5" y1="12" x2="21" y2="12" /> {/* E */}
      <line x1="5.4" y1="5.4" x2="7.8" y2="7.8" /> {/* NW */}
      <line x1="16.2" y1="16.2" x2="18.6" y2="18.6" /> {/* SE */}
      <line x1="5.4" y1="18.6" x2="7.8" y2="16.2" /> {/* SW */}
      <line x1="16.2" y1="7.8" x2="18.6" y2="5.4" /> {/* NE */}
      
      {/* 8 Shorter Intermediate Rays, slightly thinner */}
      <line x1="12 - 4.59*0.707" y1="12 - 4.59*0.707" x2="12 - 6.36*0.707" y2="12 - 6.36*0.707" strokeWidth="1.2" /> {/* NNW relative (angle 22.5 deg from N) */}
      <line x1="12 + 4.59*0.707" y1="12 - 4.59*0.707" x2="12 + 6.36*0.707" y2="12 - 6.36*0.707" strokeWidth="1.2" /> {/* NNE relative */}
      <line x1="12 - 4.59*0.707" y1="12 + 4.59*0.707" x2="12 - 6.36*0.707" y2="12 + 6.36*0.707" strokeWidth="1.2" /> {/* SSW relative */}
      <line x1="12 + 4.59*0.707" y1="12 + 4.59*0.707" x2="12 + 6.36*0.707" y2="12 + 6.36*0.707" strokeWidth="1.2" /> {/* SSE relative */}

      <line x1="12 - 4.59" y1="12" x2="12 - 6.36" y2="12" transform="rotate(22.5 12 12)" strokeWidth="1.2"/>
      <line x1="12 - 4.59" y1="12" x2="12 - 6.36" y2="12" transform="rotate(67.5 12 12)" strokeWidth="1.2"/>
      <line x1="12 - 4.59" y1="12" x2="12 - 6.36" y2="12" transform="rotate(112.5 12 12)" strokeWidth="1.2"/>
      <line x1="12 - 4.59" y1="12" x2="12 - 6.36" y2="12" transform="rotate(157.5 12 12)" strokeWidth="1.2"/>
    </svg>
  );
}
// Note: The intermediate rays are approximated using rotation for simplicity.
// A more precise SVG would involve more complex path data to match the original logo perfectly.
// This version aims for a recognizable sunburst/eye motif.
// Manually calculating all 16 unique line endpoints for intermediate rays for static SVG:
// For 16 rays in total (8 long, 8 short):
// Short rays at 22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5 degrees
// Long rays at 0, 45, 90, 135, 180, 225, 270, 315 degrees
// The above SVG uses 8 main rays (like Sun icon) and then attempts to add 8 intermediate ones using transform, which is not ideal for static SVGs.
// A better static SVG for 16 rays:
/*
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="1.25" fill="currentColor" stroke="none"/>
  <line x1="12" y1="3" x2="12" y2="6.5"/> // N
  <line x1="17.31" y1="6.69" x2="19.07" y2="4.93"/> // NNE (approx 22.5 deg from Y axis)
  <line x1="18.6" y1="5.4" x2="16.2" y2="7.8"/> // NE
  <line x1="19.07" y1="8.93" x2="17.31" y2="10.69"/> // ENE
  <line x1="21" y1="12" x2="17.5" y2="12"/> // E
  <line x1="19.07" y1="15.07" x2="17.31" y2="13.31"/> // ESE
  <line x1="18.6" y1="18.6" x2="16.2" y2="16.2"/> // SE
  <line x1="17.31" y1="17.31" x2="19.07" y2="19.07"/> // SSE
  <line x1="12" y1="21" x2="12" y2="17.5"/> // S
  <line x1="6.69" y1="17.31" x2="4.93" y2="19.07"/> // SSW
  <line x1="5.4" y1="18.6" x2="7.8" y2="16.2"/> // SW
  <line x1="4.93" y1="15.07" x2="6.69" y2="13.31"/> // WSW
  <line x1="3" y1="12" x2="6.5" y2="12"/> // W
  <line x1="4.93" y1="8.93" x2="6.69" y2="10.69"/> // WNW
  <line x1="5.4" y1="5.4" x2="7.8" y2="7.8"/> // NW
  <line x1="6.69" y1="6.69" x2="4.93" y2="4.93"/> // NNW
</svg>
*/
// Using the 8-ray Sun-like version for simplicity and clarity as an icon:
export function AltruvaLogoIconClean(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <path d="M12 3V6.5" />
      <path d="M12 17.5V21" />
      <path d="M5.4 5.4L7.8 7.8" />
      <path d="M16.2 16.2L18.6 18.6" />
      <path d="M3 12H6.5" />
      <path d="M17.5 12H21" />
      <path d="M5.4 18.6L7.8 16.2" />
      <path d="M16.2 7.8L18.6 5.4" />
    </svg>
  );
}

// Default export will be the clean version
export { AltruvaLogoIconClean as AltruvaLogoIcon };
