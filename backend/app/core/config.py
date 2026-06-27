from pydantic_settings import BaseSettings
from typing import Optional


class Settings(BaseSettings):
    # App
    APP_NAME: str = "Studipinia API"
    APP_VERSION: str = "1.0.0"
    DEBUG: bool = False
    ENVIRONMENT: str = "production"
    ALLOWED_ORIGINS: list[str] = ["http://localhost:3000", "https://studipinia.com"]

    # Database
    DATABASE_URL: str = "postgresql://studipinia:password@db:5432/studipinia"

    # JWT
    SECRET_KEY: str = "change-this-to-a-random-secret-key-in-production"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7  # 7 days
    REFRESH_TOKEN_EXPIRE_DAYS: int = 30

    # Cloudinary
    CLOUDINARY_CLOUD_NAME: Optional[str] = None
    CLOUDINARY_API_KEY: Optional[str] = None
    CLOUDINARY_API_SECRET: Optional[str] = None

    # Resend (Email)
    RESEND_API_KEY: Optional[str] = None
    FROM_EMAIL: str = "noreply@studipinia.com"
    REPLY_TO_EMAIL: str = "info@studipinia.com"

    # Redis
    REDIS_URL: str = "redis://redis:6379/0"

    # AI
    OPENAI_API_KEY: Optional[str] = None
    DEEPSEEK_API_KEY: Optional[str] = None

    # Frontend
    FRONTEND_URL: str = "https://studipinia.com"

    class Config:
        env_file = ".env"
        case_sensitive = True


settings = Settings()
