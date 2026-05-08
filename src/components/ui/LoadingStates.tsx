'use client';

import { motion } from 'framer-motion';
import { Loader2, Brain, Search, Shield } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function LoadingSpinner({ size = 'md', className = '' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} ${className}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    >
      <Loader2 className="w-full h-full text-cyan-400" />
    </motion.div>
  );
}

interface PulseLoaderProps {
  className?: string;
}

export function PulseLoader({ className = '' }: PulseLoaderProps) {
  return (
    <div className={`flex gap-2 ${className}`}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-3 h-3 rounded-full bg-cyan-400"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

interface DotsLoaderProps {
  className?: string;
}

export function DotsLoader({ className = '' }: DotsLoaderProps) {
  return (
    <div className={`flex gap-1 ${className}`}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 rounded-full bg-white"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.1,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

interface SkeletonLoaderProps {
  lines?: number;
  className?: string;
}

export function SkeletonLoader({ lines = 3, className = '' }: SkeletonLoaderProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <motion.div
          key={i}
          className="h-4 bg-white/10 rounded"
          animate={{
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: 'easeInOut',
          }}
          style={{
            width: i === lines - 1 ? '60%' : '100%',
          }}
        />
      ))}
    </div>
  );
}

interface ProgressLoaderProps {
  progress?: number;
  className?: string;
}

export function ProgressLoader({ progress = 0, className = '' }: ProgressLoaderProps) {
  return (
    <div className={`w-full h-2 bg-white/10 rounded-full overflow-hidden ${className}`}>
      <motion.div
        className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
        initial={{ width: '0%' }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />
    </div>
  );
}

interface LessonLoadingProps {
  stage?: 'analyzing' | 'processing' | 'verifying';
  className?: string;
}

export function LessonLoading({ stage = 'analyzing', className = '' }: LessonLoadingProps) {
  const stageConfig = {
    analyzing: {
      icon: Search,
      color: 'text-cyan-400',
      title: 'Analyzing Content',
      description: 'Examining the source and context...',
    },
    processing: {
      icon: Brain,
      color: 'text-purple-400',
      title: 'Processing Information',
      description: 'Cross-referencing with verified sources...',
    },
    verifying: {
      icon: Shield,
      color: 'text-green-400',
      title: 'Verifying Facts',
      description: 'Checking authenticity and reliability...',
    },
  };

  const config = stageConfig[stage];
  const Icon = config.icon;

  return (
    <motion.div
      className={`flex flex-col items-center justify-center p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className={`mb-4 ${config.color}`}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <Icon size={48} />
      </motion.div>
      
      <motion.h3
        className="text-xl font-semibold text-white mb-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {config.title}
      </motion.h3>
      
      <motion.p
        className="text-sm text-white/70 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {config.description}
      </motion.p>
      
      <div className="mt-6 w-full max-w-xs">
        <ProgressLoader progress={stage === 'analyzing' ? 33 : stage === 'processing' ? 66 : 90} />
      </div>
      
      <div className="mt-4">
        <DotsLoader />
      </div>
    </motion.div>
  );
}

interface PageTransitionProps {
  children: React.ReactNode;
  isLoading?: boolean;
}

export function PageTransition({ children, isLoading = false }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {isLoading ? (
        <div className="flex items-center justify-center min-h-[200px]">
          <LessonLoading />
        </div>
      ) : (
        children
      )}
    </motion.div>
  );
}

interface CardLoaderProps {
  className?: string;
}

export function CardLoader({ className = '' }: CardLoaderProps) {
  return (
    <motion.div
      className={`p-6 rounded-xl border border-white/10 bg-white/5 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start gap-4">
        <motion.div
          className="w-12 h-12 rounded-lg bg-white/10"
          animate={{
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <div className="flex-1 space-y-3">
          <motion.div
            className="h-6 bg-white/10 rounded w-3/4"
            animate={{
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.1,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="h-4 bg-white/10 rounded w-full"
            animate={{
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.2,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="h-4 bg-white/10 rounded w-2/3"
            animate={{
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.3,
              ease: 'easeInOut',
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
