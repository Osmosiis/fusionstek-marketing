import { SectionWrapper } from "@/components/marketing/section-wrapper";
import { PageHero } from "@/components/marketing/page-hero";
import { CTAButton } from "@/components/marketing/cta-button";
import Link from "next/link";

export const metadata = {
  title: "Drift & Continuous Monitoring Whitepaper | Fusionstek",
  description:
    "How drift detection and continuous assurance prove you stayed secure over time—baseline snapshots, refresh cycles, and change tracking.",
};

export default function DriftContinuousMonitoringWhitepaperPage() {
  return (
    <>
      <PageHero
        title="Drift & Continuous Monitoring: A Whitepaper"
        subtitle="Why one-off scans aren’t enough—and how baseline snapshots plus continuous monitoring prove posture over time."
      />

      <SectionWrapper
        title="What’s Inside"
        subtitle="From baseline to continuous assurance"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card-bg)]">
            <h3 className="text-base font-semibold text-[var(--foreground)] mb-2">
              Baseline snapshots
            </h3>
            <p className="text-sm text-[var(--neutral-400)] leading-relaxed">
              Every completed scan produces a standardised baseline. That snapshot is the source of truth for drift detection and for proving what changed—and when.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card-bg)]">
            <h3 className="text-base font-semibold text-[var(--foreground)] mb-2">
              Drift detection
            </h3>
            <p className="text-sm text-[var(--neutral-400)] leading-relaxed">
              Compare refresh runs against the baseline to see what’s new, changed, or disappeared. No guesswork—clear evidence of posture change over time.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card-bg)]">
            <h3 className="text-base font-semibold text-[var(--foreground)] mb-2">
              Continuous assurance
            </h3>
            <p className="text-sm text-[var(--neutral-400)] leading-relaxed">
              Daily refresh cadence and drift events give you and your auditors a timeline of continuous monitoring—not a point-in-time snapshot that goes stale.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-sentient text-3xl md:text-4xl font-extralight tracking-tight mb-6">
            Download the Whitepaper
          </h2>
          <p className="text-[var(--neutral-400)] text-lg mb-8">
            Get the full whitepaper on drift detection and continuous monitoring. Request the PDF below.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact?subject=Drift%20%26%20Continuous%20Monitoring%20Whitepaper" variant="primary" size="lg">
              Request PDF
            </CTAButton>
            <CTAButton href="/how-it-works" variant="secondary" size="lg" showArrow>
              How It Works
            </CTAButton>
          </div>
          <p className="mt-6 text-xs text-[var(--neutral-500)]">
            <Link href="/resources" className="text-[var(--primary)] hover:underline">All resources</Link>
            {" · "}
            <Link href="/contact" className="text-[var(--primary)] hover:underline">Contact us</Link>
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
