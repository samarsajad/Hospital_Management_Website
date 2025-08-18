import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Login.css";
import { loginUser } from "../authApi";
import { GoogleLogin } from "@react-oauth/google";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();



    const url = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser(email, password);
      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
      navigate("/");
      login(res.data.token);
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };
  const googleLogin = async (credentialResponse) => {
    try {
      const token = credentialResponse.credential;
      const res = await axios.post(`${url}/api/auth/google-login`, {
        credential: token,
      });
      localStorage.setItem("token", res.data.token);
      login(res.data.token);
      navigate("/");
    } catch (error) {
      console.error("Google login failed:", error);
      alert(error.response?.data?.message || "Google Login failed");
    }
  };

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <h2>MidCity Hospital</h2>
        </div>
        <h2>Hey there!👋</h2>
        <GoogleLogin onSuccess={googleLogin} />
        <p>Enter your email and password to Login</p>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="input"
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="input"
          />

          <button type="submit" className="login-btn">
            Sign IN
          </button>

          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
