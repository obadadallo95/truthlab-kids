'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/routing';
import { AgeGroup, useAppStore } from '@/store/useAppStore';
import { ProfessionalAgeSelection } from '@/components/ProfessionalAgeSelection';

export default function AgeSelection() {
  const t = useTranslations('AgeSelection');

  return (
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
        advancedAIConcepts: t('advancedAIConcepts'),
        algorithmAnalysis: t('algorithmAnalysis'),
        evidenceStandards: t('evidenceStandards'),
        progressiveLearningPath: t('progressiveLearningPath'),
        progressiveLearningPathDesc: t('progressiveLearningPathDesc'),
        foundationStage: t('foundationStage'),
        foundationStageDesc: t('foundationStageDesc'),
        explorationStage: t('explorationStage'),
        explorationStageDesc: t('explorationStageDesc'),
        advancedStage: t('advancedStage'),
        advancedStageDesc: t('advancedStageDesc'),
      }}
    />
  );
}
