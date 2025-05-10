// 'use client';

// import React from 'react';
// import Image, {StaticImageData} from 'next/image';
// import { ArrowUpRight, ArrowDownLeft, LucideIcon } from "lucide-react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from '@/components/ui/table';

// export interface Transaction {
//   id: string;
//   asset: string;
//   time: string;
//   date: string;
//   amount: string;
//   usdValue: string;
//   address: string;
//   status: "Completed" | "Terminated";
//   direction:  "in" | "out";
//   icon: LucideIcon;
// }

// export const transactions: Transaction[] = [
//     {
//       id: "1",
//       asset: "Bitcoin",
//       time: "10:34 AM",
//       date: "27 Mar 2024",
//       amount: "+ 0.431 BTC",
//       usdValue: "$3,480.90",
//       address: "Abc.........np562",
//       status: "Completed",
//       direction: "in",
//       icon: <ArrowUpRight className="w-5 h-5 text-green-600" />,
//     },
//     {
//       id: "2",
//       asset: "Bitcoin",
//       time: "10:34 AM",
//       date: "27 Mar 2024",
//       amount: "+ 0.431 BTC",
//       usdValue: "$3,480.90",
//       address: "Abc.........np562",
//       status: "Terminated",
//       direction: "out",
//       icon: <ArrowDownLeft className="w-5 h-5 text-red-600" />,
//     },
//     {
//       id: "3",
//       asset: "Bitcoin",
//       time: "10:34 AM",
//       date: "27 Mar 2024",
//       amount: "+ 0.431 BTC",
//       usdValue: "$3,480.90",
//       address: "Abc.........np562",
//       status: "Completed",
//       direction: "in",
//       icon: <ArrowUpRight className="w-5 h-5 text-green-600" />,
//     },
//     {
//       id: "4",
//       asset: "Bitcoin",
//       time: "10:34 AM",
//       date: "27 Mar 2024",
//       amount: "+ 0.431 BTC",
//       usdValue: "$3,480.90",
//       address: "Abc.........np562",
//       status: "Terminated",
//       direction: "out",
//       icon: <ArrowDownLeft className="w-5 h-5 text-red-600" />,
//     },
//     {
//       id: "5",
//       asset: "Bitcoin",
//       time: "10:34 AM",
//       date: "27 Mar 2024",
//       amount: "+ 0.431 BTC",
//       usdValue: "$3,480.90",
//       address: "Abc.........np562",
//       status: "Completed",
//       direction: "in",
//       icon: <ArrowUpRight className="w-5 h-5 text-green-600" />,
//     },
// ];
  
  

// const RecentTransactionTable = () => {
//     return (
//         <Table className="table-auto border-spacing-0 border-separate">
//             <TableHeader>
//                 <TableRow className="border-0">
//                 {["Ast", "Date & Time", "Amount", "Address", "Status"].map((title, i) => (
//                     <TableHead
//                     key={i}
//                     className={`bg-neutral-100 dark:bg-slate-700 text-base border-t border-neutral-200 dark:border-slate-600 px-4 h-12 text-center ${
//                         i === 0 ? "text-left rounded-tl-lg" : ""
//                     } ${i === 4 ? "rounded-tr-lg" : ""}`}
//                     >
//                     {title}
//                     </TableHead>
//                 ))}
//                 </TableRow>
//             </TableHeader>

//             <TableBody>
//                 {transactions.map((txn, index) => {
//                 const isLast = index === transactions.length - 1

//                 return (
//                     <TableRow key={index}>
//                     {/* Asset */}
//                     <TableCell className={`py-3.5 px-4 border-b border-neutral-200  dark:border-slate-600 text-base first:border-s last:border-e ${isLast ? "rounded-bl-lg" : ""}`}>
//                         <div className="flex items-center gap-2">
//                         <span className={`w-8 h-8 flex items-center justify-center rounded-full text-xl ${txn.iconBg} ${txn.iconColor}`}>
//                             {/* <Icon icon={txn.icon} /> */}
//                         </span>
//                         <span className="font-medium">{txn.type}</span>
//                         </div>
//                     </TableCell>

//                     {/* Date & Time */}
//                     <TableCell className="py-3.5 px-4 border-b border-neutral-200  dark:border-slate-600 text-base">
//                         <div>
//                         <div className="text-neutral-600 dark:text-neutral-200 font-medium">{txn.time}</div>
//                         <div className="text-secondary-light text-sm">{txn.date}</div>
//                         </div>
//                     </TableCell>

//                     {/* Amount */}
//                     <TableCell className="py-3.5 px-4 border-b border-neutral-200  dark:border-slate-600 text-base text-center">
//                         <div className="text-neutral-600 dark:text-neutral-200 font-medium">{txn.amount}</div>
//                         <div className="text-secondary-light text-sm">{txn.usd}</div>
//                     </TableCell>

//                     {/* Address */}
//                     <TableCell className="py-3.5 px-4 border-b border-neutral-200  dark:border-slate-600 text-base text-center">{txn.address}</TableCell>

//                     {/* Status */}
//                     <TableCell className={`py-3.5 px-4 border-b border-neutral-200  dark:border-slate-600 text-base text-center ${isLast ? "rounded-br-lg" : ""}`}>
//                         <span className={`px-4 py-1.5 rounded-full font-medium text-sm ${txn.statusBg} ${txn.statusColor}`}>
//                         {txn.status}
//                         </span>
//                     </TableCell>
//                     </TableRow>
//                 )
//                 })}
//             </TableBody>
//             </Table>
//     );
// };

// export default RecentTransactionTable;



'use client';

import React from 'react';
import { ArrowUpRight, ArrowDownLeft, LucideIcon } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export interface Transaction {
  id: string;
  asset: string;
  time: string;
  date: string;
  amount: string;
  usdValue: string;
  address: string;
  status: 'Completed' | 'Terminated';
  direction: 'in' | 'out';
  icon: LucideIcon;
}

export const transactions: Transaction[] = [
  {
    id: '1',
    asset: 'Bitcoin',
    time: '10:34 AM',
    date: '27 Mar 2024',
    amount: '+ 0.431 BTC',
    usdValue: '$3,480.90',
    address: 'Abc.........np562',
    status: 'Completed',
    direction: 'in',
    icon: ArrowUpRight,
  },
  {
    id: '2',
    asset: 'Bitcoin',
    time: '10:34 AM',
    date: '27 Mar 2024',
    amount: '+ 0.431 BTC',
    usdValue: '$3,480.90',
    address: 'Abc.........np562',
    status: 'Terminated',
    direction: 'out',
    icon: ArrowDownLeft,
  },
  {
    id: '3',
    asset: 'Bitcoin',
    time: '10:34 AM',
    date: '27 Mar 2024',
    amount: '+ 0.431 BTC',
    usdValue: '$3,480.90',
    address: 'Abc.........np562',
    status: 'Completed',
    direction: 'in',
    icon: ArrowUpRight,
  },
  {
    id: '4',
    asset: 'Bitcoin',
    time: '10:34 AM',
    date: '27 Mar 2024',
    amount: '+ 0.431 BTC',
    usdValue: '$3,480.90',
    address: 'Abc.........np562',
    status: 'Terminated',
    direction: 'out',
    icon: ArrowDownLeft,
  },
  {
    id: '5',
    asset: 'Bitcoin',
    time: '10:34 AM',
    date: '27 Mar 2024',
    amount: '+ 0.431 BTC',
    usdValue: '$3,480.90',
    address: 'Abc.........np562',
    status: 'Completed',
    direction: 'in',
    icon: ArrowUpRight,
  },
];

const RecentTransactionTable = () => {
  return (
    <Table className="table-auto border-spacing-0 border-separate">

      <TableHeader>
        <TableRow className="border-0">
            <TableHead className="px-4 h-12 bg-neutral-100 dark:bg-slate-700 border-t border-neutral-200 first:border-s last:border-e dark:border-slate-600 rounded-tl-lg">
                Ast	
            </TableHead>
            <TableHead className="px-4 h-12 bg-neutral-100 dark:bg-slate-700 border-t border-neutral-200 first:border-s last:border-e dark:border-slate-600">
                Date & Time
            </TableHead>
            <TableHead className="px-4 h-12 text-center bg-neutral-100 dark:bg-slate-700 border-t border-neutral-200 first:border-s last:border-e dark:border-slate-600">
                Amount
            </TableHead>
            <TableHead className="px-4 h-12 text-center bg-neutral-100 dark:bg-slate-700 border-t border-neutral-200 first:border-s last:border-e dark:border-slate-600">
                Address
            </TableHead>
            <TableHead className="px-4 h-12 text-center bg-neutral-100 dark:bg-slate-700 border-t border-neutral-200 first:border-s last:border-e dark:border-slate-600 rounded-tr-lg">
                Status
            </TableHead>
        </TableRow>
    </TableHeader>

    <TableBody>
        {transactions.map((txn, index) => {
        const isLast = index === transactions.length - 1;
        const Icon = txn.icon;

        const iconColor =
            txn.direction === 'in'
            ? 'text-green-600 bg-green-100 dark:bg-green-600/25 dark:text-green-400'
            : 'text-red-600 bg-red-100 dark:bg-red-600/25 dark:text-red-400';

        const statusClass =
            txn.status === 'Completed'
            ? 'bg-green-100 dark:bg-green-600/25 text-green-600 dark:text-green-400'
            : 'bg-red-100 dark:bg-red-600/25 text-red-600 dark:text-red-400';

        return (
            <TableRow key={txn.id}>
            {/* Asset */}
            <TableCell
                className={`py-3 px-4 text-base border-b first:border-s last:border-e border-neutral-200 dark:border-slate-600 ${
                isLast ? 'rounded-bl-lg' : ''
                }`}
            >
                <div className="flex items-center gap-2">
                <span
                    className={`w-8 h-8 flex items-center justify-center rounded-full text-xl ${iconColor}`}
                >
                    <Icon className="w-5 h-5" />
                </span>
                <span className="font-medium text-neutral-700 dark:text-neutral-200">{txn.asset}</span>
                </div>
            </TableCell>

            {/* Date & Time */}
            <TableCell className="py-3 px-4 text-base border-b first:border-s last:border-e border-neutral-200 dark:border-slate-600">
                <div>
                <div className="text-neutral-600 dark:text-neutral-200 font-medium">{txn.time}</div>
                <div className="text-secondary-light text-sm">{txn.date}</div>
                </div>
            </TableCell>

            {/* Amount */}
            <TableCell className="py-3 px-4 text-base border-b first:border-s last:border-e border-neutral-200 dark:border-slate-600 text-center">
                <div className="text-neutral-600 dark:text-neutral-200 font-medium">{txn.amount}</div>
                <div className="text-secondary-light text-sm">{txn.usdValue}</div>
            </TableCell>

            {/* Address */}
            <TableCell className="py-3 px-4 text-base border-b first:border-s last:border-e border-neutral-200 dark:border-slate-600 text-center">
                {txn.address}
            </TableCell>

            {/* Status */}
            <TableCell
                className={`py-3 px-4 text-base border-b first:border-s last:border-e border-neutral-200 dark:border-slate-600 text-center ${
                isLast ? 'rounded-br-lg' : ''
                }`}
            >
                <span
                className={`px-4 py-1.5 rounded font-medium text-sm ${statusClass}`}
                >
                {txn.status}
                </span>
            </TableCell>
            </TableRow>
        );
        })}
    </TableBody>



    </Table>
  );
};

export default RecentTransactionTable;
