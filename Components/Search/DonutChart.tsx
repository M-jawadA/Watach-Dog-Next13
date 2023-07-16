"use client";
import React from "react";
import Chart from "react-apexcharts";
import { useState,useEffect } from "react";


const DonutChart = () => {
  const [chartWidth, setChartWidth] = useState(450);
  const [chartHeight, setChartHeight] = useState(450);

  useEffect(() => {
    const handleResize = () => {
      const isMediumDevice = window.matchMedia("(max-width: 900px)").matches;
      const width = isMediumDevice ? 350 : 450;
      const height = isMediumDevice ? 300 : 450;
      setChartWidth(width);
      setChartHeight(height);
    };

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const chartOptions = {
    series: [23, 12, 65],
    labels: [],
    colors: ["#F19C44", "#D946AA", "#A510FF"],
    chart: {
      maxWidth: chartWidth,
      maxHeight: chartHeight,
      type: "donut" as const,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "60px",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
    },
  };

  return (
    <Chart
      options={chartOptions}
      series={chartOptions.series}
      type={chartOptions.chart.type}
      width={chartOptions.chart.maxWidth}
      height={chartOptions.chart.maxHeight}
    />
  );
};

export default DonutChart;
