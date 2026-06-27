import { NextResponse } from 'next/server';
import { ingestData, RawMetric } from '@/lib/analytics/engine';

// POST endpoint pour ingestions en temps réel
export async function POST(req: Request) {
  try {
    const data: RawMetric[] = await req.json();
    
    if (!Array.isArray(data) || data.length === 0) {
      return NextResponse.json({ error: 'Payload must be a non-empty array of metrics' }, { status: 400 });
    }

    ingestData(data);

    return NextResponse.json({ success: true, inserted: data.length });
  } catch (error: any) {
    console.error('Ingestion error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
