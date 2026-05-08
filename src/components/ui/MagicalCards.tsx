'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ReactNode } from 'react';
import { Sparkles, Wand2, Crown, Star, Heart, Shield, Zap } from 'lucide-react';

interface MagicalCardProps {
  children: ReactNode;
  className?: string;
  magical?: boolean;
  glow?: boolean;
  float?: boolean;
  delay?: number;
}

export function MagicalCard({
  children,
  className = '',
  magical = true,
  glow = true,
  float = true,
  delay = 0,
}: MagicalCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!float) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 100, rotateY: -90 }}
      animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
      transition={{ 
        duration: 1, 
        delay, 
        type: 'spring',
        damping: 20,
        stiffness: 100
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: float ? `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${mousePosition.y}deg)` : undefined,
        transition: 'transform 0.3s ease-out',
      }}
      whileHover={{ 
        scale: 1.05, 
        y: -10,
        boxShadow: '0 25px 50px rgba(168, 85, 247, 0.4)'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-500/20 to-indigo-600/20 backdrop-blur-lg border border-purple-400/30 rounded-3xl" />
      
      {magical && (
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-400/10 to-transparent rounded-3xl" />
      )}
      
      {glow && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 via-purple-400/30 to-pink-400/30 rounded-3xl opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}
      
      {magical && (
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full"
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [0, -20, 0],
                x: [0, Math.random() * 40 - 20, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: 'easeInOut',
              }}
              style={{
                left: `${20 + i * 12}%`,
                top: `${20 + i * 10}%`,
              }}
            />
          ))}
        </div>
      )}
      
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 opacity-0 rounded-3xl"
        whileHover={{ opacity: 1 }}
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />
      
      <div className="relative z-10 p-8">
        {children}
      </div>
    </motion.div>
  );
}

interface CrystalButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'amethyst' | 'emerald' | 'ruby' | 'sapphire';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  icon?: ReactNode;
}

export function CrystalButton({
  children,
  onClick,
  variant = 'amethyst',
  size = 'md',
  className = '',
  disabled = false,
  icon,
}: CrystalButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantStyles = {
    amethyst: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700',
    emerald: 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700',
    ruby: 'bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700',
    sapphire: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700',
  };

  return (
    <motion.button
      className={`
        relative overflow-hidden
        rounded-2xl font-bold text-white
        shadow-lg shadow-purple-500/25
        transition-all duration-300
        ${sizeClasses[size]}
        ${variantStyles[variant]}
        ${className}
      `}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ 
        scale: 1.05, 
        rotate: [0, 2, -2, 0],
        boxShadow: '0 25px 50px rgba(168, 85, 247, 0.5)'
      }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-50" />
      
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-purple-400/30 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      <motion.div
        className="absolute inset-0 overflow-hidden rounded-2xl"
        whileHover={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: [0, -15, 0],
              x: [0, Math.random() * 30 - 15, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeInOut',
            }}
            style={{
              left: `${25 + i * 15}%`,
              top: '50%',
            }}
          />
        ))}
      </motion.div>
      
      <span className="relative z-10 flex items-center justify-center gap-2">
        {icon && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="mr-2"
          >
            {icon}
          </motion.div>
        )}
        {children}
      </span>
    </motion.button>
  );
}

interface EnchantedCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  magicalPower?: string;
  className?: string;
}

export function EnchantedCard({ 
  icon, 
  title, 
  description, 
  magicalPower = '✨',
  className = '' 
}: EnchantedCardProps) {
  return (
    <MagicalCard className={className} magical={true} glow={true} float={true}>
      <div className="flex flex-col items-center text-center space-y-6">
        <motion.div
          className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-purple-500/50"
          whileHover={{ 
            scale: 1.1, 
            rotate: [0, 10, -10, 0],
            boxShadow: '0 25px 50px rgba(168, 85, 247, 0.5)'
          }}
          transition={{ type: 'spring', damping: 15, stiffness: 300 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          >
            {icon}
          </motion.div>
        </motion.div>
        
        <motion.h3
          className="text-3xl font-bold bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h3>
        
        <motion.p
          className="text-white/80 leading-relaxed text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>

        <motion.div
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full border border-purple-400/30"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {magicalPower}
          </motion.div>
          <span className="text-sm text-purple-200 font-medium">قوة سحرية</span>
        </motion.div>
      </div>
    </MagicalCard>
  );
}

interface WizardStatsCardProps {
  value: string;
  label: string;
  power?: number;
  className?: string;
}

export function WizardStatsCard({ value, label, power = 0, className = '' }: WizardStatsCardProps) {
  return (
    <MagicalCard className={`p-6 ${className}`} magical={true} glow={true} float={false}>
      <div className="text-center">
        <motion.div
          className="text-5xl font-bold bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent mb-3"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
          viewport={{ once: true }}
        >
          {value}
        </motion.div>
        
        <div className="flex justify-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: i < power ? '#fbbf24' : '#4b5563',
              }}
              animate={i < power ? { scale: [1, 1.3, 1] } : {}}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
        
        <motion.div
          className="text-white/60 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {label}
        </motion.div>
      </div>
    </MagicalCard>
  );
}
