import React from "react";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import ViewProfileSidebar from "./components/view-profile-sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card";

const ViewProfile = () => {
    return (
        <>
            <DashboardBreadcrumb title="View Profile" text="View Profile" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-4">
                    <ViewProfileSidebar />
                </div>

                <div className="col-span-12 lg:col-span-8">
                    <Card className="card">
                        <CardContent className="px-0">
                            <Tabs defaultValue="editProfile" className="gap-4">
                                <TabsList className='active-gradient bg-transparent dark:bg-transparent rounded-none h-[50px]'>
                                    <TabsTrigger value="editProfile" className='py-2.5 px-4 font-semibold text-sm inline-flex items-center gap-3 dark:bg-transparent text-neutral-600 hover:text-blue-600 dark:text-white dark:hover:text-blue-500 data-[state=active]:bg-gradient border-0 border-t-2 border-neutral-200 dark:border-neutral-500 data-[state=active]:border-blue-600 dark:data-[state=active]:border-blue-600 rounded-[0] data-[state=active]:shadow-none cursor-pointer'>
                                        Edit Profile
                                    </TabsTrigger>
                                    <TabsTrigger value="changePassword" className='py-2.5 px-4 font-semibold text-sm inline-flex items-center gap-3 dark:bg-transparent text-neutral-600 hover:text-blue-600 dark:text-white dark:hover:text-blue-500 data-[state=active]:bg-gradient border-0 border-t-2 border-neutral-200 dark:border-neutral-500 data-[state=active]:border-blue-600 dark:data-[state=active]:border-blue-600 rounded-[0] data-[state=active]:shadow-none cursor-pointer'>
                                        Change Password
                                    </TabsTrigger>
                                    <TabsTrigger value="NotificationPassword" className='py-2.5 px-4 font-semibold text-sm inline-flex items-center gap-3 dark:bg-transparent text-neutral-600 hover:text-blue-600 dark:text-white dark:hover:text-blue-500 data-[state=active]:bg-gradient border-0 border-t-2 border-neutral-200 dark:border-neutral-500 data-[state=active]:border-blue-600 dark:data-[state=active]:border-blue-600 rounded-[0] data-[state=active]:shadow-none cursor-pointer'>
                                        Notification Password
                                    </TabsTrigger>
                                </TabsList>

                                <TabsContent value="editProfile">
                                    Edit Profile
                                </TabsContent>
                                <TabsContent value="changePassword">
                                    Change Password
                                </TabsContent>
                                <TabsContent value="NotificationPassword">
                                    Notification Password
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>



                    <div className="card h-full border-0">
                        <div className="card-body p-6">

                            <ul className="tab-style-gradient flex flex-wrap text-sm font-medium text-center mb-5" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                                <li className="" role="presentation">
                                    <button className="py-2.5 px-4 border-t-2 font-semibold text-base inline-flex items-center gap-3 text-neutral-600" id="edit-profile-tab" data-tabs-target="#edit-profile" type="button" role="tab" aria-controls="edit-profile" aria-selected="false">
                                        Edit Profile
                                    </button>
                                </li>
                                <li className="" role="presentation">
                                    <button className="py-2.5 px-4 border-t-2 font-semibold text-base inline-flex items-center gap-3 text-neutral-600 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="change-password-tab" data-tabs-target="#change-password" type="button" role="tab" aria-controls="change-password" aria-selected="false">
                                        Change Password
                                    </button>
                                </li>
                                <li className="" role="presentation">
                                    <button className="py-2.5 px-4 border-t-2 font-semibold text-base inline-flex items-center gap-3 text-neutral-600 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="notification-password-tab" data-tabs-target="#notification-password" type="button" role="tab" aria-controls="notification-password" aria-selected="false">
                                        Notification Password
                                    </button>
                                </li>
                            </ul>

                            <div id="default-tab-content">
                                <div className="hidden" id="edit-profile" role="tabpanel">
                                    <h6 className="text-base text-neutral-600 dark:text-neutral-200 mb-4">Profile Image</h6>
                                    <div className="mb-6 mt-4">
                                        <div className="avatar-upload">
                                            <div className="avatar-edit absolute bottom-0 end-0 me-6 mt-4 z-[1] cursor-pointer">
                                                <Input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" hidden />
                                                <Label htmlFor="imageUpload" className="w-8 h-8 flex justify-center items-center bg-primary-100 dark:bg-primary-600/25 text-primary-600 dark:text-primary-400 border border-primary-600 hover:bg-primary-100 text-lg rounded-full">
                                                    {/* <iconify-icon icon="solar:camera-outline" className="icon"></iconify-icon> */}
                                                </Label>
                                            </div>
                                            <div className="avatar-preview">
                                                <div id="imagePreview">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <form action="#">
                                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-x-6">
                                            <div className="col-span-12 sm:col-span-6">
                                                <div className="mb-5">
                                                    <Label htmlFor="name" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Full Name <span className="text-danger-600">*</span></Label>
                                                    <Input type="text" className="form-control rounded-lg" id="name" placeholder="Enter Full Name" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <div className="mb-5">
                                                    <Label htmlFor="email" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Email <span className="text-danger-600">*</span></Label>
                                                    <Input type="email" className="form-control rounded-lg" id="email" placeholder="Enter email address" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <div className="mb-5">
                                                    <Label htmlFor="number" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Phone</Label>
                                                    <Input type="email" className="form-control rounded-lg" id="number" placeholder="Enter phone number" />
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <div className="mb-5">
                                                    <Label htmlFor="depart" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Department <span className="text-danger-600">*</span> </Label>
                                                    <select className="form-control rounded-lg form-select" id="depart">
                                                        <option>Enter Event Title </option>
                                                        <option>Enter Event Title One </option>
                                                        <option>Enter Event Title Two</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <div className="mb-5">
                                                    <Label htmlFor="desig" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Designation <span className="text-danger-600">*</span> </Label>
                                                    <select className="form-control rounded-lg form-select" id="desig">
                                                        <option>Enter Designation Title </option>
                                                        <option>Enter Designation Title One </option>
                                                        <option>Enter Designation Title Two</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-span-12 sm:col-span-6">
                                                <div className="mb-5">
                                                    <Label htmlFor="Language" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Language <span className="text-danger-600">*</span> </Label>
                                                    <select className="form-control rounded-lg form-select" id="Language">
                                                        <option> English</option>
                                                        <option> Bangla </option>
                                                        <option> Hindi</option>
                                                        <option> Arabic</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-span-12">
                                                <div className="mb-5">
                                                    <Label htmlFor="desc" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Description</Label>
                                                    <textarea name="#0" className="form-control rounded-lg" id="desc" placeholder="Write description..."></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center gap-3">
                                            <button type="button" className="border border-danger-600 bg-hover-danger-200 text-danger-600 text-base px-14 py-[11px] rounded-lg">
                                                Cancel
                                            </button>
                                            <button type="button" className="btn btn-primary border border-primary-600 text-base px-14 py-3 rounded-lg">
                                                Save
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="hidden" id="change-password" role="tabpanel">
                                    <div className="mb-5">
                                        <Label htmlFor="your-password" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">New Password <span className="text-danger-600">*</span></Label>
                                        <div className="relative">
                                            <Input type="password" className="form-control rounded-lg" id="your-password" placeholder="Enter New Password*" />
                                            <span className="toggle-password ri-eye-line cursor-pointer absolute end-0 top-1/2 -translate-y-1/2 me-4 text-secondary-light" data-toggle="#your-password"></span>
                                        </div>
                                    </div>
                                    <div className="mb-5">
                                        <Label htmlFor="confirm-password" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Confirmed Password <span className="text-danger-600">*</span></Label>
                                        <div className="relative">
                                            <Input type="password" className="form-control rounded-lg" id="confirm-password" placeholder="Confirm Password*" />
                                            <span className="toggle-password ri-eye-line cursor-pointer absolute end-0 top-1/2 -translate-y-1/2 me-4 text-secondary-light" data-toggle="#confirm-password"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden" id="notification-password" role="tabpanel">
                                    <div className="form-switch switch-primary py-3 px-4 border rounded-lg relative mb-4">
                                        <Label htmlFor="companzNew" className="absolute w-full h-full start-0 top-0"></Label>
                                        <div className="flex items-center gap-3 justify-between">
                                            <span className="form-check-Label line-height-1 font-medium text-secondary-light">Company News</span>
                                            <Input className="form-check-Input" type="checkbox" role="switch" id="companzNew" />
                                        </div>
                                    </div>
                                    <div className="form-switch switch-primary py-3 px-4 border rounded-lg relative mb-4">
                                        <Label htmlFor="pushNotifcation" className="absolute w-full h-full start-0 top-0"></Label>
                                        <div className="flex items-center gap-3 justify-between">
                                            <span className="form-check-Label line-height-1 font-medium text-secondary-light">Push Notification</span>
                                            <Input className="form-check-Input" type="checkbox" role="switch" id="pushNotifcation" checked />
                                        </div>
                                    </div>
                                    <div className="form-switch switch-primary py-3 px-4 border rounded-lg relative mb-4">
                                        <Label htmlFor="weeklyLetters" className="absolute w-full h-full start-0 top-0"></Label>
                                        <div className="flex items-center gap-3 justify-between">
                                            <span className="form-check-Label line-height-1 font-medium text-secondary-light">Weekly News Letters</span>
                                            <Input className="form-check-Input" type="checkbox" role="switch" id="weeklyLetters" checked />
                                        </div>
                                    </div>
                                    <div className="form-switch switch-primary py-3 px-4 border rounded-lg relative mb-4">
                                        <Label htmlFor="meetUp" className="absolute w-full h-full start-0 top-0"></Label>
                                        <div className="flex items-center gap-3 justify-between">
                                            <span className="form-check-Label line-height-1 font-medium text-secondary-light">Meetups Near you</span>
                                            <Input className="form-check-Input" type="checkbox" role="switch" id="meetUp" />
                                        </div>
                                    </div>
                                    <div className="form-switch switch-primary py-3 px-4 border rounded-lg relative mb-4">
                                        <Label htmlFor="orderNotification" className="absolute w-full h-full start-0 top-0"></Label>
                                        <div className="flex items-center gap-3 justify-between">
                                            <span className="form-check-Label line-height-1 font-medium text-secondary-light">Orders Notifications</span>
                                            <Input className="form-check-Input" type="checkbox" role="switch" id="orderNotification" checked />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
export default ViewProfile;
