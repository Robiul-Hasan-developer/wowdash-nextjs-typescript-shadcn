import { doLogout } from "@/app/actions";
import React from "react";
import { Button } from "../ui/button";

const Logout = () => {
  return (
    <form action={doLogout}>
      <Button type="submit" className="rounded-lg mt-8 h-12 text-sm h-[52px]">
        Logout
      </Button>
    </form>
  );
};

export default Logout;
