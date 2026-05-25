import type { Metadata } from "next";

import { seoKeywords } from "./content";
import { siteConfig } from "./site";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
};

export function buildMetadata({ title, description, path = "" }: MetadataInput): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;
  const url = `${siteConfig.url}${path}`;

  return {
    title: fullTitle,
    description,
    keywords: seoKeywords,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
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
      title: fullTitle,
      description,
      images: [`${siteConfig.url}${siteConfig.ogImage}`]
    }
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    areaServed: "India",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN"
    },
    founder: {
      "@type": "Person",
      name: siteConfig.founder.name,
      jobTitle: siteConfig.founder.title
    },
    telephone: siteConfig.contactPhone,
    email: siteConfig.contactEmail
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`
    }))
  };
}

export function blogSchema({
  title,
  description,
  path,
  publishedAt,
  author
}: {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished: publishedAt,
    author: {
      "@type": "Person",
      name: author
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name
    },
    mainEntityOfPage: `${siteConfig.url}${path}`
  };
}
