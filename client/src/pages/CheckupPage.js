import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './CheckupPage.module.css';

function CheckupPage() {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
  });

  useEffect(() => {
    axios.get('http://localhost:5000/api/doctors')
      .then(res => setDoctors(res.data))
      .catch(err => console.error('Error fetching doctors:', err));
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedDoctor) {
      alert('Please select a doctor!');
      return;
    }

    const appointmentData = {
      ...formData,
      doctor: selectedDoctor.name,
    };

    axios.post('http://localhost:5000/api/checkup/book', appointmentData)
      .then(() => {
        alert('Appointment booked successfully!');
        setFormData({ name: '', email: '', date: '' });
        setSelectedDoctor(null);
      })
      .catch(() => alert('Failed to book appointment'));
  };

  return (
    <div className={styles.checkupContainer}>
      <h1>Our Doctors</h1>
      <div className={styles.doctorGrid}>
        {doctors.map((doc) => (
          <div
            key={doc._id}
            className={`${styles.doctorCard} ${selectedDoctor?._id === doc._id ? styles.selected : ''}`}
            onClick={() => setSelectedDoctor(doc)}
          >
            <img src={doc.photoUrl} alt={doc.name} />
            <h3>{doc.name}</h3>
            <p><strong>Specialization:</strong> {doc.specialization}</p>
            <p><strong>Experience:</strong> {doc.Experience}</p>
            <p><strong>Available:</strong> {doc.availability || 'Not Available'}</p>

          </div>
        ))}
      </div>

      <h2 >Book Your Appointment</h2>
      <form className={styles.appointmentForm} onSubmit={handleSubmit}>
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

        <button type="submit">Book</button>
      </form>
    </div>
  );
}

export default CheckupPage;