// import NextAuth from "next-auth"
// import Credentials from "next-auth/providers/credentials"
// import Google from "next-auth/providers/google"
// import GitHub from "next-auth/providers/github"
// import { getUserFromDb } from "./utils/db"
// import { loginSchema } from "./lib/zod"
// import { ZodError } from "zod"

// export const { handlers, signIn, signOut, auth } = NextAuth({
//   providers: [
//     Credentials({
//       credentials: {
//         email: {},
//         password: {},
//       },
//       authorize: async (credentials) => {
//         try {
//           const { email, password } = await loginSchema.parseAsync(credentials)

//           const user = await getUserFromDb(email, password)

//           if (!user) {
//             return null
//           }
//           return user
//         } 
//         catch (error) {
//           if (error instanceof ZodError) {
//             return null
//           }
//           return null
//         }
//       }
//     }),
    
//     Google({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//          authorization: {
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
//         authorization: {
//         params: {
//           prompt: "consent",
//           access_type: "offline",
//           response_type: "code",
//         },
//       },
//     }),
//   ],
// })


import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import { getUserFromDb } from "./utils/db";
import { loginSchema } from "./lib/zod";
import { ZodError } from "zod";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          const { email, password } = await loginSchema.parseAsync(credentials);
          const user = await getUserFromDb(email, password);
          return user || null;
        } catch (error) {
          return null;
        }
      },
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, account, profile }) {
      if (profile) {
        token.picture =
          profile.picture ||
          profile.avatar_url ||
          null;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.image = token.picture ?? null;
      return session;
    },
  },
});
