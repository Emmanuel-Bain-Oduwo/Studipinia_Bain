from sqlalchemy import Column, String, Text, DateTime, ForeignKey, Enum as SAEnum, Date
from sqlalchemy.dialects.postgresql import UUID, ARRAY
from sqlalchemy.orm import relationship
import uuid
from datetime import datetime
from app.core.database import Base


class Student(Base):
    __tablename__ = "students"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="CASCADE"), unique=True)
    full_name = Column(String(255), nullable=False)
    email = Column(String(255), nullable=False)
    phone = Column(String(50))
    nationality = Column(String(100))
    date_of_birth = Column(Date, nullable=True)
    gender = Column(String(20))
    passport_number = Column(String(100))
    passport_expiry = Column(Date, nullable=True)
    high_school_grade = Column(String(50))
    preferred_course = Column(String(255))
    preferred_university = Column(String(255))
    application_status = Column(String(100), default="New Lead")
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    user = relationship("User", back_populates="student")
    documents = relationship("Document", back_populates="student")
