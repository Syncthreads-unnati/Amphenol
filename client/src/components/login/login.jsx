import React from 'react';
import './login.scss';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-icon">
          <i className="fas fa-user"></i>
        </div>
        <form className="login-form">
          <div className="input-group">
            <i className="fas fa-user input-icon"></i>
            <input type="text" placeholder="User name" />
          </div>
          <div className="input-group">
            <i className="fas fa-lock input-icon"></i>
            <input type="password" placeholder="Password" />
            <i className="fas fa-eye toggle-password"></i>
          </div>
          <button type="submit" className="login-btn">LOG IN</button>
          <div className="login-options">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#" className="forgot-password">Forgot Password</a>
          </div>
          <div className="divider">
            <span>Or</span>
          </div>
          <div className="fingerprint-login">
            <i className="fas fa-fingerprint"></i>
            <p>Login with Fingerprint</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
