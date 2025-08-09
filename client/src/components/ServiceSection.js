import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ServiceSection.module.css";

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
  {
    title: "Surgery",
    icon: <GiScalpel style={{ marginLeft: "8px", fontSize: "20px" }} />,
    img: surgery,
    desc: "Advanced surgical care with expert surgeons and cutting-edge technology for safe outcomes.",
    btnText: "Book Now",
    link: "/services/surgery",
  },
  {
    title: "Pharmacy",
    icon: <FaPrescriptionBottleMedical />,
    img: pharmacy,
    desc: "Comprehensive medicines and expert care to support your health—available at MidCity Hospital’s Pharmacy.",
    btnText: "Order Now",
    link: "/services/pharmacy",
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
    title: "Labs and Diagnostics",
    icon: <FaVials />,
    img: labs,
    desc: "Accurate tests and timely results to diagnose and manage your health effectively.",
    btnText: "Book Now",
    link: "/services/labs-diagnostics",
  },
];

function ServiceSection({ darkMode }) {
  const modeClass = darkMode ? styles.dark : "";
  const sliderRef = useRef(null);

  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      setAtStart(slider.scrollLeft <= 0);
      setAtEnd(slider.scrollLeft >= maxScroll - 5); // tolerance
    };

    slider.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  const scroll = (dir) => {
    if (!sliderRef.current) return;
    const cardWidth =
      sliderRef.current.querySelector(`.${styles.box}`).offsetWidth + 20; // gap
    sliderRef.current.scrollBy({
      left: dir === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className={`${styles.serviceSection} ${modeClass}`} id="services">
      <h1>
        Services <FaCog />
      </h1>

      <div className={styles.sliderWrapper}>
        <button
          onClick={() => scroll("left")}
          className={styles.navButton}
          disabled={atStart}
        >
          <ChevronLeft />
        </button>

        <div className={styles.serviceSlider} ref={sliderRef}>
          {baseServices.map((service, index) => (
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

        <button
          onClick={() => scroll("right")}
          className={styles.navButton}
          disabled={atEnd}
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}

export default ServiceSection;
