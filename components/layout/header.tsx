import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import { SidebarTrigger } from '../ui/sidebar';
import { Input } from '../ui/input';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
    return (
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
                <div className="flex items-center gap-4 px-4">
                    <SidebarTrigger className="-ms-1 p-0 size-[unset] cursor-pointer" />
                    <div className="relative max-w-[388px] w-full">
                        <Input 
                            className={cn("bg-neutral-100 shadow-none focus-visible:ring-0 focus-visible:border-primary border border-slate-300 h-10 pe-6 ps-11 w-full")} 
                            placeholder="Search..." 
                        />
                        <span className="absolute top-[50%] start-0 ms-4 -translate-y-[50%]">
                            <Search className='text-neutral-500' width={18} height={18} />
                        </span>
                    </div>
                </div>
                
                <Breadcrumb>
                    <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                        <BreadcrumbLink href="#">
                        Building Your Application
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                    </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        </header>
    );
};

export default Header;