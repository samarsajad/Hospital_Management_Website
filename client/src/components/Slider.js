import React, { useState, useEffect } from "react";
import styles from "./slider.module.css";
import { images } from "../assets/images";

const sliderImages = [
    images.pic5,
    images.pic,
    images.pic1,
    images.pic4,
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const changeSlide = (direction) => {
    if (transitioning) return;
    setTransitioning(true);
    const newIndex = (currentIndex + direction + sliderImages.length) % sliderImages.length;
    setCurrentIndex(newIndex);
  };

useEffect(() => {
  const interval = setInterval(() => {
    setTransitioning(true);
    setCurrentIndex(prevIndex => (prevIndex + 1) % sliderImages.length);
  }, 3000);

  return () => clearInterval(interval);
}, []); // <-- Empty dependency array is important! please do not remove

useEffect(() => {
  if (transitioning) {
    const timer = setTimeout(() => setTransitioning(false), 600); // fallback
    return () => clearTimeout(timer);
  }
}, [transitioning]);

  const handleTransitionEnd = () => {
    setTransitioning(false);
  };

  return (
    <div className={styles.slider}>
      <div 
        className={styles.slides}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: transitioning ? 'transform 0.5s ease-in-out' : 'none'
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {sliderImages.map((image, index) => (
          <div key={index} className={styles.slideContainer}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className={styles.slide}
              loading={index === currentIndex ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      <button
        className={`${styles.button} ${styles.prev}`}
        onClick={() => changeSlide(-1)}
        aria-label="Previous slide"
      >
        &#10094;
      </button>
      <button
        className={`${styles.button} ${styles.next}`}
        onClick={() => changeSlide(1)}
        aria-label="Next slide"
      >
        &#10095;
      </button>
    </div>
  );
}

export default Slider;