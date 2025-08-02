import { useState, useEffect, useContext } from 'react';
import './styles.css';
import logoLight from '../assets/logo-web.jpg';
import logoDark from '../assets/logo-dark-mode.png';
import { Link } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import {
  FaHome,
  FaInfoCircle,
  FaCog,
  FaUserMd,
  FaPhone,
  FaMoon,
  FaSun,
} from 'react-icons/fa';
import { HiOutlineUser } from "react-icons/hi";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const { isAuthenticated, logout } = useContext(AuthContext);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <header className="header_container nav-h">
      <div className="logo-container">
        <img
          src={darkMode ? logoDark : logoLight}
          alt="Company Logo"
          className="logo-img"
        />
      </div>

      <nav className="nav_menu">
        <ul className="nav_link">
          <li><Link to="/#home"><FaHome /> <span>Home</span></Link></li>
          <li><Link to="/#about"><FaInfoCircle /> <span>About</span></Link></li>
          <li><Link to="/#services"><FaCog /> <span>Services</span></Link></li>
          <li><Link to="/#doctors"><FaUserMd /> <span>Doctors</span></Link></li>
          <li><Link to="/#contact"><FaPhone /> <span>Contact</span></Link></li>
          <li>
            <button
              className="dark-toggle-btn"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </li>
          <li>
            {isAuthenticated ? (
              <button className="nav-auth-btn" onClick={logout}>
                <HiOutlineUser />Logout
              </button>
            ) : (
              <Link to="/login" className="nav-auth-btn">
                <HiOutlineUser />Login
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
