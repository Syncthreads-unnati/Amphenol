import { useState } from "react";
import DefectTable from "../defectTable/defectTable";
import PieChart from "../piechart/piechart";
import "./defects.scss";
import ToggleButton from "../toggleButton/toggleButton";
import DefectsChart from "../defects-barchart/defectsChart";
import { toggleData } from "../../constants/constants";
const Defects = () => {
    const [activeTab, setActiveTab] = useState("pie chart");
  return (
    <div className="defects-chartOptions">
      <ToggleButton toggledata={toggleData} activeTab={activeTab} setActiveTab={setActiveTab}/>
      <div className="defects-container">
        {
        activeTab == "pie chart" ?
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
