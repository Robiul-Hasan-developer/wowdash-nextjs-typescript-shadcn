import React, { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import SocialLogin from "./social-login";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <form>
        {/* Username */}
        <div className="relative mb-4">
          <UserRound className="absolute start-5 top-1/2 transform -translate-y-1/2 text-xl text-neutral-700 dark:text-neutral-200 w-5 h-5" />
          <Input
            type="text"
            placeholder="Username"
            className="ps-13 h-14 rounded-xl bg-neutral-100 dark:bg-slate-800 border border-neutral-300 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-[56px] !shadow-none !ring-0"
          />
        </div>

        {/* Email */}
        <div className="relative mb-4">
          <Mail className="absolute start-5 top-1/2 transform -translate-y-1/2 text-xl text-neutral-700 dark:text-neutral-200 w-5 h-5" />
          <Input
            type="email"
            placeholder="Email"
            className="ps-13 h-14 rounded-xl bg-neutral-100 dark:bg-slate-800 border border-neutral-300 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-[56px] !shadow-none !ring-0"
          />
        </div>

        {/* Password */}
        <div className="mb-5">
          <div className="relative">
            <Lock className="absolute start-5 top-1/2 transform -translate-y-1/2 text-xl text-neutral-700 dark:text-neutral-200 w-5 h-5" />
            <Input
              type={showPassword === true ? "text" : "password"}
              id="your-password"
              placeholder="Password"
              className="ps-13 h-14 rounded-xl bg-neutral-100 dark:bg-slate-800 border border-neutral-300 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-[56px] !shadow-none !ring-0 pe-12"
            />
            <Eye
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          <span className="mt-3 text-sm text-neutral-700 dark:text-neutral-300 block">
            Your password must have at least 8 characters
          </span>
        </div>

        <div className="mt-7 flex justify-between items-center">
          <div className="flex items-start gap-2">
            <Checkbox
              id="createAccount"
              className="border border-neutral-500 w-4.5 h-4.5 mt-1"
            />
            <label htmlFor="createAccount" className="text-sm">
              By creating an account means you agree to the{" "}
              <Link
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                Terms & Conditions
              </Link>{" "}
              and our{" "}
              <Link
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                Privacy Policy
              </Link>
            </label>
          </div>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="w-full rounded-lg mt-8 h-12 text-sm h-[52px]"
        >
          Sign Up
        </Button>
      </form>

      {/* Or Divider */}
      <div className="mt-8 relative text-center before:absolute before:w-full before:h-px before:bg-neutral-300 dark:before:bg-slate-600 before:top-1/2 before:left-0">
        <span className="relative z-10 px-4 bg-white dark:bg-slate-900 text-base">
          Or sign up with
        </span>
      </div>

      {/* Social Login */}
      <SocialLogin />

      {/* Sign In Prompt */}
      <div className="mt-8 text-center text-sm">
        <p>
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-primary font-semibold hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </>
  );
};

export default RegisterForm;
