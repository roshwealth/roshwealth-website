## Push The New Roshwealth Website Repo To GitHub

This folder is already a fresh local Git repository.

Project folder:

`/Users/rohanshirke/Desktop/rosh`

## 1. Create an empty GitHub repository

Suggested repository name:

`roshwealth-website`

Keep it empty.

Do not add:

- README
- `.gitignore`
- license

## 2. Connect the local repo to GitHub

Run:

```bash
cd "/Users/rohanshirke/Desktop/rosh"
git remote add origin https://github.com/roshwealth/roshwealth-website.git
git push -u origin main
```

## 3. Deploy to Cloudflare Pages

When connecting this repository in Cloudflare Pages, remember:

- this is a website, not an app
- use `Framework preset: None`
- do not use Wrangler
- do not use Workers Build
