import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ProfessionalHomePage } from '@/components/ProfessionalHomePage';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Common' });

  return (
    <ProfessionalHomePage
      translations={{
        heroHeadline: t('heroHeadline'),
        heroBody: t('heroBody'),
        startLearning: t('startLearning'),
        facilitatorInfo: t('facilitatorInfo'),
        platformImpactTitle: t('platformImpactTitle'),
        platformImpactSubtitle: t('platformImpactSubtitle'),
        featuresTitle: t('featuresTitle'),
        featuresSubtitle: t('featuresSubtitle'),
        stats: {
          studentsEngaged: t('stats.studentsEngaged'),
          studentsEngagedLabel: t('stats.studentsEngagedLabel'),
          accuracyImprovement: t('stats.accuracyImprovement'),
          accuracyImprovementLabel: t('stats.accuracyImprovementLabel'),
          interactiveModules: t('stats.interactiveModules'),
          interactiveModulesLabel: t('stats.interactiveModulesLabel'),
          partnerSchools: t('stats.partnerSchools'),
          partnerSchoolsLabel: t('stats.partnerSchoolsLabel'),
        },
        features: {
          aiDetection: t('features.aiDetection'),
          aiDetectionDesc: t('features.aiDetectionDesc'),
          aiDetectionStats: t('features.aiDetectionStats'),
          cognitiveTraining: t('features.cognitiveTraining'),
          cognitiveTrainingDesc: t('features.cognitiveTrainingDesc'),
          cognitiveTrainingStats: t('features.cognitiveTrainingStats'),
          socialImpact: t('features.socialImpact'),
          socialImpactDesc: t('features.socialImpactDesc'),
          socialImpactStats: t('features.socialImpactStats'),
        },
        technology: {
          title: t('technology.title'),
          description: t('technology.description'),
          machineLearning: {
            title: t('technology.machineLearning.title'),
            description: t('technology.machineLearning.description'),
          },
          analytics: {
            title: t('technology.analytics.title'),
            description: t('technology.analytics.description'),
          },
          security: {
            title: t('technology.security.title'),
            description: t('technology.security.description'),
          },
        },
        trust: {
          title: t('trust.title'),
          subtitle: t('trust.subtitle'),
          award: {
            title: t('trust.award.title'),
            description: t('trust.award.description'),
          },
          growth: {
            title: t('trust.growth.title'),
            description: t('trust.growth.description'),
          },
          students: {
            title: t('trust.students.title'),
            description: t('trust.students.description'),
          },
        },
        cta: {
          title: t('cta.title'),
          description: t('cta.description'),
          startTrial: t('cta.startTrial'),
          scheduleDemo: t('cta.scheduleDemo'),
        },
      }}
    />
  );
}
