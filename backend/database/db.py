import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
from urllib.parse import quote_plus

# Load environment variables
load_dotenv()

# Database connection URL from environment or fallback
# Use the URL from .env file if available, otherwise use the provided URL
raw_db_url = os.getenv("DATABASE_URL", "postgresql://postgres.ntkkfjdakmpheptyglmf:3hurdredand7@aws-1-ap-south-1.pooler.supabase.com:6543/postgres")

# Handle URL encoding for special characters in password
if 'postgresql://' in raw_db_url and '%' not in raw_db_url and '@' in raw_db_url:
    # Extract parts of the URL to properly encode the password
    parts = raw_db_url.split('@')
    if len(parts) == 2 and ':' in parts[0]:
        auth_parts = parts[0].split(':')
        if len(auth_parts) >= 3:  # postgresql://username:password
            # Extract username and password
            prefix = ':'.join(auth_parts[:-1]) + ':'
            password = auth_parts[-1]
            # Encode password and reconstruct URL
            encoded_password = quote_plus(password)
            DATABASE_URL = f"{prefix}{encoded_password}@{parts[1]}"
        else:
            DATABASE_URL = raw_db_url
    else:
        DATABASE_URL = raw_db_url
else:
    DATABASE_URL = raw_db_url

# Create SQLAlchemy engine
engine = create_engine(DATABASE_URL)

# Create SessionLocal class
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base class for models
Base = declarative_base()

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
