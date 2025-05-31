import React from "react";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import DefaultCardComponent from "../components/default-card-component";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const TypographyPage = () => {
    return (
        <>
            <DashboardBreadcrumb title="Input From" text="Input From" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <DefaultCardComponent title="Default Inputs">
                    <div className="flex flex-col gap-4">
                        <div className="">
                            <Label htmlFor="basicInput" className="mb-2">Basic Input </Label>
                            <Input type="text" id="basicInput" className="border border-neutral-300 px-5 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-12 rounded-lg !shadow-none !ring-0" />
                        </div>
                        <div className="">
                            <Label htmlFor="InputWithPlaceholder" className="mb-2">Input With Placeholder </Label>
                            <Input type="email" id="InputWithPlaceholder" className="border border-neutral-300 px-5 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-12 rounded-lg !shadow-none !ring-0" placeholder="info@gmail.com" />
                        </div>
                        <div className="">
                            <Label htmlFor="InputWithPhone" className="mb-2">Input With Phone </Label>
                            <Input type="tel" id="InputWithPhone" className="border border-neutral-300 px-5 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-12 rounded-lg !shadow-none !ring-0" placeholder="+1 (555) 253-08515" />
                        </div>
                        <div className="">
                            <Label htmlFor="InputDate" className="mb-2">Input Date </Label>
                            <Input type="date" id="InputDate" className="border border-neutral-300 px-5 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-12 rounded-lg !shadow-none !ring-0" placeholder="Placeolder" />
                        </div>
                        <div className="">
                            <Label htmlFor="basicInput" className="mb-2">Basic Input </Label>
                            <Input type="text" id="basicInput" className="border border-neutral-300 px-5 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-12 rounded-lg !shadow-none !ring-0" placeholder="Placeolder" />
                        </div>
                    </div>
                </DefaultCardComponent>
            </div>
        </>
    );
};
export default TypographyPage;
