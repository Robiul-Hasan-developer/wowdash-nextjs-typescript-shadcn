import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";

export default function Page() {
  return (
    <>
      <DashboardBreadcrumb title="ssd" text="AI"/>
      
      <div className="h-32 overflow-y-auto scrollbar-thin bg-neutral-50 hover:bg-neutral-100 max-w-[300px] scrollbar-invisible hover:scrollbar-visible">
        <h1 className="text-2xl font-bold"> This is Dashboard Page </h1>
      </div>
    </>
  )
}
