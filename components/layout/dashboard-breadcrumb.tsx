import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import { House } from 'lucide-react';

  type BreadcrumbData = {
    title: string,
    text: string,
  }
  
const DashboardBreadcrumb = ({title, text} : BreadcrumbData) => {
    return (
        <div className='flex flex-wrap items-center justify-between gap-2 mb-6'>
            <h6 className="text-2xl font-semibold">{title}</h6>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem className="hover:text-primary text-base">
                        <BreadcrumbLink href='/' className='flex items-center gap-2 font-medium'>
                            <House size={16} />
                            Dashboard
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator/>
                    <BreadcrumbItem className="text-base">
                        <BreadcrumbPage>{text}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
};

export default DashboardBreadcrumb;