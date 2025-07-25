import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ServiceSection.module.css';
import { images } from '../assets/images';

import { GiScalpel } from 'react-icons/gi';
import { FaCog, FaVials, FaStethoscope } from 'react-icons/fa';
import { FaPrescriptionBottleMedical } from 'react-icons/fa6';

function ServiceSection() {
  return (
    <section className={styles.serviceSection}>
      <h1>
        Services 
      </h1>

      <div className={styles.serviceContainer}>
        {/* Service 1 */}
        <div className={`${styles.box} ${styles.fadeIn}`}>
          <div className={styles.imageContainer}>
            <div className={styles.imageOverlay}></div>
            <img src={images.pic5} alt="Pharmacy" className={styles.image} />
            <div className={styles.iconContainer}>
              <FaPrescriptionBottleMedical className={styles.serviceIcon} />
            </div>
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>Pharmacy</h3>
            <p className={styles.description}>
              At MidCity Hospital's Pharmacy, we are dedicated to providing you with a comprehensive range of medications and pharmaceutical services to support your health and well-being...
            </p>
            <Link to="/services/pharmacy" className={styles.bookButton}>
              <span>Order Now</span>
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7H17M17 7L11 1M17 7L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Service 2 */}
        <div className={`${styles.box} ${styles.fadeIn}`}>
          <div className={styles.imageContainer}>
            <div className={styles.imageOverlay}></div>
            <img src={images.labscWebp} alt="Labs and Diagnostics" className={styles.image} />
            <div className={styles.iconContainer}>
              <FaVials className={styles.serviceIcon} />
            </div>
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>Labs and Diagnostics</h3>
            <p className={styles.description}>
              MidCity Hospital's Lab and Diagnostic services provide accurate and timely results to aid in the diagnosis and treatment of various health conditions...
            </p>
            <Link to="/services/labs-diagnostics" className={styles.bookButton}>
              <span>Book Now</span>
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7H17M17 7L11 1M17 7L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Service 3 */}
        <div className={`${styles.box} ${styles.fadeIn}`}>
          <div className={styles.imageContainer}>
            <div className={styles.imageOverlay}></div>
            <img src={images.home} alt="Health Check" className={styles.image} />
            <div className={styles.iconContainer}>
              <FaStethoscope className={styles.serviceIcon} />
            </div>
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>Health Check Up</h3>
            <p className={styles.description}>
              Regular health check-ups are essential for maintaining good health and early detection of potential health issues...
            </p>
            <Link to="/services/checkup" className={styles.bookButton}>
              <span>Book Now</span>
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7H17M17 7L11 1M17 7L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Service 4 */}
        <div className={`${styles.box} ${styles.fadeIn}`}>
          <div className={styles.imageContainer}>
            <div className={styles.imageOverlay}></div>
            <img src={images.surgery} alt="Surgery" className={styles.image} />
            <div className={styles.iconContainer}>
              <img src={images.surgeryIcon} alt="Surgery Icon" className={styles.customIcon} />
            </div>
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>Surgery</h3>
            <p className={styles.description}>
              At MidCity Hospital, our surgical department is equipped with state-of-the-art technology and staffed by a team of highly skilled surgeons. We offer a wide range of surgical procedures with a focus on patient safety and successful outcomes.
            </p>
            <Link to="/services/surgery" className={styles.bookButton}>
              <span>Book Now</span>
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7H17M17 7L11 1M17 7L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;