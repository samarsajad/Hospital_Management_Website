import React, { useState } from "react";
import styles from "./CheckupPage.module.css";

function CheckupPage() {
  const [doctors] = useState([
    {
      _id: "1",
      name: "Dr. Zahoor Ahmed Gilkar",
      specialization: "Urologist",
      experience: "10 years",
    },
    {
      _id: "2",
      name: "Dr. Shahida Kounsar",
      specialization: "Gynaecologist",
      experience: "12 years",
    },
    {
      _id: "3",
      name: "Dr. XYZ",
      specialization: "Cardiologist",
      experience: "15 years",
    },
    {
      _id: "4",
      name: "Dr. ABC",
      specialization: "Orthopedic Surgeon",
      experience: "8 years",
    },
    {
      _id: "5",
      name: "Dr. Ahmed Gilkar",
      specialization: "Urologist",
      experience: "12 years",
    },
    {
      _id: "6",
      name: "Dr. PQR",
      specialization: "Orthopedic Surgeon",
      experience: "15 years",
    },
  ]);

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else {
      const emailPattern = /\S+@\S+\.\S+/;
      if (!emailPattern.test(formData.email)) {
        newErrors.email = "Email is invalid.";
      }
    }

    if (!formData.date) {
      newErrors.date = "Appointment date is required.";
    } else {
      const today = new Date();
      const selectedDate = new Date(formData.date);
      if (selectedDate < today.setHours(0, 0, 0, 0)) {
        newErrors.date = "Appointment date cannot be in the past.";
      }
    }

    if (!selectedDoctor) {
      newErrors.doctor = "Please select a doctor.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear errors and continue
    setErrors({});

    const appointmentData = {
      ...formData,
      doctor: selectedDoctor.name,
    };

    console.log("Booking Appointment:", appointmentData);
    alert("Appointment booked successfully!");

    setFormData({ name: "", email: "", date: "" });
    setSelectedDoctor(null);
  };

  return (
    <div className={styles.checkupContainer}>
      <div className={styles.doctorsBox}>
        <h1>Our Doctors</h1>
        <p className={styles.selectPrompt}>
          Click on a doctor to select for appointment
        </p>

        <div className={styles.doctorGrid}>
          {doctors.map((doc) => (
            <div
              key={doc._id}
              className={`${styles.doctorCard} ${
                selectedDoctor?._id === doc._id ? styles.selected : ""
              }`}
              onClick={() => setSelectedDoctor(doc)}
            >
              <h3>{doc.name}</h3>
              <p>
                <strong>Specialization:</strong> {doc.specialization}
              </p>
              <p>
                <strong>Experience:</strong> {doc.experience}
              </p>
            </div>
          ))}
        </div>
      </div>

      <form className={styles.appointmentForm} onSubmit={handleSubmit}>
        <h2>Book Appointment</h2>

        {selectedDoctor && (
          <p className={styles.selectedDoctorNotice}>
            Booking with: <strong>{selectedDoctor.name}</strong>
          </p>
        )}
        {errors.doctor && <p className={styles.error}>{errors.doctor}</p>}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        {errors.name && <p className={styles.error}>{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <p className={styles.error}>{errors.email}</p>}

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          min={new Date().toISOString().split("T")[0]}
        />
        {errors.date && <p className={styles.error}>{errors.date}</p>}

        <button
          type="submit"
          // disabled={
          //   !selectedDoctor ||
          //   !formData.name ||
          //   !formData.email ||
          //   !formData.date
          // }
        >
          Book
        </button>
      </form>
    </div>
  );
}

export default CheckupPage;
