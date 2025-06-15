import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const ChangePasswordTabContent = () => {
    return (
        <div>
            <div className="mb-5">
                <Label htmlFor="your-password" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">New Password <span className="text-red-600">*</span></Label>
                <div className="relative">
                    <Input type="password" className="form-control rounded-lg" id="your-password" placeholder="Enter New Password*" />
                    <span className="toggle-password ri-eye-line cursor-pointer absolute end-0 top-1/2 -translate-y-1/2 me-4 text-secondary-light" data-toggle="#your-password"></span>
                </div>
            </div>
            <div className="mb-5">
                <Label htmlFor="confirm-password" className="inline-block font-semibold text-neutral-600 dark:text-neutral-200 text-sm mb-2">Confirmed Password <span className="text-red-600">*</span></Label>
                <div className="relative">
                    <Input type="password" className="form-control rounded-lg" id="confirm-password" placeholder="Confirm Password*" />
                    <span className="toggle-password ri-eye-line cursor-pointer absolute end-0 top-1/2 -translate-y-1/2 me-4 text-secondary-light" data-toggle="#confirm-password"></span>
                </div>
            </div>
        </div>
    );
};

export default ChangePasswordTabContent;