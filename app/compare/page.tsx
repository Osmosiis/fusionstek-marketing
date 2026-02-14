import { SectionWrapper } from "@/components/marketing/section-wrapper";
import { PageHero } from "@/components/marketing/page-hero";
import { CTAButton } from "@/components/marketing/cta-button";
import { CompareTable } from "./compare-table";
import { Check } from "lucide-react";

export const metadata = {
  title: "Compare - Zero-Day Detection & EASM | Fusionstek",
  description:
    "See how Fusionstek zero-day detection compares: 3–7 days faster, 95% accuracy, zero infrastructure overhead vs. traditional CVE-based and agent-based tools.",
};

const comparisonRows = [
  {
    metric: "Mean time to detection",
    traditional: "7–14 days (post-CVE)",
    fusionstek: "24–48 hours (pre-CVE)",
    improvement: "3–7 days faster",
  },
  {
    metric: "False positive rate",
    traditional: "60–80%",
    fusionstek: "<5%",
    improvement: "55–75% reduction",
  },
  {
    metric: "Threat coverage",
    traditional: "CVE feeds only",
    fusionstek: "GitHub + Exploit-DB + CVE",
    improvement: "3× coverage",
  },
  {
    metric: "Version accuracy",
    traditional: "~40% (name-only)",
    fusionstek: "95% (semantic)",
    improvement: "55% improvement",
  },
  {
    metric: "Infrastructure overhead",
    traditional: "5–15% CPU (agents)",
    fusionstek: "0% (passive)",
    improvement: "100% reduction",
  },
  {
    metric: "Scan cost (continuous monitoring)",
    traditional: "Hourly/daily scans",
    fusionstek: "1 baseline / 30+ days",
    improvement: "~99% scan cost reduction",
  },
  {
    metric: "Alert prioritization",
    traditional: "Binary (affected / not)",
    fusionstek: "Weighted 0.0–1.0",
    improvement: "Actionable scoring",
  },
];

const easmValidationRows = [
  {
    metric: "Findings delivered",
    traditional: "Raw scanner output; large volume",
    fusionstek: "Validated, evidence-backed list",
    improvement: "Less triage, defensible",
  },
  {
    metric: "Proof artifacts",
    traditional: "Often none or minimal",
    fusionstek: "Screenshots, logs, HAR, repro steps",
    improvement: "Audit-ready evidence",
  },
  {
    metric: "Exploitability",
    traditional: "Claimed by scanner only",
    fusionstek: "Verified in context (reachability, auth, WAF)",
    improvement: "Trust with regulators",
  },
];

export default function ComparePage() {
  return (
    <>
      <PageHero
        title="How We Compare"
        subtitle="Zero-day detection and continuous monitoring: Fusionstek vs. traditional CVE-based and agent-based approaches."
      />

      <SectionWrapper
        title="Zero-Day Detection: Key Metrics"
        subtitle="Analytical comparison for security and cost decisions"
      >
        <CompareTable>
          <table className="w-full min-w-[640px] text-left">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="px-6 py-4 text-xs font-mono uppercase tracking-wider text-[var(--neutral-400)]">
                  Metric
                </th>
                <th className="px-6 py-4 text-xs font-mono uppercase tracking-wider text-[var(--neutral-400)]">
                  Traditional vendors
                </th>
                <th className="px-6 py-4 text-xs font-mono uppercase tracking-wider text-[var(--primary)]">
                  Fusionstek
                </th>
                <th className="px-6 py-4 text-xs font-mono uppercase tracking-wider text-[var(--neutral-400)]">
                  Improvement
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, index) => (
                <tr
                  key={row.metric}
                  className="border-b border-[var(--border)] last:border-b-0 hover:bg-[var(--card-bg-hover)]/50 transition-colors"
                >
                  <td className="px-6 py-4 text-sm font-medium text-[var(--foreground)]">
                    {row.metric}
                  </td>
                  <td className="px-6 py-4 text-sm text-[var(--neutral-400)]">
                    {row.traditional}
                  </td>
                  <td className="px-6 py-4 text-sm text-[var(--foreground)]">
                    {row.fusionstek}
                  </td>
                  <td className="px-6 py-4 text-sm text-[var(--primary)]">
                    {row.improvement}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CompareTable>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <CTAButton href="/solutions/zero-day-protection" variant="secondary" showArrow>
            Zero-Day Protection Details
          </CTAButton>
          <CTAButton href="/demo" variant="primary">
            Book a Demo
          </CTAButton>
        </div>
      </SectionWrapper>

      <SectionWrapper
        title="EASM Findings: Validated vs Raw Output"
        subtitle="We verify what’s exploitable before we escalate—so you get a short, evidence-backed list, not thousands of raw alerts."
      >
        <CompareTable>
          <table className="w-full min-w-[640px] text-left">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="px-6 py-4 text-xs font-mono uppercase tracking-wider text-[var(--neutral-400)]">
                  Aspect
                </th>
                <th className="px-6 py-4 text-xs font-mono uppercase tracking-wider text-[var(--neutral-400)]">
                  Raw / unvalidated
                </th>
                <th className="px-6 py-4 text-xs font-mono uppercase tracking-wider text-[var(--primary)]">
                  Fusionstek
                </th>
                <th className="px-6 py-4 text-xs font-mono uppercase tracking-wider text-[var(--neutral-400)]">
                  Outcome
                </th>
              </tr>
            </thead>
            <tbody>
              {easmValidationRows.map((row) => (
                <tr
                  key={row.metric}
                  className="border-b border-[var(--border)] last:border-b-0 hover:bg-[var(--card-bg-hover)]/50 transition-colors"
                >
                  <td className="px-6 py-4 text-sm font-medium text-[var(--foreground)]">
                    {row.metric}
                  </td>
                  <td className="px-6 py-4 text-sm text-[var(--neutral-400)]">
                    {row.traditional}
                  </td>
                  <td className="px-6 py-4 text-sm text-[var(--foreground)]">
                    {row.fusionstek}
                  </td>
                  <td className="px-6 py-4 text-sm text-[var(--primary)]">
                    {row.improvement}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CompareTable>
      </SectionWrapper>

      <SectionWrapper
        title="Why It Matters"
        subtitle="Outcomes that security and compliance teams care about"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          <div>
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 mb-4">
              <Check className="w-6 h-6 text-[var(--primary)]" strokeWidth={1.5} />
            </div>
            <h3 className="text-base font-semibold text-[var(--foreground)] mb-2">
              Earlier visibility
            </h3>
            <p className="text-sm text-[var(--neutral-400)]">
              Detect and patch before CVE publication—reduce exposure window by 50–70%.
            </p>
          </div>
          <div>
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 mb-4">
              <Check className="w-6 h-6 text-[var(--primary)]" strokeWidth={1.5} />
            </div>
            <h3 className="text-base font-semibold text-[var(--foreground)] mb-2">
              Less noise
            </h3>
            <p className="text-sm text-[var(--neutral-400)]">
              Asset-specific correlation means alerts only for technologies you actually run.
            </p>
          </div>
          <div>
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 mb-4">
              <Check className="w-6 h-6 text-[var(--primary)]" strokeWidth={1.5} />
            </div>
            <h3 className="text-base font-semibold text-[var(--foreground)] mb-2">
              No extra tooling
            </h3>
            <p className="text-sm text-[var(--neutral-400)]">
              No agents, no performance impact—works from your existing EASM baseline.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-sentient text-3xl md:text-4xl font-extralight tracking-tight mb-6">
            See the Full Platform
          </h2>
          <p className="text-[var(--neutral-400)] text-lg mb-10">
            Zero-day detection is part of our complete EASM and assurance platform.
          </p>
          <CTAButton href="/demo" variant="primary" size="lg">
            Book a Demo
          </CTAButton>
        </div>
      </SectionWrapper>
    </>
  );
}
