"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

import LogoDark from "@/public/assets/images/logo.png";
import LogoWhite from "@/public/assets/images/logo-light.png";
import { useSidebarCollapsed } from "@/hooks/useSidebarCollapsed";
import { useIsMounted } from "@/hooks/useIsMounted";

function ThemeLogo() {
  const { theme } = useTheme();
  const isMounted = useIsMounted()
  const isCollapsed = useSidebarCollapsed();

  // Don't render until mounted to avoid hydration mismatch or wrong theme
  if (!isMounted) return null;

  return (
    <Link href="/dashboard">
      <Image
        src={theme === "dark" ? LogoWhite : LogoDark}
        alt="Logo"
        width={168}
        height={40}
        priority
      />
    </Link>
  );
}

export default ThemeLogo;
