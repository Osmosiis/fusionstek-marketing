import { PageHero } from "@/components/marketing/page-hero";
import { SectionWrapper } from "@/components/marketing/section-wrapper";

export const metadata = {
  title: "Privacy Policy - Fusionstek",
  description: "How Fusionstek collects, uses, and protects customer and platform data.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we handle data across demos, scans, and the assurance platform."
      />

      <SectionWrapper>
        <div className="max-w-3xl mx-auto space-y-8 text-[var(--neutral-300)]">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">What we collect</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Account data: names, company emails, titles, and roles</li>
              <li>Company data: organization name, industry, and engagement metadata</li>
              <li>Scope data: domains, allowlists/denylists, and consent records</li>
              <li>Scan artifacts: findings, evidence, timestamps, and run metadata</li>
              <li>Operational logs: service health and error telemetry (non-sensitive)</li>
              <li>Abuse prevention signals: IP address and user agent (hashed)</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">What we do not collect</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>No customer passwords or authentication tokens</li>
              <li>No internal system access or privileged credentials</li>
              <li>No PII beyond what you submit in the form</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">How we use data</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Deliver external assurance reports and evidence artifacts</li>
              <li>Validate scope and consent for authorized assessment</li>
              <li>Enable continuous assurance, drift detection, and verification</li>
              <li>Provide follow-up communication and support</li>
              <li>Prevent abuse and ensure platform integrity</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">Retention</h2>
            <p>
              Demo request data is retained only as long as needed to deliver the report and
              provide follow-up. Platform artifacts and reports are retained based on customer
              policy and contractual requirements. You can request deletion at any time.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">Sharing</h2>
            <p>
              We do not sell or share your data with third parties. We may use service
              providers (such as email delivery) strictly to fulfill your request.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">Security</h2>
            <p>
              We use encryption in transit, access controls, and least-privilege practices to
              protect data. Evidence and artifacts are stored with restricted access and are
              scoped per customer.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">Your rights</h2>
            <p>
              You can request deletion or correction of your data. Contact us at
              privacy@fusionstek.com.
            </p>
          </section>
        </div>
      </SectionWrapper>
    </>
  );
}
