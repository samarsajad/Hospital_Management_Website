import React from 'react';
import styles from './slider.module.css';
import { Link } from 'react-router-dom';

function Slider() {
  return (
    <div className={styles.heroSection} id="home">
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Your Health, Our Priority</h1>
        <p className={styles.heroSubtitle}>
          Providing expert care in Urology and Gynecology with compassion and advanced technology.
        </p>
        <div className={styles.ctaButtons}>
          <Link to="/#contact" className={`${styles.ctaButton} ${styles.primary}`}>
            Book an Appointment
          </Link>
          <Link to="/#services" className={`${styles.ctaButton} ${styles.secondary}`}>
            View Our Services
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Slider;