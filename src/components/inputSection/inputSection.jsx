// import { FaGift, FaListOl } from "react-icons/fa";
import React from "react";
import Rectangle from "../../assets/image/Rectangle.png";
import lot from "../../assets/image/lot.png";
import count from "../../assets/image/count.png";
import "./inputSection.scss";

const InputSection = () => {
  return (
    <div className="component-container">
      {/* Controls Section */}
      <div className="control-container">
        <div className="controls">
          <input type="text" value="1" className="input-component" />
          <select className="select-component">
            <option>106535-01</option>
            <option>106535-01</option>
            <option>106535-01</option>
            <option>106535-01</option>
          </select>
          <button className="stop-button">STOP</button>
        </div>

        {/* Info Cards */}
        <div className="info-cards">
          <div className="card">
            <div className="label">
             {/* <span> <img src={lot} alt="Lot" /></span> */}
              <span>📦 LOT</span>

            </div>
            <div className="value">1</div>
          </div>
          <div className="card">
            <div className="label">
              {/* <span>
                <img src={count} alt="Count" />
              </span> */}
              <span>🔧 TOTAL COUNT</span>
            </div>
            <div className="value">1600</div>
          </div>
          <div className="card">
            <div className="label">
              {/* <span>
                <img src={count} alt="Count" />
              </span> */}
              <span>⚠️ DEFECT COUNT</span>
            </div>
            <div className="value">1000</div>
          </div>
          <div className="card">
            <div className="label">
              {/* <span>
                <img src={count} alt="Count" />
              </span> */}
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
