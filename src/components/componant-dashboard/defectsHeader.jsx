import React from "react";
import "./component-dashboard.scss";
const Header = () => {
  return (
    <div className="header-component">
    <div className="header">
      <span>CURRENT COMPONENT NUMBER - <strong>1400</strong></span>
      <button className="live-button">LIVE</button>
    </div>
    <div className="header-bottom"></div>
    </div>

  );
};

export default Header;
