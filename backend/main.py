
from fastapi import FastAPI, Request, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse, PlainTextResponse
from typing import Dict, Any, Optional
from uuid import uuid4
import uvicorn
import os
import inspect
import time
from contextlib import asynccontextmanager
import requests
import json

# Import models
from models import ResponseModel

# Import database dependencies
from database.db import get_db, engine
from database.models import Base
from sqlalchemy.orm import Session

# Import service files
from services.email_service import EmailHandler
email_service = EmailHandler()
from services.email_polling_service import email_polling_service

# Define lifespan for application startup and shutdown events
@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: Initialize database tables
    Base.metadata.create_all(bind=engine)
    print("Database tables created successfully")
    
            # Register incoming webhooks from workflows (only if incoming webhooks exist)
    # Initialize email polling service
    email_polling_service.running = True
    print("Email polling service initialized")
    
    yield
    # Shutdown: Add any cleanup code here if needed
    
    print("Shutting down application")

# Create FastAPI app
app = FastAPI(
    title="Generated API",
    description="API generated from Simplita workflow",
    version="1.0.0",
    lifespan=lifespan,
)

# Configure CORS
origins = os.getenv("CORS_ORIGINS", "http://localhost:3000").split(",")
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Global exception handler
@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    return JSONResponse(
        status_code=500,
        content={"detail": str(exc)},
    )

# Import and include CRUD API router
from api_crud import router as crud_router
app.include_router(crud_router)

# Import and include custom API router
from api_custom import router as custom_router
app.include_router(custom_router)



# Import and include Email Monitoring API router for inbound emails
try:
    from api_email_monitoring import router as email_monitoring_router
    app.include_router(email_monitoring_router)
    print("Email Monitoring API implementation loaded successfully")
except ImportError as e:
    print(f"WARNING: Email Monitoring API router not available: {e}")
    print("Please install required dependencies: pip install aiohttp imaplib")

# Root endpoint
@app.get("/", response_model=ResponseModel)
async def read_root():
    return {
        "success": True,
        "message": "API is running",
        "data": {"version": "1.0.0"}
    }

# Email endpoint for flow integration
@app.post("/send-email")
async def send_email(request: Request):
  
    try:
        # Extract JSON body with UTF-8 encoding
        request_body = await request.body()
        if request_body:
            # Ensure request body is properly decoded as UTF-8
            body_text = request_body.decode('utf-8', errors='replace')
            import json
            data = json.loads(body_text)
        else:
            data = {}
            
        # Extract email configuration with UTF-8 safe handling
        def safe_extract_text(value, default=""):
            """Safely extract text ensuring UTF-8 compatibility"""
            if value is None:
                return default
            if isinstance(value, bytes):
                return value.decode('utf-8', errors='replace')
            elif isinstance(value, str):
                # Ensure the string can be properly encoded/decoded
                try:
                    return value.encode('utf-8', errors='replace').decode('utf-8')
                except (UnicodeDecodeError, UnicodeEncodeError):
                    return str(value).encode('utf-8', errors='replace').decode('utf-8')
            else:
                return str(value)
        
        host = safe_extract_text(data.get("host"))
        port = int(data.get("port", 587))
        username = safe_extract_text(data.get("username"))
        password = safe_extract_text(data.get("password"))
        to_email = safe_extract_text(data.get("to"))
        subject = safe_extract_text(data.get("subject"), "")
        body = safe_extract_text(data.get("body"), "")
        use_tls = data.get("use_tls", True)

        # Validate required fields
        if not all([host, username, password, to_email]):
            raise HTTPException(
                status_code=400, 
                detail="Missing required fields: host, username, password, and to are required"
            )
        
        # Send email using the email service
        email_data = {
            'host': host,
            'port': port,
            'username': username,
            'password': password,
            'to': to_email,
            'subject': subject,
            'body': body,
            'use_tls': use_tls
        }
        result = await email_service.send_email(email_data)
        
        if result["success"]:
            return {
                "success": True,
                "message": "Email sent successfully",
                "to": to_email,
                "subject": subject
            }
        else:
            raise HTTPException(status_code=500, detail=result["error"])
            
    except HTTPException:
        raise
    except Exception as e:
         raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")

# Alternative endpoint for frontend API routes
@app.post("/api/send-email")
async def send_email_api(request: Request):
    """
    Alternative endpoint for frontend API routes
    """
    return await send_email(request)

    # Root endpoint
    @app.get("/", response_model=ResponseModel)
    async def read_root():
        return {
            "success": True,
            "message": "API is running",
            "data": {"version": "1.0.0"}
        }
    
    # API Status endpoint
    @app.get("/api/status", response_model=ResponseModel)
    async def api_status():
        """
        API status endpoint
        """
        return {
            "success": True,
            "message": "API is operational",
            "data": {"version": "1.0.0"}
        }
    
# Run the app
if __name__ == "__main__":
    port = int(os.getenv("PORT", "8000"))
    # Use 127.0.0.1 for better localhost compatibility
    uvicorn.run("main:app", host="localhost", port=port, reload=True)
@app.get("/api/status", response_model=ResponseModel)
async def api_status():
    """
    API status endpoint
    """
    return {
        "success": True,
        "message": "API is operational",
        "data": {"version": "1.0.0"}
    }