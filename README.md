# Parkingweb Angular App

This repository is an Angular project. If GitHub Pages is currently showing repository content (like README) instead of the app, set Pages source to **GitHub Actions**.

Local run: `npm install` then `npm start`.

Workflow deploy file: `.github/workflows/ci-cd.yml`.

## Build

```bash
npm run build
```

## CI/CD and publishing

GitHub Actions workflow at `.github/workflows/ci-cd.yml` runs on pushes and PRs to `main`.
On successful builds it uploads `parkingweb-dist` (`dist/parkingweb`) and auto-publishes `dist/parkingweb/browser` to GitHub Pages on `main`.

### Required publish files for GitHub Pages

- `public/.nojekyll`: ensures static assets are served without Jekyll processing.
- `public/404.html`: SPA fallback redirect so deep links (for example `/app/dashboard`) resolve on GitHub Pages.
- `src/index.html`: restores redirected deep-link path on app boot.
