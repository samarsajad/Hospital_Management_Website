import React, { useState, useEffect } from "react";
import "./components/styles.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PharmacyPage from "./pages/PharmacyPage";
import LabsPage from "./pages/LabsPage";
import CheckupPage from "./pages/CheckupPage";
import SurgeryPage from "./pages/SurgeryPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services/pharmacy" element={<PharmacyPage />} />
      <Route path="/services/labs-diagnostics" element={<LabsPage />} />
      <Route path="/services/checkup" element={<CheckupPage />} />
      <Route path="/services/surgery" element={<SurgeryPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
