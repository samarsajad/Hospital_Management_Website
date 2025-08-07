import React from "react";
import styles from "./Footer.module.css";
// In index.js or App.js

function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerInner}>
        {/* Quick Links */}
        <div className={styles.column}>
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Doctors</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className={styles.column}>
          <h2>Legal</h2>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Accessibility</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className={styles.column}>
          {/* Heading with icon side by side */}
          <div className={styles.headingWithIcon}>
            <h2>Newsletter</h2>
            <i className="fa fa-paper-plane" aria-hidden="true"></i>
          </div>

          <p>Get the latest updates & health tips straight to your inbox.</p>
          <br />
          <form className={styles.newsletter}>
            <input type="email" placeholder="Your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <hr />

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <div className={styles.socialIcons}>
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <p>&copy; 2024 MidCity Hospital. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
