'use client';

import React, { useState } from 'react';
import SectionHeader from '@/components/common/SectionHeader';
import CaseStudyCard from '@/components/cards/CaseStudyCard';
import { caseStudies } from '@/data/case-studies';

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Brand Storytelling',
    'Film',
    'Creative Strategy',
    'Content Systems',
    'Original Projects',
  ];

  const filtered =
    activeCategory === 'All'
      ? caseStudies
      : caseStudies.filter((cs) => cs.category === activeCategory);

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="Case Studies & Directorial Work"
          title="Archive of Selected Work"
          subtitle="Films, brand narratives, and strategy systems engineered from Jodhpur"
          description="Every case study represents a deliberate synthesis of cultural context, rigorous narrative strategy, and cinema-grade execution."
        />

        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-dark/10 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold tracking-label uppercase rounded-[2px] transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-dark text-cream border-dark'
                  : 'bg-cream-dark/30 text-dark/70 border-dark/20 hover:border-dark/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filtered.map((study, idx) => (
            <CaseStudyCard key={study.slug} caseStudy={study} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
