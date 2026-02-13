import { PageHero } from "@/components/marketing/page-hero";
import { SectionWrapper } from "@/components/marketing/section-wrapper";
import { DemoRequestForm } from "@/components/forms/demo-request-form";

export const metadata = {
  title: "Join the Waiting List - Fusionstek",
  description: "Join the Fusionstek waiting list. We'll contact you as soon as we go live.",
};

export default function DemoPage() {
  return (
    <>
      <PageHero
        title="Join the Waiting List"
        subtitle="Be the first to know when we go live. We'll contact you as soon as Fusionstek is ready."
      />

      <SectionWrapper>
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-[var(--neutral-500)] text-sm mb-8">
            Enter your details below and we'll add you to the list. You'll receive a confirmation email and we'll reach out when we launch.
          </p>
          <DemoRequestForm />
        </div>
      </SectionWrapper>
    </>
  );
}
