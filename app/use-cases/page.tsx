import { SectionWrapper } from "@/components/marketing/section-wrapper";
import { PageHero } from "@/components/marketing/page-hero";
import { UseCaseTile } from "@/components/marketing/use-case-tile";
import { CTAButton } from "@/components/marketing/cta-button";

export const metadata = {
  title: "Use Cases - Fusionstek",
  description: "External security assurance across industries with audit-ready evidence.",
};

export default function UseCasesPage() {
  return (
    <>
      <PageHero
        title="Use Cases"
        subtitle="External assurance for regulated, internet-facing organizations."
      />

      {/* Primary Use Cases */}
      <SectionWrapper
        title="Industries We Serve"
        subtitle="Assurance-grade visibility designed for your risk profile"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <UseCaseTile
            title="Enterprise External Assurance"
            description="Defensible visibility across complex domain portfolios."
            bullets={[
              "Multi-domain scope control",
              "Audit-ready evidence",
              "Drift tracking over time",
            ]}
            index={0}
          />
          <UseCaseTile
            title="E-commerce & Public SaaS"
            description="Continuous proof that customer-facing surfaces stay secure."
            bullets={[
              "Verified reachability + findings",
              "Policy‑approved edge posture checks",
              "Daily refresh cadence",
            ]}
            index={1}
          />
          <UseCaseTile
            title="Regulated & High-Risk Industries"
            description="Assurance built to satisfy regulators and insurers."
            bullets={[
              "Due-care timeline",
              "Verification ledger",
              "Policy-enforced guardrails",
            ]}
            index={2}
          />
        </div>
      </SectionWrapper>

      {/* Additional Use Cases */}
      <SectionWrapper
        title="More Industries"
        subtitle="Security solutions across sectors"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <UseCaseTile
            title="Healthcare Data Protection"
            description="External assurance for patient-facing portals and public services."
            bullets={[
              "Audit-ready evidence for regulators",
              "Verified exposure of public apps",
              "Continuous drift visibility",
            ]}
            index={0}
          />
          <UseCaseTile
            title="Financial Services Security"
            description="Defensible external posture for high-trust environments."
            bullets={[
              "Verified exposure for public apps/APIs",
              "Compliance-safe monitoring cadence",
              "Due-care timelines for audits",
            ]}
            index={1}
          />
          <UseCaseTile
            title="Government & Public Sector"
            description="External assurance for critical public services."
            bullets={[
              "Evidence-grade reporting for oversight",
              "Policy-enforced guardrails",
              "Drift tracking for public services",
            ]}
            index={2}
          />
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-sentient text-3xl md:text-4xl font-extralight tracking-tight mb-6">
            Attacker-Grade Assurance, Audit-Ready Proof
          </h2>
          <p className="text-[var(--neutral-400)] text-lg mb-10">
            We find what attackers can reach and prove it in reports regulators trust.
          </p>
          <CTAButton href="/demo" variant="primary" size="lg">
            Book a Demo
          </CTAButton>
        </div>
      </SectionWrapper>
    </>
  );
}
