'use client'

import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { useTheme } from 'next-themes'

import LogoDark from '../../public/assets/images/logo.png'
import LogoWhite from '../../public/assets/images/logo-light.png'

function LogoSidebar() {
    const { theme } = useTheme()

    return (
        <Link
            href="/dashboard"
            className="sidebar-logo h-[72px] px-4 py-3.5 flex items-center border-b border-neutral-100 dark:border-neutral-600"
        >
            <Image
                src={theme === 'dark' ? LogoWhite : LogoDark}
                width={168}
                height={40}
                alt="Logo"
                priority
            />
        </Link>
    )
}

export default LogoSidebar
