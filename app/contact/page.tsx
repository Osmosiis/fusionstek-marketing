import { PageHero } from "@/components/marketing/page-hero";
import { SectionWrapper } from "@/components/marketing/section-wrapper";
import { LeadForm } from "@/components/forms/lead-form";

export const metadata = {
  title: "Contact Us - Fusionstek",
  description: "Get in touch with the Fusionstek team. Submit your inquiry and we'll get back to you soon.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Have questions? We're here to help. Fill out the form below and we'll get back to you."
      />

      {/* Form Section */}
      <SectionWrapper>
        <div className="max-w-2xl mx-auto">
          <LeadForm />
        </div>
      </SectionWrapper>
    </>
  );
}
