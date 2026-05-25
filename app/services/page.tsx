import { Button, Card, Container, Reveal, SectionIntro } from "@/components/ui";
import { services } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Explore Roshwealth services including wealth management, mutual fund distribution, financial planning, retirement planning, and portfolio review.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <section className="section-space">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Services"
            title="Premium guidance across your most important financial decisions."
            copy="Every service is structured to address investor problems, create more clarity, and support long-term progress."
          />
        </Reveal>
        <div className="mt-10 grid gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title}>
                <Card className="overflow-hidden p-0">
                  <div className="grid gap-0 xl:grid-cols-[0.9fr_1.1fr]">
                    <div className="border-b border-white/8 bg-[linear-gradient(180deg,rgba(243,207,125,0.08),transparent)] p-8 xl:border-b-0 xl:border-r">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--gold)]/12 text-[var(--gold)]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h2 className="mt-6 text-3xl font-semibold text-white">{service.title}</h2>
                      <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{service.summary}</p>
                      <div className="mt-8">
                        <Button href="/contact">Discuss This Service</Button>
                      </div>
                    </div>
                    <div className="grid gap-6 p-8 md:grid-cols-2">
                      <div>
                        <p className="text-sm uppercase tracking-[0.28em] text-[var(--gold)]">Investor Problem</p>
                        <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{service.problem}</p>
                        <p className="mt-6 text-sm uppercase tracking-[0.28em] text-[var(--gold)]">Solution Approach</p>
                        <ul className="mt-3 grid gap-3 text-sm leading-7 text-[var(--muted)]">
                          {service.approach.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.28em] text-[var(--gold)]">Benefits</p>
                        <ul className="mt-3 grid gap-3 text-sm leading-7 text-[var(--muted)]">
                          {service.benefits.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                        <p className="mt-6 text-sm uppercase tracking-[0.28em] text-[var(--gold)]">Process</p>
                        <ol className="mt-3 grid gap-3 text-sm leading-7 text-[var(--muted)]">
                          {service.process.map((item, index) => (
                            <li key={item}>
                              {index + 1}. {item}
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
