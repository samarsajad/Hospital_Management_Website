import React, { useState, useEffect } from "react";
import "./components/styles.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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

// Layout component for routes that should have NavBar and Footer
const MainLayout = ({ darkMode, setDarkMode }) => {
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const toggleEmergencyPanel = () => {
    setIsEmergencyOpen(!isEmergencyOpen);
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Outlet />
      <Footer />
      <EmergencyPanel isOpen={isEmergencyOpen} onClose={toggleEmergencyPanel} />
    </div>
  );
};

// Layout for auth pages (login, register, forgot-password)
const AuthLayout = () => (
  <div className="auth-layout">
    <Outlet />
  </div>
);

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);

  return (
    <>
      <Routes>
        {/* Auth routes without NavBar */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>

        {/* Main routes with NavBar and Footer */}
        <Route element={
          <MainLayout 
            darkMode={darkMode} 
            setDarkMode={setDarkMode} 
          />
        }>
          <Route path="/" element={<HomePage darkMode={darkMode} />} />
          <Route path="/services/pharmacy" element={<PharmacyPage darkMode={darkMode} />} />
          <Route path="/services/pharmacy/medicines" element={<MedicineListing darkMode={darkMode} />} />
          <Route path="/services/labs-diagnostics" element={<LabsPage darkMode={darkMode} />} />
          <Route path="/services/checkup" element={<CheckupPage darkMode={darkMode} />} />
          <Route path="/services/surgery" element={<SurgeryPage darkMode={darkMode} />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute adminOnly={true}>
                <AdminDashboardPage darkMode={darkMode} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFoundPage darkMode={darkMode} />} />
        </Route>
      </Routes>

      <EmergencyPanel
        isOpen={isEmergencyOpen}
        onClose={() => setIsEmergencyOpen(false)}
      />
      
      <button
        className="fixed-emergency-btn"
        onClick={() => setIsEmergencyOpen(true)}
        aria-label="Emergency contacts"
      >
        🚨 Emergency
      </button>
    </>
  );
}

export default App;
