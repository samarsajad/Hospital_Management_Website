import React from 'react';
import styles from './Footer.module.css';
import Logo from "..//assets/logo.png";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPaperPlane } from 'react-icons/fa';

function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerInner}>
        <div className={styles.leftContent}>
          <img src={Logo} alt='logoImage'></img>
          <p>From routine check-ups to advanced treatments, MidCity Hospital is here to deliver trusted, patient-focused care that puts your health and well-being first.</p>
        </div>
        <div className={styles.quickLinks}>
          <h2>Quick Links</h2>
          <ul>

            <li><a href="/#home">Home</a></li>
            <li><a href="/#about">About Us</a></li>
            <li><a href="/#services">Services</a></li>
            <li><a href="/#doctors">Doctors</a></li>
            <li><a href="/#contact">Contact Us</a></li>
              
          </ul>
        </div>

        <div className={styles.legalInfo}>
          <h2>Legal</h2>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Accessibility</a></li>
          </ul>
        </div>
        <div className={styles.newsletter}>
          <h2> Newsletter<FaPaperPlane /> </h2>
          <p>Get the latest update and tips straight in your inbox</p>
          <form action="#">
            <input type='email' placeholder='Your email' required ></input>
            <button type='submit'>Subscribe</button>
          </form>
        </div>
      </div>

      <hr />

      <div className={styles.copyright}>
        <div className={styles.socialIcons}>
          <a href="#" aria-label="Facebook"><FaFacebook /></a>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
        </div>

        <p>&copy; {new Date().getFullYear()} MidCity Hospital. All rights reserved.</p>

      </div>
    </footer>
  );
}


document.body.classList.toggle("dark-mode");

export default Footer;