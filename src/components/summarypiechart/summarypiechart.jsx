import React from "react";
import PieChartComponent from "../../components/piechart/piechart";
import DefectTable from "../../components/defectTable/defectTable";
import { pielotData } from "../../constants/constants";
import close from "../../assets/image/close.png";
import "./summarypiechart.scss";

const SummaryPieChart = ({ view, onClose, width, height, outerRadius }) => {
  return (
    <div>
      <div className="lot-card-header"> Summary Pie chart</div>
      <div className={`summary-pie-chart-container ${!view ? "__gap":""}`}>   
        {view && (
          <span className="close-btn" onClick={() => onClose()}>
            <img src={close} />
          </span>
        )}
        {!view ? (
          <div className={`summary-lot-container ${!view ? "__history":""}`}>
            {pielotData.map((lot) => (
              <div key={lot.id} className="summary-lot-card">
                <span className="summary-lot-label">LOT {lot.id}</span>
                <span className="summary-lot-value">{lot.value}</span>
                <span className="summary-lot-total">/ 1400</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="summary-lot-container">
            <div  className="summary-lot-card">
              <span className="summary-lot-label">max</span>
              <span className="summary-lot-value">140</span>
              <span className="summary-lot-total">/ 1400</span>
            </div>
            <div  className="summary-lot-card">
              <span className="summary-lot-label">min</span>
              <span className="summary-lot-value">120</span>
              <span className="summary-lot-total">/ 1400</span>
            </div>
          </div>
        )}

        <div className="defects-container">
          <div className="defects-chart">
            <PieChartComponent
              width={width}
              height={height}
              outerRadius={outerRadius}
            />
          </div>
          <div className="defects-table">
            <DefectTable />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SummaryPieChart;
