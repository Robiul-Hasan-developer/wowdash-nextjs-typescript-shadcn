import React from "react";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import StatsCard from "./components/stats-card";
import RevenueStatisticsCard from "./revenue-statistics-card";
import StaticCard from "./components/static-card";
import MostLocationCard from "./components/most-location-card";
import MyPortfolioCard from "./components/my-portfolio-card";

const InvestmentPage = () => {
  return (
    <>
      <DashboardBreadcrumb title="Dashboard" text="Investment" />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-6">
        <StatsCard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        <div className="col-span-12 2xl:col-span-8">
          <RevenueStatisticsCard />
        </div>
        <div className="col-span-12 lg:col-span-6 2xl:col-span-4">
          <StaticCard />
        </div>
        <div className="col-span-12 lg:col-span-6 2xl:col-span-3">
          <MostLocationCard />
        </div>
        <div className="col-span-12 lg:col-span-6 2xl:col-span-3">
          <MyPortfolioCard />
        </div>
        <div className="col-span-12 lg:col-span-6 2xl:col-span-6">
          {/* <RevenueStatisticsCard /> */}
        </div>
        <div className="col-span-12 lg:col-span-6 2xl:col-span-4">
          {/* <RevenueStatisticsCard /> */}
        </div>
        <div className="col-span-12 lg:col-span-6 2xl:col-span-4">
          {/* <RevenueStatisticsCard /> */}
        </div>
        <div className="col-span-12 2xl:col-span-4">
          {/* <RevenueStatisticsCard /> */}
        </div>
      </div>
    </>
  );
};
export default InvestmentPage;
