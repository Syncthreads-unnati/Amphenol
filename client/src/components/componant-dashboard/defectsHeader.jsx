import React from "react";
import leftArrow from "../../assets/image/left-arrow.png";
import rightArrow from "../../assets/image/right-arrow.png";
import "./component-dashboard.scss";
const Header = () => {
  return (
    <div className="header-component">
      <div className="header">
        <span>
          CURRENT COMPONENT NUMBER - <strong>1400</strong>
        </span>
        <button className="live-button">LIVE</button>
      </div>
      <div className="header-bottom"></div>
      <div className="header-arrow">
      <div>
        <img src={leftArrow} />
      </div>
      <div>
        <img src={rightArrow} />
      </div>
      </div>
    </div>
  );
};

export default Header;
