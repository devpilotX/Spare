# Spare Architecture Overview

Spare is a monorepo with a Next.js frontend and FastAPI backend. It uses PostgreSQL (with PostGIS), Redis, and integrates with external services for routing and notifications.

## Components
- **Frontend:** Next.js PWA (TypeScript, Tailwind)
- **Backend:** FastAPI, SQLAlchemy, Pydantic
- **Database:** PostgreSQL + PostGIS
- **Cache/Queue:** Redis
- **Matching Engine:** Google OR-Tools
- **Routing:** OpenRouteService/OSRM
- **Notifications:** SMTP, Telegram

See the README for the full directory structure and setup instructions.
