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
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
     setLoading(true); 

    try {
      const res = await registerUser(username, email, password);
       login(res.data.token);
      alert("Registration successful!");
       navigate("/");
      console.log("New User:", res.data);
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
    finally{
      setLoading(false); 
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
            <a
            href="https://hospital-management-website-1-508b.onrender.com/api/auth"
            
           
          >
       <button style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"5px"}} type="submit" className="login-btn">
          <img style={{width:"30px"}} src="https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s96-fcrop64=1,00000000ffffffff-rw" alt="" />   {loading ? "Signing up..." : "Sign up with Google"}
          </button>
          </a>
        </div>
      </form>
    </div>
  );
};

export default Register;
