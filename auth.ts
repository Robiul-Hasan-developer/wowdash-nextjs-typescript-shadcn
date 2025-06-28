import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { loginSchema } from "@/lib/zod";
import { getUserFromDb } from "@/utils/db";
import { ZodError } from "zod";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const { email, password } = await loginSchema.parseAsync(credentials);

          const user = await getUserFromDb(email, password);

          if (!user) return null;

          return {
            id: user.id,
            name: user.name,
            email: user.email,
          };
        } catch (error) {
          if (error instanceof ZodError) {
            console.error("Validation Error:", error);
            return null;
          }
          console.error("Authorize Error:", error);
          return null;
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
});

// import NextAuth from "next-auth";
// import Credentials from "next-auth/providers/credentials";
// import Google from "next-auth/providers/google";
// import GitHub from "next-auth/providers/github";
// import { getUserFromDb } from "./utils/db";
// import { loginSchema } from "./lib/zod";
// import { ZodError } from "zod";

// export const { handlers, signIn, signOut, auth } = NextAuth({
//   providers: [
//     Credentials({
//       credentials: {
//         email: {},
//         password: {},
//       },
//       authorize: async (credentials) => {
//         try {
//           const { email, password } = await loginSchema.parseAsync(credentials);
//           const user = await getUserFromDb(email, password);

//           if (!user) {
//             return null;
//           }
//           return user;
//         } catch (error) {
//           if (error instanceof ZodError) {
//             return null;
//           }
//           return null;
//         }
//       },
//     }),
//     Google({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       authorization: {
//         params: {
//           prompt: "consent",
//           access_type: "offline",
//           response_type: "code",
//         },
//       },
//     }),
//     GitHub({
//       clientId: process.env.GITHUB_CLIENT_ID,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET,
//       authorization: {
//         params: {
//           prompt: "consent",
//           access_type: "offline",
//           response_type: "code",
//         },
//       },
//     }),
//   ],

//   // ✅ Add this callback to handle redirect manually
//   callbacks: {
//     async redirect({ url, baseUrl }) {
//       // Always redirect to /dashboard after login
//       return `${baseUrl}/dashboard`;
//     },
//   },

//   // ✅ Define custom pages (optional but good)
//   pages: {
//     signIn: "/auth/login", // Custom login page
//     error: "/auth/error",   // Custom error page (optional)
//   },
// });
