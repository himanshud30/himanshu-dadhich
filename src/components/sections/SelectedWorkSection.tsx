'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import CaseStudyCard from '@/components/cards/CaseStudyCard';
import { caseStudies } from '@/data/case-studies';

export default function SelectedWorkSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Brand Storytelling',
    'Content Systems',
    'Creative Strategy',
    'Film',
    'Campaigns',
  ];

  const filteredStudies =
    selectedCategory === 'All'
      ? caseStudies
      : caseStudies.filter((cs) => cs.category === selectedCategory);

  return (
    <section className="py-24 md:py-32 border-b border-dark/15 bg-cream">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        {/* Yūgen-Inspired Kicker & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-dark/15 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-muted mb-2">
              <span className="text-sandstone font-bold">02 / PORTFOLIO</span>
              <span>&middot;</span>
              <span>FEATURED WORK</span>
              <span>/</span>
              <span>SHOWCASE</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-display uppercase text-dark leading-none">
              The Work is the Bridge
            </h2>
            <p className="font-serif italic text-base sm:text-lg text-dark/75 mt-2">
              Selected client engagements across technology, healthcare, consumer goods & culture
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-label rounded-full pl-4 pr-1.5 py-1.5 bg-dark text-cream hover:bg-sandstone hover:text-dark transition-all duration-300 group shrink-0"
          >
            <span>View All ({caseStudies.length})</span>
            <span className="w-6 h-6 rounded-full bg-cream/20 text-current flex items-center justify-center transition-transform group-hover:rotate-45">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>

        {/* Monospace Filter Tabs (Yūgen Style) */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider uppercase rounded-[2px] transition-all duration-200 border ${
                selectedCategory === cat
                  ? 'bg-dark text-cream border-dark shadow-sm'
                  : 'bg-cream-dark/30 text-dark/70 border-dark/20 hover:border-dark/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredStudies.map((study, idx) => (
            <CaseStudyCard key={study.slug} caseStudy={study} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
