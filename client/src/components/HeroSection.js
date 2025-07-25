import React from 'react';
import styles from './HeroSection.module.css';
import pic1 from '../assets/pic5.webp';

function HeroSection({darkMode}) {
  return (
    <section className={`${styles.heroSection} ${darkMode ? styles.dark : ''}`}>
      {/* Hero Block */}
      <div className={`${styles.heroContainer} ${darkMode ? styles.darkContainer : ''}`}>
        <div className={styles.heroImage}>
          <img src={pic1} alt="Doctor consulting patient" />
        </div>
        <div className={`${styles.heroText} ${darkMode ? styles.darkText : ''}`}>
          <p>
            Welcome to <strong>MidCity Urology and General Nursing Home</strong>. Our dedicated team provides expert urological services and compassionate nursing care tailored to your needs. We prioritize your health and well-being, ensuring you receive top-quality care in a welcoming environment.
          </p>
        </div>
      </div>

      {/* Message Block */}
      <div className={`${styles.messageContainer} ${darkMode ? styles.darkContainer : ''}`}>
...       <div className={styles.messageImage}>
          <img src={pic1} alt="Hospital environment" />
        </div>
        <div className={`${styles.messageText} ${darkMode ? styles.darkText : ''}`}>
          <p>
            Thank you for choosing us as your healthcare partner. At MidCity, we strive for excellence in patient care, offering a blend of modern medical practices and a deeply human approach to healing.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
