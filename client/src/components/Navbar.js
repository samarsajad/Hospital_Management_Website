import { useState, useEffect, useContext, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import EmergencyPanel from './EmergencyPanel';
import './Navbar.css';
import logoLight from '../assets/logo-web.jpg';
import logoDark from '../assets/logo-dark-mode.png';
import { 
  FaHome, 
  FaInfoCircle, 
  FaUserMd, 
  FaPhone, 
  FaMoon, 
  FaSun, 
  FaQuestionCircle, 
  FaBars, 
  FaTimes,
  FaStethoscope,
  FaClinicMedical
} from 'react-icons/fa';
import { HiOutlineUser } from "react-icons/hi";

export default function Navbar({ darkMode, setDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);
  const { isAuthenticated, logout } = useContext(AuthContext);
  const location = useLocation();
  const navRef = useRef();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleEmergencyPanel = () => {
    setIsEmergencyOpen(!isEmergencyOpen);
  };

  const navLinks = [
    { to: "/#home", icon: <FaHome />, text: "Home" },
    { to: "/#about", icon: <FaInfoCircle />, text: "About" },
    { to: "/#specialties", icon: <FaStethoscope />, text: "Specialties" },
    { to: "/#doctors", icon: <FaUserMd />, text: "Doctors" },
    { to: "/#contact", icon: <FaPhone />, text: "Contact" },
    { to: "/#faq", icon: <FaQuestionCircle />, text: "FAQ" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className={`top-bar ${darkMode ? 'dark' : ''} ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="contact-info">
            <span><FaPhone /> +1 234 567 890</span>
            <span><FaClinicMedical /> 24/7 Emergency</span>
          </div>
          <div className="auth-buttons">
            {isAuthenticated ? (
              <button onClick={logout} className="auth-btn">
                <HiOutlineUser /> Logout
              </button>
            ) : (
              <Link to="/login" className="auth-btn">
                <HiOutlineUser /> Login / Register
              </Link>
            )}
            <button 
              onClick={toggleDarkMode} 
              className="theme-toggle"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header 
        ref={navRef} 
        className={`navbar ${isScrolled ? 'scrolled' : ''} ${darkMode ? 'dark' : ''}`}
      >
        <div className="container">
          <Link to="/" className="logo">
            <img 
              src={darkMode ? logoDark : logoLight} 
              alt="Hospital Logo" 
              className="logo-img"
            />
          </Link>

          <button 
            className="mobile-menu-btn" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-links">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.to} 
                    className="nav-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="nav-icon">{link.icon}</span>
                    <span className="nav-text">{link.text}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <button 
              className="emergency-btn"
              onClick={toggleEmergencyPanel}
            >
              <span>Emergency</span>
              <span>24/7</span>
            </button>
          </nav>
        </div>
      </header>

      <EmergencyPanel 
        isOpen={isEmergencyOpen} 
        onClose={() => setIsEmergencyOpen(false)} 
      />
    </>
  );
}
