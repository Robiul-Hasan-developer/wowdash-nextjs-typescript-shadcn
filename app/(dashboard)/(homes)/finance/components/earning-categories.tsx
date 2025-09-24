// import CommonLink from "@/components/shared/common-link";
// import { Card, CardContent } from "@/components/ui/card";


// const EarningCategories: React.FC = () => {
//     return (
//         <Card className="card h-full rounded-lg border-0 !p-0 block">
//             <CardContent className="card-body p-0 h-full">
//                 <div>
//                     {/* Header */}
//                     <div className="card-header border-b border-neutral-200 dark:border-slate-500 py-4 px-6">
//                         <div className="flex items-center flex-wrap gap-2 justify-between">
//                             <h6 className="font-bold text-lg mb-0">Top Customer</h6>
//                             <CommonLink />
//                         </div>
//                     </div>

//                     {/* Users list */}
//                     <div className="p-6">
//                         <div className="flex flex-col gap-5">
//                             <div className="flex items-center justify-between gap-4">
//                                 <div className="flex items-center w-full gap-4 grow">
//                                     <span className="w-10 h-10 rounded-full flex justify-center items-center shrink-0 bg-blue-100 dark:bg-blue-600/25">
//                                         <img src="assets/images/home-eleven/icons/earn-cat-icon1.svg" alt="Image" className="" />
//                                     </span>
//                                     <div className="grow">
//                                         <h6 className="text-sm mb-0">Digital Assets</h6>
//                                         <span className="text-xs text-neutral-600 font-medium">$50 / from $1000</span>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-center gap-2">
//                                     <div className="w-full max-w-[66px] ms-auto">
//                                         <div className="progress progress-sm rounded-[50rem]">
//                                             <div className="progress-bar bg-blue-600 rounded-[50rem]" style="width: 80%;"></div>
//                                         </div>
//                                     </div>
//                                     <span className="text-neutral-600 font-xs font-semibold">80%</span>
//                                 </div>
//                             </div>

//                             <div className="flex items-center justify-between gap-4">
//                                 <div className="flex items-center w-full gap-4 grow">
//                                     <span className="w-10 h-10 rounded-full flex justify-center items-center shrink-0 bg-red-100 dark:bg-red-600/25">
//                                         <img src="assets/images/home-eleven/icons/earn-cat-icon2.svg" alt="Image" className="" />
//                                     </span>
//                                     <div className="grow">
//                                         <h6 className="text-sm mb-0">Side Project</h6>
//                                         <span className="text-xs text-neutral-600 font-medium">$50 / from $1000</span>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-center gap-2">
//                                     <div className="w-full max-w-[66px] ms-auto">
//                                         <div className="progress progress-sm rounded-[50rem]">
//                                             <div className="progress-bar bg-orange rounded-[50rem]" style="width: 60%;"></div>
//                                         </div>
//                                     </div>
//                                     <span className="text-neutral-600 font-xs font-semibold">60%</span>
//                                 </div>
//                             </div>

//                             <div className="flex items-center justify-between gap-4">
//                                 <div className="flex items-center w-full gap-4 grow">
//                                     <span className="w-10 h-10 rounded-full flex justify-center items-center shrink-0 bg-yellow-200 dark:bg-yellow-600/25">
//                                         <img src="assets/images/home-eleven/icons/earn-cat-icon3.svg" alt="Image" className="" />
//                                     </span>
//                                     <div className="grow">
//                                         <h6 className="text-sm mb-0">Investment</h6>
//                                         <span className="text-xs text-neutral-600 font-medium">$50 / from $1000</span>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-center gap-2">
//                                     <div className="w-full max-w-[66px] ms-auto">
//                                         <div className="progress progress-sm rounded-[50rem]">
//                                             <div className="progress-bar bg-yellow-600 rounded-[50rem]" style="width: 49%;"></div>
//                                         </div>
//                                     </div>
//                                     <span className="text-neutral-600 font-xs font-semibold">49%</span>
//                                 </div>
//                             </div>

//                             <div className="flex items-center justify-between gap-4">
//                                 <div className="flex items-center w-full gap-4 grow">
//                                     <span className="w-10 h-10 rounded-full flex justify-center items-center shrink-0 bg-green-200 dark:bg-green-600/25">
//                                         <img src="assets/images/home-eleven/icons/earn-cat-icon4.svg" alt="Image" className="" />
//                                     </span>
//                                     <div className="grow">
//                                         <h6 className="text-sm mb-0">Working Hard</h6>
//                                         <span className="text-xs text-neutral-600 font-medium">$50 / from $1000</span>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-center gap-2">
//                                     <div className="w-full max-w-[66px] ms-auto">
//                                         <div className="progress progress-sm rounded-[50rem]">
//                                             <div className="progress-bar bg-green-main rounded-[50rem]" style="width: 100%;"></div>
//                                         </div>
//                                     </div>
//                                     <span className="text-neutral-600 font-xs font-semibold">100%</span>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </CardContent>
//         </Card>
//     );
// };

// export default EarningCategories;







import CommonLink from "@/components/shared/common-link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

type Category = {
    id: number;
    title: string;
    amount: string;
    from: string;
    percentage: number;
    icon: string;
    iconBg: string;
    progressColor: string;
};

const categories: Category[] = [
    {
        id: 1,
        title: "Digital Assets",
        amount: "$50",
        from: "$1000",
        percentage: 80,
        icon: "/assets/images/home-eleven/icons/earn-cat-icon1.svg",
        iconBg: "bg-blue-100 dark:bg-blue-600/25",
        progressColor: "bg-blue-600",
    },
    {
        id: 2,
        title: "Side Project",
        amount: "$50",
        from: "$1000",
        percentage: 60,
        icon: "/assets/images/home-eleven/icons/earn-cat-icon2.svg",
        iconBg: "bg-red-100 dark:bg-red-600/25",
        progressColor: "bg-yellow-600",
    },
    {
        id: 3,
        title: "Investment",
        amount: "$50",
        from: "$1000",
        percentage: 49,
        icon: "/assets/images/home-eleven/icons/earn-cat-icon3.svg",
        iconBg: "bg-yellow-200 dark:bg-yellow-600/25",
        progressColor: "bg-yellow-600",
    },
    {
        id: 4,
        title: "Working Hard",
        amount: "$50",
        from: "$1000",
        percentage: 100,
        icon: "/assets/images/home-eleven/icons/earn-cat-icon4.svg",
        iconBg: "bg-green-200 dark:bg-green-600/25",
        progressColor: "bg-green-500",
    },
];

const EarningCategories: React.FC = () => {
    return (
        <Card className="card h-full rounded-lg border-0 !p-0 block">
            <CardContent className="card-body p-0 h-full">
                <div>
                    {/* Header */}
                    <div className="card-header border-b border-neutral-200 dark:border-slate-500 py-4 px-6">
                        <div className="flex items-center flex-wrap gap-2 justify-between">
                            <h6 className="font-bold text-lg mb-0">Top Customer</h6>
                            <CommonLink />
                        </div>
                    </div>

                    {/* Users list */}
                    <div className="p-6">
                        <div className="flex flex-col gap-5">
                            {categories.map((cat) => (
                                <div
                                    key={cat.id}
                                    className="flex items-center justify-between gap-4"
                                >
                                    <div className="flex items-center w-full gap-4 grow">
                                        <span
                                            className={`w-10 h-10 rounded-full flex justify-center items-center shrink-0 ${cat.iconBg}`}
                                        >
                                            <Image
                                                src={cat.icon}
                                                alt={cat.title}
                                                width={20}
                                                height={20}
                                            />
                                        </span>
                                        <div className="grow">
                                            <h6 className="text-sm mb-0">{cat.title}</h6>
                                            <span className="text-xs text-neutral-600 font-medium">
                                                {cat.amount} / from {cat.from}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        {/* <div className="w-full max-w-[66px] ms-auto">
                                            <div className="progress progress-sm rounded-[50rem]">
                                                <div
                                                    className={`progress-bar ${cat.progressColor} rounded-[50rem]`}
                                                    style={{ width: `${cat.percentage}%` }}
                                                ></div>
                                            </div>
                                        </div> */}
                                        <div className="ms-auto">
                                            <div className="w-[66px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                                                <div className={`${cat.progressColor} h-2.5 rounded-full`} style={{ width: `${cat.percentage}%` }}></div>
                                            </div>
                                        </div>
                                        <span className="text-neutral-600 text-xs font-semibold">
                                            {cat.percentage}%
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default EarningCategories;
