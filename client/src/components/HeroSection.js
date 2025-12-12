import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css';
import heroImage from '../assets/hero-doctor.png';
import { FaArrowRight, FaCalendarAlt, FaPhoneAlt, FaUserMd } from 'react-icons/fa';
import { motion } from 'framer-motion';

const HeroSection = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className={`${styles.heroSection} ${darkMode ? styles.dark : ''}`}>
      <div className={styles.heroBackground}></div>
      
      <div className={styles.heroContainer}>
        <motion.div 
          className={styles.heroContent}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div className={styles.heroText} variants={itemVariants}>
            <span className={styles.badge}>Welcome to Our Hospital</span>
            <h1>Your Health Is Our Top <span className={styles.highlight}>Priority</span></h1>
            <p className={styles.subtitle}>
              Providing compassionate, high-quality healthcare services with state-of-the-art technology and experienced medical professionals.
            </p>
            
            <div className={styles.ctaButtons}>
              <Link to="/appointment" className={styles.primaryBtn}>
                Book Appointment <FaCalendarAlt className={styles.btnIcon} />
              </Link>
              <Link to="/doctors" className={styles.secondaryBtn}>
                Our Doctors <FaUserMd className={styles.btnIcon} />
              </Link>
            </div>

            <div className={styles.emergencyContact}>
              <div className={styles.emergencyIcon}>
                <FaPhoneAlt />
              </div>
              <div>
                <span>Emergency Line</span>
                <h3>+1 234 567 890</h3>
              </div>
            </div>
          </motion.div>

          <motion.div className={styles.heroImage} variants={itemVariants}>
            <img 
              src={heroImage} 
              alt="Friendly doctor with stethoscope" 
              className={styles.doctorImage}
            />
            
            <div className={`${styles.floatingBadge} ${styles.experienceBadge}`}>
              <span className={styles.number}>25+</span>
              <span>Years of Experience</span>
            </div>
            
            <div className={`${styles.floatingBadge} ${styles.specialistsBadge}`}>
              <span className={styles.number}>50+</span>
              <span>Expert Doctors</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;