import type { Metadata } from "next";
import React from "react";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import StatsCard from "@/app/(dashboard)/(homes)/investment/components/stats-card";
import RevenueStatisticsCard from "@/app/(dashboard)/(homes)/investment/components/revenue-statistics-card";
import StaticCard from "@/app/(dashboard)/(homes)/investment/components/static-card";
import MostLocationCard from "@/app/(dashboard)/(homes)/investment/components/most-location-card";
import MyPortfolioCard from "@/app/(dashboard)/(homes)/investment/components/my-portfolio-card";
import LatestInvestmentsCard from "@/app/(dashboard)/(homes)/investment/components/latest-investments-card";
import NoticeBoardCard from "@/app/(dashboard)/(homes)/investment/components/notice-board-card";
import TotalTransactionsCard from "@/app/(dashboard)/(homes)/investment/components/total-transactions-card";
import ProjectStatusCard from "@/app/(dashboard)/(homes)/investment/components/project-status-card";

const metadata: Metadata = {
  title: "Investment Dashboard | WowDash Admin Panel",
  description:
    "Track investment portfolios, returns, and market insights in the Investment Dashboard of WowDash Admin Template built with Next.js and Tailwind.",
};


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
          <LatestInvestmentsCard />
        </div>
        <div className="col-span-12 lg:col-span-6 2xl:col-span-4">
          <NoticeBoardCard />
        </div>
        <div className="col-span-12 lg:col-span-6 2xl:col-span-4">
          <TotalTransactionsCard />
        </div>
        <div className="col-span-12 2xl:col-span-4">
          <ProjectStatusCard />
        </div>
      </div>
    </>
  );
};
export default InvestmentPage;
