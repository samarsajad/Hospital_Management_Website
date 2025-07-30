import React, {useRef, useEffect} from "react";
import {Link} from "react-router-dom";
import styles from "./ServiceSection.module.css";

import {FaCog} from "react-icons/fa";
import {
  FaPrescriptionBottleMedical,
  FaVials,
  FaStethoscope,
} from "react-icons/fa6";
import {GiScalpel} from "react-icons/gi";
import {ChevronLeft, ChevronRight} from "lucide-react";

import pharmacy from "../assets/services/pharmacy.jpg";
import labs from "../assets/services/labs.jpg";
import checkup from "../assets/services/checkup.jpeg";
import surgery from "../assets/services/surgery.jpeg";

// Original Services Array
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
    img: checkup,
    desc: "Routine check-ups for early detection and better long-term health management.",
    btnText: "Book Now",
    link: "/services/checkup",
  },
  {
    title: "Surgery",
    icon: <GiScalpel style={{marginLeft: "8px", fontSize: "20px"}} />,
    img: surgery,
    desc: "Advanced surgical care with expert surgeons and cutting-edge technology for safe outcomes.",
    btnText: "Book Now",
    link: "/services/surgery",
  },
];

// Duplicated services: [clone][original][clone]
const repeatedServices = [...baseServices, ...baseServices, ...baseServices];

function ServiceSection({darkMode}) {
  const modeClass = darkMode ? styles.dark : "";
  const sliderRef = useRef(null);
  const itemWidth = 300; // Estimate including margin

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      // Scroll to middle set on mount
      slider.scrollLeft = baseServices.length * itemWidth;
    }

    const handleScroll = () => {
      if (!slider) return;

      const scrollLeft = slider.scrollLeft;
      const maxScroll = itemWidth * repeatedServices.length;

      // Loop from start to center
      if (scrollLeft < baseServices.length * itemWidth * 0.5) {
        slider.scrollLeft += baseServices.length * itemWidth;
      }

      // Loop from end to center
      if (scrollLeft > baseServices.length * itemWidth * 1.5) {
        slider.scrollLeft -= baseServices.length * itemWidth;
      }
    };

    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  const scroll = (dir) => {
    if (sliderRef.current) {
      const amount = dir === "left" ? -itemWidth : itemWidth;
      sliderRef.current.scrollBy({left: amount, behavior: "smooth"});
    }
  };

  return (
    <section className={`${styles.serviceSection} ${modeClass}`}>
      <div className={styles.sectionHeader}>
        <h1 className={styles.sectionTitle}>
          <div className={styles.titleContent}>
            <div className={styles.iconWrapper}>
              <FaCog />
            </div>
            <span className={styles.titleText}>Services</span>
            <div className={styles.titleUnderline}></div>
          </div>
        </h1>
        <p className={styles.sectionSubtitle}>
          Comprehensive healthcare solutions with state-of-the-art facilities and expert medical professionals
        </p>
      </div>


      <div className={styles.serviceContainer}>
        {services.map((service, index) => (
          <div key={index} className={`${styles.serviceCard} ${styles.fadeIn}`}>
            <div className={styles.imageContainer}>
              <img src={service.img} alt={service.title} className={styles.serviceImage} />
              <div className={styles.imageOverlay}>
                <div className={styles.serviceIcon}>
                  {service.icon}
                </div>
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.serviceTitle}>
                {service.title}
              </h3>
              <p className={styles.serviceDescription}>{service.desc}</p>
              <Link to={service.link} className={styles.serviceButton}>
                {service.btnText}
                <span className={styles.buttonArrow}>→</span>
              </Link>
            </div>
          </div>
        ))}

      <div className={styles.sliderWrapper}>
        <button onClick={() => scroll("left")} className={styles.navButton}>
          <ChevronLeft />
        </button>

        <div className={styles.serviceSlider} ref={sliderRef}>
          {repeatedServices.map((service, index) => (
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

        <button onClick={() => scroll("right")} className={styles.navButton}>
          <ChevronRight />
        </button>

      </div>
    </section>
  );
}

export default ServiceSection;
