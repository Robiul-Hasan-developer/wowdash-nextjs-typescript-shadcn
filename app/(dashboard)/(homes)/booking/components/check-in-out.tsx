// "use client";

// import { ArrowLeftToLine, ArrowRightToLine } from "lucide-react";
// import React, { useEffect, useRef } from "react";

// interface RadialProgressProps {
//   percentage: number;
//   color: string;
//   icon: React.ReactNode;
//   label: string;
// }

// const RadialProgress: React.FC<RadialProgressProps> = ({
//   percentage,
//   color,
//   icon,
//   label,
// }) => {
//   const circleRef = useRef<SVGCircleElement>(null);
//   const radius = 35;
//   const circumference = 2 * Math.PI * radius;

//   useEffect(() => {
//     if (circleRef.current) {
//       const offset = circumference - (percentage / 100) * circumference;
//       circleRef.current.style.transition = "stroke-dashoffset 1.25s ease-in-out";
//       circleRef.current.style.strokeDashoffset = `${offset}`;
//     }
//   }, [percentage, circumference]);

//   return (
//     <div className="text-center">
//       <div className="relative inline-block">
//         <svg
//           className="radial-progress w-[120px] h-[120px]"
//           viewBox="0 0 80 80"
//         >
//           <circle
//             className="incomplete"
//             cx="40"
//             cy="40"
//             r={radius}
//             stroke={color + "33"} // lighter color for background
//             strokeWidth="8"
//             fill="none"
//           />
//           <circle
//             ref={circleRef}
//             className="complete"
//             cx="40"
//             cy="40"
//             r={radius}
//             stroke={color}
//             strokeWidth="8"
//             fill="none"
//             strokeDasharray={circumference}
//             strokeDashoffset={circumference}
//             strokeLinecap="round"
//             transform="rotate(-90 40 40)"
//           />
//         </svg>
//         <span className="w-[56px] h-[56px] rounded-full bg-neutral-100 flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//           <span className={`w-6 h-6 flex justify-center items-center rounded-full bg-[${color}] text-white`}>
//             {icon}
//           </span>
//         </span>
//       </div>
//       <div className="mt-2">
//         <h5 className="mb-1">{percentage}%</h5>
//         <span className="text-neutral-600">{label}</span>
//       </div>
//     </div>
//   );
// };

// const CheckInOut = () => {
//   return (
// <div className="card rounded-xl border-0">
//   <div className="card-body py-12 px-4 flex items-center justify-center gap-24 flex-wrap">
//     <RadialProgress
//       percentage={70}
//       color="#45b369"
//       icon={<ArrowLeftToLine className="w-4 h-4" />}
//       label="Check In"
//     />
//     <RadialProgress
//       percentage={30}
//       color="#ff9f29"
//       icon={<ArrowRightToLine className="w-4 h-4" />}
//       label="Check Out"
//     />
//   </div>
// </div>
//   );
// };

// export default CheckInOut;


import { ArrowLeftToLine, ArrowRightToLine } from "lucide-react";
import RadialProgress from "./radial-progress";

const CheckInOut = () => {
    return (
        <div className="card rounded-xl border-0">
            <div className="card-body py-12 px-4 flex items-center justify-center gap-24 flex-wrap">
                <div className="flex gap-10 flex-wrap justify-center items-center">
                    <RadialProgress
                        percentage={70}
                        color="#45b369"
                        size={140}
                        strokeWidth={10}
                        icon={
                            <span className="w-8 h-8 bg-green-600 rounded-full flex justify-center items-center text-white">
                                <ArrowLeftToLine className="w-4 h-4" />
                            </span>
                        }
                        label="Check In"
                    />

                    <RadialProgress
                        percentage={30}
                        color="#ff9f29"
                        size={120}
                        strokeWidth={8}
                        icon={
                            <span className="w-6 h-6 bg-yellow-600 rounded-full flex justify-center items-center text-white">
                                <ArrowRightToLine className="w-4 h-4" />
                            </span>
                        }
                        label="Check Out"
                    />
                </div>
            </div>
        </div>
    );
};

export default CheckInOut;
