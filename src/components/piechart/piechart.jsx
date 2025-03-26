import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, Text } from "recharts";
import "./piechart.scss";
const data = [
  { name: "1", value: 50 },
  { name: "2", value: 50 },
  { name: "3", value: 20 },
  { name: "4", value: 120 },
  { name: "5", value: 60 },
  { name: "6", value: 40 },
  { name: "7", value: 140 },
  { name: "8", value: 60 },
  { name: "9", value: 45 },
  { name: "10", value: 45 },
  { name: "11", value: 84 },
  { name: "12", value: 56 },
  { name: "13", value: 30 },
];

// Custom background colors
const backgroundColor = [
  "#FFA322",
  "#7E7E7E",
  "#4085FF",
  "#FFEC61",
  "#F1589B",
  "#4EC8B0",
  "#96C923",
  "#DC3CA9",
  "#49C2FF",
  "#7341D5", 
  "#0CA70C",
  "#E74649",
  "#D89447",
];

const PieChartComponent = () => {
  const percentage = (value) => {
    return (value / 1400) * 100;
  };

  return (
    <PieChart width={600} height={600} className="pie-chart-container">
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={({ name, x, y }) => (
          <text
            x={x}
            y={y}
            fill="#3E4CA7" // Change label color
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={14} // Optional: Adjust font size
            fontWeight="bold" // Optional: Make text bold
          >
            {name}
          </text>
        )}
        outerRadius={260}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={backgroundColor[index]} />
        ))}
      </Pie>

      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={260}
        fill="#8884d8"
        dataKey="value"
        label={({ cx, cy, midAngle, innerRadius, outerRadius, value }) => {
          const RADIAN = Math.PI / 180;
          const radius = innerRadius + (outerRadius - innerRadius) * 0.7;
          const x = cx + radius * Math.cos(-midAngle * RADIAN);
          const y = cy + radius * Math.sin(-midAngle * RADIAN);

          // Calculate percentage
          const percentage = ((value / 1400) * 100).toFixed(2);

          return (
            <text
              x={x}
              y={y}
              fill="black"
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={"1.2rem"}
              fontWeight="bold"
            >
              {`${percentage}%`}
            </text>
          );
        }}
        labelLine={false}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={backgroundColor[index]} />
        ))}
      </Pie>

      <Tooltip />
    </PieChart>
  );
};

export default PieChartComponent;
