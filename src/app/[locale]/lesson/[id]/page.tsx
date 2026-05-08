import LessonClient from './LessonClient';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    Array.from({ length: 6 }, (_, index) => ({ locale, id: String(index + 1) }))
  );
}

export default async function LessonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <LessonClient id={id} />;
}
