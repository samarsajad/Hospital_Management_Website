import React from "react";
import { Link } from "react-router-dom";
import styles from "./ServiceSection.module.css";

// Icons
import { FaCog } from 'react-icons/fa';
import {
  FaPrescriptionBottleMedical,
  FaVials,
  FaStethoscope,
} from "react-icons/fa6";
import { GiScalpel } from "react-icons/gi";

// Images
import pharmacy from "../assets/services/pharmacy.jpg";
import labs from "../assets/services/labs.jpg";
import checkup from "../assets/services/checkup.jpeg";
import surgery from "../assets/services/surgery.jpeg";

// Services Data
const services = [
  {
    title: "Pharmacy",
    icon: <FaPrescriptionBottleMedical />,
    img: pharmacy,
    desc: "Comprehensive medicines and expert care to support your health—available at MidCity Hospital’s Pharmacy.",
    btnText: "Order Now",
    link: "/services/pharmacy",
  },
  {
    title: "Labs and Diagnostics",
    icon: <FaVials />,
    img: labs,
    desc: "Accurate tests and timely results to diagnose and manage your health effectively.",
    btnText: "Book Now",
    link: "/services/labs-diagnostics",
  },
  {
    title: "Health Check Up",
    icon: <FaStethoscope />,
    img: checkup,
    desc: "Routine check-ups for early detection and better long-term health management.",
    btnText: "Book Now",
    link: "/services/checkup",
  },
  {
    title: "Surgery",
    icon: <GiScalpel style={{ marginLeft: "8px", fontSize: "20px" }} />,
    img: surgery,
    desc: "Advanced surgical care with expert surgeons and cutting-edge technology for safe outcomes.",
    btnText: "Book Now",
    link: "/services/surgery",
  },
];

// Component
function ServiceSection({ darkMode }) {
  const modeClass = darkMode ? styles.dark : '';

  return (
    <section className={`${styles.serviceSection} ${modeClass}`}>
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

        {services.map((service, index) => (
          <div key={index} className={`${styles.box} ${styles.fadeIn}`}>
            <div className={styles.image}>
              <img src={service.img} alt={service.title} />
            </div>
            <div className={styles.text}>
              {service.title} {service.icon}
            </div>
            <p className={styles.description}>{service.desc}</p>
            <Link to={service.link} className={styles.bookButton}>
              {service.btnText}
            </Link>
          </div>
        ))}

      </div>
    </section>
  );
}

export default ServiceSection;