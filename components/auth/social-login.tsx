// ============================================= Server side way start =======================================
import React, { useState } from "react";
import GithubIcon from "@/public/assets/images/icons/github-icon.png";
import GoogleIcon from "@/public/assets/images/icons/google-icon.png";
import Image from "next/image";
import { Button } from "../ui/button";
import { doSocialLogin } from "@/app/actions";

const SocialLogin = () => {
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = () => {
    setLoading(true);
  };

  return (
    <>
      <form className="mt-8 flex items-center gap-3" action={doSocialLogin}>
        <Button
          className="font-semibold text-neutral-600 hover:text-neutral-600 dark:text-neutral-200 py-6 px-2 w-1/2 border border-neutral-600/30 rounded-xl text-sm flex items-center justify-center gap-3 line-height-1 hover:border-blue-400 hover:bg-blue-600/10"
          variant="outline"
          type="submit"
          name="action"
          value="google"
        >
          <Image src={GoogleIcon} alt="google" width={18} height={18} />
          Google
        </Button>
        <Button
          className="font-semibold text-neutral-600 hover:text-neutral-600 dark:text-neutral-200 py-6 px-2 w-1/2 border border-neutral-600/30 rounded-xl text-sm flex items-center justify-center gap-3 line-height-1 hover:border-slate-400 hover:bg-slate-600/10"
          variant="outline"
          type="submit"
          name="action"
          value="github"
        >
          <Image src={GithubIcon} alt="github" width={18} height={18} />
          Github
        </Button>
      </form>
    </>
  );
};

export default SocialLogin;

// import React from "react";
// import GithubIcon from "@/public/assets/images/icons/github-icon.png";
// import GoogleIcon from "@/public/assets/images/icons/google-icon.png";
// import Image from "next/image";
// import { Button } from "../ui/button";
// import { doSocialLogin } from "@/app/actions";

// const SocialLogin = () => {
//   return (
//     <>
//       <form className="mt-8 flex items-center gap-3" action={doSocialLogin}>
//         <Button
//           className="font-semibold text-neutral-600 hover:text-neutral-600 dark:text-neutral-200 py-6 px-2 w-1/2 border border-neutral-600/30 rounded-xl text-sm flex items-center justify-center gap-3 line-height-1 hover:border-blue-400 hover:bg-blue-600/10"
//           variant="outline"
//           type="submit"
//           name="action"
//           value="google"
//         >
//           <Image src={GoogleIcon} alt="google" width={18} height={18} />
//           Google
//         </Button>
//         <Button
//           className="font-semibold text-neutral-600 hover:text-neutral-600 dark:text-neutral-200 py-6 px-2 w-1/2 border border-neutral-600/30 rounded-xl text-sm flex items-center justify-center gap-3 line-height-1 hover:border-slate-400 hover:bg-slate-600/10"
//           variant="outline"
//           type="submit"
//           name="action"
//           value="github"
//         >
//           <Image src={GithubIcon} alt="github" width={18} height={18} />
//           Github
//         </Button>
//       </form>
//     </>
//   );
// };

// export default SocialLogin;

// ============================================= Server side way end =======================================

// ============================================= Client side way start =======================================
// "use client";

// import React from "react";
// import { signIn } from "next-auth/react";
// import GithubIcon from "@/public/assets/images/icons/github-icon.png";
// import GoogleIcon from "@/public/assets/images/icons/google-icon.png";
// import Image from "next/image";
// import { Button } from "../ui/button";

// const SocialLogin = () => {
//   const handleLogin = (provider: string) => {
//     signIn(provider, { callbackUrl: "/dashboard" });
//   };

//   return (
//     <div className="mt-8 flex items-center gap-3">
//       <Button
//         onClick={() => handleLogin("google")}
//         className="font-semibold text-neutral-600 hover:text-neutral-600 dark:text-neutral-200 py-6 px-2 w-1/2 border border-neutral-600/30 rounded-xl text-sm flex items-center justify-center gap-3 line-height-1 hover:border-blue-400 hover:bg-blue-600/10"
//         variant="outline"
//       >
//         <Image src={GoogleIcon} alt="google" width={18} height={18} />
//         Google
//       </Button>
//       <Button
//         onClick={() => handleLogin("github")}
//         className="font-semibold text-neutral-600 hover:text-neutral-600 dark:text-neutral-200 py-6 px-2 w-1/2 border border-neutral-600/30 rounded-xl text-sm flex items-center justify-center gap-3 line-height-1 hover:border-slate-400 hover:bg-slate-600/10"
//         variant="outline"
//       >
//         <Image src={GithubIcon} alt="github" width={18} height={18} />
//         Github
//       </Button>
//     </div>
//   );
// };

// export default SocialLogin;
// ============================================= Client side way End =======================================
