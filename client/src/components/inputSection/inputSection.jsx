import React, { useState } from "react";
import Rectangle from "../../assets/image/Rectangle.png";
import "./inputSection.scss";
import { connectorType } from "../../constants/constants";

const InputSection = () => {
  const [inputValue, setInputValue] = useState("1");
  const [selectedOption, setSelectedOption] = useState(connectorType[0] || "");
  const [started, setStarted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateInput = (value) => {
    return /^\d+$/.test(value) && parseInt(value) > 0; // Only positive integers
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (validateInput(value)) {
      setErrors((prev) => ({ ...prev, input: "" }));
      setInputValue(value);
    } else {
      setErrors((prev) => ({
        ...prev,
        input: "Enter a valid positive number.",
      }));
    }
  };

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    setErrors((prev) => ({
      ...prev,
      select: value ? "" : "Select a valid option.",
    }));
  };

  const isFormValid = validateInput(inputValue) && selectedOption;

  return (
    <div className="component-container">
      {/* Controls Section */}
      <div className="control-container">
        <div className="controls">
          <input type="text" value={inputValue} className="input-component" onChange={handleInputChange} />
          <select className="select-component" value={selectedOption} onChange={handleSelectChange}>
            {connectorType.map((item) => {
              return <option>{item}</option>;
            })}
          </select>
          {errors.select && <span className="error">{errors.select}</span>}
          <button
            className={`custom-button ${
              started ? "stop-button" : "start-button"
            }`}
            onClick={() => setStarted(!started)}
            disabled={!isFormValid}
          >
            {started ? "stop" : "start"}
          </button>
        </div>

        {/* Info Cards */}
        <div className="info-cards">
          <div className="card">
            <div className="label">
              <span>📦 LOT</span>
            </div>
            <div className="value">1</div>
          </div>
          <div className="card">
            <div className="label">
              <span>🔧 TOTAL COUNT</span>
            </div>
            <div className="value">1600</div>
          </div>
          <div className="card">
            <div className="label">
              <span>⚠️ DEFECT COUNT</span>
            </div>
            <div className="value">1000</div>
          </div>
          <div className="card">
            <div className="label">
              <span>✅ OK COUNT</span>
            </div>
            <div className="value">600</div>
          </div>
        </div>
      </div>
      {/* Image Section */}
      <div className="image-section">
        <div className="image-wrapper">
          <img src={Rectangle} alt="Component" />
          <div className="label">CURRENT COMPONENT</div>
        </div>
      </div>
    </div>
  );
};

export default InputSection;
