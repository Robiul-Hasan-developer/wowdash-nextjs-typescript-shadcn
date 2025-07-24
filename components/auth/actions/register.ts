"use server";

import { registerSchema } from "@/lib/zod";
import { z } from "zod";

export async function registerUser(formData: FormData) {
  const username = formData.get("username")?.toString() ?? "";
  const email = formData.get("email")?.toString() ?? "";
  const password = formData.get("password")?.toString() ?? "";
  const acceptTerms = formData.get("acceptTerms") === "on";

  const result = registerSchema.safeParse({
    username,
    email,
    password,
    acceptTerms,
  });

  if (!result.success) {
    const errorMessages = result.error.errors
      .map((e) => `${e.path.join(".")}: ${e.message}`)
      .join(", ");
    throw new Error(`Validation error: ${errorMessages}`);
  }

  // Simulate DB/API call
  await new Promise((res) => setTimeout(res, 1000));

  return { success: true };
}
