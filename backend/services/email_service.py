import smtplib
import asyncio
import logging
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.header import Header
from typing import Dict, Any, Optional, Tuple

logger = logging.getLogger(__name__)

class EmailHandler:
    """
    Email service for sending emails via SMTP
    
    Provides a reusable service for sending emails with proper error handling,
    connection management, and support for various SMTP configurations.
    """
    
    def __init__(self):
        self.logger = logger
    
    async def send_email(
        self,
        email_data: Dict[str, Any]
    ) -> Dict[str, Any]:
        """
        Send email asynchronously
        
        Args:
            email_data: Dictionary containing email configuration and content:
                - host: SMTP server hostname
                - port: SMTP server port (default: 587)
                - username: SMTP username
                - password: SMTP password
                - to: Recipient email address
                - subject: Email subject
                - body: Email body content
                - use_tls: Whether to use TLS encryption (default: True)
                - timeout: Connection timeout in seconds (default: 30)
                - from_name: Optional display name for sender
            
        Returns:
            Dictionary with success status and details
        """
        try:
            # Extract values from email_data dictionary
            host = email_data.get('host')
            port = int(email_data.get('port', 587))
            username = email_data.get('username')
            password = email_data.get('password')
            to_email = email_data.get('to')
            subject = email_data.get('subject', 'Form Submission')
            body = email_data.get('body', 'New form submission received.')
            use_tls = email_data.get('use_tls', True)
            timeout = int(email_data.get('timeout', 30))
            from_name = email_data.get('from_name')
            
            # Validate inputs
            if not all([host, username, password, to_email]):
                return {
                    "success": False,
                    "error": "Missing required email parameters"
                }
            
            # Run synchronous email sending in thread pool
            loop = asyncio.get_event_loop()
            result = await loop.run_in_executor(
                None, 
                self._send_email_sync,
                host, port, username, password, to_email, subject, body, use_tls, timeout, from_name
            )
            
            return result
            
        except Exception as e:
            self.logger.error(f"Async email sending failed: {str(e)}")
            return {
                "success": False,
                "error": f"Failed to send email: {str(e)}"
            }
    
    def _send_email_sync(
        self,
        host: str,
        port: int,
        username: str,
        password: str,
        to_email: str,
        subject: str,
        body: str,
        use_tls: bool = True,
        timeout: int = 30,
        from_name: Optional[str] = None
    ) -> Dict[str, Any]:
        """
        Synchronous email sending implementation
        """
        try:
            # Create message
            msg = MIMEMultipart()
            
            # Ensure all text is properly encoded as UTF-8
            def safe_encode_text(text):
                """Safely encode text to UTF-8, handling various input types"""
                if text is None:
                    return ""
                if isinstance(text, bytes):
                    try:
                        # Try to decode as UTF-8 first
                        return text.decode('utf-8')
                    except UnicodeDecodeError:
                        # Fallback to latin-1 then encode as UTF-8
                        return text.decode('latin-1').encode('utf-8').decode('utf-8')
                elif isinstance(text, str):
                    # Ensure string is properly encoded
                    try:
                        # Test if string can be encoded to UTF-8
                        text.encode('utf-8')
                        return text
                    except UnicodeEncodeError:
                        # If not, replace problematic characters
                        return text.encode('utf-8', errors='replace').decode('utf-8')
                else:
                    return str(text)
            
            # Clean and validate email content
            safe_from_name = safe_encode_text(from_name) if from_name else None
            safe_username = safe_encode_text(username)
            safe_to_email = safe_encode_text(to_email)
            safe_subject = safe_encode_text(subject)
            safe_body = safe_encode_text(body)
            
            # Email addresses should NEVER be encoded - only display names
            # SMTP servers expect plain email addresses
            
            # Set From header
            if safe_from_name:
                # Format: "Display Name" <email@domain.com>
                # Only encode display name if it contains non-ASCII characters
                try:
                    safe_from_name.encode('ascii')
                    # Display name is ASCII-safe
                    msg["From"] = f'"{safe_from_name}" <{safe_username}>'
                except UnicodeEncodeError:
                    # Display name needs encoding
                    encoded_name = str(Header(safe_from_name, 'utf-8'))
                    msg["From"] = f'{encoded_name} <{safe_username}>'
            else:
                # No display name, just email address
                msg["From"] = safe_username
            
            # Set To header (always plain email address)
            msg["To"] = safe_to_email
            
            # Set Subject header (encode only if necessary)
            try:
                safe_subject.encode('ascii')
                msg["Subject"] = safe_subject
            except UnicodeEncodeError:
                msg["Subject"] = str(Header(safe_subject, 'utf-8'))
            
            # Add charset declaration to ensure proper encoding
            msg.set_charset('utf-8')
            
            # Add body with UTF-8 encoding
            if safe_body:
                body_part = MIMEText(safe_body, "plain", 'utf-8')
                msg.attach(body_part)
            
            # Debug: Log headers to understand what's being sent
            self.logger.info(f"Email headers being sent:")
            self.logger.info(f"  From: {msg['From']}")
            self.logger.info(f"  To: {msg['To']}")
            self.logger.info(f"  Subject: {msg['Subject']}")
            
            # Send email
            with smtplib.SMTP(host, port, timeout=timeout) as server:
                if use_tls:
                    server.starttls()
                server.login(username, password)
                server.send_message(msg)
            
            self.logger.info(f"Email sent successfully to {to_email}")
            return {
                "success": True,
                "message": "Email sent successfully",
                "to": to_email,
                "subject": subject
            }
            
        except smtplib.SMTPAuthenticationError as e:
            error_msg = f"SMTP authentication failed: {str(e)}"
            self.logger.error(error_msg)
            return {"success": False, "error": error_msg}
            
        except smtplib.SMTPRecipientsRefused as e:
            error_msg = f"Recipients refused: {str(e)}"
            self.logger.error(error_msg)
            return {"success": False, "error": error_msg}
            
        except smtplib.SMTPException as e:
            error_msg = f"SMTP error: {str(e)}"
            self.logger.error(error_msg)
            return {"success": False, "error": error_msg}
            
        except Exception as e:
            error_msg = f"Unexpected error: {str(e)}"
            self.logger.error(error_msg)
            return {"success": False, "error": error_msg}
    
    def validate_email_config(self, config: Dict[str, Any]) -> Tuple[bool, str]:
        """
        Validate email configuration
        
        Args:
            config: Email configuration dictionary
            
        Returns:
            Tuple of (is_valid, error_message)
        """
        required_fields = ["host", "username", "password", "to"]
        missing_fields = [field for field in required_fields if not config.get(field)]
        
        if missing_fields:
            return False, f"Missing required fields: {', '.join(missing_fields)}"
        
        # Validate port
        port = config.get("port", 587)
        try:
            port = int(port)
            if not (1 <= port <= 65535):
                return False, "Port must be between 1 and 65535"
        except (ValueError, TypeError):
            return False, "Port must be a valid integer"
        
        return True, "Configuration is valid"

# Global email service instance
email_service = EmailHandler()