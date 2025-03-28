import React from "react";
import PieChartComponent from "../../components/piechart/piechart";
import DefectTable from "../../components/defectTable/defectTable";
import { pielotData } from "../../constants/constants";
import "./summarypiechart.scss";

const SummaryPieChart = () => {
  return (
    <>
      <div className="lot-card-header"> Summary Pie chart</div>
      <div className="summary-pie-chart-container">
        <div className="summary-lot-container">
          {pielotData.map((lot) => (
            <div key={lot.id} className="summary-lot-card">
              <span className="summary-lot-label">LOT {lot.id}</span>
              <span className="summary-lot-value">{lot.value}</span>
              <span className="summary-lot-total">/ 1400</span>
            </div>
          ))}
        </div>
        <div className="defects-container">
          <div className="defects-chart">
            <PieChartComponent width={600} height={600} outerRadius={260} />
          </div>
          <div className="defects-table">
            <DefectTable />
          </div>
        </div>
      </div>
    </>
  );
};
export default SummaryPieChart;
