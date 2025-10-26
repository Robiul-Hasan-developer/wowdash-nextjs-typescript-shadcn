import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import LoadingSkeleton from "@/components/loading-skeleton";
import CommonLink from "@/components/shared/common-link";
import type { Metadata } from "next";
import { Suspense } from "react";
import CountriesStatusCard from "../crm/components/countries-status-card";
import AudienceStatsCard from "./components/audience-stats-card";
import TotalPodcasts from "./components/total-podcasts";
import TotalUsers from "./components/total-users";

const metadata: Metadata = {
  title: "Podcast Dashboard | Manage Shows, Episodes & Analytics - WowDash Admin Panel",
  description:
    "Easily manage podcast shows, episodes, guests, and performance analytics with the Podcast Dashboard in WowDash Admin Template. Built using Next.js, Tailwind CSS, and ShadCN UI for seamless performance and modern design.",
};

const podcastPage = () => {
    return (
        <>
            <DashboardBreadcrumb title="Podcast" text="Podcast" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-5 2xl:col-span-4">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        <div className="col-span-12 md:col-span-6 lg:col-span-12">
                            <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                                <TotalUsers />
                            </Suspense>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-12">
                            <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                                <TotalPodcasts />
                            </Suspense>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-7 2xl:col-span-8">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <AudienceStatsCard />
                    </Suspense>
                </div>
                <div className="col-span-12 lg:col-span-4">
                    <div className="bg-white dark:bg-dark-2 rounded-xl py-5 px-6 shadow h-full mb-5">
                        <div className="flex items-center flex-wrap gap-2 justify-between">
                            <h6 className="mb-0 font-bold text-lg">Earnings Overview</h6>
                            <select
                                className="form-select form-select-sm w-auto bg-white dark:bg-dark-2 border text-neutral-600 dark:text-neutral-200 radius-8">
                                <option>Yearly</option>
                                <option>Monthly</option>
                                <option>Weekly</option>
                                <option>Today</option>
                            </select>
                        </div>
                        <ul className="flex flex-wrap items-center justify-center mt-6 gap-4">
                            <li className="flex items-center gap-2">
                                <span className="w-[8px] h-[8px] rounded-[50%] bg-blue-600"></span>
                                <span className="text-neutral-600 dark:text-neutral-200 text-sm font-medium d-inline-flex items-center gap-1">
                                    Income:
                                    <span className="text-blue-light text-xl font-bold">$26,201</span>
                                </span>
                                <div className="flex items-center gap-1 font-semibold text-green-600 dark:text-green-500">
                                    <span className="text-green-600 dark:text-green-500">10%</span>
                                    <i className="ri-arrow-up-s-fill"></i>
                                </div>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <div id="revenueChart" className="apexcharts-tooltip-style-1"></div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-8">
                    <div className="bg-white dark:bg-dark-2 rounded-xl py-5 px-6 shadow h-full">
                        <div
                            className="flex items-center flex-wrap gap-2 justify-between border-b border-neutral-200 dark:border-neutral-600 mb-6 pb-4">
                            <h6 className="mb-0 font-bold text-lg">Recently Played</h6>
                            <CommonLink />
                        </div>
                        <div className="mt-5">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                                <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                                    <div className="">
                                        <div className="radius-8 overflow-hidden relative">
                                            <img src="assets/images/home-fourteen/podcast-img1.png" alt="Thumb"
                                                className="w-full h-full object-fit-cover" />
                                            <a href="javascript:void(0)"
                                                className="w-[28px] h-[24px] text-white bg-white bg-opacity-50 flex justify-center items-center absolute start-0 bottom-0 ms-2.5 mb-2.5 rounded-md hover:bg-white hover:text-[#000] text-lg">
                                                <i className="ri-play-fill leading-none flex"></i>
                                            </a>
                                        </div>
                                        <div className="mt-3">
                                            <h6 className="text-base mb-0">Talk show </h6>
                                            <span className="text-sm text-neutral-600 dark:text-neutral-200">Esther Howard</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                                    <div className="">
                                        <div className="radius-8 overflow-hidden relative">
                                            <img src="assets/images/home-fourteen/podcast-img2.png" alt="Thumb"
                                                className="w-full h-full object-fit-cover" />
                                            <a href="javascript:void(0)"
                                                className="w-[28px] h-[24px] text-white bg-white bg-opacity-50 flex justify-center items-center absolute start-0 bottom-0 ms-2.5 mb-2.5 rounded-md hover:bg-white hover:text-[#000] text-lg">
                                                <i className="ri-play-fill leading-none flex"></i>
                                            </a>
                                        </div>
                                        <div className="mt-3">
                                            <h6 className="text-base mb-0">Change Life Style </h6>
                                            <span className="text-sm text-neutral-600 dark:text-neutral-200">Cameron Williamson</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                                    <div className="">
                                        <div className="radius-8 overflow-hidden relative">
                                            <img src="assets/images/home-fourteen/podcast-img3.png" alt="Thumb"
                                                className="w-full h-full object-fit-cover" />
                                            <a href="javascript:void(0)"
                                                className="w-[28px] h-[24px] text-white bg-white bg-opacity-50 flex justify-center items-center absolute start-0 bottom-0 ms-2.5 mb-2.5 rounded-md hover:bg-white hover:text-[#000] text-lg">
                                                <i className="ri-play-fill leading-none flex"></i>
                                            </a>
                                        </div>
                                        <div className="mt-3">
                                            <h6 className="text-base mb-0">Neon Lights</h6>
                                            <span className="text-sm text-neutral-600 dark:text-neutral-200">Leslie Alexander</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                                    <div className="">
                                        <div className="radius-8 overflow-hidden relative">
                                            <img src="assets/images/home-fourteen/podcast-img4.png" alt="Thumb"
                                                className="w-full h-full object-fit-cover" />
                                            <a href="javascript:void(0)"
                                                className="w-[28px] h-[24px] text-white bg-white bg-opacity-50 flex justify-center items-center absolute start-0 bottom-0 ms-2.5 mb-2.5 rounded-md hover:bg-white hover:text-[#000] text-lg">
                                                <i className="ri-play-fill leading-none flex"></i>
                                            </a>
                                        </div>
                                        <div className="mt-3">
                                            <h6 className="text-base mb-0">Product Design</h6>
                                            <span className="text-sm text-neutral-600 dark:text-neutral-200">Bessie Cooper</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 2xl:col-span-8">
                    <div className="shadow-7 rounded-xl bg-white dark:bg-dark-2 h-full overflow-hidden">
                        <div
                            className="card-header border-b bg-white dark:bg-dark-2 py-4 px-6 flex items-center justify-between">
                            <h6 className="text-lg font-semibold mb-0">Recent Purchase Plan</h6>
                            <CommonLink />
                        </div>
                        <div className="card-body p-0">
                            <div className="table-responsive scroll-sm">
                                <table className="table bordered-table table-py-2 mb-0 rounded-0 border-0">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="rounded-0">User</th>
                                            <th scope="col" className="rounded-0">Amount</th>
                                            <th scope="col" className="rounded-0">StartDate</th>
                                            <th scope="col" className="rounded-0">End Date</th>
                                            <th scope="col" className="rounded-0">Duration</th>
                                            <th scope="col" className="rounded-0 text-center">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="text-neutral-600 dark:text-neutral-200">
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[40px] h-[40px] rounded overflow-hidden rounded-[50%]">
                                                        <img src="assets/images/user-grid/user-grid-img5.png" alt="Avatar"
                                                            className="w-full h-full object-fit-cover" />
                                                    </span>
                                                    <span className="text-neutral-600 dark:text-neutral-200">Dianne Russell</span>
                                                </div>
                                            </td>
                                            <td className="text-neutral-600 dark:text-neutral-200">$29.00</td>
                                            <td className="text-neutral-600 dark:text-neutral-200">Jan 10, 2025</td>
                                            <td className="text-neutral-600 dark:text-neutral-200">Feb 10, 2025</td>
                                            <td className="text-neutral-600 dark:text-neutral-200">1 Month</td>
                                            <td className="text-center">
                                                <span
                                                    className="bg-green-100 text-green-600 dark:text-green-600 px-4 py-1 rounded font-medium text-sm">Basic</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-neutral-600 dark:text-neutral-200">
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[40px] h-[40px] rounded overflow-hidden rounded-[50%]">
                                                        <img src="assets/images/user-grid/user-grid-img4.png" alt="Avatar"
                                                            className="w-full h-full object-fit-cover" />
                                                    </span>
                                                    <span className="text-neutral-600 dark:text-neutral-200">Cody Fisher</span>
                                                </div>
                                            </td>
                                            <td className="text-neutral-600 dark:text-neutral-200">$$99.00</td>
                                            <td className="text-neutral-600 dark:text-neutral-200">Feb 10, 2025</td>
                                            <td className="text-neutral-600 dark:text-neutral-200">April 10, 2025</td>
                                            <td className="text-neutral-600 dark:text-neutral-200">3 Month</td>
                                            <td className="text-center">
                                                <span
                                                    className="bg-yellow-100 text-yellow-600 dark:text-yellow-600 px-4 py-1 rounded font-medium text-sm">Standard</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-neutral-600 dark:text-neutral-200">
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[40px] h-[40px] rounded overflow-hidden rounded-[50%]">
                                                        <img src="assets/images/user-grid/user-grid-img3.png" alt="Avatar"
                                                            className="w-full h-full object-fit-cover" />
                                                    </span>
                                                    <span className="text-neutral-600 dark:text-neutral-200">Ronald Richards</span>
                                                </div>
                                            </td>
                                            <td className="text-neutral-600 dark:text-neutral-200">$499.00</td>
                                            <td className="text-neutral-600 dark:text-neutral-200">Jan 10, 2025</td>
                                            <td className="text-neutral-600 dark:text-neutral-200">Jan 10, 2026</td>
                                            <td className="text-neutral-600 dark:text-neutral-200">1 Year</td>
                                            <td className="text-center">
                                                <span
                                                    className="bg-cyan-100 text-cyan-600 dark:text-cyan-600 px-4 py-1 rounded font-medium text-sm">Premium
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-neutral-600 dark:text-neutral-200">
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[40px] h-[40px] rounded overflow-hidden rounded-[50%]">
                                                        <img src="assets/images/user-grid/user-grid-img2.png" alt="Avatar"
                                                            className="w-full h-full object-fit-cover" />
                                                    </span>
                                                    <span className="text-neutral-600 dark:text-neutral-200">Albert Flores</span>
                                                </div>
                                            </td>
                                            <td className="text-neutral-600 dark:text-neutral-200">$29.00</td>
                                            <td className="text-neutral-600 dark:text-neutral-200">Jan 10, 2025</td>
                                            <td className="text-neutral-600 dark:text-neutral-200">Feb 10, 2025</td>
                                            <td className="text-neutral-600 dark:text-neutral-200">1 Month</td>
                                            <td className="text-center">
                                                <span
                                                    className="bg-green-100 text-green-600 dark:text-green-600 px-4 py-1 rounded font-medium text-sm">Basic</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-neutral-600 dark:text-neutral-200">
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[40px] h-[40px] rounded overflow-hidden rounded-[50%]">
                                                        <img src="assets/images/user-grid/user-grid-img1.png" alt="Avatar"
                                                            className="w-full h-full object-fit-cover" />
                                                    </span>
                                                    <span className="text-neutral-600 dark:text-neutral-200">Cameron Williamson</span>
                                                </div>
                                            </td>
                                            <td className="text-neutral-600 dark:text-neutral-200">$99.00</td>
                                            <td className="text-neutral-600 dark:text-neutral-200">Feb 10, 2025</td>
                                            <td className="text-neutral-600 dark:text-neutral-200">April 10, 2025</td>
                                            <td className="text-neutral-600 dark:text-neutral-200">3 Month</td>
                                            <td className="text-center">
                                                <span
                                                    className="bg-yellow-100 text-yellow-600 dark:text-yellow-600 px-4 py-1 rounded font-medium text-sm">Standard</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-neutral-600 dark:text-neutral-200">
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[40px] h-[40px] rounded overflow-hidden rounded-[50%]">
                                                        <img src="assets/images/user-grid/user-grid-img7.png" alt="Avatar"
                                                            className="w-full h-full object-fit-cover" />
                                                    </span>
                                                    <span className="text-neutral-600 dark:text-neutral-200">John Doe</span>
                                                </div>
                                            </td>
                                            <td className="text-neutral-600 dark:text-neutral-200">$99.00</td>
                                            <td className="text-neutral-600 dark:text-neutral-200">Feb 10, 2025</td>
                                            <td className="text-neutral-600 dark:text-neutral-200">April 10, 2025</td>
                                            <td className="text-neutral-600 dark:text-neutral-200">3 Month</td>
                                            <td className="text-center">
                                                <span
                                                    className="bg-green-100 text-green-600 dark:text-green-600 px-4 py-1 rounded font-medium text-sm">Basic</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-neutral-600 dark:text-neutral-200">
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[40px] h-[40px] rounded overflow-hidden rounded-[50%]">
                                                        <img src="assets/images/user-grid/user-grid-img8.png" alt="Avatar"
                                                            className="w-full h-full object-fit-cover" />
                                                    </span>
                                                    <span className="text-neutral-600 dark:text-neutral-200">John Robiul </span>
                                                </div>
                                            </td>
                                            <td className="text-neutral-600 dark:text-neutral-200">$99.00</td>
                                            <td className="text-neutral-600 dark:text-neutral-200">Feb 10, 2025</td>
                                            <td className="text-neutral-600 dark:text-neutral-200">April 10, 2025</td>
                                            <td className="text-neutral-600 dark:text-neutral-200">3 Month</td>
                                            <td className="text-center">
                                                <span
                                                    className="bg-green-100 text-green-600 dark:text-green-600 px-4 py-1 rounded font-medium text-sm">Basic</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <CountriesStatusCard />
                    </Suspense>
                </div>



                <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                    <div className="shadow-7 rounded-xl bg-white dark:bg-dark-2 h-full overflow-hidden">
                        <div
                            className="card-header border-b bg-white dark:bg-dark-2 py-4 px-6 flex items-center justify-between">
                            <h6 className="text-lg font-semibold mb-0">Trending Episodes</h6>
                            <select
                                className="form-select form-select-sm w-auto bg-white dark:bg-dark-2 border text-neutral-600 dark:text-neutral-200 radius-8">
                                <option>Yearly</option>
                                <option>Monthly</option>
                                <option>Weekly</option>
                                <option>Today</option>
                            </select>
                        </div>
                        <div className="card-body p-5 flex flex-col gap-4">
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center">
                                    <img src="assets/images/home-fourteen/trending-img1.png" alt=""
                                        className="w-[40px] h-[40px] rounded-[50%] flex-shrink-0 me-3 overflow-hidden" />
                                    <div className="flex-grow-1">
                                        <h6 className="text-base mb-0 font-medium">Product Design</h6>
                                        <span className="text-sm text-neutral-600 dark:text-neutral-200 font-medium">Esther Howand</span>
                                    </div>
                                </div>
                                <div className="text-end flex gap-1 justify-end flex-col">
                                    <span className="">Durations: <span className="font-semibold text-neutral-900">30:05
                                        mins</span> </span>
                                    <span className="">Views: <span className="font-semibold text-neutral-900">512k</span> </span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center">
                                    <img src="assets/images/home-fourteen/trending-img2.png" alt=""
                                        className="w-[40px] h-[40px] rounded-[50%] flex-shrink-0 me-3 overflow-hidden" />
                                    <div className="flex-grow-1">
                                        <h6 className="text-base mb-0 font-medium">How to Change Your Life</h6>
                                        <span className="text-sm text-neutral-600 dark:text-neutral-200 font-medium">Esther Howand</span>
                                    </div>
                                </div>
                                <div className="text-end flex gap-1 justify-end flex-col">
                                    <span className="">Durations: <span className="font-semibold text-neutral-900">30:05
                                        mins</span> </span>
                                    <span className="">Views: <span className="font-semibold text-neutral-900">512k</span> </span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center">
                                    <img src="assets/images/home-fourteen/trending-img3.png" alt=""
                                        className="w-[40px] h-[40px] rounded-[50%] flex-shrink-0 me-3 overflow-hidden" />
                                    <div className="flex-grow-1">
                                        <h6 className="text-base mb-0 font-medium">Logo Design</h6>
                                        <span className="text-sm text-neutral-600 dark:text-neutral-200 font-medium">Esther Howand</span>
                                    </div>
                                </div>
                                <div className="text-end flex gap-1 justify-end flex-col">
                                    <span className="">Durations: <span className="font-semibold text-neutral-900">30:05
                                        mins</span> </span>
                                    <span className="">Views: <span className="font-semibold text-neutral-900">512k</span> </span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center">
                                    <img src="assets/images/home-fourteen/trending-img3.png" alt=""
                                        className="w-[40px] h-[40px] rounded-[50%] flex-shrink-0 me-3 overflow-hidden" />
                                    <div className="flex-grow-1">
                                        <h6 className="text-base mb-0 font-medium">Good Health</h6>
                                        <span className="text-sm text-neutral-600 dark:text-neutral-200 font-medium">Esther Howand</span>
                                    </div>
                                </div>
                                <div className="text-end flex gap-1 justify-end flex-col">
                                    <span className="">Durations: <span className="font-semibold text-neutral-900">30:05
                                        mins</span> </span>
                                    <span className="">Views: <span className="font-semibold text-neutral-900">512k</span> </span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center">
                                    <img src="assets/images/home-fourteen/trending-img4.png" alt=""
                                        className="w-[40px] h-[40px] rounded-[50%] flex-shrink-0 me-3 overflow-hidden" />
                                    <div className="flex-grow-1">
                                        <h6 className="text-base mb-0 font-medium">Episodes Name</h6>
                                        <span className="text-sm text-neutral-600 dark:text-neutral-200 font-medium">Esther Howand</span>
                                    </div>
                                </div>
                                <div className="text-end flex gap-1 justify-end flex-col">
                                    <span className="">Durations: <span className="font-semibold text-neutral-900">30:05
                                        mins</span> </span>
                                    <span className="">Views: <span className="font-semibold text-neutral-900">512k</span> </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                    <div className="shadow-7 rounded-xl bg-white dark:bg-dark-2 h-full overflow-hidden">
                        <div
                            className="card-header border-b bg-white dark:bg-dark-2 py-4 px-6 flex items-center justify-between">
                            <h6 className="text-lg font-semibold mb-0">Top 5 Categories </h6>
                            <CommonLink />
                        </div>
                        <div className="card-body py-[32px] px-6 mt-5 flex items-center justify-between">
                            <div className="">
                                <div id="userOverviewDonutChart"
                                    className="margin-4-minus y-value-left apexcharts-tooltip-z-none"></div>
                            </div>
                            <ul className="flex flex-col gap-3">
                                <li>
                                    <span className="text-lg">UI/UX Design: <span
                                        className="text-green-600 dark:text-green-600 font-semibold">50%</span> </span>
                                </li>
                                <li>
                                    <span className="text-lg">Entertainment: <span className="text-purple-600 dark:text-purple-600 font-semibold">30%</span>
                                    </span>
                                </li>
                                <li>
                                    <span className="text-lg">Lifestyle: <span className="text-red-600 dark:text-red-600 font-semibold">87%</span>
                                    </span>
                                </li>
                                <li>
                                    <span className="text-lg">Business: <span className="text-blue-600 dark:text-blue-600 font-semibold">87%</span>
                                    </span>
                                </li>
                                <li>
                                    <span className="text-lg">Health: <span className="text-yellow-600 dark:text-yellow-600 font-semibold">40%</span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                    <div className="shadow-7 rounded-xl bg-white dark:bg-dark-2 h-full overflow-hidden">
                        <div
                            className="card-header border-b bg-white dark:bg-dark-2 py-4 px-6 flex items-center justify-between">
                            <h6 className="text-lg font-semibold mb-0">Top Podcaster</h6>
                            <CommonLink />
                        </div>
                        <div className="card-body p-5 flex flex-col gap-5">
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center">
                                    <img src="assets/images/homeThirteen/podcaster-img1.png" alt=""
                                        className="w-[40px] h-[40px] rounded-[50%] flex-shrink-0 me-3 overflow-hidden" />
                                    <div className="flex-grow-1">
                                        <h6 className="text-base mb-0 font-medium">Digital Assets</h6>
                                        <span className="text-sm text-neutral-600 dark:text-neutral-200 font-medium">UI Design</span>
                                    </div>
                                </div>
                                <button type="button"
                                    className="follow-btn bg-green-100 hover:bg-green-300 rounded px-5 py-1.5 text-green-600">Follow</button>
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center">
                                    <img src="assets/images/homeThirteen/podcaster-img2.png" alt=""
                                        className="w-[40px] h-[40px] rounded-[50%] flex-shrink-0 me-3 overflow-hidden" />
                                    <div className="flex-grow-1">
                                        <h6 className="text-base mb-0 font-medium">Side Project</h6>
                                        <span className="text-sm text-neutral-600 dark:text-neutral-200 font-medium">Business</span>
                                    </div>
                                </div>
                                <button type="button"
                                    className="follow-btn bg-green-100 hover:bg-green-300 rounded px-5 py-1.5 text-green-600">Follow</button>
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center">
                                    <img src="assets/images/homeThirteen/podcaster-img3.png" alt=""
                                        className="w-[40px] h-[40px] rounded-[50%] flex-shrink-0 me-3 overflow-hidden" />
                                    <div className="flex-grow-1">
                                        <h6 className="text-base mb-0 font-medium">Investment</h6>
                                        <span className="text-sm text-neutral-600 dark:text-neutral-200 font-medium">Lifestyle</span>
                                    </div>
                                </div>
                                <button type="button"
                                    className="follow-btn bg-green-100 hover:bg-green-300 rounded px-5 py-1.5 text-green-600">Follow</button>
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center">
                                    <img src="assets/images/homeThirteen/podcaster-img4.png" alt=""
                                        className="w-[40px] h-[40px] rounded-[50%] flex-shrink-0 me-3 overflow-hidden" />
                                    <div className="flex-grow-1">
                                        <h6 className="text-base mb-0 font-medium">Investment</h6>
                                        <span className="text-sm text-neutral-600 dark:text-neutral-200 font-medium">Lifestyle</span>
                                    </div>
                                </div>
                                <button type="button"
                                    className="follow-btn bg-green-100 hover:bg-green-300 rounded px-5 py-1.5 text-green-600">Follow</button>
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center">
                                    <img src="assets/images/homeThirteen/podcaster-img5.png" alt=""
                                        className="w-[40px] h-[40px] rounded-[50%] flex-shrink-0 me-3 overflow-hidden" />
                                    <div className="flex-grow-1">
                                        <h6 className="text-base mb-0 font-medium">Investment</h6>
                                        <span className="text-sm text-neutral-600 dark:text-neutral-200 font-medium">Lifestyle</span>
                                    </div>
                                </div>
                                <button type="button"
                                    className="follow-btn bg-green-100 hover:bg-green-300 rounded px-5 py-1.5 text-green-600">Follow</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </>
    );
};
export default podcastPage;
