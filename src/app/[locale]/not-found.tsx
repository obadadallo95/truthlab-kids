import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import TruthLabLogo from '@/components/brand/TruthLabLogo';
import { Home, Search } from 'lucide-react';

export default async function NotFound({ params }: { params?: Promise<{ locale?: string }> }) {
  const { locale = 'en' } = (await params) || {};
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'NotFound' });

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 text-white">
      <section className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center text-center">
        <TruthLabLogo className="mb-10" />
        <p className="text-8xl font-black tracking-tight text-[#7dd3fc] md:text-[11rem]">404</p>
        <h1 className="mt-4 text-3xl font-bold md:text-5xl">{t('title')}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{t('description')}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/" className="inline-flex items-center gap-2 rounded-lg bg-[#0ea5e9] px-7 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-[#0284c7]">
            <Home className="h-5 w-5" />
            {t('goHome')}
          </Link>
          <Link href="/age-selection" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-7 py-4 font-semibold text-white transition hover:bg-white/15">
            <Search className="h-5 w-5" />
            {t('exploreContent')}
          </Link>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm text-slate-300">
          <Link href="/path" className="rounded-lg bg-white/5 px-4 py-2 hover:bg-white/10">{t('learningPath')}</Link>
          <Link href="/truth-lab" className="rounded-lg bg-white/5 px-4 py-2 hover:bg-white/10">{t('truthLab')}</Link>
          <Link href="/spread-simulator" className="rounded-lg bg-white/5 px-4 py-2 hover:bg-white/10">{t('spreadSimulator')}</Link>
        </div>
      </section>
    </main>
  );
}
