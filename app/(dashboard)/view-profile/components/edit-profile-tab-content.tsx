import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import AvatarUpload from './avatar-upload';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const EditProfileTabContent = () => {
    return (
        <div>
            <h6 className="text-base text-neutral-600 dark:text-neutral-200 mb-4">Profile Image</h6>
            <div className="mb-6 mt-4">
                <AvatarUpload />
            </div>

            <form action="#">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-x-6">
                    <div className="col-span-12 sm:col-span-6">
                        <div className="mb-5">
                            <Label htmlFor="name" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Full Name <span className="text-red-600">*</span></Label>
                            <Input type="text" className="border border-neutral-300 px-5 dark:border-slate-500 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-12 rounded-lg !shadow-none !ring-0" id="name" placeholder="Enter Full Name" />
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <div className="mb-5">
                            <Label htmlFor="email" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Email <span className="text-red-600">*</span></Label>
                            <Input type="email" className="border border-neutral-300 px-5 dark:border-slate-500 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-12 rounded-lg !shadow-none !ring-0" id="email" placeholder="Enter email address" />
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <div className="mb-5">
                            <Label htmlFor="number" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Phone</Label>
                            <Input type="email" className="border border-neutral-300 px-5 dark:border-slate-500 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-12 rounded-lg !shadow-none !ring-0" id="number" placeholder="Enter phone number" />
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <div className="mb-5">
                            <Label htmlFor="depart" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Department <span className="text-red-600">*</span> </Label>
                            <Select>
                                <SelectTrigger id='depart' className="border border-neutral-300 px-5 dark:border-slate-500 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-12 !rounded-lg !shadow-none !ring-0 !h-[48px] !w-full">
                                    <SelectValue placeholder="Enter Department" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="English">English</SelectItem>
                                    <SelectItem value="Bangla">Bangla</SelectItem>
                                    <SelectItem value="Economics">Economics</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <div className="mb-5">
                            <Label htmlFor="desig" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Designation <span className="text-red-600">*</span> </Label>
                            <Select>
                                <SelectTrigger id='desig' className="border border-neutral-300 px-5 dark:border-slate-500 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-12 !rounded-lg !shadow-none !ring-0 !h-[48px] !w-full">
                                    <SelectValue placeholder="Enter Designation" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Front End Dev"> Front End Dev </SelectItem>
                                    <SelectItem value="Back End Dev"> Back End Dev </SelectItem>
                                    <SelectItem value="UX/UI Designer"> UX/UI Designer </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <div className="mb-5">
                            <Label htmlFor="Language" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Language <span className="text-red-600">*</span> </Label>
                            <Select>
                                <SelectTrigger id='Language' className="border border-neutral-300 px-5 dark:border-slate-500 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-12 !rounded-lg !shadow-none !ring-0 !h-[48px] !w-full">
                                    <SelectValue placeholder="Enter Language" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="English">English</SelectItem>
                                    <SelectItem value="Bangla">Bangla</SelectItem>
                                    <SelectItem value="Economics">Economics</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="col-span-12">
                        <div className="mb-5">
                            <Label htmlFor="desc" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Description</Label>
                            <Textarea className="border border-neutral-300 px-5 dark:border-slate-500 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-12 !rounded-lg !shadow-none !ring-0 !h-[80px] !w-full" placeholder="Write Description" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                    <Button type="button" className="h-[48px] border border-red-600 bg-transparent hover:bg-red-600/20 dark:hover:bg-red-600/20 text-red-600 text-base px-14 py-[11px] rounded-lg">
                        Cancel
                    </Button>
                    <Button type="button" className="h-[48px] text-base px-14 py-3 rounded-lg">
                        Save
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default EditProfileTabContent;