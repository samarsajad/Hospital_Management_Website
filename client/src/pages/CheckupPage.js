import React, { useState, useEffect } from "react";
import styles from "./CheckupPage.module.css";

function CheckupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    doctor: "",
    date: "",
  });

  const [doctors, setDoctors] = useState([]);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data))
      .catch((err) => console.error("Error fetching doctors:", err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    if (!formData.email.trim()) newErrors.email = "Please enter your email";
    if (!formData.doctor) newErrors.doctor = "Please select a doctor";
    if (!formData.date) newErrors.date = "Please select a date";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true); // ✅ Start loading

    fetch("http://localhost:5000/api/checkup/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((res) => {
        alert(res.message || "Checkup booked!");
        setFormData({ name: "", email: "", doctor: "", date: "" }); // Reset form
      })
      .catch((err) => {
        console.error("Booking error:", err);
        alert("Booking failed");
      })
      .finally(() => setLoading(false)); // ✅ Stop loading
  };

  return (
    <div className={styles.labsContainer}>
      <h1>Book a Health Checkup</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
        </div>

        <div className={styles.formGroup}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        </div>

        <div className={styles.formGroup}>
          <label>Select a Doctor</label>
          <select name="doctor" value={formData.doctor} onChange={handleChange}>
            <option value="">-- Select Doctor --</option>
            {doctors.map((doc, index) => (
              <option key={index} value={doc.name}>
                {doc.name} ({doc.specialty})
              </option>
            ))}
          </select>
          {errors.doctor && (
            <span style={{ color: "red" }}>{errors.doctor}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label>Preferred Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]} // disables past dates
          />

          {errors.date && <span style={{ color: "red" }}>{errors.date}</span>}
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Booking..." : "Book Checkup"}
        </button>
      </form>
    </div>
  );
}

export default CheckupPage;