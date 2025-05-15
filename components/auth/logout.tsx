"use client";

import { doLogout } from "@/app/actions";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await doLogout();
    router.push("/auth/login");
  };

  return (
    <Button
      onClick={handleLogout}
      type="button"
      className="rounded-lg mt-8 h-12 text-sm h-[52px]"
    >
      Logout
    </Button>
  );
};

export default Logout;
