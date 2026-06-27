from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import date
from app.core.database import get_db
from app.models.consultation import Consultation

router = APIRouter(prefix="/consultations", tags=["Consultations"])


class ConsultationCreate(BaseModel):
    full_name: str
    email: EmailStr
    phone: str
    country: str
    preferred_date: date
    preferred_time: str
    mode: str = "Video Call"
    notes: Optional[str] = None


@router.post("/", status_code=201)
def book_consultation(payload: ConsultationCreate, db: Session = Depends(get_db)):
    consultation = Consultation(**payload.model_dump())
    db.add(consultation)
    db.commit()
    db.refresh(consultation)
    return {"message": "Consultation booked successfully", "id": str(consultation.id)}


@router.get("/")
def list_consultations(db: Session = Depends(get_db)):
    return db.query(Consultation).order_by(Consultation.created_at.desc()).limit(100).all()
