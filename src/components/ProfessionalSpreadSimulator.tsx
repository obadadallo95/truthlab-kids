'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Link } from '@/i18n/routing';
import { 
  Share2, 
  Users, 
  TrendingUp, 
  Globe, 
  Zap, 
  Play, 
  Pause, 
  RotateCcw, 
  Download,
  BarChart3,
  Activity,
  Network,
  Clock,
  Target,
  Brain,
  Shield
} from 'lucide-react';
import { ProfessionalCard, StatsCard, FeatureCard } from '@/components/ui/ProfessionalCards';

interface ProfessionalSpreadSimulatorProps {
  translations: {
    title: string;
    subtitle: string;
    start: string;
    pause: string;
    reset: string;
    download: string;
    back: string;
    eyebrow: string;
    simulationTitle: string;
    simulationSubtitle: string;
    selectScenario: string;
    networkVisualization: string;
    monitorDescription: string;
    realTime: string;
    networkEffect: string;
    viralContent: string;
    platformStats: string;
    engagement: string;
    reach: string;
    speed: string;
    influence: string;
    participants: string;
    shares: string;
    learningObjectives: string;
    learningSubtitle: string;
    criticalAnalysis: string;
    criticalAnalysisDesc: string;
    criticalAnalysisStats: string;
    digitalDefense: string;
    digitalDefenseDesc: string;
    digitalDefenseStats: string;
    strategicThinking: string;
    strategicThinkingDesc: string;
    strategicThinkingStats: string;
    scenarios: Array<{
      id: number;
      title: string;
      description: string;
      type: string;
      risk: string;
      participants: number;
      duration: string;
    }>;
  };
}

export function ProfessionalSpreadSimulator({ translations }: ProfessionalSpreadSimulatorProps) {
  const [isRunning, setIsRunning] = useState(false);
  const [currentScenario, setCurrentScenario] = useState(translations.scenarios[0]);
  const [simulationData, setSimulationData] = useState({
    participants: 100,
    shares: 0,
    reach: 100,
    speed: 0,
    influence: 0,
  });
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isRunning) {
      interval = setInterval(() => {
        setSimulationData(prev => ({
          participants: Math.min(prev.participants + Math.floor(Math.random() * 50), 10000),
          shares: prev.shares + Math.floor(Math.random() * 10),
          reach: Math.min(prev.reach + Math.floor(Math.random() * 100), 50000),
          speed: Math.random() * 100,
          influence: Math.min(prev.influence + Math.random() * 5, 100),
        }));
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleReset = () => {
    setIsRunning(false);
    setSimulationData({
      participants: 100,
      shares: 0,
      reach: 100,
      speed: 0,
      influence: 0,
    });
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const getRiskColor = (risk: string) => {
    switch(risk) {
      case 'high': return 'text-red-400 bg-red-500/10 border-red-500/20';
      case 'medium': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20';
      case 'low': return 'text-green-400 bg-green-500/10 border-green-500/20';
      default: return 'text-gray-400 bg-gray-500/10 border-gray-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(239,68,68,0.1),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.1),transparent_60%)]" />
          
          {/* Network Animation */}
          <motion.div
            className="absolute top-20 left-20 w-96 h-96"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            <div className="w-full h-full bg-gradient-to-r from-red-500/15 to-orange-500/15 rounded-full blur-3xl" />
          </motion.div>
          
          <motion.div
            className="absolute bottom-20 right-20 w-80 h-80"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          >
            <div className="w-full h-full bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-3xl" />
          </motion.div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-red-400 bg-red-500/10 backdrop-blur-sm rounded-full border border-red-500/20">
              <Share2 className="w-4 h-4" />
              <span>{translations.eyebrow}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-red-100 to-blue-100 bg-clip-text text-transparent mb-6">
              {translations.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {translations.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Simulation Controls */}
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
              {translations.simulationTitle}
            </h2>
            <p className="text-xl text-gray-300">{translations.simulationSubtitle}</p>
          </motion.div>

          {/* Control Panel */}
          <ProfessionalCard className="p-8 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Scenario Selection */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">{translations.selectScenario}</h3>
                <div className="space-y-3">
                  {translations.scenarios.map((scenario) => (
                    <motion.button
                      key={scenario.id}
                      className={`w-full p-4 rounded-lg border text-left transition-all duration-300 ${
                        currentScenario.id === scenario.id 
                          ? 'border-red-400/50 bg-red-500/10' 
                          : 'border-white/20 bg-white/5 hover:border-white/40'
                      }`}
                      onClick={() => setCurrentScenario(scenario)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <h4 className="text-white font-medium mb-1">{scenario.title}</h4>
                      <p className="text-gray-400 text-sm mb-2">{scenario.description}</p>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getRiskColor(scenario.risk)}`}>
                          {scenario.risk}
                        </span>
                        <span className="text-xs text-gray-500">{scenario.participants} participants</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Simulation Canvas */}
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{translations.networkVisualization}</h3>
                  <div className="flex items-center gap-2">
                    <motion.button
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        isRunning 
                          ? 'bg-red-600 text-white' 
                          : 'bg-green-600 text-white'
                      }`}
                      onClick={isRunning ? handlePause : handleStart}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isRunning ? (
                        <>
                          <Pause className="w-4 h-4 mr-2" />
                          {translations.pause}
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 mr-2" />
                          {translations.start}
                        </>
                      )}
                    </motion.button>
                    
                    <motion.button
                      className="px-4 py-2 bg-gray-600 text-white rounded-lg font-medium"
                      onClick={handleReset}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <RotateCcw className="w-4 h-4 mr-2" />
                      {translations.reset}
                    </motion.button>
                  </div>
                </div>

                {/* 3D Network Visualization */}
                <div 
                  ref={canvasRef}
                  className="aspect-video bg-gradient-to-br from-red-600/10 to-blue-600/10 rounded-2xl backdrop-blur-md border border-red-500/30 flex items-center justify-center relative overflow-hidden"
                >
                  {/* Central Node */}
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl shadow-red-500/50"
                    animate={{ scale: isRunning ? [1, 1.2, 1] : 1 }}
                    transition={{ duration: 2, repeat: isRunning ? Infinity : 0 }}
                  >
                    <Share2 className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  {/* Orbiting Nodes */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg"
                      animate={{
                        rotate: 360,
                        x: [0, Math.cos(i * Math.PI / 4) * 150],
                        y: [0, Math.sin(i * Math.PI / 4) * 150],
                      }}
                      transition={{
                        duration: 10 + i * 2,
                        repeat: isRunning ? Infinity : 0,
                        ease: 'linear',
                      }}
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      <Users className="w-4 h-4 text-white" />
                    </motion.div>
                  ))}
                  
                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full">
                    {[...Array(8)].map((_, i) => (
                      <motion.line
                        key={i}
                        x1="50%"
                        y1="50%"
                        x2={`${50 + Math.cos(i * Math.PI / 4) * 30}%`}
                        y2={`${50 + Math.sin(i * Math.PI / 4) * 30}%`}
                        stroke="url(#gradient)"
                        strokeWidth="2"
                        strokeOpacity={isRunning ? 0.6 : 0.2}
                        animate={{ opacity: isRunning ? [0.2, 0.8, 0.2] : 0.2 }}
                        transition={{ duration: 2, repeat: isRunning ? Infinity : 0 }}
                      />
                    ))}
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ef4444" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </ProfessionalCard>

          {/* Real-time Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <StatsCard 
              value={simulationData.participants.toLocaleString()} 
              label={translations.participants} 
              trend="up" 
              icon={<Users className="w-6 h-6" />}
            />
            <StatsCard 
              value={simulationData.shares.toLocaleString()} 
              label={translations.shares} 
              trend="up" 
              icon={<Share2 className="w-6 h-6" />}
            />
            <StatsCard 
              value={simulationData.reach.toLocaleString()} 
              label={translations.reach} 
              trend="up" 
              icon={<Globe className="w-6 h-6" />}
            />
            <StatsCard 
              value={`${Math.round(simulationData.speed)}/s`} 
              label={translations.speed} 
              trend="up" 
              icon={<Zap className="w-6 h-6" />}
            />
          </div>

          {/* Analytics Dashboard */}
          <ProfessionalCard className="p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <motion.h3
                  className="text-3xl font-bold text-white mb-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  {translations.platformStats}
                </motion.h3>
                
                <motion.p
                  className="text-gray-300 mb-8 leading-relaxed"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {translations.monitorDescription}
                </motion.p>
                
                <div className="space-y-4">
                  <motion.div
                    className="flex items-center justify-between p-4 bg-white/5 rounded-lg"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center">
                        <Activity className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{translations.engagement}</h4>
                        <p className="text-gray-400 text-sm">User interaction rate</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-400">{Math.round(simulationData.influence)}%</div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="flex items-center justify-between p-4 bg-white/5 rounded-lg"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                        <Network className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{translations.networkEffect}</h4>
                        <p className="text-gray-400 text-sm">Network amplification</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-400">{Math.round(simulationData.speed * 2.3)}x</div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="flex items-center justify-between p-4 bg-white/5 rounded-lg"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center">
                        <Target className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{translations.viralContent}</h4>
                        <p className="text-gray-400 text-sm">Viral coefficient</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-400">{(simulationData.speed / 20).toFixed(1)}</div>
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
                <div className="aspect-square bg-gradient-to-br from-red-600/10 to-blue-600/10 rounded-3xl backdrop-blur-md border border-red-500/30 flex items-center justify-center relative overflow-hidden">
                  {/* Central Analytics Element */}
                  <motion.div
                    className="w-32 h-32 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-red-500/50"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  >
                    <BarChart3 className="w-16 h-16 text-white" />
                  </motion.div>
                  
                  {/* Orbiting Analytics Elements */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  >
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Activity className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="absolute inset-0"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                  >
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Network className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="absolute inset-0"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                  >
                    <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </ProfessionalCard>
        </div>
      </section>

      {/* Educational Features */}
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
              {translations.learningObjectives}
            </h2>
            <p className="text-xl text-gray-300">{translations.learningSubtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Brain className="w-8 h-8" />}
              title={translations.criticalAnalysis}
              description={translations.criticalAnalysisDesc}
              stats={translations.criticalAnalysisStats}
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title={translations.digitalDefense}
              description={translations.digitalDefenseDesc}
              stats={translations.digitalDefenseStats}
            />
            <FeatureCard
              icon={<Target className="w-8 h-8" />}
              title={translations.strategicThinking}
              description={translations.strategicThinkingDesc}
              stats={translations.strategicThinkingStats}
            />
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/path">
            <motion.button
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Target className="w-5 h-5 rotate-180" />
              {translations.back}
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}
