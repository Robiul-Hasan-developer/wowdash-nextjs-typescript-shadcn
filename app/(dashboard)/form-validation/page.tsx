// import React from "react";
// import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
// import DefaultCardComponent from "../components/default-card-component";
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
// } from "@/components/ui/select";
// import { Mail, UserRound, PhoneCall, Lock } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";

// const FormValidation = () => {
//     return (
//         <>
//             <DashboardBreadcrumb title="Input Layout" text="Input Layout" />

//             <div className="grid grid-cols-12 gap-5">
//                 <div className="md:col-span-6 col-span-12">
//                     <DefaultCardComponent title="Vertical Input Form">
//                         <div className="flex flex-col gap-4">
//                             <div className="">
//                                 <Label htmlFor="FirstName" className="text-[#4b5563] mb-2">First Name </Label>
//                                 <Input type="text" id="FirstName" className="border border-neutral-300 px-5 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-12 rounded-lg !shadow-none !ring-0" placeholder="First Name" />
//                             </div>
//                             <div className="">
//                                 <Label htmlFor="LastName" className="text-[#4b5563] mb-2">Last Name </Label>
//                                 <Input type="text" id="LastName" className="border border-neutral-300 px-5 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-12 rounded-lg !shadow-none !ring-0" placeholder="Last Name" />
//                             </div>
//                             <div className="">
//                                 <Label htmlFor="UserEmail" className="text-[#4b5563] mb-2"> Email </Label>
//                                 <Input type="email" id="UserEmail" className="border border-neutral-300 px-5 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-12 rounded-lg !shadow-none !ring-0" placeholder="Enter Email" />
//                             </div>
//                             <div className="">
//                                 <Label htmlFor="InputWithPhone" className="text-[#4b5563] mb-2">Input with Phone </Label>
//                                 <div className="flex">
//                                     <div className="shrink-0 flex px-2 -ms-[0px] flex items-center justify-center border border-neutral-300 border-e-0 rounded-s-lg rounded-e-none">
//                                         <Select>
//                                             <SelectTrigger className="border-0 bg-transparent px-1 text-sm dark:text-white focus:ring-0 focus:ring-offset-0 !h-full">
//                                                 <SelectValue placeholder="US" />
//                                             </SelectTrigger>
//                                             <SelectContent className="bg-white dark:bg-neutral-700">
//                                                 <SelectItem value="US">US</SelectItem>
//                                                 <SelectItem value="BD">BD</SelectItem>
//                                                 <SelectItem value="AUS">AUS</SelectItem>
//                                             </SelectContent>
//                                         </Select>
//                                     </div>
//                                     <Input type="tel" id="InputWithPhone" className="border border-neutral-300 px-5 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-12 rounded-e-lg rounded-s-none !shadow-none !ring-0" placeholder="+1 (555) 000-0000" />
//                                 </div>
//                             </div>
//                             <div className="">
//                                 <Label htmlFor="password" className="text-[#4b5563] mb-2"> Password </Label>
//                                 <Input type="password" id="password" className="border border-neutral-300 px-5 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-12 rounded-lg !shadow-none !ring-0" placeholder="******" />
//                             </div>
//                             <div className="">
//                                 <Button variant="default" className={cn("h-12 px-8")}>Submit</Button>
//                             </div>
//                         </div>
//                     </DefaultCardComponent>
//                 </div>

//                 <div className="md:col-span-6 col-span-12">
//                     <DefaultCardComponent title="Input Form With Icons">
//                         <div className="flex flex-col gap-4">
//                             <div className="">
//                                 <Label htmlFor="FirstName" className="text-[#4b5563] mb-2">First Name </Label>
//                                 <div className="relative">
//                                     <Input type="text" id="FirstName" className="border border-neutral-300 ps-12 pe-12 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-12 rounded-lg !shadow-none !ring-0" placeholder="First Name" />
//                                     <UserRound className="absolute start-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-700 dark:text-neutral-200" />
//                                 </div>
//                             </div>
//                             <div className="">
//                                 <Label htmlFor="LastName" className="text-[#4b5563] mb-2">Last Name </Label>
//                                 <div className="relative">
//                                     <Input type="text" id="LastName" className="border border-neutral-300 ps-12 pe-12 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-12 rounded-lg !shadow-none !ring-0" placeholder="Last Name" />
//                                     <UserRound className="absolute start-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-700 dark:text-neutral-200" />
//                                 </div>
//                             </div>
//                             <div className="">
//                                 <Label htmlFor="UserEmail" className="text-[#4b5563] mb-2"> Email </Label>
//                                 <div className="relative">
//                                     <Input type="email" id="UserEmail" className="border border-neutral-300 ps-12 pe-12 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-12 rounded-lg !shadow-none !ring-0" placeholder="Enter Email" />
//                                     <Mail className="absolute start-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-700 dark:text-neutral-200" />
//                                 </div>
//                             </div>
//                             <div className="">
//                                 <Label htmlFor="myPhone" className="text-[#4b5563] mb-2"> Phone </Label>
//                                 <div className="relative">
//                                     <Input type="tel" id="myPhone" className="border border-neutral-300 ps-12 pe-12 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-12 rounded-lg !shadow-none !ring-0" placeholder="+1 (555) 000-0000" />
//                                     <PhoneCall className="absolute start-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-700 dark:text-neutral-200" />
//                                 </div>
//                             </div>
//                             <div className="">
//                                 <Label htmlFor="password" className="text-[#4b5563] mb-2"> Password </Label>
//                                 <div className="relative">
//                                     <Input type="password" id="password" className="border border-neutral-300 ps-12 pe-12 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-600 focus-visible:border-blue-600 h-12 rounded-lg !shadow-none !ring-0" placeholder="******" />
//                                     <Lock className="absolute start-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-700 dark:text-neutral-200" />
//                                 </div>
//                             </div>
//                             <div className="">
//                                 <Button variant="default" className={cn("h-12 px-8")}>Submit</Button>
//                             </div>
//                         </div>
//                     </DefaultCardComponent>
//                 </div>
//             </div>
//         </>
//     );
// };
// export default FormValidation;


"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import DefaultCardComponent from "../components/default-card-component";
import { cn } from "@/lib/utils";
import { formSchema, FormSchemaType } from "@/lib/zod";

const FormValidation = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormSchemaType>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data: FormSchemaType) => {
        console.log("Form submitted:", data);
    };

    return (
        <>
            <DashboardBreadcrumb title="Input Layout" text="Input Layout" />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-12 gap-5">
                    <div className="md:col-span-6 col-span-12">
                        <DefaultCardComponent title="Vertical Input Form">
                            <div className="flex flex-col gap-4">
                                {/* First Name */}
                                <div>
                                    <Label htmlFor="firstName" className="mb-2">
                                        First Name
                                    </Label>
                                    <Input id="firstName" placeholder="First Name" {...register("firstName")} />
                                    {errors.firstName && (
                                        <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                                    )}
                                </div>

                                {/* Last Name */}
                                <div>
                                    <Label htmlFor="lastName" className="mb-2">
                                        Last Name
                                    </Label>
                                    <Input id="lastName" placeholder="Last Name" {...register("lastName")} />
                                    {errors.lastName && (
                                        <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <Label htmlFor="email" className="mb-2">
                                        Email
                                    </Label>
                                    <Input id="email" type="email" placeholder="Enter Email" {...register("email")} />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                                    )}
                                </div>

                                {/* Phone */}
                                <div>
                                    <Label htmlFor="phone" className="mb-2">
                                        Phone
                                    </Label>
                                    <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" {...register("phone")} />
                                    {errors.phone && (
                                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                                    )}
                                </div>

                                {/* Password */}
                                <div>
                                    <Label htmlFor="password" className="mb-2">
                                        Password
                                    </Label>
                                    <Input id="password" type="password" placeholder="******" {...register("password")} />
                                    {errors.password && (
                                        <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                                    )}
                                </div>

                                <div>
                                    <Button type="submit" className={cn("h-12 px-8")}>
                                        Submit
                                    </Button>
                                </div>
                            </div>
                        </DefaultCardComponent>
                    </div>
                </div>
            </form>
        </>
    );
};

export default FormValidation;
