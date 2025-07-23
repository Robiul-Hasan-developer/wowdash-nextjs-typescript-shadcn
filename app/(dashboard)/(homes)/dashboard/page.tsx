import type { Metadata } from "next";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import StatCard from "@/app/(dashboard)/(homes)/dashboard/components/stat-card";
import SalesStaticCard from "@/app/(dashboard)/(homes)/dashboard/components/sales-static-card";
import TotalSubscriberCard from "@/app/(dashboard)/(homes)/dashboard/components/total-subscriber-card";
import UserOverviewCard from "@/app/(dashboard)/(homes)/dashboard/components/user-overview-card";
import TabsWithTableCard from "@/app/(dashboard)/(homes)/dashboard/components/tabs-with-table-card";
import TopPerformerCard from "@/app/(dashboard)/(homes)/dashboard/components/top-performer-card";
import GenerateContentCard from "@/app/(dashboard)/(homes)/dashboard/components/generate-content-card";
import TopCountriesCard from "@/app/(dashboard)/(homes)/dashboard/components/top-countries-card";

export const metadata: Metadata = {
  title: "AI Dashboard | WowDash Admin Panel",
  description:
    "Explore AI analytics, monitor model performance, and track intelligent automation workflows in the AI Dashboard of WowDash Admin Template.",
};


export default async function DashboardPage() {
  return (
    <>
      <DashboardBreadcrumb title="Dashboard" text="AI" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-6">
        <StatCard />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mt-6">
        <div className="xl:col-span-12 2xl:col-span-6">
          <SalesStaticCard />
        </div>

        <div className="xl:col-span-6 2xl:col-span-3">
          <TotalSubscriberCard />
        </div>

        <div className="xl:col-span-6 2xl:col-span-3">
          <UserOverviewCard />
        </div>

        <div className="xl:col-span-12 2xl:col-span-9">
          <TabsWithTableCard />
        </div>

        <div className="xl:col-span-12 2xl:col-span-3">
          <TopPerformerCard />
        </div>

        <div className="xl:col-span-12 2xl:col-span-6">
          <TopCountriesCard />
        </div>

        <div className="xl:col-span-12 2xl:col-span-6">
          <GenerateContentCard />
        </div>
      </div>
    </>
  );
}
