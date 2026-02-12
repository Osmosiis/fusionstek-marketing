import Link from "next/link";
import { SectionWrapper } from "@/components/marketing/section-wrapper";
import { PageHero } from "@/components/marketing/page-hero";
import { FeatureCard } from "@/components/marketing/feature-card";
import { StepStrip } from "@/components/marketing/step-strip";
import { MetricsStrip } from "@/components/marketing/metrics-strip";
import { FAQAccordion } from "@/components/marketing/faq-accordion";
import { CTAButton } from "@/components/marketing/cta-button";

export const metadata = {
  title: "Zero-Day Protection - Detect Threats 7 Days Before CVEs | Fusionstek",
  description:
    "Detect zero-day threats 3–7 days before CVE publication. Asset-specific correlation, version-aware precision, zero infrastructure overhead. No agents required.",
};

export default function ZeroDayProtectionPage() {
  return (
    <>
      <PageHero
        title="Zero-Day Protection"
        subtitle="Detect threats 7 days before CVEs—without agents or performance impact. Asset-specific correlation, continuous monitoring from a single baseline."
      />

      {/* Problem */}
      <SectionWrapper
        title="The Zero-Day Gap"
        subtitle="Traditional CVE-based detection leaves you exposed for days or weeks after a vulnerability is disclosed—and generic feeds create alert fatigue."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            iconName="AlertTriangle"
            title="Exposure Before CVEs"
            description="Attackers and researchers often disclose exploits or security releases days before a CVE is published. CVE-only tools see nothing until it’s official."
            index={0}
          />
          <FeatureCard
            iconName="Shield"
            title="Alert Fatigue"
            description="Generic threat feeds fire alerts for technologies you don’t run. Security teams waste time on false positives instead of real risk."
            index={1}
          />
          <FeatureCard
            iconName="Lock"
            title="Scan-Only Blind Spots"
            description="If zero-day checks only run when you scan, you’re unprotected between scans. You need continuous monitoring without continuous scanning."
            index={2}
          />
        </div>
      </SectionWrapper>

      {/* Solution */}
      <SectionWrapper
        title="How We’re Different"
        subtitle="We correlate your actual tech stack with GitHub security releases and Exploit-DB—so you see pre-CVE threats, only for what you run, with version-aware precision."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            iconName="Zap"
            title="3–7 Days Earlier Detection"
            description="Monitor GitHub security releases and Exploit-DB so you’re alerted within 24–48 hours of disclosure—before CVE publication."
            index={0}
          />
          <FeatureCard
            iconName="FileSearch"
            title="100% Asset-Specific"
            description="Only technologies we detect on your attack surface trigger alerts. No WordPress alerts if you don’t run WordPress."
            index={1}
          />
          <FeatureCard
            iconName="Clock"
            title="Version-Aware Precision"
            description="Semantic version comparison: we alert when a security release is newer than your detected version—95% accuracy vs. name-only matching."
            index={2}
          />
          <FeatureCard
            iconName="CheckCircle2"
            title="Zero Infrastructure Overhead"
            description="No agents, no sensors. Works from passive reconnaissance and a baseline snapshot—continuous monitoring every 10 minutes."
            index={3}
          />
        </div>
      </SectionWrapper>

      {/* Metrics */}
      <SectionWrapper
        title="By the Numbers"
        subtitle="Analytical advantages that matter for security and cost"
      >
        <MetricsStrip
          metrics={[
            { value: "3–7", label: "Days Faster", description: "vs. CVE-only detection" },
            { value: "<5%", label: "False Positives", description: "Asset-specific correlation" },
            { value: "95%", label: "Version Accuracy", description: "Semantic version matching" },
            { value: "0%", label: "Infrastructure Overhead", description: "No agents required" },
          ]}
          className="mb-0"
        />
      </SectionWrapper>

      {/* How it works */}
      <SectionWrapper
        title="How It Works"
        subtitle="One baseline scan powers continuous zero-day monitoring—no re-scanning needed."
      >
        <StepStrip
          steps={[
            {
              number: 1,
              title: "Baseline Scan",
              description: "We fingerprint your attack surface and build a tech stack (names + versions) from one completed scan.",
            },
            {
              number: 2,
              title: "Baseline Snapshot",
              description: "Tech stack is stored in a baseline snapshot. Zero-day monitoring uses this—no repeated scans.",
            },
            {
              number: 3,
              title: "Continuous Checks",
              description: "Every 10 minutes we check GitHub Releases and Exploit-DB for matches to your tech stack.",
            },
            {
              number: 4,
              title: "Version-Aware Alerts",
              description: "We only raise high-confidence alerts when a security release is newer than your detected version.",
            },
          ]}
        />
      </SectionWrapper>

      {/* Use cases */}
      <SectionWrapper
        title="Who It’s For"
        subtitle="Security and compliance teams who need earlier visibility without more tooling overhead"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            iconName="Shield"
            title="CISOs & Security Leadership"
            description="Reduce zero-day exposure by 50–70% and cut scan costs—one baseline enables 30+ days of continuous monitoring."
            index={0}
          />
          <FeatureCard
            iconName="Users"
            title="Security Operations"
            description="Eliminate 60–80% of false positives with asset-specific correlation. Focus on alerts that actually apply to your stack."
            index={1}
          />
          <FeatureCard
            iconName="Lock"
            title="DevOps & Platform"
            description="Zero agents, zero performance impact. Works from passive data—no code changes or deployment complexity."
            index={2}
          />
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper
        title="Frequently Asked Questions"
        subtitle="Zero-day detection and continuous monitoring"
      >
        <div className="max-w-3xl mx-auto">
          <FAQAccordion
            faqs={[
              {
                question: "Do I need to run scans every 10 minutes?",
                answer:
                  "No. One baseline scan creates a tech stack snapshot. Zero-day checks run every 10 minutes against that snapshot—no re-scanning. You get continuous monitoring from a single baseline.",
              },
              {
                question: "What if we don’t run any of the mapped technologies?",
                answer:
                  "We have built-in mappings for common tech (OpenSSL, nginx, Django, WordPress, Node, etc.) and support custom mappings via config. If no tech stack is detected, the module completes with no alerts.",
              },
              {
                question: "How do you avoid false positives?",
                answer:
                  "We only correlate threats with technologies we actually detect on your attack surface, and we use semantic version comparison so we alert when a fix is newer than your version—not just when a name matches.",
              },
              {
                question: "Does this require agents or instrumentation?",
                answer:
                  "No. We use passive fingerprinting (web headers, JS, tech detection) from your EASM data. No agents, no runtime sensors, no performance impact.",
              },
            ]}
          />
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-sentient text-3xl md:text-4xl font-extralight tracking-tight mb-6">
            Ready for Zero-Day Detection That Runs Ahead of CVEs?
          </h2>
          <p className="text-[var(--neutral-400)] text-lg mb-10">
            See how we deliver 3–7 days earlier detection with zero infrastructure overhead.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/demo" variant="primary" size="lg">
              Book a Demo
            </CTAButton>
            <CTAButton href="/compare" variant="secondary" size="lg" showArrow>
              Compare With Others
            </CTAButton>
          </div>
          <p className="mt-6 text-sm text-[var(--neutral-500)]">
            <Link href="/blog" className="text-[var(--primary)] hover:underline">Blog</Link>
            {" · "}
            <Link href="/resources" className="text-[var(--primary)] hover:underline">Resources</Link>
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
