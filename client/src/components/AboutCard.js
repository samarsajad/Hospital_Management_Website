import React, { useState } from 'react';
import styles from './AboutCard.module.css';

const AboutCard = ({ title, icon, shortText, fullText }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(prev => !prev);

  return (
    <div className={`${styles.card} ${expanded ? styles.expanded : ''}`}>
      <div className={styles.cardHeader}>
        <h3>{title}</h3>
        <img src={icon} alt={title} width={40} height={40} />
      </div>

      <p className={styles.cardText}>
        {expanded ? fullText : shortText}
      </p>

      <button
        className={`${styles.readMoreBtn} ${expanded ? styles.expanded : ''}`}
        onClick={handleToggle}
      >
        {expanded ? 'Show Less' : 'Read More'}
      </button>
    </div>
  );
};

export default AboutCard;