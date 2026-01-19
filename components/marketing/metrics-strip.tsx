"use client";

import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useEffect, useState, useRef } from "react";

interface Metric {
  value: string;
  label: string;
  description?: string;
}

interface MetricsStripProps {
  metrics: Metric[];
  className?: string;
}

// Simple number animation hook
function useCountUp(end: string, isVisible: boolean, duration: number = 2000) {
  const [displayValue, setDisplayValue] = useState("0");
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    // Extract number and suffix
    const match = end.match(/^([<>]?)(\d+(?:\.\d+)?)(.*)/);
    if (!match) {
      setDisplayValue(end);
      return;
    }

    const [, prefix, numStr, suffix] = match;
    const endNum = parseFloat(numStr);
    const hasDecimal = numStr.includes('.');
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentNum = endNum * easeProgress;

      if (progress < 1) {
        setDisplayValue(
          `${prefix}${hasDecimal ? currentNum.toFixed(1) : Math.floor(currentNum)}${suffix}`
        );
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, isVisible, duration]);

  return displayValue;
}

function MetricItem({ metric, index, isVisible }: { metric: Metric; index: number; isVisible: boolean }) {
  const displayValue = useCountUp(metric.value, isVisible);

  return (
    <div
      className={cn(
        "relative text-center px-4 py-6",
        "opacity-0 translate-y-4",
        isVisible && "animate-[reveal-up_0.7s_cubic-bezier(0.16,1,0.3,1)_forwards]"
      )}
      style={{
        animationDelay: isVisible ? `${index * 100}ms` : "0ms",
      }}
    >
      {/* Subtle vertical divider for desktop (not on first item) */}
      {index > 0 && (
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-gradient-to-b from-transparent via-[var(--border)] to-transparent" />
      )}

      <div className="font-sentient text-4xl md:text-5xl lg:text-6xl font-extralight text-[var(--primary)] mb-2 tracking-tight">
        {displayValue}
      </div>
      <div className="text-sm font-medium mb-1 text-[var(--foreground)]">
        {metric.label}
      </div>
      {metric.description && (
        <div className="text-xs text-[var(--neutral-500)]">
          {metric.description}
        </div>
      )}
    </div>
  );
}

export function MetricsStrip({ metrics, className }: MetricsStripProps) {
  const { ref, isRevealed } = useScrollReveal({ threshold: 0.3 });

  return (
    <div 
      ref={ref}
      className={cn(
        "grid grid-cols-2 md:grid-cols-4",
        "border border-[var(--border)] rounded-xl",
        "bg-[var(--card-bg)]",
        className
      )}
    >
      {metrics.map((metric, index) => (
        <MetricItem 
          key={index} 
          metric={metric} 
          index={index}
          isVisible={isRevealed}
        />
      ))}
    </div>
  );
}
