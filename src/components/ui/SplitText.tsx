'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  animationType?: 'fade' | 'slide' | 'scale' | 'rotate';
}

export function SplitText({ 
  text, 
  className = '', 
  delay = 0,
  duration = 0.5,
  stagger = 0.03,
  animationType = 'fade'
}: SplitTextProps) {
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
    setWords(text.split(' '));
  }, [text]);

  const getAnimationVariants = () => {
    switch (animationType) {
      case 'slide':
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 }
        };
      case 'rotate':
        return {
          hidden: { opacity: 0, rotateX: 90 },
          visible: { opacity: 1, rotateX: 0 }
        };
      default: // fade
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay
      }
    }
  };

  const itemVariants = getAnimationVariants();

  return (
    <motion.div
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-1"
          variants={itemVariants}
          transition={{ duration }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
