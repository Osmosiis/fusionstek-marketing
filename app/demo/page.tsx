import { PageHero } from "@/components/marketing/page-hero";
import { SectionWrapper } from "@/components/marketing/section-wrapper";
import { DemoRequestForm } from "@/components/forms/demo-request-form";

export const metadata = {
  title: "Book a Demo - Fusionstek",
  description: "Schedule a demo of Fusionstek EASM and regulator assurance. We'll reach out to find a time that works.",
};

export default function DemoPage() {
  return (
    <>
      <PageHero
        title="Book a Demo"
        subtitle="See how EASM and regulator assurance work in practice. We'll reach out to schedule a call."
      />

      <SectionWrapper>
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-[var(--neutral-500)] text-sm mb-8">
            Share your details and we'll get in touch to set up a time that works for you.
          </p>
          <DemoRequestForm />
        </div>
      </SectionWrapper>
    </>
  );
}
