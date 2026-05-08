'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from '@/i18n/routing';
import { 
  ArrowRight, 
  Play, 
  CheckCircle, 
  Lock, 
  Star, 
  Trophy, 
  Target, 
  Brain, 
  Shield, 
  Network, 
  Users,
  Clock,
  Award,
  BarChart3,
  BookOpen,
  Zap
} from 'lucide-react';
import { ProfessionalCard, StatsCard, FeatureCard } from '@/components/ui/ProfessionalCards';

interface ProfessionalPathProps {
  translations: {
    title: string;
    subtitle: string;
    back: string;
    continue: string;
    modulesCompleted: string;
    learningTime: string;
    averageScore: string;
    currentLevel: string;
    currentLevelLabel: string;
    learningModules: string;
    learningModulesSubtitle: string;
    achievementsTitle: string;
    achievementsSubtitle: string;
    modules: Array<{
      id: number;
      title: string;
      description: string;
      duration: string;
      completed: boolean;
      locked: boolean;
      progress: number;
      lessons: number;
      icon: string;
    }>;
    achievements: Array<{
      id: number;
      title: string;
      description: string;
      icon: string;
      unlocked: boolean;
    }>;
    stats: {
      totalModules: number;
      completedModules: number;
      totalTime: string;
      averageScore: string;
    };
  };
}

export function ProfessionalPath({ translations }: ProfessionalPathProps) {
  const [selectedModule, setSelectedModule] = useState(translations.modules[0]);
  const [hoveredModule, setHoveredModule] = useState<number | null>(null);

  const getModuleIcon = (iconName: string) => {
    switch(iconName) {
      case 'brain': return <Brain className="w-8 h-8" />;
      case 'shield': return <Shield className="w-8 h-8" />;
      case 'network': return <Network className="w-8 h-8" />;
      case 'users': return <Users className="w-8 h-8" />;
      default: return <BookOpen className="w-8 h-8" />;
    }
  };

  const getAchievementIcon = (iconName: string) => {
    switch(iconName) {
      case 'trophy': return <Trophy className="w-8 h-8" />;
      case 'star': return <Star className="w-8 h-8" />;
      case 'award': return <Award className="w-8 h-8" />;
      case 'target': return <Target className="w-8 h-8" />;
      default: return <Zap className="w-8 h-8" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(59,130,246,0.1),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_80%,rgba(6,182,212,0.1),transparent_60%)]" />
          
          {/* Floating Learning Path */}
          <motion.div
            className="absolute top-32 left-32 w-80 h-80"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          >
            <div className="w-full h-full bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl" />
          </motion.div>
          
          <motion.div
            className="absolute bottom-32 right-32 w-96 h-96"
            animate={{ rotate: -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          >
            <div className="w-full h-full bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl" />
          </motion.div>
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
              <span>Learning Journey</span>
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

      {/* Progress Stats */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <StatsCard 
              value={`${translations.stats.completedModules}/${translations.stats.totalModules}`} 
              label={translations.modulesCompleted} 
              trend="up" 
              icon={<BookOpen className="w-6 h-6" />}
            />
            <StatsCard 
              value={translations.stats.totalTime} 
              label={translations.learningTime} 
              trend="up" 
              icon={<Clock className="w-6 h-6" />}
            />
            <StatsCard 
              value={translations.stats.averageScore} 
              label={translations.averageScore} 
              trend="up" 
              icon={<BarChart3 className="w-6 h-6" />}
            />
            <StatsCard 
              value={translations.currentLevel} 
              label={translations.currentLevelLabel} 
              trend="up" 
              icon={<Trophy className="w-6 h-6" />}
            />
          </div>
        </div>
      </section>

      {/* Learning Modules */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {translations.learningModules}
            </h2>
            <p className="text-xl text-gray-300">{translations.learningModulesSubtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Module List */}
            <div className="space-y-6">
              {translations.modules.map((module, index) => (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProfessionalCard 
                    className={`p-6 cursor-pointer transition-all duration-300 ${
                      selectedModule.id === module.id ? 'border-blue-400/50' : ''
                    } ${module.locked ? 'opacity-60' : ''}`}
                    onClick={() => !module.locked && setSelectedModule(module)}
                    onMouseEnter={() => setHoveredModule(module.id)}
                    onMouseLeave={() => setHoveredModule(null)}
                    hover={!module.locked}
                  >
                    <div className="flex items-start gap-4">
                      {/* Module Icon */}
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                        module.completed 
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                          : module.locked 
                            ? 'bg-gray-600' 
                            : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                      }`}>
                        {module.locked ? (
                          <Lock className="w-8 h-8 text-white" />
                        ) : module.completed ? (
                          <CheckCircle className="w-8 h-8 text-white" />
                        ) : (
                          getModuleIcon(module.icon)
                        )}
                      </div>
                      
                      {/* Module Info */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-semibold text-white">{module.title}</h3>
                          {module.completed && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: 'spring', damping: 15, stiffness: 300 }}
                            >
                              <CheckCircle className="w-6 h-6 text-green-400" />
                            </motion.div>
                          )}
                        </div>
                        
                        <p className="text-gray-300 mb-4">{module.description}</p>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {module.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <BookOpen className="w-4 h-4" />
                            {module.lessons} lessons
                          </span>
                        </div>
                        
                        {/* Progress Bar */}
                        {!module.locked && (
                          <div className="mt-4">
                            <div className="flex items-center justify-between text-sm mb-2">
                              <span className="text-gray-400">Progress</span>
                              <span className="text-blue-400 font-medium">{module.progress}%</span>
                            </div>
                            <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${module.progress}%` }}
                                transition={{ duration: 1, delay: 0.5 }}
                                viewport={{ once: true }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </ProfessionalCard>
                </motion.div>
              ))}
            </div>

            {/* Module Detail View */}
            <div className="lg:sticky lg:top-8">
              <ProfessionalCard className="h-full">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold text-white">Module Details</h3>
                    {selectedModule.completed && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', damping: 15, stiffness: 300 }}
                      >
                        <Trophy className="w-8 h-8 text-yellow-400" />
                      </motion.div>
                    )}
                  </div>

                  {/* Module Preview */}
                  <div className="aspect-video bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl backdrop-blur-md border border-blue-500/30 flex items-center justify-center mb-8 overflow-hidden">
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/50"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    >
                      {getModuleIcon(selectedModule.icon)}
                    </motion.div>
                    
                    {/* Floating Elements */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                        animate={{
                          opacity: [0.3, 1, 0.3],
                          scale: [1, 1.5, 1],
                          y: [0, -30, 0],
                          x: [0, Math.random() * 40 - 20, 0],
                        }}
                        transition={{
                          duration: 3 + Math.random() * 2,
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

                  {/* Module Information */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">{selectedModule.title}</h4>
                      <p className="text-gray-300 leading-relaxed">{selectedModule.description}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-white/5 rounded-lg">
                        <div className="flex items-center gap-2 text-blue-400 mb-2">
                          <Clock className="w-5 h-5" />
                          <span className="font-medium">Duration</span>
                        </div>
                        <p className="text-white">{selectedModule.duration}</p>
                      </div>
                      
                      <div className="p-4 bg-white/5 rounded-lg">
                        <div className="flex items-center gap-2 text-blue-400 mb-2">
                          <BookOpen className="w-5 h-5" />
                          <span className="font-medium">Lessons</span>
                        </div>
                        <p className="text-white">{selectedModule.lessons}</p>
                      </div>
                    </div>

                    {!selectedModule.locked && (
                      <div>
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-gray-400">Your Progress</span>
                          <span className="text-blue-400 font-medium">{selectedModule.progress}%</span>
                        </div>
                        <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${selectedModule.progress}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Action Button */}
                    <motion.button
                      className="w-full px-6 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl overflow-hidden shadow-lg shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={selectedModule.locked}
                      whileHover={!selectedModule.locked ? { scale: 1.05, y: -2 } : {}}
                      whileTap={!selectedModule.locked ? { scale: 0.98 } : {}}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                      
                      <span className="relative flex items-center justify-center gap-2">
                        {selectedModule.locked ? (
                          <>
                            <Lock className="w-5 h-5" />
                            Module Locked
                          </>
                        ) : selectedModule.completed ? (
                          <>
                            <CheckCircle className="w-5 h-5" />
                            Review Module
                          </>
                        ) : (
                          <>
                            <Play className="w-5 h-5" />
                            {translations.continue}
                          </>
                        )}
                      </span>
                    </motion.button>
                  </div>
                </div>
              </ProfessionalCard>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {translations.achievementsTitle}
            </h2>
            <p className="text-xl text-gray-300">{translations.achievementsSubtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {translations.achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProfessionalCard className={`p-6 text-center ${!achievement.unlocked ? 'opacity-50' : ''}`}>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                    achievement.unlocked 
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500' 
                      : 'bg-gray-600'
                  }`}>
                    {getAchievementIcon(achievement.icon)}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">{achievement.title}</h3>
                  <p className="text-sm text-gray-300">{achievement.description}</p>
                  
                  {achievement.unlocked && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', damping: 15, stiffness: 300 }}
                      className="mt-4"
                    >
                      <Star className="w-6 h-6 text-yellow-400 mx-auto" />
                    </motion.div>
                  )}
                </ProfessionalCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/age-selection">
            <motion.button
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
              {translations.back}
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}
