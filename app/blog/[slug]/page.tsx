import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionWrapper } from "@/components/marketing/section-wrapper";
import { CTAButton } from "@/components/marketing/cta-button";
import { getPostBySlug, getAllSlugs } from "@/lib/blog-posts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Blog | Fusionstek" };
  return {
    title: `${post.title} | Fusionstek Blog`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <SectionWrapper className="pt-24 pb-12">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="text-xs font-mono uppercase tracking-wider text-[var(--neutral-500)] hover:text-[var(--primary)] transition-colors"
          >
            ← Blog
          </Link>
          <time
            dateTime={post.date}
            className="mt-4 block text-xs font-mono uppercase tracking-wider text-[var(--neutral-500)]"
          >
            {new Date(post.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <h1 className="mt-2 font-sentient text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight text-[var(--foreground)]">
            {post.title}
          </h1>
          <p className="mt-4 text-[var(--neutral-400)]">{post.author}</p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="pt-0">
        <div className="max-w-3xl mx-auto">
          <div
            className="prose prose-invert prose-neutral max-w-none
              prose-p:text-[var(--neutral-400)] prose-p:leading-relaxed
              prose-headings:text-[var(--foreground)] prose-headings:font-semibold
              prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-xl
              prose-ul:text-[var(--neutral-400)] prose-li:my-1"
            dangerouslySetInnerHTML={{ __html: post.content.trim() }}
          />
          <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row gap-4">
            <CTAButton href="/blog" variant="secondary" showArrow>
              All posts
            </CTAButton>
            <CTAButton href="/solutions/zero-day-protection" variant="primary">
              Zero-Day Protection
            </CTAButton>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
