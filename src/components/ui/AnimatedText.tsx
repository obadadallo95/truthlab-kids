'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  as?: keyof JSX.IntrinsicElements;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0.04,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      damping: 12,
      stiffness: 100,
    },
  },
};

export function AnimatedText({
  children,
  className = '',
  delay = 0,
  duration = 0.5,
  stagger = 0.02,
  as: Component = 'div',
}: AnimatedTextProps) {
  const text = typeof children === 'string' ? children : '';
  const words = text.split(' ');

  if (typeof children !== 'string') {
    const Tag = Component;
    const MotionTag = motion[Tag as keyof typeof motion] as any;
    return (
      <MotionTag
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration,
          delay,
          type: 'spring',
          damping: 12,
          stiffness: 100,
        }}
        className={className}
      >
        {children}
      </MotionTag>
    );
  }

  const MotionComponent = motion[Component as keyof typeof motion] as any;
  
  // Check if text contains Arabic characters
  const isArabic = /[\u0600-\u06FF]/.test(text);
  
  return (
    <MotionComponent className={className}>
      <motion.div
        variants={{
          ...containerVariants,
          visible: {
            ...containerVariants.visible,
            transition: {
              ...containerVariants.visible.transition,
              staggerChildren: stagger,
              delayChildren: delay,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        {words.map((word, wordIndex) => (
          <motion.span
            key={wordIndex}
            variants={itemVariants}
            className="inline-block mr-1"
          >
            {isArabic ? word : word.split('').map((char, charIndex) => (
              <motion.span
                key={`${wordIndex}-${charIndex}`}
                variants={itemVariants}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        ))}
      </motion.div>
    </MotionComponent>
  );
}

export function GradientText({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
}

export function GlitchText({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative inline-block ${className}`}>
      <motion.div
        className="absolute inset-0 text-cyan-400 opacity-70"
        animate={{
          x: [-2, 2, -2],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      >
        {children}
      </motion.div>
      <div className="relative z-10">{children}</div>
      <motion.div
        className="absolute inset-0 text-pink-400 opacity-70"
        animate={{
          x: [2, -2, 2],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function TypewriterText({
  children,
  className = '',
  delay = 0,
  speed = 0.05,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  speed?: number;
}) {
  const text = typeof children === 'string' ? children : '';
  
  if (typeof children !== 'string') {
    return <div className={className}>{children}</div>;
  }

  return (
    <span className={className}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.1,
            delay: delay + index * speed,
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}
