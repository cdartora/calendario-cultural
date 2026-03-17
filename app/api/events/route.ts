import { NextResponse } from 'next/server';
import { fetchEventsFromSheets } from '@/lib/sheets';

export const revalidate = 3600;

export async function GET() {
  try {
    const events = await fetchEventsFromSheets();
    
    return NextResponse.json({
      success: true,
      count: events.length,
      events,
    });
  } catch (error) {
    console.error('Error in /api/events:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch events',
        events: [],
      },
      { status: 500 }
    );
  }
}
