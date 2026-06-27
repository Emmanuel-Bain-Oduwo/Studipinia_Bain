from sqlalchemy import Column, String, Boolean, Integer, Float, Text, DateTime, ARRAY
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
import uuid
from datetime import datetime
from app.core.database import Base


class University(Base):
    __tablename__ = "universities"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String(255), nullable=False)
    slug = Column(String(255), unique=True, nullable=False, index=True)
    location = Column(String(255))
    city = Column(String(100))
    state = Column(String(100))
    country = Column(String(100), default="India")
    logo_url = Column(String(500))
    cover_image_url = Column(String(500))
    ranking = Column(Integer)
    established = Column(Integer)
    description = Column(Text)
    short_description = Column(String(500))
    accreditation = Column(ARRAY(String))
    scholarships_available = Column(Boolean, default=False)
    featured = Column(Boolean, default=False)
    rating = Column(Float, default=4.5)
    review_count = Column(Integer, default=0)
    students_enrolled = Column(Integer, default=0)
    website = Column(String(500))
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    courses = relationship("Course", back_populates="university")
