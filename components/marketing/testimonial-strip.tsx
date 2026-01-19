"use client";

import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

interface TestimonialStripProps {
  testimonials: Testimonial[];
  className?: string;
}

export function TestimonialStrip({
  testimonials,
  className,
}: TestimonialStripProps) {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <div 
      ref={ref}
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
        className
      )}
    >
      {testimonials.map((testimonial, index) => (
        <div 
          key={index} 
          className={cn(
            "group relative p-6 md:p-8",
            "bg-[var(--card-bg)] rounded-xl",
            "border border-[var(--border)]",
            "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            "hover:bg-[var(--card-bg-hover)]",
            "hover:border-[var(--border-hover)]",
            "opacity-0 translate-y-4",
            isRevealed && "animate-[reveal-up_0.7s_cubic-bezier(0.16,1,0.3,1)_forwards]"
          )}
          style={{
            animationDelay: isRevealed ? `${index * 100}ms` : "0ms",
          }}
        >
          {/* Quote icon */}
          <Quote className="w-8 h-8 text-[var(--primary)]/20 mb-4" strokeWidth={1} />

          <p className="text-[var(--neutral-300)] text-sm leading-relaxed mb-6">
            &ldquo;{testimonial.quote}&rdquo;
          </p>

          <div className="pt-4 border-t border-[var(--border)]">
            <p className="font-medium text-sm text-[var(--foreground)]">
              {testimonial.author}
            </p>
            <p className="text-[var(--neutral-500)] text-xs mt-0.5">
              {testimonial.role} · {testimonial.company}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
