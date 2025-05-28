import React from "react";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import DefaultCardComponent from "../../components/default-card-component";
import LineChart from "@/components/charts/line-chart";
import ZoomableChart from "@/components/charts/zoomable-chart";
import LineChartLabel from "@/components/charts/line-chart-label";

const LineChartPage = () => {
    return (
        <>
            <DashboardBreadcrumb title="Line Chart" text="Line Chart" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <DefaultCardComponent title="Default Line Chart">
                    <LineChart />
                </DefaultCardComponent>
                <DefaultCardComponent title="Zoomable Chart">
                    <ZoomableChart />
                </DefaultCardComponent>
                <DefaultCardComponent title="Line Chart with Data Labels">
                    <LineChartLabel />
                </DefaultCardComponent>
            </div>
        </>
    );
};
export default LineChartPage;
