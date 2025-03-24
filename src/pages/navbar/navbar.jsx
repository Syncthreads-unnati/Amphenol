import live from "../../assets/image/live.png";
import history from "../../assets/image/history.png";
import setting from "../../assets/image/setting.png";
import logo from "../../assets/image/logo.png";
import battery from "../../assets/image/battery.png";
import company_logo from "../../assets/image/company_logo.png";
import "./navbar.scss";
import { useState } from "react";
import { useNavigate } from "react-router";

const Navbar = () => {
  const [tab, setTab] = useState("live");
  const navigate = useNavigate();
  const handleTabChange = (value) => {
    setTab(value);
    if (value == "live") {
      navigate("/");
    } else {
      navigate(`/${value}`);
    }
  };

  return (
    <nav className="navbar">
      <nav className="nav-icon">
        <div className="icon-container">
          <img src={company_logo} alt="logo" />
        </div>
        <nav className="nav-left">
          <button
            className={tab == "live" ? `click-btn` : `nav-item`}
            onClick={() => handleTabChange("live")}
          >
            <span className="icon">
              <img src={live} alt="live" />
            </span>
            <span>Live</span>
          </button>
          <button
            className={tab == "history" ? `click-btn` : `nav-item`}
            onClick={() => handleTabChange("history")}
          >
            <img src={history} alt="history" />
            <span>History</span>
          </button>
          <button
            className={tab == "setting" ? `click-btn` : `nav-item`}
            onClick={() => handleTabChange("setting")}
          >
            <img src={setting} alt="setting" />
            <span>Setting</span>
          </button>
        </nav>
      </nav>
      <nav className="nav-right">
        <div className="icon-container">
          <img src={logo} alt="logo" />
        </div>
        <div className="user-badge">NV</div>
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
