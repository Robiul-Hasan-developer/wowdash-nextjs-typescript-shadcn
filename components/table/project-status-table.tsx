"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type ProjectStatus = {
  name: string;
  duration: string;
  stock: string;
};

const projectStates: ProjectStatus[] = [
  {
    name: "Gold",
    duration: "2 Months",
    stock: "30%",
  },
  {
    name: "Dollars",
    duration: "3 Months",
    stock: "50%",
  },
  {
    name: "Stock Market",
    duration: "1 Months",
    stock: "60%",
  },
  {
    name: "Dimond",
    duration: "5 Months",
    stock: "80%",
  },
  {
    name: "S&P 400",
    duration: "4 Months",
    stock: "70%",
  },
];

const ProjectStatusTable = () => {
  return (
    <Table className="table-auto border-spacing-0 border-separate">
      <TableHeader>
        <TableRow className="border-0">
          <TableHead className="bg-neutral-100 dark:bg-slate-700 first:border-s last:border-e text-base px-4 h-12 border-t border-neutral-200 dark:border-slate-600 text-start rounded-tl-lg">
            Name
          </TableHead>
          <TableHead className="bg-neutral-100 dark:bg-slate-700 first:border-s last:border-e text-base px-4 h-12 border-t border-neutral-200 dark:border-slate-600 text-center">
            Duration
          </TableHead>
          <TableHead className="bg-neutral-100 dark:bg-slate-700 first:border-s last:border-e text-base px-4 h-12 border-t border-neutral-200 dark:border-slate-600 text-center text-center rounded-tr-lg">
            Stock
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projectStates.map((order, index) => {
          const isLast = index === projectStates.length - 1;
          return (
            <TableRow key={index}>
              <TableCell
                className={`py-4.5 px-4 first:border-s last:border-e border-b border-neutral-200 dark:border-slate-600 text-start ${
                  isLast ? "rounded-bl-lg" : ""
                }`}
              >
                {order.name}
              </TableCell>
              <TableCell
                className={`py-4.5 px-4 first:border-s last:border-e border-b border-neutral-200 dark:border-slate-600 text-center ${
                  isLast ? "rounded-bl-lg" : ""
                }`}
              >
                {order.duration}
              </TableCell>
              <TableCell
                className={`py-4.5 px-4 first:border-s last:border-e border-b border-neutral-200 dark:border-slate-600 text-center ${
                  isLast ? "rounded-bl-lg" : ""
                }`}
              >
                {order.stock}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default ProjectStatusTable;
