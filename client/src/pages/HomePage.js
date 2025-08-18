import React from "react";

// Import all home page sections
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import ServiceSection from "../components/ServiceSection";
import DoctorsSection from "../components/DoctorsSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";


const Homepage = ({ darkMode, setDarkMode }) => {
  return (
    <div className={darkMode ? "dark-mode" : ""} id="home">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Slider darkMode={darkMode} />
      <AboutSection darkMode={darkMode} />
      {/* <HeroSection darkMode={darkMode} /> */}
      <ServiceSection darkMode={darkMode} />
      <DoctorsSection darkMode={darkMode} />
      <ContactSection darkMode={darkMode} />
      <FAQ darkMode={darkMode}/>
      <Footer />
    </div>
  );
};

export default Homepage;
