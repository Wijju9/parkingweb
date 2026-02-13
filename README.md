# Parkingweb (Angular)

Modern valet parking dashboard inspired by the referenced UX case study. It includes:

- Login landing experience.
- Sidebar navigation and dashboard shell.
- Core modules: Dashboard, Operations, Analytics.
- CI/CD workflow for GitHub Pages publishing.

## Run locally

```bash
npm install
npm start
```

## Build

```bash
npm run build
```

## CI/CD and publishing

GitHub Actions workflow at `.github/workflows/ci-cd.yml` runs on pushes and PRs to `main`.
On `main`, it deploys production build artifacts to GitHub Pages.

### Build output and auto publish

- On every successful CI run, the workflow generates the Angular `dist/parkingweb` output.
- It uploads a downloadable workflow artifact named `parkingweb-dist`.
- On `main`, it automatically publishes `dist/parkingweb/browser` to GitHub Pages.

### Required publish files for GitHub Pages

- `public/.nojekyll`: ensures static assets are served without Jekyll processing.
- `public/404.html`: SPA fallback redirect so deep links (for example `/app/dashboard`) resolve on GitHub Pages.
- `src/index.html`: restores redirected deep-link path on app boot.


The workflow now derives `base-href` automatically from the repository name at runtime, so no manual edit is required when forking/renaming.

## GitHub Pages showing README instead of app

If your site is showing repository Markdown/README, GitHub Pages is likely configured to **Deploy from branch**.
This project is configured to publish via workflow.

1. Go to **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. Re-run the workflow in **Actions → Angular CI/CD**.

After that, Pages will serve the built Angular artifact from this workflow.
