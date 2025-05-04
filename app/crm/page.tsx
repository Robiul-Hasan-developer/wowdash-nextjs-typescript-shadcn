import DashboardBreadcrumb from '@/components/layout/dashboard-breadcrumb';
import React from 'react';
import StatsCard from './components/stats-card';
import RevenueGrowthCard from './components/revenue-growth-card';
import EarningStatisticsCard from './components/earning-statistics-card';
import CampaignCard from './components/campaign-card';
import CustomerOverviewCard from './components/customer-overview-card';

const crmPage = () => {
    return (
        <>
        <DashboardBreadcrumb title="Dashboard" text="CRM"/>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">

          <div className="lg:col-span-12 2xl:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <StatsCard/> 
            </div>
          </div>
          
          <div className="lg:col-span-12 2xl:col-span-4">
            <RevenueGrowthCard/>
          </div>

          <div className="lg:col-span-12 2xl:col-span-8">
            <EarningStatisticsCard/>
          </div>

          <div className="lg:col-span-12 2xl:col-span-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-6 2xl:col-span-12 col-xxl-12 col-sm-6">
                <CampaignCard/>
              </div>
              <div className="lg:col-span-6 2xl:col-span-12 col-xxl-12 col-sm-6">
                <CustomerOverviewCard/>
              </div>
            </div>
          </div>

        </div>
      </>
    );
};

export default crmPage;