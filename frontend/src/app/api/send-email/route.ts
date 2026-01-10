import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { host, port, username, password, to, subject, body: emailBody, use_tls } = body;

   // Validate required fields
    if (!host || !username || !password || !to) {
      return NextResponse.json(
        { error: 'Missing required email parameters: host, username, password, and to are required' },
        { status: 400 }
      );
    }

   console.log('📧 Frontend API: Forwarding email request to backend...');

   // Forward the request to the FastAPI backend
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000';
    const response = await fetch(`${backendUrl}/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
       body: JSON.stringify({
        host,
        port: parseInt(port) || 587,
        username,
        password,
        to,
        subject: subject || '',
        body: emailBody || '',
        use_tls: use_tls !== false // Default to true
      }),
    });

     if (!response.ok) {
      const errorText = await response.text();
      console.error('Backend email API error:', errorText);
      return NextResponse.json(
        { error: 'Backend email service failed', details: errorText },
        { status: response.status }
      );
    }

    const result = await response.json();
    console.log('✅ Email sent successfully via backend:', result);

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully',
      ...result 
    });
     } catch (error: any) {
    console.error('Frontend email API error:', error);
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    );
  }
}