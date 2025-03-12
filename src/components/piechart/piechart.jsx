import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChart = () => {
  const data = {
    labels: [
      "Category 1", "Category 2", "Category 3", "Category 4", 
      "Category 5", "Category 6", "Category 7", "Category 8", 
      "Category 9", "Category 10", "Category 11", "Category 12"
    ],
    datasets: [
      {
        data: [17.5, 15.0, 10.5, 7.5, 7.5, 7.0, 6.2, 6.2, 5.6, 5.6, 5.0, 3.8],
        backgroundColor: [
          "#8bc34a", "#ffeb3b", "#4caf50", "#e91e63", "#00bcd4",
          "#f44336", "#9e9e9e", "#ff9800", "#673ab7", "#03a9f4",
          "#009688", "#ff5722"
        ],
        hoverOffset: 5,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Hide legend if not needed
      },
      tooltip: {
        enabled: true, // Enable tooltips
      },
      datalabels: {
        color: "#000", // Label color
        font: {
          weight: "bold",
          size: 14,
        },
        formatter: (value) => `${value}%`, // Show percentage over each section
        anchor: "center",
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;
