import { NextRequest, NextResponse } from 'next/server';

function unauthorized() {
  return new NextResponse('Auth required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Mission Control"'
    }
  });
}

function safeAtob(b64: string) {
  const fn = (globalThis as any).atob as undefined | ((s: string) => string);
  if (!fn) throw new Error('atob_unavailable');
  return fn(b64);
}

export function middleware(req: NextRequest) {
  try {
    const user = process.env.MC_USER;
    const pass = process.env.MC_PASS;

    // If not configured, fail closed.
    if (!user || !pass) return unauthorized();

    const auth = req.headers.get('authorization');
    if (!auth || !auth.toLowerCase().startsWith('basic ')) return unauthorized();

    const b64 = auth.slice(6).trim();
    let decoded = '';
    try {
      decoded = safeAtob(b64);
    } catch {
      return unauthorized();
    }

    // Password may contain ':' so split on first ':' only.
    const idx = decoded.indexOf(':');
    if (idx < 0) return unauthorized();
    const u = decoded.slice(0, idx);
    const p = decoded.slice(idx + 1);

    if (u !== user || p !== pass) return unauthorized();

    return NextResponse.next();
  } catch {
    // Never throw from middleware; treat as unauthorized instead of 500.
    return unauthorized();
  }
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)']
};
