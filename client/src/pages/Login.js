import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Use AuthContext

  const url = process.env.REACT_APP_BACKEND_URL || "http://localhost:5001";

  // ---------- Email/Password Login ----------
  const handleSubmit = (e) => {
    e.preventDefault();
    // Mocking navigation to /dashboard as requested
    navigate("/dashboard");
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
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>MidCity Hospital</h2>

        <GoogleLogin onSuccess={handleGoogleLogin} />

        <p>Or login with email and password:</p>

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />

        <p>
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>

        <button type="submit">Sign In</button>

        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>

      <div className="admin-access-section">
        <p className="admin-subtle-label">For Admin</p>
        <button 
          className="admin-portal-btn" 
          onClick={() => navigate("/admin-dashboard")}
        >
          Go to Admin Portal
        </button>
      </div>
    </div>
  );
};

export default Login;
