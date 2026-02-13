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

If your repository name is not `parkingweb`, update the build command base href:

```yaml
npm run build -- --configuration production --base-href /<your-repo-name>/
```

## GitHub Pages showing README instead of app

If your site is showing repository Markdown/README, GitHub Pages is likely configured to **Deploy from branch**.
This project is configured to publish via workflow.

1. Go to **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. Re-run the workflow in **Actions → Angular CI/CD**.

After that, Pages will serve the built Angular artifact from this workflow.
