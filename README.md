# Ariya HQ Website

Marketing site and blog CMS for Ariya, built with React, TypeScript, Vite and Express.
The product itself lives at https://app.ariyahq.com (separate codebase).

## Live Site

https://ariyahq.com

## Quick Start

```bash
cp .env.example .env   # then fill in the values
npm install
npm run dev            # Vite on :5173, Express API on :3001 (proxied at /api)
```

See `.env.example` for every variable. In production `ADMIN_JWT_SECRET` (32+ chars) is
required for the admin CMS; without it the public site runs but `/admin` is disabled.

## Architecture

- **Frontend**: React SPA in `src/` (Vite). CTAs link into the app via `src/config/links.ts`.
- **API**: Express app in `api/app.ts`, shared by `server/index.ts` (VPS/Docker, also serves
  `dist/`) and `api/index.ts` (Vercel entry).
- **Database**: Neon Postgres via `pg` (`api/db/supabase.ts`); schema in `api/db/schema.sql`.
- **Email**: Loops.so for waitlist/newsletter automation.

### Admin CMS

`/admin` signs in with `ADMIN_EMAIL` / `ADMIN_PASSWORD` and gets a 24h JWT. Every write
endpoint, the waitlist, analytics, uploads and `?admin=true` (drafts) require that token.
Uploaded files are written to `UPLOAD_DIR` and served from `/uploads` — mount a volume there.

### Database migrations

Run these once against the production database if you haven't already:

- `api/db/migration.sql` — `download_url` on resources, optional `content`
- `api/db/migration_roles.sql` — allows the `subscriber` role used by newsletter signups
  (the server logs a warning at startup if it's missing)

## Deployment (VPS)

```bash
docker build -f Dockerfile.server -t ariya-web .
docker run -d -p 3001:3001 --env-file .env -v ariya-uploads:/app/uploads ariya-web
```

## Tests

```bash
npm test
```
