
import type { ReactNode } from 'react';

interface PageTitleProps {
  title: string;
  subtitle?: string | ReactNode;
  className?: string;
}

export default function PageTitle({ title, subtitle, className }: PageTitleProps) {
  return (
    <div className={`mb-8 md:mb-12 text-center ${className}`}>
      <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2 md:mb-3">
        {title}
      </h1>
      {subtitle && (
        typeof subtitle === 'string' ? (
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            {subtitle}
          </p>
        ) : (
          <div className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            {subtitle}
          </div>
        )
      )}
    </div>
  );
}
