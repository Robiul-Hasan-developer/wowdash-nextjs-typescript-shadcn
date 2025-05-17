import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"
// import { saltAndHashPassword } from "@/utils/password"
import { getUserFromDb } from "./utils/db"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {
          type: "email",
          placeholder: "johndoe@gmail.com",
        },
        password: {
          type: "password",
          placeholder: "*****",
        },
      },

      authorize: async (credentials) => {
        const { email, password } = credentials as { email: string; password: string }

        const pwHash = password
        const user = await getUserFromDb(email, pwHash)
        if (!user) return null

        return user
      }
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
})
