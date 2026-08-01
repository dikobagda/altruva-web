
import React, { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageTitleProps {
  title: string;
  subtitle?: string | ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
}

const PageTitle = React.memo(function PageTitle({ title, subtitle, className, as = 'h2' }: PageTitleProps) {
  const HeadingTag = as;
  return (
    <div className={cn("pt-8 mb-8 md:mb-12 text-center", className)}>
      <HeadingTag className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2 md:mb-3">
        {title}
      </HeadingTag>
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
});

PageTitle.displayName = 'PageTitle';
export default PageTitle;
