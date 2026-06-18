# Portfolio

Personal portfolio site built with **React + Vite + Tailwind CSS v4**, deployed to **GitHub Pages** via GitHub Actions.

## Develop locally

```bash
npm install      # first time only
npm run dev      # start dev server at http://localhost:5173
```

## Edit your content

- **Projects** — `src/data/projects.js` (one object per card)
- **Intro / name** — `src/components/Hero.jsx`
- **About text & skills** — `src/components/About.jsx`
- **Email / social links** — `src/components/Contact.jsx`
- **Page title & meta** — `index.html`
- **Images** — drop files in `public/` and reference them as `/filename.png`

## Deploy to GitHub Pages

1. Create a repo on GitHub and push this code to the `main` branch.
2. In the repo, go to **Settings → Pages → Build and deployment** and set
   **Source** to **GitHub Actions**.
3. Every push to `main` builds and publishes automatically. Your site appears at
   `https://<username>.github.io/<repo-name>/`.

> Tip: name the repo `<username>.github.io` to serve the site at the root URL
> `https://<username>.github.io/` instead of a subpath.

## Build locally (optional)

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build
```
