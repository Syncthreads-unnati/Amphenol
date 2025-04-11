import React, { useState } from "react";
import systemSetting from "../../assets/image/system-setting.png";
import "./systemcontrol.scss";
import HealthParameters from "./healthParameter";
import RecordSetting from "./RecordSettings";
import NetworkSetting from "./networkSetting";
import { useNavigate } from "react-router";

const SystemControl = () => {
  const [connectivity, setConnectivity] = useState("On");
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  }
  const handleChange = (e) => {
    setConnectivity(e.target.value);
  };
  return (
    <div className="container">
      <div className="header">
        <div className="title">
          <span className="icon">
            <img src={systemSetting} alt="systemSetting" />
          </span>
          System Control
        </div>
        <div className="maintenance">
          Last Maintenance Carried Out On 24 April 2025
        </div>
      </div>
        <HealthParameters />
      <NetworkSetting
        headingLabel={"Network Settings"}
        label={"Network Connectivity"}
        value={connectivity}
        onChange={handleChange}
      />
      <RecordSetting />
      <NetworkSetting
        headingLabel={"Data Saving"}
        label={"Maximum Data Save"}
        value={connectivity}
        onChange={handleChange}
      />
      <NetworkSetting
        headingLabel={"Power Saving Mode"}
        label={"Sleep Timer"}
        value={connectivity}
        onChange={handleChange}
      />
      <div className="system-control">
        <div className="system-control__header">
          <h2 className="system-control__title">Notification Settings</h2>
        </div>
        <div className="system-control__network-checkbox">
        <input
          type="checkbox"
          checked={false}
          onChange={() => {}}
        />
        <label>Email Alerts</label>
        <input
          type="email"
          className="network-settings__input"
          placeholder="Enter Email Address"
          checked={false}
          onChange={() => {}}
        />
        </div>
      </div>
      <div className="bottom-buttondiv">
        <button className="bottom-button __back-button" onClick={()=>handleBack()}>Back</button>
        <button className="bottom-button __save-setting">Save Settings</button>
        <button className="bottom-button __bottom-reset">Reset</button>
      </div>
    </div>
  );
};

export default SystemControl;
