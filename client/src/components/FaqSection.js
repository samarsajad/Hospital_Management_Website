import React, { useState } from 'react';
import styles from './FaqSection.module.css';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
  {
    question: 'How do I book a doctor appointment?',
    answer: 'You can book a checkup by navigating to the “Checkup” section under Services and selecting a suitable time slot.'
  },
  {
    question: 'Can I upload prescriptions for surgery bookings?',
    answer: 'Yes, prescription uploads are required for surgery bookings to ensure patient safety and suitability.'
  },
  {
    question: 'Are home sample collections available for lab tests?',
    answer: 'Yes, our lab partners offer home sample collection. You can choose this option during booking.'
  },
  {
    question: 'Can I track my medicine orders?',
    answer: 'Yes, all medicine orders come with real-time tracking accessible from the Pharmacy page.'
  },
  {
    question: 'Is there an admin dashboard?',
    answer: 'Yes, administrators can manage appointments and product listings through a dedicated admin panel.'
  }
];

const FaqSection = ({ darkMode }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`${styles.faqSection} ${darkMode ? styles.dark : ''}`}>
      <h2 className={styles.title}>Frequently Asked Questions</h2>
      <div className={styles.faqList}>
        {faqData.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <div className={styles.question} onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              {openIndex === index ? <FaMinus /> : <FaPlus />}
            </div>
            {openIndex === index && (
              <div className={styles.answer}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
