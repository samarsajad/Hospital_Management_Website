import React, { useState, useEffect } from 'react';
import styles from './HeroSection.module.css';
import pic1 from '../assets/pic5.webp';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className={styles.heroSection} id="home">
      <div className={styles.heroContainer}>
        <motion.div 
          className={styles.heroContent}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className={styles.heroText}>
            <h1 className={styles.title}>
              Quality Healthcare <span className={styles.highlight}>Made Accessible</span>
            </h1>
            <p className={styles.subtitle}>
              Welcome to <span className={styles.highlight}>MidCity Urology and General Nursing Home</span> — your trusted center for compassionate, reliable urological and general healthcare.
            </p>
            <div className={styles.ctaButtons}>
              <button className={`${styles.ctaButton} ${styles.primary}`}>
                Book Appointment
              </button>
              <button className={`${styles.ctaButton} ${styles.secondary}`}>
                Learn More
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className={styles.heroImage}
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          {!imageLoaded && <div className={styles.imagePlaceholder}></div>}
          <img 
            src={pic1} 
            alt="Doctor with patient" 
            className={`${styles.heroImg} ${imageLoaded ? styles.loaded : ''}`}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;