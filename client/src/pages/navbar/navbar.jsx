import live from "../../assets/image/live.png";
import history from "../../assets/image/history.png";
import setting from "../../assets/image/setting.png";
import logo from "../../assets/image/logo.png";
import battery from "../../assets/image/battery.png";
import { useState } from "react";
import { useNavigate } from "react-router";
import "./navbar.scss";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState("live");
  const { user } = useSelector((state) => state.auth);

  const handleTabChange = (value) => {
    setTab(value);
    if (value == "live") {
      navigate("/");
    } else {
      navigate(`/${value}`);
    }
  };

  const handleLogout = () => {
    // Perform logout logic here (e.g., clear tokens, redirect to login page)
    navigate("/"); // Redirect to login page
  };

  return (
    <nav className="navbar">
      <nav className="nav-icon">
        <div className="icon-container">
          <img src={logo} alt="logo" />
        </div>
        <nav className="nav-left">
          {user.userName != "admin" && (
            <><button
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
          </>
          )}
          <button
            className={tab == "setting" ? `click-btn` : `nav-item`}
            onClick={() => handleTabChange("setting")}
          >
            <img src={setting} alt="setting" />
            <span>Setting</span>
          </button>
        </nav>
      </nav>
      {user.userName == "admin" && <nav className="nav-center">ADMINISTARTION</nav>}

      <nav className="nav-right">
        <div className="user-badge" onClick={() => handleLogout()}>
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
