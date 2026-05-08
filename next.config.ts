import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  ...(isGithubPages
    ? {
        output: 'export' as const,
        basePath: '/truthlab-kids',
        assetPrefix: '/truthlab-kids/',
        trailingSlash: true,
      }
    : {}),
};

export default withNextIntl(nextConfig);
