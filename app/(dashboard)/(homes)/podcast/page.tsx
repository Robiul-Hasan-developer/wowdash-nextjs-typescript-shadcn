import DashboardBreadcrumb from "@/components/layout/dashboard-breadcrumb";
import LoadingSkeleton from "@/components/loading-skeleton";
import type { Metadata } from "next";
import { Suspense } from "react";
import CountriesStatusCard from "../crm/components/countries-status-card";
import AudienceStatsCard from "./components/audience-stats-card";
import PodcastEarningsOverviewCard from "./components/podcast-earnings-overview-card";
import RecentPurposePlanCard from "./components/recent-purpose-plan-card";
import RecentlyPlayedCard from "./components/recently-played-card";
import TotalPodcasts from "./components/total-podcasts";
import TotalUsers from "./components/total-users";
import TrendingEpisodesCard from "./components/trending-episodes-card";

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
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <PodcastEarningsOverviewCard />
                    </Suspense>
                </div>

                <div className="col-span-12 lg:col-span-8">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <RecentlyPlayedCard />
                    </Suspense>
                </div>

                <div className="col-span-12 2xl:col-span-8">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <RecentPurposePlanCard />
                    </Suspense>
                </div>

                
                <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <CountriesStatusCard />
                    </Suspense>
                </div>
                
                <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                    <Suspense fallback={<LoadingSkeleton height="h-64" text="Loading..." />}>
                        <TrendingEpisodesCard />
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
                    </div>
                </div>

                {/* <div className="col-span-12 md:col-span-6 2xl:col-span-4">
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
                </div> */}

                {/* <div className="col-span-12 md:col-span-6 2xl:col-span-4">
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
                </div> */}

            </div>
        </>
    );
};
export default podcastPage;
