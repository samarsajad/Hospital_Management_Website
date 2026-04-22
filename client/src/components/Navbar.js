import { useState, useEffect, useContext } from 'react';
// import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import './styles.css';
import logoLight from '../assets/logo-web.jpg';
import logoDark from '../assets/logo-dark-mode.png';
import { Link } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import EmergencyPanel from './EmergencyPanel';
import {
  FaHome,
  FaInfoCircle,
  FaCog,
  FaUserMd,
  FaPhone,
  FaMoon,
  FaSun,
  FaQuestionCircle,
  FaBell
} from 'react-icons/fa';
import { HiOutlineUser } from "react-icons/hi";

export default function Navbar() {
  const { cart } = useCart();
  const [darkMode, setDarkMode] = useState(false);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);
  const { isAuthenticated, logout } = useContext(AuthContext);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const toggleEmergencyPanel = () => {
    setIsEmergencyOpen(!isEmergencyOpen);
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
          <li><Link to="/#faq"><FaQuestionCircle /> <span>FAQ</span></Link></li>
           
          
          <li>
            {isAuthenticated ? (
              <a href="#" onClick={(e) => { e.preventDefault(); logout(); }}>
                <HiOutlineUser /> <span>Logout</span>
              </a>
            ) : (
              <Link to="/login">
                <HiOutlineUser /> <span>Login</span>
              </Link>
            )}
          </li>
          <li className="nav_spacer" />
          <li>
            <button
              className="dark-toggle-btn"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </li>
          <li style={{ position: 'relative' }}>
            <Link to="/cart" className="cart-icon-link" aria-label="View cart">
              <FaShoppingCart size={26} />
              {cart && cart.length > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  background: '#13b33b',
                  color: 'white',
                  borderRadius: '50%',
                  padding: '2px 7px',
                  fontSize: '13px',
                  fontWeight: 'bold',
                  zIndex: 2
                }}>{cart.length}</span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
      <EmergencyPanel 
        isOpen={isEmergencyOpen} 
        onClose={() => setIsEmergencyOpen(false)} 
      />
    </header>
  );
}
