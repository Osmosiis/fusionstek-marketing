"use client";

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

  return (
    <>
      <Hero />
      <Leva hidden />

      {/* Problem Section */}
      <SectionWrapper
        id="problem"
        title="Regulatory-Defensible External Security"
        subtitle="Continuous proof that your internet-facing apps are monitored, verified, and audit-ready."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            iconName="AlertTriangle"
            title="External Exposure Blind Spots"
            description="Unmonitored internet-facing assets create silent risk and unaccounted attack paths."
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
            description="Compliance requires continuous evidence of monitoring, remediation, and drift control—not one-off scans."
            index={2}
          />
        </div>
      </SectionWrapper>

      {/* Value/Difference */}
      <SectionWrapper
        id="value"
        title="Why Fusionstek for External Assurance"
        subtitle="Continuous, evidence-grade visibility that stands up to regulators and insurers."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            iconName="Zap"
            title="Attacker-Grade Discovery"
            description="Map every internet-facing asset with real evidence, not assumptions."
            index={0}
          />
          <FeatureCard
            iconName="FileSearch"
            title="Verification-First Findings"
            description="Only show findings that can be verified and reproduced."
            index={1}
          />
          <FeatureCard
            iconName="Shield"
            title="Audit-Ready Reporting"
            description="Explainable, deterministic reports built for regulators and insurers."
            index={2}
          />
          <FeatureCard
            iconName="Users"
            title="Continuous Assurance"
            description="Daily refresh + drift detection to prove you stayed secure over time."
            index={3}
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
              Ready for Attacker-Grade Assurance?
            </h2>
            <p className="text-[var(--neutral-400)] text-base md:text-lg mb-10 leading-relaxed">
              See how we prove external security with audit-ready evidence.
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
