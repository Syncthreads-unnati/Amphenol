import React, { useState } from "react";
import tabler_copy from "../../assets/image/tabler_copy.png";
import tabler_copy_white from "../../assets/image/tabler_copy_white.png";
import deletebutton from "../../assets/image/deletebutton.png";
import delete_button_white from "../../assets/image/delete_white.png";
import "./recordSettings.scss";

const RecordSetting = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [tabChange, setTabChange] = useState("Copy Data");
  const [files, setFiles] = useState([]);
  const [folderName, setFolderName] = useState("");
  const [pendriveConnected, setPendriveConnected] = useState(true);
  const [destinationPath, setDestinationPath] = useState("E:/Defect_Images");

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    if (selectedFiles.length > 0) {
      // Get the full relative path of the first file
      const firstFilePath = selectedFiles[0].webkitRelativePath;
      // Extract the folder name (everything before the first '/')
      const folder = firstFilePath.split("/")[0];
      setFolderName(folder);
    }
  };

  const handleChoosePath = () => {
    // Dummy action
    alert("Choose path clicked!");
  };

  const handleCopy = async () => {
    alert("Copy action triggered!");
    if (!folderName || files.length === 0) {
      alert("Please select a folder to copy.");
      return;
    }

    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });
    formData.append("destinationPath", destinationPath);

    try {
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        alert("Files copied successfully!");
      } else {
        alert("Failed to copy files.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error copying files.");
    }
  };

  return (
    <div className="record-setting">
      <h2 className="record-setting__title">Record Setting</h2>

      <div className="record-setting__top-buttons">
        <div className="record-setting__tabchange-button">
          <button
            className={`${tabChange === "Copy Data" ? "active" : ""}`}
            onClick={() => setTabChange("Copy Data")}
          >
            <span>
              <img src={tabler_copy} alt="tabler_copy" />
            </span>
            <span>Copy Data</span>
          </button>
          <button
            className={`${tabChange === "Delete Data" ? "active" : ""}`}
            onClick={() => setTabChange("Delete Data")}
          >
            <span>
              <img src={deletebutton} alt="deletebutton" />
            </span>
            Delete Data
          </button>
        </div>
        <div
          className={`${
            pendriveConnected ? "status connected" : " status not-connected"
          }`}
        >
          {!pendriveConnected ? (
            <>
              <span className="status-dot" />
              Pen Drive Not Connected
            </>
          ) : (
            <>
              <span className="status-connected" />
              Pen Drive Connected (E:/)
            </>
          )}
        </div>
      </div>

      <div className="record-setting__form">
        <div className="record-setting__row">
          <div className="record-setting__field">
            <label>From</label>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </div>

          <div className="record-setting__field">
            <label>To</label>
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </div>
        </div>

        <div className="record-setting__field">
          <label>Select Images </label>

          <label className="custom-file-upload">
            <input
              type="file"
              multiple
              webkitdirectory="true"
              directory="true"
              onChange={handleFileChange}
            />
            <span className="file-name">
              {folderName || "No folder chosen"}
            </span>
          </label>
        </div>

        {tabChange == "Copy Data" && (
          <div className="record-setting__field destination">
            <label>Destination Path</label>
            <div className="destination-input">
              <input type="text" value={destinationPath} readOnly />
              <button onClick={handleChoosePath}>Choose Path</button>
            </div>
          </div>
        )}

        <button
          className={`${
            tabChange == "Copy Data" ? "copy-btn" : "copy-btn delete-btn"
          }`}
          onClick={handleCopy}
        >
          {tabChange == "Copy Data" ? (
            <img src={tabler_copy_white} alt="copy" />
          ) : (
            <img src={delete_button_white} alt="delete" />
          )}
          {tabChange == "Copy Data" ? "Copy" : "Delete"}
        </button>
      </div>
    </div>
  );
};

export default RecordSetting;
