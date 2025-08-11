import type { Metadata } from "next";
import React from "react";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import { Suspense } from "react";
import LoadingSkeleton from "@/components/loading-skeleton";
import StatCards from "@/app/(dashboard)/(homes)/medical/components/stat-cards";
import EarningStatisticCard from "./components/earning-statistic-card";
import PatientVisitedDepartment from "./components/patient-visited-department";
import PatientVisitedGender from "./components/patient-visited-gender";
import DoctorListCard from "./components/doctor-list-card";
import LatestAppointmentsCard from "./components/latest-appointments-card";
import TotalIncomeCard from "./components/total-income-card";
import AvailableTreatmentsCard from "./components/available-treatments-card";
import HealthReportsDocumentCard from "./components/health-reports-document-card";

const metadata: Metadata = {
    title: "Medical Dashboard | WowDash Admin Panel",
    description:
        "Monitor patient data, manage appointments, and analyze healthcare metrics with the Medical Dashboard in WowDash Admin Template built using Next.js, Tailwind, and Shadcn UI.",
};

const MedicalPage = () => {
    return (
        <>
            <DashboardBreadcrumb title="Dashboard" text="Medical" />

            <div className="grid grid-cols-1 2xl:grid-cols-12 gap-6">

                <div className="col-span-12 2xl:col-span-9">
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
                        <div className="col-span-12 2xl:col-span-12">
                            <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                                <StatCards />
                            </Suspense>
                        </div>
                        <div className="col-span-12 2xl:col-span-12">
                            <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                                <EarningStatisticCard />
                            </Suspense>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                                <PatientVisitedDepartment />
                            </Suspense>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                                <PatientVisitedGender />
                            </Suspense>
                        </div>
                        <div className="col-span-12 2xl:col-span-4">
                            <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                                <DoctorListCard />
                            </Suspense>
                        </div>
                        <div className="col-span-12 2xl:col-span-8">
                            <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                                <LatestAppointmentsCard />
                            </Suspense>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 2xl:col-span-3">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        <div className="col-span-12 2xl:col-span-6 md:col-span-6 2xl:col-span-12">
                            <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                                <TotalIncomeCard />
                            </Suspense>
                        </div>
                        <div className="col-span-12 2xl:col-span-6 md:col-span-6 2xl:col-span-12">
                            <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                                <AvailableTreatmentsCard />
                            </Suspense>
                        </div>
                        <div className="col-span-12 2xl:col-span-6 md:col-span-6 2xl:col-span-12">
                            <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                                <HealthReportsDocumentCard />
                            </Suspense>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};
export default MedicalPage;
