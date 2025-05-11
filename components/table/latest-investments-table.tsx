// "use client";

// import React from "react";
// import Image, { StaticImageData } from "next/image";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// import UserImage1 from "../../public/assets/images/users/user1.png";
// import UserImage2 from "../../public/assets/images/users/user2.png";
// import UserImage3 from "../../public/assets/images/users/user3.png";
// import UserImage4 from "../../public/assets/images/users/user4.png";
// import UserImage5 from "../../public/assets/images/users/user5.png";

// type AssetOrder = {
//   userImage: string;
//   userName: string;
//   invoice: string;
//   item: string;
//   qty: string;
//   amount: string;
//   status: "Completed" | "In Progress";
//   statusBg: string;
// };

// const orders: AssetOrder[] = [
//   {
//     userImage: "/assets/images/asset/asset-img1.png",
//     userName: "Gold",
//     invoice: "Main Asset",
//     item: "Ounces",
//     qty: "7400",
//     amount: "$7,400.00",
//     status: "Completed",
//     statusBg:
//       "bg-green-100 dark:bg-green-600/25 text-green-600 dark:text-green-400",
//   },
//   {
//     userImage: "/assets/images/asset/asset-img2.png",
//     userName: "Dollars",
//     invoice: "Currency",
//     item: "Dollars",
//     qty: "5,40,000",
//     amount: "$5,40,000.00",
//     status: "In Progress",
//     statusBg:
//       "bg-yellow-100 dark:bg-yellow-500/25 text-yellow-500 dark:text-yellow-400",
//   },
//   {
//     userImage: "/assets/images/asset/asset-img3.png",
//     userName: "Stock Market",
//     invoice: "Product",
//     item: "Products",
//     qty: "1400",
//     amount: "$50,000.00",
//     status: "Completed",
//     statusBg:
//       "bg-green-100 dark:bg-green-600/25 text-green-600 dark:text-green-400",
//   },
//   {
//     userImage: "/assets/images/asset/asset-img4.png",
//     userName: "Dimond",
//     invoice: "Asset",
//     item: "Ounces",
//     qty: "350",
//     amount: "$30,000.00",
//     status: "In Progress",
//     statusBg:
//       "bg-yellow-100 dark:bg-yellow-500/25 text-yellow-500 dark:text-yellow-400",
//   },
//   {
//     userImage: "/assets/images/asset/asset-img5.png",
//     userName: "S&P 400",
//     invoice: "Index",
//     item: "Shares",
//     qty: "24,000",
//     amount: "$63,000.00",
//     status: "Completed",
//     statusBg:
//       "bg-green-100 dark:bg-green-600/25 text-green-600 dark:text-green-400",
//   },
// ];

// const LatestInvestmentsTable = () => {
//   return (
//     <Table className="table-auto border-spacing-0 border-separate">
//       <TableHeader>
//         <TableRow className="border-0">
//           <TableHead className="bg-neutral-100 dark:bg-slate-700 text-base border-t border-neutral-200 dark:border-slate-600 px-4 h-12 border-s rounded-tl-lg">
//             Asset
//           </TableHead>
//           <TableHead className="bg-neutral-100 dark:bg-slate-700 text-base border-t border-neutral-200 dark:border-slate-600 px-4 h-12">
//             Quantity
//           </TableHead>
//           <TableHead className="bg-neutral-100 dark:bg-slate-700 text-base border-t border-neutral-200 dark:border-slate-600 px-4 h-12 text-center">
//             Price
//           </TableHead>
//           <TableHead className="bg-neutral-100 dark:bg-slate-700 text-base border-t border-neutral-200 dark:border-slate-600 px-4 h-12 text-center">
//             Date
//           </TableHead>

//           <TableHead className="bg-neutral-100 dark:bg-slate-700 text-base border-t border-neutral-200 dark:border-slate-600 px-4 h-12 border-e rounded-tr-lg text-center">
//             Total Orders
//           </TableHead>
//         </TableRow>
//       </TableHeader>

//       <TableBody>
//         {orders.map((order, index) => {
//           const isLastRow = index === orders.length - 1;

//           return (
//             <TableRow key={index}>
//               <TableCell
//                 className={`py-3.5 px-4 first:border-s last:border-e border-b border-neutral-200 dark:border-slate-600 text-base first:border-s last:border-e ${
//                   isLastRow ? "rounded-bl-lg" : ""
//                 }`}
//               >
//                 <div className="flex items-center">
//                   <Image
//                     src={order.userImage}
//                     alt={order.userName}
//                     width={40}
//                     height={40}
//                     className="me-3 rounded-lg"
//                   />
//                   <span className="text-base font-semibold text-secondary-light">
//                     {order.userName}
//                   </span>
//                 </div>
//               </TableCell>

//               <TableCell className="py-3.5 px-4 first:border-s last:border-e border-b border-neutral-200 dark:border-slate-600 text-base">
//                 {order.invoice}
//               </TableCell>

//               <TableCell className="py-3.5 px-4 first:border-s last:border-e border-b border-neutral-200 dark:border-slate-600 text-base text-center">
//                 {order.item}
//               </TableCell>

//               <TableCell className="py-3.5 px-4 first:border-s last:border-e border-b border-neutral-200 dark:border-slate-600 text-base text-center">
//                 {order.qty}
//               </TableCell>

//               <TableCell
//                 className={`py-3.5 px-4 first:border-s last:border-e border-b border-neutral-200 dark:border-slate-600 text-base text-center ${
//                   isLastRow ? "rounded-br-lg" : ""
//                 }`}
//               >
//                 <span
//                   className={`px-4 py-1.5 rounded-full font-medium text-sm ${order.statusBg}`}
//                 >
//                   {order.status}
//                 </span>
//               </TableCell>
//             </TableRow>
//           );
//         })}
//       </TableBody>
//     </Table>
//   );
// };

// export default LatestInvestmentsTable;

"use client";

import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type AssetOrder = {
  image: string;
  name: string;
  subText: string;
  quantity: string;
  unit: string;
  price: string;
  date: string;
  status: "Completed" | "In Progress";
  statusBg: string;
};

const orders: AssetOrder[] = [
  {
    image: "/assets/images/asset/asset-img1.png",
    name: "Gold",
    subText: "Main Asset",
    quantity: "7400",
    unit: "Ounces",
    price: "$7,400.00",
    date: "25 May 2024",
    status: "Completed",
    statusBg:
      "bg-green-100 dark:bg-green-600/25 text-green-600 dark:text-green-400",
  },
  {
    image: "/assets/images/asset/asset-img2.png",
    name: "Dollars",
    subText: "Currency",
    quantity: "5,40,000",
    unit: "Dollars",
    price: "$5,40,000.00",
    date: "25 May 2024",
    status: "In Progress",
    statusBg:
      "bg-yellow-100 dark:bg-yellow-500/25 text-yellow-500 dark:text-yellow-400",
  },
  {
    image: "/assets/images/asset/asset-img3.png",
    name: "Stock Market",
    subText: "Product",
    quantity: "1400",
    unit: "Products",
    price: "$50,000.00",
    date: "25 May 2024",
    status: "Completed",
    statusBg:
      "bg-green-100 dark:bg-green-600/25 text-green-600 dark:text-green-400",
  },
  {
    image: "/assets/images/asset/asset-img4.png",
    name: "Dimond",
    subText: "Asset",
    quantity: "350",
    unit: "Ounces",
    price: "$30,000.00",
    date: "25 May 2024",
    status: "In Progress",
    statusBg:
      "bg-yellow-100 dark:bg-yellow-500/25 text-yellow-500 dark:text-yellow-400",
  },
  {
    image: "/assets/images/asset/asset-img5.png",
    name: "S&P 400",
    subText: "Index",
    quantity: "24,000",
    unit: "Shares",
    price: "$63,000.00",
    date: "25 May 2024",
    status: "Completed",
    statusBg:
      "bg-green-100 dark:bg-green-600/25 text-green-600 dark:text-green-400",
  },
];

const LatestInvestmentsTable = () => {
  return (
    <Table className="table-auto border-spacing-0 border-separate">
      <TableHeader>
        <TableRow className="border-0">
          <TableHead className="bg-neutral-100 dark:bg-slate-700 first:border-s last:border-e text-base px-4 h-12 border-t border-neutral-200 dark:border-slate-600 rounded-tl-lg">
            Asset
          </TableHead>
          <TableHead className="bg-neutral-100 dark:bg-slate-700 first:border-s last:border-e text-base px-4 h-12 border-t border-neutral-200 dark:border-slate-600">
            Quantity
          </TableHead>
          <TableHead className="bg-neutral-100 dark:bg-slate-700 first:border-s last:border-e text-base px-4 h-12 border-t border-neutral-200 dark:border-slate-600 text-center">
            Price
          </TableHead>
          <TableHead className="bg-neutral-100 dark:bg-slate-700 first:border-s last:border-e text-base px-4 h-12 border-t border-neutral-200 dark:border-slate-600 text-center">
            Date
          </TableHead>
          <TableHead className="bg-neutral-100 dark:bg-slate-700 first:border-s last:border-e text-base px-4 h-12 border-t border-neutral-200 dark:border-slate-600 rounded-tr-lg text-center">
            Total Orders
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order, index) => {
          const isLast = index === orders.length - 1;
          return (
            <TableRow key={index}>
              <TableCell
                className={`py-3.5 px-4 first:border-s last:border-e border-b border-neutral-200 dark:border-slate-600 ${
                  isLast ? "rounded-bl-lg" : ""
                }`}
              >
                <div className="flex items-center">
                  <Image
                    src={order.image}
                    alt={order.name}
                    width={40}
                    height={40}
                    className="me-3 rounded-lg"
                  />
                  <div>
                    <h6 className="text-base mb-0 font-normal font-semibold">
                      {order.name}
                    </h6>
                    <span className="text-sm text-secondary-light font-normal">
                      {order.subText}
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell className="py-3.5 px-4 first:border-s last:border-e border-b border-neutral-200 dark:border-slate-600">
                <h6 className="text-base mb-0 font-normal font-semibold">
                  {order.quantity}
                </h6>
                <span className="text-sm text-secondary-light font-normal">
                  {order.unit}
                </span>
              </TableCell>
              <TableCell className="py-3.5 px-4 first:border-s last:border-e border-b border-neutral-200 dark:border-slate-600 text-center">
                {order.price}
              </TableCell>
              <TableCell className="py-3.5 px-4 first:border-s last:border-e border-b border-neutral-200 dark:border-slate-600 text-center">
                {order.date}
              </TableCell>
              <TableCell
                className={`py-3.5 px-4 first:border-s last:border-e border-b border-neutral-200 dark:border-slate-600 text-center ${
                  isLast ? "rounded-br-lg" : ""
                }`}
              >
                <span
                  className={`px-4 py-1.5 rounded-lg font-medium text-sm ${order.statusBg}`}
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

export default LatestInvestmentsTable;
