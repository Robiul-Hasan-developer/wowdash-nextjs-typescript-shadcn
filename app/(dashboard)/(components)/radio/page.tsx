import React from "react";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import DefaultCardComponent from "../components/default-card-component";

const TypographyPage = () => {
  return (
    <>
      <DashboardBreadcrumb title="List" text="List" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <DefaultCardComponent title="Default List">
          DataContentGoesHeeee
        </DefaultCardComponent>

      </div>
    </>
  );
};
export default TypographyPage;
