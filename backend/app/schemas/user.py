from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime
import uuid


class UserRegister(BaseModel):
    full_name: str
    email: EmailStr
    phone: str
    country: str
    password: str


class UserLogin(BaseModel):
    email: EmailStr
    password: str


class UserResponse(BaseModel):
    id: uuid.UUID
    email: str
    full_name: str
    phone: Optional[str]
    role: str
    is_active: bool
    created_at: datetime

    class Config:
        from_attributes = True


class TokenResponse(BaseModel):
    access_token: str
    refresh_token: str
    token_type: str = "bearer"
    user: UserResponse
