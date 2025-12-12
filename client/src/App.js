import React, { useState, useEffect } from "react";
import "./components/styles.css";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "./pages/HomePage";
import PharmacyPage from "./pages/PharmacyPage";
import LabsPage from "./pages/LabsPage";
import CheckupPage from "./pages/CheckupPage";
import SurgeryPage from "./pages/SurgeryPage";
import NotFoundPage from "./pages/NotFoundPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import EmergencyPanel from "./components/EmergencyPanel";
import ForgotPassword from "./pages/ForgotPassword";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import MedicineListing from "./pages/Medicine";
import CustomCursor from "./components/CustomCursor";

// Check if device supports hover (non-touch devices)
const useIsTouchDevice = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0 || 
        navigator.msMaxTouchPoints > 0
      );
    };
    
    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);
    return () => window.removeEventListener('resize', checkTouchDevice);
  }, []);

  return isTouchDevice;
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);
  const isTouchDevice = useIsTouchDevice();
  const location = window.location;

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    
    // Add smooth scrolling for anchor links
    const smoothScroll = (e) => {
      const targetId = e.target.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', smoothScroll);
    return () => document.removeEventListener('click', smoothScroll);
  }, [darkMode]);

  const toggleEmergencyPanel = () => {
    setIsEmergencyOpen(!isEmergencyOpen);
  };

  return (
    <>
      {!isTouchDevice && <CustomCursor />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/services/pharmacy" element={<PharmacyPage />} />
          <Route path="/services/pharmacy/medicines" element={<MedicineListing />} />
          <Route path="/services/labs-diagnostics" element={<LabsPage />} />
          <Route path="/services/checkup" element={<CheckupPage />} />
          <Route path="/services/surgery" element={<SurgeryPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute adminOnly={true}>
                <AdminDashboardPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>

      {/* Fixed Emergency Button */}
      <button
        className="fixed-emergency-btn"
        onClick={toggleEmergencyPanel}
        aria-label="Emergency contacts"
      >
        🚨 Emergency
      </button>

      <EmergencyPanel
        isOpen={isEmergencyOpen}
        onClose={toggleEmergencyPanel}
      />
    </>
  );
}

export default App;
