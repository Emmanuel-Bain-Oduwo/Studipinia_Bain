from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime
import uuid


class LeadCreate(BaseModel):
    full_name: str
    email: EmailStr
    phone: str
    whatsapp: Optional[str] = None
    country: str
    interested_course: Optional[str] = None
    interested_university: Optional[str] = None
    message: Optional[str] = None
    source: str = "website"


class LeadUpdate(BaseModel):
    status: Optional[str] = None
    assigned_to: Optional[uuid.UUID] = None
    notes: Optional[str] = None
    follow_up_date: Optional[datetime] = None


class LeadResponse(BaseModel):
    id: uuid.UUID
    full_name: str
    email: str
    phone: str
    country: Optional[str]
    interested_course: Optional[str]
    status: str
    created_at: datetime

    class Config:
        from_attributes = True
