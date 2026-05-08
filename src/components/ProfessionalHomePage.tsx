'use client';

import { motion } from 'framer-motion';
import { Shield, Brain, Network, Users, Target, TrendingUp, BarChart3, Award, Globe } from 'lucide-react';
import { ProfessionalHero } from '@/components/ui/ProfessionalHero';
import { ProfessionalCard, FeatureCard, StatsCard, CTASection } from '@/components/ui/ProfessionalCards';
import { SplitText } from '@/components/ui/SplitText';
import { GlowText } from '@/components/ui/GlowText';
import { FloatingCard } from '@/components/ui/FloatingCard';
import { ParticleBackground } from '@/components/ui/ParticleBackground';

interface ProfessionalHomePageProps {
  translations: {
    heroHeadline: string;
    heroBody: string;
    startLearning: string;
    facilitatorInfo: string;
    platformImpactTitle: string;
    platformImpactSubtitle: string;
    featuresTitle: string;
    featuresSubtitle: string;
    stats: {
      studentsEngaged: string;
      studentsEngagedLabel: string;
      accuracyImprovement: string;
      accuracyImprovementLabel: string;
      interactiveModules: string;
      interactiveModulesLabel: string;
      partnerSchools: string;
      partnerSchoolsLabel: string;
    };
    features: {
      aiDetection: string;
      aiDetectionDesc: string;
      aiDetectionStats: string;
      cognitiveTraining: string;
      cognitiveTrainingDesc: string;
      cognitiveTrainingStats: string;
      socialImpact: string;
      socialImpactDesc: string;
      socialImpactStats: string;
    };
    technology: {
      title: string;
      description: string;
      machineLearning: {
        title: string;
        description: string;
      };
      analytics: {
        title: string;
        description: string;
      };
      security: {
        title: string;
        description: string;
      };
    };
    trust: {
      title: string;
      subtitle: string;
      award: {
        title: string;
        description: string;
      };
      growth: {
        title: string;
        description: string;
      };
      students: {
        title: string;
        description: string;
      };
    };
    cta: {
      title: string;
      description: string;
      startTrial: string;
      scheduleDemo: string;
    };
  };
}

export function ProfessionalHomePage({ translations }: ProfessionalHomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <ParticleBackground particleCount={30} color="#3B82F6" size={3} speed={15} />
      {/* Professional Hero Section */}
      <ProfessionalHero
        title={translations.heroHeadline}
        subtitle={translations.heroBody}
        primaryAction={{ text: translations.startLearning, href: '/age-selection' }}
        secondaryAction={{ text: translations.facilitatorInfo, href: '/facilitator' }}
      />

      {/* Key Metrics Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <GlowText 
              text={translations.platformImpactTitle}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              glowColor="#3B82F6"
              intensity={1.5}
              pulse={true}
            />
            <SplitText 
              text={translations.platformImpactSubtitle}
              className="text-xl text-gray-300"
              animationType="slide"
              stagger={0.05}
              duration={0.6}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <FloatingCard intensity={8} speed={4} rotationIntensity={3}>
              <StatsCard 
                value={translations.stats.studentsEngaged} 
                label={translations.stats.studentsEngagedLabel} 
                trend="up" 
                icon={<Users className="w-6 h-6" />}
              />
            </FloatingCard>
            <FloatingCard intensity={8} speed={4.5} rotationIntensity={3}>
              <StatsCard 
                value={translations.stats.accuracyImprovement} 
                label={translations.stats.accuracyImprovementLabel} 
                trend="up" 
                icon={<Target className="w-6 h-6" />}
              />
            </FloatingCard>
            <FloatingCard intensity={8} speed={5} rotationIntensity={3}>
              <StatsCard 
                value={translations.stats.interactiveModules} 
                label={translations.stats.interactiveModulesLabel} 
                trend="up" 
                icon={<Brain className="w-6 h-6" />}
              />
            </FloatingCard>
            <FloatingCard intensity={8} speed={5.5} rotationIntensity={3}>
              <StatsCard 
                value={translations.stats.partnerSchools} 
                label={translations.stats.partnerSchoolsLabel} 
                trend="up" 
                icon={<Globe className="w-6 h-6" />}
              />
            </FloatingCard>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <GlowText 
              text={translations.featuresTitle}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              glowColor="#10B981"
              intensity={1.2}
              pulse={true}
            />
            <SplitText 
              text={translations.featuresSubtitle}
              className="text-xl text-gray-300"
              animationType="scale"
              stagger={0.04}
              duration={0.5}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FloatingCard intensity={6} speed={3} rotationIntensity={2}>
              <FeatureCard
                icon={<Shield className="w-8 h-8" />}
                title={translations.features.aiDetection}
                description={translations.features.aiDetectionDesc}
                stats={translations.features.aiDetectionStats}
              />
            </FloatingCard>
            <FloatingCard intensity={6} speed={3.5} rotationIntensity={2}>
              <FeatureCard
                icon={<Brain className="w-8 h-8" />}
                title={translations.features.cognitiveTraining}
                description={translations.features.cognitiveTrainingDesc}
                stats={translations.features.cognitiveTrainingStats}
              />
            </FloatingCard>
            <FloatingCard intensity={6} speed={4} rotationIntensity={2}>
              <FeatureCard
                icon={<Network className="w-8 h-8" />}
                title={translations.features.socialImpact}
                description={translations.features.socialImpactDesc}
                stats={translations.features.socialImpactStats}
              />
            </FloatingCard>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <ProfessionalCard className="p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <GlowText 
                  text={translations.technology.title}
                  className="text-4xl font-bold text-white mb-6"
                  glowColor="#8B5CF6"
                  intensity={1.2}
                  pulse={true}
                />
                <SplitText 
                  text={translations.technology.description}
                  className="text-gray-300 mb-8 leading-relaxed text-lg"
                  animationType="fade"
                  stagger={0.02}
                  duration={0.4}
                />
                
                <div className="space-y-4">
                  <motion.div
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                      <Brain className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{translations.technology.machineLearning.title}</h4>
                      <p className="text-gray-400 text-sm">{translations.technology.machineLearning.description}</p>
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
                      <h4 className="text-white font-semibold">{translations.technology.analytics.title}</h4>
                      <p className="text-gray-400 text-sm">{translations.technology.analytics.description}</p>
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
                      <Shield className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{translations.technology.security.title}</h4>
                      <p className="text-gray-400 text-sm">{translations.technology.security.description}</p>
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
                <div className="aspect-square bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-3xl backdrop-blur-md border border-blue-500/30 flex items-center justify-center relative overflow-hidden">
                  {/* Central Tech Element */}
                  <motion.div
                    className="w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/50"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  >
                    <Brain className="w-16 h-16 text-white" />
                  </motion.div>
                  
                  {/* Orbiting Tech Elements */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  >
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                        <BarChart3 className="w-6 h-6 text-white" />
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
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="absolute inset-0"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                  >
                    <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Network className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </ProfessionalCard>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <GlowText 
              text={translations.trust.title}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              glowColor="#F59E0B"
              intensity={1.2}
              pulse={true}
            />
            <SplitText 
              text={translations.trust.subtitle}
              className="text-xl text-gray-300"
              animationType="scale"
              stagger={0.04}
              duration={0.5}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FloatingCard intensity={6} speed={3} rotationIntensity={2}>
              <ProfessionalCard>
                <div className="text-center">
                  <Award className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{translations.trust.award.title}</h3>
                  <p className="text-gray-300">{translations.trust.award.description}</p>
                </div>
              </ProfessionalCard>
            </FloatingCard>
            
            <FloatingCard intensity={6} speed={3.5} rotationIntensity={2}>
              <ProfessionalCard>
                <div className="text-center">
                  <TrendingUp className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{translations.trust.growth.title}</h3>
                  <p className="text-gray-300">{translations.trust.growth.description}</p>
                </div>
              </ProfessionalCard>
            </FloatingCard>
            
            <FloatingCard intensity={6} speed={4} rotationIntensity={2}>
              <ProfessionalCard>
                <div className="text-center">
                  <Users className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{translations.trust.students.title}</h3>
                  <p className="text-gray-300">{translations.trust.students.description}</p>
                </div>
              </ProfessionalCard>
            </FloatingCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <CTASection
            title={translations.cta.title}
            subtitle={translations.cta.description}
            primaryAction={{ text: translations.cta.startTrial, href: "/age-selection" }}
            secondaryAction={{ text: translations.cta.scheduleDemo, href: "/facilitator" }}
          />
        </div>
      </section>
    </div>
  );
}
