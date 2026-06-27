from sqlalchemy import Column, String, Boolean, Integer, Float, Text, DateTime, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
import uuid
from datetime import datetime
from app.core.database import Base


class Course(Base):
    __tablename__ = "courses"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    university_id = Column(UUID(as_uuid=True), ForeignKey("universities.id", ondelete="CASCADE"))
    name = Column(String(255), nullable=False)
    slug = Column(String(255), nullable=False, index=True)
    category = Column(String(100))
    degree = Column(String(100))
    duration = Column(String(50))
    annual_fee = Column(Float)
    currency = Column(String(10), default="USD")
    description = Column(Text)
    eligibility = Column(Text)
    seats = Column(Integer)
    scholarship_available = Column(Boolean, default=False)
    featured = Column(Boolean, default=False)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    university = relationship("University", back_populates="courses")
