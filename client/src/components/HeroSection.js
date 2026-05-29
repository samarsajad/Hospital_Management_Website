import React, { useState, useEffect } from 'react';
import styles from './HeroSection.module.css';
import pic1 from '../assets/pic5.webp';
import Skeleton from './ui/Skeleton';

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = pic1;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroImage}>
          {!imageLoaded && !imageError && (
            <Skeleton 
              className={styles.skeletonImage} 
              style={{ 
                width: '100%', 
                height: '100%',
                borderRadius: '20px'
              }} 
            />
          )}
          {(imageLoaded || imageError) && (
            <img 
              src={pic1} 
              alt="Doctor with patient" 
              className={`${styles.heroImage} ${imageLoaded ? styles.loaded : ''}`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              style={{ opacity: imageLoaded ? 1 : 0 }}
            />
          )}
        </div>
        <div className={styles.heroText}>
          <p>
            Welcome to <span className={styles.highlight}>MidCity Urology and General Nursing Home</span> — your trusted center for compassionate, reliable urological and general healthcare.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;