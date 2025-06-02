import React from "react";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import EmailSidebar from "../components/email-sidebar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import UserList1 from "@/public/assets/images/user-list/user-list1.png";
import UserList2 from "@/public/assets/images/user-list/user-list2.png";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const EmailDetailsPage = () => {
    return (
        <>
            <DashboardBreadcrumb title="Email" text="Email" />

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
                <div className="col-span-12 xl:col-span-4 2xl:col-span-3">
                    <EmailSidebar />
                </div>

                <div className="col-span-12 xl:col-span-8 2xl:col-span-9">
                    <div className="card h-full p-0 email-card overflow-x-auto block border-0 !p-0">
                        <div className="min-w-[450px] flex flex-col justify-between h-full">
                            <div className="">
                                <div className="card-header border-b border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 py-4 px-6 flex items-center gap-3 justify-between flex-wrap">
                                    <div className="flex items-center gap-2">
                                        <Button variant="link" className="p-0 text-neutral-600 flex me-2">
                                            <MoveLeft />
                                        </Button>
                                        <h6 className="mb-0 text-lg">Kathryn Murphy</h6>
                                        <span className="bg-blue-100 dark:bg-blue-600/25 text-blue-600 dark:text-blue-400 text-sm rounded px-2">Personal</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button className="text-neutral-600 flex">
                                            {/* <iconify-icon icon="mi:print" className="icon text-2xl line-height-1"></iconify-icon> */}
                                        </button>
                                        <button className="text-neutral-600 flex">
                                            {/* <iconify-icon icon="mdi:star-outline" className="icon text-2xl line-height-1"></iconify-icon> */}
                                        </button>
                                        <button className="text-neutral-600 flex">
                                            {/* <iconify-icon icon="material-symbols:delete-outline" className="icon text-2xl line-height-1"></iconify-icon> */}
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body p-0">
                                    <div className="py-4 px-6 border-b border-neutral-200 dark:border-neutral-600">
                                        <div className="flex items-start gap-3">
                                            <Image src={UserList1} alt="Thumb" width={10} height={10} className="w-10 h-10 rounded-full" />
                                            <div className="">
                                                <div className="flex items-center flex-wrap gap-2">
                                                    <h6 className="mb-0 text-lg">Kathryn Murphy</h6>
                                                    <span className="text-neutral-600 text-base">kathrynmurphy@gmail.com</span>
                                                </div>
                                                <div className="mt-5">
                                                    <p className="mb-4 text-neutral-600 dark:text-neutral-200">Hi William</p>
                                                    <p className="mb-4 text-neutral-600 dark:text-neutral-200">Just confirming that we transferred $63.86 to you via PayPal <Link href="#" className="text-primary-600 underline">(info367@gmail.com)</Link> which you earned on the themewow Market since your last payout.</p>
                                                    <p className="mb-0 text-neutral-600 dark:text-neutral-200">Thank you for selling with us!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-4 px-6 border-b border-neutral-200 dark:border-neutral-600">
                                        <div className="flex items-start gap-3">
                                            <Image src={UserList2} alt="Thumb" width={10} height={10} className="w-10 h-10 rounded-full" />
                                            <div className="">
                                                <div className="flex items-center flex-wrap gap-2">
                                                    <h6 className="mb-0 text-lg">Subrata Sen</h6>
                                                    <span className="text-neutral-600 text-base">subratasen@gmail.com</span>
                                                </div>
                                                <div className="mt-5">
                                                    <p className="mb-0 text-neutral-600 dark:text-neutral-200">Awesome, thank you so much!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer py-4 px-6 bg-white dark:bg-neutral-700 border-t border-neutral-200 dark:border-neutral-600">
                                <form action="#">
                                    <div className="flex items-center justify-between">
                                        <Textarea className="textarea-max-height bg-transparent focus:ring-0 w-full p-0 rounded-lg border-0 py-2 ps-2 resize-none scroll-sm" placeholder="Write massage" />
                                        <div className="flex items-center gap-4 ms-4">
                                            <div className="">
                                                <Label htmlFor="attatchment" className="text-neutral-600 text-xl">
                                                    {/* <iconify-icon icon="octicon:link-16" className="icon line-height-1"></iconify-icon> */}
                                                </Label>
                                                <Input type="file" id="attatchment" hidden />
                                            </div>
                                            <div className="">
                                                <Label htmlFor="gallery" className="text-neutral-600 text-xl">
                                                    {/* <iconify-icon icon="solar:gallery-bold" className="icon line-height-1"></iconify-icon> */}
                                                </Label>
                                                <Input type="file" id="gallery" hidden />
                                            </div>
                                            <button type="submit" className="btn bg-primary-600 hover:bg-primary-700 text-white text-sm px-3 py-3 w-full rounded-lg flex items-center justify-center gap-1 h-[44px]">
                                                {/* <iconify-icon icon="ion:paper-plane-outline" className="icon text-lg line-height-1"></iconify-icon> */}
                                                Send
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};
export default EmailDetailsPage;
