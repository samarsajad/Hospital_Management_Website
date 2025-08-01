import { useState, useEffect } from 'react';
import './styles.css';
import logoLight from '../assets/logo-web.jpg';
import logoDark from '../assets/logo-dark-mode.png';
import { Link } from 'react-router-dom';
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
        </ul>
      </nav>
    </header>
  );
}
