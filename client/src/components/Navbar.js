// Navbar.jsx
import "./styles.css";
import logo from "../assets/logo-web.jpg";
import {
  FaHome,
  FaInfoCircle,
  FaCog,
  FaUserDoctor,
  FaPhone,
} from "react-icons/fa";
import { FaUserMd } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="header_container nav-h">
      <div className="img">
        <img
          id="rd-logo"
          style={{ width: "90px", height: "90px" }}
          src={logo}
          alt="Logo"
        />
      </div>
      <nav className="nav_menu">
        <ul className="nav_link vis-h">
          <li>
            <a href="#home">
              <FaHome /> Home
            </a>
          </li>
          <li>
            <a href="#about">
              <FaInfoCircle /> About
            </a>
          </li>
          <li>
            <a href="#service">
              <FaCog /> Service
            </a>
          </li>
          <li>
            <a href="#doctors">
              <FaUserMd /> Doctor
            </a>
          </li>
          <li>
            <a href="#contact">
              <FaPhone /> Contact us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
