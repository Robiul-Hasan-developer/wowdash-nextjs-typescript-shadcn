
'use client'

import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { useTheme } from 'next-themes'

import LogoDark from '@/public/assets/images/logo.png'
import LogoWhite from '@/public/assets/images/logo-light.png'
import LogoIcon from '@/public/assets/images/logo-icon.png'
import { cn } from '@/lib/utils'
import { useSidebarCollapsed } from '@/hooks/useSidebarCollapsed'
import { useIsMounted } from '@/hooks/useIsMounted'

function LogoSidebar() {
  const { theme } = useTheme()
  const isMounted = useIsMounted()
  const isCollapsed = useSidebarCollapsed();

  if (!isMounted) return null

  return (
    <Link
      href="/dashboard"
      className={cn(
        'sidebar-logo h-[72px] py-3.5 flex items-center justify-center border-b border-neutral-100 dark:border-slate-700',
        isCollapsed ? 'px-1' : 'px-4'
      )}
    >
      <Image
        src={
          isCollapsed
            ? LogoIcon
            : theme === 'dark'
              ? LogoWhite
              : LogoDark
        }
        alt="Logo"
        width={isCollapsed ? 44 : 168}
        height={40}
        priority
      />
    </Link>
  )
}

export default LogoSidebar