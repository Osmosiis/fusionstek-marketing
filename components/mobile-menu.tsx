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

const menuItems = [
  { name: "How It Works", href: "/how-it-works" },
  { name: "Use Cases", href: "/use-cases" },
  { name: "Why Us", href: "/why-us" },
  { name: "Contact", href: "/contact" },
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

          <nav className="container flex flex-col items-center justify-center">
            {menuItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleLinkClick}
                className={cn(
                  "py-4 text-2xl md:text-3xl font-sentient font-extralight tracking-tight",
                  "text-[var(--neutral-400)] hover:text-[var(--foreground)]",
                  "transition-all duration-300",
                  "opacity-0 translate-y-4",
                  isOpen && "animate-[reveal-up_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards]"
                )}
                style={{
                  animationDelay: isOpen ? `${index * 75}ms` : "0ms"
                }}
              >
                {item.name}
              </Link>
            ))}

            <div 
              className={cn(
                "mt-8 opacity-0 translate-y-4",
                isOpen && "animate-[reveal-up_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards]"
              )}
              style={{
                animationDelay: isOpen ? `${menuItems.length * 75}ms` : "0ms"
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
