import React, { useState } from "react";
import "./toggleButton.scss"; // Import SCSS

const ToggleButton = ({toggledata,activeTab, setActiveTab}) => {
  // const [activeTab, setActiveTab] = useState("pie");
    
  return (
    <div className="toggle-container">
      <div className="toggle-button">
        {
          toggledata.map((data, index) => (
            <button
              key={index}
              className={activeTab === data.name ? "active" : ""}
              onClick={() => setActiveTab(data.name)}
            >
              {data.name.toUpperCase()}
            </button>
          ))
        }
      </div>
    </div>
  );
};

export default ToggleButton;
