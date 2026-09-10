import React from 'react';

interface PullQuoteProps {
  quote: string;
  author?: string;
  role?: string;
  className?: string;
  light?: boolean;
}

export default function PullQuote({
  quote,
  author,
  role,
  className = '',
  light = false,
}: PullQuoteProps) {
  return (
    <figure
      className={`relative pl-8 md:pl-10 border-l-2 border-sandstone my-10 ${className}`}
    >
      <blockquote
        className={`font-serif italic text-xl sm:text-2xl md:text-3xl leading-snug ${
          light ? 'text-cream' : 'text-dark'
        }`}
      >
        “{quote}”
      </blockquote>

      {(author || role) && (
        <figcaption className="mt-4 flex items-center gap-3">
          <span className="w-4 h-[1px] bg-sandstone/60" />
          <span
            className={`text-xs font-semibold tracking-wider uppercase ${
              light ? 'text-sandstone-light' : 'text-dark'
            }`}
          >
            {author}
          </span>
          {role && (
            <span
              className={`text-xs tracking-wide ${
                light ? 'text-cream/50' : 'text-muted'
              }`}
            >
              — {role}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
