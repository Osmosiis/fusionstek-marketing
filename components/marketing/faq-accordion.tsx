"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  className?: string;
}

export function FAQAccordion({ faqs, className }: FAQAccordionProps) {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <div ref={ref}>
      <Accordion type="single" collapsible className={cn("space-y-3", className)}>
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className={cn(
              "border border-[var(--border)] rounded-xl px-6 bg-[var(--card-bg)]",
              "data-[state=open]:border-[var(--border-hover)] data-[state=open]:bg-[var(--card-bg-hover)]",
              "transition-all duration-300",
              "opacity-0 translate-y-4",
              isRevealed && "animate-[reveal-up_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards]"
            )}
            style={{
              animationDelay: isRevealed ? `${index * 75}ms` : "0ms"
            }}
          >
            <AccordionTrigger className="text-left text-[var(--foreground)] hover:text-[var(--primary)] transition-colors py-5">
              <span className="text-sm font-medium">{faq.question}</span>
            </AccordionTrigger>
            <AccordionContent className="text-[var(--neutral-400)] text-sm leading-relaxed pb-5">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
