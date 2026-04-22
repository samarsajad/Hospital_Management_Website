import React from "react";
import { Link } from "react-router-dom";
import styles from "./ServiceSection.module.css";

import { FaCog } from "react-icons/fa";
import {
  FaPrescriptionBottleMedical,
  FaVials,
  FaStethoscope,
} from "react-icons/fa6";
import { GiScalpel } from "react-icons/gi";

import pharmacy from "../assets/services/pharmacy.jpg";
import labs from "../assets/services/labs.jpg";
import checkup from "../assets/services/physio.webp";
import surgery from "../assets/surgery.webp";
import physio  from "../assets/services/check.webp";

const baseServices = [
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
    img: physio,
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
  {
    title: "Physiotherapy",
    icon: <FaStethoscope />,
    img: checkup,
    desc: "Expert rehabilitation services for better recovery and mobility.",
    btnText: "Book Now",
    link: "/services/physiotherapy",
  },
  
];

function ServiceSection({ darkMode }) {
  const modeClass = darkMode ? styles.dark : "";

  return (
    <section className={`${styles.serviceSection} ${modeClass}`} id="services">
      <h1>
        Services <FaCog />
      </h1>

      <div className={styles.features}>
        {baseServices.map((service, index) => (
          <div key={index} className={`${styles.featureRow} ${index % 2 ? styles.rowAlt : ""}`}>
            <div className={styles.featureImage}>
              <img src={service.img} alt={service.title} />
            </div>
            <div className={styles.featureContent}>
              <div className={styles.featureTitle}>{service.icon} {service.title}</div>
              <p className={styles.featureDesc}>{service.desc}</p>
              <Link to={service.link} className={styles.featureCta}>
                {service.btnText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;
