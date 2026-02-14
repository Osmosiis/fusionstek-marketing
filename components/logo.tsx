"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={cn("w-[100px] md:w-[120px] h-10 bg-transparent", className)}
        suppressHydrationWarning
      />
    );
  }

  return (
    <Image
      src="/fusion.jpg"
      alt="Fusionstek Logo"
      width={120}
      height={40}
      className={cn("object-contain", className)}
      priority
      suppressHydrationWarning
    />
  );
};
