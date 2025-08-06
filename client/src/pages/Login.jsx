import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Login.css";
import { loginUser } from "../authApi";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[loading,setLoading]=useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await loginUser(email, password);
      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
      navigate("/");
      login(res.data.token);
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }finally{
        setLoading(false);
    }
  };

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <h2>MidCity Hospital</h2>
        </div>
        <h2>Hey there!👋</h2>
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

          <a
            href="https://hospital-management-website-1-508b.onrender.com/api/auth"
            
           
          >
       <button style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"5px"}} type="submit" className="login-btn">
          <img style={{width:"30px"}} src="https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s96-fcrop64=1,00000000ffffffff-rw" alt="" /> {loading?"Logging in...":"Sign in With Google"}
          </button>
          </a>

          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
