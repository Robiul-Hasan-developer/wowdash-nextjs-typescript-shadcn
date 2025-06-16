// import { auth } from "./auth";
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// const publicRoutes = [
//   "/auth/login",
//   "/auth/register",
//   "/auth/forgot-password",
//   "/auth/create-password",
// ];

// export async function middleware(req: NextRequest) {
//   const session = await auth();
//   const { pathname } = req.nextUrl;

//   if (
//     pathname.startsWith("/_next") ||
//     pathname.startsWith("/favicon.ico") ||
//     pathname.startsWith("/api") ||
//     pathname.startsWith("/images") ||
//     pathname.startsWith("/manifest.json")
//   ) {
//     return NextResponse.next();
//   }

//   const isPublic = publicRoutes.some((route) => pathname.startsWith(route));

//   if (!session?.user && !isPublic) {
//     return NextResponse.redirect(new URL("/auth/login", req.url));
//   }

//   if (session?.user && isPublic) {
//     return NextResponse.redirect(new URL("/dashboard", req.url));
//   }

//   return NextResponse.next();
// }

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

const publicRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/forgot-password",
  "/auth/create-password",
];

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/manifest.json")
  ) {
    return NextResponse.next();
  }

  const isPublic = publicRoutes.some((route) => pathname.startsWith(route));

  // Not logged in & not on a public route → redirect to login
  if (!token && !isPublic) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  // Logged in & visiting a public route → redirect to dashboard
  if (token && isPublic) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}
