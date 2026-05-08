import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import TruthLabHeroScene from '@/components/brand/TruthLabHeroScene';
import MotionEvidenceReel from '@/components/media/MotionEvidenceReel';

export default function Home() {
  const t = useTranslations('Common');
  const checks = t.raw('checks') as string[];
  const proofPoints = t.raw('proofPoints') as string[];
  const mediaCards = t.raw('mediaCards') as { title: string; body: string; image: string }[];
  
  return (
    <main className="flex-1 overflow-hidden bg-[#071311] text-white">
      <section className="aurora-lab isolate relative min-h-[calc(100vh-4.5rem)] overflow-hidden">
        <TruthLabHeroScene />
        <div className="brand-orbit z-0" aria-hidden="true">
          <span className="brand-orbit__core" />
          <span className="brand-orbit__ring" />
          <span className="brand-orbit__ring" />
          <span className="brand-orbit__ring" />
          <span className="brand-orbit__spark" />
        </div>
        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-4.5rem)] max-w-7xl items-center gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:py-14">
          <div className="animate-rise max-w-4xl">
            <div className="animate-drift mb-7 inline-flex items-center gap-3 rounded-full border border-white/14 bg-white/8 px-4 py-2 text-sm font-bold text-teal-50 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-yellow-300 shadow-[0_0_24px_rgba(250,204,21,0.9)]" />
              {t('heroEyebrow')}
            </div>
            <h1 className="text-5xl font-black leading-[0.9] tracking-tight text-white sm:text-7xl lg:text-8xl">
              <span className="block">{t('title')}</span>
              <span className="kinetic-word block">{t('heroHeadline')}</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              {t('heroBody')}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/age-selection" className="inline-flex min-h-14 items-center justify-center rounded-md bg-yellow-300 px-7 text-base font-black text-slate-950 shadow-2xl shadow-yellow-300/20 transition hover:bg-yellow-200">
                {t('startLearning')}
              </Link>
              <Link href="/facilitator" className="inline-flex min-h-14 items-center justify-center rounded-md border border-white/16 bg-white/10 px-7 text-base font-black text-white backdrop-blur transition hover:bg-white/15">
                {t('facilitatorInfo')}
              </Link>
            </div>
          </div>

          <div className="lab-shell animate-float relative min-h-[540px] overflow-hidden rounded-xl p-5 sm:p-7">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-300 to-transparent" />
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-teal-200">{t('caseEyebrow')}</p>
                <h2 className="mt-4 text-3xl font-black tracking-tight text-white">{t('caseTitle')}</h2>
              </div>
              <div className="signal-bars flex items-end gap-1.5" aria-hidden="true"><span /><span /><span /></div>
            </div>

            <div className="mt-8 rounded-lg border border-white/10 bg-black/24 p-4">
              <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-teal-200/20 bg-[linear-gradient(135deg,rgba(94,234,212,0.16),rgba(250,204,21,0.08)),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:auto,32px_32px,32px_32px] p-5">
                <MotionEvidenceReel labels={checks} />
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex justify-between">
                    <span className="rounded-full bg-red-400/15 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-red-100">{t('viralClaim')}</span>
                    <span className="rounded-full bg-teal-300/15 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-teal-100">{t('evidenceMode')}</span>
                  </div>
                  <p className="max-w-md text-2xl font-black leading-tight text-white">{t('casePrompt')}</p>
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {checks.map((item, index) => (
                <div key={item} className="evidence-tile animate-card rounded-md border border-white/10 bg-white/9 p-4" style={{ animationDelay: `${index * 120}ms` }}>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-300">{t('checkLabel')} 0{index + 1}</p>
                  <p className="mt-2 text-lg font-black text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="identity-band border-y border-white/10 px-5 py-8 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {proofPoints.map((line, index) => (
            <div key={line} className="animate-card rounded-lg border border-white/10 bg-white/6 p-5 text-lg font-black leading-7 text-white backdrop-blur" style={{ animationDelay: `${index * 140}ms` }}>
              {line}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#071311] px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="animate-drift mb-3 text-sm font-black uppercase tracking-[0.22em] text-teal-200">{t('mediaEyebrow')}</p>
            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">{t('mediaTitle')}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">{t('mediaBody')}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {mediaCards.map((card, index) => (
              <article key={card.title} className="animate-card asset-card overflow-hidden rounded-lg border border-white/10 bg-white/[0.07] shadow-2xl shadow-black/20 backdrop-blur" style={{ animationDelay: `${index * 120}ms` }}>
                <Image src={card.image} alt="" width={1200} height={800} className="aspect-[4/3] w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-xl font-black text-white">{card.title}</h3>
                  <p className="mt-3 text-sm font-medium leading-6 text-slate-300">{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
