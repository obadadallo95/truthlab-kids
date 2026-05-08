'use client';

import { motion } from 'framer-motion';
import { Sparkles, Wand2, Crown, Star, Heart, Shield, Zap, Compass, BookOpen, FlaskConical, Users } from 'lucide-react';
import { MagicalCastle } from '@/components/ui/MagicalCastle';
import { MagicalNavigation, MagicalPortal } from '@/components/ui/MagicalNavigation';
import { MagicalCard, CrystalButton, EnchantedCard, WizardStatsCard } from '@/components/ui/MagicalCards';

interface MagicalHomePageProps {
  translations: {
    heroHeadline: string;
    heroBody: string;
    startLearning: string;
    facilitatorInfo: string;
  };
}

export function MagicalHomePage({ translations }: MagicalHomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900">
      {/* Magical Navigation */}
      <MagicalNavigation />

      {/* Magical Castle Hero */}
      <MagicalCastle
        title={translations.heroHeadline}
        subtitle={translations.heroBody}
        primaryAction={{ text: translations.startLearning, href: '/age-selection' }}
        secondaryAction={{ text: translations.facilitatorInfo, href: '/facilitator' }}
      />

      {/* Wizard Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent mb-4">
              إحصائيات السحرة
            </h2>
            <p className="text-xl text-white/70">قوى سحرية مذهلة من مملكة الحقيقة</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <WizardStatsCard value="10K+" label="المغامرون الصغار" power={5} />
            <WizardStatsCard value="95%" label="قوة التحقق" power={4} />
            <WizardStatsCard value="50+" label="التعاويذ السحرية" power={5} />
          </div>
        </div>
      </section>

      {/* Magical Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent mb-4">
              قوى سحرية خارقة
            </h2>
            <p className="text-xl text-white/70">اكتشف السحر وراء كل درس</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <EnchantedCard
              icon={<Shield className="w-10 h-10" />}
              title="الدرع الواقي"
              description="درس سحري يحمي الأطفال من المعلومات المضللة بقوة الحقيقة."
              magicalPower="🛡️"
            />
            <EnchantedCard
              icon={<Wand2 className="w-10 h-10" />}
              title="العصا السحرية"
              description="أداة ذكاء اصطناعي سحرية تكشف الحقائق الخفية."
              magicalPower="🪄"
            />
            <EnchantedCard
              icon={<Compass className="w-10 h-10" />}
              title="البوصلة السحرية"
              description="ترشدك في عالم المعلومات المعقد نحو الحقيقة."
              magicalPower="🧭"
            />
          </div>
        </div>
      </section>

      {/* Crystal Cave Demo Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <MagicalCard className="p-16" magical={true} glow={true} float={true}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h3
                  className="text-4xl font-bold bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent mb-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  كهف البلور السحري
                </motion.h3>
                <motion.p
                  className="text-white/80 mb-8 leading-relaxed text-lg"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  ادخل إلى كهف البلور السحري حيث تتحقق من الحقائق بنفسك. كل تحقيق هو مغامرة سحرية تكتشف فيها الحقيقة المخفية.
                </motion.p>
                <div className="flex gap-4">
                  <CrystalButton variant="amethyst" size="lg" icon={<Sparkles className="w-5 h-5" />}>
                    ابدأ المغامرة
                  </CrystalButton>
                  <CrystalButton variant="sapphire" size="lg" icon={<BookOpen className="w-5 h-5" />}>
                    تعلم السحر
                  </CrystalButton>
                </div>
              </div>
              
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4, type: 'spring' }}
                viewport={{ once: true }}
              >
                <div className="aspect-square bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-3xl backdrop-blur-md border-2 border-purple-400/50 flex items-center justify-center relative overflow-hidden">
                  {/* Crystal Ball */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/50 relative"
                  >
                    <div className="absolute inset-2 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full" />
                    <FlaskConical className="w-16 h-16 text-white relative z-10" />
                  </motion.div>
                  
                  {/* Floating Particles */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full"
                      animate={{
                        x: [0, Math.random() * 100 - 50],
                        y: [0, Math.random() * 100 - 50],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: 'easeInOut',
                      }}
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </MagicalCard>
        </div>
      </section>

      {/* Portal to Other Realms */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <MagicalCard className="p-16" magical={true} glow={true} float={false}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent mb-6">
                بوابة إلى العوالم السحرية
              </h3>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                انضم إلى آلاف المغامرين الصغار الذين يتعلمون التنقل في العالم الرقمي بقوة السحر والحكمة.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <MagicalPortal to="/age-selection">
                  <span className="flex items-center gap-2">
                    <Crown className="w-5 h-5" />
                    ابدأ رحلتك السحرية
                  </span>
                </MagicalPortal>
                <MagicalPortal to="/truth-lab">
                  <span className="flex items-center gap-2">
                    <FlaskConical className="w-5 h-5" />
                    ادخل معهد السحرة
                  </span>
                </MagicalPortal>
              </div>
            </motion.div>
          </MagicalCard>
        </div>
      </section>

      {/* Floating Magical Elements */}
      <div className="fixed top-20 left-10 z-30">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg shadow-yellow-400/50"
        >
          <Star className="w-8 h-8 text-white" />
        </motion.div>
      </div>

      <div className="fixed bottom-20 right-10 z-30">
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
          className="w-14 h-14 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg shadow-purple-400/50"
        >
          <Sparkles className="w-7 h-7 text-white" />
        </motion.div>
      </div>
    </div>
  );
}
