import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './HeroSection.module.css';
import pic1 from '../assets/pic5.webp';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100
    }
  }
};

const imageVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 100,
      delay: 0.3
    }
  },
  hover: {
    scale: 1.02,
    transition: { duration: 0.3 }
  }
};

const HeroSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section className={styles.heroSection} ref={ref}>
      <motion.div 
        className={styles.heroContainer}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div 
          className={styles.heroImage}
          variants={imageVariants}
          whileHover="hover"
        >
          <motion.img 
            src={pic1} 
            alt="Doctor with patient" 
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.6,
                delay: 0.4
              } 
            }}
          />
        </motion.div>
        <motion.div 
          className={styles.heroText}
          variants={itemVariants}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              transition: { delay: 0.6 }
            }}
          >
            Welcome to{' '}
            <motion.span 
              className={styles.highlight}
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.5,
                  delay: 0.8
                } 
              }}
              whileHover={{ 
                scale: 1.05,
                textShadow: '0 0 10px rgba(79, 70, 229, 0.5)'
              }}
            >
              MidCity Urology and General Nursing Home
            </motion.span>{' '}
            — your trusted center for compassionate, reliable urological and general healthcare.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;