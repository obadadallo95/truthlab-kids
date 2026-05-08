import { Link } from '@/i18n/routing';
import TruthLabLogo from '@/components/brand/TruthLabLogo';
import { ArrowRight, FileWarning, Home, Radar, Search, ShieldAlert } from 'lucide-react';

type NotFoundExperienceProps = {
  title: string;
  description: string;
  goHome: string;
  exploreContent: string;
  learningPath: string;
  truthLab: string;
  spreadSimulator: string;
  plainLinks?: boolean;
  basePath?: string;
};

export default function NotFoundExperience({
  title,
  description,
  goHome,
  exploreContent,
  learningPath,
  truthLab,
  spreadSimulator,
  plainLinks = false,
  basePath = '',
}: NotFoundExperienceProps) {
  const HomeLink = plainLinks ? 'a' : Link;
  const ExploreLink = plainLinks ? 'a' : Link;
  const homeHref = plainLinks ? `${basePath}/ar/` : '/';
  const exploreHref = plainLinks ? `${basePath}/ar/age-selection/` : '/age-selection';

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070b] px-4 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(90,255,213,0.12),transparent_34%),radial-gradient(circle_at_80%_15%,rgba(59,125,216,0.14),transparent_30%),linear-gradient(135deg,#05070b_0%,#111827_48%,#05070b_100%)]" />
      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(232,228,220,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(232,228,220,0.12)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/10" />
      <div className="absolute left-1/2 top-1/2 h-[25rem] w-[25rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-300/10" />

      <section className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-10 py-14 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <TruthLabLogo className="mb-10" />
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
            <Radar className="h-4 w-4" />
            Missing Evidence Case
          </div>
          <h1 className="mt-8 max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white md:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">{description}</p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <HomeLink href={homeHref} className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-7 py-4 font-black text-slate-950 shadow-[0_18px_44px_rgba(90,255,213,0.22)] transition hover:bg-cyan-300">
              <Home className="h-5 w-5" />
              {goHome}
            </HomeLink>
            <ExploreLink href={exploreHref} className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur transition hover:bg-white/15">
              <Search className="h-5 w-5" />
              {exploreContent}
            </ExploreLink>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
            {(plainLinks
              ? [
                  [`${basePath}/ar/path/`, learningPath],
                  [`${basePath}/ar/truth-lab/`, truthLab],
                  [`${basePath}/ar/spread-simulator/`, spreadSimulator],
                ]
              : [
                  ['/path', learningPath],
                  ['/truth-lab', truthLab],
                  ['/spread-simulator', spreadSimulator],
                ]
            ).map(([href, label]) => {
              const ShortcutLink = plainLinks ? 'a' : Link;
              return (
                <ShortcutLink key={href} href={href} className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 transition hover:border-cyan-300/30 hover:bg-cyan-300/10">
                  {label}
                </ShortcutLink>
              );
            })}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-8 rounded-[2rem] bg-cyan-400/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-white/[0.06] shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-300">
                <FileWarning className="h-5 w-5 text-amber-300" />
                CASE FILE
              </div>
              <span className="rounded-full border border-red-300/20 bg-red-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-red-200">
                unresolved
              </span>
            </div>

            <div className="p-6 md:p-8">
              <div className="relative aspect-square rounded-xl border border-cyan-300/15 bg-[#081018]">
                <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(90,255,213,0.24)_1px,transparent_1px),linear-gradient(90deg,rgba(90,255,213,0.24)_1px,transparent_1px)] [background-size:28px_28px]" />
                <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/25" />
                <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/40" />
                <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-amber-300/40 bg-amber-300/10">
                  <span className="text-4xl font-black text-amber-200">404</span>
                </div>
                <span className="absolute left-[18%] top-[24%] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_24px_rgba(90,255,213,0.8)]" />
                <span className="absolute right-[20%] top-[34%] h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(59,125,216,0.8)]" />
                <span className="absolute bottom-[22%] left-[32%] h-2.5 w-2.5 rounded-full bg-red-400 shadow-[0_0_18px_rgba(201,64,64,0.8)]" />
                <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/10 bg-black/35 p-4 backdrop-blur">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-amber-200">
                    <ShieldAlert className="h-4 w-4" />
                    route confidence: 0%
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[18%] rounded-full bg-red-400" />
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3">
                  <span>Source path</span>
                  <span className="font-mono text-red-200">not found</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3">
                  <span>Recommended action</span>
                  <span className="inline-flex items-center gap-1 font-bold text-cyan-200">return <ArrowRight className="h-4 w-4" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
