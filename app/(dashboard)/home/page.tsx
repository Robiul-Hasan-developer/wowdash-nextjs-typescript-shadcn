import { auth } from "@/auth";
import Image from "next/image";
import Logout from "@/components/auth/logout";
import { redirect } from "next/navigation";

const HomePage = async () => {
  const session = await auth();

  if (!session?.user) redirect("/auth/login");

  if (!session || !session.user) {
    return <p className="text-lg">You are not signed in.</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">
        Welcome! {session.user.name}
      </h1>

      {session.user.image && (
        <Image
          src={session.user.image}
          className="rounded-full mb-4"
          width={56}
          height={56}
          alt={session.user.name ?? "User profile"}
        />
      )}

      <Logout />
    </div>
  );
};

export default HomePage;

// ====================================================== Latest Code Start ========================================
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// // Public routes where authentication is NOT required
// const PUBLIC_PATHS = ["/auth/login", "/auth/register"];

// export function middleware(req: NextRequest) {
//   const { pathname } = req.nextUrl;

//   // Check if path is public
//   const isPublic = PUBLIC_PATHS.includes(pathname);

//   // Try to read the session token cookie
//   const token =
//     req.cookies.get("authjs.session-token")?.value || // Auth.js
//     req.cookies.get("next-auth.session-token")?.value || // NextAuth.js
//     req.cookies.get("__Secure-authjs.session-token")?.value || // secure version (on HTTPS)
//     req.cookies.get("__Secure-next-auth.session-token")?.value; // secure version

//   // If no token and not visiting a public page — redirect to login
//   if (!token && !isPublic) {
//     return NextResponse.redirect(new URL("/auth/login", req.url));
//   }

//   // If logged in and visiting login/register page — redirect to /home
//   if (token && isPublic) {
//     return NextResponse.redirect(new URL("/home", req.url));
//   }

//   // Allow to continue
//   return NextResponse.next();

//     console.log("cookies in middleware:", req.cookies.getAll());

// }

// // Matcher that excludes static files and API routes
// export const config = {
//   matcher: ["/((?!_next/static|_next/image|favicon.ico|api).*)"],
// };
// ====================================================== Latest Code End ========================================

// // middleware.ts
// import { auth } from "@/auth";
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export async function middleware(req: NextRequest) {
//   const session = await auth(); // Auth.js থেকে session পাওয়া

//   const { pathname } = req.nextUrl;

//   // Public paths যেগুলা logged in না হলেও ঢোকা যাবে
//   const publicPaths = ["/auth/login", "/auth/register"];

//   const isPublicPath = publicPaths.some((path) => pathname.startsWith(path));

//   if (!session?.user && !isPublicPath) {
//     // User logged in না এবং প্রোটেক্টেড রুটে ঢুকতে চাইলে redirect করবে login page-এ
//     return NextResponse.redirect(new URL("/auth/login", req.url));
//   }

//   if (session?.user && isPublicPath) {
//     // Logged in user login/register page-এ যেতে চাইলে redirect করবে home page-এ
//     return NextResponse.redirect(new URL("/home", req.url));
//   }

//   return NextResponse.next();
// }

// // Add matcher to apply middleware to all necessary paths
// export const config = {
//   matcher: [
//     "/((?!_next/static|_next/image|favicon.ico|api/public).*)",
//   ],
// };

// ===============================================================
// middleware.ts
// import { auth } from "@/auth";
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export async function middleware(req: NextRequest) {
//   // ✅ req context সহ auth কল করো
//   const session = await auth();

//   const { pathname } = req.nextUrl;

//   const publicPaths = ["/auth/login", "/auth/register"];
//   const isPublicPath = publicPaths.some((path) => pathname.startsWith(path));

//   if (!session?.user && !isPublicPath) {
//     return NextResponse.redirect(new URL("/auth/login", req.url));
//   }

//   if (session?.user && isPublicPath) {
//     return NextResponse.redirect(new URL("/home", req.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     "/((?!_next/static|_next/image|favicon.ico|api/public).*)",
//   ],
// };
// =============================================================================

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
