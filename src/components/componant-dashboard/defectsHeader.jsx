import React from "react";
import "./component-dashboard.scss";
const Header = () => {
  return (
    <div className="header">
      <span>CURRENT COMPONENT NUMBER - <strong>1400</strong></span>
      <button className="live-button">LIVE</button>
    </div>
  );
};

export default Header;
