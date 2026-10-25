import createMiddleware from 'next-intl/middleware';
import type { NextRequest } from 'next/server';
import { routing } from './i18n/routing';

// Next.js 16 renamed the `middleware` file convention to `proxy`. next-intl
// still ships its locale handler under `next-intl/middleware`; the wrapper
// below is an equivalent proxy function with a stable name.
const intlMiddleware = createMiddleware(routing);

export default function proxy(request: NextRequest) {
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
