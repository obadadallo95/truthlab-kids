'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { Sparkles, Crown, Star, Heart, Shield, Zap, Users, BookOpen, Wand2 } from 'lucide-react';
import { MagicalCard, CrystalButton, EnchantedCard } from '@/components/ui/MagicalCards';

interface MagicalAgeSelectionProps {
  translations: {
    title: string;
    subtitle: string;
    age6to9: string;
    age6to9Desc: string;
    age10to13: string;
    age10to13Desc: string;
    age14to17: string;
    age14to17Desc: string;
    eyebrow: string;
    foundation: string;
    explorer: string;
    analyst: string;
    selectTrack: string;
    continue: string;
  };
}

export function MagicalAgeSelection({ translations }: MagicalAgeSelectionProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900">
      {/* Floating Magical Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-yellow-400/30 to-purple-400/30 rounded-full"
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              y: [0, -100, 0],
              x: [0, Math.random() * 200 - 100, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeInOut',
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent mb-4">
              {translations.title}
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              {translations.subtitle}
            </p>
          </motion.div>

          {/* Age Selection Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Young Explorers */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, type: 'spring' }}
              viewport={{ once: true }}
            >
              <MagicalCard magical={true} glow={true} float={true}>
                <div className="text-center">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-green-500/50 mx-auto mb-6"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: 'spring', damping: 15, stiffness: 300 }}
                  >
                    <Sparkles className="w-10 h-10" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {translations.age6to9}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {translations.age6to9Desc}
                  </p>
                  
                  <div className="mt-6">
                    <CrystalButton variant="emerald" size="lg" icon={<BookOpen className="w-5 h-5" />}>
                      {translations.foundation}
                    </CrystalButton>
                  </div>
                </div>
              </MagicalCard>
            </motion.div>

            {/* Young Investigators */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
              viewport={{ once: true }}
            >
              <MagicalCard magical={true} glow={true} float={true}>
                <div className="text-center">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-blue-500/50 mx-auto mb-6"
                    whileHover={{ scale: 1.1, rotate: -10 }}
                    transition={{ type: 'spring', damping: 15, stiffness: 300 }}
                  >
                    <Shield className="w-10 h-10" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {translations.age10to13}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {translations.age10to13Desc}
                  </p>
                  
                  <div className="mt-6">
                    <CrystalButton variant="sapphire" size="lg" icon={<Users className="w-5 h-5" />}>
                      {translations.explorer}
                    </CrystalButton>
                  </div>
                </div>
              </MagicalCard>
            </motion.div>

            {/* Young Scholars */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
              viewport={{ once: true }}
            >
              <MagicalCard magical={true} glow={true} float={true}>
                <div className="text-center">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-purple-500/50 mx-auto mb-6"
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    transition={{ type: 'spring', damping: 15, stiffness: 300 }}
                  >
                    <Wand2 className="w-10 h-10" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {translations.age14to17}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {translations.age14to17Desc}
                  </p>
                  
                  <div className="mt-6">
                    <CrystalButton variant="amethyst" size="lg" icon={<Zap className="w-5 h-5" />}>
                      {translations.analyst}
                    </CrystalButton>
                  </div>
                </div>
              </MagicalCard>
            </motion.div>
          </div>

          {/* Continue Button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <CrystalButton variant="ruby" size="lg" icon={<Heart className="w-5 h-5" />}>
              {translations.selectTrack}
            </CrystalButton>
          </motion.div>
        </div>
      </div>

      {/* Background Magic */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-transparent via-purple-400/20 to-transparent"
          animate={{
            opacity: [0.3, 0.7, 0.3],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        <motion.div
          className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-pink-400/20 to-transparent"
          animate={{
            opacity: [0.3, 0.7, 0.3],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>
    </div>
  );
}
