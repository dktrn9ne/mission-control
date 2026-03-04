import { NextRequest, NextResponse } from 'next/server';

function unauthorized() {
  return new NextResponse('Auth required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Mission Control"'
    }
  });
}

export function middleware(req: NextRequest) {
  const user = process.env.MC_USER;
  const pass = process.env.MC_PASS;

  // If not configured, fail closed.
  if (!user || !pass) return unauthorized();

  const auth = req.headers.get('authorization');
  if (!auth || !auth.toLowerCase().startsWith('basic ')) return unauthorized();

  const b64 = auth.slice(6).trim();
  let decoded = '';
  try {
    decoded = Buffer.from(b64, 'base64').toString('utf8');
  } catch {
    return unauthorized();
  }

  const [u, p] = decoded.split(':');
  if (u !== user || p !== pass) return unauthorized();

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)']
};
