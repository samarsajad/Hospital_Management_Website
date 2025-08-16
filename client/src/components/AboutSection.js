import React, { useState } from "react";
import styles from "./AboutSection.module.css";

import historyImg from "../assets/history.png";
import visionImg from "../assets/vision.png";
import missionImg from "../assets/mission.png";
import urologyImg from "../assets/urology.png";
import gynaeImg from "../assets/gyanaecology.png";

const ReadMoreSection = ({
  title,
  icon,
  shortText,
  fullText,
  isExpanded,
  onToggle,
}) => {
  return (
    <div className={`${styles.card} ${isExpanded ? styles.expanded : ""}`}>
      <div className={styles.cardHeader}>
        <h3>{title}</h3>
        <img src={icon} alt={title} width={30} height={30} />
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
      </div>

      <div className={styles.cardGrid}>
        <ReadMoreSection
          title="Our History"
          icon={historyImg}
          shortText="Established in 2019, MidCity Hospital has been at the forefront of healthcare innovation..."
          fullText="Established in 2019, MidCity Hospital has been at the forefront of healthcare innovation. Our founders, Dr. xyz and Dr. abc, envisioned a hospital that not only treated illnesses but also prioritized patient comfort and satisfaction. Over the decades, we have grown into a multifaceted healthcare provider, expanding our services to meet the evolving needs of our patients."
          isExpanded={expandedCard === "Our History"}
          onToggle={() => handleToggle("Our History")}
        />

        <ReadMoreSection
          title="Our Vision"
          icon={visionImg}
          shortText="Our vision is to be a beacon of excellence in the healthcare industry..."
          fullText="Our vision is to be a beacon of excellence in the healthcare industry, recognized for our innovative practices, clinical expertise, and unwavering commitment to patient care. We aim to set new standards in healthcare delivery and become the preferred choice for urology and gynecology services."
          isExpanded={expandedCard === "Our Vision"}
          onToggle={() => handleToggle("Our Vision")}
        />

        <ReadMoreSection
          title="Our Mission"
          icon={missionImg}
          shortText="Our mission is to deliver exceptional healthcare services with a patient-centered approach..."
          fullText="Our mission is to deliver exceptional healthcare services with a patient-centered approach. We strive to enhance the quality of life for our patients by offering advanced medical treatments and personalized care in a welcoming environment."
          isExpanded={expandedCard === "Our Mission"}
          onToggle={() => handleToggle("Our Mission")}
        />
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