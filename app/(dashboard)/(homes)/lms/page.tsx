import type { Metadata } from "next";
import React from "react";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import StatsCard from "@/app/(dashboard)/(homes)/lms/components/stats-card";
import { Suspense } from "react";
import LoadingSkeleton from "@/components/loading-skeleton";
import { Card, CardContent } from "@/components/ui/card";
import CustomSelect from "@/components/shared/custom-select";
import DoubleLineChart from "@/components/charts/double-line-chart";

const metadata: Metadata = {
    title: "LMS Dashboard | WowDash Admin Panel",
    description:
        "Manage courses, track student progress, and analyze learning outcomes with the LMS Dashboard in WowDash Admin Template built using Next.js and Tailwind.",
};


const InvestmentPage = () => {
    return (
        <>
            <DashboardBreadcrumb title="Dashboard" text="LMS / Learning System" />

            <div className="grid grid-cols-1 2xl:grid-cols-12 gap-6">
                <div className="col-span-12 2xl:col-span-8">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>

                        <Card className="card h-full rounded-lg border-0">
                            <CardContent className="card-body p-0">
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                                    <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                                        <StatsCard />
                                    </div>

                                    <div className="col-span-12 md:col-span-6 2xl:col-span-8">
                                        <div className="card-body p-0 h-full flex flex-col justify-between">
                                            <div className="">
                                                <div className="flex items-center flex-wrap gap-2 justify-between">
                                                    <h6 className="mb-2 font-bold text-lg">Average Enrollment Rate
                                                    </h6>
                                                    <div className="">
                                                        <CustomSelect
                                                            placeholder="Yearly"
                                                            options={["Yearly", "Monthly", "Weekly", "Today"]}
                                                        />
                                                    </div>
                                                </div>
                                                <ul className="flex flex-wrap items-center justify-center mt-8 gap-3">
                                                    <li className="flex items-center gap-2">
                                                        <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                                                        <span className="text-neutral-600 text-sm font-semibold">Paid Course:
                                                            <span className="text-primary-light font-bold">350</span>
                                                        </span>
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <span className="w-3 h-3 rounded-full bg-green-600"></span>
                                                        <span className="text-neutral-600 text-sm font-semibold">Free Course:
                                                            <span className="text-primary-light font-bold">70</span>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="mt-10 apexcharts-tooltip-style-1">
                                                <DoubleLineChart />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </Suspense>
                </div>
                <div className="col-span-12 md:col-span-6 2xl:col-span-4"></div>
            </div>
        </>
    );
};
export default InvestmentPage;
