import { useTranslations } from 'next-intl';
import { Award, Brain, CheckCircle2, Database, FileText, Search, Shield } from 'lucide-react';

export default function ProfilePage() {
  const t = useTranslations('Profile');
  const badges = t.raw('badges') as { title: string; body: string; earned: boolean }[];
  const icons = [CheckCircle2, Brain, Shield, Search, Database];

  return (
    <main className="lab-page">
      <section className="lab-container grid gap-8 py-10 lg:grid-cols-[1fr_360px]">
        <div className="space-y-8">
          <section className="lab-card overflow-hidden">
            <div className="bg-[var(--primary-container)] px-8 py-10 text-[var(--on-primary-container)]">
              <p className="lab-label opacity-80">{t('track')}</p>
              <h1 className="mt-3 text-4xl font-semibold">{t('name')}</h1>
              <p className="mt-2 opacity-90">{t('summary')}</p>
            </div>
            <div className="grid gap-0 divide-y divide-[var(--outline-variant)] md:grid-cols-3 md:divide-x md:divide-y-0">
              {[[t('points'), '1,250'], [t('badgesEarned'), '3/5'], [t('reports'), '8']].map(([label, value]) => (
                <div key={label} className="p-6">
                  <p className="lab-label text-[var(--on-surface-variant)]">{label}</p>
                  <div className="mt-2 text-3xl font-semibold">{value}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold">{t('earnedBadges')}</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {badges.map((badge, index) => {
                const Icon = icons[index] ?? Award;
                return (
                  <article key={badge.title} className={`lab-card p-6 text-center ${badge.earned ? '' : 'opacity-55 grayscale'}`}>
                    <span className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${badge.earned ? 'bg-[var(--secondary-container)] text-[var(--secondary)]' : 'bg-[var(--surface-container)] text-[var(--outline)]'}`}>
                      <Icon size={30} />
                    </span>
                    <h3 className="mt-5 font-semibold">{badge.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--on-surface-variant)]">{badge.body}</p>
                  </article>
                );
              })}
            </div>
          </section>
        </div>
        <aside className="lab-card h-fit p-6">
          <h2 className="flex items-center gap-2 text-2xl font-medium"><FileText size={24} className="text-[var(--primary-container)]" /> {t('recentReports')}</h2>
          <div className="mt-6 space-y-4">
            {[t('report1'), t('report2'), t('report3')].map((report) => (
              <div key={report} className="rounded-lg border border-[var(--outline-variant)] p-4">
                <h3 className="font-semibold">{report}</h3>
                <p className="mt-2 text-sm text-[var(--on-surface-variant)]">{t('reviewed')}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </main>
  );
}
