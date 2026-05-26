# Roshwealth Website

Premium, modern, SEO-optimized wealth management website for Roshwealth, built with a Next.js app architecture, Tailwind CSS styling, Framer Motion interactions, and Sanity CMS scaffolding.

## Stack

- Next.js App Router
- Tailwind CSS
- Framer Motion
- Sanity CMS
- Vercel-ready deployment structure

## Included

- Home, About, Services, Blog, Contact, and Compliance pages
- Premium black, white, and gold visual system
- Sticky navigation, floating WhatsApp, mobile sticky CTA, exit-intent popup
- SIP calculator and goal planning calculator
- Local SEO structure for Mumbai
- Sitemap, robots, metadata, and schema markup
- Sanity schemas for posts, testimonials, FAQs, settings, and SEO fields
- Compliance-safe disclaimer placement and regulated copy direction

## Setup

1. Install dependencies:

```bash
npm install
```

2. Copy environment variables:

```bash
cp .env.example .env.local
```

3. Add your real values for:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `NEXT_PUBLIC_CONTACT_EMAIL`
- `NEXT_PUBLIC_CONTACT_PHONE`
- `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL`
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`

4. Start the app:

```bash
npm run dev
```

## Production follow-ups

- Replace placeholder contact details with verified firm details
- Connect `/api/lead` to CRM or email automation
- Point blog pages to Sanity content queries instead of the local seed data
- Add real founder imagery, client-approved visuals, and a final Google Maps embed
- Complete analytics, Search Console, and Vercel environment setup

## Vercel deployment

1. Push this project to GitHub, GitLab, or Bitbucket.
2. Import the repository into Vercel.
3. Set the framework to `Next.js` if Vercel does not detect it automatically.
4. Add these environment variables in Vercel:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `NEXT_PUBLIC_CONTACT_EMAIL`
- `NEXT_PUBLIC_CONTACT_PHONE`
- `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL`
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`
- `SANITY_API_READ_TOKEN`

5. Deploy.

## Notes for deployment

- The sandbox-only preview in `/preview-site` is not part of the production app.
- The placeholder contact details should be replaced before going live.
- If you want Sanity Studio in production, keep the `/studio` route and ensure the Sanity project credentials are valid.
