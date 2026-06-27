import { NextResponse } from 'next/server';
import { generateMockData } from '@/lib/analytics/engine';

export async function GET() {
  try {
    generateMockData();
    return NextResponse.json({ success: true, message: 'Mock data generated successfully' });
  } catch (error: any) {
    console.error('Mock generation error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
