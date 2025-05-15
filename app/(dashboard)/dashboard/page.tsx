import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import StatCard from "./components/stat-card";
import SalesStaticCard from "./components/sales-static-card";
import TotalSubscriberCard from "./components/total-subscriber-card";
import UserOverviewCard from "./components/user-overview-card";
import TabsWithTableCard from "./components/tabs-with-table-card";
import TopPerformerCard from "./components/top-performer-card";
import GenerateContentCard from "./components/generate-content-card";
import TopCountriesCard from "./components/top-countries-card";

import { auth } from "@/auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import Logout from "@/components/auth/logout";

export default async function Page() {
  const session = await auth();

  if (!session?.user) redirect("/auth/login");

  if (!session || !session.user) {
    return <p className="text-lg">You are not signed in.</p>;
  }

  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-4">
          Welcome! {session.user.name}
        </h1>

        {session.user.image && (
          <Image
            src={session.user.image}
            className="rounded-full mb-4"
            width={56}
            height={56}
            alt={session.user.name ?? "User profile"}
          />
        )}

        <Logout />
      </div>

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
