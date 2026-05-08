'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  speed?: number;
  rotationIntensity?: number;
}

export function FloatingCard({ 
  children, 
  className = '', 
  intensity = 10,
  speed = 3,
  rotationIntensity = 5
}: FloatingCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);
    
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        y: [0, -intensity, 0],
        rotateX: mousePosition.y * rotationIntensity,
        rotateY: mousePosition.x * rotationIntensity,
      }}
      transition={{
        y: {
          duration: speed,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        },
        rotateX: {
          duration: 0.3,
          ease: "easeOut"
        },
        rotateY: {
          duration: 0.3,
          ease: "easeOut"
        }
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {children}
    </motion.div>
  );
}
