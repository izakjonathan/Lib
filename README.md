# Studio UI v0.3.4

Vite-based Studio UI component browser.

## Deployment fix

This release removes the environment-generated lockfile that referenced a private build registry. All dependency versions remain exactly pinned in `package.json`, and Vercel is pinned to Node.js 22 with npm 10.9.4.

## Local development

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
```

Vercel should use automatic Vite detection with no custom dashboard build or install overrides.
