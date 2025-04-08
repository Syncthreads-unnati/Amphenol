import React from "react";
import "./historyPopup.scss";
import ComponentDashboard from "../componant-dashboard/component-dashboard";
const HistoryPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="history-popup">
      <div className="popup-content">
        <div className="popup-header">
          <h2>Current Component Number</h2>
          <button className="close-btn" onClick={onClose}>
            ✖
          </button>
        </div>
        <ComponentDashboard popup={true}/>
      </div>
    </div>
  );
};

export default HistoryPopup;
