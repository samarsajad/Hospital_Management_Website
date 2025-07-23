

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import HomePage from './pages/HomePage';
import PharmacyPage from './pages/PharmacyPage';
import LabsPage from './pages/LabsPage';
import CheckupPage from './pages/CheckupPage';
import SurgeryPage from './pages/SurgeryPage';

import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import DoctorsPage from './pages/DoctorsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
  <Route path="/" element={<HomePage />} />
  
  {/* Old service routes */}
  <Route path="/services/pharmacy" element={<PharmacyPage />} />
  <Route path="/services/labs-diagnostics" element={<LabsPage />} />
  <Route path="/services/checkup" element={<CheckupPage />} />
  <Route path="/services/surgery" element={<SurgeryPage />} />
  
  {/* New general pages */}
  <Route path="/about" element={<AboutPage />} />
  <Route path="/services" element={<ServicesPage />} />
  <Route path="/doctors" element={<DoctorsPage />} />
  <Route path="/contact" element={<ContactPage />} />
</Routes>

    </>
  );
}

export default App;
