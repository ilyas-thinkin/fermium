import { NextRequest, NextResponse } from 'next/server';
import { getStore } from '@netlify/blobs';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ key: string }> }
) {
  const { key } = await params;

  const siteId = process.env.NETLIFY_SITE_ID;
  const token = process.env.NETLIFY_TOKEN;

  if (!siteId || !token) {
    return new NextResponse('Image storage not configured', { status: 500 });
  }

  try {
    const store = getStore({
      name: 'blog-images',
      siteID: siteId,
      token,
    });

    const blob = await store.get(key, { type: 'arrayBuffer' });

    if (!blob) {
      return new NextResponse('Image not found', { status: 404 });
    }

    const meta = await store.getMetadata(key);
    const contentType = (meta?.metadata?.contentType as string) || 'image/jpeg';

    return new NextResponse(blob, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch {
    return new NextResponse('Image not found', { status: 404 });
  }
}
