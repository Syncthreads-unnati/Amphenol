import live from "../../assets/image/live.png";
import history from "../../assets/image/history.png";
import setting from "../../assets/image/setting.png";
import logo from "../../assets/image/logo.png";

import battery from "../../assets/image/battery.png";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <nav className="nav-left">
        <button className="live-btn">
        <span className="icon"><img src={live} alt="live" /></span> 
        <span>Live</span>
        </button>
        <button className="nav-item">
          <img src={history} alt="history" />
          <span>History</span>
        </button>
        <button className="nav-item">
          <img src={setting} alt="setting" />
          <span>Setting</span>
        </button>
      </nav>
      <nav className="nav-right">
        <div className="icon-container">
          <img src={logo} alt="logo" />
        </div>
        <div className="user-badge">
          NV
        </div>
        <div className="battery-icon">
          <img src={battery} alt="battery" />
        </div>

        <div className="time">
          <span>10:30</span>
          <span>14-06-2024</span>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
