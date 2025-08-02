import React, { useState } from 'react';
import styles from './NotFound.module.css';
import { useNavigate } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react'; // Optional icons

const NotFound = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(true);

  const toggleMode = () => setDarkMode(!darkMode);

  return (
    <div className={`${styles.container} ${darkMode ? styles.dark : styles.light}`}>
      <div className={styles.toggleContainer}>
        <button onClick={toggleMode} className={styles.toggleButton}>
          {/* {darkMode ? <Sun size={20} /> : <Moon size={20} />} */}
          {darkMode ? '☀️' : '🌙'}

        </button>
      </div>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>Oops! Page Not Found</p>
      <button className={styles.button} onClick={() => navigate('/')}>
        Go to Home
      </button>
    </div>
  );
};

export default NotFound;
