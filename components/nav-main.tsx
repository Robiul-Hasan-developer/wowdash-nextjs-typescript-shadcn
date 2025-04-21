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
  
  return (
    <SidebarGroup>
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
                          "cursor-pointer py-5.5 px-3 text-base data-[state=open]:bg-primary data-[state=open]:text-white hover:data-[state=open]:bg-primary hover:data-[state=open]:text-white hover:bg-[#e4f1ff] active:bg-[#e4f1ff]",
                          isGroupActive ? 'bg-primary text-white hover:bg-primary hover:text-white' : ''
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
                                    "py-5.5 px-3 text-base hover:bg-[#e4f1ff] active:bg-[#e4f1ff]",
                                    isSubActive
                                      ? "bg-[#e4f1ff] font-bold"
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
                      className={cn("cursor-pointer py-5.5 px-3 text-base hover:bg-[#e4f1ff] active:bg-[#e4f1ff]", isMenuActive
                      ? "bg-primary text-white hover:bg-primary hover:text-white"
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