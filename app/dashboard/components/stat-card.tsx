import { UsersRound, ArrowUp, ArrowDown, Medal, Wallet, FileText } from 'lucide-react';
import React from 'react';

type CardData = {
    title: string;
    value: string;
    icon: React.ElementType;
    iconBg: string;
    gradientFrom: string;
    growth: string;
    growthIcon: React.ElementType;
    growthColor: string;
    description: string;
  }
  

const cardsDatas: CardData[] = [
    {
      title: "Total Users",
      value: "20,000",
      icon: UsersRound,
      iconBg: "bg-cyan-600",
      gradientFrom: "from-cyan-600/10",
      growth: "+4000",
      growthIcon: ArrowUp,
      growthColor: "text-green-600 dark:text-green-400",
      description: "Last 30 days users",
    },
    {
      title: "Total Subscription",
      value: "15,000",
      icon: Medal,
      iconBg: "bg-purple-600",
      gradientFrom: "from-purple-600/10",
      growth: "-800",
      growthIcon: ArrowDown,
      growthColor: "text-red-600 dark:text-red-400",
      description: "Last 30 days subscription",
    },
    {
      title: "Total Free Users",
      value: "5,000",
      icon: UsersRound,
      iconBg: "bg-blue-600",
      gradientFrom: "from-blue-600/10",
      growth: "+200",
      growthIcon: ArrowUp,
      growthColor: "text-green-600 dark:text-green-400",
      description: "Last 30 days users",
    },
    {
      title: "Total Income",
      value: "$42,000",
      icon: Wallet,
      iconBg: "bg-green-600",
      gradientFrom: "from-green-600/10",
      growth: "+$20,000",
      growthIcon: ArrowUp,
      growthColor: "text-green-600 dark:text-green-400",
      description: "Last 30 days income",
    },
    {
      title: "Total Expense",
      value: "$30,000",
      icon: FileText,
      iconBg: "bg-red-600",
      gradientFrom: "from-red-600/10",
      growth: "+$5,000",
      growthIcon: ArrowUp,
      growthColor: "text-green-600 dark:text-green-400",
      description: "Last 30 days expense",
    },
]

const StatCard = () => {
    return (
        cardsDatas.map((cardData, index) => (
            <div className={`card shadow-none border border-gray-200 dark:border-neutral-600 dark:bg-neutral-700 rounded-lg h-full bg-gradient-to-r ${cardData.gradientFrom} to-bg-white`} key={index}>
                <div className="card-body p-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                            <p className="font-medium text-neutral-900 dark:text-white mb-1">{cardData.title}</p>
                            <h6 className="mb-0 dark:text-white">{cardData.value}</h6>
                        </div>
                        <div className={`w-[50px] h-[50px] ${cardData.iconBg} rounded-full flex justify-center items-center`}>
                            <cardData.icon className='text-white' />
                        </div>
                    </div>
                    <p className="font-medium text-sm text-neutral-600 dark:text-white mt-3 mb-0 flex items-center gap-2">
                    <span className={`inline-flex items-center gap-1 ${cardData.growthColor}`}>
                        <cardData.growthIcon className='text-xs' width="14" height="14" />
                        {cardData.growth}</span> 
                        {cardData.description}
                    </p>
                </div>
            </div>
        ))
    );
};

export default StatCard;