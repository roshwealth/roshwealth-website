## Cloudflare Pages Setup For Roshwealth Website

This repository is a static website.

Do not configure it as:

- Next.js
- Workers Build
- Wrangler deploy
- an app framework

Use Cloudflare Pages with these exact settings:

- Framework preset: `None`
- Build command: leave blank
- Build output directory: leave blank
- Root directory: leave blank

Cloudflare should publish the repository root directly, where:

- `index.html` is the homepage
- `styles.css` contains the shared styling
- `assets/` contains images

## Custom Domains

After deployment succeeds, add these custom domains inside the Pages project:

- `roshwealth.com`
- `www.roshwealth.com`

Let Cloudflare manage the DNS automatically if prompted.
