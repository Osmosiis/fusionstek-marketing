"use client";

import { cn } from "@/lib/utils";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { CTAButton } from "./marketing/cta-button";

interface MobileMenuProps {
  className?: string;
}

const menuGroups = [
  {
    label: "Product",
    links: [
      { name: "Solutions", href: "/solutions/zero-day-protection" },
      { name: "Compare", href: "/compare" },
      { name: "How It Works", href: "/how-it-works" },
      { name: "Use Cases", href: "/use-cases" },
      { name: "Why Us", href: "/why-us" },
    ],
  },
  {
    label: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Resources", href: "/resources" },
    ],
  },
  {
    label: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Pricing", href: "/pricing" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

export const MobileMenu = ({ className }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button
          className={cn(
            "lg:hidden p-2 text-[var(--foreground)] transition-all duration-300",
            "hover:text-[var(--primary)]",
            className
          )}
          aria-label="Open menu"
        >
          {isOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        {/* Backdrop */}
        <Dialog.Overlay 
          className={cn(
            "fixed inset-0 z-40 bg-[var(--background)]/95 backdrop-blur-md",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
          )} 
        />

        {/* Content */}
        <Dialog.Content
          className={cn(
            "fixed inset-0 z-50 flex flex-col justify-center",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "duration-300"
          )}
        >
          <Dialog.Title className="sr-only">Navigation Menu</Dialog.Title>

          {/* Close button */}
          <Dialog.Close asChild>
            <button
              className="absolute top-6 right-6 p-2 text-[var(--neutral-400)] hover:text-[var(--foreground)] transition-colors"
              aria-label="Close menu"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </Dialog.Close>

          <nav className="container flex flex-col items-center justify-center gap-6">
            {menuGroups.map((group, groupIndex) => (
              <div key={group.label} className="flex flex-col items-center">
                <span
                  className={cn(
                    "text-xs uppercase tracking-wider text-[var(--neutral-500)] mb-2",
                    "opacity-0 translate-y-4",
                    isOpen && "animate-[reveal-up_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards]"
                  )}
                  style={{
                    animationDelay: isOpen ? `${groupIndex * 120}ms` : "0ms"
                  }}
                >
                  {group.label}
                </span>
                {group.links.map((item, linkIndex) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleLinkClick}
                    className={cn(
                      "py-3 text-xl md:text-2xl font-sentient font-extralight tracking-tight",
                      "text-[var(--neutral-400)] hover:text-[var(--foreground)]",
                      "transition-all duration-300",
                      "opacity-0 translate-y-4",
                      isOpen && "animate-[reveal-up_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards]"
                    )}
                    style={{
                      animationDelay: isOpen ? `${groupIndex * 120 + (linkIndex + 1) * 60}ms` : "0ms"
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            ))}

            <div 
              className={cn(
                "mt-4 opacity-0 translate-y-4",
                isOpen && "animate-[reveal-up_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards]"
              )}
              style={{
                animationDelay: isOpen ? `${menuGroups.length * 120 + 200}ms` : "0ms"
              }}
            >
              <CTAButton
                href="/demo"
                variant="primary"
                size="lg"
                className="min-w-[200px]"
              >
                Book a Demo
              </CTAButton>
            </div>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
