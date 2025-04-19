"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import LogoSidebar from "./shared/logo-sidebar"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Login",
          url: "/login",
          circleColor: 'bg-primary'
        },
        {
          title: "Register",
          url: "/register",
          circleColor: 'bg-yellow-500'
        },
        {
          title: "Settings",
          url: "#",
          circleColor: 'bg-cyan-500'
        },
        {
          title: "Settings",
          url: "#",
          circleColor: 'bg-red-500'
        },
        {
          title: "Settings",
          url: "#",
          circleColor: 'bg-green-600'
        },
        {
          title: "Settings",
          url: "#",
          circleColor: 'bg-purple-600'
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
          circleColor: 'bg-primary-600'
        },
        {
          title: "Explorer",
          url: "#",
          circleColor: 'bg-primary-600'
        },
        {
          title: "Quantum",
          url: "#",
          circleColor: 'bg-primary-600'
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
          circleColor: 'bg-primary-600'
        },
        {
          title: "Get Started",
          url: "#",
          circleColor: 'bg-primary-600'
        },
        {
          title: "Tutorials",
          url: "#",
          circleColor: 'bg-primary-600'
        },
        {
          title: "Changelog",
          url: "#",
          circleColor: 'bg-primary-600'
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
          circleColor: 'bg-primary-600'
        },
        {
          title: "Team",
          url: "#",
          circleColor: 'bg-primary-600'
        },
        {
          title: "Billing",
          url: "#",
          circleColor: 'bg-primary-600'
        },
        {
          title: "Limits",
          url: "#",
          circleColor: 'bg-primary-600'
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <LogoSidebar/>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  )
}
