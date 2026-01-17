import React from 'react';
import { FaHeartbeat, FaBrain, FaBone, FaTooth, FaEye, FaChild } from 'react-icons/fa';
import { GiLungs, GiKidneys } from 'react-icons/gi';
import { MdOutlineCoronavirus } from 'react-icons/md';
import './SpecialtiesSection.css';

const SpecialtiesSection = ({ darkMode }) => {
  const specialties = [
    { icon: <FaHeartbeat />, title: 'Cardiology', description: 'Expert heart care with advanced treatment options' },
    { icon: <FaBrain />, title: 'Neurology', description: 'Comprehensive brain and nervous system care' },
    { icon: <GiLungs />, title: 'Pulmonology', description: 'Specialized care for respiratory conditions' },
    { icon: <FaBone />, title: 'Orthopedics', description: 'Bone and joint care with modern techniques' },
    { icon: <GiKidneys />, title: 'Nephrology', description: 'Expert kidney care and treatment' },
    { icon: <FaTooth />, title: 'Dentistry', description: 'Complete oral health and dental care' },
    { icon: <FaEye />, title: 'Ophthalmology', description: 'Advanced eye care and vision correction' },
    { icon: <FaChild />, title: 'Pediatrics', description: 'Specialized healthcare for children' },
    { icon: <MdOutlineCoronavirus />, title: 'Infectious Diseases', description: 'Expert care for infectious conditions' }
  ];

  return (
    <section className={`specialties-section ${darkMode ? 'dark' : ''}`} id="specialties">
      <div className="container">
        <div className="section-header">
          <h2>Our Specialties</h2>
          <p>Comprehensive healthcare services across various medical specialties</p>
        </div>
        <div className="specialties-grid">
          {specialties.map((specialty, index) => (
            <div className="specialty-card" key={index}>
              <div className="specialty-icon">{specialty.icon}</div>
              <h3>{specialty.title}</h3>
              <p>{specialty.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
