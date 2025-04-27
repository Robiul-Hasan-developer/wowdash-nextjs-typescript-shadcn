import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import StatCard from "./components/stat-card";
import salesStaticChart from './components/sales-static-chart';

export default function Page() {
  return (
    <>
      <DashboardBreadcrumb title="Dashboard" text="AI"/>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-6">
        <StatCard/>
      </div>
      
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mt-6">
        <salesStaticChart/>
      </div>
    </>
  )
}
