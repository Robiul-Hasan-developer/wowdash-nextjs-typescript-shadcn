import { UsersRound, ArrowUp, ArrowDown, Medal, Wallet, FileText } from 'lucide-react';
import React from 'react';

const StatCard = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-6">
            <div className="card shadow-none border border-gray-200 dark:border-neutral-600 dark:bg-neutral-700 rounded-lg h-full bg-gradient-to-r from-cyan-600/10 to-bg-white">
                <div className="card-body p-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                            <p className="font-medium text-neutral-900 dark:text-white mb-1">Total Users</p>
                            <h6 className="mb-0 dark:text-white">20,000</h6>
                        </div>
                        <div className="w-[50px] h-[50px] bg-cyan-600 rounded-full flex justify-center items-center">
                            <UsersRound className='text-white' />
                        </div>
                    </div>
                    <p className="font-medium text-sm text-neutral-600 dark:text-white mt-3 mb-0 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-green-600 dark:text-green-400">
                        <ArrowUp className='text-xs' width="14" height="14" />
                        +4000</span> 
                    Last 30 days users
                    </p>
                </div>
            </div>
            <div className="card shadow-none border border-gray-200 dark:border-neutral-600 dark:bg-neutral-700 rounded-lg h-full bg-gradient-to-r from-purple-600/10 to-bg-white">
                <div className="card-body p-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                            <p className="font-medium text-neutral-900 dark:text-white mb-1">Total Subscription</p>
                            <h6 className="mb-0 dark:text-white">15,000</h6>
                        </div>
                        <div className="w-[50px] h-[50px] bg-purple-600 rounded-full flex justify-center items-center">
                            <Medal className='text-white' />
                        </div>
                    </div>
                    <p className="font-medium text-sm text-neutral-600 dark:text-white mt-3 mb-0 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-red-600 dark:text-red-400">
                        <ArrowDown className='text-xs' width="14" height="14" />
                        -800</span> 
                    Last 30 days subscription
                    </p>
                </div>
            </div>
            <div className="card shadow-none border border-gray-200 dark:border-neutral-600 dark:bg-neutral-700 rounded-lg h-full bg-gradient-to-r from-blue-600/10 to-bg-white">
                <div className="card-body p-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                            <p className="font-medium text-neutral-900 dark:text-white mb-1">Total Free Users</p>
                            <h6 className="mb-0 dark:text-white">5,000</h6>
                        </div>
                        <div className="w-[50px] h-[50px] bg-blue-600 rounded-full flex justify-center items-center">
                            <UsersRound className='text-white' />
                        </div>
                    </div>
                    <p className="font-medium text-sm text-neutral-600 dark:text-white mt-3 mb-0 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-green-600 dark:text-green-400">
                        <ArrowUp className='text-xs' width="14" height="14" />    
                        +200</span> 
                    Last 30 days users
                    </p>
                </div>
            </div>
            <div className="card shadow-none border border-gray-200 dark:border-neutral-600 dark:bg-neutral-700 rounded-lg h-full bg-gradient-to-r from-green-600/10 to-bg-white">
                <div className="card-body p-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                            <p className="font-medium text-neutral-900 dark:text-white mb-1">Total Income</p>
                            <h6 className="mb-0 dark:text-white">$42,000</h6>
                        </div>
                        <div className="w-[50px] h-[50px] bg-green-600 rounded-full flex justify-center items-center">
                            <Wallet className='text-white' />
                        </div>
                    </div>
                    <p className="font-medium text-sm text-neutral-600 dark:text-white mt-3 mb-0 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-green-600 dark:text-green-400"> 
                        <ArrowUp className='text-xs' width="14" height="14" /> +$20,000</span> 
                    Last 30 days income
                    </p>
                </div>
            </div>
            <div className="card shadow-none border border-gray-200 dark:border-neutral-600 dark:bg-neutral-700 rounded-lg h-full bg-gradient-to-r from-red-600/10 to-bg-white">
                <div className="card-body p-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                            <p className="font-medium text-neutral-900 dark:text-white mb-1">Total Expense</p>
                            <h6 className="mb-0 dark:text-white">$30,000</h6>
                        </div>
                        <div className="w-[50px] h-[50px] bg-red-600 rounded-full flex justify-center items-center">
                            <FileText className='text-white' />
                        </div>
                    </div>
                    <p className="font-medium text-sm text-neutral-600 dark:text-white mt-3 mb-0 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-green-600 dark:text-green-400">
                        <ArrowUp className='text-xs' width="14" height="14" />    +$5,000</span> 
                    Last 30 days expense
                    </p>
                </div>
            </div>
        </div>
    );
};

export default StatCard;