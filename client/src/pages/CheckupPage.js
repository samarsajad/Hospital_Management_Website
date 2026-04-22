import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './CheckupPage.module.css';

function CheckupPage() {
  const [doctors, setDoctors] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    doctorId: '',
  });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/doctors`)
      .then((res) => setDoctors(res.data))
      .catch((err) => console.error('Error fetching doctors:', err));
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.doctorId) {
      alert('Please select a doctor!');
      return;
    }

    const selectedDoctor = doctors.find(
      (doc) => doc._id === formData.doctorId
    );

    if (!selectedDoctor) {
      alert('Selected doctor not found');
      return;
    }

    const appointmentData = {
      name: formData.name,
      email: formData.email,
      date: formData.date,
      doctor: selectedDoctor.name, // backend-required field
    };

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/checkup/book`,
        appointmentData
      )
      .then(() => {
        alert('Appointment booked successfully!');
        setFormData({
          name: '',
          email: '',
          date: '',
          doctorId: '',
        });
      })
      .catch((err) => {
        console.error('Booking error:', err);
        alert('Failed to book appointment');
      });
  };

  return (
    <div className={styles.checkupContainer}>
      <h1>Book Doctor Appointment</h1>

      <form className={styles.appointmentForm} onSubmit={handleSubmit}>
        

        {/* Name */}
        <div className={styles.formGroup}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Email */}
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* Doctor Dropdown */}
        <div className={styles.formGroup}>
          <label htmlFor="doctorId">Select Doctor</label>
          <select
            id="doctorId"
            name="doctorId"
            value={formData.doctorId}
            onChange={handleInputChange}
            required
          >
            <option value="">-- Select a Doctor --</option>
            {doctors.map((doc) => (
              <option key={doc._id} value={doc._id}>
                {doc.name} — {doc.specialization}
              </option>
            ))}
          </select>
        </div>

        {/* Date */}
        <div className={styles.formGroup}>
          <label htmlFor="date">Appointment Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

export default CheckupPage;
