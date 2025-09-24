import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import type { Metadata } from "next";

const metadata: Metadata = {
    title: "Finance & Banking Dashboard | WowDash Admin Panel",
    description:
        "Monitor financial transactions, manage accounts, and track banking performance with the Finance & Banking Dashboard in WowDash Admin Template built using Next.js and Tailwind.",
};

const FinancePage = () => {
    return (
        <>
            <DashboardBreadcrumb title="Finance & Banking" text="Finance & Banking" />

            <div className="gap-6 grid grid-cols-1 2xl:grid-cols-12">

            </div>
        </>
    );
};
export default FinancePage;
