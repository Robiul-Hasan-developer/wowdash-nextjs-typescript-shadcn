"use client"

import { ChevronRight, Circle, type LucideIcon } from "lucide-react"

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
  return (
    <SidebarGroup>
      <SidebarMenu>
        {
          items.map((item) => {
            if(item.items && item.items.length > 0) {
              return (
                <Collapsible
                key={item.title}
                asChild
                defaultOpen={item.isActive}
                className="group/collapsible"
              >
                <SidebarMenuItem className="">
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title} className={`cursor-pointer py-5.5 px-3 text-base data-[state=open]:bg-primary hover:data-[state=open]:bg-primary data-[state=open]:text-white hover:data-[state=open]:text-white`}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                      <ChevronRight className="ms-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub className="gap-0">
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild className={`py-5.5 px-3 text-base`}>
                            <Link href={subItem.url} className="flex items-center gap-3.5">
                              <span className={`w-2 h-2 rounded-[50%] ${subItem.circleColor}`}></span>
                              <span>{subItem.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
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
              return (
                <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild tooltip={item.title} className="cursor-pointer py-5.5 px-3 text-base hover:bg-muted">
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