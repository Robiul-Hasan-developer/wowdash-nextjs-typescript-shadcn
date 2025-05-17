"use client";

import { useState } from "react";
import { doLogout } from "@/app/actions";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { LogOutIcon } from "lucide-react";

const Logout = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    await doLogout();
    router.push("/auth/login");
  };

  return (
    <Button
      onClick={handleLogout}
      type="button"
      className="hover:text-red-600 flex items-center gap-3 p-0 text-neutral-900 text-base !px-0 cursor-pointer leading-[0] w-full justify-start hover:no-underline h-[none]"
      variant="link"
    >
      <LogOutIcon width={24} height={24} className="!w-4.5 !h-4.5" />
      {loading ? "Logging out..." : "Logout"}
    </Button>
  );
};

export default Logout;
