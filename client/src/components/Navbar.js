import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaCog,
  FaUserMd,
  FaPhone,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../assets/logo-web.jpg";
import "./styles.css";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Logo" />
        <span className="navbar__title">HealConnect</span>
      </div>

      <nav className={`navbar__menu ${mobileMenuOpen ? "active" : ""}`}>
        <Link to="/" onClick={closeMenu}>
          <FaHome /> Home
        </Link>
        <Link to="/about" onClick={closeMenu}>
          <FaInfoCircle /> About
        </Link>
        <Link to="/services" onClick={closeMenu}>
          <FaCog /> Services
        </Link>

        {/* Detailed service pages */}
        <Link to="/services/pharmacy" onClick={closeMenu}>
          Pharmacy
        </Link>
        <Link to="/services/labs-diagnostics" onClick={closeMenu}>
          Labs
        </Link>
        <Link to="/services/checkup" onClick={closeMenu}>
          Checkup
        </Link>
        <Link to="/services/surgery" onClick={closeMenu}>
          Surgery
        </Link>

        <Link to="/doctors" onClick={closeMenu}>
          <FaUserMd /> Doctors
        </Link>
        <Link to="/contact" onClick={closeMenu}>
          <FaPhone /> Contact
        </Link>
      </nav>

      <div className="navbar__toggle" onClick={toggleMenu}>
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
}
