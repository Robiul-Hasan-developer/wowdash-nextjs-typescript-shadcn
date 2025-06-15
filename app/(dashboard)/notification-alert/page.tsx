
"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";

const ViewProfile = () => {
    return (
        <>
            <DashboardBreadcrumb title="Notification Alert" text="Notification Alert" />

            <div>
                <div className="card rounded-xl border border-border bg-background shadow-sm p-6">
                    <div className="card-body p-0">
                        <form action="#">
                            <NotificationSection
                                title="Mail Notification Messages"
                                label="Admin New Order Message"
                                placeholder="You have a new order."
                            />

                            <NotificationSection
                                title="SMS Notification Messages"
                                label="Admin New Order Message"
                                placeholder="You have a new order."
                            />

                            <NotificationSection
                                title="Push Notification Messages"
                                label="Admin New Order Message"
                                placeholder="You have a new order."
                            />

                            <div className="flex items-center flex-wrap justify-center gap-4 mt-8">
                                <Button type="button" className="h-[48px] border border-red-600 bg-transparent hover:bg-red-600/20 dark:hover:bg-red-600/20 text-red-600 text-base px-14 py-[11px] rounded-lg">
                                    Reset
                                </Button>
                                <Button type="button" className="h-[48px] text-base px-14 py-3 rounded-lg">
                                    Save Changes
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewProfile;

interface NotificationSectionProps {
    title: string;
    label: string;
    placeholder?: string;
}

const NotificationSection: React.FC<NotificationSectionProps> = ({ title, label, placeholder }) => {
    return (
        <div className="mb-6">
            <h6 className="text-lg font-semibold mb-3">{title}</h6>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <Label className="text-base font-medium">{label}</Label>
                <div className="flex items-center flex-wrap space-x-2">
                    <Switch id={title.replace(/\s+/g, "-").toLowerCase()} />
                    <Label htmlFor={title.replace(/\s+/g, "-").toLowerCase()} className="text-sm">
                        On
                    </Label>
                </div>
            </div>
            <Textarea placeholder={placeholder} className="border border-neutral-300 px-5 dark:border-slate-500 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-12 !rounded-lg !shadow-none !ring-0 !h-[80px] !w-full" />
        </div>
    );
};
