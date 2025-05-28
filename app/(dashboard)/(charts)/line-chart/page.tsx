import React from "react";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import DefaultCardComponent from "../../components/default-card-component";

const LineChartPage = () => {
    return (
        <>
            <DashboardBreadcrumb title="Line Chart" text="Line Chart" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <DefaultCardComponent title="Default Line Chart">
                    CardContentGoesHere
                </DefaultCardComponent>
            </div>
        </>
    );
};
export default LineChartPage;
