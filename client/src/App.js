import React from 'react';
import './components/styles.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PharmacyPage from './pages/PharmacyPage';
import LabsPage from './pages/LabsPage';
import CheckupPage from './pages/CheckupPage';
import SurgeryPage from './pages/SurgeryPage';


function App() {
  return (
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services/pharmacy" element={<PharmacyPage />} />
      <Route path="/services/labs-diagnostics" element={<LabsPage />} />
      <Route path="/services/checkup" element={<CheckupPage />} />
      <Route path="/services/surgery" element={<SurgeryPage />} />
    </Routes>
    
  );
}

export default App;



