'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Link } from '@/i18n/routing';
import { ArrowRight, Play, Shield, Brain, Network } from 'lucide-react';

interface ProfessionalHeroProps {
  title: string;
  subtitle: string;
  primaryAction: { text: string; href: string };
  secondaryAction: { text: string; href: string };
}

export function ProfessionalHero({ title, subtitle, primaryAction, secondaryAction }: ProfessionalHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
        });
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const element = ref.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const titleWords = title.split(' ');
  const subtitleWords = subtitle.split(' ');

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Advanced 3D Background */}
      <div className="absolute inset-0">
        {/* 3D Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollY * 0.5}px) translateX(${mousePosition.x * 0.5}px)`
          }}
        />
        
        {/* Floating 3D Elements */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            transform: `translateX(${mousePosition.x * 2}px) translateY(${mousePosition.y * 2}px)`
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 5,
          }}
          style={{
            transform: `translateX(${mousePosition.x * 3}px) translateY(${mousePosition.y * 3}px)`
          }}
        />

        {/* 3D Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30"
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 2, 1],
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.1,
              ease: 'easeInOut',
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-blue-400 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-500/20"
              >
                <Shield className="w-4 h-4" />
                <span>AI-Powered Media Literacy Platform</span>
              </motion.div>

              {/* Professional Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                <div className="overflow-hidden">
                  {titleWords.map((word, wordIndex) => (
                    <motion.span
                      key={wordIndex}
                      initial={{ opacity: 0, y: 100, rotateX: 90 }}
                      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                      transition={{
                        duration: 0.8,
                        delay: 0.3 + wordIndex * 0.1,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      className="inline-block mr-3"
                    >
                      <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                        {word}
                      </span>
                    </motion.span>
                  ))}
                </div>
              </h1>

              {/* Professional Subtitle */}
              <div className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
                {subtitleWords.map((word, wordIndex) => (
                  <motion.span
                    key={wordIndex}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: 0.8 + wordIndex * 0.05,
                      ease: 'easeOut',
                    }}
                    className="inline-block mr-2"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>

              {/* Professional CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href={primaryAction.href}>
                  <motion.button
                    className="group relative px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl overflow-hidden shadow-2xl shadow-blue-500/25"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <span className="relative flex items-center justify-center gap-2">
                      {primaryAction.text}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
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

            {/* Right 3D Visualization */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`
              }}
            >
              <div className="relative aspect-square">
                {/* Central 3D Element */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-3xl backdrop-blur-md border border-blue-500/30 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                >
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/50">
                    <Brain className="w-16 h-16 text-white" />
                  </div>
                </motion.div>

                {/* Orbiting Elements */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/50">
                      <Network className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                >
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/50">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </motion.div>

                {/* Floating Particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [1, 1.5, 1],
                      y: [0, -40, 0],
                      x: [0, Math.random() * 60 - 30, 0],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: 'easeInOut',
                    }}
                    style={{
                      left: `${20 + i * 10}%`,
                      top: `${20 + i * 8}%`,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
