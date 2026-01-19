"use client";

import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface Step {
  number: number;
  title: string;
  description: string;
}

interface StepStripProps {
  steps: Step[];
  className?: string;
}

export function StepStrip({ steps, className }: StepStripProps) {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <div 
      ref={ref}
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6",
        className
      )}
    >
      {steps.map((step, index) => (
        <div 
          key={step.number} 
          className={cn(
            "group relative",
            "opacity-0 translate-y-6",
            isRevealed && "animate-[reveal-up_0.7s_cubic-bezier(0.16,1,0.3,1)_forwards]"
          )}
          style={{
            animationDelay: isRevealed ? `${index * 100}ms` : "0ms",
          }}
        >
          {/* Connecting line for desktop */}
          {index < steps.length - 1 && (
            <div className="hidden lg:block absolute top-7 left-[56px] right-0 h-[1px]">
              <div 
                className={cn(
                  "h-full bg-gradient-to-r from-[var(--primary)]/30 to-transparent",
                  "origin-left scale-x-0 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  isRevealed && "scale-x-100"
                )}
                style={{
                  transitionDelay: isRevealed ? `${(index + 1) * 200}ms` : "0ms",
                }}
              />
            </div>
          )}

          <div className="flex items-start gap-5">
            {/* Step number */}
            <div className="relative flex-shrink-0">
              <div className={cn(
                "w-14 h-14 rounded-full flex items-center justify-center",
                "bg-[var(--card-bg)] border border-[var(--border)]",
                "transition-all duration-500",
                "group-hover:border-[var(--primary)]/50 group-hover:bg-[var(--primary)]/5"
              )}>
                <span className="font-mono text-lg font-medium text-[var(--primary)]">
                  {String(step.number).padStart(2, '0')}
                </span>
              </div>
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-full bg-[var(--primary)]/20 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>

            {/* Content */}
            <div className="flex-1 pt-2">
              <h3 className="text-base font-semibold mb-2 text-[var(--foreground)] tracking-tight">
                {step.title}
              </h3>
              <p className="text-[var(--neutral-400)] text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
