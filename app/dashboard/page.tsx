import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import StatCard from "./components/stat-card";

export default function Page() {
  return (
    <>
      <DashboardBreadcrumb title="Dashboard" text="AI"/>
      <StatCard/>
    </>
  )
}
