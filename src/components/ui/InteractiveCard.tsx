'use client';

import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'default' | 'glass' | 'neon' | 'holographic';
  hoverScale?: number;
  tilt?: boolean;
}

export function InteractiveCard({
  children,
  className = '',
  onClick,
  variant = 'default',
  hoverScale = 1.02,
  tilt = false,
}: InteractiveCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const variantStyles = {
    default: 'border border-white/10 bg-white/5 backdrop-blur-sm',
    glass: 'border border-white/20 bg-white/10 backdrop-blur-md shadow-lg',
    neon: 'border border-cyan-400/30 bg-black/40 shadow-[0_0_20px_rgba(34,211,238,0.3)]',
    holographic: 'border border-gradient-to-r from-cyan-400/30 to-purple-400/30 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md',
  };

  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl ${variantStyles[variant]} ${className}`}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: hoverScale }}
      whileTap={{ scale: 0.98 }}
      style={{
        transform: tilt ? `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${mousePosition.y}deg)` : undefined,
        transition: 'transform 0.2s ease-out',
      }}
    >
      {/* Gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

interface InteractiveButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'glow' | 'neon';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

export function InteractiveButton({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  disabled = false,
}: InteractiveButtonProps) {
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantStyles = {
    primary: 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-cyan-500/25',
    secondary: 'border border-cyan-400/30 bg-white/5 text-cyan-100 backdrop-blur-sm hover:bg-white/10',
    glow: 'bg-black text-cyan-400 border border-cyan-400/50 shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.8)]',
    neon: 'bg-black text-white border border-pink-500/50 shadow-[0_0_15px_rgba(236,72,153,0.5)] hover:shadow-[0_0_25px_rgba(236,72,153,0.8)]',
  };

  return (
    <motion.button
      className={`relative overflow-hidden rounded-lg font-medium transition-all duration-300 ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', damping: 15, stiffness: 400 }}
    >
      {/* Button ripple effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
        initial={{ x: '-100%', y: '-100%' }}
        whileTap={{ x: '100%', y: '100%' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />
      
      {/* Glow overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}

interface HoverRevealProps {
  children: ReactNode;
  revealContent: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function HoverReveal({
  children,
  revealContent,
  className = '',
  direction = 'up',
}: HoverRevealProps) {
  const directionVariants = {
    up: { y: 10, opacity: 0 },
    down: { y: -10, opacity: 0 },
    left: { x: 10, opacity: 0 },
    right: { x: -10, opacity: 0 },
  };

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      whileHover="hover"
    >
      <motion.div
        variants={{
          hover: { ...directionVariants[direction] },
          rest: { x: 0, y: 0 },
        }}
        initial="rest"
        animate="rest"
      >
        {children}
      </motion.div>
      
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        variants={{
          hover: { x: 0, y: 0 },
          rest: { ...directionVariants[direction] },
        }}
        initial="rest"
        animate="rest"
      >
        {revealContent}
      </motion.div>
    </motion.div>
  );
}

interface MagneticButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export function MagneticButton({
  children,
  onClick,
  className = '',
}: MagneticButtonProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      className={`relative overflow-hidden rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-white font-medium shadow-lg ${className}`}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
