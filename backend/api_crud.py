from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from typing import List, Optional, Annotated, Union
from uuid import UUID
from database.db import get_db
from database.models import DefaultModel as DBDefaultModel
from models import ResponseModel
from pydantic import BaseModel, Field, ConfigDict
import uuid
from datetime import datetime

# Create API router
router = APIRouter(prefix="/api", tags=["Form APIs"])

# Pydantic model for DefaultModel
class DefaultModelBase(BaseModel):
    """Base DefaultModel model for create/update operations"""
    name: str
    description: Optional[str] = None

class DefaultModel(DefaultModelBase):
    """DefaultModel with all fields including database fields"""
    id: UUID
    created_at: datetime
    updated_at: datetime
    
    model_config = ConfigDict(from_attributes=True, arbitrary_types_allowed=True)

# Default component ID for forms
DEFAULT_COMPONENT_ID = f"component-{int(datetime.now().timestamp() * 1000)}"

@router.get("/form/default", response_model=List[DefaultModel])
def get_all_items(
    skip: int = Query(0, ge=0),
    limit: int = Query(100, ge=1, le=100),
    db: Session = Depends(get_db)
):
    """Get all items"""
    items = db.query(DBDefaultModel).offset(skip).limit(limit).all()
    return items

@router.get("/form/default/{id}", response_model=DefaultModel)
def get_item_by_id(
    id: UUID,
    db: Session = Depends(get_db)
):
    """Get a specific item by ID"""
    item = db.query(DBDefaultModel).filter(DBDefaultModel.id == id).first()
    if item is None:
        raise HTTPException(status_code=404, detail="Item not found")
    return item

@router.post("/form/default")
def create_item(
    data: Union[DefaultModelBase, List[DefaultModelBase]],
    db: Session = Depends(get_db)
):
    """Create one or multiple items"""
    # Check if data is a list (bulk) or single item
    is_bulk = isinstance(data, list)
    items_to_process = data if is_bulk else [data]
    
    db_items = []
    new_ids = []
    
    # Process all items
    for item in items_to_process:
        db_item = DBDefaultModel(**item.model_dump(), id=uuid.uuid4())
        db.add(db_item)
        db_items.append(db_item)
    
    db.commit()
    
    # Refresh all items and collect IDs
    for db_item in db_items:
        db.refresh(db_item)
        new_ids.append(str(db_item.id))
    
    # Return appropriate response based on input type
    if is_bulk:
        return {
            "success": True,
            "message": f"{len(new_ids)} items created successfully",
            "data": new_ids  # List of IDs for bulk
        }
    else:
        return {
            "success": True,
            "message": "Item created successfully",
            "data": {"id": new_ids[0]}  # Single ID object for single record
        }

@router.put("/form/default/{id}", response_model=ResponseModel)
def update_item(
    id: UUID,
    item: DefaultModelBase,
    db: Session = Depends(get_db)
):
    """Update an existing item"""
    db_item = db.query(DBDefaultModel).filter(DBDefaultModel.id == id).first()
    if db_item is None:
        raise HTTPException(status_code=404, detail="Item not found")
        
    # Update fields
    for key, value in item.model_dump().items():
        setattr(db_item, key, value)
        
    db_item.updated_at = datetime.utcnow()
    db.commit()
    db.refresh(db_item)
    return {
        "success": True,
        "message": "Item updated successfully",
        "data": {"id": str(db_item.id)}
    }

@router.delete("/form/default/{id}", response_model=ResponseModel)
def delete_item(
    id: UUID,
    db: Session = Depends(get_db)
):
    """Delete an item"""
    db_item = db.query(DBDefaultModel).filter(DBDefaultModel.id == id).first()
    if db_item is None:
        raise HTTPException(status_code=404, detail="Item not found")
        
    db.delete(db_item)
    db.commit()
    return {
        "success": True,
        "message": "Item deleted successfully",
        "data": {"id": str(id)}
    }
