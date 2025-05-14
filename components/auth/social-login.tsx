import React from "react";
import FacebookIcon from "@/public/assets/images/icons/facebook-icon.png";
import GoogleIcon from "@/public/assets/images/icons/google-icon.png";
import Image from "next/image";
import { Button } from "../ui/button";

const SocialLogin = () => {
  return (
    <>
      <form className="mt-8 flex items-center gap-3">
        <Button
          className="font-semibold text-neutral-600 hover:text-neutral-600 dark:text-neutral-200 py-6 px-2 w-1/2 border border-neutral-600/30 rounded-xl text-sm flex items-center justify-center gap-3 line-height-1 hover:border-blue-300 hover:bg-blue-600/10"
          variant="outline"
          type="submit"
          name="action"
          value="facebook"
        >
          <Image src={FacebookIcon} alt="Facebook" width={16} height={16} />
          Facebook
        </Button>
        <Button
          className="font-semibold text-neutral-600 hover:text-neutral-600 dark:text-neutral-200 py-6 px-2 w-1/2 border border-neutral-600/30 rounded-xl text-sm flex items-center justify-center gap-3 line-height-1 hover:border-blue-300 hover:bg-blue-600/10"
          variant="outline"
          type="submit"
          name="action"
          value="google"
        >
          <Image src={GoogleIcon} alt="Facebook" width={16} height={16} />
          Google
        </Button>
      </form>
    </>
  );
};

export default SocialLogin;
