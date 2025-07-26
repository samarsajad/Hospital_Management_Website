import { useState, useEffect } from 'react';
import './styles.css';
import logo from '../assets/logo-web.jpg';
import {
  FaHome,
  FaInfoCircle,
  FaCog,
  FaUserMd,
  FaPhone,
  FaMoon,
  FaSun,
} from 'react-icons/fa';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

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
          src={logo}
          alt="Company Logo"
          className="logo-img"
        />
      </div>

      <nav className="nav_menu">
        <ul className="nav_link">
          <li><a href="#home"><FaHome /> <span>Home</span></a></li>
          <li><a href="#about"><FaInfoCircle /> <span>About</span></a></li>
          <li><a href="#services"><FaCog /> <span>Services</span></a></li>
          <li><a href="#doctors"><FaUserMd /> <span>Doctors</span></a></li>
          <li><a href="#contact"><FaPhone /> <span>Contact</span></a></li>
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
