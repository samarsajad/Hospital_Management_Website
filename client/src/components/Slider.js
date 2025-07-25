import React, { useState, useEffect } from 'react';
import styles from './slider.module.css';

import pic1 from '../assets/pic5.webp';
import pic2 from '../assets/pic.webp';
import pic3 from '../assets/pic5.webp';
import pic4 from '../assets/pic.webp';

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
  );
}

export default Slider;
