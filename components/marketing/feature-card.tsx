"use client";

import { cn } from "@/lib/utils";
import { 
  AlertTriangle, Shield, Lock, CheckCircle2, Users, 
  Zap, FileSearch, FileText, Clock
} from "lucide-react";

const iconMap = {
  AlertTriangle,
  Shield,
  Lock,
  CheckCircle2,
  Users,
  Zap,
  FileSearch,
  FileText,
  Clock,
};

type IconName = keyof typeof iconMap;

interface FeatureCardProps {
  iconName?: IconName;
  title: string;
  description: string;
  className?: string;
  index?: number;
}

export function FeatureCard({
  iconName,
  title,
  description,
  className,
  index = 0,
}: FeatureCardProps) {
  const Icon = iconName ? iconMap[iconName] : null;
  
  return (
    <div
      className={cn(
        // Base card styling
        "group relative h-full p-6 md:p-8",
        "bg-[var(--card-bg)] rounded-xl",
        "border border-[var(--border)]",
        // Transitions
        "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        // Hover effects
        "hover:bg-[var(--card-bg-hover)]",
        "hover:border-[var(--border-hover)]",
        "hover:-translate-y-1",
        className
      )}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Subtle corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-xl">
        <div className="absolute top-0 right-0 w-[1px] h-8 bg-gradient-to-b from-[var(--primary)]/30 to-transparent transition-all duration-500 group-hover:h-12 group-hover:from-[var(--primary)]/50" />
        <div className="absolute top-0 right-0 h-[1px] w-8 bg-gradient-to-l from-[var(--primary)]/30 to-transparent transition-all duration-500 group-hover:w-12 group-hover:from-[var(--primary)]/50" />
      </div>

      {Icon && (
        <div className="mb-5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[var(--primary)]/10 border border-[var(--primary)]/20">
            <Icon className="w-5 h-5 text-[var(--primary)]" strokeWidth={1.5} />
          </div>
        </div>
      )}
      
      <h3 className="text-lg font-semibold mb-3 text-[var(--foreground)] tracking-tight">
        {title}
      </h3>
      
      <p className="text-[var(--neutral-400)] text-sm leading-relaxed">
        {description}
      </p>

      {/* Bottom highlight on hover */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--primary)]/50 to-transparent transition-all duration-500 group-hover:w-2/3" />
    </div>
  );
}
