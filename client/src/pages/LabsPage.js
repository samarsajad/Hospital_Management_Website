import React, { useState } from 'react';
import styles from './LabsPage.module.css'; 
import axios from 'axios';

function LabsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    test: ''
  });

  const labTests = [
    'Complete Blood Count',
    'X-Ray Chest',
    'Urine Test',
    'Blood Sugar',
    'Liver Function Test',
    'Thyroid Profile',
    'Lipid Profile',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.post('http://localhost:5000/api/labs/book', formData);
    alert('Appointment booked successfully!');
    setFormData({ name: '', email: '', phone: '', date: '', test: '' });
  } catch (error) {
    console.error('Error booking appointment:', error);
    alert('Failed to book appointment');
  }
};


  return (
    <div className={styles.labsContainer}>
      <h1>Book Lab Test Appointment</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <select
          name="test"
          value={formData.test}
          onChange={handleChange}
          required
        >
          <option value="">Select a Test</option>
          {labTests.map((test, idx) => (
            <option key={idx} value={test}>
              {test}
            </option>
          ))}
        </select>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

export default LabsPage;
