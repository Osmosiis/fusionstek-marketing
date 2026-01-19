"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  href: string;
  variant?: "primary" | "secondary";
  size?: "default" | "sm" | "lg";
  className?: string;
  children: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  showArrow?: boolean;
}

export function CTAButton({
  href,
  variant = "primary",
  size = "default",
  className,
  children,
  onMouseEnter,
  onMouseLeave,
  showArrow = false,
}: CTAButtonProps) {
  const baseStyles = cn(
    // Base
    "relative inline-flex items-center justify-center gap-2",
    "font-mono text-xs tracking-wider uppercase",
    "rounded-sm overflow-hidden",
    "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-black",
    // Size variants
    size === "sm" && "px-4 py-2 text-[10px]",
    size === "default" && "px-6 py-3",
    size === "lg" && "px-8 py-4 text-sm",
  );

  const primaryStyles = cn(
    "bg-[var(--primary)] text-black",
    "border border-[var(--primary)]",
    "hover:bg-[var(--primary-hover)] hover:shadow-[0_0_30px_-5px_var(--primary)]",
    "active:scale-[0.98]",
  );

  const secondaryStyles = cn(
    "bg-transparent text-[var(--foreground)]",
    "border border-[var(--border-hover)]",
    "hover:border-[var(--primary)] hover:text-[var(--primary)]",
    "active:scale-[0.98]",
  );

  return (
    <Link
      href={href}
      className={cn(
        baseStyles,
        variant === "primary" ? primaryStyles : secondaryStyles,
        "group",
        className
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      )}
      {/* Subtle shine effect on hover */}
      <span 
        className={cn(
          "absolute inset-0 -translate-x-full",
          "bg-gradient-to-r from-transparent via-white/10 to-transparent",
          "transition-transform duration-700 ease-out",
          "group-hover:translate-x-full"
        )} 
      />
    </Link>
  );
}
