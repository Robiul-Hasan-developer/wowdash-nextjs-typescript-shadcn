import React from "react";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import EmailSidebar from "../components/email-sidebar";
import { ChevronDown, ChevronLeft, ChevronRight, EllipsisVertical, MailOpen, RotateCw, Star, Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import SearchBox from "@/components/shared/search-box";
import Link from "next/link";

const EmailPage = () => {
    return (
        <>
            <DashboardBreadcrumb title="Email" text="Email" />

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
                <div className="col-span-12 xl:col-span-4 2xl:col-span-3">
                    <EmailSidebar />
                </div>

                <div className="col-span-12 xl:col-span-8 2xl:col-span-9">
                    <div className="card h-full !p-0 border-0 email-card">
                        <div className="card-header border-b border-neutral-200 dark:border-slate-700 bg-white dark:bg-[#273142] py-4 px-6">
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center">
                                        <Checkbox
                                            className="border border-neutral-500 w-4 h-4"
                                        />
                                        <div className="">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger>
                                                    <ChevronDown className="w-5 h-5 fill-black dark:fill-white stroke-none" />
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent>
                                                    <DropdownMenuItem>All</DropdownMenuItem>
                                                    <DropdownMenuItem>None</DropdownMenuItem>
                                                    <DropdownMenuItem>Read</DropdownMenuItem>
                                                    <DropdownMenuItem>Unread</DropdownMenuItem>
                                                    <DropdownMenuItem>Starred</DropdownMenuItem>
                                                    <DropdownMenuItem>Unstarred</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                    </div>
                                    <Button variant="link" className="!p-0 bg-transparent text-neutral-800 dark:text-white flex">
                                        <Trash2 className="w-5 h-5" />
                                    </Button>
                                    <Button variant="link" className="!p-0 bg-transparent text-neutral-800 dark:text-white flex">
                                        <RotateCw className="w-5 h-5" />
                                    </Button>

                                    <div className="">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger>
                                                <EllipsisVertical className="w-5 h-5" />
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <DropdownMenuItem>
                                                    <div className="px-4 py-2 rounded text-secondary-light hover:bg-neutral-200 dark:hover:bg-neutral-600 text-hover-neutral-900 flex items-center text-start gap-2.5">
                                                        <MailOpen className="w-5 h-5" />
                                                        Mark all as read
                                                    </div>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <p className="ms-10 mt-2 text-neutral-500 mb-0">
                                                        Select messages to see more actions
                                                    </p>
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>

                                    <SearchBox />
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-secondary-light line-height-1">1-12 of 1,253</span>
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination flex">
                                            <li className="page-item">
                                                <Button variant="link" className="page-link flex bg-white dark:bg-slate-700 border text-secondary-light text-xl">
                                                    <ChevronLeft className="w-4" />
                                                </Button>
                                            </li>
                                            <li className="page-item">
                                                <Button variant="link" className="page-link flex bg-white dark:bg-slate-700 border text-secondary-light text-xl">
                                                    <ChevronRight className="w-4" />
                                                </Button>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="card-body p-0">
                            <ul className="overflow-x-auto">
                                <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-slate-700 cursor-pointer hover:bg-neutral-200 dark:hover:bg-slate-800 min-w-max">
                                    <div className="form-check style-check flex items-center">
                                        <Checkbox
                                            className="border border-neutral-500 w-4 h-4"
                                        />
                                    </div>
                                    <Button variant="link" className="!p-0 bg-transparent starred-button icon text-xl text-secondary-light line-height-1 flex">
                                        <Star className="w-4" />
                                    </Button>
                                    <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Jerome Bell</Link>
                                    <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</Link>
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
                                </li>
                                <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-slate-700 cursor-pointer hover:bg-neutral-200 dark:hover:bg-slate-800 min-w-max">
                                    <div className="form-check style-check flex items-center">
                                        <Checkbox
                                            className="border border-neutral-500 w-4 h-4"
                                        />
                                    </div>
                                    <Button variant="link" className="!p-0 bg-transparent starred-button icon text-xl text-secondary-light line-height-1 flex">
                                        <Star className="w-4" />
                                    </Button>
                                    <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Kristin Watson</Link>
                                    <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</Link>
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
                                </li>
                                <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-slate-700 cursor-pointer hover:bg-neutral-200 dark:hover:bg-slate-800 min-w-max">
                                    <div className="form-check style-check flex items-center">
                                        <Checkbox
                                            className="border border-neutral-500 w-4 h-4"
                                        />
                                    </div>
                                    <Button variant="link" className="!p-0 bg-transparent starred-button icon text-xl text-secondary-light line-height-1 flex">
                                        <Star className="w-4" />
                                    </Button>
                                    <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Cody Fisher</Link>
                                    <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</Link>
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
                                </li>
                                <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-slate-700 cursor-pointer hover:bg-neutral-200 dark:hover:bg-slate-800 min-w-max">
                                    <div className="form-check style-check flex items-center">
                                        <Checkbox
                                            className="border border-neutral-500 w-4 h-4"
                                        />
                                    </div>
                                    <Button variant="link" className="!p-0 bg-transparent starred-button icon text-xl text-secondary-light line-height-1 flex">
                                        <Star className="w-4" />
                                    </Button>
                                    <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Dianne Russell</Link>
                                    <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</Link>
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
                                </li>
                                <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-slate-700 cursor-pointer hover:bg-neutral-200 dark:hover:bg-slate-800 min-w-max">
                                    <div className="form-check style-check flex items-center">
                                        <Checkbox
                                            className="border border-neutral-500 w-4 h-4"
                                        />
                                    </div>
                                    <Button variant="link" className="!p-0 bg-transparent starred-button icon text-xl text-secondary-light line-height-1 flex">
                                        <Star className="w-4" />
                                    </Button>
                                    <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Floyd Miles</Link>
                                    <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</Link>
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
                                </li>
                                <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-slate-700 cursor-pointer hover:bg-neutral-200 dark:hover:bg-slate-800 min-w-max">
                                    <div className="form-check style-check flex items-center">
                                        <Checkbox
                                            className="border border-neutral-500 w-4 h-4"
                                        />
                                    </div>
                                    <Button variant="link" className="!p-0 bg-transparent starred-button icon text-xl text-secondary-light line-height-1 flex">
                                        <Star className="w-4" />
                                    </Button>
                                    <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Devon Lane</Link>
                                    <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</Link>
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
                                </li>
                                <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-slate-700 cursor-pointer hover:bg-neutral-200 dark:hover:bg-slate-800 min-w-max">
                                    <div className="form-check style-check flex items-center">
                                        <Checkbox
                                            className="border border-neutral-500 w-4 h-4"
                                        />
                                    </div>
                                    <Button variant="link" className="!p-0 bg-transparent starred-button icon text-xl text-secondary-light line-height-1 flex">
                                        <Star className="w-4" />
                                    </Button>
                                    <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Dianne Russell</Link>
                                    <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</Link>
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
                                </li>
                                <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-slate-700 cursor-pointer hover:bg-neutral-200 dark:hover:bg-slate-800 min-w-max">
                                    <div className="form-check style-check flex items-center">
                                        <Checkbox
                                            className="border border-neutral-500 w-4 h-4"
                                        />
                                    </div>
                                    <Button variant="link" className="!p-0 bg-transparent starred-button icon text-xl text-secondary-light line-height-1 flex">
                                        <Star className="w-4" />
                                    </Button>
                                    <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Annette Black</Link>
                                    <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</Link>
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
                                </li>
                                <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-slate-700 cursor-pointer hover:bg-neutral-200 dark:hover:bg-slate-800 min-w-max">
                                    <div className="form-check style-check flex items-center">
                                        <Checkbox
                                            className="border border-neutral-500 w-4 h-4"
                                        />
                                    </div>
                                    <Button variant="link" className="!p-0 bg-transparent starred-button icon text-xl text-secondary-light line-height-1 flex">
                                        <Star className="w-4" />
                                    </Button>
                                    <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Bessie Cooper</Link>
                                    <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</Link>
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
                                </li>
                                <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-slate-700 cursor-pointer hover:bg-neutral-200 dark:hover:bg-slate-800 min-w-max">
                                    <div className="form-check style-check flex items-center">
                                        <Checkbox
                                            className="border border-neutral-500 w-4 h-4"
                                        />
                                    </div>
                                    <Button variant="link" className="!p-0 bg-transparent starred-button icon text-xl text-secondary-light line-height-1 flex">
                                        <Star className="w-4" />
                                    </Button>
                                    <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Courtney Henry</Link>
                                    <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</Link>
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
                                </li>
                                <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-slate-700 cursor-pointer hover:bg-neutral-200 dark:hover:bg-slate-800 min-w-max">
                                    <div className="form-check style-check flex items-center">
                                        <Checkbox
                                            className="border border-neutral-500 w-4 h-4"
                                        />
                                    </div>
                                    <Button variant="link" className="!p-0 bg-transparent starred-button icon text-xl text-secondary-light line-height-1 flex">
                                        <Star className="w-4" />
                                    </Button>
                                    <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Wade Warren</Link>
                                    <Link href="/email-details" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</Link>
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
export default EmailPage;
