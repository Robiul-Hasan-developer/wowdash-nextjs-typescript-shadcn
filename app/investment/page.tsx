import React from "react";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import StatsCard from "./components/stats-card";

const InvestmentPage = () => {
  return (
    <>
      <DashboardBreadcrumb title="Dashboard" text="Investment" />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-6">
        <StatsCard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        <div className="col-span-12 2xl:col-span-8">

        </div>
        <div className="col-span-12 lg:col-span-6 2xl:col-span-4"></div>
        <div className="col-span-12 lg:col-span-6 2xl:col-span-3"></div>
        <div className="col-span-12 lg:col-span-6 2xl:col-span-3"></div>
        <div className="col-span-12 lg:col-span-6 2xl:col-span-6"></div>
        <div className="col-span-12 lg:col-span-6 2xl:col-span-4"></div>
        <div className="col-span-12 lg:col-span-6 2xl:col-span-4"></div>
        <div className="col-span-12 2xl:col-span-4"></div>
      </div>
    </>
  );
};
export default InvestmentPage;
