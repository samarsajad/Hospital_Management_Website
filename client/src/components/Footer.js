import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import { 
  FaHospital, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock,
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaYoutube,
  FaChevronRight,
  FaPaperPlane
} from 'react-icons/fa';

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`${styles.footer} ${darkMode ? styles.darkMode : ''}`}>
      <div className={styles.footerTop}>
        <div className={styles.footerSection}>
          <div className={styles.logoContainer}>
            <FaHospital className={styles.logoIcon} />
            <h3>MidCity Hospital</h3>
          </div>
          <p className={styles.aboutText}>
            Delivering exceptional healthcare services with compassion and expertise. 
            Your health and well-being are our top priorities.
          </p>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <FaMapMarkerAlt className={styles.contactIcon} />
              <span>123 Healthcare Ave, Medical District, City</span>
            </div>
            <div className={styles.contactItem}>
              <FaPhoneAlt className={styles.contactIcon} />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className={styles.contactItem}>
              <FaEnvelope className={styles.contactIcon} />
              <span>info@midcityhospital.com</span>
            </div>
            <div className={styles.contactItem}>
              <FaClock className={styles.contactIcon} />
              <span>24/7 Emergency Services</span>
            </div>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h4>Quick Links</h4>
          <ul className={styles.footerLinks}>
            <li><Link to="/"><FaChevronRight className={styles.linkIcon} /> Home</Link></li>
            <li><Link to="/about"><FaChevronRight className={styles.linkIcon} /> About Us</Link></li>
            <li><Link to="/services"><FaChevronRight className={styles.linkIcon} /> Services</Link></li>
            <li><Link to="/doctors"><FaChevronRight className={styles.linkIcon} /> Our Doctors</Link></li>
            <li><Link to="/appointments"><FaChevronRight className={styles.linkIcon} /> Book Appointment</Link></li>
            <li><Link to="/contact"><FaChevronRight className={styles.linkIcon} /> Contact Us</Link></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4>Our Services</h4>
          <ul className={styles.footerLinks}>
            <li><Link to="/services/emergency"><FaChevronRight className={styles.linkIcon} /> Emergency Care</Link></li>
            <li><Link to="/services/cardiology"><FaChevronRight className={styles.linkIcon} /> Cardiology</Link></li>
            <li><Link to="/services/neurology"><FaChevronRight className={styles.linkIcon} /> Neurology</Link></li>
            <li><Link to="/services/orthopedics"><FaChevronRight className={styles.linkIcon} /> Orthopedics</Link></li>
            <li><Link to="/services/pediatrics"><FaChevronRight className={styles.linkIcon} /> Pediatrics</Link></li>
            <li><Link to="/services/dermatology"><FaChevronRight className={styles.linkIcon} /> Dermatology</Link></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4>Newsletter</h4>
          <p className={styles.newsletterText}>
            Subscribe to our newsletter for health tips, news, and updates.
          </p>
          <form className={styles.newsletterForm}>
            <div className={styles.inputGroup}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className={styles.newsletterInput}
                required 
              />
              <button type="submit" className={styles.newsletterButton}>
                <FaPaperPlane className={styles.sendIcon} />
              </button>
            </div>
          </form>
          
          <div className={styles.socialLinks}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className={styles.socialIcon} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className={styles.socialIcon} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn className={styles.socialIcon} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className={styles.socialIcon} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube className={styles.socialIcon} />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.copyright}>
          &copy; {currentYear} MidCity Hospital. All Rights Reserved.
        </div>
        <div className={styles.legalLinks}>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span className={styles.divider}>|</span>
          <Link to="/terms">Terms of Use</Link>
          <span className={styles.divider}>|</span>
          <Link to="/accessibility">Accessibility</Link>
          <span className={styles.divider}>|</span>
          <Link to="/sitemap">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}


document.body.classList.toggle("dark-mode");

export default Footer;