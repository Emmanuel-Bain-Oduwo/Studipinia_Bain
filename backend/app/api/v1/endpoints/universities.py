from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from typing import List, Optional
from app.core.database import get_db
from app.models.university import University
from app.schemas.university import UniversityCreate, UniversityResponse, UniversityUpdate
import uuid

router = APIRouter(prefix="/universities", tags=["Universities"])


@router.get("/", response_model=List[UniversityResponse])
def list_universities(
    featured: Optional[bool] = None,
    skip: int = Query(0, ge=0),
    limit: int = Query(50, le=200),
    db: Session = Depends(get_db),
):
    q = db.query(University).filter(University.is_active == True)
    if featured is not None:
        q = q.filter(University.featured == featured)
    return q.order_by(University.featured.desc(), University.name).offset(skip).limit(limit).all()


@router.get("/{slug}", response_model=UniversityResponse)
def get_university(slug: str, db: Session = Depends(get_db)):
    uni = db.query(University).filter(University.slug == slug, University.is_active == True).first()
    if not uni:
        raise HTTPException(status_code=404, detail="University not found")
    return uni


@router.post("/", response_model=UniversityResponse, status_code=201)
def create_university(payload: UniversityCreate, db: Session = Depends(get_db)):
    existing = db.query(University).filter(University.slug == payload.slug).first()
    if existing:
        raise HTTPException(status_code=400, detail="Slug already exists")
    uni = University(**payload.model_dump())
    db.add(uni)
    db.commit()
    db.refresh(uni)
    return uni


@router.patch("/{uni_id}", response_model=UniversityResponse)
def update_university(uni_id: uuid.UUID, payload: UniversityUpdate, db: Session = Depends(get_db)):
    uni = db.query(University).filter(University.id == uni_id).first()
    if not uni:
        raise HTTPException(status_code=404, detail="University not found")
    for k, v in payload.model_dump(exclude_none=True).items():
        setattr(uni, k, v)
    db.commit()
    db.refresh(uni)
    return uni


@router.delete("/{uni_id}", status_code=204)
def delete_university(uni_id: uuid.UUID, db: Session = Depends(get_db)):
    uni = db.query(University).filter(University.id == uni_id).first()
    if not uni:
        raise HTTPException(status_code=404, detail="University not found")
    uni.is_active = False
    db.commit()
