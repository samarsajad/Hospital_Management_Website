import React, { useState, useEffect, useRef } from 'react';
import styles from './TestimonialsSection.module.css';
import { FaQuoteLeft, FaStar, FaUsers, FaHeart, FaCheck, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaHeartPulse, FaShieldHeart } from 'react-icons/fa6';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    feedback: "The care I received at MidCity Hospital was exceptional. The doctors were thorough, compassionate, and made me feel comfortable throughout my treatment. The staff went above and beyond to ensure my recovery was smooth.",
    rating: 5,
    avatar: "SJ",
    treatment: "Surgery Department",
    color: "gradient1",
    verified: true,
    location: "New York, NY"
  },
  {
    id: 2,
    name: "Michael Chen",
    feedback: "Outstanding service from the pharmacy department. The medications were prepared quickly and the pharmacist took time to explain everything clearly. The online ordering system is very convenient.",
    rating: 5,
    avatar: "MC",
    treatment: "Pharmacy Services",
    color: "gradient2",
    verified: true,
    location: "Los Angeles, CA"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    feedback: "The lab diagnostics team was professional and efficient. Results were delivered on time and the staff made the entire process stress-free. Highly recommend their services.",
    rating: 5,
    avatar: "ER",
    treatment: "Lab Diagnostics",
    color: "gradient3",
    verified: true,
    location: "Chicago, IL"
  },
  {
    id: 4,
    name: "David Thompson",
    feedback: "My regular health checkups here have been excellent. The doctors are knowledgeable and take time to explain everything. The booking system is user-friendly and appointments are always on time.",
    rating: 5,
    avatar: "DT",
    treatment: "Health Checkup",
    color: "gradient4",
    verified: true,
    location: "Houston, TX"
  },
  {
    id: 5,
    name: "Maria Garcia",
    feedback: "The emergency care I received was life-saving. The medical team acted swiftly and professionally. I'm forever grateful for their expertise and dedication to patient care.",
    rating: 5,
    avatar: "MG",
    treatment: "Emergency Care",
    color: "gradient5",
    verified: true,
    location: "Miami, FL"
  },
  {
    id: 6,
    name: "James Wilson",
    feedback: "Excellent telemedicine services! The virtual consultations are convenient and the doctors are very attentive. Technology meets healthcare beautifully at MidCity Hospital.",
    rating: 5,
    avatar: "JW",
    treatment: "Telemedicine",
    color: "gradient6",
    verified: true,
    location: "Seattle, WA"
  }
];

const TestimonialsSection = ({ darkMode }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [typingText, setTypingText] = useState('');
  const sectionRef = useRef(null);
  const cardsPerView = 3;
  const maxSlide = Math.ceil(testimonials.length / cardsPerView) - 1;

  const modeClass = darkMode ? styles.dark : "";

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          startTypingAnimation();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentSlide(prev => (prev >= maxSlide ? 0 : prev + 1));
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isVisible, maxSlide]);

  // Typewriter effect for heading
  const startTypingAnimation = () => {
    const text = "What Our Patients Say";
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setTypingText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
  };

  const renderStars = (rating, isAnimated = false) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`${index < rating ? styles.starFilled : styles.starEmpty} ${
          isAnimated ? styles.starAnimated : ''
        }`}
        style={{ animationDelay: `${index * 0.1}s` }}
      />
    ));
  };

  const goToSlide = (direction) => {
    if (direction === 'next') {
      setCurrentSlide(prev => (prev >= maxSlide ? 0 : prev + 1));
    } else {
      setCurrentSlide(prev => (prev <= 0 ? maxSlide : prev - 1));
    }
  };

  const getVisibleTestimonials = () => {
    const start = currentSlide * cardsPerView;
    const end = start + cardsPerView;
    return testimonials.slice(start, end);
  };

  return (
    <section 
      ref={sectionRef}
      className={`${styles.testimonialsSection} ${modeClass} ${isVisible ? styles.sectionVisible : ''}`} 
      id="testimonials"
    >
      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingShape1}></div>
        <div className={styles.floatingShape2}></div>
        <div className={styles.floatingShape3}></div>
        <div className={styles.particles}>
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className={styles.particle} style={{ 
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}></div>
          ))}
        </div>
      </div>

      <div className={styles.container}>
        {/* Enhanced Header with Typewriter Effect */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerIcon}>
            <FaHeartPulse className={styles.pulsingIcon} />
          </div>
          <h1 className={styles.mainTitle}>
            <span className={styles.typewriter}>{typingText}</span>
            <span className={styles.cursor}>|</span>
          </h1>
          <p className={styles.subtitle}>
            Real stories from real patients who experienced exceptional care
          </p>
          <div className={styles.statsBar}>
            <div className={styles.stat}>
              <FaHeart className={styles.statIcon} />
              <span>50,000+ Happy Patients</span>
            </div>
            <div className={styles.stat}>
              <FaStar className={styles.statIcon} />
              <span>4.9/5 Average Rating</span>
            </div>
            <div className={styles.stat}>
              <FaShieldHeart className={styles.statIcon} />
              <span>99.9% Satisfaction Rate</span>
            </div>
          </div>
        </div>

        {/* Advanced Testimonials Carousel */}
        <div className={styles.carouselContainer}>
          <button 
            className={`${styles.navButton} ${styles.navLeft}`}
            onClick={() => goToSlide('prev')}
            disabled={currentSlide === 0}
          >
            <FaChevronLeft />
          </button>

          <div className={styles.testimonialsCarousel}>
            <div 
              className={styles.carouselTrack}
              style={{ transform: `translateX(-${currentSlide * (100/cardsPerView)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`${styles.testimonialCard} ${styles[testimonial.color]} ${
                    activeCard === testimonial.id ? styles.cardActive : ''
                  } ${isVisible ? styles.cardVisible : ''}`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                  onMouseEnter={() => setActiveCard(testimonial.id)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  {/* Glassmorphism overlay */}
                  <div className={styles.cardGlass}></div>
                  
                  {/* Floating quote icon */}
                  <div className={styles.quoteIcon}>
                    <FaQuoteLeft />
                  </div>

                  {/* Verified badge */}
                  {testimonial.verified && (
                    <div className={styles.verifiedBadge}>
                      <FaCheck />
                      <span>Verified Patient</span>
                    </div>
                  )}

                  <div className={styles.testimonialItem}>
                    <p className={styles.testimonialFeedback}>
                      <span className={styles.openQuote}>"</span>
                      {testimonial.feedback}
                      <span className={styles.closeQuote}>"</span>
                    </p>

                    {/* Enhanced Patient Info */}
                    <div className={styles.patientInfo}>
                      <div className={`${styles.avatar} ${styles[testimonial.color]}`}>
                        <span className={styles.avatarText}>{testimonial.avatar}</span>
                        <div className={styles.avatarRing}></div>
                      </div>
                      <div className={styles.patientDetails}>
                        <h3 className={styles.patientName}>
                          {testimonial.name}
                          <div className={styles.nameUnderline}></div>
                        </h3>
                        <p className={styles.treatment}>{testimonial.treatment}</p>
                        <p className={styles.location}>{testimonial.location}</p>
                      </div>
                    </div>
                  </div>

                  {/* Card hover effects */}
                  <div className={styles.cardEffects}>
                    <div className={styles.shimmer}></div>
                    <div className={styles.glow}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className={`${styles.navButton} ${styles.navRight}`}
            onClick={() => goToSlide('next')}
            disabled={currentSlide === maxSlide}
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Carousel indicators */}
        <div className={styles.indicators}>
          {Array.from({ length: maxSlide + 1 }, (_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === currentSlide ? styles.indicatorActive : ''}`}
              onClick={() => setCurrentSlide(index)}
            >
              <span className={styles.indicatorDot}></span>
            </button>
          ))}
        </div>

        {/* Enhanced Trust Badge */}
        <div className={styles.trustBadge}>
          <div className={styles.trustContent}>
            <div className={styles.trustIcon}>
              <FaShieldHeart />
            </div>
            <div className={styles.trustText}>
              <h3>Join Our Healthcare Family</h3>
              <p>Over 50,000 patients trust MidCity Hospital for exceptional healthcare services</p>
            </div>
            <div className={styles.trustMetrics}>
              <div className={styles.metric}>
                <span className={styles.metricNumber}>50K+</span>
                <span className={styles.metricLabel}>Patients</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.metricNumber}>4.9★</span>
                <span className={styles.metricLabel}>Rating</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.metricNumber}>99.9%</span>
                <span className={styles.metricLabel}>Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;