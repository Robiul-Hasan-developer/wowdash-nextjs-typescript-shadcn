import React from 'react';
import { ChevronRight, EllipsisVertical } from "lucide-react";
import Image from "next/image";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import UserGridBg1 from "@/public/assets/images/user-grid/user-grid-bg1.png";
import UserGridImg1 from "@/public/assets/images/user-grid/user-grid-img1.png";
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const UsersGridCard = () => {
    return (
        <div className="user-grid-card">
            <div className="relative border border-neutral-200 dark:border-neutral-600 rounded-2xl overflow-hidden">
                <div className="relative h-[127px]">
                    <Image src={UserGridBg1} alt="Image" fill className="w-full object-fit-cover" />

                </div>

                <div className="dropdown absolute top-0 end-0 me-4 mt-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger className='bg-gradient-to-r from-white/50 w-8 h-8 rounded-lg border border-light-white flex justify-center items-center text-white'>
                            <EllipsisVertical className="h-5" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <div className="pe-6 pb-4 ps-6 text-center mt--50 relative z-[1]">
                    <Image src={UserGridImg1} alt="Image" width={100} height={100} className="border br-white border-width-2-px w-[100px] h-[100px] ms-auto me-auto -mt-[50px] rounded-full object-fit-cover" />
                    <h6 className="text-lg mb-0 mt-1.5">Jacob Jones</h6>
                    <span className="text-secondary-light mb-4">ifrandom@gmail.com</span>

                    <div className="center-border relative bg-gradient-to-r from-red-500/10 to-red-50/25 rounded-lg p-3 flex items-center gap-4 before:absolute before:w-px before:h-full before:z-[1] before:bg-neutral-200 dark:before:bg-neutral-500 before:start-1/2">
                        <div className="text-center w-1/2">
                            <h6 className="text-base mb-0">Design</h6>
                            <span className="text-secondary-light text-sm mb-0">Department</span>
                        </div>
                        <div className="text-center w-1/2">
                            <h6 className="text-base mb-0">UI UX Designer</h6>
                            <span className="text-secondary-light text-sm mb-0">Designation</span>
                        </div>
                    </div>
                    <Button className={cn(`bg-blue-50 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white dark:bg-blue-600/25 text-blue-600 dark:text-blue-400 text-sm px-3 py-3 rounded-lg flex items-center justify-center mt-4 font-medium gap-2 w-full h-12`)}>
                        View Profile
                        <ChevronRight className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default UsersGridCard;