import { Container, Reveal, SectionIntro, Card } from "@/components/ui";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Compliance & Disclosures",
  description:
    "Read regulatory disclosures, privacy terms, risk statements, and important compliance information for Roshwealth.",
  path: "/compliance"
});

export default function CompliancePage() {
  return (
    <section className="section-space">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Compliance"
            title="Disclosures, risk statements, and important investor information."
            copy="This page is structured to support regulatory professionalism, transparency, and responsible investor communication."
          />
        </Reveal>
        <div className="mt-10 grid gap-5">
          {[
            {
              title: "AMFI Disclosure",
              copy: `${siteConfig.name} is an ${siteConfig.amfi.label} with ${siteConfig.amfi.arn}.`
            },
            {
              title: "Risk Disclaimer",
              copy: siteConfig.disclaimer
            },
            {
              title: "Additional Disclosure",
              copy: siteConfig.extendedDisclosure
            },
            {
              title: "Non-Guarantee Statement",
              copy:
                "No content on this website should be interpreted as a guarantee of returns, assured profits, or risk-free investing. Investment decisions should consider suitability, goals, and market risk."
            },
            {
              title: "Educational Content Disclaimer",
              copy:
                "All blog articles, calculators, and educational resources are intended to improve investor understanding and should not be treated as personalized advice without a consultation."
            },
            {
              title: "Privacy Policy",
              copy:
                "Personal information shared through contact or newsletter forms is used only for responding to enquiries, service communication, and relevant updates, subject to applicable law."
            },
            {
              title: "Terms & Conditions",
              copy:
                "Use of this website does not create an advisory engagement or guarantee service availability. Any investment implementation should follow suitability discussions and required documentation."
            }
          ].map((item) => (
            <Reveal key={item.title}>
              <Card>
                <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
                <p className="mt-4 text-sm leading-8 text-[var(--muted)]">{item.copy}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
