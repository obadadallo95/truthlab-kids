'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { ChangeEvent, useTransition } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <select 
      value={locale} 
      onChange={handleLanguageChange}
      disabled={isPending}
      className="block border border-white/12 bg-white/[0.045] px-3 py-2 text-sm font-semibold text-white outline-none transition focus:border-[#7dd3fc] focus:ring-4 focus:ring-cyan-300/10 disabled:opacity-50"
    >
      <option value="en">English</option>
      <option value="ar">العربية</option>
    </select>
  );
}
