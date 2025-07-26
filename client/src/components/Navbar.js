// Navbar.jsx
import './styles.css';
import logo from '../assets/logo-web.jpg';
import { FaHome, FaInfoCircle, FaCog, FaUserDoctor, FaPhone } from 'react-icons/fa';
import { FaUserMd } from 'react-icons/fa';




export default function Navbar() {
  return (
    <header className="header_container nav-h">
      <div className="img">
        <img
          id="rd-logo"
          style={{ width: "100px", height: "100px" }}
          src={logo}
          alt="Logo"
        />
        <span className="navbar__title"></span>
      </div>

      <nav className={`nav_menu ${mobileMenuOpen ? "active" : ""}`}>
        <ul className="nav_link">
          <li>
            <a href="#home" onClick={closeMenu}>
              <FaHome /> Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              <FaInfoCircle /> About
            </a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu}>
              <FaCog /> Services
            </a>
          </li>
          <li>
            <a href="#doctors" onClick={closeMenu}>
              <FaUserMd /> Doctors
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              <FaPhone /> Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
