'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ReactNode } from 'react';
import { Link } from '@/i18n/routing';
import { ArrowRight, Play, BarChart3, Users, Shield, Brain, Zap, Target, TrendingUp } from 'lucide-react';

interface ProfessionalCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function ProfessionalCard({
  children,
  className = '',
  delay = 0,
  hover = true,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: ProfessionalCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hover) return;
    
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
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 50, rotateX: 15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ 
        duration: 0.8, 
        delay, 
        type: 'spring',
        damping: 20,
        stiffness: 100
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      style={{
        transform: hover ? `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${mousePosition.y}deg)` : undefined,
        transition: 'transform 0.3s ease-out',
      }}
      whileHover={hover ? { 
        scale: 1.02, 
        y: -5,
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)'
      } : {}}
    >
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 rounded-2xl" />
      
      {/* Hover Glow */}
      {hover && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      {/* Shimmer Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 rounded-2xl"
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
  stats?: string;
  className?: string;
}

export function FeatureCard({ icon, title, description, stats, className = '' }: FeatureCardProps) {
  return (
    <ProfessionalCard className={className} hover={true}>
      <div className="flex flex-col h-full">
        {/* Icon */}
        <motion.div
          className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/25 mb-6"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', damping: 15, stiffness: 300 }}
        >
          {icon}
        </motion.div>
        
        {/* Content */}
        <div className="flex-1">
          <motion.h3
            className="text-2xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h3>
          
          <motion.p
            className="text-gray-300 leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
        </div>

        {/* Stats */}
        {stats && (
          <motion.div
            className="flex items-center gap-2 text-sm font-medium text-blue-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <BarChart3 className="w-4 h-4" />
            {stats}
          </motion.div>
        )}

        {/* Arrow */}
        <motion.div
          className="flex items-center gap-2 text-blue-400 font-medium mt-4"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          Learn more
          <ArrowRight className="w-4 h-4" />
        </motion.div>
      </div>
    </ProfessionalCard>
  );
}

interface StatsCardProps {
  value: string;
  label: string;
  trend?: 'up' | 'down' | 'neutral';
  icon?: ReactNode;
  className?: string;
}

export function StatsCard({ value, label, trend = 'up', icon, className = '' }: StatsCardProps) {
  const trendColors = {
    up: 'text-green-400',
    down: 'text-red-400',
    neutral: 'text-gray-400',
  };

  return (
    <ProfessionalCard className={`p-6 ${className}`} hover={false}>
      <div className="text-center">
        {/* Icon */}
        {icon && (
          <motion.div
            className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center text-blue-400 mx-auto mb-4"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
            viewport={{ once: true }}
          >
            {icon}
          </motion.div>
        )}
        
        {/* Value */}
        <motion.div
          className="text-4xl font-bold text-white mb-2"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
          viewport={{ once: true }}
        >
          {value}
        </motion.div>
        
        {/* Trend */}
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
        
        {/* Label */}
        <motion.div
          className="text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {label}
        </motion.div>
      </div>
    </ProfessionalCard>
  );
}

interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryAction: { text: string; href: string };
  secondaryAction: { text: string; href: string };
  className?: string;
}

export function CTASection({ title, subtitle, primaryAction, secondaryAction, className = '' }: CTASectionProps) {
  return (
    <ProfessionalCard className={`p-12 ${className}`}>
      <div className="text-center">
        <motion.h3
          className="text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h3>
        
        <motion.p
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href={primaryAction.href}>
            <motion.button
              className="group relative px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl overflow-hidden shadow-lg shadow-blue-500/25"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <span className="relative flex items-center justify-center gap-2">
                <Target className="w-5 h-5" />
                {primaryAction.text}
              </span>
            </motion.button>
          </Link>

          <Link href={secondaryAction.href}>
            <motion.button
              className="group relative px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <span className="relative flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                {secondaryAction.text}
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </ProfessionalCard>
  );
}
