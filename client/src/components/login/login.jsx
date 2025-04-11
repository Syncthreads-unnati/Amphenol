import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaFingerprint } from "react-icons/fa";
import profile from "../../assets/image/profile.png"; // your profile image
import usericon from "../../assets/image/user-icon.png"; // user icon image
import passwordicon from "../../assets/image/password-icon.png"; // password icon
import fingerprint from "../../assets/image/Capa_1.png";
import { loginUser } from "../../redux/login";
import {
  Snackbar,
  Alert,
  IconButton,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import "./login.scss"; // Assuming you are using external CSS
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    type: "",
  });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(loginUser({ username, password }));

      if (loginUser.fulfilled.match(resultAction)) {
        const username = resultAction.payload.userName;
        if (username === "admin") {
          navigate("/usercontrol");
        } else if (username === "user") {
          navigate("/dashboard");
        }
        setSnackbar({
          open: true,
          message: `Login Successful! Logged`,
          severity: "success",
        });
      } else {
        setSnackbar({
          open: true,
          message: resultAction.payload,
          severity: "error",
        });
      }
    } catch (err) {
      setSnackbar({ open: true, message: "Login failed.", severity: "error" });
    }
  };
  // console.log("state",username, password);

  const handleFingerprintLogin = () => {
    // alert("Fingerprint login triggered!");
    navigate("/fingerprintlogin");
  };
  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <>
      <div className="loginpage login-container">
        <div className="login-card">
          <div className="login-avatar">
            <img src={profile} alt="profile" />
          </div>
          <form className="login-form" onSubmit={handleLogin}>
            <div className="input-group">
              <span className="icon">
                <img src={usericon} alt="User Icon" />
              </span>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <span className="icon">
                <img src={passwordicon} alt="Password Icon" />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <Button
              type="submit"
              variant="contained"
              className={"login-btn"}
              // disabled={loading}
              fullWidth
            >
              Log in
              {/* {loading ? <CircularProgress size={24} /> : "LOG IN"} */}
            </Button>

            <div className="login-options">
              <label className="remember-me">
                <input type="checkbox" /> Remember Me
              </label>
              <a href="#" className="forgot-password">
                Forgot Password?
              </a>
            </div>

            <div className="divider">
              <div className="line" />
              <span className="text">Or</span>
              <div className="line" />
            </div>

            <div className="fingerprint-login" onClick={handleFingerprintLogin}>
              <p>Login with Fingerprint</p>
              <div className="fingerprint-icon">
                <img src={fingerprint} alt="Fingerprint Icon" />
              </div>
            </div>
          </form>
        </div>
        <Snackbar
          open={snackbar.open}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </div>
    </>
  );
};

export default Login;
