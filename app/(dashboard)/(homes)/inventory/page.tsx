import DashboardBreadcrumb from '@/components/layout/dashboard-breadcrumb';
import LoadingSkeleton from '@/components/loading-skeleton';
import type { Metadata } from "next";
import { Suspense } from "react";
import StateCards from './components/state-cards';

export const metadata: Metadata = {
    title: "POS & Inventory Management | WowDash Admin Panel",
    description:
        "Manage sales, track stock levels, and streamline operations with the POS & Inventory system in WowDash Admin Panel. Simplify transactions and optimize inventory control effortlessly.",
};


const InventorPage = () => {
    return (
        <>
            <DashboardBreadcrumb title="POS & Inventory" text="POS & Inventory" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                <div className="col-span-12">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <StateCards />
                    </Suspense>
                </div>

            </div>
        </>
    );
};

export default InventorPage;