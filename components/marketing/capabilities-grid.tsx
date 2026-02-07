"use client";

import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Globe, FileSearch, Mail, Key } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface CapabilitySection {
  icon: LucideIcon;
  title: string;
  items: string[];
}

const capabilities: CapabilitySection[] = [
  {
    icon: Globe,
    title: "External Discovery",
    items: [
      "Scope-enforced domain inventory",
      "Verified reachability (DNS/HTTP/TLS)",
      "Asset exhaustion evidence",
      "API and SaaS surface mapping",
    ],
  },
  {
    icon: FileSearch,
    title: "Verification & Findings",
    items: [
      "Verification-first findings",
      "Reproducible evidence artifacts",
      "WAF/CDN posture checks",
      "Attack-path context",
    ],
  },
  {
    icon: Mail,
    title: "Assurance Over Time",
    items: [
      "Daily refresh cadence",
      "Drift detection and regression tracking",
      "Baseline and delta evidence",
      "Assurance scoring",
    ],
  },
  {
    icon: Key,
    title: "Compliance & Governance",
    items: [
      "Policy-driven guardrails",
      "Due-care timeline",
      "Audit-ready reporting",
      "Scope allowlist enforcement",
    ],
  },
];

export function CapabilitiesGrid() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <div ref={ref} className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {capabilities.map((section, index) => {
          const IconComponent = section.icon;
          return (
            <div
              key={section.title}
              className={cn(
                "p-6 bg-[var(--card-bg)] border border-[var(--border)] rounded-xl",
                "transition-all duration-500 hover:border-[var(--border-hover)]",
                "opacity-0 translate-y-4",
                isRevealed && "animate-[reveal-up_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards]"
              )}
              style={{
                animationDelay: isRevealed ? `${index * 100}ms` : "0ms"
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center">
                  <IconComponent className="w-5 h-5 text-[var(--primary)]" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-[var(--foreground)]">{section.title}</h3>
              </div>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[var(--neutral-400)]">
                    <span className="text-[var(--primary)] mt-1">-</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
