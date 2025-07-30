import React from 'react';
import styles from './DoctorSection.module.css';
import doctorImg from '../assets/pic5.webp';
import { FaUserDoctor } from 'react-icons/fa6';

function DoctorsSection() {
  const doctors = [
    {
      name: 'Dr. Rahul Mishra',
      specialty: 'Cardiologist',
      img: doctorImg,
      experience: '15+ Years',
      education: 'MBBS, MD (Cardiology)',
      specializations: ['Heart Surgery', 'Cardiac Care', 'Preventive Cardiology']
    },
    {
      name: 'Dr. Zahoor Ahmed Gilkar',
      specialty: 'Urologist',
      img: doctorImg,
      experience: '12+ Years',
      education: 'MBBS, MS (Urology)',
      specializations: ['Kidney Stones', 'Prostate Treatment', 'Urological Surgery']
    },
    {
      name: 'Dr. Shahida Kounsar',
      specialty: 'Gynaecologist',
      img: doctorImg,
      experience: '18+ Years',
      education: 'MBBS, MD (Gynaecology)',
      specializations: ['Women\'s Health', 'Maternity Care', 'Gynecological Surgery']
    },
    {
      name: 'Dr. Ridhi Gupta',
      specialty: 'Orthopedic Surgeon',
      img: doctorImg,
      experience: '10+ Years',
      education: 'MBBS, MS (Orthopedics)',
      specializations: ['Joint Replacement', 'Sports Medicine', 'Trauma Surgery']
    },
  ];

  return (
    <section className={styles.doctorsSection}>
      <div className={styles.sectionHeader}>
        <h1 className={styles.sectionTitle}>
          <div className={styles.titleContent}>
            <div className={styles.iconWrapper}>
              <FaUserDoctor />
            </div>
            <span className={styles.titleText}>Meet Our Expert Doctors</span>
            <div className={styles.titleUnderline}></div>
          </div>
        </h1>
        <p className={styles.sectionSubtitle}>
          Our team of highly qualified medical professionals is dedicated to providing you with the best healthcare experience
        </p>
      </div>
      <div className={styles.doctorsContainer}>
        {doctors.map((doc, index) => (
          <div className={styles.doctorCard} key={index}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <div className={styles.doctorImageContainer}>
                  <img src={doc.img} alt={doc.name} className={styles.doctorImage} />
                  <div className={styles.imageOverlay}>
                    <span className={styles.viewMore}>View Details</span>
                  </div>
                </div>
                <div className={styles.doctorInfo}>
                  <h2 className={styles.doctorName}>{doc.name}</h2>
                  <p className={styles.doctorSpecialty}>{doc.specialty}</p>
                  <p className={styles.doctorExperience}>{doc.experience} Experience</p>
                </div>
              </div>
              <div className={styles.cardBack}>
                <div className={styles.backContent}>
                  <h3 className={styles.backTitle}>{doc.name}</h3>
                  <div className={styles.doctorDetails}>
                    <div className={styles.detailItem}>
                      <strong>Education:</strong>
                      <span>{doc.education}</span>
                    </div>
                    <div className={styles.detailItem}>
                      <strong>Experience:</strong>
                      <span>{doc.experience}</span>
                    </div>
                    <div className={styles.detailItem}>
                      <strong>Specializations:</strong>
                      <ul className={styles.specializationList}>
                        {doc.specializations.map((spec, idx) => (
                          <li key={idx}>{spec}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <button className={styles.appointmentButton}>
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DoctorsSection;