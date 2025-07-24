'use server';

import { redirect } from "next/navigation";
import { z } from "zod";
import { createPasswordSchema } from "@/lib/zod";

export async function handleResetPassword(formData: FormData) {
  const values = {
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
    acceptTerms: formData.get("acceptTerms") === "on",
  };

  const result = createPasswordSchema.safeParse(values);

  if (!result.success) {
    // In production, you'd return better feedback.
    throw new Error("Validation failed.");
  }

  // Simulate saving password or calling an API
  console.log("Password reset values:", result.data);

  // Redirect after success
  redirect("/auth/login");
}
