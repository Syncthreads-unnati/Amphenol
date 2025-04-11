import React from "react";
import "./fingerprintlogin.scss";
import fingerprint from "../../assets/image/Capa_1.png"; // Adjust the path as necessary
import { useNavigate } from "react-router";

const FingerprintLogin = () => {
  const navigate = useNavigate();

  const handleFingerprintAuth = () => {
    alert("Fingerprint Authentication Triggered!");
  };

  const handleUsernamePasswordLogin = () => {
    navigate("/");
  };

  return (
    <div className="fingerprint login-container">
      <div className="login-card">
        <h2 className="login-title">Login with Fingerprint</h2>

        <div className="fingerprint-icon">
          <img src={fingerprint} alt="Fingerprint Icon" />
        </div>
        <p className="login-subtitle">Tap the Fingerprint to authenticate</p>

        <div className="divider">
          <div className="line" />
          <span className="text">Or</span>
          <div className="line" />
        </div>

        <div
          className="login-button"
          onClick={() => handleUsernamePasswordLogin()}
        >
          Login with Username and Password
        </div>
      </div>
    </div>
  );
};

export default FingerprintLogin;
