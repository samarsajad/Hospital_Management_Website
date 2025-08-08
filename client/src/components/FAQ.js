
import React, { useState } from 'react';
import styles from './FAQ.module.css';

const faqData = [
  {
    question: 'How do I book a doctor appointment?',
    answer: 'Go to the Doctor Checkup section, select a doctor, and fill in your patient details.'
  },
  {
    question: 'Can I upload prescriptions for surgery?',
    answer: 'Yes! In the Surgery Booking section, you can upload your prescription in PDF or image format.'
  },
  {
    question: 'How do i view my test results?',
    answer: 'You can login to your account and check for update from the Lab and Diagnostics.'
  },
  {
    question: 'Who can access my medical bookings?',
    answer: 'Only authorized hospital administrators can view your bookings through the admin panel.'
  },
  {
    question: 'Can i update my patient details after submitting?',
    answer: 'Yes, you can make changes to your patient details'
  }, 
  {
    question: 'How long does it take to receive a response after sending an email?',
    answer: 'Email responses are very fast and you can get a response in minutes as long as it is within the working hours'

  }

];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={styles.faqContainer}id="faq">
      <h2> Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className={styles.faqItem}>
          <div className={styles.question} onClick={() => toggleFAQ(index)}>
            {item.question}
            <span className={styles.toggleIcon}>{activeIndex === index ? '-' : '+'}</span>
          </div>
          {activeIndex === index && <div className={styles.answer}>{item.answer}</div>}
        </div>
      ))}
    </div>
  );
}

export default FAQ;
