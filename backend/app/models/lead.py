from sqlalchemy import Column, String, Text, DateTime, Enum as SAEnum, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
import uuid
from datetime import datetime
from app.core.database import Base

LEAD_STATUS = (
    "New Lead",
    "Contacted",
    "Documents Received",
    "Application Submitted",
    "Admission Issued",
    "Visa Processing",
    "Enrolled",
    "Commission Completed",
)


class Lead(Base):
    __tablename__ = "leads"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    full_name = Column(String(255), nullable=False)
    email = Column(String(255), nullable=False, index=True)
    phone = Column(String(50), nullable=False)
    country = Column(String(100))
    whatsapp = Column(String(50))
    interested_course = Column(String(255))
    interested_university = Column(String(255))
    message = Column(Text)
    source = Column(String(100), default="website")
    status = Column(
        SAEnum(*LEAD_STATUS, name="lead_status"),
        default="New Lead",
    )
    assigned_to = Column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=True)
    notes = Column(Text)
    follow_up_date = Column(DateTime, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
