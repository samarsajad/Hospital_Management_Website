import React, { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import styles from './MousePointer.module.css';
import './mousePointer.css';

const MousePointer = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isOverText, setIsOverText] = useState(false);
  
  // Framer Motion values for smooth cursor movement
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring animations for smooth trailing effect
  const cursorX = useSpring(mouseX, { damping: 25, stiffness: 700 });
  const cursorY = useSpring(mouseY, { damping: 25, stiffness: 700 });
  
  // Simplified snake trail with fewer dots for better performance
  const trail1X = useSpring(mouseX, { damping: 20, stiffness: 400 });
  const trail1Y = useSpring(mouseY, { damping: 20, stiffness: 400 });
  
  const trail2X = useSpring(mouseX, { damping: 18, stiffness: 300 });
  const trail2Y = useSpring(mouseY, { damping: 18, stiffness: 300 });
  
  const trail3X = useSpring(mouseX, { damping: 16, stiffness: 200 });
  const trail3Y = useSpring(mouseY, { damping: 16, stiffness: 200 });

  // Move all useTransform calls to the top level to fix React Hooks error
  const cursorTransformX = useTransform(cursorX, (x) => x - 6);
  const cursorTransformY = useTransform(cursorY, (y) => y - 6);
  
  const trail1TransformX = useTransform(trail1X, (x) => x - 4);
  const trail1TransformY = useTransform(trail1Y, (y) => y - 4);
  
  const trail2TransformX = useTransform(trail2X, (x) => x - 4);
  const trail2TransformY = useTransform(trail2Y, (y) => y - 4);
  
  const trail3TransformX = useTransform(trail3X, (x) => x - 4);
  const trail3TransformY = useTransform(trail3Y, (y) => y - 4);
  
  const ringTransformX = useTransform(cursorX, (x) => x - 30);
  const ringTransformY = useTransform(cursorY, (y) => y - 30);

  const updateMousePosition = useCallback((e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
    if (!isVisible) setIsVisible(true);
  }, [mouseX, mouseY, isVisible]);

  const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleMouseLeave = useCallback(() => setIsHovering(false), []);
  const handleMouseDown = useCallback(() => setIsClicking(true), []);
  const handleMouseUp = useCallback(() => setIsClicking(false), []);
  const handleInteractiveElementEnter = useCallback(() => setIsHovering(true), []);
  const handleInteractiveElementLeave = useCallback(() => setIsHovering(false), []);
  const handleTextElementEnter = useCallback(() => setIsOverText(true), []);
  const handleTextElementLeave = useCallback(() => setIsOverText(false), []);

  useEffect(() => {
    document.addEventListener('mousemove', updateMousePosition, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Enhanced hover detection for navbar and interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, select, [role="button"], .interactive, nav *, .navbar *, .nav-link, .nav-item, .btn, .nav-button'
    );
    const textElements = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"], textarea, [contenteditable="true"]');
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleInteractiveElementEnter, { passive: true });
      element.addEventListener('mouseleave', handleInteractiveElementLeave, { passive: true });
    });
    textElements.forEach(element => {
      element.addEventListener('mouseenter', handleTextElementEnter, { passive: true });
      element.addEventListener('mouseleave', handleTextElementLeave, { passive: true });
    });

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleInteractiveElementEnter);
        element.removeEventListener('mouseleave', handleInteractiveElementLeave);
      });
      textElements.forEach(element => {
        element.removeEventListener('mouseenter', handleTextElementEnter);
        element.removeEventListener('mouseleave', handleTextElementLeave);
      });
    };
  }, [updateMousePosition, handleMouseEnter, handleMouseLeave, handleMouseDown, handleMouseUp, handleInteractiveElementEnter, handleInteractiveElementLeave, handleTextElementEnter, handleTextElementLeave]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot with Framer Motion */}
      <motion.div
        className={`${styles['custom-cursor']} ${isHovering ? styles['cursor-hover'] : ''} ${isClicking ? styles['cursor-click'] : ''} ${isOverText ? styles['text-cursor'] : ''}`}
        style={{ 
          x: cursorTransformX,
          y: cursorTransformY
        }}
        animate={{
          scale: isHovering ? 1.4 : 1,
          opacity: isVisible ? 1 : 0
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25
        }}
      />
      
      {/* Simplified snake trail dots */}
      <motion.div
        className={`${styles['snake-dot']} ${isHovering ? styles['snake-hover'] : ''}`}
        style={{ 
          x: trail1TransformX,
          y: trail1TransformY
        }}
        animate={{
          scale: isHovering ? 1.2 : 0.85,
          opacity: 0.7
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
      />
      
      <motion.div
        className={`${styles['snake-dot']} ${isHovering ? styles['snake-hover'] : ''}`}
        style={{ 
          x: trail2TransformX,
          y: trail2TransformY
        }}
        animate={{
          scale: isHovering ? 1.1 : 0.75,
          opacity: 0.5
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 18
        }}
      />
      
      <motion.div
        className={`${styles['snake-dot']} ${isHovering ? styles['snake-hover'] : ''}`}
        style={{ 
          x: trail3TransformX,
          y: trail3TransformY
        }}
        animate={{
          scale: isHovering ? 1.0 : 0.65,
          opacity: 0.3
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 16
        }}
      />
      
      {/* Cursor ring with Framer Motion */}
      <motion.div
        className={`${styles['cursor-ring']} ${isHovering ? styles['ring-hover'] : ''} ${isClicking ? styles['ring-click'] : ''}`}
        style={{ 
          x: ringTransformX,
          y: ringTransformY
        }}
        animate={{
          scale: isHovering ? 1.3 : 1,
          opacity: isHovering ? 0.7 : 0.5
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25
        }}
      />
    </>
  );
};

export default MousePointer; 