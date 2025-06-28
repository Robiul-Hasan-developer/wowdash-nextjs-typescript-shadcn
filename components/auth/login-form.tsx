"use client";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Lock, Eye, EyeOff, Loader2 } from "lucide-react";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import SocialLogin from "./social-login";

const LoginForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async (values: z.infer<typeof loginSchema>) => {
    setIsSubmitting(true);

    const res = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
    });

    if (res?.ok) {
      toast.success("Login successful!");
      router.push("/dashboard");
    } else {
      toast.error("Invalid email or password!");
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleLogin)}
          className="space-y-5"
        >
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute start-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      {...field}
                      type="email"
                      placeholder="Email"
                      disabled={isSubmitting}
                      className="ps-13 pe-12 h-14 rounded-xl"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Lock className="absolute start-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      {...field}
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      disabled={isSubmitting}
                      className="ps-13 pe-12 h-14 rounded-xl"
                    />
                    <Button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-0 bg-transparent"
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Remember and Forgot */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <label htmlFor="remember" className="text-sm">
                Remember me
              </label>
            </div>
            <Link
              href="/auth/forgot-password"
              className="text-primary font-medium hover:underline text-sm"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full rounded-lg h-[52px]"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin h-4 w-4 mr-2" />
                Loading...
              </>
            ) : (
              "Sign In"
            )}
          </Button>
        </form>
      </Form>

      {/* Divider */}
      <div className="mt-8 relative text-center">
        <div className="absolute inset-0 border-t border-neutral-300 dark:border-slate-600"></div>
        <span className="relative px-4 bg-white dark:bg-slate-900">
          Or sign in with
        </span>
      </div>

      <SocialLogin />

      {/* Signup */}
      <div className="mt-8 text-center text-sm">
        <p>
          Don&apos;t have an account?{" "}
          <Link
            href="/auth/register"
            className="text-primary font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
