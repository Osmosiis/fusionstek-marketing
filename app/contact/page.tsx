import { PageHero } from "@/components/marketing/page-hero";
import { SectionWrapper } from "@/components/marketing/section-wrapper";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata = {
  title: "Contact Us - Fusionstek",
  description: "Get in touch with the Fusionstek team about assurance, scope, or compliance needs.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Questions about scope, compliance, or assurance? We’re here to help."
      />

      {/* Form Section */}
      <SectionWrapper>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </SectionWrapper>
    </>
  );
}
