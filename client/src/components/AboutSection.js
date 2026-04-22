import React, { useState } from "react";
import styles from "./AboutSection.module.css";

import historyImg from "../assets/history.png";
import visionImg from "../assets/vision.png";
import missionImg from "../assets/mission.png";
import urologyImg from "../assets/urology.png";
import gynaeImg from "../assets/gyanaecology.png";
import SpecialtiesCarousel from "./SpecialtiesCarousel";

const ReadMoreSection = ({
  title,
  icon,
  shortText,
  fullText,
  isExpanded,
  onToggle,
  variant,
}) => {
  return (
    <div className={`${styles.card} ${variant ? styles[variant] : ""} ${isExpanded ? styles.expanded : ""}`}>
      <div className={styles.cardHeader}>
        <img src={icon} alt={title} className={styles.headerIcon} />
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
      <p className={styles.cardText}>{isExpanded ? fullText : shortText}</p>
      <button
        className={`${styles.readMoreButton} ${
          isExpanded ? styles.expanded : ""
        }`}
        onClick={onToggle}
      >
        {isExpanded ? "Show Less" : "Read More"}
      </button>
    </div>
  );
};

function AboutUs() {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleToggle = (title) => {
    setExpandedCard((prev) => (prev === title ? null : title));
  };

  return (
    <section className={styles.aboutUs} id="about">
      <div className={styles.aboutContainer}>
        <h1>
          <i
            className="bi bi-house-door-fill"
            style={{ fontSize: "50px", padding: "10px" }}
          ></i>
          About Us
        </h1>
        <p className={styles.text}>
          Welcome to MidCity Hospital Urology and General Nursing Home, a
          leading healthcare institution renowned for its excellence in urology
          and gynecology. Our commitment to providing top-notch medical care,
          state-of-the-art facilities, and compassionate patient care has made
          us a trusted name in the community.
        </p>
        <div className={styles.statsBar}>
          <div className={styles.statItem}><strong>50+</strong><span>Specialists</span></div>
          <div className={styles.statItem}><strong>20k+</strong><span>Patients Treated</span></div>
          <div className={styles.statItem}><strong>24/7</strong><span>Emergency Care</span></div>
          <div className={styles.statItem}><strong>100%</strong><span>Patient Focus</span></div>
        </div>
      </div>

      <div className={styles.cardGrid}>
        <ReadMoreSection
          title="Our History"
          icon={historyImg}
          shortText="Established in 2019, MidCity Hospital has been at the forefront of healthcare innovation..."
          fullText="Established in 2019, MidCity Hospital has been at the forefront of healthcare innovation. Our founders, Dr. xyz and Dr. abc, envisioned a hospital that not only treated illnesses but also prioritized patient comfort and satisfaction. Over the decades, we have grown into a multifaceted healthcare provider, expanding our services to meet the evolving needs of our patients."
          isExpanded={expandedCard === "Our History"}
          onToggle={() => handleToggle("Our History")}
          variant="history"
        />

        <ReadMoreSection
          title="Our Vision"
          icon={visionImg}
          shortText="Our vision is to be a beacon of excellence in the healthcare industry..."
          fullText="Our vision is to be a beacon of excellence in the healthcare industry, recognized for our innovative practices, clinical expertise, and unwavering commitment to patient care. We aim to set new standards in healthcare delivery and become the preferred choice for urology and gynecology services."
          isExpanded={expandedCard === "Our Vision"}
          onToggle={() => handleToggle("Our Vision")}
          variant="vision"
        />

        <ReadMoreSection
          title="Our Mission"
          icon={missionImg}
          shortText="Our mission is to deliver exceptional healthcare services with a patient-centered approach..."
          fullText="Our mission is to deliver exceptional healthcare services with a patient-centered approach. We strive to enhance the quality of life for our patients by offering advanced medical treatments and personalized care in a welcoming environment."
          isExpanded={expandedCard === "Our Mission"}
          onToggle={() => handleToggle("Our Mission")}
          variant="mission"
        />

        <ReadMoreSection
          title="Our Values"
          icon={missionImg}
          shortText="Compassion, integrity, and excellence guide every interaction..."
          fullText="Compassion, integrity, and excellence guide every interaction. We are committed to safety, transparency, and continuous improvement, ensuring dignified, respectful care for every patient and family."
          isExpanded={expandedCard === "Our Values"}
          onToggle={() => handleToggle("Our Values")}
          variant="values"
        />
      </div>
      <h2 className={styles.specialtiesHeading}>Specialties</h2>
      <SpecialtiesCarousel />
    </section>
  );
}

export default AboutUs;