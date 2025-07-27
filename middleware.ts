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

//   // Skip middleware for internal Next.js files and static assets
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

//   // If user is not logged in and trying to access a protected route, redirect to login
//   if (!session?.user && !isPublic) {
//     return NextResponse.redirect(new URL("/auth/login", req.url));
//   }

//   // ✅ Allow logged-in users to access any route, including auth pages
//   return NextResponse.next();
// }


import { auth } from "./auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/forgot-password",
  "/auth/create-password",
];

export async function middleware(req: NextRequest) {
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

  let session = null;

  try {
    session = await auth();
  } catch (error) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  const isPublic = publicRoutes.some((route) => pathname.startsWith(route));

  if (!session?.user && !isPublic) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.next();
}