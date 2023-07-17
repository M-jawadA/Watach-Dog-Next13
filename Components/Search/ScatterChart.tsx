"use client";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { chart } from "@/lib/rawData";
import { useState,useEffect } from "react";
import { fetchScatterChart } from "@/lib/requests";
import { Scatter } from "@/index";


const ScatterChart: React.FC = () => {
useEffect(()=>{
fetchScatterChart().then(res=>{
  setData(res.data);
})
  },[])
  const [data,setData]=useState<Scatter[]>();
  const series = [
    {
      name: "SAMPLE A",
      data: chart[0].sampleA,
      color:  chart[0].color 
    },
    {
      name: "SAMPLE B",
      data: chart[1].sampleB,
      color:  chart[1].color 
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
      tickAmount: 5,
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
    legend: {
      labels: {
        colors: '#ffffff', 
      },
    },
    stroke: {
      width: 2, 
      dashArray: 0,
    
    },
    markers: {
      strokeColors: ["#A510FF", "#F19C44"], 
      strokeWidth: 2, 
      fillOpacity: 0.5,
      colors:"#fff"
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
