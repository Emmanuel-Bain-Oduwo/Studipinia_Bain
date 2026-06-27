from sqlalchemy import Column, String, Text, DateTime, Enum as SAEnum, ForeignKey, Date
from sqlalchemy.dialects.postgresql import UUID
import uuid
from datetime import datetime
from app.core.database import Base


class Consultation(Base):
    __tablename__ = "consultations"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    full_name = Column(String(255), nullable=False)
    email = Column(String(255), nullable=False)
    phone = Column(String(50), nullable=False)
    country = Column(String(100))
    preferred_date = Column(Date, nullable=False)
    preferred_time = Column(String(20), nullable=False)
    mode = Column(SAEnum("Video Call", "WhatsApp", "Phone", name="consultation_mode"), default="Video Call")
    notes = Column(Text)
    status = Column(
        SAEnum("Pending", "Confirmed", "Completed", "Cancelled", name="consultation_status"),
        default="Pending",
    )
    counsellor_id = Column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
