import Link from "next/link";
import { ArrowRight, Check, ChevronRight } from "lucide-react";

import { NewsletterForm } from "@/components/newsletter-form";
import { Card, Container, Reveal, SectionIntro, Button } from "@/components/ui";
import { siteConfig } from "@/lib/site";
import {
  faqItems,
  investorPainPoints,
  processSteps,
  services,
  stats,
  trustPillars,
  valueCards,
  whyRoshwealth
} from "@/lib/content";

export function TrustSection() {
  return (
    <section className="section-space">
      <Container>
        <Reveal>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {trustPillars.map((item) => (
              <div
                key={item}
                className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5 text-sm text-[var(--muted)]"
              >
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function AboutSnapshot() {
  return (
    <section className="section-space">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <Reveal>
          <SectionIntro
            eyebrow="About Roshwealth"
            title="Built for investors who want calm, capable guidance."
            copy="Roshwealth was founded to simplify investing and provide disciplined long-term financial guidance in an increasingly complex financial world."
          />
        </Reveal>
        <Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((item) => (
              <Card key={item.label}>
                <p className="text-3xl font-semibold text-white">{item.value}</p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.label}</p>
              </Card>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function ServicesOverview() {
  return (
    <section className="section-space">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Services"
            title="Structured financial guidance for every important wealth decision."
            copy="A premium service suite built for wealth creation, financial clarity, and consistent long-term execution."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title}>
                <Card className="flex h-full flex-col">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--gold)]/12 text-[var(--gold)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-[var(--muted)]">{service.summary}</p>
                  <Link
                    href="/services"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--gold)]"
                  >
                    Explore service
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export function ProblemsWeSolve() {
  return (
    <section className="section-space">
      <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <Reveal>
          <SectionIntro
            eyebrow="Problems We Solve"
            title="Replace financial noise with practical clarity."
            copy="Roshwealth is designed for investors who want calm structure, thoughtful decision-making, and fewer reactive mistakes."
          />
        </Reveal>
        <div className="grid gap-4">
          {investorPainPoints.map((item) => (
            <Reveal key={item}>
              <Card className="flex items-start gap-4">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--gold)]/10 text-[var(--gold)]">
                  <ChevronRight className="h-4 w-4" />
                </span>
                <p className="text-base text-white">{item}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function WhyRoshwealth() {
  return (
    <section className="section-space">
      <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <Reveal>
          <div className="rounded-[2.25rem] border border-white/8 bg-[linear-gradient(180deg,rgba(243,207,125,0.08),rgba(255,255,255,0.02))] p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--gold)]">Why Roshwealth</p>
            <h2 className="mt-5 section-title max-w-2xl">Premium positioning anchored in client-first substance.</h2>
            <div className="mt-8 grid gap-4">
              {whyRoshwealth.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-7 text-[var(--muted)]">
                  <Check className="mt-1 h-5 w-5 text-[var(--gold)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <div className="grid gap-4">
          {valueCards.map((item) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title}>
                <Card className="flex gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--gold)]/12 text-[var(--gold)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{item.copy}</p>
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

export function ProcessSection() {
  return (
    <section className="section-space">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Our Process"
            title="A five-step rhythm for disciplined wealth decisions."
            copy="A simple, premium experience designed to bring confidence, clarity, and long-term consistency."
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <Reveal key={step.title}>
              <Card className="h-full">
                <p className="text-sm uppercase tracking-[0.28em] text-[var(--gold)]">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{step.copy}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="section-space">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionIntro
            eyebrow="Investor FAQ"
            title="Common questions, answered with clarity."
            copy="The website language and service framing are designed to stay calm, factual, and compliant."
          />
        </Reveal>
        <div className="grid gap-4">
          {faqItems.map((item) => (
            <Reveal key={item.question}>
              <Card>
                <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.answer}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function NewsletterSection() {
  return (
    <section className="section-space">
      <Container>
        <Reveal>
          <div className="rounded-[2.25rem] border border-[var(--border)] bg-[linear-gradient(135deg,rgba(243,207,125,0.12),rgba(255,255,255,0.03))] p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-[var(--gold)]">Investor Education</p>
                <h2 className="mt-4 section-title max-w-2xl">Receive thoughtful insights, not market hype.</h2>
                <p className="section-copy mt-5 max-w-2xl">
                  Grow your financial confidence with practical content on SIP investing, asset
                  allocation, retirement planning, and long-term behavior.
                </p>
              </div>
              <NewsletterForm />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function CtaBanner() {
  return (
    <section className="pb-20 pt-8">
      <Container>
        <Reveal>
          <div className="rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--gold)]">Start Your Wealth Journey Today</p>
                <h2 className="mt-4 section-title max-w-3xl">A calm, disciplined start can change long-term financial outcomes.</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="/contact">Schedule Consultation</Button>
                <Button href={`https://wa.me/${siteConfig.whatsappNumber}`} variant="secondary">
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
