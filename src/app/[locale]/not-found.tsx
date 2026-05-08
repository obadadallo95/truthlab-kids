import { getTranslations, setRequestLocale } from 'next-intl/server';
import NotFoundExperience from '@/components/brand/NotFoundExperience';

export default async function NotFound({ params }: { params?: Promise<{ locale?: string }> }) {
  const { locale = 'en' } = (await params) || {};
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'NotFound' });

  return (
    <NotFoundExperience
      title={t('title')}
      description={t('description')}
      goHome={t('goHome')}
      exploreContent={t('exploreContent')}
      learningPath={t('learningPath')}
      truthLab={t('truthLab')}
      spreadSimulator={t('spreadSimulator')}
    />
  );
}
