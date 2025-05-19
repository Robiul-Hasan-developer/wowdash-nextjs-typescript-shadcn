import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email!"),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, { message: "Password must be more than 8 characters" })
    .max(10, "Password must be less than 15 characters")
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
    .regex(/[0-9]/, { message: "Contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Contain at least one special character.",
    })
    .trim(),
});

export const registerSchema = loginSchema.extend({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
   acceptTerms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
});


export const forgotPasswordSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email!"),
});