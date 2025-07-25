import React from "react";
import { Link } from "react-router-dom";
import styles from "./ServiceSection.module.css";

import pharmacy from "../assets/services/pharmacy.jpg";
import labs from "../assets/services/labs.jpg";
import checkup from "../assets/services/checkup.jpeg";
import surgery from "../assets/services/surgery.jpeg";

import { FaCog, FaVials, FaStethoscope } from "react-icons/fa";
import { FaPrescriptionBottleMedical } from "react-icons/fa6";
import { GiScalpel } from "react-icons/gi";

function ServiceSection() {
  const services = [
    {
      title: "Pharmacy",
      img: pharmacy,
      desc: `At MidCity Hospital's Pharmacy, we are dedicated to providing you with a comprehensive range of medications and pharmaceutical services to support your health and well-being.`,
      icon: <FaPrescriptionBottleMedical />,
      link: "/services/pharmacy",
      button: "Order Now",
    },
    {
      title: "Labs & Diagnostics",
      img: labs,
      desc: `MidCity Hospital's Lab and Diagnostic services provide accurate and timely results to aid in the diagnosis and treatment of various health conditions.`,
      icon: <FaVials />,
      link: "/services/labs-diagnostics",
      button: "Book Now",
    },
    {
      title: "Health Check Up",
      img: checkup,
      desc: `Regular health check-ups are essential for maintaining good health and early detection of potential health issues.`,
      icon: <FaStethoscope />,
      link: "/services/checkup",
      button: "Book Now",
    },
    {
      title: "Surgery",
      img: surgery,
      desc: `Our surgical department is equipped with cutting-edge technology and staffed by highly skilled surgeons for safe, successful procedures.`,
      icon: <GiScalpel />,
      link: "/services/surgery",
      button: "Book Now",
    },
  ];

  return (
    <section className={styles.serviceSection}>
      <h1 className={styles.sectionTitle}>
        Our Services <FaCog className={styles.cogIcon} />
      </h1>

      <div className={styles.serviceContainer}>
        {services.map((service, index) => (
          <div className={`${styles.box} ${styles.fadeIn}`} key={index}>
            <div className={styles.image}>
              <img src={service.img} alt={service.title} />
            </div>
            <div className={styles.text}>
              {service.title} {service.icon}
            </div>
            <p className={styles.description}>{service.desc}</p>
            <Link to={service.link} className={styles.bookButton}>
              {service.button}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;
