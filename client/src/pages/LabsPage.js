import React, { useState } from "react";
import styles from "./LabsPage.module.css";
import axios from "axios";

function LabsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    test: "",
  });

  const [loading, setLoading] = useState(false);

  const labTests = [
    "Complete Blood Count",
    "X-Ray Chest",
    "Urine Test",
    "Blood Sugar",
    "Liver Function Test",
    "Thyroid Profile",
    "Lipid Profile",
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

    if (!/^\d{10}$/.test(formData.phone)) {
      alert("Phone number must be 10 digits.");
      return;
    }

    const today = new Date();
    const selectedDate = new Date(formData.date);
    if (selectedDate < today.setHours(0, 0, 0, 0)) {
      alert("Appointment date cannot be in the past.");
      return;
    }

    setLoading(true);

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/labs/book`, formData);
      alert("Appointment booked successfully!");
      setFormData({ name: "", email: "", phone: "", date: "", test: "" });
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("Failed to book appointment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.labsContainer}>
      <h1>Book Lab Test Appointment</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
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
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="test">Select Test</label>
          <select
            id="test"
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
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Booking..." : "Book Appointment"}
        </button>
      </form>
    </div>
  );
}

export default LabsPage;