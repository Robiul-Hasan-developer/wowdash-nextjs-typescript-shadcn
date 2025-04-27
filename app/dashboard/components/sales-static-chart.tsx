import React from "react";

// var options = {
//   series: [{
//     name: "This month",
//     data: [10, 20, 12, 30, 14, 35, 16, 32, 14, 25, 13, 28]
//   }],
//   chart: {
//     height: 264,
//     type: 'line',
//     toolbar: {
//       show: false
//     },
//     zoom: {
//       enabled: false
//     },
//     dropShadow: {
//       enabled: true,
//       top: 6,
//       left: 0,
//       blur: 4,
//       color: "#000",
//       opacity: 0.1,
//     },
//   },
//   dataLabels: {
//     enabled: false
//   },
//   stroke: {
//     curve: 'smooth',
//     colors: ['#487FFF'], // Specify the line color here
//     width: 3
//   },
//   markers: {
//     size: 0,
//     strokeWidth: 3,
//     hover: {
//       size: 8
//     }
//   },
//   tooltip: {
//     enabled: true,
//     x: {
//       show: true,
//     },
//     y: {
//       show: false,
//     },
//     z: {
//       show: false,
//     }
//   },
//   grid: {
//     row: {
//       colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
//       opacity: 0.5
//     },
//     borderColor: '#D1D5DB',
//     strokeDashArray: 3,
//   },
//   yaxis: {
//     labels: {
//       // formatter: function (value) {
//       //   return "$" + value + "k";
//       // },
//       style: {
//         fontSize: "14px"
//       }
//     },
//   },
//   xaxis: {
//     categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//     tooltip: {
//       enabled: false
//     },
//     labels: {
//       // formatter: function (value) {
//       //   return value;
//       // },
//       style: {
//         fontSize: "14px"
//       }
//     },
//     axisBorder: {
//       show: false
//     },
//     crosshairs: {
//       show: true,
//       width: 20,
//       stroke: {
//         width: 0
//       },
//       fill: {
//         type: 'solid',
//         color: '#487FFF40',
//         // gradient: {
//         //   colorFrom: '#D8E3F0',
//         //   // colorTo: '#BED1E6',
//         //   stops: [0, 100],
//         //   opacityFrom: 0.4,
//         //   opacityTo: 0.5,
//         // },
//       }
//     }
//   }
// };

// var chart = new ApexCharts(document.querySelector("#chart"), options);
// chart.render();


const SalesStaticChart = () => {
  return (
    <div className="xl:col-span-12 2xl:col-span-6">
      <div className="card h-full rounded-lg border-0">
        <div className="card-body">
          <div className="flex flex-wrap items-center justify-between">
            <h6 className="text-lg mb-0">Sales Statistic</h6>
            <select className="form-select bg-white dark:bg-neutral-700 form-select-sm w-auto">
              <option>Yearly</option>
              <option>Monthly</option>
              <option>Weekly</option>
              <option>Today</option>
            </select>
          </div>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            <h6 className="mb-0">$27,200</h6>
            <span className="text-sm font-semibold rounded-full bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 border border-success-200 dark:border-success-600/50 px-2 py-1.5 line-height-1 flex items-center gap-1">
              10%{" "}
              {/* <iconify-icon icon="bxs:up-arrow" className="text-xs"></iconify-icon> */}
            </span>
            <span className="text-xs font-medium">+ $1400 Per Day</span>
          </div>
          <div id="chart" className="pt-[28px] apexcharts-tooltip-style-1"></div>
        </div>
      </div>
    </div>
  );
};

export default SalesStaticChart;
