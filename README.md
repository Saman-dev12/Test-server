# React + Vite

## Docker Publish via GitHub Actions

This repository now includes a workflow at `.github/workflows/docker-ghcr.yml` that builds your Docker image and pushes it to GitHub Container Registry (GHCR) without needing Docker running locally.

### When it runs

- Push to `main`
- Push a tag matching `v*` (example: `v1.0.0`)
- Manual trigger from the Actions tab (`workflow_dispatch`)

### Pushed image

- `ghcr.io/<owner>/<repo>:latest` (default branch only)
- `ghcr.io/<owner>/<repo>:<branch>`
- `ghcr.io/<owner>/<repo>:<git-sha>`
- `ghcr.io/<owner>/<repo>:<tag>` for git tags

### One-time GitHub settings

- In your repo: `Settings -> Actions -> General -> Workflow permissions`
- Ensure `Read and write permissions` is enabled for `GITHUB_TOKEN`

After the first successful run, check the image under your GitHub account/org Packages.

## Deploy On Another Laptop (Pull From GHCR)

Use these steps on the target laptop.

1. Install Docker.
2. Log in to GHCR with a GitHub Personal Access Token that has at least `read:packages` scope.
3. Pull and run your image.

Replace `<owner>` and `<repo>` below:

- `docker login ghcr.io -u <github-username>`
- `docker pull ghcr.io/<owner>/<repo>:latest`
- `docker rm -f hello-server || true`
- `docker run -d --name hello-server -p 8080:80 ghcr.io/<owner>/<repo>:latest`
- Open `http://localhost:8080`

If you update the app later, re-run:

- `docker pull ghcr.io/<owner>/<repo>:latest`
- `docker rm -f hello-server || true`
- `docker run -d --name hello-server -p 8080:80 ghcr.io/<owner>/<repo>:latest`

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
