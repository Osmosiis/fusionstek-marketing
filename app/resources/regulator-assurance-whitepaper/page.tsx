import { SectionWrapper } from "@/components/marketing/section-wrapper";
import { PageHero } from "@/components/marketing/page-hero";
import { CTAButton } from "@/components/marketing/cta-button";
import Link from "next/link";

export const metadata = {
  title: "Regulator & Insurer Assurance Whitepaper | Fusionstek",
  description:
    "How verification ledgers, due-care timelines, and audit-ready evidence satisfy regulators and insurers for external security assurance.",
};

export default function RegulatorAssuranceWhitepaperPage() {
  return (
    <>
      <PageHero
        title="Regulator & Insurer Assurance: A Whitepaper"
        subtitle="Evidence that stands up to auditors and insurers—verification ledger, due-care timeline, and defensible reporting."
      />

      <SectionWrapper
        title="What’s Inside"
        subtitle="Building defensible assurance for compliance and risk transfer"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card-bg)]">
            <h3 className="text-base font-semibold text-[var(--foreground)] mb-2">
              Verification ledger
            </h3>
            <p className="text-sm text-[var(--neutral-400)] leading-relaxed">
              A clear record of what was tested, when, and how it was confirmed. No gaps—so you can show exactly what you knew and when.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card-bg)]">
            <h3 className="text-base font-semibold text-[var(--foreground)] mb-2">
              Due-care timeline
            </h3>
            <p className="text-sm text-[var(--neutral-400)] leading-relaxed">
              Timelines that demonstrate continuous monitoring and response. Essential for proving you exercised due care over your external surface.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card-bg)]">
            <h3 className="text-base font-semibold text-[var(--foreground)] mb-2">
              Policy-driven guardrails
            </h3>
            <p className="text-sm text-[var(--neutral-400)] leading-relaxed">
              Scope, consent, and prohibited actions enforced by policy. Compliance-safe execution from day one, with an explainable audit trail.
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
            Get the full whitepaper on regulator and insurer assurance. Request the PDF below.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact?subject=Regulator%20Assurance%20Whitepaper" variant="primary" size="lg">
              Request PDF
            </CTAButton>
            <CTAButton href="/why-us" variant="secondary" size="lg" showArrow>
              Why Us
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
