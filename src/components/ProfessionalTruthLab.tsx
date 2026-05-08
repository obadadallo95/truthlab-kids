'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Link } from '@/i18n/routing';
import { 
  FlaskConical, 
  Search, 
  Filter, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  Eye, 
  Download,
  Share2,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Brain,
  Shield,
  Network,
  Target
} from 'lucide-react';
import { ProfessionalCard, StatsCard, FeatureCard } from '@/components/ui/ProfessionalCards';

interface ProfessionalTruthLabProps {
  translations: {
    title: string;
    subtitle: string;
    case1: string;
    case1Desc: string;
    analyze: string;
    fake: string;
    real: string;
    resultFake: string;
    resultReal: string;
    back: string;
    eyebrow: string;
    caseProgress: string;
    evidencePreview: string;
    correct: string;
    notQuite: string;
    nextScenario: string;
    noScenarios: string;
    toolTitle: string;
    toolSubtitle: string;
    imageAnalysis: string;
    imageAnalysisDesc: string;
    imageAnalysisStats: string;
    sourceInvestigation: string;
    sourceInvestigationDesc: string;
    sourceInvestigationStats: string;
    metadata: string;
    metadataDesc: string;
    metadataStats: string;
    claimsTitle: string;
    claimsSubtitle: string;
    filterTitle: string;
    allClaims: string;
    images: string;
    videos: string;
    publicLife: string;
    updatedNow: string;
    claims: Array<{
      title: string;
      body: string;
      status: string;
      type: string;
      risk: string;
      action: string;
      featured?: boolean;
    }>;
  };
}

export function ProfessionalTruthLab({ translations }: ProfessionalTruthLabProps) {
  const [selectedClaim, setSelectedClaim] = useState(translations.claims[0]);
  const [filter, setFilter] = useState('all');
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const canvasRef = useRef<HTMLDivElement>(null);

  const filteredClaims = translations.claims.filter(claim => 
    filter === 'all' || 
    (filter === 'images' && claim.type.includes('صورة')) ||
    (filter === 'videos' && claim.type.includes('فيديو')) ||
    (filter === 'publicLife' && claim.type.includes('حياة'))
  );

  const getRiskColor = (risk: string) => {
    switch(risk) {
      case 'high': return 'text-red-400 bg-red-500/10 border-red-500/20';
      case 'medium': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20';
      case 'low': return 'text-green-400 bg-green-500/10 border-green-500/20';
      default: return 'text-gray-400 bg-gray-500/10 border-gray-500/20';
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'خطر مرتفع': return 'text-red-400';
      case 'يحتاج سياقًا': return 'text-yellow-400';
      case 'محسوم': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
          
          {/* Floating DNA-like Structure */}
          <motion.div
            className="absolute top-20 left-20 w-64 h-64"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            <div className="w-full h-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl" />
          </motion.div>
          
          <motion.div
            className="absolute bottom-20 right-20 w-96 h-96"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          >
            <div className="w-full h-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
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
              <FlaskConical className="w-4 h-4" />
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

      {/* Analysis Tools */}
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
              {translations.toolTitle}
            </h2>
            <p className="text-xl text-gray-300">{translations.toolSubtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <FeatureCard
              icon={<Eye className="w-8 h-8" />}
              title={translations.imageAnalysis}
              description={translations.imageAnalysisDesc}
              stats={translations.imageAnalysisStats}
            />
            <FeatureCard
              icon={<Search className="w-8 h-8" />}
              title={translations.sourceInvestigation}
              description={translations.sourceInvestigationDesc}
              stats={translations.sourceInvestigationStats}
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title={translations.metadata}
              description={translations.metadataDesc}
              stats={translations.metadataStats}
            />
          </div>
        </div>
      </section>

      {/* Claims Library */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <ProfessionalCard className="p-12">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Claims List */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-3xl font-bold text-white">{translations.claimsTitle}</h3>
                  <div className="flex items-center gap-4">
                    <select 
                      className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
                      value={filter}
                      onChange={(e) => setFilter(e.target.value)}
                    >
                      <option value="all">{translations.allClaims}</option>
                      <option value="images">{translations.images}</option>
                      <option value="videos">{translations.videos}</option>
                      <option value="publicLife">{translations.publicLife}</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {filteredClaims.map((claim, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <ProfessionalCard 
                        className={`p-6 cursor-pointer transition-all duration-300 ${
                          selectedClaim === claim ? 'border-blue-400/50' : ''
                        }`}
                        onClick={() => setSelectedClaim(claim)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="text-xl font-semibold text-white mb-2">{claim.title}</h4>
                            <p className="text-gray-300 text-sm mb-4">{claim.body}</p>
                            
                            <div className="flex items-center gap-4">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getRiskColor(claim.risk)}`}>
                                {claim.risk}
                              </span>
                              <span className={`text-sm font-medium ${getStatusColor(claim.status)}`}>
                                {claim.status}
                              </span>
                              <span className="text-sm text-gray-400">{claim.type}</span>
                            </div>
                          </div>
                          
                          <div className="ml-4">
                            <CheckCircle className="w-6 h-6 text-green-400" />
                          </div>
                        </div>
                      </ProfessionalCard>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Analysis View */}
              <div className="flex-1">
                <ProfessionalCard className="h-full">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-8">
                      <h4 className="text-2xl font-bold text-white">Analysis Workspace</h4>
                      <div className="flex items-center gap-2">
                        <motion.button
                          className="p-2 bg-white/10 rounded-lg"
                          whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setZoom(Math.min(zoom + 0.1, 2))}
                        >
                          <ZoomIn className="w-4 h-4 text-white" />
                        </motion.button>
                        <motion.button
                          className="p-2 bg-white/10 rounded-lg"
                          whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setZoom(Math.max(zoom - 0.1, 0.5))}
                        >
                          <ZoomOut className="w-4 h-4 text-white" />
                        </motion.button>
                        <motion.button
                          className="p-2 bg-white/10 rounded-lg"
                          whileHover={{ scale: 1.1, rotate: 180, backgroundColor: 'rgba(255,255,255,0.2)' }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setRotation(rotation + 90)}
                        >
                          <RotateCw className="w-4 h-4 text-white" />
                        </motion.button>
                      </div>
                    </div>

                    {/* 3D Analysis Canvas */}
                    <div 
                      ref={canvasRef}
                      className="relative aspect-square bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl backdrop-blur-md border border-blue-500/30 flex items-center justify-center overflow-hidden mb-8"
                      style={{
                        transform: `scale(${zoom}) rotate(${rotation}deg)`,
                        transition: 'transform 0.3s ease'
                      }}
                    >
                      {/* Central Analysis Element */}
                      <motion.div
                        className="w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/50"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      >
                        <Brain className="w-16 h-16 text-white" />
                      </motion.div>
                      
                      {/* Orbiting Analysis Tools */}
                      <motion.div
                        className="absolute inset-0"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                      >
                        <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                            <Eye className="w-6 h-6 text-white" />
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
                            <Search className="w-6 h-6 text-white" />
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
                            <Shield className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Analysis Results */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                        <span className="text-white font-medium">AI Confidence</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                              initial={{ width: 0 }}
                              whileInView={{ width: '85%' }}
                              transition={{ duration: 1, delay: 0.5 }}
                              viewport={{ once: true }}
                            />
                          </div>
                          <span className="text-green-400 font-bold">85%</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                        <span className="text-white font-medium">Source Verification</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                              initial={{ width: 0 }}
                              whileInView={{ width: '92%' }}
                              transition={{ duration: 1, delay: 0.6 }}
                              viewport={{ once: true }}
                            />
                          </div>
                          <span className="text-blue-400 font-bold">92%</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                        <span className="text-white font-medium">Metadata Analysis</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                              initial={{ width: 0 }}
                              whileInView={{ width: '78%' }}
                              transition={{ duration: 1, delay: 0.7 }}
                              viewport={{ once: true }}
                            />
                          </div>
                          <span className="text-purple-400 font-bold">78%</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-8">
                      <motion.button
                        className="flex-1 px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl overflow-hidden shadow-lg shadow-blue-500/25"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                        
                        <span className="relative flex items-center justify-center gap-2">
                          <Target className="w-5 h-5" />
                          {translations.analyze}
                        </span>
                      </motion.button>
                      
                      <motion.button
                        className="px-6 py-3 text-lg font-semibold text-white bg-white/10 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden"
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                        
                        <span className="relative flex items-center justify-center gap-2">
                          <Share2 className="w-5 h-5" />
                          Share
                        </span>
                      </motion.button>
                    </div>
                  </div>
                </ProfessionalCard>
              </div>
            </div>
          </ProfessionalCard>
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
