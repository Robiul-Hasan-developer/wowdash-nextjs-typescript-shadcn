import type { Metadata } from "next";
import React from 'react';
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import RevenueReportCard from '@/app/(dashboard)/(homes)/ecommerce/component/revenue-report-card';
import CustomersStatisticsCard from '@/app/(dashboard)/(homes)/ecommerce/component/customers-statistics-card';
import RecentOrdersCard from '@/app/(dashboard)/(homes)/ecommerce/component/recent-orders-card';
import TransactionsCard from '@/app/(dashboard)/(homes)/ecommerce/component/transactions-card';
import DailySalesCard from '@/app/(dashboard)/(homes)/ecommerce/component/daily-sales-card';
import DistributionMapsCard from '@/app/(dashboard)/(homes)/ecommerce/component/distribution-maps-card';
import TopCustomersCard from '@/app/(dashboard)/(homes)/ecommerce/component/top-customers-card';
import TopSellingProductCard from '@/app/(dashboard)/(homes)/ecommerce/component/top-selling-product-card';
import StockReportCard from '@/app/(dashboard)/(homes)/ecommerce/component/stock-report-card';

const metadata: Metadata = {
  title: "E-commerce Dashboard | WowDash Admin Panel",
  description:
    "Manage orders, monitor sales, and track product performance with the E-commerce Dashboard in WowDash Admin Template.",
};


const EcommercePage = () => {
  return (
    <>
      <DashboardBreadcrumb title="Dashboard" text="eCommerce" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

        <div className="md:col-span-12 2xl:col-span-9">
          <RevenueReportCard />
        </div>

        <div className="md:col-span-12 lg:col-span-6 2xl:col-span-3">
          <CustomersStatisticsCard />
        </div>

        <div className="md:col-span-12 lg:col-span-6 2xl:col-span-9">
          <RecentOrdersCard />
        </div>

        <div className="md:col-span-12 lg:col-span-6 2xl:col-span-3">
          <TransactionsCard />
        </div>

        <div className="md:col-span-12 lg:col-span-6 2xl:col-span-4">
          <DailySalesCard />
        </div>

        <div className="md:col-span-12 lg:col-span-6 2xl:col-span-4">
          <DistributionMapsCard />
        </div>

        <div className="md:col-span-12 lg:col-span-6 2xl:col-span-4">
          <TopCustomersCard />
        </div>

        <div className="md:col-span-12 2xl:col-span-6">
          <TopSellingProductCard />
        </div>

        <div className="md:col-span-12 2xl:col-span-6">
          <StockReportCard />
        </div>

      </div>
    </>
  )
}
export default EcommercePage;