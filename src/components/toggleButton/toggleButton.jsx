import React, { useState } from "react";
import "./toggleButton.scss"; // Import SCSS

const ToggleButton = () => {
  const [activeTab, setActiveTab] = useState("pie");
    
  return (
    <div className="toggle-container">
      <div className="toggle-button">
        <button
          className={activeTab === "pie" ? "active" : ""}
          onClick={() => setActiveTab("pie")}
        >
          PIE CHART
        </button>
        <button
          className={activeTab === "graph" ? "active" : ""}
          onClick={() => setActiveTab("graph")}
        >
          GRAPH
        </button>
      </div>
    </div>
  );
};

export default ToggleButton;
