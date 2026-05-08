'use client';

import { motion } from 'framer-motion';
import { Shield, Network, Brain, Sparkles, TrendingUp, Users } from 'lucide-react';
import { ModernHero } from '@/components/ui/ModernHero';
import { GlassmorphismCard, FeatureCard, StatsCard } from '@/components/ui/GlassmorphismCard';
import { NeumorphicButton, FloatingActionButton } from '@/components/ui/NeumorphicButton';

interface ModernHomePageProps {
  translations: {
    heroHeadline: string;
    heroBody: string;
    startLearning: string;
    facilitatorInfo: string;
  };
}

export function ModernHomePage({ translations }: ModernHomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Modern Hero Section */}
      <ModernHero
        title={translations.heroHeadline}
        subtitle={translations.heroBody}
        primaryAction={{ text: translations.startLearning, href: '/age-selection' }}
        secondaryAction={{ text: translations.facilitatorInfo, href: '/facilitator' }}
      />

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatsCard value="10K+" label="Students Engaged" trend="up" />
            <StatsCard value="95%" label="Accuracy Rate" trend="up" />
            <StatsCard value="50+" label="Interactive Lessons" trend="up" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Transform Learning with AI
              </span>
            </motion.h2>
            <motion.p
              className="text-xl text-white/70 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Experience the future of media literacy education with cutting-edge technology and interactive learning.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="Safe Environment"
              description="Learn in a protected space designed specifically for young minds to explore digital literacy."
            />
            <FeatureCard
              icon={<Brain className="w-8 h-8" />}
              title="AI-Powered Learning"
              description="Advanced artificial intelligence helps identify misinformation and teaches critical thinking skills."
            />
            <FeatureCard
              icon={<Network className="w-8 h-8" />}
              title="Real-World Scenarios"
              description="Practice with authentic examples from social media and news sources to build practical skills."
            />
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <GlassmorphismCard className="p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h3
                  className="text-3xl font-bold text-white mb-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Try Our Evidence Room
                </motion.h3>
                <motion.p
                  className="text-white/70 mb-8 leading-relaxed"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Experience our interactive verification system where students can analyze real-world examples and learn to distinguish between fact and fiction.
                </motion.p>
                <div className="flex gap-4">
                  <NeumorphicButton variant="primary" icon={<Sparkles className="w-5 h-5" />}>
                    Start Demo
                  </NeumorphicButton>
                  <NeumorphicButton variant="secondary">
                    Learn More
                  </NeumorphicButton>
                </div>
              </div>
              
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="aspect-square bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-3xl backdrop-blur-md border border-white/20 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="w-24 h-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center"
                  >
                    <Brain className="w-12 h-12 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </GlassmorphismCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <GlassmorphismCard className="p-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Learning?
              </h3>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Join thousands of students who are already learning to navigate the digital world with confidence and critical thinking skills.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <NeumorphicButton variant="primary" size="lg" icon={<TrendingUp className="w-5 h-5" />}>
                  Get Started Free
                </NeumorphicButton>
                <NeumorphicButton variant="secondary" size="lg" icon={<Users className="w-5 h-5" />}>
                  Contact Us
                </NeumorphicButton>
              </div>
            </motion.div>
          </GlassmorphismCard>
        </div>
      </section>

      {/* Floating Action Button */}
      <FloatingActionButton>
        <Sparkles className="w-6 h-6" />
      </FloatingActionButton>
    </div>
  );
}
