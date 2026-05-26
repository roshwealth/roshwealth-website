import { GoalPlannerCalculator, SipCalculator } from "@/components/calculators";
import { Container, Reveal, SectionIntro } from "@/components/ui";
import { buildMetadata } from "@/lib/seo";
import { HomeHero } from "@/sections/home-hero";
import {
  AboutSnapshot,
  CtaBanner,
  FaqSection,
  NewsletterSection,
  ProblemsWeSolve,
  ProcessSection,
  ServicesOverview,
  TrustSection,
  WhyRoshwealth
} from "@/sections/home-sections";

export const metadata = buildMetadata({
  title: "Wealth Management Mumbai",
  description:
    "Roshwealth offers premium wealth management, financial planning, and mutual fund distribution for long-term investors in Mumbai and across India.",
  path: "/"
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustSection />
      <AboutSnapshot />
      <ServicesOverview />
      <ProblemsWeSolve />
      <WhyRoshwealth />
      <ProcessSection />
      <section className="section-space">
        <Container>
          <Reveal>
            <SectionIntro
              eyebrow="Calculators"
              title="Helpful planning tools for disciplined investors."
              copy="Interactive tools designed to support financial awareness and informed conversations."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <SipCalculator />
            </Reveal>
            <Reveal>
              <GoalPlannerCalculator />
            </Reveal>
          </div>
        </Container>
      </section>
      <FaqSection />
      <NewsletterSection />
      <CtaBanner />
    </>
  );
}
