'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import TruthLabLogo from '@/components/brand/TruthLabLogo';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search, RefreshCw, Sparkles, Zap, Compass } from 'lucide-react';

export default function Custom404({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = params;
  const [isClient, setIsClient] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);

  useEffect(() => {
    setIsClient(true);
    
    // Generate particles with deterministic values
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: ((i * 12345 + 9301) % 100) - 50,
      y: ((i * 49297 + 233280) % 100) - 50,
      size: Math.random() * 3 + 2,
      delay: i * 0.2
    }));
    
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const t = useTranslations('Custom404');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden relative">
      {/* Interactive Background */}
      <div className="fixed inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-20"
            style={{
              background: `radial-gradient(circle at ${30 + i * 20}% 50%, rgba(125, 211, 252, 0.1), transparent 70%)`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
        
        {/* Dynamic Particles */}
        {isClient && particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-white/10 rounded-full backdrop-blur-sm"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: '50%',
              top: '50%',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.6, 0.4, 0.6],
              scale: [0, 1, 0.8, 1],
              x: particle.x,
              y: particle.y,
            }}
            transition={{
              duration: 4,
              delay: particle.delay,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <TruthLabLogo className="w-24 h-24 mx-auto" />
          </motion.div>

          {/* 404 Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <div className="relative">
              <h1 className="text-8xl md:text-[10rem] font-bold bg-gradient-to-r from-[#7dd3fc] via-white to-[#7dd3fc] bg-clip-text text-transparent mb-4">
                {t('title')}
              </h1>
              
              {/* Animated Underline */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7dd3fc] to-[#0ea5e9]"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2, delay: 0.6 }}
              />
            </div>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
              {t('description')}
            </h2>
          </motion.div>

          {/* Interactive Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Link
              href="/"
              className="group flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[0_0_30px_rgba(125,211,252,0.5)]"
            >
              <Home className="w-5 h-5" />
              {t('goHome')}
            </Link>

            <button
              onClick={() => window.location.reload()}
              className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[0_0_30px_rgba(147,51,234,0.5)]"
            >
              <RefreshCw className="w-5 h-5" />
              {t('tryAgain')}
            </button>

            <div className="relative group">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('searchPlaceholder')}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7dd3fc] transition-all duration-300"
              />
              <Search className="absolute right-3 top-1/2 text-gray-400 w-5 h-5" />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm"
          >
            <Link
              href="/age-selection"
              className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Compass className="w-4 h-4" />
              {t('exploreContent')}
            </Link>

            <Link
              href="/truth-lab"
              className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Sparkles className="w-4 h-4" />
              {t('truthLab')}
            </Link>

            <Link
              href="/spread-simulator"
              className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Zap className="w-4 h-4" />
              {t('spreadSimulator')}
            </Link>
          </motion.div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-8"
          >
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('goBack')}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
