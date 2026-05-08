'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { Shield, Brain, Network, Users, Target, Award, TrendingUp, ArrowRight, Play } from 'lucide-react';
import { ProfessionalCard, FeatureCard, StatsCard } from '@/components/ui/ProfessionalCards';

interface ProfessionalAgeSelectionProps {
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
    fundamentalConcepts: string;
    interactiveScenarios: string;
    visualLearning: string;
    sourceInvestigation: string;
    contextAnalysis: string;
    claimVerification: string;
    advancedAIConcepts: string;
    algorithmAnalysis: string;
    evidenceStandards: string;
    progressiveLearningPath: string;
    progressiveLearningPathDesc: string;
    foundationStage: string;
    foundationStageDesc: string;
    explorationStage: string;
    explorationStageDesc: string;
    advancedStage: string;
    advancedStageDesc: string;
  };
}

export function ProfessionalAgeSelection({ translations }: ProfessionalAgeSelectionProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.1),transparent_50%)]" />
          
          {/* Floating 3D Particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
              animate={{
                opacity: [0.1, 0.5, 0.1],
                scale: [1, 2, 1],
                y: [0, -50, 0],
                x: [0, Math.random() * 30 - 15, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeInOut',
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-blue-400 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-500/20">
              <Target className="w-4 h-4" />
              <span>{translations.eyebrow}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              {translations.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {translations.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Age Selection Cards */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Young Explorers (6-9) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, type: 'spring' }}
              viewport={{ once: true }}
            >
              <ProfessionalCard className="h-full">
                <div className="text-center h-full flex flex-col">
                  {/* Icon */}
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-500/25 mx-auto mb-6"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: 'spring', damping: 15, stiffness: 300 }}
                  >
                    <Shield className="w-10 h-10" />
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {translations.age6to9}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6 flex-1">
                    {translations.age6to9Desc}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      <span>{translations.fundamentalConcepts}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      <span>{translations.interactiveScenarios}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      <span>{translations.visualLearning}</span>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <Link href="/path?age=6-9">
                    <motion.button
                      className="w-full px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl overflow-hidden shadow-lg shadow-green-500/25"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-emerald-700 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                      
                      <span className="relative flex items-center justify-center gap-2">
                        {translations.foundation}
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </motion.button>
                  </Link>
                </div>
              </ProfessionalCard>
            </motion.div>

            {/* Young Investigators (10-13) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
              viewport={{ once: true }}
            >
              <ProfessionalCard className="h-full">
                <div className="text-center h-full flex flex-col">
                  {/* Icon */}
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/25 mx-auto mb-6"
                    whileHover={{ scale: 1.1, rotate: -10 }}
                    transition={{ type: 'spring', damping: 15, stiffness: 300 }}
                  >
                    <Brain className="w-10 h-10" />
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {translations.age10to13}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6 flex-1">
                    {translations.age10to13Desc}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span>{translations.sourceInvestigation}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span>{translations.contextAnalysis}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span>{translations.claimVerification}</span>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <Link href="/path?age=10-13">
                    <motion.button
                      className="w-full px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl overflow-hidden shadow-lg shadow-blue-500/25"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                      
                      <span className="relative flex items-center justify-center gap-2">
                        {translations.explorer}
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </motion.button>
                  </Link>
                </div>
              </ProfessionalCard>
            </motion.div>

            {/* Young Scholars (14-17) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
              viewport={{ once: true }}
            >
              <ProfessionalCard className="h-full">
                <div className="text-center h-full flex flex-col">
                  {/* Icon */}
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-purple-500/25 mx-auto mb-6"
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    transition={{ type: 'spring', damping: 15, stiffness: 300 }}
                  >
                    <Network className="w-10 h-10" />
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {translations.age14to17}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6 flex-1">
                    {translations.age14to17Desc}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <div className="w-2 h-2 bg-purple-400 rounded-full" />
                      <span>{translations.advancedAIConcepts}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <div className="w-2 h-2 bg-purple-400 rounded-full" />
                      <span>{translations.algorithmAnalysis}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <div className="w-2 h-2 bg-purple-400 rounded-full" />
                      <span>{translations.evidenceStandards}</span>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <Link href="/path?age=14-17">
                    <motion.button
                      className="w-full px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl overflow-hidden shadow-lg shadow-purple-500/25"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                      
                      <span className="relative flex items-center justify-center gap-2">
                        {translations.analyst}
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </motion.button>
                  </Link>
                </div>
              </ProfessionalCard>
            </motion.div>
          </div>

          {/* Learning Path Overview */}
          <ProfessionalCard className="p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h3
                  className="text-3xl font-bold text-white mb-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  {translations.progressiveLearningPath}
                </motion.h3>
                
                <motion.p
                  className="text-gray-300 mb-8 leading-relaxed"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {translations.progressiveLearningPathDesc}
                </motion.p>
                
                <div className="space-y-4">
                  <motion.div
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{translations.foundationStage}</h4>
                      <p className="text-gray-400 text-sm">{translations.foundationStageDesc}</p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                      <Brain className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{translations.explorationStage}</h4>
                      <p className="text-gray-400 text-sm">{translations.explorationStageDesc}</p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                      <Network className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{translations.advancedStage}</h4>
                      <p className="text-gray-400 text-sm">{translations.advancedStageDesc}</p>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="aspect-square bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl backdrop-blur-md border border-blue-500/30 flex items-center justify-center relative overflow-hidden">
                  {/* Learning Path Visualization */}
                  <div className="relative w-full h-full p-8">
                    {/* Path Nodes */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                        <Brain className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                        <Network className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Connecting Lines */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                      <motion.path
                        d="M 100 40 L 100 100"
                        stroke="url(#gradient1)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                      />
                      <motion.path
                        d="M 100 100 L 100 160"
                        stroke="url(#gradient2)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        viewport={{ once: true }}
                      />
                      <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#10b981" />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                        <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#06b6d4" />
                          <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </ProfessionalCard>
        </div>
      </section>
    </div>
  );
}
