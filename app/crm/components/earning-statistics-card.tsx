import { Card, CardContent } from '@/components/ui/card';
import React from 'react';

const EarningStatisticsCard = () => {
    return (
        <Card className="card h-full rounded-lg border-0">
            <CardContent className="card-body p-6">
                <div className="flex items-center flex-wrap gap-2 justify-between">
                    <div>
                        <h6 className="mb-2 font-bold text-lg">Earning Statistic</h6>
                        <span className="text-sm font-medium text-neutral-600">Yearly earning overview</span>
                    </div>
                    <div className="">
                        <select className="form-select form-select-sm w-auto bg-white dark:bg-neutral-700 border text-neutral-600">
                            <option>Yearly</option>
                            <option>Monthly</option>
                            <option>Weekly</option>
                            <option>Today</option>
                        </select>
                    </div>
                </div>

                <div className="mt-5 flex justify-center flex-wrap gap-3">

                    <div className="inline-flex items-center gap-2 p-2 rounded-lg border transition hover:border-primary-600 border-neutral-200 dark:border-neutral-500 dark:hover:border-primary-600 pe-[46px] br-hover-primary group">
                        <span className="bg-neutral-100 dark:bg-neutral-600 w-[44px] h-[44px] text-2xl transition rounded-lg flex justify-center items-center text-neutral-600 group-hover:text-white group-hover:bg-primary-600">
                            {/* <iconify-icon icon="fluent:cart-16-filled" className="icon"></iconify-icon> */}
                        </span>
                        <div>
                            <span className="text-neutral-600 text-sm font-medium">Sales</span>
                            <h6 className="text-base font-semibold mb-0">$200k</h6>
                        </div>
                    </div>

                    <div className="inline-flex items-center gap-2 p-2 rounded-lg border transition hover:border-primary-600 border-neutral-200 dark:border-neutral-500 dark:hover:border-primary-600 pe-[46px] br-hover-primary group">
                        <span className="bg-neutral-100 dark:bg-neutral-600 w-[44px] h-[44px] text-2xl transition rounded-lg flex justify-center items-center text-neutral-600 group-hover:text-white group-hover:bg-primary-600">
                            {/* <iconify-icon icon="uis:chart" className="icon"></iconify-icon> */}
                        </span>
                        <div>
                            <span className="text-neutral-600 text-sm font-medium">Income</span>
                            <h6 className="text-base font-semibold mb-0">$200k</h6>
                        </div>
                    </div>

                    <div className="inline-flex items-center gap-2 p-2 rounded-lg border transition hover:border-primary-600 border-neutral-200 dark:border-neutral-500 dark:hover:border-primary-600 pe-[46px] br-hover-primary group">
                        <span className="bg-neutral-100 dark:bg-neutral-600 w-[44px] h-[44px] text-2xl transition rounded-lg flex justify-center items-center text-neutral-600 group-hover:text-white group-hover:bg-primary-600">
                            {/* <iconify-icon icon="ph:arrow-fat-up-fill" className="icon"></iconify-icon> */}
                        </span>
                        <div>
                            <span className="text-neutral-600 text-sm font-medium">Profit</span>
                            <h6 className="text-base font-semibold mb-0">$200k</h6>
                        </div>
                    </div>
                </div>
                
                <div id="barChart"></div>
            </CardContent>
        </Card>
    );
};

export default EarningStatisticsCard;