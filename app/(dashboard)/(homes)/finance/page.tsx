import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import LoadingSkeleton from "@/components/loading-skeleton";
import type { Metadata } from "next";
import { Suspense } from "react";
import StatisticsCard from "./components/statistics-card";

const metadata: Metadata = {
    title: "Finance & Banking Dashboard | WowDash Admin Panel",
    description:
        "Monitor financial transactions, manage accounts, and track banking performance with the Finance & Banking Dashboard in WowDash Admin Template built using Next.js and Tailwind.",
};

const FinancePage = () => {
    return (
        <>
            <DashboardBreadcrumb title="Finance & Banking" text="Finance & Banking" />

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">

            </div>


            <div className="gap-6 grid grid-cols-1 2xl:grid-cols-12">
                <div className="col-span-12">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <StatisticsCard />
                    </Suspense>
                </div>
            </div>
        </>
    );
};
export default FinancePage;
