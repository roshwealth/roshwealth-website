import { Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { Button, Card, Container, Reveal, SectionIntro } from "@/components/ui";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Book a consultation with Roshwealth for wealth management, financial planning, mutual fund distribution, or a portfolio review.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <section className="section-space">
      <Container className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <SectionIntro
            eyebrow="Contact"
            title="Start with a calm, thoughtful conversation."
            copy="Reach out for a consultation, portfolio review, or goal-planning discussion. WhatsApp is built in for fast lead generation and easy follow-up."
          />
          <div className="mt-8 grid gap-4">
            {[
              { label: "Email", value: siteConfig.contactEmail, icon: Mail, href: `mailto:${siteConfig.contactEmail}` },
              { label: "Phone", value: siteConfig.contactPhone, icon: Phone, href: `tel:${siteConfig.contactPhone.replace(/\s/g, "")}` },
              { label: "Location", value: siteConfig.location, icon: MapPin }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.label} className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--gold)]/12 text-[var(--gold)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-[var(--gold)]">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="mt-1 block text-base text-white">
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 block text-base text-white">{item.value}</p>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={`https://wa.me/${siteConfig.whatsappNumber}`}>WhatsApp Us</Button>
            <Button href="/services" variant="secondary">
              Explore Services
            </Button>
          </div>
        </Reveal>
        <Reveal>
          <Card className="p-8">
            <ContactForm />
          </Card>
        </Reveal>
      </Container>
      <Container className="mt-10">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
            <iframe
              title="Roshwealth Map"
              src={siteConfig.mapsEmbedUrl}
              className="h-[24rem] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
