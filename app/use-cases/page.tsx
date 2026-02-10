import { SectionWrapper } from "@/components/marketing/section-wrapper";
import { PageHero } from "@/components/marketing/page-hero";
import { UseCaseTile } from "@/components/marketing/use-case-tile";
import { CTAButton } from "@/components/marketing/cta-button";

export const metadata = {
  title: "Use Cases - Fusionstek",
  description: "EASM use cases: compliance & regulator assurance, attack surface discovery, breach visibility, and security operations—with audit-ready evidence.",
};

export default function UseCasesPage() {
  return (
    <>
      <PageHero
        title="Use Cases"
        subtitle="Full EASM outcomes by category—compliance, discovery, threat visibility, and operations—with evidence that stands up to regulators and insurers."
      />

      {/* Category: Compliance & Regulator Assurance */}
      <SectionWrapper
        id="compliance"
        title="Compliance & Regulator Assurance"
        subtitle="Prove what you knew, when you knew it, and what you did—with defensible timelines and evidence packs."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <UseCaseTile
            title="Regulated Industries"
            description="Financial services, healthcare, and government need external assurance that survives audits and regulatory review. We deliver verification-led evidence, not just scan results."
            bullets={[
              "Due-care timeline: first seen, remediated, verified",
              "Verification ledger per asset (DNS, HTTP, TLS)",
              "Policy-enforced scope and VDP-safe testing",
            ]}
            index={0}
          />
          <UseCaseTile
            title="Insurance & Audit Readiness"
            description="When insurers or auditors ask for proof of continuous monitoring and remediation, you need timelines and artifacts they can rely on. We produce them automatically."
            bullets={[
              "Audit-ready reports with provenance",
              "Evidence pack per finding (what/how/observed)",
              "Verified vs unverified lanes in reporting",
            ]}
            index={1}
          />
          <UseCaseTile
            title="VDP & Safe-Harbor Testing"
            description="Run EASM within strict rules of engagement: no brute force, no exploitation unless explicitly approved. Compliance Guard enforces policy at execution time."
            bullets={[
              "VDP-safe and compliance-restricted modes",
              "Scope allowlist and consent enforcement",
              "Blocks out-of-scope or high-risk actions",
            ]}
            index={2}
          />
        </div>
      </SectionWrapper>

      {/* Category: Attack Surface Discovery & Monitoring */}
      <SectionWrapper
        id="discovery"
        title="Attack Surface Discovery & Monitoring"
        subtitle="Give us the root domain—we find the rest. No manual URL lists; new domains are verified and added to your inventory automatically."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <UseCaseTile
            title="Root Domain–Only Discovery"
            description="Unlike tools that require you to manually enter URLs or hosts, you provide root domain(s). We discover subdomains, URLs, APIs, ports, and cloud—and build one verified map."
            bullets={[
              "Single or multi-domain scope; we enumerate the rest",
              "Subdomains, IPs, ports, URLs, API endpoints",
              "Canonical asset map as single source of truth",
            ]}
            index={0}
          />
          <UseCaseTile
            title="Continuous Drift & Auto-Inventory"
            description="When new domains or subdomains appear, we detect them, verify reachability, and add them to your inventory as part of drift findings—no manual add step."
            bullets={[
              "Drift events: new/removed/changed assets",
              "New domains verified and added automatically",
              "Daily refresh and baseline comparison",
            ]}
            index={1}
          />
          <UseCaseTile
            title="Enterprise & Multi-Domain Portfolios"
            description="Manage complex domain portfolios with one platform: scope control, policy per engagement, and a single dashboard for health, coverage, and drift."
            bullets={[
              "Multi-domain scope with allowlist enforcement",
              "Health, coverage, confidence, scope metrics",
              "One view across all completed scans",
            ]}
            index={2}
          />
        </div>
      </SectionWrapper>

      {/* Category: Threat & Breach Visibility */}
      <SectionWrapper
        id="threat"
        title="Threat & Breach Visibility"
        subtitle="Domain-level breach exposure, attack path visibility, and executive-ready narratives—so leadership and compliance get the full picture."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <UseCaseTile
            title="Leaked Credentials & Breach Exposure"
            description="See which of your domains have exposed credentials and which breaches they came from—enterprise-trusted breach data (e.g. HIBP), no password values, no legal gray areas."
            bullets={[
              "Domain-level breach visibility and timelines",
              "Dashboards: by domain, exposure timeline, severity",
              "Trusted source; audit-friendly for compliance",
            ]}
            index={0}
          />
          <UseCaseTile
            title="Attack Path & Exploit Chain Visibility"
            description="Understand how an attacker could chain findings: entrypoint → weakness → pivot → impact. Attack path engine and exploit chain analysis with feasibility scoring."
            bullets={[
              "Attack paths and exploit chains mapped",
              "Feasibility and attacker-cost prioritisation",
              "Recon map and breach flow visualisation",
            ]}
            index={1}
          />
          <UseCaseTile
            title="Executive & Board Reporting"
            description="Turn technical findings into tiered narratives: exec summary, manager view, engineer view. Evidence-backed breach narratives with kill-chain steps and impact."
            bullets={[
              "Breach narrative: exec / manager / engineer layers",
              "Evidence refs and breakers per narrative",
              "Reports built for leadership and oversight",
            ]}
            index={2}
          />
        </div>
      </SectionWrapper>

      {/* Category: Security Operations & Response */}
      <SectionWrapper
        id="operations"
        title="Security Operations & Response"
        subtitle="Verified findings with evidence packs, integrations to ticketing and SIEM, and policy-safe execution—so ops can act and prove it."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <UseCaseTile
            title="Verified Findings & Evidence Packs"
            description="Every finding can have an evidence pack: what was tested, how, what was observed, impact, and safe reproduction steps. Export for audits or handoff to engineering."
            bullets={[
              "Structured evidence: result.json, evidence.md, repro.md",
              "Transcripts and optional screenshots (policy-gated)",
              "Linked to findings for defensible handoff",
            ]}
            index={0}
          />
          <UseCaseTile
            title="Integrations & Mobilize"
            description="Push findings into your workflow: create Jira or ServiceNow tickets, send to SIEM, download evidence pack, or send to EDR. Audit-logged and RBAC-controlled."
            bullets={[
              "Create ticket, send to SIEM, evidence pack export",
              "Per-tenant connector config; secrets encrypted",
              "Mobilize audit log for compliance",
            ]}
            index={1}
          />
          <UseCaseTile
            title="Silent & Conditional Surface Detection"
            description="Surfaces that only appear with specific timing, headers, or flow—not just what a scanner hit. Silent Surface Detector models real attacker discovery for fuller coverage."
            bullets={[
              "Conditional and timing-dependent surfaces",
              "Reduces blind spots vs URL-only tools",
              "Complements standard discovery and drift",
            ]}
            index={2}
          />
        </div>
      </SectionWrapper>

      {/* Industries We Serve */}
      <SectionWrapper
        id="industries"
        title="Industries We Serve"
        subtitle="Assurance-grade EASM and regulator-ready evidence across sectors where external proof and compliance matter."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <UseCaseTile
            title="Financial Services"
            description="Defensible external posture for banks, insurers, and fintech. Evidence and timelines that satisfy regulators and internal audit."
            bullets={[
              "Due-care timeline and verification ledger",
              "Policy-safe and scope-enforced testing",
              "Audit-ready reports and evidence packs",
            ]}
            index={0}
          />
          <UseCaseTile
            title="Healthcare & Life Sciences"
            description="External assurance for patient-facing portals, APIs, and public services. Compliance-safe monitoring with proof for HIPAA and oversight."
            bullets={[
              "Verified exposure of public apps and APIs",
              "Evidence for regulators and auditors",
              "Continuous drift and breach visibility",
            ]}
            index={1}
          />
          <UseCaseTile
            title="Government & Public Sector"
            description="External assurance for critical public services and agencies. Evidence-grade reporting and policy-enforced guardrails for sensitive scope."
            bullets={[
              "Evidence-grade reporting for oversight",
              "VDP-safe and compliance-restricted modes",
              "Drift tracking for public-facing services",
            ]}
            index={2}
          />
          <UseCaseTile
            title="E-commerce & Public SaaS"
            description="Continuous proof that customer-facing surfaces stay secure. Root-domain discovery and daily drift so you see new exposure fast."
            bullets={[
              "Root domain in; we find subdomains and APIs",
              "Daily refresh and drift as new assets appear",
              "Verified findings and policy-approved checks",
            ]}
            index={3}
          />
          <UseCaseTile
            title="Enterprise & Multi-Brand"
            description="Complex domain portfolios and multiple brands under one platform. One dashboard, scoped runs, and consistent evidence for group risk and compliance."
            bullets={[
              "Multi-domain scope and allowlist control",
              "Single view: health, coverage, drift, findings",
              "Audit-ready evidence across portfolios",
            ]}
            index={4}
          />
          <UseCaseTile
            title="MSSPs & Managed EASM"
            description="Run EASM for clients with policy per engagement, evidence packs and reports per tenant, and integrations (Jira, SIEM) they already use."
            bullets={[
              "Multi-tenant with scope and policy per client",
              "Evidence packs and reports per run",
              "Mobilize and integrations for client workflows",
            ]}
            index={5}
          />
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-sentient text-3xl md:text-4xl font-extralight tracking-tight mb-6">
            Attacker-Grade EASM, Audit-Ready Proof
          </h2>
          <p className="text-[var(--neutral-400)] text-lg mb-10">
            Root domain in, we find the rest. Evidence packs, verification ledger, and due-care timeline—so regulators and insurers get the proof they need.
          </p>
          <CTAButton href="/demo" variant="primary" size="lg">
            Book a Demo
          </CTAButton>
        </div>
      </SectionWrapper>
    </>
  );
}
