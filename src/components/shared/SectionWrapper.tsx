
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements; // Allow specifying the HTML element type
  id?: string;
  style?: React.CSSProperties; // Added style prop
}

export default function SectionWrapper({ children, className, as: Component = 'section', id, style }: SectionWrapperProps) {
  return (
    <Component id={id} className={cn("py-12 md:py-20", className)} style={style}>
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </Component>
  );
}
