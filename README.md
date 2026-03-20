# Ariya HQ Website

Event planning platform website built with React, TypeScript, and Vite.

## Live Site

https://ariya-hq.github.io/WEBSITE-/

## Quick Start

### 1. Environment Setup

Create a `.env` file in the project root:

```bash
cp .env.example .env
```

Edit `.env` and add your credentials:

```bash
SUPABASE_URL=your-supabase-project-url
SUPABASE_ANON_KEY=your-supabase-anon-key
DATABASE_URL=your-postgresql-connection-string
LOOPS_API_KEY=your_loops_api_key_here
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your-secure-password
NODE_ENV=production
```

### 2. Local Development

```bash
# Install dependencies
npm install

# Start development server (frontend + backend)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Local Development (Without Docker)

```bash
# Install dependencies
npm install

# Start development server (frontend + backend)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Architecture

### Setup
- **Frontend**: Vite dev server with hot-reload (port 5173)
- **Backend**: Node.js Express API with Supabase integration (port 3001)
- **Database**: External Supabase PostgreSQL
- **Email**: Loops.so integration for automation

## Troubleshooting

### Port Already in Use

If ports 5173 or 3001 are already in use, you can specify different ports in the environment or terminal.

### Environment Variables Not Loading

Ensure your `.env` file is in the project root and contains all required variables. 

### Database Connection Issues

Verify your `DATABASE_URL` and `SUPABASE_URL` are correct. Check the console for errors.

## Deployment


```bash
# Tag images
docker tag ariyahq-frontend:latest your-registry/ariyahq-frontend:latest
docker tag ariyahq-backend:latest your-registry/ariyahq-backend:latest

# Push to registry
docker push your-registry/ariyahq-frontend:latest
docker push your-registry/ariyahq-backend:latest
```
