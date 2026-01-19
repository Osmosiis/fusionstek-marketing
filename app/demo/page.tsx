import { PageHero } from "@/components/marketing/page-hero";
import { SectionWrapper } from "@/components/marketing/section-wrapper";
import { LeadForm } from "@/components/forms/lead-form";

export const metadata = {
  title: "Book a Demo - Fusionstek",
  description: "Request a security assessment for your domains and files. Submit your intake request to get started.",
};

export default function DemoPage() {
  return (
    <>
      <PageHero
        title="Book a Demo"
        subtitle="Request a security assessment for your domains and files."
      />

      {/* Form Section */}
      <SectionWrapper>
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-[var(--neutral-500)] text-sm mb-8">
            This is an intake request form. Results will be emailed to you after processing.
          </p>
          <LeadForm />
        </div>
      </SectionWrapper>
    </>
  );
}
