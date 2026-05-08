'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface NeumorphicButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  icon?: ReactNode;
}

export function NeumorphicButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  icon,
}: NeumorphicButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantStyles = {
    primary: `
      bg-gradient-to-r from-purple-600 to-cyan-600
      shadow-lg shadow-purple-500/25
      hover:shadow-xl hover:shadow-purple-500/40
      text-white
    `,
    secondary: `
      bg-gradient-to-r from-white/20 to-white/10
      backdrop-blur-md
      border border-white/20
      shadow-lg
      hover:shadow-xl hover:bg-white/30
      text-white
    `,
    ghost: `
      bg-transparent
      border border-white/20
      hover:bg-white/10
      text-white/80 hover:text-white
    `,
  };

  return (
    <motion.button
      className={`
        relative overflow-hidden
        rounded-xl font-medium
        transition-all duration-300
        ${sizeClasses[size]}
        ${variantStyles[variant]}
        ${className}
      `}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98, y: 0 }}
      transition={{ type: 'spring', damping: 15, stiffness: 400 }}
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-700 to-cyan-700 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0"
        whileHover={{ opacity: 1 }}
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {icon && (
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            {icon}
          </motion.div>
        )}
        {children}
      </span>
    </motion.button>
  );
}

interface FloatingActionButtonProps {
  children: ReactNode;
  onClick?: () => void;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  className?: string;
}

export function FloatingActionButton({
  children,
  onClick,
  position = 'bottom-right',
  className = '',
}: FloatingActionButtonProps) {
  const positionClasses = {
    'bottom-right': 'bottom-8 right-8',
    'bottom-left': 'bottom-8 left-8',
    'top-right': 'top-8 right-8',
    'top-left': 'top-8 left-8',
  };

  return (
    <motion.button
      className={`
        fixed z-50 w-16 h-16
        bg-gradient-to-r from-purple-600 to-cyan-600
        rounded-full shadow-2xl shadow-purple-500/25
        flex items-center justify-center text-white
        ${positionClasses[position]}
        ${className}
      `}
      onClick={onClick}
      whileHover={{ scale: 1.1, rotate: 90 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', damping: 15, stiffness: 400 }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {children}
      </motion.div>
    </motion.button>
  );
}

interface PulseButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  pulseColor?: 'purple' | 'cyan' | 'pink';
}

export function PulseButton({
  children,
  onClick,
  className = '',
  pulseColor = 'purple',
}: PulseButtonProps) {
  const pulseColors = {
    purple: 'bg-purple-500',
    cyan: 'bg-cyan-500',
    pink: 'bg-pink-500',
  };

  return (
    <motion.button
      className={`
        relative px-8 py-4
        bg-gradient-to-r from-purple-600 to-cyan-600
        rounded-xl text-white font-semibold
        shadow-lg shadow-purple-500/25
        ${className}
      `}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulse ring */}
      <motion.div
        className={`absolute inset-0 rounded-xl ${pulseColors[pulseColor]} opacity-0`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
