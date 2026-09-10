import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, source } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required.' },
        { status: 400 }
      );
    }

    // In a production environment with SUPABASE_URL / RESEND_API_KEY configured,
    // we would insert into Supabase or trigger Resend.
    // For now we log and return successful acknowledgement.
    console.log(`[Newsletter Subscription] Email: ${email}, Source: ${source || 'website'}, Timestamp: ${new Date().toISOString()}`);

    return NextResponse.json(
      { success: true, message: 'Subscribed successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Newsletter Error]', error);
    return NextResponse.json(
      { error: 'Failed to process subscription.' },
      { status: 500 }
    );
  }
}
