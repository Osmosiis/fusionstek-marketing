"use client";

import { Hero } from "@/components/hero";
import { SectionWrapper } from "@/components/marketing/section-wrapper";
import { FeatureCard } from "@/components/marketing/feature-card";
import { StepStrip } from "@/components/marketing/step-strip";
import { UseCaseTile } from "@/components/marketing/use-case-tile";
import { TestimonialStrip } from "@/components/marketing/testimonial-strip";
import { MetricsStrip } from "@/components/marketing/metrics-strip";
import { CTAButton } from "@/components/marketing/cta-button";
import { AlertTriangle, Shield, Lock, Zap, FileSearch, Users } from "lucide-react";
import { Leva } from "leva";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

export default function Home() {
  const { ref: ctaRef, isRevealed: ctaRevealed } = useScrollReveal();

  return (
    <>
      <Hero />
      <Leva hidden />

      {/* Problem Section */}
      <SectionWrapper
        id="problem"
        title="The Cybersecurity Challenge"
        subtitle="Modern threats require advanced protection"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            iconName="AlertTriangle"
            title="Sophisticated Threats"
            description="Cybercriminals are constantly evolving their tactics, making traditional security measures insufficient."
            index={0}
          />
          <FeatureCard
            iconName="Shield"
            title="Domain Vulnerabilities"
            description="Unidentified security gaps in your domain infrastructure can lead to data breaches and service disruptions."
            index={1}
          />
          <FeatureCard
            iconName="Lock"
            title="Compliance Requirements"
            description="Meeting regulatory standards requires comprehensive security assessments and continuous monitoring."
            index={2}
          />
        </div>
      </SectionWrapper>

      {/* Value/Difference */}
      <SectionWrapper
        id="value"
        title="Why Choose Fusionstek"
        subtitle="Comprehensive security solutions designed for modern threats"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            iconName="Zap"
            title="Real-Time Detection"
            description="Advanced algorithms detect threats as they emerge, providing immediate protection."
            index={0}
          />
          <FeatureCard
            iconName="FileSearch"
            title="Comprehensive Scanning"
            description="Multi-layered analysis of domains and files to identify potential security risks."
            index={1}
          />
          <FeatureCard
            iconName="Shield"
            title="Automated Reporting"
            description="Detailed security reports delivered automatically, saving time and ensuring compliance."
            index={2}
          />
          <FeatureCard
            iconName="Users"
            title="Expert Support"
            description="Dedicated security team available to help you understand and address findings."
            index={3}
          />
        </div>
      </SectionWrapper>

      {/* How It Works Preview */}
      <SectionWrapper
        id="how-it-works"
        title="How It Works"
        subtitle="Simple, secure, and efficient"
      >
        <StepStrip
          steps={[
            {
              number: 1,
              title: "Submit Your Request",
              description: "Provide your domains and optional files for assessment.",
            },
            {
              number: 2,
              title: "Automated Scanning",
              description: "Our system performs comprehensive security analysis.",
            },
            {
              number: 3,
              title: "Threat Detection",
              description: "Advanced algorithms identify vulnerabilities and malware.",
            },
            {
              number: 4,
              title: "Receive Results",
              description: "Get detailed reports via email with actionable recommendations.",
            },
          ]}
        />
        <div className="text-center mt-16">
          <CTAButton href="/how-it-works" variant="secondary" showArrow>
            Learn More About Our Process
          </CTAButton>
        </div>
      </SectionWrapper>

      {/* Use Cases Preview */}
      <SectionWrapper
        id="use-cases"
        title="Use Cases"
        subtitle="Protecting businesses across industries"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <UseCaseTile
            title="Enterprise Security"
            description="Comprehensive domain security assessment for large organizations."
            bullets={[
              "Multi-domain analysis",
              "Compliance reporting",
              "Continuous monitoring",
            ]}
            index={0}
          />
          <UseCaseTile
            title="E-commerce Protection"
            description="Secure your online storefront and customer data."
            bullets={[
              "Payment security validation",
              "Domain reputation checks",
              "Malware detection",
            ]}
            index={1}
          />
          <UseCaseTile
            title="SaaS Platform Security"
            description="Ensure your cloud services remain secure and trusted."
            bullets={[
              "API endpoint validation",
              "File upload security",
              "Threat intelligence",
            ]}
            index={2}
          />
        </div>
        <div className="text-center mt-16">
          <CTAButton href="/use-cases" variant="secondary" showArrow>
            Explore All Use Cases
          </CTAButton>
        </div>
      </SectionWrapper>

      {/* Proof/Trust */}
      <SectionWrapper
        id="trust"
        title="Trusted by Security Teams"
        subtitle="See what our clients say"
      >
        <MetricsStrip
          metrics={[
            {
              value: "10K+",
              label: "Domains Scanned",
              description: "Monthly assessments",
            },
            {
              value: "99.9%",
              label: "Uptime",
              description: "Service reliability",
            },
            {
              value: "500+",
              label: "Enterprise Clients",
              description: "Trusted partners",
            },
            {
              value: "<15s",
              label: "Average Scan Time",
              description: "Fast results",
            },
          ]}
          className="mb-20"
        />

        <TestimonialStrip
          testimonials={[
            {
              quote: "Fusionstek helped us identify critical vulnerabilities before they became incidents.",
              author: "Sarah Chen",
              role: "CISO",
              company: "TechCorp",
            },
            {
              quote: "The automated scanning saves us hours of manual security assessment work.",
              author: "Michael Rodriguez",
              role: "Security Lead",
              company: "StartupXYZ",
            },
            {
              quote: "Comprehensive reports that our compliance team actually understands.",
              author: "Emily Johnson",
              role: "IT Director",
              company: "FinanceCo",
            },
          ]}
        />
      </SectionWrapper>

      {/* Final CTA */}
      <section className="py-24 md:py-32 relative">
        {/* Gradient backdrop that allows 3D effect to show through */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/40 via-[var(--background)]/60 to-[var(--background)]/40 pointer-events-none" />
        
        <div 
          ref={ctaRef}
          className="container relative z-10"
        >
          <div 
            className={cn(
              "text-center max-w-2xl mx-auto",
              "opacity-0 translate-y-6",
              ctaRevealed && "animate-[reveal-up_0.7s_cubic-bezier(0.16,1,0.3,1)_forwards]"
            )}
          >
            <h2 className="font-sentient text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight mb-6">
              Ready to Secure Your Infrastructure?
            </h2>
            <p className="text-[var(--neutral-400)] text-base md:text-lg mb-10 leading-relaxed">
              Book a demo today and see how Fusionstek can protect your digital assets.
            </p>
            <CTAButton href="/demo" variant="primary" size="lg">
              Book a Demo
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
