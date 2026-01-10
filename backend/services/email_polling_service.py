
"""
Email Polling Service for IMAP/POP3 monitoring
Provides real-time email monitoring and webhook integration
"""

import asyncio
import imaplib
import email
import logging
import os
from datetime import datetime
from typing import Dict, Any, List
import aiohttp

logger = logging.getLogger(__name__)

class EmailPollingService:
    """Service for polling IMAP/POP3 servers and processing inbound emails"""
    
    def __init__(self):
        self.active_monitors: Dict[str, Dict] = {}
        
    async def start_email_monitoring(self, config: Dict[str, Any]) -> str:
        """Start monitoring an email account for inbound emails"""
        monitor_id = f"email_monitor_{datetime.now().strftime('%Y%m%d_%H%M%S')}"
        
        monitor_config = {
            'id': monitor_id,
            'host': config.get('host'),
            'port': config.get('port', 993),
            'username': config.get('username'),
            'password': config.get('password'),
            'use_ssl': config.get('useSSL', True),
            'folder': config.get('folder', 'INBOX'),
            'check_interval': config.get('checkInterval', 30),
            'mark_as_read': config.get('markAsRead', False),
            'node_id': config.get('nodeId'),
            'filters': {
                'from_filter': config.get('fromFilter', ''),
                'subject_filter': config.get('subjectFilter', ''),
                'body_filter': config.get('bodyFilter', '')
            },
            'processed_emails': set(),
            'active': True
        }
        
        self.active_monitors[monitor_id] = monitor_config
        asyncio.create_task(self._monitor_email_account(monitor_id))
        
        logger.info(f"Started email monitoring for {config.get('username')} with ID: {monitor_id}")
        return monitor_id
    
    async def stop_email_monitoring(self, monitor_id: str) -> bool:
        """Stop monitoring a specific email account"""
        if monitor_id in self.active_monitors:
            self.active_monitors[monitor_id]['active'] = False
            del self.active_monitors[monitor_id]
            return True
        return False
    
    async def _monitor_email_account(self, monitor_id: str):
        """Main monitoring loop for a single email account"""
        config = self.active_monitors.get(monitor_id)
        if not config:
            return
            
        while config.get('active', False):
            try:
                new_emails = await self._check_imap_emails(config)
                logger.info(f"[{monitor_id}] Found {len(new_emails)} new emails")
                
                for email_data in new_emails:
                    logger.info(f"[{monitor_id}] Processing email: {email_data.get('subject', 'No Subject')}")
                    await self._store_email_for_frontend(email_data, config)
                
                await asyncio.sleep(config['check_interval'])
                
            except Exception as e:
                logger.error(f"[{monitor_id}] Email monitoring error: {str(e)}")
                await asyncio.sleep(60)
    
    async def _check_imap_emails(self, config: Dict) -> List[Dict]:
        """Check IMAP server for new emails"""
        emails = []
        monitor_id = config.get('id', 'unknown')
        try:
            logger.info(f"[{monitor_id}] 🔍 Checking IMAP server {config['host']} for user {config['username']}")
            
            # Create IMAP connection
            if config['use_ssl']:
                mail = imaplib.IMAP4_SSL(config['host'], config['port'])
            else:
                mail = imaplib.IMAP4(config['host'], config['port'])
            
            logger.info(f"[{monitor_id}] ✅ IMAP connection established")
            mail.login(config['username'], config['password'])
            logger.info(f"[{monitor_id}] ✅ Successfully logged in to IMAP")
            
            status, count = mail.select(config['folder'])
            logger.info(f"[{monitor_id}] ✅ Selected folder '{config['folder']}', status: {status}, total emails: {count[0].decode() if count else 'unknown'}")
            
            # Search for unread emails
            status, messages = mail.search(None, 'UNSEEN')
            email_ids = messages[0].split()
            logger.info(f"[{monitor_id}] 📧 Found {len(email_ids)} unread emails")
            
            # If no unread emails, try searching for recent emails
            if len(email_ids) == 0:
                status, messages = mail.search(None, 'RECENT')
                email_ids = messages[0].split()
                logger.info(f"[{monitor_id}] 📧 Found {len(email_ids)} recent emails")
            
            for email_id in email_ids:
                if email_id.decode() not in config['processed_emails']:
                    status, msg_data = mail.fetch(email_id, '(RFC822)')
                    
                    if status == 'OK':
                        email_obj = email.message_from_bytes(msg_data[0][1])
                        email_data = self._parse_email_message(email_obj, config)
                        
                        # Apply filters
                        if self._email_matches_filters(email_data, config['filters']):
                            emails.append(email_data)
                            config['processed_emails'].add(email_id.decode())
                            
                            if config['mark_as_read']:
                                mail.store(email_id, '+FLAGS', '\\Seen')
            
            mail.close()
            mail.logout()
            logger.info(f"[{monitor_id}] ✅ IMAP connection closed, returning {len(emails)} emails")
        except Exception as e:
            logger.error(f"[{monitor_id}] ❌ IMAP error: {str(e)}")
            logger.error(f"[{monitor_id}] 🔧 Config: host={config.get('host')}, port={config.get('port')}, username={config.get('username')}, use_ssl={config.get('use_ssl')}")
        
        return emails
    
    def _parse_email_message(self, email_obj, config: Dict) -> Dict:
        """Parse email message into structured data"""
        from_header = email_obj.get('From', '')
        subject_header = email_obj.get('Subject', '')
        date_header = email_obj.get('Date', '')
        
        body_text = ''
        body_html = ''
        attachments = []
        
        if email_obj.is_multipart():
            for part in email_obj.walk():
                content_type = part.get_content_type()
                content_disposition = str(part.get('Content-Disposition', ''))
                
                if content_type == 'text/plain' and 'attachment' not in content_disposition:
                    body_text = part.get_payload(decode=True).decode('utf-8', errors='ignore')
                elif content_type == 'text/html' and 'attachment' not in content_disposition:
                    body_html = part.get_payload(decode=True).decode('utf-8', errors='ignore')
                elif 'attachment' in content_disposition:
                    filename = part.get_filename()
                    if filename:
                        attachments.append({
                            'filename': filename,
                            'content_type': content_type,
                            'size': len(part.get_payload())
                        })
        else:
            body_text = email_obj.get_payload(decode=True).decode('utf-8', errors='ignore')
        
        return {
            'id': f"email_{datetime.now().strftime('%Y%m%d_%H%M%S_%f')}",
            'from': from_header,
            'subject': subject_header,
            'date': date_header,
            'body_text': body_text,
            'body_html': body_html,
            'attachments': attachments,
            'timestamp': datetime.now().isoformat(),
            'node_id': config.get('node_id')
        }
    
    def _email_matches_filters(self, email_data: Dict, filters: Dict) -> bool:
        """Check if email matches configured filters"""
        from email.utils import parseaddr
        import re

        def parse_filter_list(filter_value: str) -> List[str]:
            if not filter_value:
                return []
            return [
                part.strip().lower()
                for part in re.split(r'[,\s;]+', filter_value)
                if part.strip()
            ]

        def matches_pattern(value: str, pattern: str, email_mode: bool = False) -> bool:
            if not value or not pattern:
                return False

            value = value.lower()
            pattern = pattern.lower()

            if pattern.startswith('@'):
                return value.endswith(pattern)

            if email_mode and '@' in pattern and '*' not in pattern:
                return value == pattern

            if '*' in pattern:
                escaped = re.escape(pattern).replace(r'\*', '.*')
                return re.fullmatch(escaped, value) is not None

            return pattern in value

        from_filters = parse_filter_list(filters.get('from_filter', ''))
        if from_filters:
            email_from = email_data.get('from', '')
            _, actual_email = parseaddr(email_from)
            actual_email = actual_email.strip().lower()

            if not actual_email:
                return False

            if not any(matches_pattern(actual_email, pattern, email_mode=True) for pattern in from_filters):
                return False

        subject_filters = parse_filter_list(filters.get('subject_filter', ''))
        if subject_filters:
            subject_text = (email_data.get('subject') or '').lower()
            if not any(matches_pattern(subject_text, pattern) for pattern in subject_filters):
                return False

        body_filters = parse_filter_list(filters.get('body_filter', ''))
        if body_filters:
            body_text = (email_data.get('body_text') or '').lower()
            if not any(matches_pattern(body_text, pattern) for pattern in body_filters):
                return False

        return True
    
    async def _store_email_for_frontend(self, email_data: Dict, config: Dict):
        """Store email data for frontend access"""
        try:
            monitor_id = config['id']
            # Get backend URL from environment variables
            API_URL = os.getenv('API_URL', 'http://localhost:8000')
            api_url = f"{API_URL}/api/email/store-email-data/{monitor_id}"
            
            logger.info(f"[{monitor_id}] 💾 Storing email data via API: {api_url}")
            logger.info(f"[{monitor_id}] 📧 Email: From={email_data.get('from')}, Subject={email_data.get('subject')}")
            
            async with aiohttp.ClientSession() as session:
                async with session.post(api_url, json=email_data) as response:
                    if response.status == 200:
                        logger.info(f"[{monitor_id}] ✅ Email data stored successfully")
                    else:
                        error_text = await response.text()
                        logger.error(f"[{monitor_id}] ❌ Failed to store email: {response.status} - {error_text}")
        except Exception as e:
            logger.error(f"[{monitor_id}] ❌ Error storing email: {str(e)}")

# Global service instance
email_polling_service = EmailPollingService()