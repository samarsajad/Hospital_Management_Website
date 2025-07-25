import React from "react";
import { Link } from "react-router-dom";
import styles from "./ServiceSection.module.css";

import pharmacy from "../assets/services/pharmacy.jpg";
import labs from "../assets/services/labs.jpg";
import checkup from "../assets/services/checkup.jpeg";
import surgery from "../assets/services/surgery.jpeg";

import {
  FaPrescriptionBottleMedical,
  FaVials,
  FaStethoscope,
} from "react-icons/fa6";
import { GiScalpel } from "react-icons/gi";

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

function ServiceSection() {
  return (
    <section className={styles.serviceSection}>
      <h1>Services</h1>
      <div className={styles.serviceContainer}>
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
