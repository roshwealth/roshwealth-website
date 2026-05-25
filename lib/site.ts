export const siteConfig = {
  name: "Roshwealth",
  legalName: "Roshwealth",
  description:
    "Premium wealth management, financial planning, and mutual fund distribution for professionals, business owners, families, and long-term investors.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.roshwealth.com",
  ogImage: "/og-image.svg",
  location: "Mumbai, Maharashtra, India",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919999999999",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@roshwealth.com",
  contactPhone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91 99999 99999",
  mapsEmbedUrl:
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ||
    "https://www.google.com/maps/embed?pb=",
  founder: {
    name: "Rohan R Shirke",
    credentials: "Chartered Accountant",
    title: "Founder, Roshwealth"
  },
  amfi: {
    arn: "ARN-319365",
    label: "AMFI Registered Mutual Fund Distributor"
  },
  disclaimer:
    "Mutual Fund investments are subject to market risks. Read all scheme related documents carefully.",
  extendedDisclosure:
    "Roshwealth is an AMFI Registered Mutual Fund Distributor (ARN-319365). Rohan R Shirke is a Chartered Accountant providing financial planning and wealth consulting services. Investments in securities markets are subject to market risks and past performance does not guarantee future returns."
} as const;
