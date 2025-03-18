import React from "react";
import "./defectPopup.scss";

const DefectPopup = ({ isOpen, onClose, componentData,componentImage }) => {
    console.log(componentImage);
    
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="popup-header">
          <h2>Current Component Number - {componentData.number}</h2>
          <button className="close-btn" onClick={onClose}>✖</button>
        </div>

        <div className="popup-body">
          {/* Table Section */}
          <div className="table-container">
            <div className="table-header">
              <div className="column defect-type">Defect Type</div>
              <div className="column count">Count</div>
              <div className="column probability">Probability</div>
            </div>

            {componentData.defects.map((defect, index) => (
              <div key={index}>
                {/* Main defect row */}
                <div className="table-row defect-main">
                  <div className="column defect-type">{defect.name}</div>
                  <div className="column count">{defect.count}</div>
                  <div className="column probability">{defect.avgProbability}%</div>
                </div>

                {/* Sub defect rows */}
                {defect.instances.map((instance, i) => (
                  <div key={i} className="table-row defect-sub">
                    <div className="column defect-type">{`> ${instance.name}`}</div>
                    <div className="column count">1</div>
                    <div className="column probability">{instance.probability}%</div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Image Section */}
          <div className="defect-image">
            <img src={componentImage} alt="Defect Visualization" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefectPopup;
