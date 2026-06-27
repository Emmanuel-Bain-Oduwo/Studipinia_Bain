from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime
import uuid


class UniversityCreate(BaseModel):
    name: str
    slug: str
    location: Optional[str] = None
    city: Optional[str] = None
    state: Optional[str] = None
    country: str = "India"
    description: Optional[str] = None
    short_description: Optional[str] = None
    scholarships_available: bool = False
    featured: bool = False
    website: Optional[str] = None


class UniversityUpdate(BaseModel):
    name: Optional[str] = None
    location: Optional[str] = None
    description: Optional[str] = None
    short_description: Optional[str] = None
    scholarships_available: Optional[bool] = None
    featured: Optional[bool] = None


class UniversityResponse(BaseModel):
    id: uuid.UUID
    name: str
    slug: str
    location: Optional[str]
    country: str
    logo_url: Optional[str]
    short_description: Optional[str]
    featured: bool
    rating: float
    is_active: bool
    created_at: datetime

    class Config:
        from_attributes = True
