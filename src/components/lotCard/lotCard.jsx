import React from "react";
import { FaWrench, FaExclamationTriangle, FaCheckCircle } from "react-icons/fa";
import "./LoatCard.scss";

const LotCard = ({ lot }) => {
  return (
    <div className="lot-card">
      <h3 className="lot-title">LOT {lot.id}</h3>

      {/* Count Summary */}
      <div className="count-summary">
        <div className="count-box">
          <FaWrench className="icon" />
          <span className="label">TOTAL COUNT</span>
          <strong>{lot.totalCount}</strong>
        </div>
        <div className="count-box defect">
          <FaExclamationTriangle className="icon" />
          <span className="label">DEFECT COUNT</span>
          <strong>{lot.defectCount}</strong>
        </div>
        <div className="count-box ok">
          <FaCheckCircle className="icon" />
          <span className="label">OK COUNT</span>
          <strong>{lot.okCount}</strong>
        </div>
      </div>

      {/* Lot Details */}
      <div className="lot-details">
        <p>
          <span>Connector Type</span> {lot.connectorType}
        </p>
        <p>
          <span>Start Date</span> {lot.startDate}
        </p>
        <p>
          <span>End Date</span> {lot.endDate}
        </p>
        <p>
          <span>Start Time</span> {lot.startTime}
        </p>
        <p>
          <span>End Time</span> {lot.endTime}
        </p>
      </div>
    </div>
  );
};

export default LotCard;
