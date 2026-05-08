'use client';

import { useTranslations } from 'next-intl';
import { Bell, Star } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { Link, usePathname } from '@/i18n/routing';
import TruthLabLogo from '@/components/brand/TruthLabLogo';

export default function TopBar() {
  const t = useTranslations('Common');
  const nav = t.raw('nav') as { label: string; href: string }[];
  const pathname = usePathname();
  
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#02080b]/92 text-white shadow-[0_10px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl">
      <div className="lab-container flex min-h-[72px] items-center justify-between gap-6">
        <div className="flex items-center gap-10">
          <Link href="/" className="group flex items-center gap-3">
            <TruthLabLogo className="transition duration-300 group-hover:scale-[1.02]" />
            <span className="sr-only">{t('title')}</span>
          </Link>
          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href as '/'}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href 
                    ? 'text-[#d9fbff] border-b-2 border-[#d9fbff] pb-1' 
                    : 'text-slate-200/72 hover:text-[#d9fbff]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/profile" className="hidden items-center gap-2 border border-white/12 bg-white/[0.045] px-4 py-2 text-sm font-semibold text-slate-100 sm:flex">
            <Star size={16} className="text-[#d6b84b]" fill="currentColor" />
            {t('points')}: 0
          </Link>
          <LanguageSwitcher />
          <button aria-label="Notifications" className="hidden p-2 text-slate-200/72 transition hover:bg-white/10 hover:text-white sm:inline-flex">
            <Bell size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}
