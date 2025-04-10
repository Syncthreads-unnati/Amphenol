import React, { useState } from "react";
import "./login.scss";
import { FaUser, FaLock, FaEye, FaFingerprint } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // assuming you're using react-router

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy check (replace this with real authentication later)
    if (username === "admin" && password === "admin123") {
      navigate("/dashboard"); // Redirect to Admin Dashboard
    } else if (username === "user" && password === "user123") {
      navigate("/usercontrol"); // Redirect to User Dashboard
    } else {
      alert("Invalid credentials!");
    }
  };

  const handleFingerprintLogin = () => {
    // Dummy action for fingerprint login
    alert("Fingerprint login triggered!");
    navigate("/fingerprintlogin"); 
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-avatar">
          <FaUser className="avatar-icon" />
        </div>
        <form className="login-form" onClick={handleLogin}>
          <div class="input-group">
            <span class="icon">
              <img src="user-icon.png" alt="User Icon" />
            </span>
            <input
              type="text"
              placeholder="User name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div class="input-group">
            <span class="icon">
              <img src="password-icon.png" alt="Password Icon" />
            </span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-btn">
            LOG IN
          </button>

          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#" className="forgot-password">
              Forgot Password
            </a>
          </div>

          <div className="divider">
            <span>Or</span>
          </div>

          <div className="fingerprint-login" onClick={handleFingerprintLogin}>
            <FaFingerprint className="fingerprint-icon" />
            <p>Login with Fingerprint</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
