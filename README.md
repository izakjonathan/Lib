# Studio UI v0.3.1

Vercel deployment hotfix based on Studio UI v0.3.0.

## Fixes

- Uses Next.js static export because the current component library has no server-only features.
- Pins the Vercel Node.js runtime to `24.x`.
- Prevents the production build from remaining open after page generation.
- Retains the searchable browser, component documentation pages, responsive previews, theme controls, and copyable examples from v0.3.0.

## Run locally

```bash
npm ci
npm run dev
```

## Validate

```bash
npm run lint
npm run build
```

Deploy the repository root directly to Vercel. Framework preset should be Next.js and all build/output overrides should be left blank so Vercel can detect the static export automatically.

## Vercel deployment (v0.3.2)

This release deliberately deploys the generated `out` folder as a static site rather than asking Vercel to post-process it as a managed Next.js application.

- Framework is explicitly set to `null` in `vercel.json`.
- Install command is `npm ci --no-audit --no-fund`.
- Build command is `npm run build`.
- Output directory is `out`.
- Keep the repository root set to the directory containing `package.json` and `vercel.json`.
