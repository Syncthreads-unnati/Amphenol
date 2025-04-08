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
// import { graphlabels,graphvalues,graphbackgroundColors } from "../../constants/constants";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const DefectsChart = ({labels,values,graphbackgroundColor}) => {  

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Defects Count",
        data: values,
        backgroundColor: graphbackgroundColor,
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
