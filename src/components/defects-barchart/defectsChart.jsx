import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Register components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const DefectsChart = () => {
  const labels = [
    "Contact Damage",
    "Contact Direction Change",
    "Contact Plating Peel Off (Pocket)",
    "Contact Plating Peel Off (Head)",
    "DE-Flashing",
    "DAP Powder",
    "Deep Gate",
    "Foreign Material",
    "Metal Chip Off Molded",
    "Short Contact",
    "Short Mold",
    "Vertical Flash",
    "Machine Tool Mark Pocket",
  ];

  const values = [50, 50, 20, 120, 60, 40, 140, 60, 45, 45, 84, 55, 30];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Defects Count",
        data: values,
        backgroundColor: [
          "#FFA500", "#808080", "#0000FF", "#FFD700", "#FF1493", "#20B2AA",
          "#32CD32", "#C71585", "#1E90FF", "#4B0082", "#228B22", "#DC143C", "#D2691E"
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "x", // Vertical Bar Chart
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
      datalabels: {
        color: "blue",
        font: { weight: "bold", size: 12 },
        anchor: "end",
        align: "top",
        formatter: (value) => value,
      },
    },
    scales: {
      x: {
        title: { display: true, text: "DEFECTS" },
        ticks: {
          autoSkip: false,
          maxRotation: 90, // Rotate labels to be beside bars
          minRotation: 90,
          padding: 10,
          font: { size: 10 },
        },
      },
      y: {
        title: { display: true, text: "COUNT" },
        beginAtZero: true,
        max: 200,
        ticks: {
          stepSize: 25,
        },
      },
    },
  };

  return (
    <div style={{ width: "1000px", height: "600px", margin: "auto" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default DefectsChart;
