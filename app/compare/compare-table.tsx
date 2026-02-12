"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

export function CompareTable({ children }: { children: React.ReactNode }) {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={cn(
        "overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card-bg)]",
        "opacity-0 translate-y-6",
        isRevealed && "animate-[reveal-up_0.7s_cubic-bezier(0.16,1,0.3,1)_forwards]"
      )}
    >
      {children}
    </div>
  );
}
