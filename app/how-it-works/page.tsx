import { SectionWrapper } from "@/components/marketing/section-wrapper";
import { PageHero } from "@/components/marketing/page-hero";
import { StepStrip } from "@/components/marketing/step-strip";
import { FeatureCard } from "@/components/marketing/feature-card";
import { FAQAccordion } from "@/components/marketing/faq-accordion";
import { CTAButton } from "@/components/marketing/cta-button";
import { Shield, FileText, Zap, CheckCircle2, Lock, Clock } from "lucide-react";

export const metadata = {
  title: "How It Works - Fusionstek",
  description: "See how Fusionstek builds continuous, audit-ready external security assurance.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        title="How It Works"
        subtitle="Deterministic discovery, verification, and evidence—built for audit-ready assurance."
      />

      {/* 4-Step Process */}
      <SectionWrapper
        title="The Process"
        subtitle="Four steps to external security assurance that stands up to scrutiny"
      >
        <StepStrip
          steps={[
            {
              number: 1,
              title: "Define Scope",
              description: "Provide your domains and approved scope. Policies enforce what we can test and how.",
            },
            {
              number: 2,
              title: "Discover & Map",
              description: "We enumerate internet-facing assets and build a verified surface map.",
            },
            {
              number: 3,
              title: "Verify & Analyze",
              description: "Findings are validated with evidence and tied to real, reachable assets.",
            },
            {
              number: 4,
              title: "Deliver Evidence",
              description: "Audit-ready reports, drift tracking, and defensible timelines are produced automatically.",
            },
          ]}
        />
      </SectionWrapper>

      {/* What You Get */}
      <SectionWrapper
        title="What You Get"
        subtitle="External assurance artifacts that regulators, insurers, and boards can trust"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            iconName="Shield"
            title="Verified Asset Inventory"
            description="A continuously updated map of internet-facing assets with reachability evidence."
            index={0}
          />
          <FeatureCard
            iconName="FileText"
            title="Evidence-Grade Findings"
            description="Only findings that can be verified and reproduced make it into reports."
            index={1}
          />
          <FeatureCard
            iconName="Zap"
            title="Assurance Over Time"
            description="Daily refresh + drift detection prove that posture stays secure between baselines."
            index={2}
          />
          <FeatureCard
            iconName="CheckCircle2"
            title="Audit-Ready Reports"
            description="Deterministic reporting with provenance, timelines, and compliance-ready evidence."
            index={3}
          />
          <FeatureCard
            iconName="Lock"
            title="Policy-Driven Guardrails"
            description="Compliance-safe execution with explicit scope, consent, and prohibited-action controls."
            index={4}
          />
          <FeatureCard
            iconName="Clock"
            title="Disclosure Readiness"
            description="Clear timelines of what was known, when, and what was verified."
            index={5}
          />
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper
        title="Frequently Asked Questions"
        subtitle="Common questions about our security assessment process"
      >
        <div className="max-w-3xl mx-auto">
          <FAQAccordion
            faqs={[
              {
                question: "How long does the baseline assurance take?",
                answer: "Baseline assurance depends on scope. We deliver demo reports within 24 hours, and daily refresh keeps assurance current afterward.",
              },
              {
                question: "How many domains can I submit?",
                answer: "Demo requests support up to 5 domains. Larger scopes are handled through a full engagement with expanded policy.",
              },
              {
                question: "Is the process compliance-safe?",
                answer: "Yes. Execution is governed by policy and consent. High‑risk actions are disabled unless explicitly authorized in a formal engagement.",
              },
              {
                question: "What evidence do you provide to regulators or insurers?",
                answer: "We provide audit-ready reports plus a verification ledger and due-care timeline showing what was tested, when, and how it was confirmed.",
              },
              {
                question: "Do I need authorization to assess domains?",
                answer: "Yes. Scope is allowlisted and enforced—authorization is required for every domain tested.",
              },
            ]}
          />
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-sentient text-3xl md:text-4xl font-extralight tracking-tight mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-[var(--neutral-400)] text-lg mb-10">
            Submit your first security assessment request today.
          </p>
          <CTAButton href="/demo" variant="primary" size="lg">
            Book a Demo
          </CTAButton>
        </div>
      </SectionWrapper>
    </>
  );
}
