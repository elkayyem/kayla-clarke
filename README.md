# Kayla Clarke — UGC Creator Website

A single-page marketing website for UGC (user-generated content) creator Kayla Clarke,
showcasing her portfolio, services, packages, and contact details.

Built with **Vite + React + TypeScript + Tailwind CSS v4** and shadcn/ui components.

## Local development

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # produce a production build in dist/
npm run preview  # preview the production build locally
```

## Deploying to GitHub Pages

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that
builds the site and publishes it to GitHub Pages automatically.

1. Create a GitHub repository and push this project to it (default branch `main`).
2. In the repo: **Settings → Pages → Build and deployment → Source → "GitHub Actions"**.
3. Every push to `main` builds and deploys the site. The live URL appears in the
   workflow run summary and under **Settings → Pages**, typically:
   `https://<your-username>.github.io/<repo-name>/`

The Vite `base` is set to `./` (relative), so the build works at any Pages path as
well as under a custom domain — no extra configuration needed.

### Custom domain (optional)

Add your domain under **Settings → Pages → Custom domain**, then create a file named
`public/CNAME` containing the domain (e.g. `kaylaclarke.com`) so it persists across deploys.
