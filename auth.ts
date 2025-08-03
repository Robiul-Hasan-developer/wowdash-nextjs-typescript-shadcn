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
// })






// app/auth.js (or wherever you define this in App Router)
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import { loginSchema } from "./lib/zod";
import { getUserFromDb } from "./utils/db";
import { ZodError } from "zod";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
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

          if (!user) return null;
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            // image: user.image || null, // optional, if you store one
          };
        } catch (error) {
          if (error instanceof ZodError) return null;
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
    // Persist OAuth profile data into JWT
    async jwt({ token, account, profile }) {
      if (account && profile) {
        token.picture =
          profile.picture || // Google
          profile.avatar_url || // GitHub
          null;
      }
      return token;
    },

    // Send token.picture to session.user.image
    async session({ session, token }) {
      if (session.user) {
        session.user.image = token.picture || null;
      }
      return session;
    },
  },
});
