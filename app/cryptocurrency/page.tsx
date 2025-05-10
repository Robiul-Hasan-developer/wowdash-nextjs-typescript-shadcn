import React from "react";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import StatsCard from "./components/stats-card";
import CoinAnalyticsCard from "./components/coin-analytics-card";
import MarketInfoCard from "./components/market-info-card";
import MyOrderCard from "./components/my-order-card";
import RecentTransactionCard from "./components/recent-transaction-card";
import UsersActivateCard from "./components/users-activate-card";
import TotalBalanceCard from "./components/total-balance-card";
import MasterCard from "./components/master-card";

const Cryptocurrency = () => {
  return (
    <>
      <DashboardBreadcrumb title="Dashboard" text="Cryptocurrecy" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-6">
        <StatsCard />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mt-6">
        <div className="xl:col-span-12 2xl:col-span-8">
          <div className="grid grid-cols-1 2xl:grid-cols-12 gap-6">
            <div className="col-span-12">
              <CoinAnalyticsCard />
            </div>

            <div className="col-span-12 2xl:col-span-6">
              <MarketInfoCard />
            </div>

            <div className="col-span-12 2xl:col-span-6">
              <MyOrderCard />
            </div>

            <div className="col-span-12">
              <RecentTransactionCard />
            </div>
          </div>
        </div>

        <div className="xl:col-span-12 2xl:col-span-4">
          <div className="space-y-6">
            <MasterCard />
            <TotalBalanceCard />
            <UsersActivateCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cryptocurrency;
