"use client";
import React from "react";
import ReactApexChart from "react-apexcharts";


const ScatterChart: React.FC = () => {
  const series = [
    {
      name: "SAMPLE A",
      data: [
        [16.4, 0],
        [21.7, 1],
        [25.4, 3],
        [19, 5],
        [10.9, 0],
        [13.6, 1],
        [10.9, 3],
        [10.9, 5],
      ],
      color: "#A510FF", // Change color to #A510FF for SAMPLE A
    },
    {
      name: "SAMPLE B",
      data: [
        [36.4, 0],
        [1.7, 1],
        [5.4, 3],
        [9, 5],
        [1.9, 0],
        [3.6, 1],
        [1.9, 3],
        [1.9, 5],
      ],
      color: "#F19C44", // Change color to #F19C44 for SAMPLE B
    },
  ];

  const options: ApexCharts.ApexOptions = {
    chart: {
      height: 350,
      type: "scatter",
      zoom: {
        enabled: true,
        type: "xy",
      },
      toolbar: {
        show: false, // Hide the controls
      },
    },
    xaxis: {
      tickAmount: 10,
      labels: {
        formatter: (val: any) => parseFloat(val).toFixed(1),
        style: {
          colors: "#FFFFFF",
          fontSize: "20px",
        },
      },
    },
    yaxis: {
      tickAmount: 4,
      min: 0,
      max: 5,
      labels: {
        style: {
          colors: "#FFFFFF",
          fontSize: "20px",
        },
      },
    },
    stroke: {
      width: 2, // Reduce the width by 20%
      dashArray: 0,
    },
    markers: {
      strokeColors: ["#A510FF", "#F19C44"], // Change marker colors
      strokeWidth: 2, // Reduce the width by 20%
      fillOpacity: 0.5,
    },
  };

  return (
    <div id="chart">
      <div className="py-10  bg-[#333639] px-10 m-10 rounded-[30px]">
        <div className="flex gap-3 flex-row justify-between px-0 md:px-[55px] items-start mb-14">
          <div className="flex flex-col">
            <p className="text-white mt-5 mb-5 font-sans text-2xl font-medium leading-10 tracking-tight">
              NFT Transactions (Profit / Loss)
            </p>
            <p className="text-white text-shadow font-sans text-xl font-medium leading-14 tracking-tighter ">
              Sales
            </p>
          </div>
          <p className="text-[#BDBBBB] font-sans text-base  font-xs sm:font-medium leading-6 tracking-tight mt-6">
            3M / 6 M / 12M
          </p>
        </div>
        <ReactApexChart
          options={options}
          series={series}
          type="scatter"
          height={350}
        />
      </div>
    </div>
  );
};

export default ScatterChart;
