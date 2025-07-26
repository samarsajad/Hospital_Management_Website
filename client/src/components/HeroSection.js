import React from 'react';
import styles from './HeroSection.module.css';
import pic1 from '../assets/pic5.webp';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroImage}>
          <img src={pic1} alt="Doctor with patient" />
        </div>
        <div className={styles.heroText}>
          <p>
            Welcome to <span className={styles.highlight}>MidCity Urology and General Nursing Home</span> — your trusted center for compassionate, reliable urological and general healthcare.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;