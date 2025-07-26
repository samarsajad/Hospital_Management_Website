import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ServiceSection.module.css';
import { images } from '../assets/images';

import { FaCog, FaVials, FaStethoscope } from 'react-icons/fa';
import { FaPrescriptionBottleMedical } from 'react-icons/fa6';

function ServiceSection({darkMode}) {
    const modeClass = darkMode ? styles.dark : '';

  return (
    <section className={`${styles.serviceSection} ${modeClass}`}>
      <h1>
        Services <FaCog />
      </h1>

      <div className={styles.serviceContainer}>
        {/* Service 1 */}
        <div className={`${styles.box} ${styles.fadeIn}`}>
          <div className={styles.image}>
            <img src={images.pic5} alt="Pharmacy" />
          </div>
          <div className={styles.text}>
            Pharmacy <FaPrescriptionBottleMedical />
          </div>
          <p className={styles.description}>
            At MidCity Hospital's Pharmacy, we are dedicated to providing you with a comprehensive range of medications and pharmaceutical services to support your health and well-being...
          </p>
          <Link to="/services/pharmacy" className={styles.bookButton}>Order Now</Link>
        </div>

        {/* Service 2 */}
        <div className={`${styles.box} ${styles.fadeIn}`}>
          <div className={styles.image}>
            <img src={images.labscWebp} alt="Labs and Diagnostics" />
          </div>
          <div className={styles.text}>
            Labs and Diagnostics <FaVials />
          </div>
          <p className={styles.description}>
            MidCity Hospital's Lab and Diagnostic services provide accurate and timely results to aid in the diagnosis and treatment of various health conditions...
          </p>
          <Link to="/services/labs-diagnostics" className={styles.bookButton}>Book Now</Link>
        </div>

        {/* Service 3 */}
        <div className={`${styles.box} ${styles.fadeIn}`}>
          <div className={styles.image}>
            <img src={images.home} alt="Health Check" />
          </div>
          <div className={styles.text}>
            Health Check Up <FaStethoscope />
          </div>
          <p className={styles.description}>
            Regular health check-ups are essential for maintaining good health and early detection of potential health issues...
          </p>
          <Link to="/services/checkup" className={styles.bookButton}>Book Now</Link>
        </div>

        {/* Service 4 */}
        <div className={`${styles.box} ${styles.fadeIn}`}>
          <div className={styles.image}>
            <img src={images.surgery} alt="Surgery" />
          </div>
          <div className={styles.textWithIcon}>
            <span>Surgery</span>
            <img src={images.surgery} alt="Surgery Icon" className={styles.iconSmall} />
          </div>
          <p className={styles.description}>
            At MidCity Hospital, our surgical department is equipped with state-of-the-art technology and staffed by a team of highly skilled surgeons. We offer a wide range of surgical procedures with a focus on patient safety and successful outcomes.
          </p>
          <Link to="/services/surgery" className={styles.bookButton}>Book Now</Link>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;