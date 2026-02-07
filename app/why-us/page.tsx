import { SectionWrapper } from "@/components/marketing/section-wrapper";
import { PageHero } from "@/components/marketing/page-hero";
import { IconCard } from "@/components/marketing/icon-card";
import { CapabilitiesGrid } from "@/components/marketing/capabilities-grid";
import { CTAButton } from "@/components/marketing/cta-button";

export const metadata = {
  title: "Why Us - Fusionstek",
  description: "Attacker-grade discovery with audit-ready evidence for external security assurance.",
};

export default function WhyUsPage() {
  return (
    <>
      <PageHero
        title="Why Fusionstek for External Assurance"
        subtitle="Attacker-grade discovery with audit-ready evidence."
      />

      {/* Differentiators */}
      <SectionWrapper
        title="What Sets Us Apart"
        subtitle="Deterministic assurance, not just scanning."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <IconCard
            iconName="Shield"
            title="Attacker-Grade Discovery"
            description="We enumerate what attackers can reach and verify it with evidence."
            index={0}
          />
          <IconCard
            iconName="Zap"
            title="Verification-First Findings"
            description="Only findings that can be reproduced and validated appear in reports."
            index={1}
          />
          <IconCard
            iconName="Lock"
            title="Policy-Driven Guardrails"
            description="Compliance-safe execution with explicit scope and consent enforcement."
            index={2}
          />
          <IconCard
            iconName="CheckCircle2"
            title="Audit-Ready Evidence"
            description="Verification ledger + due-care timeline for defensible reporting."
            index={3}
          />
          <IconCard
            iconName="Users"
            title="Continuous Assurance"
            description="Daily refresh and drift detection to prove posture over time."
            index={4}
          />
          <IconCard
            iconName="TrendingUp"
            title="Explainable Decisions"
            description="Every skip, block, or finding includes a deterministic reason."
            index={5}
          />
        </div>
      </SectionWrapper>

      {/* Capabilities Grid */}
      <SectionWrapper
        title="Assurance Capabilities"
        subtitle="Discovery, verification, reporting, and compliance—fully integrated."
      >
        <CapabilitiesGrid />
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-sentient text-3xl md:text-4xl font-extralight tracking-tight mb-6">
            Ready for Attacker-Grade Assurance?
          </h2>
          <p className="text-[var(--neutral-400)] text-lg mb-10">
            See how we prove external security with audit-ready evidence.
          </p>
          <CTAButton href="/demo" variant="primary" size="lg">
            Book a Demo
          </CTAButton>
        </div>
      </SectionWrapper>
    </>
  );
}
