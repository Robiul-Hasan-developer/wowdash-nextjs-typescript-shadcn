'use client';

import React from 'react';
import Image from 'next/image';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface Order {
  userImage: string;
  userName: string;
  invoice: string;
  item: string;
  qty: number;
  amount: string;
  status: 'Paid' | 'Pending' | 'Shipped' | 'Canceled';
  statusBg: string;
}

const orders: Order[] = [
  {
    userImage: '/assets/images/users/user1.png',
    userName: 'Dianne Russell',
    invoice: '#6352148',
    item: 'iPhone 14 max',
    qty: 2,
    amount: '$5,000.00',
    status: 'Paid',
    statusBg: 'bg-green-100 dark:bg-green-600/25 text-green-600 dark:text-green-400',
  },
  {
    userImage: '/assets/images/users/user2.png',
    userName: 'Wade Warren',
    invoice: '#6352149',
    item: 'Laptop HPH',
    qty: 3,
    amount: '$1,000.00',
    status: 'Pending',
    statusBg: 'bg-yellow-100 dark:bg-yellow-500/25 text-yellow-500 dark:text-yellow-400',
  },
  {
    userImage: '/assets/images/users/user3.png',
    userName: 'Albert Flores',
    invoice: '#6352150',
    item: 'Smart Watch',
    qty: 7,
    amount: '$1,000.00',
    status: 'Shipped',
    statusBg: 'bg-blue-100 dark:bg-blue-600/25 text-blue-600 dark:text-blue-400',
  },
  {
    userImage: '/assets/images/users/user4.png',
    userName: 'Bessie Cooper',
    invoice: '#6352151',
    item: 'Nike Air Shoe',
    qty: 1,
    amount: '$3,000.00',
    status: 'Canceled',
    statusBg: 'bg-red-100 dark:bg-red-600/25 text-red-600 dark:text-red-400',
  },
  {
    userImage: '/assets/images/users/user5.png',
    userName: 'Arlene McCoy',
    invoice: '#6352152',
    item: 'New Headphone',
    qty: 5,
    amount: '$4,000.00',
    status: 'Canceled',
    statusBg: 'bg-red-100 dark:bg-red-600/25 text-red-600 dark:text-red-400',
  },
];

const RecentOrdersTable = () => {
  return (
      <Table className="table-auto border-spacing-0 border-separate">
          <TableHeader>
            <TableRow className="border-0">
              <TableHead className="bg-neutral-100 dark:bg-slate-700 text-base border-t border-neutral-200 dark:border-slate-600 px-4 h-12 border-s rounded-tl-lg">
                Users
              </TableHead>
              <TableHead className="bg-neutral-100 dark:bg-slate-700 text-base border-t border-neutral-200 dark:border-slate-600 px-4 h-12">
                Invoice
              </TableHead>
              <TableHead className="bg-neutral-100 dark:bg-slate-700 text-base border-t border-neutral-200 dark:border-slate-600 px-4 h-12 text-center">
                Items
              </TableHead>
              <TableHead className="bg-neutral-100 dark:bg-slate-700 text-base border-t border-neutral-200 dark:border-slate-600 px-4 h-12 text-center">
                Qty
              </TableHead>
              <TableHead className="bg-neutral-100 dark:bg-slate-700 text-base border-t border-neutral-200 dark:border-slate-600 px-4 h-12 text-center">
                Amount
              </TableHead>
              <TableHead className="bg-neutral-100 dark:bg-slate-700 text-base border-t border-neutral-200 dark:border-slate-600 px-4 h-12 border-e rounded-tr-lg text-center">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
    
          <TableBody>
            {orders.map((order, index) => {
              const isLastRow = index === orders.length - 1;
    
              return (
                <TableRow key={index}>
                     <TableCell
                        className={`py-3 px-4 border-b border-neutral-200 dark:border-slate-600 text-base first:border-s last:border-e ${
                            isLastRow ? "rounded-bl-lg" : ""
                        }`}
                        >
                        <div className="flex items-center">
                            <Image
                                src={order.userImage}
                                alt={order.userName}
                                width={40}
                                height={40}
                                className="me-3 rounded-lg"
                            />
                            <span className="text-base font-semibold text-secondary-light">{order.userName}</span>
                        </div>
                    </TableCell>
    
                  <TableCell
                    className={`py-3 px-4 border-b border-neutral-200 dark:border-slate-600 text-base first:border-s last:border-e ${
                      isLastRow ? "rounded-bl-lg" : ""
                    }`}
                  >
                    {order.invoice}
                  </TableCell>
    
                  <TableCell
                    className={`py-3 px-4 border-b border-neutral-200 dark:border-slate-600 text-base text-center first:border-s last:border-e ${
                      isLastRow ? "rounded-bl-lg" : ""
                    }`}
                  >
                    {order.item}
                  </TableCell>

                  <TableCell
                    className={`py-3 px-4 border-b border-neutral-200 dark:border-slate-600 text-base text-center first:border-s last:border-e ${
                      isLastRow ? "rounded-bl-lg" : ""
                    }`}
                  >
                    {order.qty}
                  </TableCell>

                  <TableCell
                    className={`py-3 px-4 border-b border-neutral-200 dark:border-slate-600 text-base text-center first:border-s last:border-e ${
                      isLastRow ? "rounded-bl-lg" : ""
                    }`}
                  >
                    {order.amount}
                  </TableCell>
    
                  <TableCell
                    className={`py-3 px-4 border-b border-neutral-200 dark:border-slate-600 text-base first:border-s last:border-e ${
                      isLastRow ? "rounded-br-lg" : ""
                    } text-center`}
                  >
                    <span
                        className={`px-4 py-1.5 rounded-full font-medium text-sm ${order.statusBg}`}
                    >
                        {order.status}
                    </span>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
  );
};

export default RecentOrdersTable;
