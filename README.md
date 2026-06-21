# Comstrat Industrial Ltd — Website

Marketing website for [Comstrat Industrial Ltd](https://www.comstrat-ltd.com) — a Hong Kong-based
trading company supplying automotive SLI batteries, lubricants and spare parts to European markets.

Built with **[Astro](https://astro.build)** + **[Tailwind CSS](https://tailwindcss.com)**, deployed
as a static site to **GitHub Pages**.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build

```bash
npm run build      # static output → dist/
npm run preview    # preview the production build locally
```

## Project structure

```
src/
  layouts/Layout.astro        Base HTML, SEO meta, scroll-reveal script
  components/                 Header, Footer, Hero, CtaBand, Icon, Logo, ...
  pages/                      index, about, products, contact
  data/site.ts                Single source of company facts (address, phone, etc.)
  styles/global.css           Tailwind + design-system classes
public/                       CNAME, favicon, og image, robots.txt
```

## Editing content

- **Company facts** (address, phone, email, sourcing countries) live in
  [`src/data/site.ts`](src/data/site.ts) — edit once, applied everywhere.
- **Page copy** lives in the respective files under `src/pages/`.
- **Brand accent colour** is the `brand` palette in [`tailwind.config.mjs`](tailwind.config.mjs)
  (currently amber/orange). Change the hex values there to re-skin the whole site.

## Contact form

The contact form posts to **Formspree**. To activate it:

1. Create a free form at <https://formspree.io>.
2. In [`src/pages/contact.astro`](src/pages/contact.astro), replace `FORMSPREE_ID` with your form ID.

Until then, the email and phone links work, but the form submission will error.

## Assets to replace

Placeholders are marked in the code. Swap in real assets when ready:

- **Logo** — currently a wordmark in `src/components/Logo.astro` and `public/favicon.svg`.
- **Product photography** — see the note in `src/pages/products.astro`.
- **OG share image** — `public/og.svg`.

## Deployment (GitHub Pages)

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it
to GitHub Pages.

One-time setup in the GitHub repo:

1. **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. **Settings → Pages → Custom domain:** `www.comstrat-ltd.com` (the `public/CNAME` file keeps this
   set across deploys). Point the domain's DNS at GitHub Pages per
   [GitHub's custom-domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
