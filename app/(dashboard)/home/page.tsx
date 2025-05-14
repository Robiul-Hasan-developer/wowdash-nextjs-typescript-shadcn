import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import Logout from "@/components/auth/logout";

const HomePage = async () => {
  const session = await auth();
  if (!session?.user) redirect("/auth/login");

  return (
    <div>
      <h1 className="text-2xl">Welcome! {session.user.name}</h1>

      {session.user.image && (
        <Image
          src={session.user.image}
          className="rounded-full"
          width={56}
          height={56}
          alt={session.user.name ?? "User profile"}
        />
      )}

      {session.user && <Logout />}
    </div>
  );
};

export default HomePage;
