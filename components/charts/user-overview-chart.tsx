// "use client";

// import dynamic from 'next/dynamic'
// import React from "react";
// import { ApexOptions } from "apexcharts";
// const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })


// const UserOverviewChart = () => {

//     // const chartSeries:ApexAxisChartSeries = [{
//     //     name: "Sales",
//     //     data: [{
//     //         x: 'Sun',
//     //         y: 15,
//     //     }, {
//     //         x: 'Mon',
//     //         y: 12,
//     //     }, {
//     //         x: 'Tue',
//     //         y: 18,
//     //     }, {
//     //         x: 'Wed',
//     //         y: 20,
//     //     }, {
//     //         x: 'Thu',
//     //         y: 13,
//     //     }, {
//     //         x: 'Fri',
//     //         y: 16,
//     //     }, {
//     //         x: 'Sat',
//     //         y: 6,
//     //     }]
//     // }]


//     var chartOptions:ApexOptions = { 
//         series: [500, 500, 500],
//         colors: ['#FF9F29', '#487FFF', '#E4F1FF'],
//         labels: ['Active', 'New', 'Total'] ,
//         legend: {
//             show: false 
//         },
//         chart: {
//           type: 'donut',    
//           height: 270,
//           sparkline: {
//             enabled: true // Remove whitespace
//           },
//         //   margin: {
//         //       top: 0,
//         //       right: 0,
//         //       bottom: 0,
//         //       left: 0
//         //   },
//         //   padding: {
//         //     top: 0,
//         //     right: 0,
//         //     bottom: 0,
//         //     left: 0
//         //   }
//         },
//         stroke: {
//           width: 0,
//         },
//         dataLabels: {
//           enabled: false
//         },
//         responsive: [{
//           breakpoint: 480,
//           options: {
//             chart: {
//               width: 200
//             },
//             legend: {
//               position: 'bottom'
//             }
//           }
//         }],
//     };
    
//     return (
//         <Chart
//             options={chartOptions}
//             type="donut" 
//             height={270}
//         />
//     );
// };

// export default UserOverviewChart;



"use client";

import dynamic from 'next/dynamic'
import React from "react";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const UserOverviewChart = () => {
  const chartOptions: ApexOptions = {
    series: [500, 500, 500],
    colors: ['#FF9F29', '#487FFF', '#E4F1FF'],
    labels: ['Active', 'New', 'Total'],
    legend: {
      show: false
    },
    chart: {
      type: 'donut',
      height: 270,
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      width: 0
    },
    dataLabels: {
      enabled: false
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    ]
  };

  return (
    <Chart
      options={chartOptions}
      series={chartOptions.series}
      type="donut"
      height={270}
    />
  );
};

export default UserOverviewChart;
