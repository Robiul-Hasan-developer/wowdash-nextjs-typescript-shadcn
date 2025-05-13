"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Lock, Eye, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import AuthImage from "@/public/assets/images/auth/auth-img.png";
import FacebookIcon from "@/public/assets/images/icons/facebook-icon.png";
import GoogleIcon from "@/public/assets/images/icons/google-icon.png";
import ThemeLogo from "@/components/shared/theme-logo";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="bg-white dark:bg-slate-900 flex flex-wrap min-h-screen">
      {/* Left Image */}
      <div className="lg:w-1/2 hidden lg:block">
        <div className="flex items-center justify-center h-screen flex-col">
          <Image
            src={AuthImage}
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

            <h4 className="font-semibold mb-3">Sign up to your Account</h4>
            <p className="mb-8 text-secondary-light text-lg">
              Welcome back! Please enter your details.
            </p>
          </div>

          {/* Login Form */}
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

            {/* Remember & Forgot */}
            {/* <div className="mt-7 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="remember"
                  className="border border-neutral-500 w-4.5 h-4.5"
                />
                <label htmlFor="remember" className="text-sm">
                  Remember me
                </label>
              </div>
              <Link
                href="#"
                className="text-primary font-medium hover:underline text-sm"
              >
                Forgot Password?
              </Link>
            </div> */}

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

            {/* Or Divider */}
            <div className="mt-8 relative text-center before:absolute before:w-full before:h-px before:bg-neutral-300 dark:before:bg-slate-600 before:top-1/2 before:left-0">
              <span className="relative z-10 px-4 bg-white dark:bg-slate-900 text-base">
                Or sign up with
              </span>
            </div>

            {/* Social Buttons */}
            <div className="mt-8 flex items-center gap-3">
              <Link
                href="#"
                className="font-semibold text-neutral-600 dark:text-neutral-200 py-4 px-6 w-1/2 border border-neutral-600/30 rounded-xl text-base flex items-center justify-center gap-3 line-height-1 hover:border-blue-300 hover:bg-blue-600/10"
              >
                <Image
                  src={FacebookIcon}
                  alt="Facebook"
                  width={18}
                  height={18}
                />
                Facebook
              </Link>
              <Link
                href="#"
                className="font-semibold text-neutral-600 dark:text-neutral-200 py-4 px-6 w-1/2 border border-neutral-600/30 rounded-xl text-base flex items-center justify-center gap-3 line-height-1 hover:border-blue-300 hover:bg-blue-600/10"
              >
                <Image src={GoogleIcon} alt="Facebook" width={20} height={20} />
                Google
              </Link>
            </div>

            {/* Sign In Prompt */}
            <div className="mt-8 text-center text-sm">
              <p>
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-primary font-semibold hover:underline"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;

// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Mail, Lock, Eye, UserRound } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Checkbox } from "@/components/ui/checkbox";
// import AuthImage from "@/public/assets/images/auth/auth-img.png";
// import FacebookIcon from "@/public/assets/images/icons/facebook-icon.png";
// import GoogleIcon from "@/public/assets/images/icons/google-icon.png";

// const Register = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <section className="bg-white dark:bg-dark-2 flex flex-wrap min-h-screen">
//       {/* Left Image */}
//       <div className="lg:w-1/2 hidden lg:block">
//         <div className="flex items-center justify-center h-screen flex-col">
//           <Image
//             src={AuthImage}
//             alt="Auth Illustration"
//             className="object-cover w-full h-full"
//           />
//         </div>
//       </div>

//       {/* Right Form */}
//       <div className="lg:w-1/2 w-full py-8 px-6 flex flex-col justify-center">
//         <div className="lg:max-w-[464px] w-full mx-auto">
//           {/* Logo and heading */}
//           <div>
//             <Link href="/" className="mb-2.5 inline-block max-w-[290px]">
//               <Image
//                 src="/assets/images/logo.png"
//                 alt="Logo"
//                 width={200}
//                 height={50}
//                 className="object-contain"
//               />
//             </Link>
//             <h4 className="font-semibold mb-3">Sign Up to your Account</h4>
//             <p className="mb-8 text-secondary-light text-lg">
//               Welcome back! Please enter your details.
//             </p>
//           </div>

//           {/* Login Form */}
//           <form>
//             {/* UserName */}
// <div className="relative mb-4">
//   <UserRound className="absolute start-5 top-1/2 transform -translate-y-1/2 text-xl text-neutral-700 w-5 h-5" />
//   <Input
//     type="text"
//     placeholder="Username"
//     className="ps-13 h-14 rounded-xl bg-neutral-100 dark:bg-dark-2 border border-neutral-300 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-[56px] !shadow-none !ring-0"
//   />
// </div>

//             {/* Email */}
//             <div className="relative mb-4">
//               <Mail className="absolute start-5 top-1/2 transform -translate-y-1/2 text-xl text-neutral-700 w-5 h-5" />
//               <Input
//                 type="email"
//                 placeholder="Email"
//                 className="ps-13 h-14 rounded-xl bg-neutral-100 dark:bg-dark-2 border border-neutral-300 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-[56px] !shadow-none !ring-0"
//               />
//             </div>

//             {/* Password */}
//             <div className="mb-5">
//               <div className="relative">
//                 <Lock className="absolute start-5 top-1/2 transform -translate-y-1/2 text-xl text-neutral-700 w-5 h-5" />
//                 <Input
//                   type={showPassword === true ? "text" : "password"}
//                   id="your-password"
//                   placeholder="Password"
//                   className="ps-13 h-14 rounded-xl bg-neutral-100 dark:bg-dark-2 border border-neutral-300 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-[56px] !shadow-none !ring-0 pe-12"
//                 />
//                 <Eye
//                   className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground cursor-pointer"
//                   onClick={() => setShowPassword(!showPassword)}
//                 />
//               </div>
//               <span className="mt-3 text-sm text-neutral-700 block">
//                 Your password must have at least 8 characters
//               </span>
//             </div>

//             {/* Remember & Forgot */}
// <div className="mt-7 flex justify-between items-center">
//   <div className="flex items-start gap-2">
//     <Checkbox
//       id="remember"
//       className="border border-neutral-500 w-4.5 h-4.5 mt-1"
//     />
//     <label htmlFor="remember" className="text-sm">
//       By creating an account means you agree to the
//       <Link
//         href="#"
//         className="text-blue-600 font-semibold"
//       >
//         Terms & Conditions
//       </Link>{" "}
//       and our
//       <Link
//         href="#"
//         className="text-blue-600 font-semibold"
//       >
//         Privacy Policy
//       </Link>
//     </label>
//   </div>
// </div>

//             {/* Submit */}
//             <Button
//               type="submit"
//               className="w-full rounded-lg mt-8 h-12 text-sm h-[52px]"
//             >
//               Sign Up
//             </Button>

//             {/* Or Divider */}
//             <div className="mt-8 relative text-center before:absolute before:w-full before:h-px before:bg-neutral-300 before:top-1/2 before:left-0">
//               <span className="relative z-10 px-4 bg-white dark:bg-dark-2 text-base">
//                 Or sign up with
//               </span>
//             </div>

//             {/* Social Buttons */}
//             <div className="mt-8 flex items-center gap-3">
//               <Link
//                 href="#"
//                 className="font-semibold text-neutral-600 dark:text-neutral-200 py-4 px-6 w-1/2 border rounded-xl text-base flex items-center justify-center gap-3 line-height-1 hover:border-blue-300 hover:bg-blue-50"
//               >
//                 <Image
//                   src={FacebookIcon}
//                   alt="Facebook"
//                   width={18}
//                   height={18}
//                 />
//                 Facebook
//               </Link>
//               <Link
//                 href="#"
//                 className="font-semibold text-neutral-600 dark:text-neutral-200 py-4 px-6 w-1/2 border rounded-xl text-base flex items-center justify-center gap-3 line-height-1 hover:border-blue-300 hover:bg-blue-50"
//               >
//                 <Image src={GoogleIcon} alt="Facebook" width={20} height={20} />
//                 Google
//               </Link>
//             </div>

//             {/* Sign Up Prompt */}
//             <div className="mt-8 text-center text-sm">
//               <p>
//                 Already have an account?{" "}
//                 <Link
//                   href="/login"
//                   className="text-primary font-semibold hover:underline"
//                 >
//                   Sign In
//                 </Link>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Register;
