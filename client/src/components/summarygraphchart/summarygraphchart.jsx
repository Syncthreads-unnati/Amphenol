import React from "react";
import "./summarygraphchart.scss";
import { graphbackgroundColors, graphlabels, graphvalues, pielotData } from "../../constants/constants";
import DefectsChart from "../defects-barchart/defectsChart";

const SummarygraphChart = () => {
  return (
    <>
      <div className="lot-card-header"> Summary Graph chart</div>
      <div className="summary-graph-chart-container">
        <div className="summary-lot-container">
          {pielotData.map((lot) => (
            <div key={lot.id} className="summary-lot-card">
              <span className="summary-lot-label">LOT {lot.id}</span>
              <span className="summary-lot-value">{lot.value}</span>
              <span className="summary-lot-total">/ 1400</span>
            </div>
          ))}
        </div>
        <div>
            <DefectsChart labels={graphlabels} values={graphvalues} graphbackgroundColor={graphbackgroundColors}/>
        </div>
      </div>
    </>
  );
};

export default SummarygraphChart;
