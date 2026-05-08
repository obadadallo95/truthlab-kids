'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface FloatingOrbProps {
  delay?: number;
  duration?: number;
  size?: number;
  color?: string;
  initialX?: number;
  initialY?: number;
}

function FloatingOrb({
  delay = 0,
  duration = 20,
  size = 200,
  color = 'rgba(125, 211, 252, 0.15)',
  initialX = 0,
  initialY = 0,
}: FloatingOrbProps) {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl"
      style={{
        width: size,
        height: size,
        background: color,
        left: `${initialX}%`,
        top: `${initialY}%`,
      }}
      animate={{
        x: [0, 100, -100, 0],
        y: [0, -100, 100, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
}

interface GridLineProps {
  delay?: number;
  duration?: number;
  direction?: 'horizontal' | 'vertical';
}

function GridLine({ delay = 0, duration = 3, direction = 'horizontal' }: GridLineProps) {
  const isHorizontal = direction === 'horizontal';
  
  return (
    <motion.div
      className={`absolute ${isHorizontal ? 'h-px w-full' : 'w-px h-full'} bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent`}
      animate={{
        opacity: [0, 1, 0],
        [isHorizontal ? 'translateY' : 'translateX']: isHorizontal 
          ? ['-100%', '100%'] 
          : ['-100%', '100%'],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

export function AnimatedBackground({
  children,
  variant = 'default',
  className = '',
}: {
  children: React.ReactNode;
  variant?: 'default' | 'grid' | 'orbs' | 'minimal';
  className?: string;
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const backgroundVariants = {
    default: (
      <>
        <FloatingOrb delay={0} duration={25} size={300} color="rgba(125, 211, 252, 0.1)" initialX={10} initialY={10} />
        <FloatingOrb delay={5} duration={30} size={250} color="rgba(214, 184, 75, 0.08)" initialX={70} initialY={60} />
        <FloatingOrb delay={10} duration={35} size={200} color="rgba(129, 140, 248, 0.06)" initialX={40} initialY={80} />
      </>
    ),
    grid: (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-purple-400/5" />
        <GridLine delay={0} duration={4} direction="horizontal" />
        <GridLine delay={1} duration={4} direction="vertical" />
        <GridLine delay={2} duration={4} direction="horizontal" />
        <GridLine delay={3} duration={4} direction="vertical" />
      </div>
    ),
    orbs: (
      <>
        <FloatingOrb delay={0} duration={20} size={400} color="rgba(59, 130, 246, 0.08)" initialX={20} initialY={20} />
        <FloatingOrb delay={3} duration={25} size={350} color="rgba(168, 85, 247, 0.06)" initialX={60} initialY={40} />
        <FloatingOrb delay={6} duration={30} size={300} color="rgba(34, 197, 94, 0.04)" initialX={80} initialY={70} />
      </>
    ),
    minimal: (
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-slate-800/50"
        animate={{
          background: [
            'linear-gradient(135deg, rgba(2,8,11,0.8) 0%, rgba(5,12,16,0.8) 100%)',
            'linear-gradient(225deg, rgba(5,12,16,0.8) 0%, rgba(2,8,11,0.8) 100%)',
            'linear-gradient(135deg, rgba(2,8,11,0.8) 0%, rgba(5,12,16,0.8) 100%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    ),
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0">
        {backgroundVariants[variant]}
        
        {/* Mouse follower effect */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-cyan-400/10 to-purple-400/10 blur-3xl pointer-events-none"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{
            type: 'spring',
            damping: 25,
            stiffness: 100,
          }}
        />
      </div>
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export function PulseBackground({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function ParticleField({
  children,
  className = '',
  particleCount = 20,
}: {
  children: React.ReactNode;
  className?: string;
  particleCount?: number;
}) {
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10,
  }));

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-cyan-400/30"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
