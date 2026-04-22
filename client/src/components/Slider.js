import React, { useState, useEffect } from 'react';
import styles from './slider.module.css';
import pic1 from '../assets/h1 (1).jpg';
import pic2 from '../assets/h1 (2).jpg';
import pic3 from '../assets/h4 (1).jpg';
import pic4 from '../assets/h4 (2).jpg';

const images = [pic1, pic2, pic3, pic4];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeSlide = (direction) => {
    const newIndex = (currentIndex + direction + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.heroHeader}>
      <div className={styles.slider}>
        <div className={styles.slides}>
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className={styles.slide}
            loading="lazy"
          />
        </div>
        <button className={`${styles.button} ${styles.prev}`} onClick={() => changeSlide(-1)}>
          &#10094;
        </button>
        <button className={`${styles.button} ${styles.next}`} onClick={() => changeSlide(1)}>
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default Slider;
