import uuid
from sqlalchemy import Column, String, Text, Boolean, DateTime, Integer, Float, Numeric, ForeignKey, JSON, Enum as SAEnum, text
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.sql import func
from datetime import datetime as dt

Base = declarative_base()

# Generated models from schema data
# This file contains all database models that should be importable by api_crud.py

# DefaultModel - Always included as a fallback/example model
class DefaultModel(Base):
    """A simple placeholder/example model"""
    __tablename__ = "default_model"
    
    id = Column(UUID, primary_key=True, default=uuid.uuid4)
    name = Column(String(255), nullable=True)
    description = Column(Text, nullable=True)
    created_at = Column(DateTime, default=dt.utcnow)
    updated_at = Column(DateTime, default=dt.utcnow, onupdate=dt.utcnow)

