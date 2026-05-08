import { useId } from 'react';

type TruthLabLogoProps = {
  compact?: boolean;
  className?: string;
};

export default function TruthLabLogo({ compact = false, className = '' }: TruthLabLogoProps) {
  const gradientA = useId();
  const gradientB = useId();
  const gradientC = useId();

  return (
    <span className={`inline-flex items-center gap-3 ${className}`} aria-label="TruthLab Kids">
      <span className="relative flex h-12 w-12 shrink-0 items-center justify-center">
        <svg viewBox="0 0 72 72" role="img" aria-hidden="true" className="h-full w-full drop-shadow-[0_12px_28px_rgba(90,255,213,0.18)]">
          <defs>
            <linearGradient id={gradientA} x1="10" x2="62" y1="8" y2="64" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#5AFFD5" />
              <stop offset="0.46" stopColor="#3B7DD8" />
              <stop offset="1" stopColor="#C94040" />
            </linearGradient>
            <radialGradient id={gradientB} cx="0" cy="0" r="1" gradientTransform="matrix(0 24 -29 0 35 35)" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#E8E4DC" stopOpacity="0.92" />
              <stop offset="0.5" stopColor="#5AFFD5" stopOpacity="0.24" />
              <stop offset="1" stopColor="#0A0B0E" stopOpacity="0" />
            </radialGradient>
            <linearGradient id={gradientC} x1="20" x2="52" y1="20" y2="52" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#E8E4DC" />
              <stop offset="1" stopColor="#5AFFD5" />
            </linearGradient>
          </defs>
          <path
            d="M36 5.5c13.6 0 24.7 5.4 29.7 9.2v31.5C61.2 57 49.8 66.5 36 66.5S10.8 57 6.3 46.2V14.7c5-3.8 16.1-9.2 29.7-9.2Z"
            fill="#080B10"
            stroke={`url(#${gradientA})`}
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          <path d="M14 20.2c6.1-4 13.5-6.2 22-6.2s15.9 2.2 22 6.2" stroke="#E8E4DC" strokeOpacity="0.16" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M14 47.8c6.1 4 13.5 6.2 22 6.2s15.9-2.2 22-6.2" stroke="#E8E4DC" strokeOpacity="0.16" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M13.8 36s8.5-13.3 22.2-13.3S58.2 36 58.2 36 49.7 49.3 36 49.3 13.8 36 13.8 36Z" fill={`url(#${gradientB})`} stroke="#5AFFD5" strokeOpacity="0.72" strokeWidth="2.2" />
          <circle cx="36" cy="36" r="8.4" fill="#0A0B0E" stroke={`url(#${gradientC})`} strokeWidth="2.6" />
          <path d="M29.8 29.5h12.4M36 29.5v16.1" stroke="#E8E4DC" strokeWidth="3" strokeLinecap="round" />
          <path d="M19.4 25.3 12.8 18.7M52.6 46.7l6.6 6.6" stroke="#D4853A" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M52.4 25.4 59 18.8M19.6 46.6 13 53.2" stroke="#3B7DD8" strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="36" cy="36" r="2.3" fill="#5AFFD5" />
        </svg>
      </span>
      {!compact && (
        <span className="leading-none">
          <span className="block text-[1.38rem] font-black tracking-[-0.04em] text-white">TruthLab</span>
          <span className="mt-1 flex items-center gap-2 text-[0.62rem] font-black uppercase tracking-[0.28em] text-[#5AFFD5]/85">
            <span className="h-px w-5 bg-[#D4853A]/80" />
            Kids
          </span>
        </span>
      )}
    </span>
  );
}
