"use client";
import React from "react";
import Chart from "react-apexcharts";


const DonutChart = () => {
  const isMediumDevice = window.matchMedia("(max-width: 768px)").matches;
  const chartWidth = isMediumDevice ? 300 : 450;
  const chartHeight = isMediumDevice ? 300 : 450;

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
