import React from "react";
import "./pieCard.scss";
import PieChartComponent from "../piechart/piechart";

const PieCard = ({key,lot,PieCardData,handleViewClick}) => {

  return (
    <div key={key} className="chart-container">
      <div className="header">LOT 1 PIE CHART</div>
      <PieChartComponent width={250} height={250} outerRadius={80} fontSize={"0.7em"}/>

      <div className="defect-container">
        <div className="defect-card max-defect">
          <span className="max">Max Defect</span>
          <div className="value">
            <span className="label">CPPO(P)</span>
           <span> <span className="number">0140</span> / 1400</span>
          </div>
        </div>
        <div className="defect-card min-defect">
          <span className="min">Min Defect</span>
          <div className="value">
            <span className="label">DP</span>
            <span><span className="number">020</span> / 1400</span>
          </div>
        </div>
      </div>

      <button className="view-btn" onClick={handleViewClick} >View</button>
    </div>
  );
};

export default PieCard;