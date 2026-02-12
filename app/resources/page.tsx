import Link from "next/link";
import { SectionWrapper } from "@/components/marketing/section-wrapper";
import { PageHero } from "@/components/marketing/page-hero";
import { CTAButton } from "@/components/marketing/cta-button";

const whitepapers = [
  {
    slug: "zero-day-whitepaper",
    title: "Zero-Day Detection",
    description: "How we detect threats 3–7 days before CVE publication—asset-specific correlation, version-aware precision, zero infrastructure overhead.",
    href: "/resources/zero-day-whitepaper",
  },
  {
    slug: "easm-assurance-whitepaper",
    title: "EASM & External Assurance",
    description: "Attacker-grade discovery with verification-first findings and audit-ready evidence. Why defensible proof matters for EASM.",
    href: "/resources/easm-assurance-whitepaper",
  },
  {
    slug: "regulator-assurance-whitepaper",
    title: "Regulator & Insurer Assurance",
    description: "Verification ledger, due-care timeline, and evidence that stands up to auditors and insurers.",
    href: "/resources/regulator-assurance-whitepaper",
  },
  {
    slug: "breach-visibility-whitepaper",
    title: "Breach & Leaked Credentials Visibility",
    description: "Domain-level breach and credential exposure visibility—trusted sources, defensible for audits and compliance.",
    href: "/resources/breach-visibility-whitepaper",
  },
  {
    slug: "drift-continuous-monitoring-whitepaper",
    title: "Drift & Continuous Monitoring",
    description: "Baseline snapshots, drift detection, and continuous assurance so you can prove posture over time.",
    href: "/resources/drift-continuous-monitoring-whitepaper",
  },
];

export const metadata = {
  title: "Resources - Whitepapers & Guides | Fusionstek",
  description:
    "Whitepapers on zero-day detection, EASM assurance, regulator compliance, breach visibility, and continuous monitoring.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        title="Resources"
        subtitle="Whitepapers and guides on zero-day detection, EASM, regulator assurance, breach visibility, and continuous monitoring."
      />

      <SectionWrapper>
        <div className="max-w-3xl mx-auto space-y-8">
          {whitepapers.map((wp) => (
            <article
              key={wp.slug}
              className="group border border-[var(--border)] rounded-xl bg-[var(--card-bg)] p-6 md:p-8 hover:border-[var(--border-hover)] transition-colors"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-[var(--foreground)] tracking-tight group-hover:text-[var(--primary)] transition-colors">
                <Link href={wp.href}>{wp.title}</Link>
              </h2>
              <p className="mt-3 text-[var(--neutral-400)] text-sm md:text-base leading-relaxed">
                {wp.description}
              </p>
              <div className="mt-4">
                <Link
                  href={wp.href}
                  className="text-sm font-mono uppercase tracking-wider text-[var(--primary)] hover:underline"
                >
                  Request PDF →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <CTAButton href="/blog" variant="secondary" showArrow>
            Read the Blog
          </CTAButton>
        </div>
      </SectionWrapper>
    </>
  );
}
