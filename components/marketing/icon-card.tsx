"use client";

import { cn } from "@/lib/utils";
import { 
  Shield, Zap, Lock, CheckCircle2, Users, TrendingUp,
  AlertTriangle, FileText, Clock, Globe, FileSearch, Mail, Key
} from "lucide-react";

const iconMap = {
  Shield,
  Zap,
  Lock,
  CheckCircle2,
  Users,
  TrendingUp,
  AlertTriangle,
  FileText,
  Clock,
  Globe,
  FileSearch,
  Mail,
  Key,
};

type IconName = keyof typeof iconMap;

interface IconCardProps {
  iconName: IconName;
  title: string;
  description: string;
  className?: string;
  index?: number;
}

export function IconCard({
  iconName,
  title,
  description,
  className,
  index = 0,
}: IconCardProps) {
  const Icon = iconMap[iconName];
  
  return (
    <div
      className={cn(
        "group relative p-6 text-center",
        "bg-[var(--card-bg)] rounded-xl",
        "border border-[var(--border)]",
        "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "hover:bg-[var(--card-bg-hover)]",
        "hover:border-[var(--border-hover)]",
        "hover:-translate-y-1",
        className
      )}
    >
      {/* Icon container */}
      <div className="flex justify-center mb-5">
        <div className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center",
          "bg-[var(--primary)]/10 border border-[var(--primary)]/20",
          "transition-all duration-500",
          "group-hover:scale-110 group-hover:bg-[var(--primary)]/15"
        )}>
          <Icon className="w-7 h-7 text-[var(--primary)]" strokeWidth={1.5} />
        </div>
      </div>

      <h3 className="text-base font-semibold mb-2 text-[var(--foreground)]">
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
