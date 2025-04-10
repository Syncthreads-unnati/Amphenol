import React from "react";
import "./fingerprintlogin.scss";
import { FaFingerprint } from "react-icons/fa";

const FingerprintLogin = () => {
  const handleFingerprintAuth = () => {
    alert("Fingerprint Authentication Triggered!");
  };

  const handleUsernamePasswordLogin = () => {
    alert("Switching to Username/Password Login!");
  };

  return (
    <div className="login-container">
    <div className="login-card">
      <h2 className="login-title">Login with Fingerprint</h2>
      <p className="login-subtitle">Tap the Fingerprint to authenticate</p>

      <div className="fingerprint-icon">
        <img src="your-fingerprint-icon-path.svg" alt="Fingerprint Icon" />
      </div>

      <div className="divider">
        <span>Or</span>
      </div>

      <button className="login-button">Login with Username and Password</button>
    </div>
  </div>
  );
};

export default FingerprintLogin;
