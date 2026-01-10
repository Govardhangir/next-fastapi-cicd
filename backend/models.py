from pydantic import BaseModel, ConfigDict
from typing import Optional, List, Dict, Any
from datetime import datetime

class DefaultModel(BaseModel):
    """A simple placeholder model"""
    id: Optional[str] = None

class ResponseModel(BaseModel):
    """Standard API response model"""
    success: bool
    message: str
    data: Optional[Dict[str, Any]] = None

class BulkResponse(BaseModel):
    """Response model for bulk operations"""
    success: bool
    message: str
    data: List[str]  # List of created record IDs

