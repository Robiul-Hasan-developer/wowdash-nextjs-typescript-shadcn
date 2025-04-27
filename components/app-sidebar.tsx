"use client"

import * as React from "react"
import {
  House,
  Mail,
  MessageCircleMore,
  CalendarDays,
  Map,
  FileText,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import LogoSidebar from "./shared/logo-sidebar"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: House,
      isActive: true,
      items: [
        {
          title: "AI",
          url: "/dashboard",
          circleColor: 'bg-primary'
        },
        {
          title: "CRM",
          url: "/crm",
          circleColor: 'bg-yellow-500'
        },
        {
          title: "eCommerce",
          url: "/ecommerce",
          circleColor: 'bg-cyan-500'
        },
        {
          title: "Cryptocurrency",
          url: "/cryptocurrency",
          circleColor: 'bg-red-500'
        },
        {
          title: "Investment",
          url: "/investment",
          circleColor: 'bg-green-600'
        },
        {
          title: "LMS / Learning System",
          url: "/lms",
          circleColor: 'bg-purple-600'
        },
        {
          title: "NFT & Gaming",
          url: "/nft",
          circleColor: 'bg-primary'
        },
        {
          title: "Medical",
          url: "/medical",
          circleColor: 'bg-yellow-500'
        },
        {
          title: "Analytics",
          url: "/analytics",
          circleColor: 'bg-cyan-500'
        },
        {
          title: "POS & Inventory",
          url: "/inventory",
          circleColor: 'bg-red-500'
        },
        {
          title: "Finance & Banking",
          url: "/finance",
          circleColor: 'bg-green-600'
        },
        {
          title: "Booking System",
          url: "/booking",
          circleColor: 'bg-purple-600'
        },
        {
          title: "Help Desk",
          url: "/help",
          circleColor: 'bg-primary'
        },
      ],
    },
    {
      label: 'Application'
    },
    {
      title: "Email",
      url: "/email",
      icon: Mail,
    },
    {
      title: "Chat",
      url: "/chat",
      icon: MessageCircleMore,
    },
    {
      title: "Calendar",
      url: "/calendar",
      icon: CalendarDays,
    },
    {
      title: "Kanban",
      url: "/kanban",
      icon: Map,
    },
    {
      title: "Invoice",
      url: "#",
      icon: FileText ,
      isActive: true,
      items: [
        {
          title: "List",
          url: "/invoice/list",
          circleColor: 'bg-primary'
        },
        {
          title: "Preview",
          url: "/invoice/preview",
          circleColor: 'bg-yellow-500'
        },
        {
          title: "Add New",
          url: "/invoice/add",
          circleColor: 'bg-cyan-500'
        },
        {
          title: "Edit",
          url: "/invoice/edit",
          circleColor: 'bg-red-500'
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className='hidden xl:block'>
      <SidebarHeader>
        <LogoSidebar/>
      </SidebarHeader>

      <SidebarContent className="scrollbar-thin scrollbar-invisible hover:scrollbar-visible">
        <NavMain items={data.navMain} />
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  )
}
