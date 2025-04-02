import React, { useState } from "react";
import "./adminDashboard.scss";
import { FaUserCog, FaDesktop } from "react-icons/fa";
import UserControlTable from "../../components/usercontrol/usercontrolTable";

const UserControl = () => {
  const [selectedTab, setSelectedTab] = useState("User Control");


  return (
    <div className="user-control-container">
      <div className="tab-buttons">
        <button
          className={selectedTab === "User Control" ? "active" : ""}
          onClick={() => setSelectedTab("User Control")}
        >
          <FaUserCog className="icon" /> User Control
        </button>
        <button
          className={selectedTab === "System Control" ? "active" : ""}
          onClick={() => setSelectedTab("System Control")}
        >
          <FaDesktop className="icon" /> System Control
        </button>
      </div>
      
        <UserControlTable selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
    </div>
  );
};

export default UserControl;
