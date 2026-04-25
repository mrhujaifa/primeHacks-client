import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AUTH_COOKIE_NAMES = [
  "better-auth.session_token",
  "refreshToken",
  "accessToken",
] as const;

const PUBLIC_AUTH_ROUTES = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
] as const;

const PRIVATE_ROUTES = [
  "/dashboard",
  "/profile",
  "/premium",
  "/change-password",
] as const;

const hasAuthCookie = (request: NextRequest) => {
  return AUTH_COOKIE_NAMES.some((cookieName) => {
    return Boolean(request.cookies.get(cookieName)?.value);
  });
};

const isPublicAuthRoute = (pathname: string) => {
  return PUBLIC_AUTH_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );
};

const isPrivateRoute = (pathname: string) => {
  return PRIVATE_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );
};

const isHackathonDetailsRoute = (pathname: string) => {
  return /^\/hackathons\/details\/[^/]+$/.test(pathname);
};

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAuthenticated = hasAuthCookie(request);

  const hasPendingEmailVerification = Boolean(
    request.cookies.get("pending_email_verification")?.value,
  );

  if (isPublicAuthRoute(pathname) && isAuthenticated) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (pathname === "/verify-email" && !hasPendingEmailVerification) {
    return NextResponse.redirect(new URL("/register", request.url));
  }

  if (
    (isPrivateRoute(pathname) || isHackathonDetailsRoute(pathname)) &&
    !isAuthenticated
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
