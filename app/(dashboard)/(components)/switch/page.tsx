import React from "react";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import DefaultCardComponent from "../components/default-card-component";
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

const TypographyPage = () => {
  return (
    <>
      <DashboardBreadcrumb title="Switch" text="Switch" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <DefaultCardComponent title="Default Switch">
          <div className="flex items-center space-x-2">
            <Switch id="airplaneMode" />
            <Label htmlFor="airplaneMode">Airplane Mode</Label>
          </div>
        </DefaultCardComponent>

        <DefaultCardComponent title="Default Switch">
          DataContentGoesHereee
        </DefaultCardComponent>


      </div>
    </>
  );
};
export default TypographyPage;
