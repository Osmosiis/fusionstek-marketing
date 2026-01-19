import { SectionWrapper } from "@/components/marketing/section-wrapper";
import { PageHero } from "@/components/marketing/page-hero";
import { StepStrip } from "@/components/marketing/step-strip";
import { FeatureCard } from "@/components/marketing/feature-card";
import { FAQAccordion } from "@/components/marketing/faq-accordion";
import { CTAButton } from "@/components/marketing/cta-button";
import { Shield, FileText, Zap, CheckCircle2, Lock, Clock } from "lucide-react";

export const metadata = {
  title: "How It Works - Fusionstek",
  description: "Learn how Fusionstek's automated security scanning process protects your digital infrastructure.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        title="How It Works"
        subtitle="Our streamlined process makes security assessment simple and efficient."
      />

      {/* 4-Step Process */}
      <SectionWrapper
        title="The Process"
        subtitle="Four simple steps to comprehensive security assessment"
      >
        <StepStrip
          steps={[
            {
              number: 1,
              title: "Submit Your Request",
              description: "Provide your domains (up to 25) and optionally upload files (up to 3, 10MB each) for assessment.",
            },
            {
              number: 2,
              title: "Automated Scanning",
              description: "Our advanced scanning engine performs real-time malware detection and domain security analysis.",
            },
            {
              number: 3,
              title: "Threat Detection",
              description: "Multiple security layers analyze your submissions for vulnerabilities and potential threats.",
            },
            {
              number: 4,
              title: "Receive Results",
              description: "Get comprehensive security reports delivered to your email with actionable recommendations.",
            },
          ]}
        />
      </SectionWrapper>

      {/* What You Get */}
      <SectionWrapper
        title="What You Get"
        subtitle="Comprehensive security insights delivered automatically"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            iconName="Shield"
            title="Domain Security Assessment"
            description="Comprehensive analysis of your domain infrastructure, identifying vulnerabilities and security gaps."
            index={0}
          />
          <FeatureCard
            iconName="FileText"
            title="Malware Detection"
            description="Advanced scanning of uploaded files to detect malicious code, viruses, and suspicious patterns."
            index={1}
          />
          <FeatureCard
            iconName="Zap"
            title="Real-Time Processing"
            description="Fast, automated scanning with synchronous completion when possible, ensuring quick results."
            index={2}
          />
          <FeatureCard
            iconName="CheckCircle2"
            title="Detailed Reports"
            description="Comprehensive security reports with findings, risk assessments, and actionable recommendations."
            index={3}
          />
          <FeatureCard
            iconName="Lock"
            title="Compliance Support"
            description="Reports formatted to help meet regulatory requirements and security standards."
            index={4}
          />
          <FeatureCard
            iconName="Clock"
            title="Secure File Handling"
            description="All uploaded files are automatically deleted after 90 days, ensuring data privacy and compliance."
            index={5}
          />
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper
        title="Frequently Asked Questions"
        subtitle="Common questions about our security assessment process"
      >
        <div className="max-w-3xl mx-auto">
          <FAQAccordion
            faqs={[
              {
                question: "How long does the scanning process take?",
                answer: "Most scans complete within 15 seconds. If processing takes longer, we'll continue scanning in the background and notify you via email when complete. You'll receive a reference ID to track your request.",
              },
              {
                question: "What happens if a file is flagged as malicious?",
                answer: "If a file is flagged during scanning, it will be automatically removed from your submission. Your request will still be processed with the remaining files, and you'll receive a notification listing any removed files with generic security reasons.",
              },
              {
                question: "How many domains can I submit?",
                answer: "You can submit up to 25 domains per request. Domains should be in FQDN format (e.g., example.com) and separated by commas or newlines.",
              },
              {
                question: "What file types are supported?",
                answer: "We accept any file type for security analysis. Each file must be under 10MB, and you can upload up to 3 files per request.",
              },
              {
                question: "How long are uploaded files retained?",
                answer: "Uploaded files are automatically deleted 90 days after submission to ensure data privacy and compliance with security best practices.",
              },
              {
                question: "Do I need authorization to assess domains?",
                answer: "Yes, you must have proper authorization to assess the domains you submit. This is required for legal and ethical security assessment practices.",
              },
            ]}
          />
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-sentient text-3xl md:text-4xl font-extralight tracking-tight mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-[var(--neutral-400)] text-lg mb-10">
            Submit your first security assessment request today.
          </p>
          <CTAButton href="/demo" variant="primary" size="lg">
            Book a Demo
          </CTAButton>
        </div>
      </SectionWrapper>
    </>
  );
}
