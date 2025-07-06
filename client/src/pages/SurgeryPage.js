// src/pages/SurgeryPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import styles from './SurgeryPage.module.css';

function SurgeryPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    doctor: '',
    date: '',
    surgeryType: '',
    prescription: null,
  });

  const handleChange = (e) => {
    if (e.target.name === 'prescription') {
      setFormData({ ...formData, prescription: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submissionData = new FormData();
    for (let key in formData) {
      submissionData.append(key, formData[key]);
    }

    try {
      await axios.post('http://localhost:5000/api/surgery/book', submissionData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Surgery appointment booked!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        doctor: '',
        date: '',
        surgeryType: '',
        prescription: null,
      });
    } catch (error) {
      alert('Booking failed.');
      console.error(error);
    }
  };

  return (
    <div className={styles.surgeryContainer}>
      <h1>Book a Surgery</h1>
      <form className={styles.surgeryForm} onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Patient Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
        <input type="text" name="doctor" placeholder="Doctor's Name" value={formData.doctor} onChange={handleChange} required />
        <input type="text" name="surgeryType" placeholder="Surgery Type (if known)" value={formData.surgeryType} onChange={handleChange} />
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        <input type="file" name="prescription" onChange={handleChange} accept=".pdf,.jpg,.png" required />
        <button type="submit">Book Surgery</button>
      </form>
    </div>
  );
}

export default SurgeryPage;
