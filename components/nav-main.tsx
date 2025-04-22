"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

import React from 'react'
import { useSidebarCollapsed } from "@/hooks/useSidebarCollapsed"

type SidebarItem = {
  title?: string
  url?: string
  icon?: LucideIcon
  isActive?: boolean
  items?: {
    title: string
    url: string
    circleColor: string
  }[]
  label?: string,
}

export function NavMain({ items } : {items:SidebarItem[]}) {
  
  const pathname = usePathname();
  const isCollapsed = useSidebarCollapsed();
  
  return (
    <SidebarGroup className={` ${isCollapsed ? 'px-1.5' : ''}`}>
      <SidebarMenu>
        {
          items.map((item) => {
            // Check if this group should be expanded based on current path
            const isGroupActive = item.items?.some((subItem) =>
              pathname === subItem.url || pathname.startsWith(subItem.url)
            )

            if(item.items && item.items.length > 0) {
              return (
                <Collapsible
                    key={item.title}
                    asChild
                    defaultOpen={isGroupActive}
                    className="group/collapsible"
                  >
                  <SidebarMenuItem className="">
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton 
                        tooltip={item.title}   
                        className={cn(
                          "cursor-pointer py-5.5 px-3 text-base data-[state=open]:bg-primary data-[state=open]:text-white hover:data-[state=open]:bg-primary dark:hover:data-[state=open]:bg-primary hover:data-[state=open]:text-white hover:bg-[#e4f1ff] active:bg-[#e4f1ff] dark:hover:bg-slate-700",
                          isGroupActive ? 'bg-primary text-white hover:bg-primary hover:text-white dark:bg-primary dark:hover:bg-primary' : ''
                        )}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                        <ChevronRight className="ms-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub className="gap-0 mt-2">
                        {item.items?.map((subItem) => 
                          {
                            const isSubActive = pathname === subItem.url || pathname.startsWith(subItem.url);
                            return (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton
                                  asChild
                                  className={cn(
                                    "py-5.5 px-3 text-base hover:bg-[#e4f1ff] active:bg-[#e4f1ff] dark:hover:bg-slate-700",
                                    isSubActive
                                      ? "bg-[#e4f1ff] font-bold dark:bg-slate-600"
                                      : ""
                                  )}
                                >
                                <Link href={subItem.url} className={`flex items-center gap-3.5`}>
                                  <span className={`w-2 h-2 rounded-[50%] ${subItem.circleColor}`}></span>
                                  <span>{subItem.title}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                            )
                          }
                         
                        )}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              )
            }
            if(item.label) {
              return (
                <SidebarGroupLabel key={`label-${item.label}`}>{item.label}</SidebarGroupLabel>
              )
            }
            if(item.url && item.title) {
              const isMenuActive = pathname === item.url || pathname.startsWith(item.url);

              return (
                <SidebarMenuItem key={item.title} className="">
                    <SidebarMenuButton asChild 
                      tooltip={item.title} 
                      className={cn("cursor-pointer py-5.5 px-3 text-base hover:bg-[#e4f1ff] active:bg-[#e4f1ff] dark:hover:bg-slate-700", isMenuActive
                      ? "bg-primary hover:bg-primary text-white dark:hover:bg-primary hover:text-white"
                      : "")}>
                      <Link href={item.url} className="flex items-center gap-2">
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
              )
            }
          })
        }
      </SidebarMenu>
    </SidebarGroup>
  )
}