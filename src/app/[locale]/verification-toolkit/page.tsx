import { getTranslations, setRequestLocale } from 'next-intl/server';
import { CheckCircle2, FileText, Image as ImageIcon, Microscope, Upload } from 'lucide-react';

export default async function VerificationToolkitPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'VerificationToolkit' });
  const checklist = t.raw('checklist') as string[];

  return (
    <main className="lab-page">
      <section className="lab-container grid gap-8 py-10 lg:grid-cols-[260px_1fr]">
        <aside className="lab-card h-fit p-5">
          <h2 className="text-lg font-bold text-[var(--primary-container)]">{t('sideTitle')}</h2>
          <p className="mt-1 text-sm text-[var(--on-surface-variant)]">{t('sideSubtitle')}</p>
          <div className="mt-6 space-y-2">
            {[t('imageAnalysis'), t('sourceInvestigation'), t('metadata')].map((item, index) => (
              <div key={item} className={`flex items-center gap-3 rounded-lg p-3 text-sm font-semibold ${index === 0 ? 'border border-[var(--outline-variant)] bg-white text-[var(--primary-container)]' : 'text-[var(--on-surface-variant)]'}`}>
                {index === 0 ? <ImageIcon size={20} /> : index === 1 ? <Microscope size={20} /> : <FileText size={20} />}
                {item}
              </div>
            ))}
          </div>
          <button className="lab-button lab-button-primary mt-8 w-full"><Upload size={18} /> {t('newReport')}</button>
        </aside>

        <div className="space-y-8">
          <header>
            <h1 className="text-4xl font-semibold tracking-tight">{t('title')}</h1>
            <p className="mt-3 text-[var(--on-surface-variant)]">{t('subtitle')}</p>
          </header>
          <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
            <div className="lab-card overflow-hidden">
              <div className="network-watermark min-h-[420px]" />
              <div className="border-t border-[var(--outline-variant)] p-5">
                <p className="lab-label text-[var(--primary)]">{t('imageCaption')}</p>
                <p className="mt-2 text-[var(--on-surface-variant)]">{t('imageBody')}</p>
              </div>
            </div>
            <aside className="lab-card h-fit p-6">
              <h2 className="text-2xl font-medium">{t('checklistTitle')}</h2>
              <div className="mt-5 space-y-4">
                {checklist.map((item, index) => (
                  <div key={item} className="flex gap-3 rounded-lg border border-[var(--outline-variant)] bg-[var(--surface-low)] p-4">
                    <CheckCircle2 size={22} className={index < 2 ? 'text-[var(--success)]' : 'text-[var(--outline)]'} />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
          <section className="lab-card p-6">
            <h2 className="text-2xl font-medium">{t('reportTitle')}</h2>
            <p className="mt-3 max-w-3xl leading-7 text-[var(--on-surface-variant)]">{t('reportBody')}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[t('authentic'), t('needsContext'), t('manipulated')].map((verdict, index) => (
                <button key={verdict} className={`rounded-lg border px-4 py-4 font-semibold ${index === 2 ? 'border-[var(--primary-container)] bg-cyan-700/5 text-[var(--primary)]' : 'border-[var(--outline-variant)] bg-white'}`}>
                  {verdict}
                </button>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
