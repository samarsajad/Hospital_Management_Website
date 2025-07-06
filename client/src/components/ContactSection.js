import React from 'react';
import styles from './ContactSection.module.css';

import locationIcon from '../assets/location.png';
import phoneIcon from '../assets/telephone.png';
import emailIcon from '../assets/email.png';

function ContactUs() {
  return (
    <section className={styles.contactUs}>
      <div className={styles.contactContainer}>
        <h1>
          <i className="fa-solid fa-phone" style={{ fontSize: '50px', padding: '10px' }}></i>
          Contact Us
        </h1>
        <p style={{ textAlign: 'center' }}>
          Have questions or need assistance? Reach out to us using the information below
        </p>

        <div className={styles.contactInfo}>
          <div className={styles.contactDetails}>
            <h2>
              <img src={locationIcon} alt="Location" className={styles.icon} />
              Visit Us
            </h2>
            <p>
              Xyz Road <br />
              abcd, 192101<br />
              India
            </p>
          </div>
          <div className={styles.contactDetails}>
            <h2>
              <img src={phoneIcon} alt="Phone" className={styles.icon} />
              Call Us
            </h2>
            <p>
              General Inquiries: +124567891<br />
              Emergency: +1237894560
            </p>
          </div>
          <div className={styles.contactDetails}>
            <h2>
              <img src={emailIcon} alt="Email" className={styles.icon} />
              Email Us
            </h2>
            <p>
              xyz@gmail.com<br />
              xyz@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
