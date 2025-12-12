import React from "react";

// Import all home page sections
import Slider from "../components/Slider";
import ServiceSection from "../components/ServiceSection";
import DoctorsSection from "../components/DoctorsSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";

const Homepage = ({ darkMode }) => {
  return (
    <div id="home">
      <Slider darkMode={darkMode} />
      <AboutSection darkMode={darkMode} />
      <ServiceSection darkMode={darkMode} />
      <DoctorsSection darkMode={darkMode} />
      <ContactSection darkMode={darkMode} />
      <FAQ darkMode={darkMode} />
    </div>
  );
};

export default Homepage;
