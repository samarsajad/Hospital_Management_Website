import React from 'react';
import styles from './AboutSection.module.css';
import pic1 from '../assets/pic1.jpg';
import historyImg from '../assets/history.png';
import branchImg from '../assets/branch-leaves.png';
import visionImg from '../assets/vision.png';
import missionImg from '../assets/mission.png';
import urologyImg from '../assets/urology.png';
import gynaeImg from '../assets/gyanaecology.png';
import surgeryImg from '../assets/surgery.png';
import scalpelImg from '../assets/scalpel.png';

function AboutUs() {
  return (
    <section className={styles.aboutUs}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <img src={pic1} alt="Hospital" className={styles.heroImg} />
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroIcon}>🏥</span>
              About MidCity
            </h1>
            <p className={styles.heroText}>
              Welcome to MidCity Hospital Urology and General Nursing Home, a leading healthcare institution renowned for its excellence in urology and gynecology. Our commitment to providing top-notch medical care, state-of-the-art facilities, and compassionate patient care has made us a trusted name in the community.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>5+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>1000+</span>
                <span className={styles.statLabel}>Happy Patients</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>4</span>
                <span className={styles.statLabel}>Specialties</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* History, Vision, Mission Cards */}
      <div className={styles.cardGrid}>
        <div className={`${styles.card} ${styles.history}`}>
          <div className={styles.cardHeader}>
            <img src={historyImg} alt="history" className={styles.iconImg} />
            <h2>Our History</h2>
          </div>
          <div className={styles.cardBody}>
            <p className={styles.text}>
              Established in 2019, MidCity Hospital has been at the forefront of healthcare innovation. Our founders, Dr. xyz and Dr. abc, envisioned a hospital that not only treated illnesses but also prioritized patient comfort and satisfaction. Over the decades, we have grown into a multifaceted healthcare provider, expanding our services to meet the evolving needs of our patients.
            </p>
            <span className={styles.readMore}>Read More</span>
          </div>
        </div>

        <div className={`${styles.card} ${styles.vision}`}>
          <div className={styles.cardHeader}>
            <img src={visionImg} alt="vision" className={styles.iconImg} />
            <h2>Our Vision</h2>
          </div>
          <div className={styles.cardBody}>
            <p className={styles.text}>
              Our vision is to be a beacon of excellence in the healthcare industry, recognized for our innovative practices, clinical expertise, and unwavering commitment to patient care. We aim to set new standards in healthcare delivery and become the preferred choice for urology and gynecology services.
            </p>
            <span className={styles.readMore}>Read More</span>
          </div>
        </div>

        <div className={`${styles.card} ${styles.mission}`}>
          <div className={styles.cardHeader}>
            <img src={missionImg} alt="mission" className={styles.iconImg} />
            <h2>Our Mission</h2>
          </div>
          <div className={styles.cardBody}>
            <p className={styles.text}>
              Our mission is to deliver exceptional healthcare services with a patient-centered approach. We strive to enhance the quality of life for our patients by offering advanced medical treatments and personalized care in a welcoming environment.
            </p>
            <span className={styles.readMore}>Read More</span>
          </div>
        </div>
      </div>

      {/* Specialties Section */}
      <h2 className={styles.specialtiesHeading}>Specialties</h2>
      <div className={styles.specialtiesGrid}>
        <div className={styles.specialtyCard}>
          <div className={styles.specialtyHeader}>
            <img src={urologyImg} alt="urology" className={styles.iconImg} />
            <h3>Urology</h3>
          </div>
          <div className={styles.specialtyBody}>
            <p>
              MidCity Hospital's urology department is staffed by some of the most skilled urologists in the field. We offer comprehensive diagnostic and treatment services for a wide range of urological conditions, including kidney stones, urinary tract infections, prostate issues, and more.
            </p>
            <span className={styles.readMore}>Read More</span>
          </div>
        </div>
        <div className={styles.specialtyCard}>
          <div className={styles.specialtyHeader}>
            <img src={gynaeImg} alt="gynae" className={styles.iconImg} />
            <h3>Gynaecology</h3>
          </div>
          <div className={styles.specialtyBody}>
            <p>
              Our gynecology department is dedicated to providing women with the highest quality care throughout all stages of life. From routine check-ups to advanced surgical procedures, our experienced gynecologists are committed to addressing the unique health needs of women.
            </p>
            <span className={styles.readMore}>Read More</span>
          </div>
        </div>
        <div className={styles.specialtyCard}>
          <div className={styles.specialtyHeader}>
            <img src={surgeryImg} alt="surgery" className={styles.iconImg} />
            <h3>General Surgery</h3>
          </div>
          <div className={styles.specialtyBody}>
            <p>
              Our general surgery department combines advanced surgical techniques with compassionate care. Our experienced surgeons specialize in minimally invasive procedures, ensuring faster recovery times and better patient outcomes for various surgical conditions.
            </p>
            <span className={styles.readMore}>Read More</span>
          </div>
        </div>
        <div className={styles.specialtyCard}>
          <div className={styles.specialtyHeader}>
            <img src={scalpelImg} alt="cardiology" className={styles.iconImg} />
            <h3>Cardiology</h3>
          </div>
          <div className={styles.specialtyBody}>
            <p>
              MidCity Hospital's cardiology department offers comprehensive heart care services. Our cardiologists use state-of-the-art diagnostic equipment and treatment methods to manage heart conditions, from preventive care to complex cardiac procedures.
            </p>
            <span className={styles.readMore}>Read More</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;