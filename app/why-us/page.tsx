import { SectionWrapper } from "@/components/marketing/section-wrapper";
import { PageHero } from "@/components/marketing/page-hero";
import { IconCard } from "@/components/marketing/icon-card";
import { CapabilitiesGrid } from "@/components/marketing/capabilities-grid";
import { CTAButton } from "@/components/marketing/cta-button";

export const metadata = {
  title: "Why Us - Fusionstek",
  description: "Discover what makes Fusionstek the trusted choice for advanced cybersecurity solutions.",
};

export default function WhyUsPage() {
  return (
    <>
      <PageHero
        title="Why Choose Fusionstek"
        subtitle="Advanced technology, expert support, and proven results."
      />

      {/* Differentiators */}
      <SectionWrapper
        title="What Sets Us Apart"
        subtitle="Comprehensive security solutions built for modern threats"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <IconCard
            iconName="Shield"
            title="Advanced Detection"
            description="State-of-the-art algorithms and threat intelligence for comprehensive security analysis."
            index={0}
          />
          <IconCard
            iconName="Zap"
            title="Fast Processing"
            description="Real-time scanning with synchronous completion when possible, ensuring quick results."
            index={1}
          />
          <IconCard
            iconName="Lock"
            title="Secure by Design"
            description="End-to-end encryption, secure file handling, and automatic data retention policies."
            index={2}
          />
          <IconCard
            iconName="CheckCircle2"
            title="Proven Results"
            description="Trusted by security teams across industries to protect critical digital infrastructure."
            index={3}
          />
          <IconCard
            iconName="Users"
            title="Expert Support"
            description="Dedicated security professionals available to help you understand and act on findings."
            index={4}
          />
          <IconCard
            iconName="TrendingUp"
            title="Continuous Improvement"
            description="Regular updates and enhancements to stay ahead of evolving cyber threats."
            index={5}
          />
        </div>
      </SectionWrapper>

      {/* Capabilities Grid */}
      <SectionWrapper
        title="Comprehensive Security Assessment"
        subtitle="Everything you need in one platform"
      >
        <CapabilitiesGrid />
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-sentient text-3xl md:text-4xl font-extralight tracking-tight mb-6">
            Experience the Difference
          </h2>
          <p className="text-[var(--neutral-400)] text-lg mb-10">
            See how Fusionstek can protect your digital infrastructure.
          </p>
          <CTAButton href="/demo" variant="primary" size="lg">
            Book a Demo
          </CTAButton>
        </div>
      </SectionWrapper>
    </>
  );
}
