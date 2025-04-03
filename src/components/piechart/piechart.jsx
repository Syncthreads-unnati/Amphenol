import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { pieChartData } from "../../constants/constants";
import { backgroundColor } from "../../constants/constants";
import "./piechart.scss";

const PieChartComponent = ({ fontSize }) => {
  return (
    <div className="pie-chart-container">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={pieChartData}
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
            outerRadius="90%"
            fill="#8884d8"
            dataKey="value"
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={backgroundColor[index]} />
            ))}
          </Pie>

          <Pie
            data={pieChartData}
            cx="50%"
            cy="50%"
            outerRadius="90%"
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
                  fontSize={fontSize}
                  fontWeight="bold"
                >
                  {`${percentage}%`}
                </text>
              );
            }}
            labelLine={false}
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={backgroundColor[index]} />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
