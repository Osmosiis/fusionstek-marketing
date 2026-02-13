"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Logo } from "../logo";
import { MobileMenu } from "../mobile-menu";
import { CTAButton } from "../marketing/cta-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navGroups = [
  {
    label: "Product",
    links: [
      { href: "/solutions/zero-day-protection", label: "Solutions" },
      { href: "/compare", label: "Compare" },
      { href: "/how-it-works", label: "How It Works" },
      { href: "/use-cases", label: "Use Cases" },
      { href: "/why-us", label: "Why Us" },
    ],
  },
  {
    label: "Resources",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/resources", label: "Resources" },
    ],
  },
  {
    label: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/pricing", label: "Pricing" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed z-50 top-0 left-0 w-full",
        "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        scrolled 
          ? "py-4 bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--border)]" 
          : "py-6 md:py-8 bg-transparent"
      )}
      suppressHydrationWarning
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="relative z-10 transition-opacity duration-300 hover:opacity-70"
          suppressHydrationWarning
        >
          <Logo className="w-[100px] md:w-[120px]" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center gap-x-6">
          {navGroups.map((group) => (
            <DropdownMenu key={group.label}>
              <DropdownMenuTrigger
                className={cn(
                  "inline-flex items-center gap-1 uppercase text-[11px] tracking-wider",
                  "text-[var(--neutral-400)] hover:text-[var(--foreground)]",
                  "transition-colors duration-300 outline-none",
                  "underline-animate data-[state=open]:text-[var(--foreground)]"
                )}
              >
                {group.label}
                <ChevronDown className="size-3.5 opacity-70" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                className="min-w-[10rem] border-[var(--border)] bg-[var(--card-bg)]"
              >
                {group.links.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link
                      href={link.href}
                      className={cn(
                        "uppercase text-[11px] tracking-wider cursor-pointer",
                        "text-[var(--neutral-400)] focus:text-[var(--foreground)]"
                      )}
                    >
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <CTAButton href="/demo" variant="primary" size="sm">
            Book a Demo
          </CTAButton>
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </nav>
  );
}
