"""
Email Monitoring API Endpoints
Provides REST API for starting, stopping, and checking email monitoring
"""

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Dict, Any, Optional
from datetime import datetime
from services.email_polling_service import email_polling_service

router = APIRouter(prefix="/api/email", tags=["email-monitoring"])

class EmailMonitoringConfig(BaseModel):
    host: str
    port: int = 993
    username: str
    password: str
    useSSL: bool = True
    folder: str = "INBOX"
    checkInterval: int = 30
    markAsRead: bool = False
    maxWaitTime: int = 300
    nodeId: str
    fromFilter: str = ""
    subjectFilter: str = ""
    bodyFilter: str = ""

# In-memory storage for email data
email_data_store: Dict[str, Dict[str, Any]] = {}

@router.post("/start-monitoring")
async def start_email_monitoring(config: EmailMonitoringConfig):
    """Start monitoring an email account for inbound emails"""
    try:
        config_dict = config.dict()
        monitor_id = await email_polling_service.start_email_monitoring(config_dict)
        
        return {
            "success": True,
            "monitor_id": monitor_id,
            "message": f"Email monitoring started for {config.username}"
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to start monitoring: {str(e)}")

@router.get("/check-data/{monitor_id}")
async def check_email_data(monitor_id: str):
    """Check if there's new email data available for a monitor"""
    try:
        email_data = email_data_store.get(monitor_id)
        
        if email_data:
            # Remove from store (consume once)
            del email_data_store[monitor_id]
            return {
                "success": True,
                "email_data": email_data,
                "message": "Email data retrieved successfully"
            }
        else:
            return {
                "success": True,
                "email_data": None,
                "message": "No email data available yet"
            }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to check email data: {str(e)}")

@router.post("/store-email-data/{monitor_id}")
async def store_email_data(monitor_id: str, email_data: Dict[str, Any]):
    """Store email data for a specific monitor (used by polling service)"""
    try:
        email_data_store[monitor_id] = {
            **email_data,
            "received_at": datetime.now().isoformat(),
            "monitor_id": monitor_id
        }
        return {"success": True, "message": "Email data stored successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to store email data: {str(e)}")

@router.post("/stop-monitoring/{monitor_id}")
async def stop_email_monitoring(monitor_id: str):
    """Stop monitoring a specific email account"""
    try:
        success = await email_polling_service.stop_email_monitoring(monitor_id)
        
        # Clean up stored data
        if monitor_id in email_data_store:
            del email_data_store[monitor_id]
            
        return {
            "success": success,
            "message": f"Monitoring stopped: {monitor_id}" if success else f"Monitor not found: {monitor_id}"
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to stop monitoring: {str(e)}")