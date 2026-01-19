import { SectionWrapper } from "@/components/marketing/section-wrapper";
import { PageHero } from "@/components/marketing/page-hero";
import { UseCaseTile } from "@/components/marketing/use-case-tile";
import { CTAButton } from "@/components/marketing/cta-button";

export const metadata = {
  title: "Use Cases - Fusionstek",
  description: "Discover how Fusionstek protects businesses across industries with advanced cybersecurity solutions.",
};

export default function UseCasesPage() {
  return (
    <>
      <PageHero
        title="Use Cases"
        subtitle="Comprehensive security solutions for businesses of all sizes and industries."
      />

      {/* Primary Use Cases */}
      <SectionWrapper
        title="Industries We Serve"
        subtitle="Tailored security solutions for your specific needs"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <UseCaseTile
            title="Enterprise Security"
            description="Large organizations need comprehensive domain security assessment to protect their digital infrastructure."
            bullets={[
              "Multi-domain analysis for complex infrastructures",
              "Compliance reporting for regulatory requirements",
              "Continuous monitoring and threat detection",
            ]}
            index={0}
          />
          <UseCaseTile
            title="E-commerce Protection"
            description="Online retailers require robust security to protect customer data and payment information."
            bullets={[
              "Payment security validation and PCI compliance",
              "Domain reputation monitoring and management",
              "Malware detection in uploaded content",
            ]}
            index={1}
          />
          <UseCaseTile
            title="SaaS Platform Security"
            description="Cloud service providers need to ensure their platforms remain secure and compliant."
            bullets={[
              "API endpoint security validation",
              "File upload security for user-generated content",
              "Multi-tenant security assessment",
            ]}
            index={2}
          />
        </div>
      </SectionWrapper>

      {/* Additional Use Cases */}
      <SectionWrapper
        title="More Industries"
        subtitle="Security solutions across sectors"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <UseCaseTile
            title="Healthcare Data Protection"
            description="Healthcare organizations must protect patient data and comply with HIPAA regulations."
            bullets={[
              "HIPAA compliance validation",
              "Patient data security assessment",
              "Medical device security analysis",
            ]}
            index={0}
          />
          <UseCaseTile
            title="Financial Services Security"
            description="Banks and financial institutions require the highest levels of security."
            bullets={[
              "Regulatory compliance validation",
              "Transaction security verification",
              "Fraud detection and prevention",
            ]}
            index={1}
          />
          <UseCaseTile
            title="Government & Public Sector"
            description="Public sector organizations need robust security for critical infrastructure."
            bullets={[
              "Critical infrastructure protection",
              "Citizen data privacy validation",
              "National security compliance",
            ]}
            index={2}
          />
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-sentient text-3xl md:text-4xl font-extralight tracking-tight mb-6">
            Find the Right Solution for Your Business
          </h2>
          <p className="text-[var(--neutral-400)] text-lg mb-10">
            Contact us to discuss your specific security needs and requirements.
          </p>
          <CTAButton href="/demo" variant="primary" size="lg">
            Book a Demo
          </CTAButton>
        </div>
      </SectionWrapper>
    </>
  );
}
