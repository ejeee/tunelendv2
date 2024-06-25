import React from "react";
import Chart from "chart.js/auto";
import { useRef, useEffect } from "react";

const Statistik = () => {
  const maintenanceProductChartRef = useRef(null);
  useEffect(() => {
    const createMaintenanceProductChart = (
      chartRef,
      labels,
      data,
      backgroundColors
    ) => {
      if (chartRef.current) {
        if (chartRef.current.chart) {
          chartRef.current.chart.destroy();
        }

        const context = chartRef.current.getContext("2d");

        const newChart = new Chart(context, {
          type: "bar",
          data: {
            labels: labels,
            datasets: [
              {
                data: data,
                backgroundColor: backgroundColors,
                borderSkipped: "bottom",
              },
            ],
          },
          options: {
            plugins: {
              legend: {
                position: "bottom",
              },
            },
            responsive: true,
            maintainAspectRatio: false,
          },
        });

        chartRef.current.chart = newChart;
      }
    };
    const maintenanceProductLabel = ["Jan", "Feb", "Mar", "Apr", "May"];

    const maintenanceProductData = [10, 20, 30, 75, 125];
    const backgroundMaintenanceProductChart = ["#2896B5"];
    createMaintenanceProductChart(
      maintenanceProductChartRef,
      maintenanceProductLabel,
      maintenanceProductData,
      backgroundMaintenanceProductChart
    );
  });

  return (
    <>
      <div className="flex">
        <div className="w-3/4 h-fit bg-white rounded-xl shadow-2xl">
          <p className="font-semibold text-lg px-12 py-12">
            Statistik Penyewaan
          </p>
          <div className="w-full h-96 mt-2 flex justify-center px-12">
            <canvas ref={maintenanceProductChartRef}></canvas>
          </div>
        </div>
        <div className="ml-12">
          <div className="w-full h-fit bg-white rounded-xl shadow-xl px-10 py-12">
            <p className="text-xl">Total Pengguna</p>
            <p className="text-6xl font-bold">87</p>
          </div>
          <div className="w-full h-fit bg-white rounded-xl shadow-xl py-12 px-10 mt-8">
            <p className="text-xl">Postingan Terverifikasi</p>
            <p className="text-6xl font-bold">45</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistik;
