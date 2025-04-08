import React, { useState } from "react";
import { FiDownload } from "react-icons/fi";
import "./exportpopup.scss";

const ExportPopup = ({ open, onClose }) => {
  const [emailOption, setEmailOption] = useState("detailed");
  const [downloadOption, setDownloadOption] = useState("listing");

  if (!open) return null;

  return (
    <div className="export-popup-overlay">
      <div className="export-popup">
        <h2 className="export-title">EXPORT</h2>

        <div className="export-section">
          <h3>Email Report</h3>
          <label>
            <input
              type="radio"
              value="summary"
              checked={emailOption === "summary"}
              onChange={() => setEmailOption("summary")}
            />
            Summary
          </label>
          <label>
            <input
              type="radio"
              value="detailed"
              checked={emailOption === "detailed"}
              onChange={() => setEmailOption("detailed")}
            />
            Detailed Listing
          </label>
        </div>

        <div className="export-divider">OR</div>

        <div className="export-section">
          <h3>Download Report</h3>
          <label>
            <input
              type="radio"
              value="summary"
              checked={downloadOption === "summary"}
              onChange={() => setDownloadOption("summary")}
            />
            Summary
          </label>
          <label>
            <input
              type="radio"
              value="listing"
              checked={downloadOption === "listing"}
              onChange={() => setDownloadOption("listing")}
            />
            Listing (.xls)
          </label>
          <label>
            <input
              type="radio"
              value="entire"
              checked={downloadOption === "entire"}
              onChange={() => setDownloadOption("entire")}
            />
            Entire Data (including photographs)
          </label>
        </div>

        <div className="export-actions">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button className="export-btn">
            <FiDownload /> Export
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExportPopup;
