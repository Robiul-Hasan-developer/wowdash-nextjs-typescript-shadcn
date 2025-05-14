import React from "react";
import GithubIcon from "@/public/assets/images/icons/github-icon.png";
import GoogleIcon from "@/public/assets/images/icons/google-icon.png";
import Image from "next/image";
import { Button } from "../ui/button";
import { doSocialLogin } from "@/app/actions";

const SocialLogin = () => {
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
