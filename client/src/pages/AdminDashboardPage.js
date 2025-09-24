import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboardPage = () => {
  const [users, setUsers] = useState([]);
  const [checkups, setCheckups] = useState([]);
  const [labs, setLabs] = useState([]);
  const [surgeries, setSurgeries] = useState([]);
  const [doctors, setDoctors] = useState([]);

  const url = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";
  const token = localStorage.getItem("token");

  useEffect(() => {
    // Generic function to fetch any admin resource
    const fetchData = async (endpoint, setter) => {
      try {
        const res = await axios.get(`${url}/api/admin/${endpoint}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setter(res.data);
      } catch (err) {
        console.error(`Error fetching ${endpoint}:`, err);
      }
    };

    fetchData("users", setUsers);
    fetchData("checkup", setCheckups);
    fetchData("lab", setLabs);
    fetchData("surgery", setSurgeries);
    fetchData("all-doctors", setDoctors);
  }, [token]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>

      <section>
        <h2>Registered Users</h2>
        <ul>
          {users.map((u) => (
            <li key={u._id}>{u.name} ({u.email})</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Checkup Appointments</h2>
        <ul>
          {checkups.map((c) => (
            <li key={c._id}>{c.type} - {c.date}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Labs</h2>
        <ul>
          {labs.map((l) => (
            <li key={l._id}>{l.name} - {l.description}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Surgeries</h2>
        <ul>
          {surgeries.map((s) => (
            <li key={s._id}>{s.name} - {s.description}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Doctors</h2>
        <ul>
          {doctors.map((d) => (
            <li key={d._id}>
              {d.name} ({d.specialization}) - Available: {d.availability}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AdminDashboardPage;

