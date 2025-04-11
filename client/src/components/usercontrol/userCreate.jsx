import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import biometric_image from "../../assets/image/biometric_image.png";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ErrorIcon from "@mui/icons-material/ErrorOutline";
import { userTypes } from "../../constants/adminconstant";
import  "./userCreate.scss";
const UserCreate = () => {
  const [email, setEmail] = useState("vishalsingh@amphenol.in");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState("");
  const [errors, setErrors] = useState({});
  const [biometric, setBiometric] = useState(false);
  const [biometricSubmitted, setBiometricSubmitted] = useState(false);
  const [biometricImages, setBiometricImages] = useState([biometric_image]);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "error",
  });

  // Validation Form
  const validateForm = () => {
    let newErrors = {};

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format.";
    } else if (email === "vishalsingh@amphenol.in") {
      newErrors.email = "User already Exist";
    }
    if (!userType.trim()) {
      newErrors.userType = "User type is required.";
    }
    // Password validation
    if (!password.trim()) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setSnackbar({
        open: true,
        message: Object.values(newErrors)[0], // show first error
        severity: "error",
      });
    }

    return Object.keys(newErrors).length === 0;
  };

  // Handle Biometric Submission
  const handleBiometricSubmit = () => {
    setBiometricSubmitted(true);
    setBiometric(false);
    setSnackbar({
      open: true,
      message: "Biometric authentication successfully added!",
      severity: "success",
    });
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (biometric) {
        setSnackbar({
          open: true,
          message: "Biometric authentication successfully added!",
          severity: "success",
        });
      } else {
        setSnackbar({
          open: true,
          message: "Form Submitted Successfully!",
          severity: "success",
        });
      }
    }
  };
  // Close Snack
  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <>
      <form className="usercraete-container" onSubmit={handleSubmit}>
        {!biometric && (
          <>
            <div className="input-group">
              <label>User Name</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="input-group">
              <label>User Type</label>
              <select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
              >
                <option value="">Select User Type</option>
                {userTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.userType && <p className="error">{errors.userType}</p>}
            </div>
            <div className="input-group password-group">
              <label>Password</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && <p className="error">{errors.password}</p>}
            </div>

            {!biometricSubmitted && (
              <button
                className="btn-primary biometric"
                onClick={() => setBiometric(true)}
              >
                Add Biometric
              </button>
            )}
            {/* Create Button (only visible after biometric submission) */}
            {biometricSubmitted && (
              <button
                className="btn-primary create-user"
                type="submit"
                onClick={handleSubmit}
              >
                Create
              </button>
            )}
          </>
        )}
        {biometric && !biometricSubmitted && (
          <div className="biometric">
            {email}
            <div className="biometric-images">
              {biometricImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Biometric ${index + 1}`}
                  width={100}
                />
              ))}
            </div>
            <button
              className="btn-primary btn-submit"
              onClick={handleBiometricSubmit}
            >
              Submit
            </button>
          </div>
        )}
      </form>
      {/* Custom Snackbar below form */}
      <Snackbar
        open={snackbar.open}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        onClose={handleCloseSnackbar}
        autoHideDuration={3000}
        className="custom-snackbar"
      >
        <div className={`snackbar-content ${snackbar.severity}`}>
          <ErrorIcon style={{ marginRight: 8 }} />
          <span>{snackbar.message}</span>
          <IconButton size="small" onClick={handleCloseSnackbar}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </div>
      </Snackbar>
    </>
  );
};

export default UserCreate;
