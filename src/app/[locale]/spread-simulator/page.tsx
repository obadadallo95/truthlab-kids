import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ProfessionalSpreadSimulator } from '@/components/ProfessionalSpreadSimulator';

export default async function SpreadSimulatorPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'SpreadSimulator' });

  const scenarios = [
    {
      id: 1,
      title: t('scenarios.viralNews.title'),
      description: t('scenarios.viralNews.description'),
      type: 'news',
      risk: 'high',
      participants: 1000,
      duration: '5 min',
    },
    {
      id: 2,
      title: t('scenarios.celebrityGossip.title'),
      description: t('scenarios.celebrityGossip.description'),
      type: 'entertainment',
      risk: 'medium',
      participants: 500,
      duration: '3 min',
    },
    {
      id: 3,
      title: t('scenarios.politicalMeme.title'),
      description: t('scenarios.politicalMeme.description'),
      type: 'political',
      risk: 'high',
      participants: 2000,
      duration: '7 min',
    },
    {
      id: 4,
      title: t('scenarios.healthInformation.title'),
      description: t('scenarios.healthInformation.description'),
      type: 'health',
      risk: 'low',
      participants: 300,
      duration: '4 min',
    },
  ];

  return (
    <ProfessionalSpreadSimulator
      translations={{
        title: t('title'),
        subtitle: t('subtitle'),
        start: t('start'),
        pause: t('pause'),
        reset: t('reset'),
        download: t('download'),
        back: t('back'),
        eyebrow: t('eyebrow'),
        simulationTitle: t('simulationTitle'),
        simulationSubtitle: t('simulationSubtitle'),
        selectScenario: t('selectScenario'),
        networkVisualization: t('networkVisualization'),
        monitorDescription: t('monitorDescription'),
        realTime: t('realTime'),
        networkEffect: t('networkEffect'),
        viralContent: t('viralContent'),
        platformStats: t('platformStats'),
        engagement: t('engagement'),
        reach: t('reach'),
        speed: t('speed'),
        influence: t('influence'),
        participants: t('participants'),
        shares: t('shares'),
        learningObjectives: t('learningObjectives'),
        learningSubtitle: t('learningSubtitle'),
        criticalAnalysis: t('criticalAnalysis'),
        criticalAnalysisDesc: t('criticalAnalysisDesc'),
        criticalAnalysisStats: t('criticalAnalysisStats'),
        digitalDefense: t('digitalDefense'),
        digitalDefenseDesc: t('digitalDefenseDesc'),
        digitalDefenseStats: t('digitalDefenseStats'),
        strategicThinking: t('strategicThinking'),
        strategicThinkingDesc: t('strategicThinkingDesc'),
        strategicThinkingStats: t('strategicThinkingStats'),
        scenarios: scenarios,
      }}
    />
  );
}
