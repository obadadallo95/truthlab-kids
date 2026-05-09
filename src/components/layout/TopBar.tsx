'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Bell, Menu, X, Star } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { Link, usePathname } from '@/i18n/routing';
import TruthLabLogo from '@/components/brand/TruthLabLogo';
import { motion } from 'framer-motion';

export default function TopBar() {
  const t = useTranslations('Common');
  const nav = t.raw('nav') as { label: string; href: string }[];
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);
  
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#02080b]/92 text-white shadow-[0_10px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl">
      <div className="lab-container flex min-h-[72px] items-center justify-between gap-6">
        <div className="flex items-center gap-10">
          <Link href="/" className="group flex items-center gap-3">
            <TruthLabLogo className="transition duration-300 group-hover:scale-[1.02]" />
            <span className="sr-only">{t('title')}</span>
          </Link>
          
          {/* Desktop Navigation */}
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
        
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex h-11 w-11 items-center justify-center border border-white/12 bg-white/[0.055] text-white transition hover:border-[#5affd5]/45 hover:text-[#d9fbff] lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            type="button"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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

      <motion.div
        id="mobile-navigation"
        initial={false}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        className="overflow-hidden border-t border-white/10 bg-[#041014]/98 shadow-[0_24px_60px_rgba(0,0,0,0.38)] lg:hidden"
        aria-hidden={!isMobileMenuOpen}
      >
        <nav className="lab-container grid gap-2 py-4">
          {nav.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href as '/'}
                className={`flex min-h-12 items-center justify-between border px-4 text-sm font-black transition ${
                  isActive
                    ? 'border-[#5affd5]/42 bg-[#5affd5]/13 text-[#d9fbff]'
                    : 'border-white/10 bg-white/[0.045] text-slate-100 hover:border-white/20 hover:bg-white/[0.08]'
                }`}
              >
                <span>{item.label}</span>
                <span className={isActive ? 'text-[#5affd5]' : 'text-slate-500'}>→</span>
              </Link>
            );
          })}
          <Link
            href="/profile"
            className="mt-2 flex min-h-12 items-center justify-between border border-[#d6b84b]/24 bg-[#d6b84b]/10 px-4 text-sm font-black text-[#fff0af] sm:hidden"
          >
            <span>{t('points')}: 0</span>
            <Star size={16} fill="currentColor" />
          </Link>
        </nav>
      </motion.div>
    </header>
  );
}
