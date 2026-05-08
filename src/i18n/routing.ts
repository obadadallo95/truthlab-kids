import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

const locales = process.env.GITHUB_PAGES === 'true'
  ? ['en', 'ar'] as const
  : ['en', 'ar', 'de', 'ko'] as const;
 
export const routing = defineRouting({
  locales,
  defaultLocale: 'en'
});
 
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
