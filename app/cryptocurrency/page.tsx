import React from 'react';
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import StatsCard from './components/stats-card';
import CoinAnalyticsCard from './components/coin-analytics-card';
import MarketInfoCard from './components/market-info-card';

const Cryptocurrency = () => {
    return (
        <>
            <DashboardBreadcrumb title="Dashboard" text="Cryptocurrecy"/>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-6">
                <StatsCard/>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mt-6">

                <div className="xl:col-span-12 2xl:col-span-8">
                    <div className="grid grid-cols-1 2xl:grid-cols-12 gap-6">

                        <div className="col-span-12">
                            <CoinAnalyticsCard/>
                        </div>

                        <div className="col-span-12 2xl:col-span-6">
                            <MarketInfoCard/>
                        </div>

                    </div>  
                </div>  



                <div className="xl:col-span-12 2xl:col-span-4">
                    <div> Hello From sidbear </div>
                </div>

            </div>  
        </>
    );
};

export default Cryptocurrency;