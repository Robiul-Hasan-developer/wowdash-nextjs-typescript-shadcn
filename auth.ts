// import NextAuth from "next-auth"
// import Google from "next-auth/providers/google"
// import GitHub from "next-auth/providers/github"
 
// export const { handlers, signIn, signOut, auth } = NextAuth({
//   providers: [
//      Google({
//        clientId: process.env.GOOGLE_CLIENT_ID,
//        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//        authorization: {
//         params: {
//           prompt: "consent",
//           access_type: "offline",
//           response_type: "code",
//         },
//       },
//     }),
//     GitHub({
//        clientId: process.env.GITHUB_CLIENT_ID,
//        clientSecret: process.env.GITHUB_CLIENT_SECRET,
//        authorization: {
//         params: {
//           prompt: "consent",
//           access_type: "offline",
//           response_type: "code",
//         },
//       },
//     }),
//   ],
// })

import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"
// import { saltAndHashPassword } from "@/utils/password"
import { getUserFromDb } from "./utils/db"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
     Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
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
        let user = null
 
        const { email, password } = credentials as { email: string; password: string }
        // logic to salt and hash password
        // const pwHash = saltAndHashPassword(credentials.password)
        const pwHash = password
 
        // logic to verify if the user exists
        user = await getUserFromDb(email, pwHash)
 
        if (!user) {
          // No user found, so this is their first attempt to login
          // Optionally, this is also the place you could do a user registration
          throw new Error("Invalid credentials.")
        }
 
        // return user object with their profile data
        return user
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
})
