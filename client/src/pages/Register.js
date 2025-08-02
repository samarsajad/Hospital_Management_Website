import React, { useState,useContext } from 'react';
import { registerUser } from "../authApi";
import './Login.css';
import {useNavigate} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Register= () => {
    const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const[username,setName]=useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await registerUser(username, email, password);
       login(res.data.token);
      alert("Registration successful!");
       navigate("/");
      console.log("New User:", res.data);
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <h2>MidCity Hospital</h2>
        </div>
        <h2>Welcome To Our Hospital</h2>
        <div>
            <label>Name</label>
          <input
            type="name"
            name="username"
            value={username}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="input"
          />

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

          <button type="submit" className="login-btn">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
