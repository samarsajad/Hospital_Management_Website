import React from "react";
import { motion } from "framer-motion";

// Import all home page sections
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import ServiceSection from "../components/ServiceSection";
import DoctorsSection from "../components/DoctorsSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";

// Optimized animation variants for smooth performance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      staggerChildren: 0.1
    }
  }
};

const sectionVariants = {
  hidden: { 
    opacity: 0, 
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const Homepage = ({ darkMode, setDarkMode }) => {
  return (
    <motion.div 
      className={darkMode ? "dark-mode" : ""} 
      id="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <motion.div 
        variants={sectionVariants}
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        initial="hidden"
      >
        <Slider darkMode={darkMode} />
      </motion.div>
      
      <motion.div 
        variants={sectionVariants}
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        initial="hidden"
      >
        <AboutSection darkMode={darkMode} />
      </motion.div>
      
      <motion.div 
        variants={sectionVariants}
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        initial="hidden"
      >
        <ServiceSection darkMode={darkMode} />
      </motion.div>
      
      <motion.div 
        variants={sectionVariants}
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        initial="hidden"
      >
        <DoctorsSection darkMode={darkMode} />
      </motion.div>
      
      <motion.div 
        variants={sectionVariants}
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        initial="hidden"
      >
        <ContactSection darkMode={darkMode} />
      </motion.div>
      
      <motion.div 
        variants={sectionVariants}
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        initial="hidden"
      >
        <Footer />
      </motion.div>
    </motion.div>
  );
};

export default Homepage;
