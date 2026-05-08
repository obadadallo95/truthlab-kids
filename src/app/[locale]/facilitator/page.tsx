import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ProfessionalFacilitator } from '@/components/ProfessionalFacilitator';

export default async function FacilitatorPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Facilitator' });
  const rows = t.raw('rows') as { name: string; module: string; progress: number; status: string }[];

  return (
    <ProfessionalFacilitator
      translations={{
        title: t('title'),
        description: t('description'),
        backHome: t('backHome'),
        eyebrow: t('eyebrow'),
        exportReport: t('exportReport'),
        activeStudents: t('activeStudents'),
        averageProgress: t('averageProgress'),
        needsReview: t('needsReview'),
        onTrack: t('onTrack'),
        aiBias: t('aiBias'),
        flagged: t('flagged'),
        moduleStatus: t('moduleStatus'),
        searchStudents: t('searchStudents'),
        allModules: t('allModules'),
        imageAnalysis: t('imageAnalysis'),
        sourceInvestigation: t('sourceInvestigation'),
        studentName: t('studentName'),
        currentModule: t('currentModule'),
        progress: t('progress'),
        status: t('status'),
        actions: t('actions'),
        review: t('review'),
        rows: rows,
        teachingResources: {
          title: t('teachingResources.title'),
          subtitle: t('teachingResources.subtitle'),
          lessonPlans: {
            title: t('teachingResources.lessonPlans.title'),
            description: t('teachingResources.lessonPlans.description'),
            stats: t('teachingResources.lessonPlans.stats'),
          },
          assessmentTools: {
            title: t('teachingResources.assessmentTools.title'),
            description: t('teachingResources.assessmentTools.description'),
            stats: t('teachingResources.assessmentTools.stats'),
          },
          customizationOptions: {
            title: t('teachingResources.customizationOptions.title'),
            description: t('teachingResources.customizationOptions.description'),
            stats: t('teachingResources.customizationOptions.stats'),
          },
        },
        enterpriseFeatures: {
          title: t('enterpriseFeatures.title'),
          description: t('enterpriseFeatures.description'),
          multiClassManagement: {
            title: t('enterpriseFeatures.multiClassManagement.title'),
            description: t('enterpriseFeatures.multiClassManagement.description'),
          },
          advancedAnalytics: {
            title: t('enterpriseFeatures.advancedAnalytics.title'),
            description: t('enterpriseFeatures.advancedAnalytics.description'),
          },
          certificationSupport: {
            title: t('enterpriseFeatures.certificationSupport.title'),
            description: t('enterpriseFeatures.certificationSupport.description'),
          },
        },
      }}
    />
  );
}
