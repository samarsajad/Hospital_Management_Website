import React from 'react';
import styles from './DoctorSection.module.css';
import doctorImg from '../assets/pic5.webp';

function DoctorsSection() {
  const doctors = [
    {
      name: 'Dr. Rahul Mishra',
      specialty: 'Cardiologist',
      img: doctorImg,
      bio: 'Expert in interventional cardiology with 15+ years experience',
    },
    {
      name: 'Dr. Zahoor Ahmed Gilkar',
      specialty: 'Urologist',
      img: doctorImg,
      bio: 'Specializes in minimally invasive urologic surgeries',
    },
    {
      name: 'Dr. Shahida Kounsar',
      specialty: 'Gynaecologist',
      img: doctorImg,
      bio: 'Women\'s health specialist focusing on holistic care',
    },
    {
      name: 'Dr. Ridhi Gupta',
      specialty: 'Orthopedic Surgeon',
      img: doctorImg,
      bio: 'Joint replacement and sports medicine expert',
    },
  ];

  return (
    <section className={styles.doctorsSection}>
      <h1>
        <i className="fa-solid fa-user-doctor" style={{ fontSize: '50px', padding: '10px' }}></i>
        Meet Our Doctors
      </h1>
      <div className={styles.doctorsContainer}>
        {doctors.map((doc, index) => (
          <div className={styles.doctorCard} key={index}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <img src={doc.img} alt={doc.name} />
                <h2>{doc.name}</h2>
                <p>{doc.specialty}</p>
                <div className={styles.socialIcons}>
                  <a href="#" onClick={e => e.preventDefault()}><i className="fa-brands fa-facebook"></i></a>
                  <a href="#" onClick={e => e.preventDefault()}><i className="fa-brands fa-square-twitter"></i></a>
                  <a href="#" onClick={e => e.preventDefault()}><i className="fa-brands fa-linkedin"></i></a>
                  <a href="#" onClick={e => e.preventDefault()}><i className="fa-brands fa-square-instagram"></i></a>
                </div>
              </div>
              <div className={styles.cardBack}>
                <h3>{doc.name}</h3>
                <p className={styles.specialty}>{doc.specialty}</p>
                <p className={styles.bio}>{doc.bio}</p>
                <button className={styles.bookBtn}>Book Appointment</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DoctorsSection;