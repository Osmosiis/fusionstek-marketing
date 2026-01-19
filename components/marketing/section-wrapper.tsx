"use client";

import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface SectionWrapperProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  id?: string;
}

export function SectionWrapper({
  title,
  subtitle,
  children,
  className,
  titleClassName,
  subtitleClassName,
  id,
}: SectionWrapperProps) {
  const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal();
  const { ref: contentRef, isRevealed: contentRevealed } = useScrollReveal();

  return (
    <section 
      id={id}
      className={cn(
        "py-20 md:py-32 relative",
        className
      )}
    >
      {/* Gradient backdrop that allows 3D effect to show through */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/40 via-[var(--background)]/60 to-[var(--background)]/40" />
      
      {/* Subtle top border gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[var(--border)] to-transparent z-10" />
      
      <div className="container relative z-10">
        {(title || subtitle) && (
          <div 
            ref={headerRef}
            className={cn(
              "text-center mb-16 md:mb-20",
              "opacity-0 translate-y-6",
              headerRevealed && "animate-[reveal-up_0.7s_cubic-bezier(0.16,1,0.3,1)_forwards]"
            )}
          >
            {title && (
              <h2
                className={cn(
                  "font-sentient text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight mb-4",
                  "text-[var(--foreground)]",
                  titleClassName
                )}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={cn(
                  "text-[var(--neutral-400)] text-base md:text-lg max-w-xl mx-auto leading-relaxed",
                  subtitleClassName
                )}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div 
          ref={contentRef}
          className={cn(
            "opacity-0 translate-y-6",
            contentRevealed && "animate-[reveal-up_0.7s_cubic-bezier(0.16,1,0.3,1)_0.15s_forwards]"
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
