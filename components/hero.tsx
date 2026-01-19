"use client";

import { GL } from "./gl";
import { Pill } from "./pill";
import { useState, useEffect } from "react";
import { CTAButton } from "./marketing/cta-button";
import { cn } from "@/lib/utils";

export function Hero() {
  const [hovering, setHovering] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className="relative flex flex-col h-svh justify-end pb-20 md:pb-24"
      suppressHydrationWarning
    >
      <GL hovering={hovering} />

      {/* Content */}
      <div className="relative z-10 container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Pill badge */}
          <div 
            className={cn(
              "opacity-0 translate-y-4",
              mounted && "animate-[reveal-up_0.8s_cubic-bezier(0.16,1,0.3,1)_0.2s_forwards]"
            )}
          >
            <Pill className="mb-8">CYBERSECURITY SOLUTIONS</Pill>
          </div>

          {/* Headline */}
          <h1 
            className={cn(
              "font-sentient text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight tracking-tight leading-[0.95]",
              "opacity-0 translate-y-4",
              mounted && "animate-[reveal-up_0.8s_cubic-bezier(0.16,1,0.3,1)_0.35s_forwards]"
            )}
          >
            <span className="block">Advanced</span>
            <span className="block">
              <em className="font-light italic text-[var(--neutral-400)]">Security</em>{" "}
              Protection
            </span>
          </h1>

          {/* Subheadline */}
          <p 
            className={cn(
              "mt-8 md:mt-10 text-sm md:text-base text-[var(--neutral-400)] max-w-md mx-auto leading-relaxed",
              "opacity-0 translate-y-4",
              mounted && "animate-[reveal-up_0.8s_cubic-bezier(0.16,1,0.3,1)_0.5s_forwards]"
            )}
          >
            Protect your digital infrastructure with cutting-edge malware detection 
            and domain security assessment
          </p>

          {/* CTAs */}
          <div 
            className={cn(
              "flex flex-col sm:flex-row gap-4 justify-center mt-12 md:mt-14",
              "opacity-0 translate-y-4",
              mounted && "animate-[reveal-up_0.8s_cubic-bezier(0.16,1,0.3,1)_0.65s_forwards]"
            )}
          >
            <CTAButton
              href="/demo"
              variant="primary"
              size="lg"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              Book a Demo
            </CTAButton>
            <CTAButton
              href="/how-it-works"
              variant="secondary"
              size="lg"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              Learn More
            </CTAButton>
          </div>

          {/* Scroll indicator - positioned within the content flow */}
          <div 
            className={cn(
              "mt-16 md:mt-20",
              "opacity-0",
              mounted && "animate-[reveal-fade_1s_cubic-bezier(0.16,1,0.3,1)_1.5s_forwards]"
            )}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] uppercase tracking-widest text-[var(--neutral-500)]">
                Scroll
              </span>
              <div className="w-[1px] h-8 bg-gradient-to-b from-[var(--neutral-500)] to-transparent animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
