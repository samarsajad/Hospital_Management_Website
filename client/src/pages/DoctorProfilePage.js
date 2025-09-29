import React from "react";
import { useParams, Link } from "react-router-dom";
import "../components/styles.css";

function DoctorProfilePage() {
  // Grab doctor ID from the URL
  const { id } = useParams();

  // Later you will fetch doctor details from API/backend using id
  const doctor = {
    id,
    name: "Dr. Priya Sharma",
    specialization: "Cardiologist",
    experience: 12,
    availability: "Mon - Fri, 10AM - 2PM",
    slots: ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM"]
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h2>{doctor.name}</h2>
        <p><strong>Specialization:</strong> {doctor.specialization}</p>
        <p><strong>Experience:</strong> {doctor.experience} years</p>

        <h4>Availability</h4>
        <p>{doctor.availability}</p>

        <h4>Consultation Slots</h4>
        <ul>
          {doctor.slots.map((slot, index) => (
            <li key={index}>{slot}</li>
          ))}
        </ul>

        <Link to={`/book/${doctor.id}`} className="btn btn-primary">
          Book Appointment
        </Link>
      </div>
    </div>
  );
}

export default DoctorProfilePage;
