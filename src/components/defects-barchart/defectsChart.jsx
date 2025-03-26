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

  const backgroundColors = [
    "#FFA500", "#808080", "#4085FF", "#FFEC61", "#FF1493", "#4EC8B0",
    "#96C923", "#DC3CA9", "#49C2FF", "#7341D5", "#0CA70C", "#E74649", "#D89447"
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Defects Count",
        data: values,
        backgroundColor: backgroundColors,
        borderWidth: 1,
        barThickness: 20, // Reduced thickness for spacing
        categoryPercentage: 0.6, // Adjust category width
        barPercentage: 0.8, // Adjust individual bar width
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
      datalabels: {
        color: "#3E4CA7",
        font: { weight: "bold", size: 12 },
        anchor: "end",
        align: "top",
        clip: false,
        formatter: (value) => value,
      },
    },
    scales: {
      x: {
        title: { display: true, text: "DEFECTS" },
        ticks: {
          autoSkip: false,
          rotation: 90, // Rotate labels to vertical
          padding: 10, // More spacing from axis
          font: { size: 12 },
        },
        grid: { display: false },
      },
      y: {
        title: { display: true, text: "COUNT" },
        beginAtZero: true,
        max: 200, // Ensure correct range
        ticks: {
          stepSize: 25,
        },
        grid: { color: "#ebebeb" },
      },
    },
  };

  return (
    <div style={{ width: "80%", height:"500px", margin: "auto" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default DefectsChart;
