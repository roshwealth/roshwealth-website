# Roshwealth Website

This repository contains the approved static Roshwealth website.

## Structure

- `index.html` — homepage
- `about.html` — about page
- `services.html` — services page
- `blog.html` — blog page
- `contact.html` — contact page
- `compliance.html` — compliance page
- `styles.css` — shared website styling
- `assets/` — website images and brand assets

## Important

This is a website project, not an app project.

- No Next.js build is required
- No Worker deploy command is required
- Cloudflare Pages should serve the static files directly

## Cloudflare Pages

Use these settings:

- Framework preset: `None`
- Build command: leave blank
- Build output directory: leave blank
- Root directory: leave blank

## Custom Domain

After the Pages project is live, add:

- `roshwealth.com`
- `www.roshwealth.com`

inside the Cloudflare Pages project under `Custom domains`.
