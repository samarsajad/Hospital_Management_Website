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
  FaBars,
  FaTimes,
} from 'react-icons/fa';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="header_container nav-h">
      <div className="logo-container">
        <img src={logo} alt="Company Logo" className="logo-img" />
      </div>

      {/* Hamburger Toggle */}
      <div className="navbar__toggle" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <nav className={`nav_menu ${menuOpen ? 'active' : ''}`}>
        <ul className="nav_link">
          <li><a href="#home" onClick={() => setMenuOpen(false)}><FaHome /> <span>Home</span></a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}><FaInfoCircle /> <span>About</span></a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)}><FaCog /> <span>Services</span></a></li>
          <li><a href="#doctors" onClick={() => setMenuOpen(false)}><FaUserMd /> <span>Doctors</span></a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}><FaPhone /> <span>Contact</span></a></li>
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
