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
      className="hover:text-red-600 flex items-center gap-3"
      variant="link"
    >
      <LogOutIcon className="w-5 h-5" />
      {loading ? "Logging out..." : "Logout"}
    </Button>
  );
};

export default Logout;
