import React from "react";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import DefaultCardComponent from "@/app/(dashboard)/components/default-card-component";
import RecentOrdersTable from "@/components/table/recent-orders-table";
import TopSellingProductTable from "@/components/table/top-selling-product-table";
import BorderedTable from "@/components/table/bordered-table";
import DefaultTable from "@/components/table/default-table";
import BorderedColorTable from "@/components/table/bordered-color-table";

const BasicTablePage = () => {
    return (
        <>
            <DashboardBreadcrumb title="Basic Table" text="Basic Table" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-6">
                    <DefaultCardComponent title="Default Table">
                        <DefaultTable />
                    </DefaultCardComponent>
                </div>
                <div className="col-span-12 lg:col-span-6">
                    <DefaultCardComponent title="Bordered Tables">
                        <BorderedTable />
                    </DefaultCardComponent>
                </div>
                <div className="col-span-12 lg:col-span-6">
                    <DefaultCardComponent title="Tables Border Colors">
                        <BorderedColorTable />
                    </DefaultCardComponent>
                </div>
                <div className="col-span-12 lg:col-span-6">
                    <DefaultCardComponent title="Striped Rows">
                        <TopSellingProductTable />
                    </DefaultCardComponent>
                </div>
                <div className="col-span-12">
                    <DefaultCardComponent title="Card Tables">
                        <RecentOrdersTable />
                    </DefaultCardComponent>
                </div>
            </div>
        </>
    );
};
export default BasicTablePage;
