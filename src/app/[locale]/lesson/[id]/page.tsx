import LessonClient from './LessonClient';

export function generateStaticParams() {
  return Array.from({ length: 6 }, (_, index) => ({ id: String(index + 1) }));
}

export default async function LessonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <LessonClient id={id} />;
}
