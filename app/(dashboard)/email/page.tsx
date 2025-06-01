import React from "react";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import { Input } from "@/components/ui/input";
import EmailSidebar from "../components/email-sidebar";
import { ChevronDown, Star } from "lucide-react";
import { Checkbox } from "@radix-ui/react-checkbox";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const UsersList = () => {
    return (
        <>
            <DashboardBreadcrumb title="Email" text="Email" />

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
                <div className="col-span-12 xl:col-span-4 2xl:col-span-3">
                    <EmailSidebar />
                </div>

                <div className="col-span-12 xl:col-span-8 2xl:col-span-9">
                    <div className="card h-full !p-0 border-0 email-card">
                        <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6">
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="form-check style-check flex items-center">
                                        <Checkbox className="w-4 h-4 border border-neutral-400 rounded-[4px]" />
                                        <div className="">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger>
                                                    <ChevronDown className="w-5 h-5 fill-black stroke-none" />
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
                                    <button type="button" className="delete-button hidden text-secondary-light text-xl flex">
                                        {/* <iconify-icon icon="material-symbols:delete-outline" className="icon line-height-1"></iconify-icon> */}
                                    </button>
                                    <button type="button" className="reload-button text-secondary-light text-xl flex">
                                        {/* <iconify-icon icon="tabler:reload" className="icon"></iconify-icon> */}
                                    </button>

                                    <div className="">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger>
                                                <ChevronDown className="w-5 h-5 fill-black stroke-none" />
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <DropdownMenuItem>
                                                    <div className="px-4 py-2 rounded text-secondary-light hover:bg-neutral-200 dark:hover:bg-neutral-600 text-hover-neutral-900 flex items-center text-start gap-2.5">
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

                                    <form className="navbar-search lg:block hidden">
                                        <Input type="text" className="bg-white dark:text-white dark:bg-neutral-700 h-10 w-auto" name="search" placeholder="Search" />
                                        {/* <iconify-icon icon="ion:search-outline" className="icon dark:text-white"></iconify-icon> */}
                                    </form>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-secondary-light line-height-1">1-12 of 1,253</span>
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination flex">
                                            <li className="page-item">
                                                {/* <a className="page-link flex bg-white dark:bg-neutral-700 border text-secondary-light text-xl" href="javascript:void(0)"><iconify-icon icon="iconamoon:arrow-left-2" className="icon"></iconify-icon> </a> */}
                                            </li>
                                            <li className="page-item">
                                                {/* <a className="page-link flex bg-white dark:bg-neutral-700 border text-secondary-light text-xl" href="javascript:void(0)"><iconify-icon icon="iconamoon:arrow-right-2" className="icon"></iconify-icon> </a> */}
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="card-body p-0">
                            <ul className="overflow-x-auto">
                                <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-neutral-600 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-600 min-w-max">
                                    <div className="form-check style-check flex items-center">
                                        <Input className="form-check-input rounded border border-neutral-400 bg-white dark:bg-neutral-600" type="checkbox" name="checkbox" />
                                    </div>
                                    <button type="button" className="starred-button icon text-xl text-secondary-light line-height-1 flex">
                                        <Star className="w-4" />
                                    </button>
                                    <a href="veiw-details.html" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Jerome Bell</a>
                                    <a href="veiw-details.html" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</a>
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
                                </li>
                                <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-neutral-600 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-600 min-w-max">
                                    <div className="form-check style-check flex items-center">
                                        <Input className="form-check-input rounded border border-neutral-400 bg-white dark:bg-neutral-600" type="checkbox" name="checkbox" />
                                    </div>
                                    <button type="button" className="starred-button icon text-xl text-secondary-light line-height-1 flex">
                                        <Star className="w-4" />
                                    </button>
                                    <a href="veiw-details.html" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Kristin Watson</a>
                                    <a href="veiw-details.html" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</a>
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
                                </li>
                                <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-neutral-600 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-600 min-w-max">
                                    <div className="form-check style-check flex items-center">
                                        <Input className="form-check-input rounded border border-neutral-400 bg-white dark:bg-neutral-600" type="checkbox" name="checkbox" />
                                    </div>
                                    <button type="button" className="starred-button icon text-xl text-secondary-light line-height-1 flex">
                                        <Star className="w-4" />
                                    </button>
                                    <a href="veiw-details.html" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Cody Fisher</a>
                                    <a href="veiw-details.html" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</a>
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
                                </li>
                                <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-neutral-600 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-600 min-w-max">
                                    <div className="form-check style-check flex items-center">
                                        <Input className="form-check-input rounded border border-neutral-400 bg-white dark:bg-neutral-600" type="checkbox" name="checkbox" />
                                    </div>
                                    <button type="button" className="starred-button icon text-xl text-secondary-light line-height-1 flex">
                                        <Star className="w-4" />
                                    </button>
                                    <a href="veiw-details.html" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Dianne Russell</a>
                                    <a href="veiw-details.html" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</a>
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
                                </li>
                                <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-neutral-600 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-600 min-w-max">
                                    <div className="form-check style-check flex items-center">
                                        <Input className="form-check-input rounded border border-neutral-400 bg-white dark:bg-neutral-600" type="checkbox" name="checkbox" />
                                    </div>
                                    <button type="button" className="starred-button icon text-xl text-secondary-light line-height-1 flex">
                                        <Star className="w-4" />
                                    </button>
                                    <a href="veiw-details.html" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Floyd Miles</a>
                                    <a href="veiw-details.html" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</a>
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
                                </li>
                                <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-neutral-600 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-600 min-w-max">
                                    <div className="form-check style-check flex items-center">
                                        <Input className="form-check-input rounded border border-neutral-400 bg-white dark:bg-neutral-600" type="checkbox" name="checkbox" />
                                    </div>
                                    <button type="button" className="starred-button icon text-xl text-secondary-light line-height-1 flex">
                                        <Star className="w-4" />
                                    </button>
                                    <a href="veiw-details.html" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Devon Lane</a>
                                    <a href="veiw-details.html" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</a>
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
                                </li>
                                <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-neutral-600 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-600 min-w-max">
                                    <div className="form-check style-check flex items-center">
                                        <Input className="form-check-input rounded border border-neutral-400 bg-white dark:bg-neutral-600" type="checkbox" name="checkbox" />
                                    </div>
                                    <button type="button" className="starred-button icon text-xl text-secondary-light line-height-1 flex">
                                        <Star className="w-4" />
                                    </button>
                                    <a href="veiw-details.html" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Dianne Russell</a>
                                    <a href="veiw-details.html" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</a>
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
                                </li>
                                <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-neutral-600 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-600 min-w-max">
                                    <div className="form-check style-check flex items-center">
                                        <Input className="form-check-input rounded border border-neutral-400 bg-white dark:bg-neutral-600" type="checkbox" name="checkbox" />
                                    </div>
                                    <button type="button" className="starred-button icon text-xl text-secondary-light line-height-1 flex">
                                        <Star className="w-4" />
                                    </button>
                                    <a href="veiw-details.html" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Annette Black</a>
                                    <a href="veiw-details.html" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</a>
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
                                </li>
                                <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-neutral-600 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-600 min-w-max">
                                    <div className="form-check style-check flex items-center">
                                        <Input className="form-check-input rounded border border-neutral-400 bg-white dark:bg-neutral-600" type="checkbox" name="checkbox" />
                                    </div>
                                    <button type="button" className="starred-button icon text-xl text-secondary-light line-height-1 flex">
                                        <Star className="w-4" />
                                    </button>
                                    <a href="veiw-details.html" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Bessie Cooper</a>
                                    <a href="veiw-details.html" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</a>
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
                                </li>
                                <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-neutral-600 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-600 min-w-max">
                                    <div className="form-check style-check flex items-center">
                                        <Input className="form-check-input rounded border border-neutral-400 bg-white dark:bg-neutral-600" type="checkbox" name="checkbox" />
                                    </div>
                                    <button type="button" className="starred-button icon text-xl text-secondary-light line-height-1 flex">
                                        <Star className="w-4" />
                                    </button>
                                    <a href="veiw-details.html" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Courtney Henry</a>
                                    <a href="veiw-details.html" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</a>
                                    <span className="text-neutral-600 dark:text-neutral-200 font-medium min-w-max-content ms-auto">6:07 AM</span>
                                </li>
                                <li className="email-item px-6 py-4 flex gap-4 items-center border-b last:border-0 border-neutral-200 dark:border-neutral-600 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-600 min-w-max">
                                    <div className="form-check style-check flex items-center">
                                        <Input className="form-check-input rounded border border-neutral-400 bg-white dark:bg-neutral-600" type="checkbox" name="checkbox" />
                                    </div>
                                    <button type="button" className="starred-button icon text-xl text-secondary-light line-height-1 flex">
                                        <Star className="w-4" />
                                    </button>
                                    <a href="veiw-details.html" className="text-neutral-600 dark:text-neutral-200 font-medium text-base text-line-1 w-[190px]">Wade Warren</a>
                                    <a href="veiw-details.html" className="text-neutral-600 dark:text-neutral-200 font-medium mb-0 line-clamp-1 max-w-[740px]">Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus</a>
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
export default UsersList;
