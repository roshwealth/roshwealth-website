import type { Metadata } from "next";

import { ExitIntentPopup } from "@/components/exit-intent-popup";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyCta } from "@/components/sticky-cta";
import { organizationSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} | Wealth Management & Financial Planning`,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  category: "finance",
  authors: [{ name: siteConfig.founder.name }],
  creator: siteConfig.founder.name,
  generator: "Next.js",
  keywords: ["Wealth Management Mumbai", "Financial Planner Mumbai", "Mutual Fund Distribution"],
  openGraph: {
    title: `${siteConfig.name} | Wealth Management & Financial Planning`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} social preview`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Wealth Management & Financial Planning`,
    description: siteConfig.description,
    images: [`${siteConfig.url}${siteConfig.ogImage}`]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <FloatingWhatsApp />
        <StickyCta />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
