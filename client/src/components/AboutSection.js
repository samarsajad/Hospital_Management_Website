import React from 'react';
import styles from './AboutSection.module.css';

import images from '../assets/images'; 

const specialties = [
  { title: 'Urology', image: images.urology },
  { title: 'Gynaecology', image: images.gyanaecology },
  { title: 'Cardiology', image: images.cardiologyImg },
  { title: 'Dental', image: images.Dental },
  { title: 'Dermatology', image: images.Dermatology },
  { title: 'Gastroenterology', image: images.Gastroenterology },
  { title: 'Nephrology', image: images.Nephrology },
  { title: 'Neurology', image: images.Neurologywebp },
  { title: 'Oncology', image: images.Oncology },
  { title: 'Orthopaedics', image: images.Orthopaedics },
  { title: 'Paediatrics', image: images.Paediatrics },
  {title: 'Ophthalmology',image: images.Ophthalmology},
];


function AboutUs() {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.aboutContainer}>
        <h1>
          <i className="bi bi-house-door-fill" style={{ fontSize: '50px', padding: '10px' }}></i>
          About Us
        </h1>
        <p className={styles.text}>
          Welcome to MidCity Hospital Urology and General Nursing Home, a leading healthcare institution
          renowned for its excellence in urology and gynecology. Our commitment to providing top-notch
          medical care, state-of-the-art facilities, and compassionate patient care has made us a trusted
          name in the community.
        </p>
      </div>

      <div className={styles.historyVisionMission}>
        <div className={styles.history} style = {{padding: '30px 0'}}>
          <h2>
            Our History{' '}
            <img
              src={images.historyImg}
              alt="history"
              width={50}
              height={50}
              style={{ padding: '10px' }}
            />
          </h2>
          <p className={styles.text}>
            Established in 2019, MidCity Hospital has been at the forefront of healthcare innovation. Our
            founders, Dr. xyz and Dr. abc, envisioned a hospital that not only treated illnesses but also
            prioritized patient comfort and satisfaction. Over the decades, we have grown into a
            multifaceted healthcare provider, expanding our services to meet the evolving needs of our
            patients.
          </p>
            <span className={styles.readMore}>Read More</span>
        </div>

        <div className={styles.vision}>
          <h2>
            Our Vision{' '}
            <img
              src={images.vision}
              alt="vision"
              width={50}
              height={50}
              style={{ padding: '10px' }}
            />
          </h2>
          <p className={styles.text}>
            Our vision is to be a beacon of excellence in the healthcare industry, recognized for our
            innovative practices, clinical expertise, and unwavering commitment to patient care. We aim to
            set new standards in healthcare delivery and become the preferred choice for urology and
            gynecology services.
          </p>
          <span className={styles.readMore}>Read More</span>
        </div>

        <div className={styles.mission}>
          <h2>
            Our Mission{' '}
            <img
              src={images.mission}
              alt="mission"
              width={50}
              height={50}
              style={{ padding: '10px' }}
            />
          </h2>
          <p className={styles.text}>
            Our mission is to deliver exceptional healthcare services with a patient-centered approach. We
            strive to enhance the quality of life for our patients by offering advanced medical treatments
            and personalized care in a welcoming environment.
          </p>
          <span className={styles.readMore}>Read More</span>
        </div>
      </div>

      <h2 className={styles.specialtyHeading}>Our Specialties</h2>
<div className={styles.specialtyGrid}>
  {specialties.map((item, idx) => (
    <div className={styles.specialtyCard} key={idx}>
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>
        {item.title === 'Cardiology' &&
          'Our cardiology team offers expert heart care, from diagnostics to treatment for various cardiovascular conditions.'}
        {item.title === 'Orthopaedics' &&
          'We specialize in treating bone, joint, and muscle issues, helping you regain mobility and live pain-free.'}
        {item.title === 'Paediatrics' &&
          'Our paediatric department provides compassionate care for infants, children, and adolescents with a focus on wellness.'}
        {item.title === 'Neurology' &&
          'Expert neurologists provide diagnosis and management of brain and nervous system disorders.'}
        {item.title === 'Dermatology' &&
          'Offering advanced skincare solutions for acne, eczema, allergies, and aesthetic treatments.'}
        {item.title === 'Oncology' &&
          'Comprehensive cancer care from screening and diagnosis to chemotherapy and support services.'}
        {item.title === 'ENT' &&
          'Treating conditions related to ear, nose, and throat with precision and personalized care.'}
        {item.title === 'Gastroenterology' &&
          'From digestive disorders to liver care, our experts ensure optimal gastrointestinal health.'}
          {item.title === 'Ophthalmology' && 'Our ophthalmology department provides expert eye care, from routine checkups to advanced treatments for vision and eye health.'}

        {/* Fallback in case title is new or custom */}
        {![
          'Cardiology',
          'Orthopaedics',
          'Paediatrics',
          'Neurology',
          'Dermatology',
          'Oncology',
          'ENT',
          'Gastroenterology',
          'Ophthalmology',
        ].includes(item.title) &&
          'Expert specialists providing high-quality medical care tailored to individual needs.'}
      </p>
    </div>
  ))}
</div>


        
      
    </section>
  );
}

export default AboutUs;
export default AboutUs;