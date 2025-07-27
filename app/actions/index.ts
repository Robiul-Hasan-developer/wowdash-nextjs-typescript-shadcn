"use server"

import { signIn, signOut } from "@/auth"

export async function doSocialLogin(formData: FormData) {
  try {
    const action = formData.get("action")
    if (!action) {
      throw new Error("Missing provider name")
    }

    await signIn(action as string, { redirectTo: "/dashboard" })
  } catch (error) {
    throw new Error("Login failed. Please try again.")
  }
}

export async function doLogout() {
  try {
    await signOut()
  } catch (error) {
    throw new Error("Logout failed. Please try again.")
  }
}
