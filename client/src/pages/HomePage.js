import React from "react";

// Import all home page sections
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import ServiceSection from "../components/ServiceSection";
import DoctorsSection from "../components/DoctorsSection";
import AboutSection from "../components/AboutSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";


const Homepage = ({ darkMode, setDarkMode }) => {
  return (
    <div className={darkMode ? "dark-mode" : ""} id="home">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Slider darkMode={darkMode} />
      <div id="about">
        <AboutSection darkMode = {darkMode} />
      </div>
      <div id="services">
        <ServiceSection darkMode={darkMode} />
      </div>
      <div id="doctors">
        <DoctorsSection darkMode={darkMode} />
      </div>
      <div id="testimonials">
        <TestimonialsSection darkMode={darkMode} />
      </div>
      <div id="contact">
        <ContactSection darkMode={darkMode} />
      </div>
      <FAQ darkMode={darkMode}/>
      <Footer />
    </div>
  );
};

export default Homepage;
