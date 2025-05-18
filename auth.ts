import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"
// import { saltAndHashPassword } from "@/utils/password"
import { getUserFromDb } from "./utils/db"
import { signInSchema } from "./lib/zod"
import { ZodError } from "zod"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    // Credentials({
    //   credentials: {
    //     email: {},
    //     password: {},
    //   },

    //   authorize: async (credentials) => {
    //     const { email, password } = credentials as { email: string; password: string }

    //     const pwHash = password
    //     const user = await getUserFromDb(email, pwHash)
    //     if (!user) return null

    //     return user
    //   }
    // }),

    Credentials({
      credentials: {
         email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          const { email, password } = await signInSchema.parseAsync(credentials)

          const user = await getUserFromDb(email, password) // assuming pwHash = password is handled inside getUserFromDb

          if (!user) {
            return null // 👈 explicitly return null if not found
          }

          return user // 👈 must return user object
        } 
        catch (error) {
          if (error instanceof ZodError) {
            return null
          }
          return null
        }
      }
    }),
    
    
    //  Credentials({
    //   credentials: {
        // email: {},
        // password: {},
    //   },
    //   authorize: async (credentials) => { 
    //     try {
    //       let user = null
 
    //       const { email, password } = await signInSchema.parseAsync(credentials)
 
    //       const pwHash = password
 
    //       user = await getUserFromDb(email, pwHash)
 
    //       if (!user) {
    //         throw new Error("Invalid credentials.")
    //       }
 
    //       return user
    //     } catch (error) {
    //       if (error instanceof ZodError) {
    //         return null
    //       }
    //     }
    //   },
    // }),

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
})
