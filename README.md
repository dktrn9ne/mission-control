# Mission Control

A login-protected Next.js dashboard (Vercel) to track everything we're building.

## Security
Uses Basic Auth in `middleware.ts`.

Set env vars in Vercel:
- `MC_USER`
- `MC_PASS`

## Config
- `data/projects.json` is the source of truth for Projects page (v1).

## Dev
```bash
npm i
npm run dev
```
