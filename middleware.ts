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

//   let session = null;

//   try {
//     session = await auth();
//   } catch (error) {
//     return NextResponse.redirect(new URL("/auth/login", req.url));
//   }

//   const isPublic = publicRoutes.some((route) => pathname.startsWith(route));

//   if (!session?.user && !isPublic) {
//     return NextResponse.redirect(new URL("/auth/login", req.url));
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
  const { pathname, searchParams } = req.nextUrl;

  // Skip static files and APIs
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/manifest.json")
  ) {
    return NextResponse.next();
  }

  const token = await getToken({
    req,
    secret: process.env.AUTH_SECRET!,
  });

  const isPublic = publicRoutes.some((route) => pathname.startsWith(route));

  // ✅ If not logged in & accessing protected route
  if (!token && !isPublic) {
    const loginUrl = new URL("/auth/login", req.url);
    // Keep the intended redirect
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // ✅ If logged in & accessing public route
  if (token && isPublic) {
    let redirectUrl = searchParams.get("callbackUrl") || "/dashboard";
    return NextResponse.redirect(new URL(redirectUrl, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
