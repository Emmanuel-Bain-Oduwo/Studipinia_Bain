# Studipinia — Your Gateway to Global Education

> Helping African students access quality higher education in India through a transparent, technology-driven admissions process.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 16, TypeScript, Tailwind CSS v4, Framer Motion |
| Backend | FastAPI, Python 3.12, SQLAlchemy 2, Alembic |
| Database | PostgreSQL 16 |
| Cache | Redis 7 |
| Storage | Cloudinary |
| Email | Resend |
| Auth | JWT (access + refresh tokens) |
| Deployment | Docker, Docker Compose, Nginx |
| CI/CD | GitHub Actions |

---

## Project Structure

```
Studipinia/
├── frontend/           # Next.js 16 app (App Router)
│   └── src/
│       ├── app/        # Pages (public, auth, dashboard, admin)
│       ├── components/ # UI, layout, sections, forms
│       ├── lib/        # Utilities, constants
│       └── types/      # TypeScript types
├── backend/            # FastAPI application
│   └── app/
│       ├── api/v1/     # REST API endpoints
│       ├── core/       # Config, database, security
│       ├── models/     # SQLAlchemy models
│       ├── schemas/    # Pydantic schemas
│       ├── services/   # Business logic
│       └── ai/         # AI service modules
├── docker/             # Dockerfiles & Nginx config
├── database/           # Migrations & seeds
├── .github/workflows/  # CI/CD pipelines
└── docker-compose.yml
```

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage (hero, universities, courses, testimonials, FAQ) |
| `/universities` | All partner universities |
| `/universities/[slug]` | University detail page |
| `/courses` | Browse all courses |
| `/scholarships` | Available scholarships |
| `/study-in-india` | Why study in India |
| `/student-life` | Campus and student life guide |
| `/accommodation` | Accommodation options |
| `/visa` | Visa assistance |
| `/blog` | Blog listing |
| `/blog/[slug]` | Blog post |
| `/contact` | Contact page |
| `/apply` | 3-step application form |
| `/consultation` | Book free counselling |
| `/faq` | Frequently asked questions |
| `/about` | About Studipinia |
| `/login` | Student login |
| `/register` | Student registration |
| `/dashboard` | Student dashboard (track application) |
| `/admin` | Admin dashboard (CRM, universities, blog) |

---

## Quick Start

### Prerequisites
- Node.js 20+
- Python 3.12+
- Docker & Docker Compose

### Frontend (dev)
```bash
cd frontend
npm install
npm run dev
# → http://localhost:3000
```

### Backend (dev)
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
# → http://localhost:8000
```

### Full stack with Docker
```bash
cp .env.example .env
# Edit .env with your secrets
docker compose up --build
# → http://localhost (via Nginx)
```

---

## Environment Variables

Copy `.env.example` to `.env` and fill in:

| Variable | Description |
|----------|-------------|
| `DB_PASSWORD` | PostgreSQL password |
| `SECRET_KEY` | JWT signing key (32+ chars) |
| `CLOUDINARY_*` | Cloudinary credentials for file uploads |
| `RESEND_API_KEY` | Resend API key for emails |
| `NEXT_PUBLIC_API_URL` | Backend API URL for frontend |

---

## Brand Colors

| Name | Hex |
|------|-----|
| Primary | `#0B3C91` (Deep Blue) |
| Secondary | `#16A34A` (Emerald Green) |
| Accent | `#FBBF24` (Gold) |
| Background | `#FFFFFF` |
| Text | `#111827` |

---

© 2025 Studipinia. All Rights Reserved.
