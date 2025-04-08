import React from "react";
import DefectsChart from "../defects-barchart/defectsChart";
import {
    cardData,
  graphbackgroundColors,
  graphlabels,
  multiplegraphvalues,
} from "../../constants/constants";
import "./bargraphsummaryComponent.scss";
const BargraphSummaryComponent = () => {
  return (
    <>
      <div className="bargraph-summary">
        {multiplegraphvalues.map((graph, index) => {
          const values = graph.data.map((item) => item.value);
          const maxValue = Math.max(...values);
          const minValue = Math.min(...values);
          return (
            <>
              <div className="lot-card-header"> LOT {index + 1} PIE CHART</div>
              <div className="summary-pie-chart-container">
                <div className="summary-lot-container">
                    <div key={index} className="summary-lot-card">
                      <span className="summary-lot-label">max</span>
                      <span className="summary-lot-value">{maxValue}</span>
                      <span className="summary-lot-total">/ 1400</span>
                    </div>
                    <div key={index} className="summary-lot-card">
                      <span className="summary-lot-label">min</span>
                      <span className="summary-lot-value">{minValue}</span>
                      <span className="summary-lot-total">/ 1400</span>
                    </div>
                </div>
                <div>
                  <DefectsChart
                    labels={graphlabels}
                    values={values}
                    graphbackgroundColor={graphbackgroundColors}
                  />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default BargraphSummaryComponent;
