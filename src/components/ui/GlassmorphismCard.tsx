'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ReactNode } from 'react';

interface GlassmorphismCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  tilt?: boolean;
  delay?: number;
}

export function GlassmorphismCard({
  children,
  className = '',
  hover = true,
  glow = true,
  tilt = false,
  delay = 0,
}: GlassmorphismCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: tilt ? `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${mousePosition.y}deg)` : undefined,
        transition: 'transform 0.2s ease-out',
      }}
      whileHover={hover ? { scale: 1.02, y: -5 } : {}}
    >
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10 rounded-2xl" />
      
      {/* Glow effect */}
      {glow && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0"
        whileHover={{ opacity: 1 }}
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />
      
      {/* Content */}
      <div className="relative z-10 p-8">
        {children}
      </div>
    </motion.div>
  );
}

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon, title, description, className = '' }: FeatureCardProps) {
  return (
    <GlassmorphismCard className={className} hover={true} glow={true} tilt={true}>
      <div className="flex flex-col items-center text-center space-y-4">
        <motion.div
          className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white shadow-lg"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', damping: 15, stiffness: 300 }}
        >
          {icon}
        </motion.div>
        
        <motion.h3
          className="text-2xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h3>
        
        <motion.p
          className="text-white/70 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>
      </div>
    </GlassmorphismCard>
  );
}

interface StatsCardProps {
  value: string;
  label: string;
  trend?: 'up' | 'down' | 'neutral';
  className?: string;
}

export function StatsCard({ value, label, trend = 'neutral', className = '' }: StatsCardProps) {
  const trendColors = {
    up: 'text-green-400',
    down: 'text-red-400',
    neutral: 'text-white/60',
  };

  return (
    <GlassmorphismCard className={`p-6 ${className}`} hover={true} glow={false}>
      <div className="text-center">
        <motion.div
          className="text-4xl font-bold text-white mb-2"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
          viewport={{ once: true }}
        >
          {value}
        </motion.div>
        
        <motion.div
          className={`text-sm ${trendColors[trend]} mb-2`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {trend === 'up' && '↑'}
          {trend === 'down' && '↓'}
          {trend === 'neutral' && '→'}
        </motion.div>
        
        <motion.div
          className="text-white/60 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {label}
        </motion.div>
      </div>
    </GlassmorphismCard>
  );
}
