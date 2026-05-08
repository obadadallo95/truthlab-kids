'use client';

import { useTranslations } from 'next-intl';
import { useAppStore } from '@/store/useAppStore';
import { ProfessionalPath } from '@/components/ProfessionalPath';

type LessonSummary = {
  title: string;
  overview?: string;
};

export default function LearningPathPage() {
  const t = useTranslations('LearningPath');
  const tContent = useTranslations('Content');
  const ageGroup = useAppStore((state) => state.ageGroup) || '10-13';
  const lessons = tContent.raw(`${ageGroup}.lessons`) as Record<string, LessonSummary>;

  const modules = Object.entries(lessons)
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([id, lesson], index) => ({
      id: parseInt(id),
      title: lesson.title,
      description: lesson.overview || 'Interactive learning module for media literacy education',
      duration: '45 min',
      completed: index < 2, // Mock completion status
      locked: index > 3, // Mock locked status
      progress: index === 0 ? 100 : index === 1 ? 75 : index === 2 ? 30 : 0,
      lessons: 5,
      icon: ['brain', 'shield', 'network', 'users'][index % 4],
    }));

  const achievements = [
    {
      id: 1,
      title: t('firstStepsTitle'),
      description: t('firstStepsDesc'),
      icon: 'star',
      unlocked: true,
    },
    {
      id: 2,
      title: t('criticalThinkerTitle'),
      description: t('criticalThinkerDesc'),
      icon: 'trophy',
      unlocked: true,
    },
    {
      id: 3,
      title: t('mediaExpertTitle'),
      description: t('mediaExpertDesc'),
      icon: 'award',
      unlocked: false,
    },
    {
      id: 4,
      title: t('truthDefenderTitle'),
      description: t('truthDefenderDesc'),
      icon: 'target',
      unlocked: false,
    },
  ];

  const stats = {
    totalModules: modules.length,
    completedModules: modules.filter(m => m.completed).length,
    totalTime: '2h 15min',
    averageScore: '87%',
  };

  return (
    <ProfessionalPath
      translations={{
        title: t('title'),
        subtitle: t('summary'),
        back: t('back') || 'Back to Selection',
        continue: t('start'),
        modulesCompleted: t('modulesCompleted'),
        learningTime: t('learningTime'),
        averageScore: t('averageScore'),
        currentLevel: t('currentLevel'),
        currentLevelLabel: t('currentLevelLabel'),
        learningModules: t('learningModules'),
        learningModulesSubtitle: t('learningModulesSubtitle'),
        achievementsTitle: t('achievementsTitle'),
        achievementsSubtitle: t('achievementsSubtitle'),
        modules: modules,
        achievements: achievements,
        stats: stats,
      }}
    />
  );
}
