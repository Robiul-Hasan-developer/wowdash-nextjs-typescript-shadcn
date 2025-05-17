// import React, { useState } from "react";
// import Link from "next/link";
// import { Mail, Lock, Eye } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Checkbox } from "@/components/ui/checkbox";
// import SocialLogin from "./social-login";

// const LoginForm = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <>
//       <form action="#">
//         {/* Email */}
//         <div className="relative mb-4">
//           <Mail className="absolute start-5 top-1/2 transform -translate-y-1/2 text-xl text-neutral-700 dark:text-neutral-200 w-5 h-5" />
//           <Input
//             type="email"
//             placeholder="Email"
//             className="ps-13 h-14 rounded-xl bg-neutral-100 dark:bg-slate-800 border border-neutral-300 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-[56px] !shadow-none !ring-0"
//           />
//         </div>

//         {/* Password */}
//         <div className="relative mb-5">
//           <Lock className="absolute start-5 top-1/2 transform -translate-y-1/2 text-xl text-neutral-700 dark:text-neutral-200 w-5 h-5" />
//           <Input
//             type={showPassword === true ? "text" : "password"}
//             id="your-password"
//             placeholder="Password"
//             className="ps-13 h-14 rounded-xl bg-neutral-100 dark:bg-slate-800 border border-neutral-300 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-[56px] !shadow-none !ring-0 pe-12"
//           />
//           <Eye
//             className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground cursor-pointer"
//             onClick={() => setShowPassword(!showPassword)}
//           />
//         </div>

//         {/* Remember & Forgot */}
//         <div className="mt-7 flex justify-between items-center">
//           <div className="flex items-center gap-2">
//             <Checkbox
//               id="remember"
//               className="border border-neutral-500 w-4.5 h-4.5"
//             />
//             <label htmlFor="remember" className="text-sm">
//               Remember me
//             </label>
//           </div>
//           <Link
//             href="/auth/forgot-password"
//             className="text-primary font-medium hover:underline text-sm"
//           >
//             Forgot Password?
//           </Link>
//         </div>

//         {/* Submit */}
//         <Button
//           type="submit"
//           className="w-full rounded-lg mt-8 h-12 text-sm h-[52px]"
//         >
//           Sign In
//         </Button>
//       </form>

//       {/* Or Divider */}
//       <div className="mt-8 relative text-center before:absolute before:w-full before:h-px before:bg-neutral-300 dark:before:bg-slate-600 before:top-1/2 before:left-0">
//         <span className="relative z-10 px-4 bg-white dark:bg-slate-900 text-base">
//           Or sign in with
//         </span>
//       </div>

//       {/* Social Login */}
//       <SocialLogin />

//       {/* Sign Up Prompt */}
//       <div className="mt-8 text-center text-sm">
//         <p>
//           Don&apos;t have an account?{" "}
//           <Link
//             href="/auth/register"
//             className="text-primary font-semibold hover:underline"
//           >
//             Sign Up
//           </Link>
//         </p>
//       </div>
//     </>
//   );
// };

// export default LoginForm;

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import SocialLogin from "./social-login";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [email, setEmail] = useState("wowdash@gmail.com");
  const [password, setPassword] = useState("1122");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (res?.ok) {
      toast.success("Login successful! 🎉", {
        className:
          "!text-green-600 font-medium bg-white dark:bg-slate-700 !border-s !border-green-400",
        descriptionClassName: "text-green-600 dark:text-white font-medium",
      }),
        router.push("/dashboard");
    } else {
      toast.error("Invalid email or password!", {
        className:
          "!text-green-600 font-medium bg-white dark:bg-slate-700 !border-s !border-green-400",
        descriptionClassName: "text-green-600 dark:text-white font-medium",
      });
    }
  };

  return (
    <>
      <Button
        variant="outline"
        onClick={() =>
          toast.success("Table Row has been deleted!", {
            description: "You have deleted successfully!",
            className:
              "!text-green-600 font-medium bg-white dark:bg-slate-700 !border-s !border-green-400",
            descriptionClassName: "text-green-600 dark:text-white font-medium",
          })
        }
      >
        Show Toast
      </Button>

      <form onSubmit={handleSubmit}>
        <div className="relative mb-4">
          <Mail className="absolute start-5 top-1/2 transform -translate-y-1/2 text-xl text-neutral-700 dark:text-neutral-200 w-5 h-5" />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="ps-13 h-14 rounded-xl bg-neutral-100 dark:bg-slate-800 border border-neutral-300 dark:border-slate-700"
            disabled={loading ? true : false}
          />
        </div>

        <div className="relative mb-5">
          <Lock className="absolute start-5 top-1/2 transform -translate-y-1/2 text-xl text-neutral-700 dark:text-neutral-200 w-5 h-5" />
          <Input
            type={showPassword ? "text" : "password"}
            id="your-password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="ps-13 pe-12 h-14 rounded-xl bg-neutral-100 dark:bg-slate-800 border border-neutral-300 dark:border-slate-700"
            disabled={loading ? true : false}
          />
          <Eye
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>

        <div className="mt-7 flex justify-between items-center">
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
            href="/auth/forgot-password"
            className="text-primary font-medium hover:underline text-sm"
          >
            Forgot Password?
          </Link>
        </div>

        <Button
          type="submit"
          className="w-full rounded-lg mt-8 h-[52px] text-sm"
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin h-4.5 w-4.5 mr-2" />
              Loading...
            </>
          ) : (
            "Sign In"
          )}
        </Button>
      </form>

      <div className="mt-8 relative text-center before:absolute before:w-full before:h-px before:bg-neutral-300 dark:before:bg-slate-600 before:top-1/2 before:left-0">
        <span className="relative z-10 px-4 bg-white dark:bg-slate-900 text-base">
          Or sign in with
        </span>
      </div>

      <SocialLogin />

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
