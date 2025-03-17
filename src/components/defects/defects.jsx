import { useState } from "react";
import DefectTable from "../defectTable/defectTable";
import PieChart from "../piechart/piechart";
import "./defects.scss";
import ToggleButton from "../toggleButton/toggleButton";
import DefectsChart from "../defects-barchart/defectsChart";
const Defects = () => {
    const [activeTab, setActiveTab] = useState("pie");
  return (
    <div className="defects-chartOptions">
      <ToggleButton activeTab={activeTab} setActiveTab={setActiveTab}/>
      <div className="defects-container">
        {
        activeTab == "pie" ?
          <>
          <div className="defects-chart">
          <PieChart />
          </div>
          <div className="defects-table">
          <DefectTable />
          </div>
          </>:
          <DefectsChart/>
        }
      </div>
    </div>
  );
};

export default Defects;
