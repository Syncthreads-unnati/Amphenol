import React from "react";
import "./adminDashboard.scss";
import { FaUserCog, FaDesktop } from "react-icons/fa";
import { useNavigate } from "react-router";

const UserControl = () => {
  const navigate = useNavigate();
  const handleusercontrol =()=>{
    navigate("/usertable")
  }

  return (
    <div className="user-control-container">
      <div className="tab-buttons">
        <button onClick={() => handleusercontrol()}>
          <FaUserCog className="icon" /> User Control
        </button>
        <button>
          <FaDesktop className="icon" /> System Control
        </button>
      </div>
    </div>
  );
};

export default UserControl;
