import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './CustomCursor.module.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over interactive elements
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.hasAttribute('data-hover-effect');
      
      setIsHovered(isInteractive);
    };

    const mouseDown = () => setIsClicked(true);
    const mouseUp = () => setIsClicked(false);

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mousedown', mouseDown);
    document.addEventListener('mouseup', mouseUp);

    // Add hover effect to all interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], [data-hover-effect]'
    );
    
    interactiveElements.forEach(el => {
      el.setAttribute('data-hover-effect', 'true');
    });

    return () => {
      document.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mousedown', mouseDown);
      document.removeEventListener('mouseup', mouseUp);
    };
  }, []);

  return (
    <motion.div
      className={`${styles.cursor} ${isHovered ? styles.hovered : ''} ${isClicked ? styles.clicked : ''}`}
      animate={{
        x: position.x - 10,
        y: position.y - 10,
        scale: isHovered ? 2 : 1,
        opacity: isHovered ? 0.5 : 1
      }}
      transition={{
        type: 'spring',
        damping: 20,
        stiffness: 300,
        mass: 0.5
      }}
    >
      <motion.div 
        className={styles.cursorInner}
        animate={{
          scale: isHovered ? 0.5 : 1,
          opacity: isHovered ? 0.8 : 0.6
        }}
      />
    </motion.div>
  );
};

export default CustomCursor;
