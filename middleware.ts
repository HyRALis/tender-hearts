import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { LOCALES } from './app/_lib/shared/utils/consts';

const intlMiddleware = createMiddleware({
  locales: LOCALES,
  defaultLocale: 'en',
  localeDetection: false,
});

export default function middleware(req: NextRequest) {
  return intlMiddleware(req);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};

//TODO: add auth

// import createIntlMiddleware from 'next-intl/middleware';
// import { NextResponse } from 'next/server';
// import { getToken } from 'next-auth/jwt';
// import { LOCALES, PROTECTED_ROUTES } from './app/_lib/shared/utils/consts';
// import { auth } from '@/auth';

// // const { auth } = NextAuth(authConfig);

// const intlMiddleware = createIntlMiddleware({
//   locales: LOCALES,
//   defaultLocale: 'en',
//   localeDetection: false,
// });

// export default auth((req) => {
//   const { nextUrl, auth } = req;
//   const token = getToken({ req, salt: '', secret: process.env.AUTH_SECRET });
//   const isLoggedIn = !!auth;

//   console.log({ token });

//   const protectedPattern =
//     '^/(' + LOCALES.join('|') + ')/(' + PROTECTED_ROUTES.join('|') + ')/?.*?$';

//   const publicPathnameRegex = RegExp(protectedPattern, 'i');
//   const authPathnamesRegex = RegExp('^/api/auth/?.*?$', 'i');

//   const isProtectedRoute = publicPathnameRegex.test(nextUrl.pathname);
//   const isApiRoute = authPathnamesRegex.test(nextUrl.pathname);

//   if (isApiRoute) {
//     return;
//   }

//   if (isProtectedRoute) {
//     if (!isLoggedIn) {
//       return NextResponse.redirect(new URL('/en/login', nextUrl));
//     }
//   }

//   return intlMiddleware(req);
// });

// export const config = {
//   matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
// };
