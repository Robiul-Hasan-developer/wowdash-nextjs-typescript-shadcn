"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Lock, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import AuthImage from "@/public/assets/images/auth/forgot-pass-img.png";
import FacebookIcon from "@/public/assets/images/icons/facebook-icon.png";
import GoogleIcon from "@/public/assets/images/icons/google-icon.png";
import ThemeLogo from "@/components/shared/theme-logo";
import { StaticImg } from "@/types/static-image";

const forgotPassImage: StaticImg = {
  image: AuthImage,
};

const ForgotPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="bg-white dark:bg-slate-900 flex flex-wrap min-h-screen">
      {/* Left Image */}
      <div className="lg:w-1/2 hidden lg:block">
        <div className="flex items-center justify-center h-screen flex-col">
          <Image
            src={forgotPassImage.image}
            alt="Auth Illustration"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Right Form */}
      <div className="lg:w-1/2 w-full py-8 px-6 flex flex-col justify-center">
        <div className="lg:max-w-[464px] w-full mx-auto">
          {/* Logo and heading */}
          <div>
            <div className="mb-2.5 inline-block max-w-[290px]">
              <ThemeLogo />
            </div>

            <h4 className="font-semibold mb-3">Forgot Password</h4>
            <p className="mb-8 text-secondary-light text-lg">
              Enter the email address associated with your account and we will
              send you a link to reset your password.
            </p>
          </div>

          {/* Login Form */}
          <form>
            {/* Email */}
            <div className="relative">
              <Mail className="absolute start-5 top-1/2 transform -translate-y-1/2 text-xl text-neutral-700 dark:text-neutral-200 w-5 h-5" />
              <Input
                type="email"
                placeholder="Email"
                className="ps-13 h-14 rounded-xl bg-neutral-100 dark:bg-slate-800 border border-neutral-300 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-[56px] !shadow-none !ring-0"
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full rounded-lg mt-6 h-12 text-sm h-[52px]"
            >
              Continue
            </Button>

            {/* Back to sign in */}
            <div className="text-center">
              <Link
                href="/login"
                className="text-blue-600 font-bold mt-6 hover:underline inline-block"
              >
                Back to Sign In
              </Link>
            </div>

            {/* Sign Up Prompt */}
            <div className="mt-10 md:mt-[60px] lg:mt-[100px] xl:mt-[120px] text-center text-sm">
              <p>
                Don&apos;t have an account?{" "}
                <Link
                  href="/register"
                  className="text-primary font-semibold hover:underline"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
