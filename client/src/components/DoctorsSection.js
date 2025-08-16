<<<<<<< HEAD
import React from 'react';
import styles from './DoctorSection.module.css';
import doctorImg from '../assets/pic5.webp'; // Assuming these paths are correct
import doc1 from '../assets/doctors/doc1.jpg';
import doc2 from '../assets/doctors/doc2.avif';
import doc3 from '../assets/doctors/docmale.jpg';
import { FaLinkedin, FaInstagram, FaTwitter, FaUserMd, FaGraduationCap, FaAward, FaClock, FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function DoctorsSection() {
  const navigate = useNavigate(); // Initialize useNavigate

=======
import React from "react";
import styles from "./DoctorSection.module.css";
import doctorImg from "../assets/pic5.webp";
import doc1 from "../assets/doctors/doc1.jpg";
import doc2 from "../assets/doctors/doc2.avif";
import doc3 from "../assets/doctors/docmale.jpg";
import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaUserMd,
  FaGraduationCap,
  FaAward,
  FaClock,
} from "react-icons/fa";

function DoctorsSection() {
>>>>>>> 1379db99cefc63c214de73755042b7a13a721835
  const doctors = [
    {
      name: "Dr. Rahul Mishra",
      specialty: "Cardiologist",
      img: doc1,
      bio: "Expert in interventional cardiology with a passion for preventive heart care.",
      experience: "15+ years of clinical experience",
      qualification: "MBBS, MD (Cardiology), FACC",
      achievement:
        "Awarded Best Cardiologist 2023 - Indian Medical Association",
      timing: "Mon - Fri: 9 AM - 5 PM",
    },
    {
      name: "Dr. Zahoor Ahmed Gilkar",
      specialty: "Urologist",
      img: doc3,
      bio: "Specializes in kidney health, urinary tract treatments, and minimally invasive surgeries.",
      experience: "12+ years of medical practice",
      qualification: "MBBS, MS (Urology), Fellowship in Laparoscopic Surgery",
      achievement:
        "Recognized for excellence in laparoscopic urology surgeries",
      timing: "Mon - Sat: 10 AM - 6 PM",
    },
    {
      name: "Dr. Shahida Kounsar",
      specialty: "Gynaecologist",
      img: doc2,
      bio: "Dedicated to women’s health, prenatal care, and reproductive wellness.",
      experience: "10+ years of gynecological practice",
      qualification: "MBBS, MD (Obstetrics & Gynaecology)",
      achievement: "Women’s Health Excellence Award 2022",
      timing: "Tue - Sat: 8 AM - 4 PM",
    },
    {
      name: "Dr. Ridhi Gupta",
      specialty: "Orthopedic Surgeon",
      img: doctorImg,
      bio: "Expert in joint replacement, sports injuries, and advanced orthopedic procedures.",
      experience: "14+ years in orthopedic surgery",
      qualification: "MBBS, MS (Orthopedics), Fellowship in Joint Replacement",
      achievement:
        "Best Orthopedic Surgeon Award 2021 - National Medical Forum",
      timing: "Mon - Fri: 10 AM - 7 PM",
    },
  ];

<<<<<<< HEAD
  const handleBookNowClick = () => {
    navigate('/services/checkup'); 
  };

=======
>>>>>>> 1379db99cefc63c214de73755042b7a13a721835
  return (
    <section className={styles.doctorsSection} id="doctors">
      <h1>
        <i
          className="fa-solid fa-user-doctor"
          style={{ fontSize: "50px", padding: "10px" }}
        ></i>
        Meet Our Doctors
      </h1>
      <div className={styles.doctorsContainer}>
        {doctors.map((doc, index) => (
<<<<<<< HEAD
          <div className={styles.doctorWrapper} key={index}>
            <div className={styles.doctorCard}>
              <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                  <img src={doc.img} alt={doc.name} />
                  <h2>{doc.name}</h2>
                  <p>{doc.specialty}</p>
                  <p>{doc.experience}</p>
                </div>
                <div className={styles.cardBack}>
                  <div>
                    <h4><FaUserMd /> Bio</h4>
                    <p className={styles.bio}>{doc.bio}</p>
                    <hr></hr>
                    <h4><FaGraduationCap />Qualification</h4>
                    <p className={styles.details}>{doc.qualification}</p>
                    <hr></hr>
                    <h4><FaAward />Achievements</h4>
                    <p className={styles.details}>{doc.achievement}</p>
                    <hr></hr>
                    <h4><FaClock />Timings</h4>
                    <p className={styles.timing}>{doc.timing}</p>
                    <hr></hr>

                    <div className={styles.socialIcons}>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                      </a>
                    </div>
=======
          <div className={styles.doctorCard} key={index}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <img src={doc.img} alt={doc.name} />
                <h2 className={styles.doctorName}>{doc.name}</h2>
                <div className={styles.frontInfo}>
                  <span className={styles.specialty}>{doc.specialty}</span>
                  <span className={styles.experience}>{doc.experience}</span>
                </div>{" "}
              </div>
              <div className={styles.cardBack}>
                <div>
                  <h4>
                    <FaUserMd /> Bio
                  </h4>
                  <p className={styles.bio}>{doc.bio}</p>
                  <hr></hr>
                  <h4>
                    <FaGraduationCap />
                    Qualification
                  </h4>
                  <p className={styles.details}>{doc.qualification}</p>
                  <hr></hr>
                  <h4>
                    <FaAward />
                    Achievements
                  </h4>
                  <p className={styles.details}>{doc.achievement}</p>
                  <hr></hr>
                  <h4>
                    <FaClock />
                    Timings
                  </h4>
                  <p className={styles.timing}>{doc.timing}</p>
                  <hr></hr>

                  <div className={styles.socialIcons}>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter />
                    </a>
>>>>>>> 1379db99cefc63c214de73755042b7a13a721835
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.bookNowContainer}>
              <div className={styles.connectorLine}></div>
              <button className={styles.bookNowBtn} onClick={handleBookNowClick}>
                <FaCalendarAlt className={styles.bookNowIcon} /> Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DoctorsSection;
