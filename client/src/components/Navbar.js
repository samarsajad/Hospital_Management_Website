import { useState, useEffect, useContext } from 'react';
import './styles.css'; // Assuming the merged CSS is named styles.css
import logoLight from '../assets/logo-web.jpg';
import logoDark from '../assets/logo-dark-mode.png';
import { Link } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import EmergencyPanel from './EmergencyPanel'; // Imported from Navbar2
import {
  FaHome,
  FaInfoCircle,
  FaCog,
  FaUserMd,
  FaPhone,
  FaMoon,
  FaSun,
  FaQuestionCircle,
  FaBars, // From Navbar1 for mobile toggle
  FaBell  // From Navbar2 for emergency panel
} from 'react-icons/fa';
import { HiOutlineUser } from "react-icons/hi";

export default function Navbar() {
  // --- STATE FROM BOTH FILES ---
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // From Navbar1
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false); // From Navbar2
  const { isAuthenticated, logout } = useContext(AuthContext);

  // --- EFFECT FOR DARK MODE (common to both) ---
  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  // --- HANDLERS FROM BOTH FILES ---
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const toggleMobileMenu = () => { // From Navbar1
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleEmergencyPanel = () => { // From Navbar2
    setIsEmergencyOpen(!isEmergencyOpen);
  };

  return (
    <header className="header_container">
      {/* Using the detailed logo structure from Navbar1 */}
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

      {/* Mobile menu toggle button from Navbar1 */}
      <button className="navbar__toggle" onClick={toggleMobileMenu} aria-label="Toggle navigation menu">
        <FaBars />
      </button>

      {/* Responsive nav container from Navbar1 */}
      <nav className={`nav_menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="nav_link">
          {/* Added onClick={toggleMobileMenu} to all links for mobile functionality */}
          <li><Link to="/#home" onClick={toggleMobileMenu}><FaHome /> <span>Home</span></Link></li>
          <li><Link to="/#about" onClick={toggleMobileMenu}><FaInfoCircle /> <span>About</span></Link></li>
          <li><Link to="/#services" onClick={toggleMobileMenu}><FaCog /> <span>Services</span></Link></li>
          <li><Link to="/#doctors" onClick={toggleMobileMenu}><FaUserMd /> <span>Doctors</span></Link></li>
          <li><Link to="/#contact" onClick={toggleMobileMenu}><FaPhone /> <span>Contact</span></Link></li>
          <li><Link to="/#faq" onClick={toggleMobileMenu}><FaQuestionCircle /> <span>FAQ</span></Link></li>
          
          {/* Emergency button feature from Navbar2 */}
          <li>
            <button className="emergency-btn" onClick={toggleEmergencyPanel}>
              <FaBell /> <span>Emergency</span>
            </button>
          </li>
          
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

      {/* EmergencyPanel component from Navbar2 */}
      <EmergencyPanel 
        isOpen={isEmergencyOpen} 
        onClose={() => setIsEmergencyOpen(false)} 
      />
    </header>
  );
}