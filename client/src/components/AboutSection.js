import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './AboutSection.module.css';

import historyImg from '../assets/history.png';
import visionImg from '../assets/vision.png';
import missionImg from '../assets/mission.png';
import urologyImg from '../assets/urology.png';
import gynaeImg from '../assets/gyanaecology.png';

// Optimized animation variants for smooth performance
const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  hover: {
    y: -5,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

const textVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "backOut"
    }
  },
  hover: {
    rotate: 360,
    scale: 1.05,
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  }
};

const buttonVariants = {
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
  tap: {
    scale: 0.97,
    transition: {
      duration: 0.1
    }
  }
};

const ReadMoreSection = ({ title, icon, shortText, fullText, isExpanded, onToggle }) => {
  return (
    <motion.div 
      className={`${styles.card} ${isExpanded ? styles.expanded : ''}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div 
        className={styles.cardHeader}
        variants={textVariants}
      >
        <h3>{title}</h3>
        <motion.img 
          src={icon} 
          alt={title} 
          width={30} 
          height={30}
          variants={iconVariants}
          whileHover="hover"
        />
      </motion.div>
      <motion.p 
        className={styles.cardText}
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.1 }}
      >
        {isExpanded ? fullText : shortText}
      </motion.p>
      <motion.button
        className={`${styles.readMoreButton} ${isExpanded ? styles.expanded : ''}`}
        onClick={onToggle}
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        style={{
          background: isExpanded 
            ? "linear-gradient(135deg, #e74c3c, #c0392b)" 
            : "linear-gradient(135deg, #667eea, #764ba2)"
        }}
      >
        {isExpanded ? 'Show Less' : 'Read More'}
      </motion.button>
    </motion.div>
  );
};

function AboutUs() {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleToggle = (title) => {
    setExpandedCard((prev) => (prev === title ? null : title));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const specialtyCardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      x: 5,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
   <motion.section 
     className={styles.aboutUs} 
     id="about"
     variants={containerVariants}
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, amount: 0.1 }}
   >
      <motion.div 
        className={styles.aboutContainer}
        variants={titleVariants}
      >
        <motion.h1
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <i 
            className="bi bi-house-door-fill" 
            style={{ fontSize: '50px', padding: '10px' }}
          ></i>
          About Us
        </motion.h1>
        <motion.p 
          className={styles.text}
          variants={textVariants}
        >
          Welcome to MidCity Hospital Urology and General Nursing Home, a leading healthcare institution renowned for its excellence in urology and gynecology. Our commitment to providing top-notch medical care, state-of-the-art facilities, and compassionate patient care has made us a trusted name in the community.
        </motion.p>
      </motion.div>

      <motion.div 
        className={styles.cardGrid}
        variants={containerVariants}
      >
        <ReadMoreSection
          title="Our History"
          icon={historyImg}
          shortText="Established in 2019, MidCity Hospital has been at the forefront of healthcare innovation..."
          fullText="Established in 2019, MidCity Hospital has been at the forefront of healthcare innovation. Our founders, Dr. xyz and Dr. abc, envisioned a hospital that not only treated illnesses but also prioritized patient comfort and satisfaction. Over the decades, we have grown into a multifaceted healthcare provider, expanding our services to meet the evolving needs of our patients."
          isExpanded={expandedCard === 'Our History'}
          onToggle={() => handleToggle('Our History')}
        />

        <ReadMoreSection
          title="Our Vision"
          icon={visionImg}
          shortText="Our vision is to be a beacon of excellence in the healthcare industry..."
          fullText="Our vision is to be a beacon of excellence in the healthcare industry, recognized for our innovative practices, clinical expertise, and unwavering commitment to patient care. We aim to set new standards in healthcare delivery and become the preferred choice for urology and gynecology services."
          isExpanded={expandedCard === 'Our Vision'}
          onToggle={() => handleToggle('Our Vision')}
        />

        <ReadMoreSection
          title="Our Mission"
          icon={missionImg}
          shortText="Our mission is to deliver exceptional healthcare services with a patient-centered approach..."
          fullText="Our mission is to deliver exceptional healthcare services with a patient-centered approach. We strive to enhance the quality of life for our patients by offering advanced medical treatments and personalized care in a welcoming environment."
          isExpanded={expandedCard === 'Our Mission'}
          onToggle={() => handleToggle('Our Mission')}
        />
      </motion.div>

      <motion.h2 
        className={styles.specialtiesHeading}
        variants={titleVariants}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        Specialties
      </motion.h2>

      <motion.div 
        className={styles.specialties}
        variants={containerVariants}
      >
        <motion.div 
          className={styles.specialtyCard}
          variants={specialtyCardVariants}
          whileHover="hover"
        >
          <motion.div 
            className={styles.cardHeader}
            variants={textVariants}
          >
            <h3>
              <motion.img 
                src={urologyImg} 
                alt="urology" 
                className={styles.icon}
                variants={iconVariants}
                whileHover="hover"
              />
              Urology
            </h3>
          </motion.div>
          <motion.div 
            className={styles.cardBody}
            variants={textVariants}
          >
            <p>
              MidCity Hospital's urology department is staffed by some of the most skilled urologists in the field. We offer comprehensive diagnostic and treatment services for a wide range of urological conditions, including kidney stones, urinary tract infections, prostate issues, and more.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          className={styles.specialtyCard}
          variants={specialtyCardVariants}
          whileHover="hover"
        >
          <motion.div 
            className={styles.cardHeader}
            variants={textVariants}
          >
            <h3>
              <motion.img 
                src={gynaeImg} 
                alt="gynae" 
                className={styles.icon}
                variants={iconVariants}
                whileHover="hover"
              />
              Gynaecology
            </h3>
          </motion.div>
          <motion.div 
            className={styles.cardBody}
            variants={textVariants}
          >
            <p>
             Our gynecology department is dedicated to providing women with the highest quality care throughout all stages of life. From routine check-ups to advanced surgical procedures, our experienced gynecologists are committed to addressing the unique health needs of women.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

    </motion.section>
  );
}

export default AboutUs;