import React from 'react';
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import RevenueReportCard from './component/revenue-report-card';
import CustomersStatisticsCard from './component/customers-statistics-card';
import RecentOrdersCard from './component/recent-orders-card';
import TransactionsCard from './component/transactions-card';
import DailySalesCard from './component/daily-sales-card';
import DistributionMapsCard from './component/distribution-maps-card';

const EcommercePage = () => {
  return (
    <>
        <DashboardBreadcrumb title="Dashboard" text="eCommerce"/>
      
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          <div className="md:col-span-12 2xl:col-span-9">
            <RevenueReportCard/>
          </div>

          <div className="md:col-span-12 lg:col-span-6 2xl:col-span-3">
            <CustomersStatisticsCard/>
          </div>
          
          <div className="md:col-span-12 lg:col-span-6 2xl:col-span-9">
            <RecentOrdersCard/>
          </div>
          
          <div className="md:col-span-12 lg:col-span-6 2xl:col-span-3">
            <TransactionsCard/>
          </div>

          <div className="md:col-span-12 lg:col-span-6 2xl:col-span-4">
            <DailySalesCard/>
          </div>
          

          <div className="md:col-span-12 lg:col-span-6 2xl:col-span-4">
            <DistributionMapsCard/>
          </div>
          
          
          
        </div>
    </>
  )
}
export default EcommercePage;