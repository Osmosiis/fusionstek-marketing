import { SectionWrapper } from "@/components/marketing/section-wrapper";
import { PageHero } from "@/components/marketing/page-hero";
import { StepStrip } from "@/components/marketing/step-strip";
import { FeatureCard } from "@/components/marketing/feature-card";
import { FAQAccordion } from "@/components/marketing/faq-accordion";
import { CTAButton } from "@/components/marketing/cta-button";
import { Shield, FileText, Zap, CheckCircle2, Lock, Clock } from "lucide-react";

export const metadata = {
  title: "How It Works - Fusionstek",
  description: "See how Fusionstek delivers EASM with continuous, audit-ready external security assurance.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        title="How It Works"
        subtitle="Full EASM—discovery, monitoring, assessment, intelligence, and reporting—with regulator-ready evidence built in."
      />

      {/* What EASM does */}
      <SectionWrapper
        title="What Does EASM Do?"
        subtitle="External Attack Surface Management gives you continuous visibility and control over everything that is exposed to the internet—so you can find risk, fix it, and prove it."
      >
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-[var(--neutral-400)] text-base md:text-lg leading-relaxed">
            EASM discovers and maps your external assets, monitors them for changes, assesses them for vulnerabilities, enriches with intelligence (including breach exposure), and delivers clear reporting. Fusionstek adds verification and audit-ready evidence at every step—so regulators and insurers get the proof they need.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            iconName="Zap"
            title="Discovery"
            description="Identify every internet-facing asset: domains, subdomains, IPs, ports, URLs, APIs, and cloud. One verified map of what attackers can see."
            index={0}
          />
          <FeatureCard
            iconName="Clock"
            title="Monitoring"
            description="Continuous tracking of your attack surface. Drift detection shows what’s new, changed, or gone—so you see risk as it appears."
            index={1}
          />
          <FeatureCard
            iconName="FileSearch"
            title="Assessment & Validation"
            description="Scan for vulnerabilities, then validate before escalation: reachability, context, and control behaviour are checked. Only evidence-backed, exploitable findings are promoted to reports and tickets—no raw scanner dump."
            index={2}
          />
          <FeatureCard
            iconName="Shield"
            title="Intelligence"
            description="Breach and credential exposure visibility (e.g. domain-level breach data), threat context, and signals that matter for prioritisation."
            index={3}
          />
          <FeatureCard
            iconName="FileText"
            title="Reporting"
            description="Dashboards, management summaries, and detailed reports. Export what you need for ops, leadership, and audits."
            index={4}
          />
          <FeatureCard
            iconName="CheckCircle2"
            title="Regulator Assurance"
            description="Verification ledger, due-care timeline, and evidence-grade deliverables so compliance and insurers can trust the story."
            index={5}
          />
        </div>
      </SectionWrapper>

      {/* How our EASM runs: 4 steps */}
      <SectionWrapper
        title="How Our EASM Runs"
        subtitle="Four steps from scope to evidence—deterministic, policy-driven, and audit-ready"
      >
        <StepStrip
          steps={[
            {
              number: 1,
              title: "Define Scope",
              description: "You provide domains and approved scope. Policies enforce what we can test and how—compliance-safe from day one.",
            },
            {
              number: 2,
              title: "Discover & Map",
              description: "We run full EASM discovery: enumerate internet-facing assets and build a verified attack surface map.",
            },
            {
              number: 3,
              title: "Monitor, Assess & Validate",
              description: "Monitoring, drift detection, and vulnerability assessment run on your scope. Findings are validated (evidence, exploitability) before they’re promoted—so reports contain only what we can prove.",
            },
            {
              number: 4,
              title: "Deliver Evidence",
              description: "Audit-ready reports, drift timelines, and defensible evidence are produced automatically for your team and regulators.",
            },
          ]}
        />
      </SectionWrapper>

      {/* What You Get */}
      <SectionWrapper
        title="What You Get"
        subtitle="EASM outcomes plus evidence that regulators, insurers, and boards can trust"
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
            description="Findings are validated (evidence, exploitability) before escalation. Only what we can verify and reproduce makes it into reports—proof artifacts, attack paths, and safe reproduction steps included."
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
        subtitle="Common questions about EASM and our process"
      >
        <div className="max-w-3xl mx-auto">
          <FAQAccordion
            faqs={[
              {
                question: "What is EASM?",
                answer: "External Attack Surface Management (EASM) is the practice of discovering, monitoring, assessing, and reporting on everything your organisation exposes to the internet—domains, IPs, apps, APIs, cloud—so you can see and reduce external risk. Fusionstek delivers full EASM plus verification and audit-ready evidence for regulators and insurers.",
              },
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
            Ready for Full EASM + Regulator Assurance?
          </h2>
          <p className="text-[var(--neutral-400)] text-lg mb-10">
            Book a demo and see how we run discovery, monitoring, assessment, and intelligence with audit-ready evidence.
          </p>
          <CTAButton href="/demo" variant="primary" size="lg">
            Book a Demo
          </CTAButton>
        </div>
      </SectionWrapper>
    </>
  );
}
