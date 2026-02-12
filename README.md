# Ariya HQ Website

Event planning platform website built with React, TypeScript, and Vite.

## Live Site

https://ariya-hq.github.io/WEBSITE-/

## Prerequisites

- **Docker** 20.10 or higher
- **Docker Compose** 2.0 or higher

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

### 2. Production Deployment

Build and run the production containers:

```bash
# Build images
docker-compose build

# Start containers in detached mode
docker-compose up -d

# View logs
docker-compose logs -f
```

Access the application:
- **Frontend**: http://localhost
- **Backend API**: http://localhost:3001

### 3. Development Mode

For development with hot-reload:

```bash
# Start development containers
docker-compose -f docker-compose.dev.yml up

# Or build and start
docker-compose -f docker-compose.dev.yml up --build
```

Access the application:
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3001

## Docker Commands

### Production

```bash
# Build images
docker-compose build

# Start services
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f

# Rebuild and restart
docker-compose up -d --build

# Remove everything (containers, images, volumes)
docker-compose down --rmi all -v
```

### Development

```bash
# Start dev environment
docker-compose -f docker-compose.dev.yml up

# Rebuild dev images
docker-compose -f docker-compose.dev.yml up --build

# Stop dev environment
docker-compose -f docker-compose.dev.yml down
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

### Production Setup
- **Frontend**: Multi-stage Docker build → nginx serving static files (port 80)
- **Backend**: Node.js Express API with Supabase integration (port 3001)
- **Database**: External Supabase PostgreSQL
- **Email**: Loops.so integration for automation

### Development Setup
- **Frontend**: Vite dev server with hot-reload (port 5173)
- **Backend**: tsx watch mode with hot-reload (port 3001)
- **Volumes**: Source code mounted for live updates

## Troubleshooting

### Port Already in Use

If ports 80 or 3001 are already in use, modify `docker-compose.yml`:

```yaml
services:
  frontend:
    ports:
      - "8080:80"  # Change 80 to 8080
  backend:
    ports:
      - "3002:3001"  # Change 3001 to 3002
```

### Environment Variables Not Loading

Ensure your `.env` file is in the project root and contains all required variables. Restart containers after changes:

```bash
docker-compose down
docker-compose up -d
```

### Database Connection Issues

Verify your `DATABASE_URL` and `SUPABASE_URL` are correct. Check backend logs:

```bash
docker-compose logs backend
```

### Hot Reload Not Working (Development)

Ensure you're using the development compose file:

```bash
docker-compose -f docker-compose.dev.yml up
```

### Container Health Check Failing

Check container status:

```bash
docker-compose ps
```

View detailed logs:

```bash
docker-compose logs backend
docker-compose logs frontend
```

## Deployment

The site is automatically deployed to GitHub Pages on every push to the master branch.

For Docker-based deployment to cloud platforms (AWS, GCP, Azure), push the images to a container registry:

```bash
# Tag images
docker tag ariyahq-frontend:latest your-registry/ariyahq-frontend:latest
docker tag ariyahq-backend:latest your-registry/ariyahq-backend:latest

# Push to registry
docker push your-registry/ariyahq-frontend:latest
docker push your-registry/ariyahq-backend:latest
```
