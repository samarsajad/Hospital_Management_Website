import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHospital, FaHeartbeat, FaUserMd, FaClinicMedical } from 'react-icons/fa';
import styles from './AboutSection.module.css';

// Import images
import historyImg from '../assets/history.png';
import visionImg from '../assets/vision.png';
import missionImg from '../assets/mission.png';
import urologyImg from '../assets/urology.png';
import gynaeImg from '../assets/gyanaecology.png';

const ReadMoreSection = ({
  title,
  icon,
  shortText,
  fullText,
  isExpanded,
  onToggle,
  index
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };

  return (
    <motion.div 
      className={`${styles.card} ${isExpanded ? styles.expanded : ''}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      custom={index}
    >
      <div className={styles.cardHeader}>
        <div className={styles.iconContainer}>
          <img src={icon} alt={title} className={styles.cardIcon} />
        </div>
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
      <div className={styles.cardContent}>
        <p className={styles.cardText}>{isExpanded ? fullText : shortText}</p>
        <button 
          className={styles.readMoreButton}
          onClick={onToggle}
          aria-expanded={isExpanded}
          aria-controls={`${title.toLowerCase().replace(/\s+/g, '-')}-content`}
        >
          {isExpanded ? (
            <>
              Show Less
              <span className={styles.buttonIcon}>−</span>
            </>
          ) : (
            <>
              Read More
              <span className={styles.buttonIcon}>+</span>
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
};

const AboutUs = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleToggle = (title) => {
    setExpandedCard((prev) => (prev === title ? null : title));
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const aboutCards = [
    {
      title: 'Our History',
      icon: historyImg,
      shortText: 'With over 15 years of dedicated service, our hospital has been at the forefront of medical excellence...',
      fullText: 'With over 15 years of dedicated service, our hospital has been at the forefront of medical excellence, combining cutting-edge technology with compassionate care. Our journey began with a simple mission: to provide accessible, high-quality healthcare to our community. Today, we stand as a testament to that commitment, having served thousands of patients with integrity and expertise.'
    },
    {
      title: 'Our Vision',
      icon: visionImg,
      shortText: 'To be the most trusted healthcare provider, known for excellence in patient care and medical innovation...',
      fullText: 'To be the most trusted healthcare provider, known for excellence in patient care and medical innovation. We envision a future where everyone has access to comprehensive, compassionate, and affordable healthcare services. Through continuous improvement and community engagement, we strive to set new standards in medical care and patient experience.'
    },
    {
      title: 'Our Mission',
      icon: missionImg,
      shortText: 'To provide exceptional healthcare services through a dedicated team of medical professionals...',
      fullText: 'To provide exceptional healthcare services through a dedicated team of medical professionals, state-of-the-art technology, and a patient-centered approach. We are committed to improving the health and well-being of our community by delivering personalized, high-quality care with compassion and respect for all individuals.'
    },
    {
      title: 'Urology Care',
      icon: urologyImg,
      shortText: 'Our urology department offers comprehensive care for all urological conditions...',
      fullText: 'Our urology department offers comprehensive care for all urological conditions, from routine check-ups to complex surgical procedures. Our team of board-certified urologists utilizes the latest minimally invasive techniques to provide effective treatments with faster recovery times. We specialize in prostate health, kidney stones, urinary incontinence, and men\'s health issues.'
    },
    {
      title: 'Gynecology Services',
      icon: gynaeImg,
      shortText: 'Comprehensive women\'s health services for every stage of life...',
      fullText: 'Comprehensive women\'s health services for every stage of life. Our expert gynecologists provide compassionate care, from routine exams and family planning to advanced treatments for complex conditions. We prioritize your comfort and well-being, offering personalized care in a supportive environment. Our services include prenatal care, menopause management, and minimally invasive surgical options.'
    }
  ];

  return (
    <section className={styles.aboutUs} id="about">
      <div className={styles.aboutContainer}>
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.sectionSubtitle}>Who We Are</span>
          <h2 className={styles.sectionTitle}>About Our Hospital</h2>
          <div className={styles.headerDivider}></div>
          <p className={styles.sectionDescription}>
            Providing exceptional healthcare services with compassion and expertise since our establishment.
          </p>
        </motion.div>
        <p className={styles.text}>
          Welcome to MidCity Hospital Urology and General Nursing Home, a
          leading healthcare institution renowned for its excellence in urology
          and gynecology. Our commitment to providing top-notch medical care,
          state-of-the-art facilities, and compassionate patient care has made
          us a trusted name in the community.
        </p>
      </div>

      <motion.div 
        className={styles.cardGrid}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {aboutCards.map((card, index) => (
          <ReadMoreSection
            key={card.title}
            title={card.title}
            icon={card.icon}
            shortText={card.shortText}
            fullText={card.fullText}
            isExpanded={expandedCard === card.title}
            onToggle={() => handleToggle(card.title)}
            index={index}
          />
        ))}
      </motion.div>

      <div className={styles.statsContainer}>
        <motion.div 
          className={styles.statItem}
          whileHover={{ y: -5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FaHospital className={styles.statIcon} />
          <div className={styles.statContent}>
            <span className={styles.statNumber}>15+</span>
            <span className={styles.statLabel}>Years Experience</span>
          </div>
        </motion.div>

        <motion.div 
          className={styles.statItem}
          whileHover={{ y: -5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FaUserMd className={styles.statIcon} />
          <div className={styles.statContent}>
            <span className={styles.statNumber}>50+</span>
            <span className={styles.statLabel}>Expert Doctors</span>
          </div>
        </motion.div>

        <motion.div 
          className={styles.statItem}
          whileHover={{ y: -5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FaHeartbeat className={styles.statIcon} />
          <div className={styles.statContent}>
            <span className={styles.statNumber}>10,000+</span>
            <span className={styles.statLabel}>Happy Patients</span>
          </div>
        </motion.div>

        <motion.div 
          className={styles.statItem}
          whileHover={{ y: -5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FaClinicMedical className={styles.statIcon} />
          <div className={styles.statContent}>
            <span className={styles.statNumber}>24/7</span>
            <span className={styles.statLabel}>Emergency Care</span>
          </div>
        </motion.div>
      </div>

      <h2 className={styles.specialtiesHeading}>Specialties</h2>

      <div className={styles.specialties}>
        <div className={styles.specialtyCard}>
          <div className={styles.cardHeader}>
            <h3>
              <img src={urologyImg} alt="urology" className={styles.icon} />
              Urology
            </h3>
          </div>
          <div className={styles.cardBody}>
            <p>
              MidCity Hospital's urology department is staffed by some of the
              most skilled urologists in the field. We offer comprehensive
              diagnostic and treatment services for a wide range of urological
              conditions, including kidney stones, urinary tract infections,
              prostate issues, and more.
            </p>
          </div>
        </div>

        <div className={styles.specialtyCard}>
          <div className={styles.cardHeader}>
            <h3>
              <img src={gynaeImg} alt="gynae" className={styles.icon} />
              Gynaecology
            </h3>
          </div>
          <div className={styles.cardBody}>
            <p>
              Our gynecology department is dedicated to providing women with the
              highest quality care throughout all stages of life. From routine
              check-ups to advanced surgical procedures, our experienced
              gynecologists are committed to addressing the unique health needs
              of women.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;