import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AUTH_COOKIE_NAMES = ["better-auth.session_token", "accessToken"] as const;

const PUBLIC_AUTH_ROUTES = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
  "/verify-email",
] as const;

const PRIVATE_ROUTES = [
  "/dashboard",
  "/profile",
  "/premium",
  "/change-password",
] as const;

const hasAuthCookie = (request: NextRequest) =>
  AUTH_COOKIE_NAMES.some(
    (cookieName) => !!request.cookies.get(cookieName)?.value,
  );

const isExactPublicRoute = (pathname: string) => {
  return pathname === "/" || pathname === "/hackathons";
};

const isHackathonDetailsRoute = (pathname: string) => {
  return /^\/hackathons\/details\/[^/]+$/.test(pathname);
};

const isPrivateRoute = (pathname: string) => {
  return PRIVATE_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );
};

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAuthenticated = hasAuthCookie(request);

  if (
    PUBLIC_AUTH_ROUTES.some(
      (route) => pathname === route || pathname.startsWith(`${route}/`),
    ) &&
    isAuthenticated
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (isExactPublicRoute(pathname)) {
    return NextResponse.next();
  }

  if (isHackathonDetailsRoute(pathname) && !isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isPrivateRoute(pathname) && !isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
