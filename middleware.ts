// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  console.log(token)

  const { pathname } = req.nextUrl;

  // Publicly accessible paths (for unauthenticated users)
  const publicPaths = ["/auth/login", "/auth/register"];

  const isPublicPath = publicPaths.some((path) => pathname.startsWith(path));

  if (!token && !isPublicPath) {
    // Not logged in and trying to access a protected route
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  if (token && isPublicPath) {
    // Logged in and trying to access login/register
    return NextResponse.redirect(new URL("/home", req.url));
  }

  return NextResponse.next();
}


export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api/public).*)",
  ],
};

// // middleware.ts
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { getToken } from "next-auth/jwt";

// export async function middleware(req: NextRequest) {
//   const token = await getToken({ req, secret: process.env.AUTH_SECRET });

//   const { pathname } = req.nextUrl;

//   const isPublicPath = pathname.startsWith("/auth/login") || pathname === "/";

//   if (!token && !isPublicPath) {
//     // User not authenticated, trying to access a protected route
//     return NextResponse.redirect(new URL("/auth/login", req.url));
//   }

//   if (token && pathname === "/auth/login") {
//     // User already logged in, prevent going to login page
//     return NextResponse.redirect(new URL("/home", req.url));
//   }

//   return NextResponse.next();
// }
