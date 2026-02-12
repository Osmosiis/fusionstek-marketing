import Link from "next/link";
import { SectionWrapper } from "@/components/marketing/section-wrapper";
import { PageHero } from "@/components/marketing/page-hero";
import { CTAButton } from "@/components/marketing/cta-button";
import { blogPosts } from "@/lib/blog-posts";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Blog - Zero-Day Detection & EASM | Fusionstek",
  description:
    "Insights on zero-day detection, EASM, and external security assurance. How we detect threats 7 days before CVEs.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        subtitle="Insights on zero-day detection, EASM, and external security assurance."
      />

      <SectionWrapper>
        <div className="max-w-3xl mx-auto space-y-12">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group border border-[var(--border)] rounded-xl bg-[var(--card-bg)] p-6 md:p-8 hover:border-[var(--border-hover)] transition-colors"
            >
              <time
                dateTime={post.date}
                className="text-xs font-mono uppercase tracking-wider text-[var(--neutral-500)]"
              >
                {new Date(post.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <h2 className="mt-2 text-xl md:text-2xl font-semibold text-[var(--foreground)] tracking-tight group-hover:text-[var(--primary)] transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="mt-3 text-[var(--neutral-400)] text-sm md:text-base leading-relaxed">
                {post.description}
              </p>
              <div className="mt-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className={cn(
                    "text-sm font-mono uppercase tracking-wider text-[var(--primary)]",
                    "hover:underline"
                  )}
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <CTAButton href="/solutions/zero-day-protection" variant="secondary" showArrow>
            Zero-Day Protection
          </CTAButton>
        </div>
      </SectionWrapper>
    </>
  );
}
