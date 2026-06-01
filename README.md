# Spare

Spare is a real-time surplus-to-need matching platform connecting food/goods donors to nearby recipients (shelters, kitchens, NGOs) and assigning drivers with optimized pickup and delivery routes before surplus expires.

## Tech Stack
- **Frontend:** Next.js (App Router), TypeScript, Tailwind CSS
- **Backend:** FastAPI, Pydantic, SQLAlchemy
- **Database:** PostgreSQL + PostGIS
- **Cache/Queue:** Redis
- **Matching Engine:** Google OR-Tools
- **Routing/Maps:** OpenRouteService/OSRM + OpenStreetMap
- **Notifications:** Email (SMTP) + Telegram bot
- **CI:** GitHub Actions

## Monorepo Structure
```
/
  README.md
  .gitignore
  .env.example
  docs/
  frontend/
  backend/
    app/
      api/
      models/
      schemas/
      services/
      core/
    alembic/
    tests/
  infra/
    docker-compose.yml
    Dockerfiles
  .github/workflows/
```

## Getting Started
See `docs/` and the README for setup, local development, and contribution guidelines.
