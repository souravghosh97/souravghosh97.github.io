# souravghosh97.github.io

Personal portfolio for Sourav Ghosh — Software Development Engineer. Built with React + Vite,
deployed to GitHub Pages via GitHub Actions.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment

Pushes to `mainline` trigger `.github/workflows/deploy.yml`, which builds the site and deploys
it to GitHub Pages. In the repo settings, **Settings → Pages → Build and deployment → Source**
must be set to **GitHub Actions**.

## Content

Editable content lives under `src/data/` (experience, skills, projects, achievements, education).
Update `src/data/projects.js` with real projects when ready — it currently holds placeholders.
