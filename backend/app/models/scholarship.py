from sqlalchemy import Column, String, Float, Boolean, Text, DateTime, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
import uuid
from datetime import datetime
from app.core.database import Base


class Scholarship(Base):
    __tablename__ = "scholarships"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    university_id = Column(UUID(as_uuid=True), ForeignKey("universities.id"), nullable=True)
    name = Column(String(255), nullable=False)
    amount = Column(Float)
    amount_type = Column(String(20), default="percentage")
    currency = Column(String(10), default="USD")
    scholarship_type = Column(String(50))
    eligibility = Column(Text)
    description = Column(Text)
    deadline = Column(DateTime, nullable=True)
    renewable = Column(Boolean, default=False)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
