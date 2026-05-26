import { siteConfig } from "@/lib/site";

import { Container } from "./ui";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[rgba(246,239,226,0.92)]">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-md text-sm leading-7 text-[var(--muted)]">
            Premium wealth management, financial planning, and mutual fund distribution
            designed around clarity, trust, and long-term discipline.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">Contact</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--muted)]">
            <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
            <a href={`tel:${siteConfig.contactPhone.replace(/\s/g, "")}`}>{siteConfig.contactPhone}</a>
            <a href={`https://wa.me/${siteConfig.whatsappNumber}`}>WhatsApp Consultation</a>
            <span>{siteConfig.location}</span>
          </div>
        </div>
      </Container>
      <Container className="border-t border-[var(--border)] py-6">
        <p className="text-sm leading-7 text-[var(--muted)]">
          <span className="text-[var(--gold)]">Compliance</span>
          <br />
          {siteConfig.amfi.label}
          <br />
          {siteConfig.amfi.arn}
        </p>
        <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
          <span className="text-[var(--gold)]">Disclosure</span>
          <br />
          {siteConfig.disclaimer}
        </p>
      </Container>
    </footer>
  );
}
