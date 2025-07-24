// Navbar.jsx
import './styles.css';
import logo from '../assets/logo-web.jpg';
import { FaHome, FaInfoCircle, FaCog, FaUserDoctor, FaPhone, FaBars } from 'react-icons/fa';
import { FaUserMd } from 'react-icons/fa';
import { useState } from 'react';




export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header_container nav-h">
      <div className="img">
        <img id="rd-logo" style={{ width: '90px', height: '90px' }} src={logo} alt="Logo" />
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </div>
      
      <nav className={`nav_menu ${isOpen ? 'open' : ''}`}>
        <ul className="nav_link">
          <li><a href="#home"><FaHome /> Home</a></li>
          <li><a href="#about"><FaInfoCircle /> About</a></li>
          <li><a href="#service"><FaCog  /> Service</a></li>
          <li><a href="#doctors"><FaUserMd /> Doctor</a></li>
          <li><a href="#contact"><FaPhone /> Contact us</a></li>
        </ul>
      </nav>
    </header>
  );
}
