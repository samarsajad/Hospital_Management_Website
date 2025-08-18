import React, { useState, useEffect } from "react";
import "./components/styles.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PharmacyPage from "./pages/PharmacyPage";
import LabsPage from "./pages/LabsPage";
import CheckupPage from "./pages/CheckupPage";
import SurgeryPage from "./pages/SurgeryPage";
import NotFoundPage from "./pages/NotFoundPage";
import Login  from "./pages/Login";
import Register from "./pages/Register";
import EmergencyPanel from "./components/EmergencyPanel";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const toggleEmergencyPanel = () => {
    setIsEmergencyOpen(!isEmergencyOpen);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path='register' element={<Register/>}/>

        <Route path="/services/pharmacy" element={<PharmacyPage />} />
        <Route path="/services/labs-diagnostics" element={<LabsPage />} />
        <Route path="/services/checkup" element={<CheckupPage />} />
        <Route path="/services/surgery" element={<SurgeryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

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
        onClose={() => setIsEmergencyOpen(false)} 
      />
    </>
  );  
}

export default App;
