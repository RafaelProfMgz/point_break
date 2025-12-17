import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isDev = process.env.NODE_ENV === "development";
  const token = request.cookies.get("auth-token")?.value;

  const isProtectedRoute =
    request.nextUrl.pathname.startsWith("/home") ||
    request.nextUrl.pathname.startsWith("/profile") ||
    request.nextUrl.pathname.startsWith("/team") ||
    request.nextUrl.pathname.startsWith("/settings") ||
    request.nextUrl.pathname.startsWith("/docs");

  if (isProtectedRoute && !token && !isDev) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (request.nextUrl.pathname === "/login" && token) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/home/:path*",
    "/profile/:path*",
    "/team/:path*",
    "/settings/:path*",
    "/docs/:path*",
    "/login",
    "/register",
  ],
};
