import React from "react";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import DefaultCardComponent from "../components/default-card-component";

const DataTablePage = () => {
    return (
        <>
            <DashboardBreadcrumb title="Data Table" text="Data Table" />

            <DefaultCardComponent title="Card Tables">
                DataTableGoesHere
            </DefaultCardComponent>
        </>
    );
};
export default DataTablePage;
