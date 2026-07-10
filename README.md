# Studio UI v0.3.3 — Deployment Fix

This release preserves the Studio UI v0.3 component browser while replacing the failing Next.js 16 static build pipeline with Vite.

## Why
The previous package reproducibly completed compilation, type checking, and static page generation, then hung indefinitely during Next.js “Collecting build traces.” Vercel therefore never received a completed build.

## Run
```bash
npm ci
npm run dev
```

## Production verification
```bash
npm run build
```

Vercel auto-detects Vite and publishes `dist/`. The included rewrite allows direct loading of component documentation URLs.
