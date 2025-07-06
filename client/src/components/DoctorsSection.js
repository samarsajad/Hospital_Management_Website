import React from 'react';
import styles from './DoctorSection.module.css';
import doctorImg from '../assets/pic5.webp';

function DoctorsSection() {
  const doctors = [
    {
      name: 'Dr. XYZ',
      specialty: 'Cardiologist',
      img: doctorImg,
    },
    {
      name: 'Dr. Zahoor Ahmed Gilkar',
      specialty: 'Urologist',
      img: doctorImg,
    },
    {
      name: 'Dr. Shahida Kounsar',
      specialty: 'Gynaecologist',
      img: doctorImg,
    },
    {
      name: 'Dr. XYZ',
      specialty: 'Orthopedic Surgeon',
      img: doctorImg,
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
                  <a href="#"><i className="fa-brands fa-facebook"></i></a>
                  <a href="#"><i className="fa-brands fa-square-twitter"></i></a>
                  <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                  <a href="#"><i className="fa-brands fa-square-instagram"></i></a>
                </div>
              </div>
              <div className={styles.cardBack}>
                BACK
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DoctorsSection;
