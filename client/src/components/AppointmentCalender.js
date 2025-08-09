// src/components/AppointmentsCalendar.jsx
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import styles from './AppointmentsCalendar.module.css';

const AppointmentsCalendar = ({ appointments, onEventClick }) => {
  const events = appointments.map(app => ({
    id: app._id,
    title: `${app.type}: ${app.patientId?.name || 'Unknown'}`,
    date: new Date(app.date).toISOString().split('T')[0],
    color: app.type === 'doctor' ? '#1890ff' : 
           app.type === 'lab' ? '#52c41a' : '#ff4d4f', // Custom colors per type
    extendedProps: { ...app } // Pass full appointment data
  }));

  return (
    <div className={styles.calendarContainer}>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={(info) => onEventClick(info.event.extendedProps)} // Click handler
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek'
        }}
      />
    </div>
  );
};

export default AppointmentsCalendar;