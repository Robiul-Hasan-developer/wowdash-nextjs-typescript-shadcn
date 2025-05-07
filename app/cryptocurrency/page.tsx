import React from 'react';
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import StatsCard from './components/stats-card';

const Cryptocurrency = () => {
    return (
        <>
            <DashboardBreadcrumb title="Dashboard" text="Cryptocurrecy"/>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-6">
                <StatsCard/>
            </div>
        </>
    );
};

export default Cryptocurrency;