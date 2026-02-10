import { SectionWrapper } from "@/components/marketing/section-wrapper";
import { PageHero } from "@/components/marketing/page-hero";
import { CTAButton } from "@/components/marketing/cta-button";

export const metadata = {
  title: "About Us - Fusionstek",
  description: "Fusionstek delivers complete EASM with regulator-ready evidence. We help security and compliance teams prove external posture with verification, due-care timelines, and audit-ready artifacts.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Fusionstek"
        subtitle="We build EASM that looks at your surface the way attackers do—same logic, mindset, and timing—and proves what you found, when, and what you did, so security teams, regulators, and insurers can trust the story."
      />

      {/* Who we are */}
      <SectionWrapper
        title="Who We Are"
        subtitle="A security assurance platform built for teams that need evidence, not just visibility."
      >
        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <p className="text-[var(--neutral-400)] text-base md:text-lg leading-relaxed">
            Fusionstek exists to close the gap between what security teams discover and what they can defensibly show. Many EASM tools give you a list of assets and findings; we give you the same discovery—plus verification, evidence packs, due-care timelines, and policy-enforced execution so that every claim in a report can be backed up.
          </p>
          <p className="text-[var(--neutral-400)] text-base md:text-lg leading-relaxed">
            We serve compliance buyers who need proof for auditors and insurers, and EASM buyers who want full attack surface visibility without maintaining manual URL lists. One platform: root domain in, we find the rest; new domains verified and added via drift; evidence at every step.
          </p>
        </div>
      </SectionWrapper>

      {/* What we do */}
      <SectionWrapper
        title="What We Do"
        subtitle="Full EASM with regulator-ready evidence built in."
      >
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-[var(--neutral-400)] text-base md:text-lg leading-relaxed">
            We run discovery, monitoring, assessment, and intelligence on your external scope. You provide root domain(s); we enumerate subdomains, URLs, APIs, ports, and cloud, and keep the map current with daily refresh and drift detection. When new assets appear, we verify them and add them to your inventory—no manual entry. Findings are tied to evidence packs (what was tested, how, what was observed) and to a verification ledger and due-care timeline, so you can answer “what did we know, when, and what did we do?”
          </p>
          <ul className="space-y-3 text-[var(--neutral-400)] text-base md:text-lg">
            <li className="flex gap-3">
              <span className="text-[var(--primary)] shrink-0">—</span>
              <span><strong className="text-[var(--neutral-300)]">Discovery:</strong> Root domain in; we find subdomains, URLs, APIs, and build a canonical asset map.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[var(--primary)] shrink-0">—</span>
              <span><strong className="text-[var(--neutral-300)]">Monitoring & drift:</strong> Continuous tracking; new domains verified and added to inventory as drift findings.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[var(--primary)] shrink-0">—</span>
              <span><strong className="text-[var(--neutral-300)]">Assessment & intelligence:</strong> Vulnerability and misconfiguration checks; breach and credential exposure visibility (e.g. domain-level breach data).</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[var(--primary)] shrink-0">—</span>
              <span><strong className="text-[var(--neutral-300)]">Evidence & assurance:</strong> Verification ledger, due-care timeline, evidence packs per finding, and audit-ready reports.</span>
            </li>
          </ul>
        </div>
      </SectionWrapper>

      {/* Who we serve */}
      <SectionWrapper
        title="Who We Serve"
        subtitle="Security, risk, and compliance teams that need to prove external posture."
      >
        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <p className="text-[var(--neutral-400)] text-base md:text-lg leading-relaxed">
            We built Fusionstek for organisations where external assurance has to stand up to scrutiny: regulated industries (financial services, healthcare, government), enterprises with complex domain portfolios, and teams that run VDP or safe-harbor testing and need policy-enforced, evidence-grade outputs. If you need to show an auditor, insurer, or board that you continuously discover, monitor, and act on external risk—with proof—we’re built for that.
          </p>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-sentient text-3xl md:text-4xl font-extralight tracking-tight mb-6">
            Ready to See It in Action?
          </h2>
          <p className="text-[var(--neutral-400)] text-lg mb-10">
            Book a demo and we’ll show you discovery, drift, evidence packs, and how we keep everything audit-ready.
          </p>
          <CTAButton href="/demo" variant="primary" size="lg">
            Book a Demo
          </CTAButton>
        </div>
      </SectionWrapper>
    </>
  );
}
