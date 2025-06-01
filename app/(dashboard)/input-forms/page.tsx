import React from "react";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import DefaultCardComponent from "../components/default-card-component";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DatePicker } from "@/components/shared/date-picker";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import PaymentIcon from "@/public/assets/images/card/payment-icon.png";
import { Mail, Copy } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

const InputForms = () => {
    return (
        <>
            <DashboardBreadcrumb title="Input From" text="Input From" />

            <div className="grid grid-cols-12 gap-5">
                <div className="md:col-span-6 col-span-12 space-y-6">
                    <div className="h-auto">
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
                                    <DatePicker />
                                </div>
                                <div className="">
                                    <Label htmlFor="InputWithPayment" className="mb-2">Input with Payment </Label>
                                    <div className="flex">
                                        <div className="shrink-0 flex px-2 -ms-[0px] flex items-center justify-center w-[56px] border border-neutral-300 border-e-0 rounded-s-lg rounded-e-none">
                                            <Image src={PaymentIcon} alt="Image" />
                                        </div>
                                        <Input type="text" id="InputWithPayment" className="border border-neutral-300 px-5 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-12 rounded-e-lg rounded-s-none !shadow-none !ring-0" placeholder="Card Number" />
                                    </div>
                                </div>
                            </div>
                        </DefaultCardComponent>
                    </div>
                    <div className="">
                        <DefaultCardComponent title="Input Group">
                            <div className="flex flex-col gap-4">
                                <div className="">
                                    <Label htmlFor="MyInput" className="mb-2">Input </Label>
                                    <div className="flex">
                                        <div className="shrink-0 flex px-2 -ms-[0px] flex items-center justify-center w-[42px] border border-neutral-300 border-e-0 rounded-s-lg rounded-e-none">
                                            <Mail className="w-4" />
                                        </div>
                                        <Input type="text" id="MyInput" className="border border-neutral-300 px-5 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-12 rounded-e-lg rounded-s-none !shadow-none !ring-0" placeholder="info@gmail.com" />
                                    </div>
                                </div>
                                <div className="">
                                    <Label htmlFor="MyInputOne" className="mb-2">Input </Label>
                                    <div className="flex">
                                        <div className="shrink-0 flex px-2 -ms-[0px] flex items-center justify-center border border-neutral-300 border-e-0 rounded-s-lg rounded-e-none">
                                            <Select>
                                                <SelectTrigger className="border-0 bg-transparent px-1 text-sm dark:text-white focus:ring-0 focus:ring-offset-0 !h-full">
                                                    <SelectValue placeholder="US" />
                                                </SelectTrigger>
                                                <SelectContent className="bg-white dark:bg-neutral-700">
                                                    <SelectItem value="US">US</SelectItem>
                                                    <SelectItem value="BD">BD</SelectItem>
                                                    <SelectItem value="AUS">AUS</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <Input type="text" id="MyInputOne" className="border border-neutral-300 px-5 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-12 rounded-e-lg rounded-s-none !shadow-none !ring-0" placeholder="info@gmail.com" />
                                    </div>
                                </div>
                                <div className="">
                                    <Label htmlFor="MyInputTwo" className="mb-2">Input </Label>
                                    <div className="flex">
                                        <Input type="text" id="MyInputTwo" className="border border-neutral-300 px-5 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-12 rounded-s-lg rounded-e-none !shadow-none !ring-0" placeholder="info@gmail.com" />
                                        <div className="shrink-0 flex px-2 -ms-[0px] flex items-center justify-center border border-neutral-300 border-s-0 rounded-e-lg rounded-s-none">
                                            <Select>
                                                <SelectTrigger className="border-0 bg-transparent px-1 text-sm dark:text-white focus:ring-0 focus:ring-offset-0 !h-full">
                                                    <SelectValue placeholder="US" />
                                                </SelectTrigger>
                                                <SelectContent className="bg-white dark:bg-neutral-700">
                                                    <SelectItem value="US">US</SelectItem>
                                                    <SelectItem value="BD">BD</SelectItem>
                                                    <SelectItem value="AUS">AUS</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <Label htmlFor="MyInputHttps" className="mb-2">Input </Label>
                                    <div className="flex">
                                        <div className="shrink-0 flex px-2 -ms-[0px] flex items-center justify-center border border-neutral-300 border-e-0 rounded-s-lg rounded-e-none">
                                            http://
                                        </div>
                                        <Input type="url" id="MyInputHttps" className="border border-neutral-300 px-5 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-12 rounded-e-lg rounded-s-none !shadow-none !ring-0" placeholder="www.random.com" />
                                    </div>
                                </div>
                                <div className="">
                                    <Label htmlFor="MyInputTwoCopy" className="mb-2">Input </Label>
                                    <div className="flex">
                                        <Input type="text" id="MyInputTwoCopy" className="border border-neutral-300 px-5 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-12 rounded-s-lg rounded-e-none !shadow-none !ring-0" placeholder="www.random.com" />
                                        <div className="shrink-0 flex px-2 -ms-[0px] flex items-center justify-center border border-neutral-300 border-s-0 rounded-e-lg rounded-s-none">
                                            <div className="flex items-center gap-2">
                                                <Copy className="w-4" />
                                                Copy
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm mt-4 mb-0">This is a hint text to help user.</p>
                                </div>
                            </div>
                        </DefaultCardComponent>
                    </div>
                </div>

            </div>
        </>
    );
};
export default InputForms;