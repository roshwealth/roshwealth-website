import { notFound } from "next/navigation";

import { Container } from "@/components/ui";
import { blogPosts } from "@/lib/content";
import { blogSchema, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const schema = blogSchema({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    publishedAt: post.publishedAt,
    author: post.author
  });

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article className="section-space">
        <Container className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--gold)]">{post.category}</p>
          <h1
            className="mt-6 text-[3.2rem] leading-[0.98] tracking-[-0.05em] text-white md:text-[4.4rem]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {post.title}
          </h1>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-[var(--muted)]">
            <span>{post.author}</span>
            <span>{post.readTime}</span>
            <span>
              {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric"
              })}
            </span>
          </div>
          <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
            {post.content.map((paragraph) => (
              <p key={paragraph} className="mb-6 text-base leading-8 text-[var(--muted)]">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-10 rounded-[1.75rem] border border-[var(--border)] bg-black/30 p-6">
            <p className="text-sm leading-7 text-[var(--muted)]">{siteConfig.disclaimer}</p>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              This article is intended for educational purposes only and should not be treated as a
              promise of returns or a recommendation without considering suitability.
            </p>
          </div>
        </Container>
      </article>
    </>
  );
}
