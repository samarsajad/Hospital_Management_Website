import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerInner}>
        <div className={styles.quickLinks}>
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Doctors</a></li>
            <li><a href="#">Contact Us</a></li>
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
      </div>

      <hr />

      <div className={styles.copyright}>
        <div className={styles.socialIcons}>
          <a href="#"><i className="fa-brands fa-facebook"></i></a>
          <a href="#"><i className="fa-brands fa-square-twitter"></i></a>
          <a href="#"><i className="fa-brands fa-linkedin"></i></a>
          <a href="#"><i className="fa-brands fa-square-instagram"></i></a>
        </div>
        <p>&copy; 2024 MidCity Hospital. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
