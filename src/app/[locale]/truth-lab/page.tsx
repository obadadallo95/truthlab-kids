import { useTranslations } from 'next-intl';
import { ProfessionalTruthLab } from '@/components/ProfessionalTruthLab';

export default function TruthLabPage() {
  const t = useTranslations('TruthLab');
  const claims = t.raw('claims') as { title: string; body: string; status: string; type: string; risk: string; action: string; featured?: boolean }[];

  return (
    <ProfessionalTruthLab
      translations={{
        title: t('claimsTitle'),
        subtitle: t('claimsSubtitle'),
        case1: t('case1'),
        case1Desc: t('case1Desc'),
        analyze: t('analyze'),
        fake: t('fake'),
        real: t('real'),
        resultFake: t('resultFake'),
        resultReal: t('resultReal'),
        back: t('back'),
        eyebrow: t('eyebrow'),
        caseProgress: t('caseProgress'),
        evidencePreview: t('evidencePreview'),
        correct: t('correct'),
        notQuite: t('notQuite'),
        nextScenario: t('nextScenario'),
        noScenarios: t('noScenarios'),
        toolTitle: t('toolTitle'),
        toolSubtitle: t('toolSubtitle'),
        imageAnalysis: t('imageAnalysis'),
        imageAnalysisDesc: t('imageAnalysisDesc'),
        imageAnalysisStats: t('imageAnalysisStats'),
        sourceInvestigation: t('sourceInvestigation'),
        sourceInvestigationDesc: t('sourceInvestigationDesc'),
        sourceInvestigationStats: t('sourceInvestigationStats'),
        metadata: t('metadata'),
        metadataDesc: t('metadataDesc'),
        metadataStats: t('metadataStats'),
        claimsTitle: t('claimsTitle'),
        claimsSubtitle: t('claimsSubtitle'),
        filterTitle: t('filterTitle'),
        allClaims: t('allClaims'),
        images: t('images'),
        videos: t('videos'),
        publicLife: t('publicLife'),
        updatedNow: t('updatedNow'),
        claims: claims,
      }}
    />
  );
}
