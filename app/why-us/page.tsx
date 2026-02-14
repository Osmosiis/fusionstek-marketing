import { SectionWrapper } from "@/components/marketing/section-wrapper";
import { PageHero } from "@/components/marketing/page-hero";
import { IconCard } from "@/components/marketing/icon-card";
import { CapabilitiesGrid } from "@/components/marketing/capabilities-grid";
import { CTAButton } from "@/components/marketing/cta-button";

export const metadata = {
  title: "Why Us - Fusionstek",
  description: "Complete EASM with regulator-ready assurance. Attacker-grade discovery, breach visibility, and audit-ready evidence.",
};

export default function WhyUsPage() {
  return (
    <>
      <PageHero
        title="Why Fusionstek: Complete EASM + Regulator Assurance"
        subtitle="Attacker-grade discovery, breach visibility, and audit-ready evidence—for compliance and EASM buyers."
      />

      {/* Why verify first */}
      <SectionWrapper
        title="Why Verify First?"
        subtitle="Validation is the bottleneck—not discovery. We’re built to fix that."
      >
        <div className="max-w-3xl mx-auto text-center mb-0">
          <p className="text-[var(--neutral-400)] text-base md:text-lg leading-relaxed">
            Scanning and discovery are easy; the hard part is validating what’s really exploitable in context (auth, segmentation, WAF, dead assets). In real environments a large share of raw findings aren’t exploitable—so teams drown in noise. We verify before we escalate: only evidence-backed, exploitable outcomes become reportable findings and tickets. That’s how you get less triage, faster remediation, and credibility that regulators and insurers trust.
          </p>
        </div>
      </SectionWrapper>

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
          <IconCard
            iconName="Shield"
            title="Leaked Credentials & Breach Visibility"
            description="We monitor known breach exposures for your domains and identities. Domain-level visibility: which domains, which breaches, when, type of data exposed. Enterprise-trusted (Microsoft, governments, vendors), no password values—perfect for dashboards and audit."
            index={6}
          />
        </div>
      </SectionWrapper>

      {/* Capabilities Grid */}
      <SectionWrapper
        title="EASM & Assurance Capabilities"
        subtitle="Discovery, monitoring, assessment, intelligence (including breach visibility), reporting, and compliance—fully integrated."
      >
        <CapabilitiesGrid />
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-sentient text-3xl md:text-4xl font-extralight tracking-tight mb-6">
            Ready for Complete EASM + Regulator Assurance?
          </h2>
          <p className="text-[var(--neutral-400)] text-lg mb-10">
            See how we deliver EASM with audit-ready evidence for compliance and security teams.
          </p>
          <CTAButton href="/demo" variant="primary" size="lg">
            Book a Demo
          </CTAButton>
        </div>
      </SectionWrapper>
    </>
  );
}
