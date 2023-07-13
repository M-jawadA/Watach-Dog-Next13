'use client'
import React from "react";
import Chart from "react-apexcharts";

const DonutChart = () => {
    const chartOptions = {
        series: [23, 12, 65],
        labels: [],
        colors: [ "#F19C44","#D946AA",  "#A510FF",],
        chart: {
          width: 350,
          height: 350,
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
      width={chartOptions.chart.width}
      height={chartOptions.chart.height}
    />
  );
};

export default DonutChart;
