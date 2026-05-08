'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface GlowTextProps {
  text: string;
  className?: string;
  glowColor?: string;
  intensity?: number;
  pulse?: boolean;
}

export function GlowText({ 
  text, 
  className = '', 
  glowColor = '#3B82F6',
  intensity = 1,
  pulse = false
}: GlowTextProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        textShadow: isHovered 
          ? `0 0 ${20 * intensity}px ${glowColor}, 0 0 ${40 * intensity}px ${glowColor}, 0 0 ${60 * intensity}px ${glowColor}`
          : `0 0 ${10 * intensity}px ${glowColor}, 0 0 ${20 * intensity}px ${glowColor}`
      }}
      animate={pulse ? {
        textShadow: [
          `0 0 ${10 * intensity}px ${glowColor}`,
          `0 0 ${30 * intensity}px ${glowColor}`,
          `0 0 ${10 * intensity}px ${glowColor}`
        ]
      } : {}}
      transition={{
        duration: pulse ? 2 : 0.3,
        repeat: pulse ? Infinity : 0,
        repeatType: pulse ? "reverse" : undefined
      }}
    >
      {text}
    </motion.div>
  );
}
