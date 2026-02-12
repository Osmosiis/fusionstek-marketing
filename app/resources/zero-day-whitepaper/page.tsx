import { SectionWrapper } from "@/components/marketing/section-wrapper";
import { PageHero } from "@/components/marketing/page-hero";
import { CTAButton } from "@/components/marketing/cta-button";
import Link from "next/link";

export const metadata = {
  title: "Zero-Day Detection Whitepaper | Fusionstek",
  description:
    "Download our whitepaper: how to detect zero-day threats 7 days before CVEs with asset-specific correlation and zero infrastructure overhead.",
};

export default function ZeroDayWhitepaperPage() {
  return (
    <>
      <PageHero
        title="Zero-Day Detection: A Technical Whitepaper"
        subtitle="How we detect threats 3–7 days before CVE publication—without agents or continuous scanning."
      />

      <SectionWrapper
        title="What’s Inside"
        subtitle="Evidence-based approach to early zero-day visibility"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card-bg)]">
            <h3 className="text-base font-semibold text-[var(--foreground)] mb-2">
              The CVE gap
            </h3>
            <p className="text-sm text-[var(--neutral-400)] leading-relaxed">
              Why CVE-only detection leaves you exposed for 7–14 days, and how upstream monitoring (GitHub, Exploit-DB) closes the gap.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card-bg)]">
            <h3 className="text-base font-semibold text-[var(--foreground)] mb-2">
              Asset-specific correlation
            </h3>
            <p className="text-sm text-[var(--neutral-400)] leading-relaxed">
              How we fingerprint your tech stack once and correlate only with threats that match—reducing false positives by 60–80%.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card-bg)]">
            <h3 className="text-base font-semibold text-[var(--foreground)] mb-2">
              Version-aware precision
            </h3>
            <p className="text-sm text-[var(--neutral-400)] leading-relaxed">
              Semantic version comparison so you’re only alerted when a security release is newer than your detected version—95% accuracy.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        title="Key Metrics"
        subtitle="Analytical advantages for security and cost"
      >
        <div className="max-w-2xl mx-auto text-[var(--neutral-400)] text-sm md:text-base leading-relaxed space-y-4">
          <p>
            <strong className="text-[var(--foreground)]">3–7 days faster detection</strong> — We monitor GitHub security releases and Exploit-DB so you’re alerted within 24–48 hours of disclosure, before CVE publication.
          </p>
          <p>
            <strong className="text-[var(--foreground)]">&lt;5% false positive rate</strong> — Alerts only for technologies we detect on your attack surface. No WordPress alerts if you don’t run WordPress.
          </p>
          <p>
            <strong className="text-[var(--foreground)]">Zero infrastructure overhead</strong> — No agents, no sensors. One baseline scan powers continuous monitoring every 10 minutes.
          </p>
          <p>
            <strong className="text-[var(--foreground)]">~99% scan cost reduction</strong> — One baseline enables 30+ days of continuous zero-day checks instead of hourly or daily full scans.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-sentient text-3xl md:text-4xl font-extralight tracking-tight mb-6">
            Download the Whitepaper
          </h2>
          <p className="text-[var(--neutral-400)] text-lg mb-8">
            Get the full technical whitepaper and ROI considerations. Enter your email and we’ll send you the PDF.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact?subject=Zero-Day%20Whitepaper" variant="primary" size="lg">
              Request PDF
            </CTAButton>
            <CTAButton href="/solutions/zero-day-protection" variant="secondary" size="lg" showArrow>
              Zero-Day Protection
            </CTAButton>
          </div>
          <p className="mt-6 text-xs text-[var(--neutral-500)]">
            <Link href="/resources" className="text-[var(--primary)] hover:underline">All resources</Link>
            {" · "}
            Or <Link href="/contact" className="text-[var(--primary)] hover:underline">contact us</Link> to request the whitepaper and schedule a demo.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
