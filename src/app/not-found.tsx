import TruthLabLogo from '@/components/brand/TruthLabLogo';

export default function NotFound() {
  const basePath = process.env.GITHUB_PAGES === 'true' ? '/truthlab-kids' : '';

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 text-white">
      <section className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center text-center">
        <TruthLabLogo className="mb-10" />
        <p className="text-8xl font-black tracking-tight text-[#7dd3fc] md:text-[11rem]">404</p>
        <h1 className="mt-4 text-3xl font-bold md:text-5xl">This page could not be found</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          The evidence trail does not lead to this page. Return to TruthLab Kids and keep investigating.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href={`${basePath}/ar/`} className="rounded-lg bg-[#0ea5e9] px-7 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-[#0284c7]">
            العربية
          </a>
          <a href={`${basePath}/en/`} className="rounded-lg border border-white/15 bg-white/10 px-7 py-4 font-semibold text-white transition hover:bg-white/15">
            English
          </a>
        </div>
      </section>
    </main>
  );
}
