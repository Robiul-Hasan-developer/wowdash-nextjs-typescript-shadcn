// import { ArrowUpRight } from "lucide-react";

// const StatisticsCard = () => {
//     return (
//         <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
//             <div className="col-span-12 sm:col-span-6 2xl:col-span-3 col-xxl-3 col-sm-6">
//                 <div className="p-4 shadow-none rounded-lg h-full border border-white dark:border-slate-600 bg-gradient-to-r from-[#f2fdff] to-[#d4f7ff] dark:from-slate-700 dark:to-slate-800">
//                     <div className="card-body p-0">
//                         <div className="flex flex-wrap items-center justify-between gap-1 mb-2">
//                             <div className="flex items-center gap-2.5">
//                                 <span className="mb-0 w-[48px] h-[48px] bg-cyan-600 flex-shrink-0 text-white flex justify-center items-center rounded-full h6">
//                                     <img src="assets/images/home-eleven/icons/home-eleven-icon1.svg" alt="Image" />
//                                 </span>
//                                 <div>
//                                     <span className="font-medium text-neutral-600 dark:text-slate-300 text-base">Total Period Income</span>
//                                     <h6 className="font-semibold mt-[2px]">$50,000</h6>
//                                 </div>
//                             </div>
//                         </div>
//                         <p className="text-sm mb-0 flex items-center flex-wrap gap-3 mt-3 text-neutral-600 dark:text-slate-300">
//                             <span className="bg-green-600/15 px-1.5 py-[2px] rounded-[6px] font-medium text-green-600 dark:text-green-500 text-sm flex items-center gap-1">
//                                 <ArrowUpRight className="w-4" /> 95%
//                             </span> Last month $24,000.00
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <div className="col-span-12 sm:col-span-6 2xl:col-span-3 col-xxl-3 col-sm-6">
//                 <div className="p-4 shadow-none rounded-lg h-full border border-white dark:border-slate-600 bg-gradient-to-r from-[#f2fdff] to-[#ffefdd] dark:from-slate-700 dark:to-slate-800">
//                     <div className="card-body p-0">
//                         <div className="flex flex-wrap items-center justify-between gap-1 mb-2">
//                             <div className="flex items-center gap-2.5">
//                                 <span className="mb-0 w-[48px] h-[48px] bg-yellow-600 flex-shrink-0 text-white flex justify-center items-center rounded-full h6">
//                                     <img src="assets/images/home-eleven/icons/home-eleven-icon2.svg" alt="Image" />
//                                 </span>
//                                 <div>
//                                     <span className="font-medium text-neutral-600 dark:text-slate-300 text-base">Total Period Expenses</span>
//                                     <h6 className="font-semibold mt-[2px]">$35,000</h6>
//                                 </div>
//                             </div>
//                         </div>
//                         <p className="text-sm mb-0 flex items-center flex-wrap gap-3 mt-3 text-neutral-600 dark:text-slate-300">
//                             <span className="bg-green-600/15 px-1.5 py-[2px] rounded-[6px] font-medium text-green-600 dark:text-green-500 text-sm flex items-center gap-1">
//                                 <ArrowUpRight className="w-4" /> 95%
//                             </span> Last month $1,600.00
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <div className="col-span-12 sm:col-span-6 2xl:col-span-3 col-xxl-3 col-sm-6">
//                 <div className="p-4 shadow-none rounded-lg h-full border border-white dark:border-slate-600 bg-gradient-to-r from-[#f2fdff] to-[#e9e0ff] dark:from-slate-700 dark:to-slate-800">
//                     <div className="card-body p-0">
//                         <div className="flex flex-wrap items-center justify-between gap-1 mb-2">
//                             <div className="flex items-center gap-2.5">
//                                 <span className="mb-0 w-[48px] h-[48px] bg-violet-600 flex-shrink-0 text-white flex justify-center items-center rounded-full h6">
//                                     <img src="assets/images/home-eleven/icons/home-eleven-icon3.svg" alt="Image" />
//                                 </span>
//                                 <div>
//                                     <span className="font-medium text-neutral-600 dark:text-slate-300 text-base">Net Profit</span>
//                                     <h6 className="font-semibold mt-[2px]">$50,000</h6>
//                                 </div>
//                             </div>
//                         </div>
//                         <p className="text-sm mb-0 flex items-center flex-wrap gap-3 mt-3 text-neutral-600 dark:text-slate-300">
//                             <span className="bg-red-600/15 px-1.5 py-[2px] rounded-[6px] font-medium text-red-600 dark:text-red-500 text-sm flex items-center gap-1">
//                                 <i className="ri-arrow-right-down-line"></i> 70%
//                             </span> Last month $24,000.00
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <div className="col-span-12 sm:col-span-6 2xl:col-span-3 col-xxl-3 col-sm-6">
//                 <div className="p-4 shadow-none rounded-lg h-full border border-white dark:border-slate-600 bg-gradient-to-r from-[#deffec] to-[#f6fffa] dark:from-slate-700 dark:to-slate-800">
//                     <div className="card-body p-0">
//                         <div className="flex flex-wrap items-center justify-between gap-1 mb-2">
//                             <div className="flex items-center gap-2.5">
//                                 <span className="mb-0 w-[48px] h-[48px] bg-green-600 flex-shrink-0 text-white flex justify-center items-center rounded-full h6">
//                                     <img src="assets/images/home-eleven/icons/home-eleven-icon4.svg" alt="Image" />
//                                 </span>
//                                 <div>
//                                     <span className="font-medium text-neutral-600 dark:text-slate-300 text-base">Total Saving</span>
//                                     <h6 className="font-semibold mt-[2px]">$50,000</h6>
//                                 </div>
//                             </div>
//                         </div>
//                         <p className="text-sm mb-0 flex items-center flex-wrap gap-3 mt-3 text-neutral-600 dark:text-slate-300">
//                             <span className="bg-green-600/15 px-1.5 py-[2px] rounded-[6px] font-medium text-green-600 dark:text-green-500 text-sm flex items-center gap-1">
//                                 <ArrowUpRight className="w-4" /> 95%
//                             </span> Last month $2,500.00
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default StatisticsCard;



import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const cardData = [
    {
        id: 1,
        title: "Total Period Income",
        amount: "$50,000",
        lastMonth: "$24,000.00",
        percentage: "95%",
        percentageType: "up",
        gradient: "from-[#f2fdff] to-[#d4f7ff]",
        iconBg: "bg-cyan-600",
        icon: "/assets/images/home-eleven/icons/home-eleven-icon1.svg",
    },
    {
        id: 2,
        title: "Total Period Expenses",
        amount: "$35,000",
        lastMonth: "$1,600.00",
        percentage: "95%",
        percentageType: "up",
        gradient: "from-[#f2fdff] to-[#ffefdd]",
        iconBg: "bg-yellow-600",
        icon: "/assets/images/home-eleven/icons/home-eleven-icon2.svg",
    },
    {
        id: 3,
        title: "Net Profit",
        amount: "$50,000",
        lastMonth: "$24,000.00",
        percentage: "70%",
        percentageType: "down",
        gradient: "from-[#f2fdff] to-[#e9e0ff]",
        iconBg: "bg-violet-600",
        icon: "/assets/images/home-eleven/icons/home-eleven-icon3.svg",
    },
    {
        id: 4,
        title: "Total Saving",
        amount: "$50,000",
        lastMonth: "$2,500.00",
        percentage: "95%",
        percentageType: "up",
        gradient: "from-[#deffec] to-[#f6fffa]",
        iconBg: "bg-green-600",
        icon: "/assets/images/home-eleven/icons/home-eleven-icon4.svg",
    },
];

const StatisticsCard = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
            {cardData.map((card) => (
                <div
                    key={card.id}
                    className="col-span-12 sm:col-span-6 2xl:col-span-3 col-xxl-3 col-sm-6"
                >
                    <div
                        className={`p-4 shadow-none rounded-lg h-full border border-white dark:border-slate-600 bg-gradient-to-r ${card.gradient} dark:from-slate-700 dark:to-slate-800`}
                    >
                        <div className="card-body p-0">
                            <div className="flex flex-wrap items-center justify-between gap-1 mb-2">
                                <div className="flex items-center gap-2.5">
                                    <span
                                        className={`mb-0 w-[48px] h-[48px] ${card.iconBg} flex-shrink-0 text-white flex justify-center items-center rounded-full h6`}
                                    >
                                        <Image src={card.icon} alt="Icon" width={24} height={24} />
                                    </span>
                                    <div>
                                        <span className="font-medium text-neutral-600 dark:text-slate-300 text-base">
                                            {card.title}
                                        </span>
                                        <h6 className="font-semibold mt-[2px]">{card.amount}</h6>
                                    </div>
                                </div>
                            </div>

                            <p className="text-sm mb-0 flex items-center flex-wrap gap-3 mt-3 text-neutral-600 dark:text-slate-300">
                                <span
                                    className={`px-1.5 py-[2px] rounded-[6px] font-medium text-sm flex items-center gap-1 ${card.percentageType === "up"
                                        ? "bg-green-600/15 text-green-600 dark:text-green-500"
                                        : "bg-red-600/15 text-red-600 dark:text-red-500"
                                        }`}
                                >
                                    {card.percentageType === "up" ? (
                                        <ArrowUpRight className="w-4" />
                                    ) : (
                                        <i className="ri-arrow-right-down-line"></i>
                                    )}
                                    {card.percentage}
                                </span>
                                Last month {card.lastMonth}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StatisticsCard;
