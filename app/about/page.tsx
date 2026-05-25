import { Container, Reveal, SectionIntro, Card, Button } from "@/components/ui";
import { valueCards } from "@/lib/content";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Learn about Roshwealth, its founder Rohan R Shirke, and the values behind its premium wealth management and financial planning approach.",
  path: "/about"
});

export default function AboutPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <section className="section-space">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <SectionIntro
              eyebrow="About Roshwealth"
              title="A modern wealth management firm built on clarity, trust, and disciplined thinking."
              copy="Roshwealth exists to help clients grow and preserve wealth through personalized financial guidance, long-term investing discipline, and a calm, client-first advisory experience."
            />
          </Reveal>
          <Reveal>
            <Card className="h-full p-8 md:p-10">
              <p className="text-sm uppercase tracking-[0.32em] text-[var(--gold)]">Founder Story</p>
              <h2 className="mt-5 text-4xl font-semibold text-white">
                {siteConfig.founder.name}
              </h2>
              <p className="mt-3 text-lg text-[var(--gold)]">{siteConfig.founder.credentials}</p>
              <p className="mt-6 text-sm leading-8 text-[var(--muted)]">
                As the founder of Roshwealth, Rohan R Shirke brings a structured, modern
                perspective to wealth management and financial planning. His approach centers on
                aligning money decisions with real goals, building discipline through market
                cycles, and creating a long-term framework that clients can understand and trust.
              </p>
            </Card>
          </Reveal>
        </Container>
      </section>

      <section className="section-space">
        <Container className="grid gap-5 lg:grid-cols-3">
          {[
            {
              title: "Why Roshwealth Exists",
              copy: "To simplify investing in a world crowded by financial noise and product overload."
            },
            {
              title: "Mission",
              copy: "Help clients grow, manage, and preserve wealth through disciplined investing and personalized guidance."
            },
            {
              title: "Vision",
              copy: "Build a trusted, modern wealth platform that delivers calm financial intelligence for generations of investors."
            }
          ].map((item) => (
            <Reveal key={item.title}>
              <Card className="h-full">
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.copy}</p>
              </Card>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <Reveal>
            <SectionIntro
              eyebrow="Values"
              title="The principles behind every client conversation."
              copy="Roshwealth is built to feel intelligent, professional, calm, and investor-friendly without becoming intimidating."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {valueCards.map((item) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title}>
                  <Card className="h-full">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--gold)]/10 text-[var(--gold)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-6 text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.copy}</p>
                  </Card>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="mt-10">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:flex md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--gold)]">Work With Roshwealth</p>
                <p className="mt-3 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                  If you want calm structure, long-term guidance, and a more thoughtful way to
                  make financial decisions, let&apos;s begin with a conversation.
                </p>
              </div>
              <div className="mt-6 md:mt-0">
                <Button href="/contact">Book Consultation</Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
