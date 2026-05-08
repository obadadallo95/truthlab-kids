'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { 
  Users, 
  BookOpen, 
  Target, 
  TrendingUp, 
  Award, 
  Download, 
  Play, 
  ArrowRight, 
  Clock, 
  CheckCircle,
  BarChart3,
  Calendar,
  FileText,
  Settings
} from 'lucide-react';
import { ProfessionalCard, StatsCard, FeatureCard } from '@/components/ui/ProfessionalCards';

interface ProfessionalFacilitatorProps {
  translations: {
    title: string;
    description: string;
    backHome: string;
    eyebrow: string;
    exportReport: string;
    activeStudents: string;
    averageProgress: string;
    needsReview: string;
    onTrack: string;
    aiBias: string;
    flagged: string;
    moduleStatus: string;
    searchStudents: string;
    allModules: string;
    imageAnalysis: string;
    sourceInvestigation: string;
    studentName: string;
    currentModule: string;
    progress: string;
    status: string;
    actions: string;
    review: string;
    rows: Array<{
      name: string;
      module: string;
      progress: number;
      status: string;
    }>;
    teachingResources: {
      title: string;
      subtitle: string;
      lessonPlans: {
        title: string;
        description: string;
        stats: string;
      };
      assessmentTools: {
        title: string;
        description: string;
        stats: string;
      };
      customizationOptions: {
        title: string;
        description: string;
        stats: string;
      };
    };
    enterpriseFeatures: {
      title: string;
      description: string;
      multiClassManagement: {
        title: string;
        description: string;
      };
      advancedAnalytics: {
        title: string;
        description: string;
      };
      certificationSupport: {
        title: string;
        description: string;
      };
    };
  };
}

export function ProfessionalFacilitator({ translations }: ProfessionalFacilitatorProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1),transparent_50%)]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-blue-400 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-500/20">
              <BookOpen className="w-4 h-4" />
              <span>{translations.eyebrow}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              {translations.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {translations.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Stats */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <StatsCard 
              value="3" 
              label={translations.activeStudents} 
              trend="up" 
              icon={<Users className="w-6 h-6" />}
            />
            <StatsCard 
              value="60 min" 
              label={translations.averageProgress} 
              trend="up" 
              icon={<Clock className="w-6 h-6" />}
            />
            <StatsCard 
              value="AI Bias" 
              label={translations.needsReview} 
              trend="neutral" 
              icon={<Target className="w-6 h-6" />}
            />
            <StatsCard 
              value="6-9 / 10-13 / 14-17" 
              label={translations.onTrack} 
              trend="up" 
              icon={<TrendingUp className="w-6 h-6" />}
            />
          </div>

          {/* Workshop Flow */}
          <ProfessionalCard className="p-12 mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">{translations.moduleStatus}</h2>
              <motion.button
                className="flex items-center gap-2 px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl overflow-hidden shadow-lg shadow-blue-500/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-5 h-5" />
                {translations.exportReport}
              </motion.button>
            </div>

            <div className="space-y-6">
              {translations.rows.map((row, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProfessionalCard className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">{row.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4" />
                            {row.module}
                          </span>
                          <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {row.progress} min
                          </span>
                          <span className="flex items-center gap-2">
                            <Target className="w-4 h-4" />
                            {row.status}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="w-32">
                          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${row.progress}%` }}
                              transition={{ duration: 1, delay: 0.5 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                        
                        <motion.button
                          className="px-4 py-2 text-sm font-medium text-blue-400 bg-blue-500/10 rounded-lg border border-blue-500/20"
                          whileHover={{ scale: 1.05, backgroundColor: 'rgba(59,130,246,0.2)' }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {translations.review}
                        </motion.button>
                      </div>
                    </div>
                  </ProfessionalCard>
                </motion.div>
              ))}
            </div>
          </ProfessionalCard>
        </div>
      </section>

      {/* Resources Section */}
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
              {translations.teachingResources.title}
            </h2>
            <p className="text-xl text-gray-300">{translations.teachingResources.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<FileText className="w-8 h-8" />}
              title={translations.teachingResources.lessonPlans.title}
              description={translations.teachingResources.lessonPlans.description}
              stats={translations.teachingResources.lessonPlans.stats}
            />
            <FeatureCard
              icon={<BarChart3 className="w-8 h-8" />}
              title={translations.teachingResources.assessmentTools.title}
              description={translations.teachingResources.assessmentTools.description}
              stats={translations.teachingResources.assessmentTools.stats}
            />
            <FeatureCard
              icon={<Settings className="w-8 h-8" />}
              title={translations.teachingResources.customizationOptions.title}
              description={translations.teachingResources.customizationOptions.description}
              stats={translations.teachingResources.customizationOptions.stats}
            />
          </div>
        </div>
      </section>

      {/* Professional Features */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <ProfessionalCard className="p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h3
                  className="text-4xl font-bold text-white mb-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  {translations.enterpriseFeatures.title}
                </motion.h3>
                
                <motion.p
                  className="text-gray-300 mb-8 leading-relaxed text-lg"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {translations.enterpriseFeatures.description}
                </motion.p>
                
                <div className="space-y-4">
                  <motion.div
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{translations.enterpriseFeatures.multiClassManagement.title}</h4>
                      <p className="text-gray-400 text-sm">{translations.enterpriseFeatures.multiClassManagement.description}</p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{translations.enterpriseFeatures.advancedAnalytics.title}</h4>
                      <p className="text-gray-400 text-sm">{translations.enterpriseFeatures.advancedAnalytics.description}</p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{translations.enterpriseFeatures.certificationSupport.title}</h4>
                      <p className="text-gray-400 text-sm">{translations.enterpriseFeatures.certificationSupport.description}</p>
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
                  {/* Central Dashboard Element */}
                  <motion.div
                    className="w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/50"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  >
                    <BarChart3 className="w-16 h-16 text-white" />
                  </motion.div>
                  
                  {/* Orbiting Elements */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  >
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="absolute inset-0"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                  >
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </ProfessionalCard>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/">
            <motion.button
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
              {translations.backHome}
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}
