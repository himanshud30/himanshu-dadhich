import React from 'react';
import Link from 'next/link';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  actionText?: string;
  actionHref?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  description,
  actionText,
  actionHref,
  align = 'left',
  light = false,
  className = '',
}: SectionHeaderProps) {
  const isCentered = align === 'center';

  return (
    <div
      className={`mb-12 md:mb-16 ${
        isCentered ? 'text-center mx-auto max-w-3xl' : 'flex flex-col md:flex-row md:items-end md:justify-between gap-6'
      } ${className}`}
    >
      <div className={isCentered ? '' : 'max-w-3xl'}>
        {eyebrow && (
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[2px] bg-sandstone block" />
            <span
              className={`text-[11px] font-semibold tracking-[0.18em] uppercase ${
                light ? 'text-cream/70' : 'text-sandstone-warm'
              }`}
            >
              {eyebrow}
            </span>
          </div>
        )}

        <h2
          className={`font-display text-4xl sm:text-5xl md:text-6xl tracking-display uppercase leading-[0.95] ${
            light ? 'text-cream' : 'text-dark'
          }`}
        >
          {title}
        </h2>

        {subtitle && (
          <p
            className={`font-serif italic text-lg sm:text-xl mt-3 ${
              light ? 'text-cream/80' : 'text-dark/70'
            }`}
          >
            {subtitle}
          </p>
        )}

        {description && (
          <p
            className={`text-sm sm:text-base leading-relaxed mt-4 ${
              light ? 'text-cream/70' : 'text-muted'
            } ${isCentered ? 'mx-auto' : ''}`}
          >
            {description}
          </p>
        )}
      </div>

      {actionText && actionHref && !isCentered && (
        <div className="shrink-0">
          <Link
            href={actionHref}
            className={`inline-flex items-center gap-2 text-xs font-semibold tracking-label uppercase border-b pb-1 transition-all duration-300 hover:gap-3 ${
              light
                ? 'text-cream border-cream/40 hover:text-sandstone hover:border-sandstone'
                : 'text-dark border-dark/30 hover:text-sandstone hover:border-sandstone'
            }`}
          >
            {actionText}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      )}
    </div>
  );
}
