import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import TruthLabLogo from '@/components/brand/TruthLabLogo';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default async function NotFound({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'NotFound' });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(125,211,252,0.1),transparent_70%)]" />
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(125, 211, 252, 0.3), transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(125, 211, 252, 0.3), transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(125, 211, 252, 0.3), transparent 50%)',
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <TruthLabLogo className="w-24 h-24 mx-auto text-[#7dd3fc]" />
          </motion.div>

          {/* 404 Number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6"
          >
            <div className="relative">
              <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-[#7dd3fc] via-white to-[#7dd3fc] bg-clip-text text-transparent">
                404
              </h1>
              <motion.div
                className="absolute inset-0 text-9xl md:text-[12rem] font-bold text-[#7dd3fc]/20 blur-xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                404
              </motion.div>
            </div>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              {t('title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {t('description')}
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#7dd3fc] to-[#0ea5e9] text-white font-semibold rounded-lg hover:from-[#0ea5e9] hover:to-[#7dd3fc] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[0_0_30px_rgba(125,211,252,0.5)]"
            >
              <Home className="w-5 h-5" />
              {t('goHome')}
            </Link>

            <Link
              href="/age-selection"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <Search className="w-5 h-5" />
              {t('exploreContent')}
            </Link>
          </motion.div>

          {/* Additional Help */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 mb-4">
              {t('needHelp')}
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <Link
                href="/path"
                className="px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                {t('learningPath')}
              </Link>
              <Link
                href="/truth-lab"
                className="px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                {t('truthLab')}
              </Link>
              <Link
                href="/spread-simulator"
                className="px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                {t('spreadSimulator')}
              </Link>
            </div>
          </motion.div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
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

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#7dd3fc] rounded-full opacity-30"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeInOut',
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
