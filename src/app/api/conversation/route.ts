import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log('[Open Studio Message Received]:', data);

    return NextResponse.json(
      { success: true, message: 'Message received. Himanshu reads all open inquiries.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Conversation Error]', error);
    return NextResponse.json(
      { error: 'Failed to process message.' },
      { status: 500 }
    );
  }
}
