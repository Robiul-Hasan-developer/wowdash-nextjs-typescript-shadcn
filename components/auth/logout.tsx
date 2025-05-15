"use client";

import { useState } from "react";
import { doLogout } from "@/app/actions";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

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
      className="rounded-lg mt-8 h-12 text-sm h-[52px]"
    >
      {loading ? "Logging out..." : "Logout"}
    </Button>
  );
};

export default Logout;
