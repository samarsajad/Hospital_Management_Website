import { useState, useEffect } from "react";
import "./styles.css";
import logo from "../assets/logo-web.jpg";
import {
  FaHome,
  FaInfoCircle,
  FaCog,
  FaUserMd,
  FaPhone,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const { hash } = useLocation();

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash); // example : #home, #about, etc.
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <header className="header_container nav-h">
      <div className="logo-container">
        <img src={logo} alt="Company Logo" className="logo-img" />
      </div>

      <nav className="nav_menu">
        <ul className="nav_link">
          <li>
            <Link to="/#home">
              <FaHome /> <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/#about">
              <FaInfoCircle /> <span>About</span>
            </Link>
          </li>
          <li>
            <Link to="/#services">
              <FaCog /> <span>Services</span>
            </Link>
          </li>
          <li>
            <Link to="/#doctors">
              <FaUserMd /> <span>Doctors</span>
            </Link>
          </li>
          <li>
            <Link to="/#contact">
              <FaPhone /> <span>Contact</span>
            </Link>
          </li>
          <li>
            <button
              className="dark-toggle-btn"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
