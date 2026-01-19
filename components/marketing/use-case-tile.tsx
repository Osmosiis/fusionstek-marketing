"use client";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface UseCaseTileProps {
  title: string;
  description: string;
  bullets: string[];
  className?: string;
  index?: number;
}

export function UseCaseTile({
  title,
  description,
  bullets,
  className,
  index = 0,
}: UseCaseTileProps) {
  return (
    <div
      className={cn(
        "group relative h-full p-6 md:p-8",
        "bg-[var(--card-bg)] rounded-xl",
        "border border-[var(--border)]",
        "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "hover:bg-[var(--card-bg-hover)]",
        "hover:border-[var(--border-hover)]",
        className
      )}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <h3 className="text-lg font-semibold mb-3 text-[var(--foreground)] tracking-tight">
        {title}
      </h3>
      
      <p className="text-[var(--neutral-400)] text-sm mb-6 leading-relaxed">
        {description}
      </p>
      
      <ul className="space-y-3">
        {bullets.map((bullet, bulletIndex) => (
          <li 
            key={bulletIndex} 
            className="flex items-start gap-3 text-sm"
          >
            <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
              <Check className="w-2.5 h-2.5 text-[var(--primary)]" strokeWidth={3} />
            </span>
            <span className="text-[var(--neutral-300)]">{bullet}</span>
          </li>
        ))}
      </ul>

      {/* Bottom highlight on hover */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--primary)]/50 to-transparent transition-all duration-500 group-hover:w-2/3" />
    </div>
  );
}
