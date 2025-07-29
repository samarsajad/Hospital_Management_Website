import React from 'react';
import styles from './NotFound.module.css';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>Oops! Page Not Found</p>
      <button className={styles.button} onClick={() => navigate('/')}>
        Go to Home
      </button>
    </div>
  );
};

export default NotFound;
