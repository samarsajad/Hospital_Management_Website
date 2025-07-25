import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import AboutUs from "./components/AboutSection";
import ServiceSection from "./components/ServiceSection";
import DoctorsSection from "./components/DoctorsSection";
import ContactUs from "./components/ContactSection";
import Footer from "./components/Footer";

import PharmacyPage from "./pages/PharmacyPage";
import LabsPage from "./pages/LabsPage";
import CheckupPage from "./pages/CheckupPage";
import SurgeryPage from "./pages/SurgeryPage";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
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
              </>
            }
          />

          {/* Service pages */}
          <Route path="/services/pharmacy" element={<PharmacyPage />} />
          <Route path="/services/labs-diagnostics" element={<LabsPage />} />
          <Route path="/services/checkup" element={<CheckupPage />} />
          <Route path="/services/surgery" element={<SurgeryPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
