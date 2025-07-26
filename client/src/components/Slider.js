import React, { useState, useEffect } from "react";
import styles from "./slider.module.css";
import  images  from "../assets/images";

const sliderImages = [
  images.pic5,
  images.pic,
  images.pic5,
  images.pic,
  images.pic1,
  images.pic4,
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeSlide = (direction) => {
    const newIndex = (currentIndex + direction + sliderImages.length) % sliderImages.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slider}>
      <div className={styles.slides}>
        <img
          src={sliderImages[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className={styles.slide}
          loading="lazy"
        />
      </div>

      <button
        className={`${styles.button} ${styles.prev}`}
        onClick={() => changeSlide(-1)}
      >
        &#10094;
      </button>
      <button
        className={`${styles.button} ${styles.next}`}
        onClick={() => changeSlide(1)}
      >
        &#10095;
      </button>
    </div>
  );
}

export default Slider;
