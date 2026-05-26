import Link from "next/link";

import { Card, Container, Reveal, SectionIntro } from "@/components/ui";
import { blogPosts } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Investor Education Blog",
  description:
    "Explore investor education content from Roshwealth on SIP investing, asset allocation, retirement planning, market volatility, and financial discipline.",
  path: "/blog"
});

export default function BlogPage() {
  return (
    <section className="section-space">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Investor Education"
            title="Thoughtful content for more informed wealth decisions."
            copy="A blog system prepared for SEO authority, educational trust building, and future Sanity-powered publishing."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Reveal key={post.slug}>
              <Card className="flex h-full flex-col">
                <p className="text-sm uppercase tracking-[0.28em] text-[var(--gold)]">{post.category}</p>
                <h2 className="mt-5 text-2xl font-semibold text-white">{post.title}</h2>
                <p className="mt-4 flex-1 text-sm leading-7 text-[var(--muted)]">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between text-sm text-[var(--muted)]">
                  <span>{post.author}</span>
                  <span>{post.readTime}</span>
                </div>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-6 inline-flex text-sm font-semibold text-[var(--gold)]"
                >
                  Read article
                </Link>
              </Card>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-sm leading-7 text-[var(--muted)]">{siteConfig.disclaimer}</p>
      </Container>
    </section>
  );
}
