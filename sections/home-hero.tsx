import { ArrowRight, BadgeCheck, Shield, Sparkles } from "lucide-react";

import { siteConfig } from "@/lib/site";

import { Button, Card, Container, Reveal } from "@/components/ui";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-12 md:pb-24 md:pt-20">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-20" />
      <Container className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <Reveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[var(--gold)]">
              <Sparkles className="h-3.5 w-3.5" />
              Premium Wealth Guidance
            </div>
            <h1
              className="mt-8 max-w-4xl text-[3.2rem] font-medium leading-[0.95] tracking-[-0.05em] text-white md:text-[5.6rem]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Invest with Clarity.
              <br />
              Grow with Confidence.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl">
              Personalized wealth management, financial planning, and insurance planning
              designed around your long-term goals.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Book Consultation</Button>
              <Button href="/services" variant="secondary">
                Get Portfolio Review
              </Button>
              <Button href={`https://wa.me/${siteConfig.whatsappNumber}`} variant="ghost" className="gap-2">
                WhatsApp Us
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                "Trust-first wealth management",
                "Modern long-term investment thinking",
                "Regulatory professionalism"
              ].map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-4 text-sm text-[var(--muted)]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal className="lg:justify-self-end">
          <div className="relative mx-auto w-full max-w-[34rem]">
            <div className="absolute -left-10 top-6 h-28 w-28 rounded-full bg-[var(--gold)]/20 blur-3xl" />
            <div className="absolute -right-10 bottom-12 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
            <Card className="relative overflow-hidden p-7">
              <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
                      Client Strategy Dashboard
                    </p>
                    <p className="mt-3 text-3xl font-semibold text-white">Long-term, not loud.</p>
                  </div>
                  <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-[var(--muted)]">
                    Mumbai
                  </div>
                </div>
                <div className="mt-8 h-52 rounded-[1.75rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(243,207,125,0.28),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))] p-5">
                  <div className="flex h-full items-end gap-4">
                    {[36, 54, 42, 68, 72, 96].map((height, index) => (
                      <div
                        key={height}
                        className="flex-1 rounded-t-full bg-[linear-gradient(180deg,rgba(243,207,125,0.95),rgba(200,156,68,0.2))]"
                        style={{
                          height: `${height}%`,
                          animation: `floatUp 1s ${index * 0.12}s both`
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-[1.4rem] border border-white/8 bg-black/25 p-4">
                    <Shield className="h-5 w-5 text-[var(--gold)]" />
                    <p className="mt-3 text-sm font-semibold text-white">Disciplined Allocation</p>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      Strategy built around suitability, behavior, and time horizon.
                    </p>
                  </div>
                  <div className="rounded-[1.4rem] border border-white/8 bg-black/25 p-4">
                    <BadgeCheck className="h-5 w-5 text-[var(--gold)]" />
                    <p className="mt-3 text-sm font-semibold text-white">Ongoing Reviews</p>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      Regular guidance to stay aligned through changing markets and life stages.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
