import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ServiceSection.module.css';

// Icons
import { FaCog, FaArrowRight } from 'react-icons/fa';
import { FaPrescriptionBottleMedical, FaVials, FaStethoscope } from 'react-icons/fa6';
import { GiScalpel } from 'react-icons/gi';
import { IoIosArrowForward } from 'react-icons/io';

// Images
import pharmacy from '../assets/services/pharmacy.jpg';
import labs from '../assets/services/labs.jpg';
import checkup from '../assets/services/checkup.jpeg';
import surgery from '../assets/services/surgery.jpeg';

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
];

const ServiceSection = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isHovered, setIsHovered] = useState(null);
  const containerRef = useRef(null);

  const serviceCategories = [
    {
      name: 'All Services',
      filter: 'all',
    },
    {
      name: 'Medical',
      filter: 'medical',
    },
    {
      name: 'Diagnostics',
      filter: 'diagnostics',
    },
    {
      name: 'Specialized',
      filter: 'specialized',
    },
  ];

  const services = baseServices.map((service, index) => ({
    ...service,
    category: index % 2 === 0 ? 'medical' : index % 3 === 0 ? 'diagnostics' : 'specialized',
  }));

  const filteredServices = activeTab === 0 
    ? services 
    : services.filter(service => service.category === serviceCategories[activeTab].filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    hover: {
      y: -10,
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
      transition: { duration: 0.3 },
    },
  };

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
