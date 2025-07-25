// Navbar.jsx
import React from 'react';
import './styles.css';
import logo from '../assets/logo-web.jpg';
import { FaHome, FaInfoCircle, FaCog, FaUserMd, FaPhone, FaMoon, FaSun } from 'react-icons/fa';

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <header className="header_container nav-h">
      <div className="img">
        <img id="rd-logo" style={{ width: '90px', height: '90px' }} src={logo} alt="Logo" />
      </div>
      <nav className="nav_menu">
        <ul className="nav_link vis-h">
          <li><a href="#home"><FaHome /> Home</a></li>
          <li><a href="#about"><FaInfoCircle /> About</a></li>
          <li><a href="#service"><FaCog  /> Service</a></li>
          <li><a href="#doctors"><FaUserMd /> Doctor</a></li>
          <li><a href="#contact"><FaPhone /> Contact us</a></li>
        </ul>
      </nav>
      <div className="toggle-wrapper">
        <button
          className="dark-mode-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
}
