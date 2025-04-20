'use client'

import React from 'react'
import Link from "next/link"
import Image from "next/image"
// import Logo from "../../public/assets/images/logo.png"
import Logo from '@/public/assets/images/logo.png'

function LogoSidebar() {
    return (
        <Link href="/dashboard" className="sidebar-logo h-[72px] px-4 py-3.5 flex items-center border-b border-neutral-100">
            <Image
                src={Logo}
                width={168}
                height={40}
                alt="Picture of the author"
                priority 
            />
        </Link>
    )
}

export default LogoSidebar
