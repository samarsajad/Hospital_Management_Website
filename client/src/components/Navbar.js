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
  FaQuestionCircle,
  FaBars
} from 'react-icons/fa';
import { HiOutlineUser } from "react-icons/hi";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useContext(AuthContext);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="header_container">
      <div className="logo-container">
        <Link to="/#home" className="logo-link">
          <img
            src={darkMode ? logoDark : logoLight}
            alt="MidCity Hospital Logo"
            className="logo-img"
          />
          <div className="logo-text">
            <span className="company-name">MidCity Hospital</span>
            <span className="tagline">Urology and General Nursing Home</span>
          </div>
        </Link>
      </div>

      <button className="navbar__toggle" onClick={toggleMobileMenu} aria-label="Toggle navigation menu">
        <FaBars />
      </button>

      <nav className={`nav_menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="nav_link">
          <li><Link to="/#home" onClick={toggleMobileMenu}><FaHome /> <span>Home</span></Link></li>
          <li><Link to="/#about" onClick={toggleMobileMenu}><FaInfoCircle /> <span>About</span></Link></li>
          <li><Link to="/#services" onClick={toggleMobileMenu}><FaCog /> <span>Services</span></Link></li>
          <li><Link to="/#doctors" onClick={toggleMobileMenu}><FaUserMd /> <span>Doctors</span></Link></li>
          <li><Link to="/#contact" onClick={toggleMobileMenu}><FaPhone /> <span>Contact</span></Link></li>
          <li><Link to="/#faq" onClick={toggleMobileMenu}><FaQuestionCircle /> <span>FAQ</span></Link></li>
           
          <li className="dark-mode-toggle-list-item">
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
              <button className="nav-auth-btn" onClick={() => { logout(); toggleMobileMenu(); }}>
                <HiOutlineUser />Logout
              </button>
            ) : (
              <Link to="/login" className="nav-auth-btn" onClick={toggleMobileMenu}>
                <HiOutlineUser />Login
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}