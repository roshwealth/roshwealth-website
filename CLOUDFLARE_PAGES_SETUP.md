Cloudflare Pages should publish the approved static site in `preview-site/`.

Use these project settings:

- Framework preset: `None`
- Build command: `pnpm run build:preview-site`
- Build output directory: `dist`
- Root directory: leave blank

Custom domains should be added inside the Cloudflare Pages project, not by manually wiring cross-account DNS first.

Recommended DNS after the custom domains are claimed in Pages:

- `CNAME` `@` -> `roshwealth-website.pages.dev`
- `CNAME` `www` -> `roshwealth-website.pages.dev`

Both can be switched to `Proxied` after Cloudflare Pages shows the custom domains as active.
