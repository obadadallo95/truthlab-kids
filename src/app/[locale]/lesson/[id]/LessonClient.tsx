'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/routing';
import { useState } from 'react';
import { useAppStore } from '@/store/useAppStore';
import { ArrowLeft, ArrowRight, CheckCircle2, Lightbulb, MessageSquareQuote } from 'lucide-react';

type LessonSlide = {
  title: string;
  content: string;
  keyIdea?: string;
  question?: string;
  options?: string[];
  answer?: number;
  feedback?: string;
  facilitatorNote?: string;
};

type LessonContent = {
  title: string;
  overview?: string;
  slides: LessonSlide[];
};

export default function LessonClient({ id }: { id: string }) {
  const tContent = useTranslations('Content');
  const tLesson = useTranslations('Lesson');
  const router = useRouter();
  const ageGroup = useAppStore((state) => state.ageGroup) || '10-13';
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  let rawLesson: LessonContent | null = null;
  try {
    rawLesson = tContent.raw(`${ageGroup}.lessons.${id}`) as LessonContent;
  } catch {
    rawLesson = tContent.raw(`${ageGroup}.lessons.1`) as LessonContent;
  }

  const slides = rawLesson?.slides || [];
  const slide = slides[currentSlide];
  const progress = slides.length > 0 ? ((currentSlide + 1) / slides.length) * 100 : 0;
  const hasAnswered = selectedOption !== null;
  const isCorrect = hasAnswered && selectedOption === slide.answer;

  if (slides.length === 0) return <div className="p-10">{tLesson('notFound')}</div>;

  return (
    <main className="lab-page">
      <section className="lab-container py-10">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="lab-label text-[var(--primary)]">{tLesson('moduleLabel')} {id}</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight">{rawLesson?.title}</h1>
            {rawLesson?.overview && (
              <p className="mt-3 max-w-2xl text-[var(--on-surface-variant)]">{rawLesson.overview}</p>
            )}
          </div>
          <span className="w-fit rounded-full border border-[var(--outline-variant)] bg-white px-4 py-2 text-sm font-semibold">
            {currentSlide + 1}/{slides.length}
          </span>
        </div>
        <div className="mb-8 h-2 overflow-hidden rounded-full bg-[var(--surface-container)]">
          <div className="h-full rounded-full bg-[var(--secondary-container)] transition-all" style={{ width: `${progress}%` }} />
        </div>

        <article className="lab-card grid min-h-[520px] gap-8 p-7 md:grid-cols-[1fr_0.9fr] md:p-10">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold">{slide.title}</h2>
            <p className="mt-6 text-lg leading-9 text-[var(--on-surface-variant)]">{slide.content}</p>
            {slide.keyIdea && (
              <div className="mt-7 flex gap-3 rounded-lg border border-[var(--outline-variant)] bg-[var(--surface-low)] p-4">
                <Lightbulb size={22} className="mt-1 shrink-0 text-[var(--secondary)]" />
                <p className="font-medium leading-7">{slide.keyIdea}</p>
              </div>
            )}
            <div className="mt-8 rounded-lg border border-[var(--outline-variant)] bg-[var(--surface-low)] p-5">
              <h3 className="flex items-center gap-2 text-xl font-medium"><CheckCircle2 size={22} className="text-[var(--primary-container)]" /> {tLesson('checkUnderstanding')}</h3>
              <p className="mt-3 text-[var(--on-surface-variant)]">{slide.question || tLesson('defaultQuestion')}</p>
              {slide.options && (
                <div className="mt-5 grid gap-3">
                  {slide.options.map((option, index) => {
                    const selected = selectedOption === index;
                    const correct = hasAnswered && slide.answer === index;
                    return (
                      <button
                        key={option}
                        onClick={() => setSelectedOption(index)}
                        className={`rounded-lg border p-4 text-left font-medium transition ${
                          correct
                            ? 'border-[var(--success)] bg-emerald-50 text-[var(--on-surface)]'
                            : selected
                              ? 'border-[var(--primary-container)] bg-cyan-700/5'
                              : 'border-[var(--outline-variant)] bg-white hover:border-[var(--primary-container)]'
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                  {hasAnswered && slide.feedback && (
                    <p className={`rounded-lg p-4 text-sm font-semibold ${isCorrect ? 'bg-emerald-50 text-emerald-900' : 'bg-amber-50 text-amber-900'}`}>
                      {slide.feedback}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="flex min-h-72 flex-col justify-between rounded-lg border border-[var(--outline-variant)] bg-[var(--surface-low)] p-6">
            <div className="network-watermark -m-6 min-h-64 rounded-t-lg border-b border-[var(--outline-variant)]" />
            {slide.facilitatorNote && (
              <div className="mt-6 flex gap-3">
                <MessageSquareQuote size={22} className="mt-1 shrink-0 text-[var(--primary-container)]" />
                <p className="text-sm leading-6 text-[var(--on-surface-variant)]">{slide.facilitatorNote}</p>
              </div>
            )}
          </div>
        </article>

        <div className="mt-8 flex justify-between gap-4">
          <button
            onClick={() => {
              setSelectedOption(null);
              setCurrentSlide((slide) => Math.max(0, slide - 1));
            }}
            disabled={currentSlide === 0}
            className="lab-button lab-button-secondary disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ArrowLeft size={20} /> {tLesson('prev')}
          </button>
          <button
            onClick={() => {
              if (currentSlide < slides.length - 1) {
                setSelectedOption(null);
                setCurrentSlide((slide) => slide + 1);
              } else {
                router.push('/path');
              }
            }}
            className="lab-button lab-button-primary"
          >
            {currentSlide === slides.length - 1 ? tLesson('finish') : tLesson('next')} <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </main>
  );
}
