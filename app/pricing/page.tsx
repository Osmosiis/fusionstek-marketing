import { SectionWrapper } from "@/components/marketing/section-wrapper";
import { PageHero } from "@/components/marketing/page-hero";
import Link from "next/link";
import { CTAButton } from "@/components/marketing/cta-button";
import { Check } from "lucide-react";

const includedFeatures = [
  "External attack surface discovery (domains, subdomains, IPs, ports, URLs, APIs)",
  "Continuous monitoring & drift detection",
  "Zero-day detection (7 days ahead of CVEs)",
  "Tech stack fingerprinting & version-aware correlation",
  "Leaked credentials & breach visibility",
  "Verification-first findings & audit-ready evidence",
  "Policy-driven guardrails & scope control",
  "Dashboard, reports & compliance-ready deliverables",
];

export const metadata = {
  title: "Pricing - EASM & Security Assurance | Fusionstek",
  description:
    "Complete EASM with zero-day detection, continuous assurance, and regulator-ready evidence. Contact us for pricing tailored to your scope.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        title="Pricing"
        subtitle="Complete EASM with zero-day detection, continuous assurance, and audit-ready evidence. Tailored to your scope and compliance needs."
      />

      <SectionWrapper
        title="What’s Included"
        subtitle="One platform: discovery, monitoring, zero-day detection, intelligence, and reporting"
      >
        <div className="max-w-2xl mx-auto">
          <ul className="space-y-4">
            {includedFeatures.map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-[var(--neutral-300)] text-sm md:text-base"
              >
                <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[var(--primary)]/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-[var(--primary)]" strokeWidth={2.5} />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper
        title="Get a Quote"
        subtitle="Pricing is based on scope (domains, assets) and assurance level. We’ll tailor a plan for your organisation."
      >
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[var(--neutral-400)] text-base md:text-lg mb-10">
            Book a demo and we’ll walk you through the platform, discuss your scope, and provide a clear proposal—including zero-day detection and continuous monitoring as part of your EASM package.
          </p>
          <CTAButton href="/demo" variant="primary" size="lg">
            Book a Demo
          </CTAButton>
          <p className="mt-6 text-sm text-[var(--neutral-500)]">
            Or <Link href="/contact" className="text-[var(--primary)] hover:underline">contact us</Link> for a direct conversation.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
