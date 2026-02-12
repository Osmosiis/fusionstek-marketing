import { SectionWrapper } from "@/components/marketing/section-wrapper";
import { PageHero } from "@/components/marketing/page-hero";
import { CTAButton } from "@/components/marketing/cta-button";
import Link from "next/link";

export const metadata = {
  title: "EASM & External Assurance Whitepaper | Fusionstek",
  description:
    "How external attack surface management with verification-first findings and audit-ready evidence supports security and compliance.",
};

export default function EASMAssuranceWhitepaperPage() {
  return (
    <>
      <PageHero
        title="EASM & External Assurance: A Whitepaper"
        subtitle="Attacker-grade discovery with evidence-grade visibility—why verification and defensible proof matter for EASM."
      />

      <SectionWrapper
        title="What’s Inside"
        subtitle="From discovery to evidence: a defensible EASM approach"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card-bg)]">
            <h3 className="text-base font-semibold text-[var(--foreground)] mb-2">
              Attacker’s view
            </h3>
            <p className="text-sm text-[var(--neutral-400)] leading-relaxed">
              Same discovery logic, mindset, and timing as attackers—so you see what they see, with proof. Not just scanning; verified reachability and evidence at every step.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card-bg)]">
            <h3 className="text-base font-semibold text-[var(--foreground)] mb-2">
              Verification-first findings
            </h3>
            <p className="text-sm text-[var(--neutral-400)] leading-relaxed">
              Only findings that can be reproduced and validated make it into reports. No assumptions—so security and compliance can trust the story.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card-bg)]">
            <h3 className="text-base font-semibold text-[var(--foreground)] mb-2">
              Audit-ready evidence
            </h3>
            <p className="text-sm text-[var(--neutral-400)] leading-relaxed">
              Verification ledger, due-care timeline, and deterministic reports that regulators and insurers can rely on. Defensible over time.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-sentient text-3xl md:text-4xl font-extralight tracking-tight mb-6">
            Download the Whitepaper
          </h2>
          <p className="text-[var(--neutral-400)] text-lg mb-8">
            Get the full whitepaper on EASM with regulator-ready assurance. Request the PDF via the link below.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact?subject=EASM%20Assurance%20Whitepaper" variant="primary" size="lg">
              Request PDF
            </CTAButton>
            <CTAButton href="/how-it-works" variant="secondary" size="lg" showArrow>
              How It Works
            </CTAButton>
          </div>
          <p className="mt-6 text-xs text-[var(--neutral-500)]">
            <Link href="/resources" className="text-[var(--primary)] hover:underline">All resources</Link>
            {" · "}
            <Link href="/contact" className="text-[var(--primary)] hover:underline">Contact us</Link>
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
