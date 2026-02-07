import { PageHero } from "@/components/marketing/page-hero";
import { SectionWrapper } from "@/components/marketing/section-wrapper";

export const metadata = {
  title: "Terms of Service - Fusionstek",
  description: "Terms for Fusionstek’s external assurance platform and demo requests.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        subtitle="Clear rules for authorized, compliance-safe external assurance."
      />

      <SectionWrapper>
        <div className="max-w-3xl mx-auto space-y-8 text-[var(--neutral-300)]">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">Authorization required</h2>
            <p>
              You must own or have explicit authorization to request assessment of the
              domains you submit. We enforce allowlisted scope and may reject requests
              without proper authorization.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">Scope & consent</h2>
            <p>
              All scans are policy-governed and bound to an explicit scope. Scope can be
              expanded only by authorized users. VDP-safe or compliance-safe modes restrict
              high-risk actions by default.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">Demo scope limits</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Maximum 5 domains per demo request</li>
              <li>No file uploads for demo requests</li>
              <li>Baseline report delivered within 24 hours by default</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">Compliance-safe execution</h2>
            <p>
              Demo assessments are designed to be low-risk and policy governed. We do not
              perform brute force, exploit chaining, or unauthorized access. Any higher-risk
              testing requires explicit consent and a formal engagement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">Platform usage</h2>
            <p>
              The Fusionstek platform provides external assurance reports, evidence artifacts,
              and monitoring signals. Customers are responsible for applying remediation and
              internal controls based on the findings.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">Use of results</h2>
            <p>
              Results are provided for external assurance and risk awareness. They are not a
              penetration test or a guarantee of security. Customers are responsible for
              remediation decisions and internal validation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">Limitation of liability</h2>
            <p>
              Fusionstek provides demo assessments on a best-effort basis. We do not warrant
              uninterrupted service or complete coverage. Liability is limited to the maximum
              extent permitted by law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">Changes & availability</h2>
            <p>
              We may update features, policies, or service availability over time. Material
              changes will be communicated through product updates or release notes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">Contact</h2>
            <p>
              Questions about these terms can be sent to legal@fusionstek.com.
            </p>
          </section>
        </div>
      </SectionWrapper>
    </>
  );
}
