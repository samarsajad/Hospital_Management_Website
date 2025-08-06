import React, {useRef, useEffect} from "react";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";
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
    desc: "Comprehensive medicines and expert care to support your health—available at MidCity Hospital's Pharmacy.",
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

// Optimized animation variants for smooth performance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const serviceCardVariants = {
  hidden: { 
    opacity: 0, 
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  hover: {
    y: -5,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1
    }
  }
};

const iconVariants = {
  hover: {
    rotate: 360,
    scale: 1.1,
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  }
};

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
    <motion.section 
      className={`${styles.serviceSection} ${modeClass}`} 
      id="services"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.h1
        variants={titleVariants}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        Services <motion.span
          animate={{ rotate: [0, 360] }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          <FaCog />
        </motion.span>
      </motion.h1>

      <div className={styles.sliderWrapper}>
        <motion.button 
          onClick={() => scroll("left")} 
          className={styles.navButton}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <ChevronLeft />
        </motion.button>

        <div className={styles.serviceSlider} ref={sliderRef}>
          {repeatedServices.map((service, index) => (
            <motion.div 
              key={index} 
              className={`${styles.box} ${styles.fadeIn}`}
              variants={serviceCardVariants}
              whileHover="hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.div 
                className={styles.image}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={service.img} alt={service.title} />
              </motion.div>
              <motion.div 
                className={styles.text}
                variants={titleVariants}
              >
                {service.title} <motion.span
                  variants={iconVariants}
                  whileHover="hover"
                >
                  {service.icon}
                </motion.span>
              </motion.div>
              <motion.p 
                className={styles.description}
                variants={titleVariants}
              >
                {service.desc}
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                <Link to={service.link} className={styles.bookButton}>
                  {service.btnText}
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.button 
          onClick={() => scroll("right")} 
          className={styles.navButton}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <ChevronRight />
        </motion.button>
      </div>
    </motion.section>
  );
}

export default ServiceSection;
