import React, { useState, useEffect } from "react";
import "./components/styles.css";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import PharmacyPage from "./pages/PharmacyPage";
import LabsPage from "./pages/LabsPage";
import CheckupPage from "./pages/CheckupPage";
import SurgeryPage from "./pages/SurgeryPage";
import NotFoundPage from "./pages/NotFoundPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import EmergencyPanel from "./components/EmergencyPanel";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ForgotPassword from "./pages/ForgotPassword";
import ProtectedRoute from "./components/ProtectedRoute";
import MedicineListing from "./pages/Medicine"; // <-- import the medicine page
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const [darkMode] = useState(false);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const toggleEmergencyPanel = () => {
    setIsEmergencyOpen(!isEmergencyOpen);
  };
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <Navbar />
      <main className={`app-content ${isHome ? "home" : ""}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/services/pharmacy" element={<PharmacyPage />} />
          <Route path="/services/pharmacy/medicines" element={<MedicineListing />} /> {/* new route */}
          <Route path="/cart" element={<CartPage />} />
          <Route path="/services/labs-diagnostics" element={<LabsPage />} />
          <Route path="/services/checkup" element={<CheckupPage />} />
          <Route path="/services/surgery" element={<SurgeryPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute adminOnly={true}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
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
      </main>
      <Footer />
    </>
  );
}

export default App;
