# Portfoolio

Modern personal portfolio built with Next.js, TypeScript, Tailwind CSS, and DaisyUI.

## Features

- App Router structure
- Custom DaisyUI theme
- Projects & blog preview sections
- Responsive design
- Vitest + Testing Library setup

## Getting Started (Windows PowerShell)

```powershell
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint
npm run lint

# Test
npm test
```

Then open http://localhost:3000.

## Customization

- Edit `tailwind.config.ts` to adjust theme colors.
- Update data in `data/projects.ts` and `data/posts.ts`.
- Add pages under `app/`.

## Deployment

Deploy easily to Vercel:

- Push repository to GitHub
- Import in Vercel and deploy

## Deployment Instructions

Recommended: deploy to Vercel (first-class support for Next.js).

1. Create a Vercel project and connect it to this repository (optional) or use the Vercel CLI.
2. In your GitHub repository settings > Secrets > Actions, add a secret named `VERCEL_TOKEN` with a personal token from your Vercel account.
   - Optionally add `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` if you want the workflow to target a specific org/project explicitly.
3. Push to `main` (or `master`) — the included GitHub Actions workflow will build and deploy automatically.

Notes:

- The workflow uses the `amondnet/vercel-action` action and runs `npm ci` and `npm run build` before deploying.
- If you'd prefer manual or local deploys, install the Vercel CLI and run `npx vercel --prod` from the project root.

Alternative (static export):

- This repo uses the Next.js `app/` directory which may not be compatible with `next export` in all cases. If your site is fully static and you want to publish to GitHub Pages, add an `export` script and test `next export` locally first; otherwise prefer Vercel.

## If this project is not in a GitHub repository yet

If you haven't pushed this project to GitHub yet, here are two quick options (PowerShell commands). After pushing, add the `VERCEL_TOKEN` secret in your GitHub repo settings so the workflow can deploy.

1. Recommended: Using GitHub CLI (`gh`) — easiest way to create a repo and push:

```powershell
# from project root
gh repo create YOUR_GITHUB_USERNAME/YOUR_REPO_NAME --public --source . --remote origin --push
```

2. Manual (no `gh`):

```powershell
# initialize repo if needed
git init
git add .
git commit -m "Initial commit"
git branch -M main
# create repo on github.com via the web UI, then add the remote and push
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

Helper script (PowerShell)

- There's a convenience script at `scripts/init-and-push.ps1` which will initialize the repo, create an initial commit if necessary, and either create the GitHub repo via `gh` (if installed) or push to a provided remote URL.

Usage example (PowerShell):

```powershell
# With GH CLI (recommended):
.\scripts\init-and-push.ps1

# OR provide a remote URL:
.\scripts\init-and-push.ps1 -RemoteUrl "https://github.com/youruser/yourrepo.git"
```

After pushing, go to GitHub → Settings → Secrets and add `VERCEL_TOKEN` (and optionally `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`) so the GitHub Actions workflow can deploy.

## Next Steps

See comments in `.github/copilot-instructions.md` for workflow. Replace placeholder external links.
