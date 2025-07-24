import React from "react";
import Navbar from "./components/Navbar";

import Slider from "./components/Slider";
import AboutUs from "./components/AboutSection";
import ServiceSection from "./components/ServiceSection";
import DoctorsSection from "./components/DoctorsSection";
import ContactUs from "./components/ContactSection";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <Slider />
        </section>

        <section id="about">
          <AboutUs />
        </section>

        <section id="services">
          <ServiceSection />
        </section>

        <section id="doctors">
          <DoctorsSection />
        </section>

        <section id="contact">
          <ContactUs />
        </section>
      </main>
    </>
  );
}

export default App;
