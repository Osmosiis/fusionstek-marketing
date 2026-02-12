"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "../logo";
import { cn } from "@/lib/utils";

const footerLinks = {
  product: [
    { href: "/how-it-works", label: "How It Works" },
    { href: "/use-cases", label: "Use Cases" },
    { href: "/why-us", label: "Why Us" },
    { href: "/solutions/zero-day-protection", label: "Zero-Day Protection" },
    { href: "/compare", label: "Compare" },
    { href: "/pricing", label: "Pricing" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/demo", label: "Book a Demo" },
    { href: "/blog", label: "Blog" },
    { href: "/resources", label: "Resources" },
  ],
};

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2024);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer
      className="relative border-t border-[var(--border)]"
      suppressHydrationWarning
    >
      {/* Gradient backdrop that allows 3D effect to show through */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/50 via-[var(--background)]/70 to-[var(--background)]/80" />
      
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent z-10" />

      <div className="container relative z-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-5">
            <Logo className="w-[100px] mb-6 opacity-60" />
            <p className="text-[var(--neutral-500)] text-sm leading-relaxed max-w-sm">
              Complete EASM with regulator-ready assurance. We find what attackers
              can reach and prove it defensibly over time.
            </p>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-3" />

          {/* Product links */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-widest text-[var(--neutral-500)] mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm text-[var(--neutral-400)]",
                      "hover:text-[var(--foreground)]",
                      "transition-colors duration-300"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-widest text-[var(--neutral-500)] mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm text-[var(--neutral-400)]",
                      "hover:text-[var(--foreground)]",
                      "transition-colors duration-300"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--neutral-600)]" suppressHydrationWarning>
            © {currentYear} Fusionstek. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-[var(--neutral-500)] hover:text-[var(--neutral-400)] transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-[var(--neutral-500)] hover:text-[var(--neutral-400)] transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
