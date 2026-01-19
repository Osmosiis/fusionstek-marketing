"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function PageHero({ title, subtitle, className }: PageHeroProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className={cn("relative pt-32 pb-20 md:pt-40 md:pb-28", className)}>
      {/* Semi-transparent backdrop */}
      <div className="absolute inset-0 bg-[var(--background)]/60 backdrop-blur-sm" />
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1
            className={cn(
              "font-sentient text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight mb-6",
              "opacity-0 translate-y-4",
              mounted && "animate-[reveal-up_0.8s_cubic-bezier(0.16,1,0.3,1)_0.1s_forwards]"
            )}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={cn(
                "text-[var(--neutral-400)] text-lg md:text-xl leading-relaxed",
                "opacity-0 translate-y-4",
                mounted && "animate-[reveal-up_0.8s_cubic-bezier(0.16,1,0.3,1)_0.25s_forwards]"
              )}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
