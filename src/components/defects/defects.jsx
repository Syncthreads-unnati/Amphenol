import { useState } from "react";
import DefectTable from "../defectTable/defectTable";
import PieChart from "../piechart/piechart";
import "./defects.scss";
import ToggleButton from "../toggleButton/toggleButton";
const Defects = () => {
  
  return (
    <div className="defects-chartOptions">
      <ToggleButton/>
      <div className="defects-container">
        <div className="defects-chart">
          <PieChart />
        </div>
        <div className="defects-table">
          <DefectTable />
        </div>
      </div>
    </div>
  );
};

export default Defects;
