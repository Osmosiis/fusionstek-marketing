import { PageHero } from "@/components/marketing/page-hero";
import { SectionWrapper } from "@/components/marketing/section-wrapper";
import { LeadForm } from "@/components/forms/lead-form";

export const metadata = {
  title: "Book a Demo - Fusionstek",
  description: "Request a scoped external assurance demo for up to five domains. Submit your intake request to get started.",
};

export default function DemoPage() {
  return (
    <>
      <PageHero
        title="Book a Demo"
        subtitle="Request a policy‑safe assurance demo with audit‑ready evidence."
      />

      {/* Form Section */}
      <SectionWrapper>
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-[var(--neutral-500)] text-sm mb-8">
            This is a scoped baseline request. We deliver a report within 24 hours by default.
          </p>
          <LeadForm />
        </div>
      </SectionWrapper>
    </>
  );
}
