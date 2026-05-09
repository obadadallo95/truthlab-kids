'use client';

import { useTranslations } from 'next-intl';
import { ProfessionalAgeSelection } from '@/components/ProfessionalAgeSelection';

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
    foundationStageDesc: string;
    explorationStage: string;
    explorationStageDesc: string;
    advancedStage: string;
    advancedStageDesc: string;
  };
}

export default function AgeSelection() {
  const t = useTranslations('AgeSelection');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <ProfessionalAgeSelection
        translations={{
          title: t('title'),
          subtitle: t('subtitle'),
          age6to9: t('age6to9'),
          age6to9Desc: t('age6to9Desc'),
          age10to13: t('age10to13'),
          age10to13Desc: t('age10to13Desc'),
          age14to17: t('age14to17'),
          age14to17Desc: t('age14to17Desc'),
          eyebrow: t('eyebrow'),
          foundation: t('foundation'),
          explorer: t('explorer'),
          analyst: t('analyst'),
          selectTrack: t('selectTrack'),
          continue: t('continue'),
          fundamentalConcepts: t('fundamentalConcepts'),
          interactiveScenarios: t('interactiveScenarios'),
          visualLearning: t('visualLearning'),
          sourceInvestigation: t('sourceInvestigation'),
          contextAnalysis: t('contextAnalysis'),
          claimVerification: t('claimVerification'),
          foundationStageDesc: t('foundationStageDesc'),
          explorationStage: t('explorationStage'),
          explorationStageDesc: t('explorationStageDesc'),
          advancedStage: t('advancedStage'),
          advancedStageDesc: t('advancedStageDesc'),
        }}
      />
    </div>
  );
}
}
