import React, { useState } from "react";
import "./AdminDashboard.css";
import { 
  FaChartLine, 
  FaUserInjured, 
  FaUserMd, 
  FaCalendarCheck, 
  FaExclamationTriangle,
  FaSearch,
  FaEdit,
  FaTrash,
  FaBell,
  FaBars,
  FaTimes
} from "react-icons/fa";

const AdminDashboard = () => {
  const [activeView, setActiveView] = useState("overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);

  // ---------- Mock Data ----------
  const stats = [
    { label: "Total Patients", value: "1,284", icon: <FaUserInjured />, color: "#3B82F6" },
    { label: "Total Doctors", value: "156", icon: <FaUserMd />, color: "#10B981" },
    { label: "Appointments Today", value: "42", icon: <FaCalendarCheck />, color: "#F59E0B" },
    { label: "Emergency Cases", value: "8", icon: <FaExclamationTriangle />, color: "#EF4444" },
  ];

  const patients = [
    { id: 1, name: "John Doe", age: 45, gender: "Male", disease: "Hypertension", date: "2026-04-20", status: "Admitted" },
    { id: 2, name: "Jane Smith", age: 32, gender: "Female", disease: "Type 2 Diabetes", date: "2026-04-21", status: "Discharged" },
    { id: 3, name: "Robert Brown", age: 58, gender: "Male", disease: "Cardiac Arrest", date: "2026-04-22", status: "Admitted" },
  ];

  const doctors = [
    { id: 1, name: "Dr. Sarah Wilson", specialization: "Cardiology", experience: "12 years", availability: "Available", contact: "sarah.w@hospital.com" },
    { id: 2, name: "Dr. James Lee", specialization: "Neurology", experience: "8 years", availability: "In Surgery", contact: "james.l@hospital.com" },
    { id: 3, name: "Dr. Emily Chen", specialization: "Pediatrics", experience: "15 years", availability: "On Leave", contact: "emily.c@hospital.com" },
  ];

  const appointments = [
    { id: 1, patient: "John Doe", doctor: "Dr. Sarah Wilson", date: "2026-04-23", status: "Confirmed" },
    { id: 2, patient: "Jane Smith", doctor: "Dr. James Lee", date: "2026-04-23", status: "Pending" },
    { id: 3, patient: "Alice Cooper", doctor: "Dr. Emily Chen", date: "2026-04-24", status: "Completed" },
  ];

  const emergencies = [
    { id: 1, condition: "Severe Chest Pain", priority: "High", clinic: "Cardiac Unit", status: "Active" },
    { id: 2, condition: "Fractured Leg", priority: "Medium", clinic: "Orthopedics", status: "Stable" },
    { id: 3, condition: "High Fever", priority: "Low", clinic: "General Medicine", status: "Waiting" },
  ];

  // ---------- Render Sub-Views ----------
  const renderOverview = () => (
    <div className="view-container">
      <div className="overview-header">
        <h1>Welcome, Admin</h1>
        <p>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div key={i} className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: `${stat.color}15`, color: stat.color }}>
              {stat.icon}
            </div>
            <div className="stat-info">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTable = (title, data, columns) => (
    <div className="view-container">
      <div className="view-header">
        <h1>{title}</h1>
        <div className="search-bar">
          <FaSearch />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="table-responsive">
        <table className="admin-table">
          <thead>
            <tr>
              {columns.map((col, i) => <th key={i}>{col.label}</th>)}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                {columns.map((col, j) => (
                  <td key={j}>
                    {col.isBadge ? (
                      <span className={`badge badge-${row[col.key].toLowerCase()}`}>
                        {row[col.key]}
                      </span>
                    ) : row[col.key]}
                  </td>
                ))}
                <td>
                  <div className="action-btns">
                    <button className="edit-btn"><FaEdit /></button>
                    <button className="delete-btn"><FaTrash /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="admin-dashboard-layout">
      {/* Sidebar */}
      <aside className={`admin-sidebar ${isSidebarOpen ? "open" : "collapsed"}`}>
        <div className="sidebar-header">
          <FaChartLine className="sidebar-logo-icon" />
          <span>Admin Portal</span>
        </div>
        <nav className="sidebar-nav">
          <button className={activeView === "overview" ? "active" : ""} onClick={() => setActiveView("overview")}>
            <FaChartLine /> <span>Overview</span>
          </button>
          <button className={activeView === "patients" ? "active" : ""} onClick={() => setActiveView("patients")}>
            <FaUserInjured /> <span>Patients</span>
          </button>
          <button className={activeView === "doctors" ? "active" : ""} onClick={() => setActiveView("doctors")}>
            <FaUserMd /> <span>Doctors</span>
          </button>
          <button className={activeView === "appointments" ? "active" : ""} onClick={() => setActiveView("appointments")}>
            <FaCalendarCheck /> <span>Appointments</span>
          </button>
          <button className={activeView === "emergency" ? "active" : ""} onClick={() => setActiveView("emergency")}>
            <FaExclamationTriangle /> <span>Emergency</span>
          </button>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="admin-main">
        <header className="admin-topbar">
          <button className="sidebar-toggle" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div className="topbar-right">
            <div className="notifications-container">
              <button className="notif-btn" onClick={() => setShowNotifications(!showNotifications)}>
                <FaBell />
                <span className="notif-dot"></span>
              </button>
              {showNotifications && (
                <div className="notif-dropdown">
                  <p>New Appointment Request</p>
                  <p>Emergency Alert: Room 302</p>
                  <p>Doctor Lee added to schedule</p>
                </div>
              )}
            </div>
            <div className="admin-profile">
              <img src="https://ui-avatars.com/api/?name=Admin+User&background=3B82F6&color=fff" alt="Admin" />
              <span>Admin</span>
            </div>
          </div>
        </header>

        <section className="admin-content">
          {activeView === "overview" && renderOverview()}
          {activeView === "patients" && renderTable("Patient Management", patients, [
            { label: "Name", key: "name" },
            { label: "Age", key: "age" },
            { label: "Gender", key: "gender" },
            { label: "Disease", key: "disease" },
            { label: "Date", key: "date" },
            { label: "Status", key: "status", isBadge: true },
          ])}
          {activeView === "doctors" && renderTable("Doctor Management", doctors, [
            { label: "Name", key: "name" },
            { label: "Specialization", key: "specialization" },
            { label: "Experience", key: "experience" },
            { label: "Availability", key: "availability", isBadge: true },
            { label: "Contact", key: "contact" },
          ])}
          {activeView === "appointments" && renderTable("Recent Appointments", appointments, [
            { label: "Patient", key: "patient" },
            { label: "Doctor", key: "doctor" },
            { label: "Date", key: "date" },
            { label: "Status", key: "status", isBadge: true },
          ])}
          {activeView === "emergency" && renderTable("Priority Emergency Cases", emergencies, [
            { label: "Condition", key: "condition" },
            { label: "Priority", key: "priority", isBadge: true },
            { label: "Clinic Contact", key: "clinic" },
            { label: "Status", key: "status", isBadge: true },
          ])}
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
