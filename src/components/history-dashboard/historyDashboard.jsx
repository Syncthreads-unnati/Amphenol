import React, { useState } from "react";
import bx_export from "../../assets/image/bx_export.png";
import "./historyDashboard.scss";

const HistoryDashboard = () => {
  // const [activeTab, setActiveTab] = useState("list");

  return (
    <div className="dashboard">
      {/* Stats Section */}
      <div className="stats-container">
      <button className="export-btn back-btn">
          {/* <img src={bx_export} alt="Export" /> */}
          BACK
        </button>
      <button className="export-btn">
          <img src={bx_export} alt="Export" />
          EXPORT
        </button>
        <div className="stat-card">
          <p>📦 LOT</p>
          <h2>0</h2>
        </div>
        <div className="stat-card">
          <p>🔧 TOTAL COUNT</p>
          <h2>0000</h2>
        </div>
        <div className="stat-card">
          <p>⚠️ DEFECT COUNT</p>
          <h2>000</h2>
        </div>
        <div className="stat-card">
          <p>✅ OK COUNT</p>
          <h2>000</h2>
        </div>
        
      </div>

      {/* Defect Summary */}
      {/* <div className="defect-summary">
        <div className="defect-box max-defect">
        <div className="defect-content">
          <span className="label">Max Defect:</span>
          <span className="defect-name">Deep Gate </span>
        </div>
        <span className="count">140</span>
        </div>
        <div className="defect-box min-defect">
          <div className="defect-content">
            <span className="label">Min Defect:</span>
            <span className="defect-name">Contact Plating Peel off (Pocket)</span>
          </div>
          <span className="count">140</span>
        </div>
      </div> */}
    </div>
  );
};

export default HistoryDashboard;
