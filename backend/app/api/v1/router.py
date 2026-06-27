from fastapi import APIRouter
from app.api.v1.endpoints import auth, leads, universities, consultations

api_router = APIRouter(prefix="/api/v1")

api_router.include_router(auth.router)
api_router.include_router(leads.router)
api_router.include_router(universities.router)
api_router.include_router(consultations.router)
