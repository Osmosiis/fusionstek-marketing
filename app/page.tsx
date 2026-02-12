"use client";

import Image from "next/image";
import { Hero } from "@/components/hero";
import { SectionWrapper } from "@/components/marketing/section-wrapper";
import { FeatureCard } from "@/components/marketing/feature-card";
import { StepStrip } from "@/components/marketing/step-strip";
import { UseCaseTile } from "@/components/marketing/use-case-tile";
import { TestimonialStrip } from "@/components/marketing/testimonial-strip";
import { MetricsStrip } from "@/components/marketing/metrics-strip";
import { CTAButton } from "@/components/marketing/cta-button";
import { AlertTriangle, Shield, Lock, Zap, FileSearch, Users } from "lucide-react";
import { Leva } from "leva";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

export default function Home() {
  const { ref: ctaRef, isRevealed: ctaRevealed } = useScrollReveal();
  const { ref: dashboardRef, isRevealed: dashboardRevealed } = useScrollReveal();

  return (
    <>
      <Hero />
      <Leva hidden />

      {/* Problem Section */}
      <SectionWrapper
        id="problem"
        title="Why External Assurance Has to Be Defensible"
        subtitle="Unmonitored or unverified surfaces create blind spots and proof gaps. We deliver continuous, audit-ready evidence so you can show what you found, when, and what you did."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            iconName="AlertTriangle"
            title="External Exposure Blind Spots"
            description="Unmonitored internet-facing assets create silent risk and unaccounted attack paths—attackers find them first."
            index={0}
          />
          <FeatureCard
            iconName="Shield"
            title="Verification Gaps"
            description="Findings without external proof don’t hold up to regulators, insurers, or post-incident reviews."
            index={1}
          />
          <FeatureCard
            iconName="Lock"
            title="Assurance Over Time"
            description="Compliance and security both need continuous evidence of monitoring and drift—not one-off scans."
            index={2}
          />
        </div>
      </SectionWrapper>

      {/* Value/Difference */}
      <SectionWrapper
        id="value"
        title="Complete EASM + Regulator Assurance"
        subtitle="Attacker-grade discovery and evidence-grade visibility for security teams, compliance, regulators, and insurers."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            iconName="Zap"
            title="Attacker’s View: Logic, Mindset & Timing"
            description="We look at your applications and external surface the exact way attackers do—same discovery logic, prioritisation, and timing—so you see what they see, with proof."
            index={0}
          />
          <FeatureCard
            iconName="FileSearch"
            title="Verification-First Findings"
            description="Only show findings that can be verified and reproduced—so security and compliance can trust the story."
            index={1}
          />
          <FeatureCard
            iconName="Shield"
            title="Audit-Ready Reporting"
            description="Explainable, deterministic reports for security teams, regulators, and insurers."
            index={2}
          />
          <FeatureCard
            iconName="Users"
            title="Continuous Assurance"
            description="Daily refresh, drift detection, and zero-day monitoring to prove you stayed secure over time—with alerts 7 days ahead of CVE publication."
            index={3}
          />
        </div>
      </SectionWrapper>

      {/* Dashboard / Platform preview - image on the right */}
      <SectionWrapper
        id="platform"
        title="One View of Your External Attack Surface"
        subtitle="The Attack Surface dashboard gives you a single, evidence-backed view of what’s exposed—and what changed—so you can act and prove it."
      >
        <div ref={dashboardRef} className={cn("opacity-0 translate-y-6", dashboardRevealed && "animate-[reveal-up_0.7s_cubic-bezier(0.16,1,0.3,1)_forwards]")}>
          {/* Dashboard image full-width for maximum visibility */}
          <div className="w-full max-w-6xl mx-auto mb-10 lg:mb-14">
            <div className="relative w-full rounded-xl border border-[var(--border)] overflow-hidden bg-[var(--card-bg)] shadow-xl ring-1 ring-[var(--border)]/50">
              <Image
                src="/dashboard.png"
                alt="Fusionstek Attack Surface dashboard showing scan results, assets, exposure, tech stack, cloud, drift, and metrics"
                width={1600}
                height={960}
                className="w-full h-auto object-contain"
                sizes="100vw"
              />
            </div>
          </div>
          {/* Supporting copy below */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
            <div className="md:col-span-7 space-y-4">
              <p className="text-[var(--neutral-400)] text-base md:text-lg leading-relaxed">
                Choose a completed scan and see everything we found: domains, subdomains, IPs, open ports, URLs, and API endpoints in one place. Health, coverage, confidence, and scope scores show you how thorough the run was—and drift events show exactly what appeared, changed, or disappeared since the last run.
              </p>
              <p className="text-[var(--neutral-400)] text-base md:text-lg leading-relaxed">
                That’s the same view your security team uses to prioritise risk and the same evidence you can point to for regulators and insurers: attacker-grade discovery, with verification and timelines built in.
              </p>
            </div>
            <ul className="text-sm text-[var(--neutral-400)] space-y-2 font-mono uppercase tracking-wider md:col-span-5">
              <li>Full asset inventory per scan</li>
              <li>Health, coverage, confidence, scope</li>
              <li>Drift detection and change tracking</li>
              <li>Audit-ready evidence in one dashboard</li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* Zero-Day Protection */}
      <SectionWrapper
        id="zero-day"
        title="Zero-Day Detection: 7 Days Before CVEs"
        subtitle="Detect threats 3–7 days before CVE publication. Asset-specific correlation, version-aware precision, zero infrastructure overhead—no agents required."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <FeatureCard
            iconName="Zap"
            title="Pre-CVE Visibility"
            description="We monitor GitHub security releases and Exploit-DB so you’re alerted within 24–48 hours of disclosure—before CVE publication."
            index={0}
          />
          <FeatureCard
            iconName="FileSearch"
            title="Asset-Specific Alerts"
            description="Only technologies we detect on your attack surface trigger alerts. No noise for software you don’t run."
            index={1}
          />
          <FeatureCard
            iconName="Clock"
            title="Continuous, No Re-Scans"
            description="One baseline scan powers monitoring every 10 minutes. Zero agents, zero performance impact."
            index={2}
          />
        </div>
        <div className="text-center">
          <CTAButton href="/solutions/zero-day-protection" variant="secondary" showArrow>
            Zero-Day Protection
          </CTAButton>
        </div>
      </SectionWrapper>

      {/* Intelligence: Leaked credentials & breach visibility (HIBP) */}
      <SectionWrapper
        id="intelligence"
        title="Intelligence: Leaked Credentials & Breach Visibility"
        subtitle="We monitor known breach exposures for your domains and identities. Trusted, enterprise-grade breach data—no legal gray areas, no shady collection methods."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            iconName="Shield"
            title="Domain-Level Breach Visibility"
            description="See which of your domains have exposed credentials, which breaches they came from, when the breach occurred, and the type of data exposed (emails, passwords, etc.)—all from a single, authoritative source."
            index={0}
          />
          <FeatureCard
            iconName="Lock"
            title="Trust & Credibility"
            description="Widely trusted by enterprises—used by Microsoft, governments, and security vendors. No password values are ever exposed; data is sourced through transparent, legally clear methods you can stand behind in audits."
            index={1}
          />
          <FeatureCard
            iconName="FileSearch"
            title="Dashboards That Make Sense"
            description="Leaked credentials by domain, top exposed domains, exposure timeline, and breach severity summary—so you can prioritize and report with confidence."
            index={2}
          />
        </div>
      </SectionWrapper>

      {/* How It Works Preview */}
      <SectionWrapper
        id="how-it-works"
        title="How It Works"
        subtitle="Deterministic discovery, verification, and evidence—no guesswork."
      >
        <StepStrip
          steps={[
            {
              number: 1,
              title: "Submit Scope",
              description: "Provide domains and approved scope under your policy.",
            },
            {
              number: 2,
              title: "Discover & Map",
              description: "We enumerate internet-facing assets and build a verified surface map.",
            },
            {
              number: 3,
              title: "Verify & Analyze",
              description: "Findings are validated with evidence, not assumptions.",
            },
            {
              number: 4,
              title: "Deliver Evidence",
              description: "Receive audit-ready reports and continuous assurance tracking.",
            },
          ]}
        />
        <div className="text-center mt-16">
          <CTAButton href="/how-it-works" variant="secondary" showArrow>
            Learn More About Our Process
          </CTAButton>
        </div>
      </SectionWrapper>

      {/* Use Cases Preview */}
      <SectionWrapper
        id="use-cases"
        title="Use Cases"
        subtitle="External assurance for regulated, internet-facing organizations"
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
        <div className="text-center mt-16">
          <CTAButton href="/use-cases" variant="secondary" showArrow>
            Explore All Use Cases
          </CTAButton>
        </div>
      </SectionWrapper>

      {/* Proof/Trust */}
      <SectionWrapper
        id="trust"
        title="Trusted by Security Teams"
        subtitle="Assurance outcomes that security leaders expect"
      >
        <MetricsStrip
          metrics={[
            {
              value: "Daily",
              label: "Refresh Cadence",
              description: "Automated assurance updates",
            },
            {
              value: "24h",
              label: "Baseline SLA",
              description: "Demo report delivery",
            },
            {
              value: "Evidence",
              label: "Verification",
              description: "Findings backed by proof",
            },
            {
              value: "Daily",
              label: "Drift Tracking",
              description: "Posture changes recorded",
            },
          ]}
          className="mb-20"
        />

        <TestimonialStrip
          testimonials={[
            {
              quote: "We finally have external assurance we can defend—clear evidence, timelines, and verification.",
              author: "Security Leadership",
              role: "Enterprise",
              company: "CISO Office",
            },
            {
              quote: "Attacker‑grade discovery plus audit‑ready reporting closed our compliance gaps fast.",
              author: "Risk & Compliance",
              role: "Financial Services",
              company: "Security Team",
            },
            {
              quote: "Daily assurance with verified findings gave us confidence without risky testing.",
              author: "Security Operations",
              role: "Public SaaS",
              company: "Engineering",
            },
          ]}
        />
      </SectionWrapper>

      {/* Final CTA */}
      <section className="py-24 md:py-32 relative">
        {/* Gradient backdrop that allows 3D effect to show through */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/40 via-[var(--background)]/60 to-[var(--background)]/40 pointer-events-none" />
        
        <div 
          ref={ctaRef}
          className="container relative z-10"
        >
          <div 
            className={cn(
              "text-center max-w-2xl mx-auto",
              "opacity-0 translate-y-6",
              ctaRevealed && "animate-[reveal-up_0.7s_cubic-bezier(0.16,1,0.3,1)_forwards]"
            )}
          >
            <h2 className="font-sentient text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight mb-6">
              Ready for EASM That Thinks Like an Attacker?
            </h2>
            <p className="text-[var(--neutral-400)] text-base md:text-lg mb-10 leading-relaxed">
              See how we deliver external attack surface management—same logic, mindset, and timing as attackers—with audit-ready evidence for security and compliance.
            </p>
            <CTAButton href="/demo" variant="primary" size="lg">
              Book a Demo
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
