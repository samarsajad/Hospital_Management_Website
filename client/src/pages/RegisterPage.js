import React from 'react';
import './RegisterPage.css';
import axios from 'axios';

function RegisterPage() {
  
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [role, setRole] = React.useState('user');
  const [loading, setLoading] = React.useState(false);

  async function handleRegister(e){
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        username,
        email,
        password,
        role
      });
      if(response.status === 400){
        alert(response.data.message);
      }
      if(response.status === 201){
        alert("Registration successful! Please login.");
        window.location.href = "/login";
      }
      
    } catch (error) {
      console.error("Registration error", error);
      alert(error.response?.data?.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="register-title">Create Account</h2>
        <form className="register-form" onSubmit={handleRegister}>
          <label>Full Name</label>
          <input type="text" placeholder="Enter your full name" onChange={(e) => setUsername(e.target.value)} required />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} required />

          <label>Password</label>
          <input type="password" placeholder="Create a password" onChange={(e) => setPassword(e.target.value)} required />

          <label>Role</label>
          <input type="text" value={role} onChange={(e) => setRole(e.target.value)} required />

          <button type="submit" disabled={loading}>{loading ? "Registering..." : "Register"}</button>
          <p className="login-link">Already have an account? <a href="/login">Login</a></p>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
