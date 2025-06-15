import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const EditProfileTabContent = () => {
    return (
        <div>
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
                            <Label htmlFor="name" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Full Name <span className="text-red-600">*</span></Label>
                            <Input type="text" className="form-control rounded-lg" id="name" placeholder="Enter Full Name" />
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <div className="mb-5">
                            <Label htmlFor="email" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Email <span className="text-red-600">*</span></Label>
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
                            <Label htmlFor="depart" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Department <span className="text-red-600">*</span> </Label>
                            <select className="form-control rounded-lg form-select" id="depart">
                                <option>Enter Event Title </option>
                                <option>Enter Event Title One </option>
                                <option>Enter Event Title Two</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <div className="mb-5">
                            <Label htmlFor="desig" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Designation <span className="text-red-600">*</span> </Label>
                            <select className="form-control rounded-lg form-select" id="desig">
                                <option>Enter Designation Title </option>
                                <option>Enter Designation Title One </option>
                                <option>Enter Designation Title Two</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <div className="mb-5">
                            <Label htmlFor="Language" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Language <span className="text-red-600">*</span> </Label>
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
                    <button type="button" className="border border-red-600 bg-hover-red-200 text-red-600 text-base px-14 py-[11px] rounded-lg">
                        Cancel
                    </button>
                    <button type="button" className="btn btn-primary border border-primary-600 text-base px-14 py-3 rounded-lg">
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditProfileTabContent;