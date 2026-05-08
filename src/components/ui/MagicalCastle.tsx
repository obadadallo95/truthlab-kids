'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Link } from '@/i18n/routing';
import { ArrowRight, Sparkles, Wand2, Star, Crown, Castle } from 'lucide-react';

interface MagicalCastleProps {
  title: string;
  subtitle: string;
  primaryAction: { text: string; href: string };
  secondaryAction: { text: string; href: string };
}

export function MagicalCastle({ title, subtitle, primaryAction, secondaryAction }: MagicalCastleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number }>>([]);

  useEffect(() => {
    // Generate random stars
    const generatedStars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 3 + 2,
    }));
    setStars(generatedStars);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 30,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 30,
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
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900"
    >
      {/* Magical Sky Background */}
      <div className="absolute inset-0">
        {/* Stars */}
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: star.id * 0.1,
            }}
          />
        ))}

        {/* Magical Clouds */}
        <motion.div
          className="absolute top-20 left-0 w-64 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-0 w-96 h-48 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
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
        />

        {/* Rainbow Bridge */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-r from-red-500/20 via-yellow-500/20 via-green-500/20 via-blue-500/20 via-indigo-500/20 to-purple-500/20"
          animate={{
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Mouse-following magic wand */}
        <motion.div
          className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-yellow-400/30 to-purple-400/30 blur-3xl pointer-events-none"
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

      {/* Flying Unicorn */}
      <motion.div
        className="absolute top-20 right-20 z-20"
        animate={{
          x: [0, -200, 0],
          y: [0, -50, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center shadow-2xl"
        >
          <Sparkles className="w-8 h-8 text-white" />
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Crown Badge */}
          <motion.div
            initial={{ opacity: 0, y: -50, rotate: -180 }}
            animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, type: 'spring' }}
            className="inline-flex items-center gap-2 px-6 py-3 mb-8 text-sm font-bold text-yellow-300 bg-gradient-to-r from-purple-600/50 to-pink-600/50 backdrop-blur-sm rounded-full border border-yellow-400/30 shadow-lg shadow-yellow-400/25"
          >
            <Crown className="w-5 h-5" />
            <span>مملكة الحقيقة السحرية</span>
            <Star className="w-5 h-5" />
          </motion.div>

          {/* Magical Castle Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            <div className="overflow-hidden">
              {titleWords.map((word, wordIndex) => (
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 100, rotateX: 90 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{
                    duration: 1,
                    delay: 0.3 + wordIndex * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    type: 'spring',
                  }}
                  className="inline-block mr-3"
                >
                  <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent drop-shadow-lg">
                    {word}
                  </span>
                </motion.span>
              ))}
            </div>
          </h1>

          {/* Sparkling Subtitle */}
          <div className="text-xl md:text-2xl lg:text-3xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            {subtitleWords.map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.8 + wordIndex * 0.08,
                  ease: 'backOut',
                  type: 'spring',
                }}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* Magical CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1, delay: 1.5, type: 'spring' }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          >
            <Link href={primaryAction.href}>
              <motion.button
                className="group relative px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/50 border-2 border-yellow-400/50"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: [0, 2, -2, 0],
                  boxShadow: '0 25px 50px rgba(168, 85, 247, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                
                <span className="relative flex items-center justify-center gap-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    className="w-6 h-6"
                  >
                    <Wand2 className="w-6 h-6" />
                  </motion.div>
                  {primaryAction.text}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </motion.button>
            </Link>

            <Link href={secondaryAction.href}>
              <motion.button
                className="group relative px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-indigo-600/50 to-purple-600/50 backdrop-blur-md rounded-2xl border-2 border-purple-400/50 overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: 'rgba(168, 85, 247, 0.8)',
                  backgroundColor: 'rgba(99, 102, 241, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <span className="relative flex items-center justify-center gap-3">
                  <Castle className="w-5 h-5" />
                  {secondaryAction.text}
                </span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Floating Magical Elements */}
          <div className="absolute top-40 left-20">
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.3, 1],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg shadow-yellow-400/50"
            >
              <Star className="w-10 h-10 text-white" />
            </motion.div>
          </div>

          <div className="absolute bottom-40 right-20">
            <motion.div
              animate={{
                rotate: [0, -360],
                scale: [1, 1.5, 1],
                x: [0, -30, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 2,
              }}
              className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg shadow-purple-400/50"
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
