import StatisticBarChart from "@/components/charts/statistic-bar-chart";
import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import LoadingSkeleton from "@/components/loading-skeleton";
import CustomSelect from "@/components/shared/custom-select";
import type { Metadata } from "next";
import { Suspense } from "react";
import AvailableRoom from "./components/available-room";
import BookingCountriesStatus from "./components/booking-countries-status";
import StatisticsCards from "./components/statistics-cards";

const metadata: Metadata = {
    title: "Booking System Dashboard | WowDash Admin Panel",
    description:
        "Manage reservations, track bookings, and streamline scheduling with the Booking System Dashboard in WowDash Admin Template built using Next.js and Tailwind.",
};

const FinancePage = () => {
    return (
        <>
            <DashboardBreadcrumb title="Booking System" text="Booking System" />

            <div className="mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">

                    <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                        <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                            <StatisticsCards />
                        </Suspense>
                    </div>

                    <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                        <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                            <AvailableRoom />
                        </Suspense>
                    </div>

                    <div className="col-span-12 2xl:col-span-4">
                        <div className="shadow-7 p-5 rounded-xl bg-white dark:bg-dark-2 h-full">
                            <div className="flex items-center flex-wrap gap-2 justify-between">
                                <h6 className="mb-0 font-bold text-lg">Booking Statistic</h6>
                                <CustomSelect
                                    placeholder="Monthly"
                                    options={["Monthly", "Weekly", "Yearly",]}
                                />
                            </div>
                            <div className="relative text-style label-bold">
                                <StatisticBarChart/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-6 xl:col-span-8">
                    
                </div>
                <div className="col-span-12 md:col-span-6 xl:col-span-4">
                    <div className="flex flex-col gap-6">
                        <BookingCountriesStatus/>
                    </div>
                </div>
            </div>

        </>
    );
};
export default FinancePage;
