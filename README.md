# Mission Control

A lightweight operations dashboard for tracking projects, services, tasks, documents, activity, and working knowledge from one deployable Next.js application.

## What this project demonstrates

- Dashboard and information-architecture design
- Next.js App Router development with React and TypeScript
- Reusable status components and responsive Tailwind CSS layouts
- Structured, JSON-driven content that non-developers can update
- Project portfolio, documentation, and knowledge-hub patterns
- Kanban-style task organization and activity reporting
- Deployment-ready configuration for Vercel

## Product areas

### Overview

Displays service status cards and recent activity so the most important operational signals are visible immediately.

### Projects

Renders a structured project inventory from `data/projects.json`, keeping project content separate from presentation logic.

### Tasks

Organizes work into a compact Kanban-style view and pairs it with an activity feed.

### Docs and Memories

Provides browsable indexes for external documents and durable working notes. These pages are designed as a portable hub rather than a replacement for the systems that own the source material.

## Architecture

```text
app/
├── page.tsx                 # Service overview and activity feed
├── projects/page.tsx        # Project portfolio
├── tasks/page.tsx           # Kanban and activity view
├── docs/page.tsx            # Document index
├── memories/page.tsx        # Knowledge links and notes
└── components/StatusPill.tsx
data/
├── activity.json
├── docs.json
├── memories.json
├── projects.json
└── services.json
```

The JSON data layer makes the dashboard easy to extend without adding a database prematurely. The UI remains statically deployable while preserving clear boundaries between content and components.

## Technology

Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · ESLint · Vercel

## Run locally

Requirements: Node.js 20 or newer and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validate

```bash
npm run lint
npm run build
```

## Portfolio focus

Mission Control demonstrates the ability to turn scattered operational information into a clear, maintainable interface. Its deliberately small data layer makes it useful as a portfolio dashboard, internal tool prototype, or foundation for a future API-backed control plane.
