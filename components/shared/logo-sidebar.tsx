'use client'

import React, { useEffect, useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { useTheme } from 'next-themes'

import LogoDark from '@/public/assets/images/logo.png'
import LogoWhite from '@/public/assets/images/logo-light.png'
import LogoIcon from '@/public/assets/images/logo-icon.png'
import { cn } from '@/lib/utils'

function LogoSidebar() {

  const { theme } = useTheme()
  const [isCollapsed, setIsCollapsed] = useState(false)

  useEffect(() => {
    const sidebar = document.querySelector('[data-state]')
    const updateState = () => {
      const isCollapsedState = sidebar?.getAttribute('data-state') === 'collapsed'
      setIsCollapsed(isCollapsedState)
    }

    updateState()

    const observer = new MutationObserver(updateState)
    if (sidebar) {
      observer.observe(sidebar, { attributes: true, attributeFilter: ['data-state'] })
    }

    return () => observer.disconnect()
  }, [])

  return (
    <Link
        href="/dashboard"
        className={cn(
            'sidebar-logo h-[72px] px-4 py-3.5 flex items-center justify-center border-b border-neutral-100 dark:border-neutral-600', 
            isCollapsed ? 'px-1' : ''
        )}
    >
      <Image
        src={isCollapsed
            ? LogoIcon
            : theme === 'dark'
            ? LogoWhite
            : LogoDark}
        alt="Logo"
        width={isCollapsed ? 44 : 168}
        height={40}
        priority
      />
    </Link>
  )
}

export default LogoSidebar
