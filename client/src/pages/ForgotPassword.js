import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Login.css"; 

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // You'll need to replace this with your actual backend URL
  const url = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      // This makes a request to your backend to handle the password reset logic
      const res = await axios.post(`${url}/api/auth/forgot-password`, { email });
      setMessage(res.data.message); // Display success message from the server
    } catch (err) {
      // Display an error if the request fails
      setError(err.response?.data?.message || "An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Forgot Password?</h2>
        <p className="description">
          No problem! Enter the email address associated with your account, and we'll send you a link to reset your password.
        </p>

        {/* Display success or error messages here */}
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="input"
            required
          />
        </div>

        <button type="submit" className="login-btn">
          Send Reset Link
        </button>

        <p className="description">
          Remember your password? <Link to="/login">Back to Login</Link>
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;
