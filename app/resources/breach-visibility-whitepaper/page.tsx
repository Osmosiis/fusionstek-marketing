import { SectionWrapper } from "@/components/marketing/section-wrapper";
import { PageHero } from "@/components/marketing/page-hero";
import { CTAButton } from "@/components/marketing/cta-button";
import Link from "next/link";

export const metadata = {
  title: "Breach & Leaked Credentials Visibility Whitepaper | Fusionstek",
  description:
    "How domain-level breach and credential exposure visibility supports security and compliance—trusted sources, no legal gray areas.",
};

export default function BreachVisibilityWhitepaperPage() {
  return (
    <>
      <PageHero
        title="Breach & Leaked Credentials Visibility: A Whitepaper"
        subtitle="Domain-level visibility into exposed credentials and breaches—enterprise-trusted data, defensible for audits and compliance."
      />

      <SectionWrapper
        title="What’s Inside"
        subtitle="Why breach visibility belongs in your assurance programme"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card-bg)]">
            <h3 className="text-base font-semibold text-[var(--foreground)] mb-2">
              Domain-level visibility
            </h3>
            <p className="text-sm text-[var(--neutral-400)] leading-relaxed">
              See which of your domains have exposed credentials, which breaches they came from, when they occurred, and the type of data exposed—from a single, authoritative source.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card-bg)]">
            <h3 className="text-base font-semibold text-[var(--foreground)] mb-2">
              Trust & credibility
            </h3>
            <p className="text-sm text-[var(--neutral-400)] leading-relaxed">
              Widely trusted by enterprises, governments, and security vendors. No password values exposed; data sourced through transparent, legally clear methods you can stand behind in audits.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card-bg)]">
            <h3 className="text-base font-semibold text-[var(--foreground)] mb-2">
              Dashboards that make sense
            </h3>
            <p className="text-sm text-[var(--neutral-400)] leading-relaxed">
              Leaked credentials by domain, top exposed domains, exposure timeline, and breach severity summary—so you can prioritise and report with confidence.
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
            Get the full whitepaper on breach and leaked credentials visibility. Request the PDF below.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact?subject=Breach%20Visibility%20Whitepaper" variant="primary" size="lg">
              Request PDF
            </CTAButton>
            <CTAButton href="/#intelligence" variant="secondary" size="lg" showArrow>
              Intelligence on Homepage
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
