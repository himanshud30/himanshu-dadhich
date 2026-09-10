import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log('[Collaboration Request Received]:', data);

    return NextResponse.json(
      { success: true, message: 'Collaboration inquiry received. We will respond within 48 hours.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Collaboration Error]', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry.' },
      { status: 500 }
    );
  }
}
