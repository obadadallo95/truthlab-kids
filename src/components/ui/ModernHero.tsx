'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Link } from '@/i18n/routing';
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';

interface ModernHeroProps {
  title: string;
  subtitle: string;
  primaryAction: { text: string; href: string };
  secondaryAction: { text: string; href: string };
}

export function ModernHero({ title, subtitle, primaryAction, secondaryAction }: ModernHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

    const element = ref.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const titleWords = title.split(' ');
  const subtitleWords = subtitle.split(' ');

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 5,
          }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Mouse-following light */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-400/20 to-cyan-400/20 blur-3xl pointer-events-none"
          animate={{
            x: mousePosition.x * 10,
            y: mousePosition.y * 10,
          }}
          transition={{
            type: 'spring',
            damping: 25,
            stiffness: 100,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-white/80 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>TruthLab Kids Platform</span>
          </motion.div>

          {/* Animated Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            <div className="overflow-hidden">
              {titleWords.map((word, wordIndex) => (
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 100 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + wordIndex * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="inline-block mr-3"
                >
                  <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                    {word}
                  </span>
                </motion.span>
              ))}
            </div>
          </h1>

          {/* Animated Subtitle */}
          <div className="text-xl md:text-2xl lg:text-3xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
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

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href={primaryAction.href}>
              <motion.button
                className="group relative px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-2">
                  {primaryAction.text}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.button>
            </Link>

            <Link href={secondaryAction.href}>
              <motion.button
                className="group relative px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center gap-2">
                  {secondaryAction.text}
                  <Shield className="w-5 h-5" />
                </span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute top-20 left-10"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center"
            >
              <Zap className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.7 }}
            className="absolute bottom-20 right-10"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, -10, 10, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center"
            >
              <Sparkles className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
