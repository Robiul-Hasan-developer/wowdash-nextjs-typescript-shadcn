// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { Mail, Lock, Eye, Loader2, EyeOff } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Checkbox } from "@/components/ui/checkbox";
// import SocialLogin from "./social-login";
// import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import toast from "react-hot-toast";

// const LoginForm = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const [email, setEmail] = useState("wowdash@gmail.com");
//   const [password, setPassword] = useState("password");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     const res = await signIn("credentials", {
//       redirect: false,
//       email,
//       password,
//     });

//     setLoading(false);

//     if (res?.ok && !res.error) {
//       toast.success("Login successful! Please wait...");
//       router.push("/dashboard");
//     } else {
//       toast.error("Invalid email or password!");
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div className="relative mb-4">
//           <Mail className="absolute start-5 top-1/2 transform -translate-y-1/2 text-xl text-neutral-700 dark:text-neutral-200 w-5 h-5" />
//           <Input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="ps-13 pe-12 h-14 rounded-xl bg-neutral-100 dark:bg-slate-800 border border-neutral-300 dark:border-slate-700  focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 !shadow-none !ring-0"
//             disabled={loading ? true : false}
//           />
//         </div>

//         <div className="relative mb-5">
//           <Lock className="absolute start-5 top-1/2 transform -translate-y-1/2 text-xl text-neutral-700 dark:text-neutral-200 w-5 h-5" />
//           <Input
//             type={showPassword ? "text" : "password"}
//             id="your-password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="ps-13 pe-12 h-14 rounded-xl bg-neutral-100 dark:bg-slate-800 border border-neutral-300 dark:border-slate-700  focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 !shadow-none !ring-0"
//             disabled={loading ? true : false}
//           />
//           <Button
//             type="button"
//             aria-label={showPassword ? "Hide password" : "Show password"}
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground cursor-pointer !p-0 bg-transparent hover:bg-transparent h-[unset]"
//           >
//             {showPassword ? (
//               <EyeOff className="!w-5 !h-5" />
//             ) : (
//               <Eye className="!w-5 !h-5" />
//             )}
//           </Button>
//         </div>

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

//         <Button
//           type="submit"
//           className="w-full rounded-lg mt-8 h-[52px] text-sm"
//           disabled={loading}
//         >
//           {loading ? (
//             <>
//               <Loader2 className="animate-spin h-4.5 w-4.5 mr-2" />
//               Loading...
//             </>
//           ) : (
//             "Sign In"
//           )}
//         </Button>
//       </form>

//       <div className="mt-8 relative text-center before:absolute before:w-full before:h-px before:bg-neutral-300 dark:before:bg-slate-600 before:top-1/2 before:left-0">
//         <span className="relative z-10 px-4 bg-white dark:bg-slate-900 text-base">
//           Or sign in with
//         </span>
//       </div>

//       <SocialLogin loading={loading} />

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
import { Mail, Lock, Eye, Loader2, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import SocialLogin from "./social-login";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { ZodError } from "zod";
import { signInSchema } from "@/lib/zod";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Validate using Zod
    const result = signInSchema.safeParse({ email, password });

    if (!result.success) {
      const errorMessages = result.error.flatten().fieldErrors;
      if (errorMessages.email) toast.error(errorMessages.email[0]);
      else if (errorMessages.password) toast.error(errorMessages.password[0]);
      else toast.error("Invalid form input");
      setLoading(false);
      return;
    }

    // Proceed to sign in
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (res?.ok && !res.error) {
      toast.success("Login successful! Please wait...");
      router.push("/dashboard");
    } else {
      toast.error("Invalid email or password!");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="relative mb-4">
          <Mail className="absolute start-5 top-1/2 transform -translate-y-1/2 text-xl text-neutral-700 dark:text-neutral-200 w-5 h-5" />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="ps-13 pe-12 h-14 rounded-xl bg-neutral-100 dark:bg-slate-800 border border-neutral-300 dark:border-slate-700  focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 !shadow-none !ring-0"
            disabled={loading}
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
            className="ps-13 pe-12 h-14 rounded-xl bg-neutral-100 dark:bg-slate-800 border border-neutral-300 dark:border-slate-700  focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 !shadow-none !ring-0"
            disabled={loading}
          />
          <Button
            type="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground cursor-pointer !p-0 bg-transparent hover:bg-transparent h-[unset]"
          >
            {showPassword ? (
              <EyeOff className="!w-5 !h-5" />
            ) : (
              <Eye className="!w-5 !h-5" />
            )}
          </Button>
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

      <SocialLogin loading={loading} />

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
