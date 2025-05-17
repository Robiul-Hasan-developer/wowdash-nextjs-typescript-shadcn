"use client";

import { useState } from "react";
import { doLogout } from "@/app/actions";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { LogOutIcon } from "lucide-react";
import toast from "react-hot-toast";

const Logout = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    
    await doLogout();
    toast.success("You Logout Successfully");
    router.push("/auth/login");

    setLoading(false);
  };


  return (
    <Button
      onClick={handleLogout}
      type="button"
      className={`hover:text-red-600 flex items-center gap-3 p-0 text-neutral-900 text-base !px-0 cursor-pointer leading-[0] w-full justify-start hover:no-underline h-[none] ${
        loading ? "text-red-600" : ""
      }`}
      variant="link"
    >
      <LogOutIcon width={24} height={24} className="!w-4.5 !h-4.5" />
      {loading ? "Logging out..." : "Logout"}
    </Button>
  );
};

export default Logout;
