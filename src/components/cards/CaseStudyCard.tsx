import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CaseStudy } from '@/types';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index?: number;
}

export default function CaseStudyCard({ caseStudy, index }: CaseStudyCardProps) {
  const formattedIndex = index !== undefined ? String(index + 1).padStart(2, '0') : '';

  return (
    <article className="group flex flex-col bg-cream border border-dark/15 hover:border-dark/40 transition-all duration-500 rounded-[2px] overflow-hidden shadow-sm hover:shadow-md">
      {/* Thumbnail Container with Yūgen Image Zoom & Overlay */}
      <Link
        href={`/work/${caseStudy.slug}`}
        className="relative aspect-[16/10] overflow-hidden bg-dark/5 block"
      >
        <img
          src={caseStudy.thumbnail}
          alt={caseStudy.title}
          className="w-full h-full object-cover grayscale contrast-115 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
          loading="lazy"
        />
        
        {/* Subtle Dark Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />

        {/* Category Pill Tag */}
        <div className="absolute top-4 left-4 bg-dark/85 backdrop-blur-md text-cream px-3 py-1 text-[9px] font-mono uppercase tracking-wider rounded-[2px] border border-cream/20">
          {caseStudy.category}
        </div>

        {/* Year & Index */}
        <div className="absolute top-4 right-4 text-cream font-mono text-xs font-semibold px-2.5 py-1 bg-dark/70 backdrop-blur-md rounded-[2px]">
          {caseStudy.year}
        </div>
      </Link>

      {/* Content Body */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-center justify-between text-xs mb-3">
            <span className="font-mono text-[11px] uppercase tracking-wider text-sandstone font-semibold">
              {caseStudy.client}
            </span>
            {formattedIndex && (
              <span className="font-mono text-xs text-muted">
                [{formattedIndex}]
              </span>
            )}
          </div>

          <h3 className="font-display text-2xl sm:text-3xl tracking-display uppercase text-dark group-hover:text-sandstone transition-colors leading-[0.98]">
            <Link href={`/work/${caseStudy.slug}`}>
              {caseStudy.title}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-dark/70 line-clamp-2 mt-3 leading-relaxed">
            {caseStudy.excerpt}
          </p>
        </div>

        {/* Deliverables Tags & Yūgen Rotating Arrow Button */}
        <div className="pt-6 mt-6 border-t border-dark/10 flex items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {caseStudy.deliverables.slice(0, 2).map((del, i) => (
              <span
                key={i}
                className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 bg-cream-dark/50 text-dark/75 border border-dark/10 rounded-[2px]"
              >
                {del}
              </span>
            ))}
          </div>

          <Link
            href={`/work/${caseStudy.slug}`}
            className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-label text-dark group-hover:text-sandstone shrink-0 transition-colors"
          >
            <span className="text-[11px]">View Case</span>
            <span className="w-7 h-7 rounded-full bg-dark text-cream group-hover:bg-sandstone group-hover:text-dark flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
