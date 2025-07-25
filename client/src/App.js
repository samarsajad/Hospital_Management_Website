import React, { useState } from 'react';
import './components/styles.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PharmacyPage from './pages/PharmacyPage';
import LabsPage from './pages/LabsPage';
import CheckupPage from './pages/CheckupPage';
import SurgeryPage from './pages/SurgeryPage';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Routes>
        <Route path="/" element={<HomePage darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/services/pharmacy" element={<PharmacyPage darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/services/labs-diagnostics" element={<LabsPage darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/services/checkup" element={<CheckupPage darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/services/surgery" element={<SurgeryPage darkMode={darkMode} setDarkMode={setDarkMode} />} />
      </Routes>
    </div>
  );
}

export default App;



