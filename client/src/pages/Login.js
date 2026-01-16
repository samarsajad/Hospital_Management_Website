import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import { AuthContext } from "../context/AuthContext";
import { FaUserMd, FaLock, FaGoogle, FaEnvelope } from "react-icons/fa";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  
  const url = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

  // ---------- Email/Password Login ----------
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${url}/api/auth/login`, { email, password });

      if (!res.data.success) {
        alert(res.data.message);
        return;
      }

      const { token, role } = res.data;

      // Update AuthContext and localStorage
      login(token); // sets isAuthenticated to true
      localStorage.setItem("role", role);

      // Redirect based on role
      if (role === "admin") navigate("/admin");
      else navigate("/");
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  // ---------- Google Login ----------
  const handleGoogleLogin = async (credentialResponse) => {
    try {
      const res = await axios.post(`${url}/api/auth/google-login`, {
        credential: credentialResponse.credential,
      });

      if (!res.data.success) {
        alert(res.data.message);
        return;
      }

      const { token, role } = res.data;

      // Update AuthContext and localStorage
      login(token);
      localStorage.setItem("role", role);

      if (role === "admin") navigate("/admin");
      else navigate("/");
    } catch (error) {
      console.error("Google login failed:", error);
      alert(error.response?.data?.message || "Google login failed");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.loginHeader}>
          <FaUserMd className={styles.loginIcon} />
          <h2>Welcome Back</h2>
          <p>Sign in to access your account</p>
        </div>

        {error && <div className={styles.errorMessage}>{error}</div>}

        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <div className={styles.formGroup}>
            <div className={styles.inputGroup}>
              <FaEnvelope className={styles.inputIcon} />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                required
                className={styles.inputField}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <div className={styles.inputGroup}>
              <FaLock className={styles.inputIcon} />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                required
                className={styles.inputField}
              />
            </div>
          </div>

          <div className={styles.forgotPassword}>
            <Link to="/forgot-password" className={styles.forgotLink}>
              Forgot Password?
            </Link>
          </div>

          <button 
            type="submit" 
            className={styles.loginButton}
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>

          <div className={styles.divider}>
            <span>OR</span>
          </div>

          <div className={styles.socialLogin}>
            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={() => {
                setError("Google login failed. Please try again.");
              }}
              useOneTap
              theme="filled_blue"
              size="large"
              text="signin_with"
              shape="rectangular"
              width="100%"
              className={styles.googleButton}
            />
          </div>
        </form>

        <div className={styles.signupLink}>
          Don't have an account?{' '}
          <Link to="/register" className={styles.signupText}>
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
