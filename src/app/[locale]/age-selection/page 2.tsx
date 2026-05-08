'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/routing';
import { useAppStore, AgeGroup } from '@/store/useAppStore';

export default function AgeSelection() {
  const t = useTranslations('AgeSelection');
  const router = useRouter();
  const setAgeGroup = useAppStore((state) => state.setAgeGroup);

  const handleSelect = (age: AgeGroup) => {
    setAgeGroup(age);
    router.push('/path');
  };

  return (
    <main className="identity-band flex-1 px-5 py-12 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="animate-drift mb-3 text-sm font-black uppercase tracking-[0.22em] text-teal-200">{t('eyebrow')}</p>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">{t('title')}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {[
            { id: '6-9', title: t('age6to9'), desc: t('age6to9Desc'), tone: 'border-yellow-300/24 bg-yellow-300/9', label: t('foundation') },
            { id: '10-13', title: t('age10to13'), desc: t('age10to13Desc'), tone: 'border-teal-300/24 bg-teal-300/9', label: t('explorer') },
            { id: '14-17', title: t('age14to17'), desc: t('age14to17Desc'), tone: 'border-indigo-300/24 bg-indigo-300/9', label: t('analyst') },
          ].map((group, index) => (
            <button
              key={group.id}
              onClick={() => handleSelect(group.id as AgeGroup)}
              className={`animate-card group min-h-[300px] rounded-lg border p-6 text-start shadow-2xl shadow-black/20 backdrop-blur transition hover:-translate-y-1 ${group.tone}`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="mb-8 flex items-center justify-between">
                    <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-slate-200">{group.label}</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-sm font-black text-slate-950">{group.id.split('-')[0]}</span>
                  </div>
                  <h2 className="text-3xl font-black tracking-tight text-white">{group.title}</h2>
                  <p className="mt-4 text-base leading-7 text-slate-300">{group.desc}</p>
                </div>
                <span className="mt-10 inline-flex h-11 items-center justify-center rounded-md bg-white px-4 text-sm font-black text-slate-950 transition group-hover:bg-yellow-300">
                  {t('selectTrack')}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
