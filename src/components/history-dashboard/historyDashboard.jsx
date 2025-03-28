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
    </div>
  );
};

export default HistoryDashboard;
