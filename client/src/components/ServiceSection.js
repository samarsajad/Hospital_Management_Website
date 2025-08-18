import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ServiceSection.module.css';
import images from '../assets/images';

import { FaCog } from "react-icons/fa";
import {
  FaPrescriptionBottleMedical,
  FaVials,
  FaStethoscope,
} from "react-icons/fa6";
import { GiScalpel } from "react-icons/gi";
import { ChevronLeft, ChevronRight } from "lucide-react";

import pharmacy from "../assets/services/pharmacy.jpg";
import labs from "../assets/services/labs.jpg";
import checkup from "../assets/services/checkup.jpeg";
import surgery from "../assets/services/surgery.jpeg";

function ServiceSection({ darkMode }) {
  const modeClass = darkMode ? styles.dark : "";

  return (
    <section className={`${styles.serviceSection} ${modeClass}`} id="services">
      <h1>
        Services <FaCog />
      </h1>

      <div className={styles.serviceGrid}>
        <div className={styles.box}>
          <div className={styles.image}>
            <img src={pharmacy} alt="Pharmacy" />
          </div>
          <div className={styles.text}>
            Pharmacy <FaPrescriptionBottleMedical />
          </div>
          <p className={styles.description}>
            Comprehensive medicines and expert care to support your health—
            available at MidCity Hospital’s Pharmacy.
          </p>
          <Link to="/services/pharmacy" className={styles.bookButton}>
            Order Now
          </Link>
        </div>

        <div className={styles.box}>
          <div className={styles.image}>
            <img src={labs} alt="Labs and Diagnostics" />
          </div>
          <div className={styles.text}>
            Labs and Diagnostics <FaVials />
          </div>
          <p className={styles.description}>
            Accurate tests and timely results to diagnose and manage your health
            effectively.
          </p>
          <Link to="/services/labs-diagnostics" className={styles.bookButton}>
            Book Now
          </Link>
        </div>

        <div className={styles.box}>
          <div className={styles.image}>
            <img src={checkup} alt="Health Check Up" />
          </div>
          <div className={styles.text}>
            Health Check Up <FaStethoscope />
          </div>
          <p className={styles.description}>
            Routine check-ups for early detection and better long-term health
            management.
          </p>
          <Link to="/services/checkup" className={styles.bookButton}>
            Book Now
          </Link>
        </div>

        <div className={styles.box}>
          <div className={styles.image}>
            <img src={surgery} alt="Surgery" />
          </div>
          <div className={styles.text}>
            Surgery <GiScalpel style={{ marginLeft: "8px", fontSize: "20px" }} />
          </div>
          <p className={styles.description}>
            Advanced surgical care with expert surgeons and cutting-edge
            technology for safe outcomes.
          </p>
          <Link to="/services/surgery" className={styles.bookButton}>
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
