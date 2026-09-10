'use client';

import React, { useState } from 'react';
import SectionHeader from '@/components/common/SectionHeader';
import IdeaCard from '@/components/cards/IdeaCard';
import { ideas } from '@/data/ideas';

export default function IdeasPage() {
  const [filterStatus, setFilterStatus] = useState('All');

  const statuses = [
    'All',
    'Observing',
    'Researching',
    'Developing',
    'Producing',
  ];

  const filtered =
    filterStatus === 'All'
      ? ideas
      : ideas.filter((idea) => idea.status === filterStatus);

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="Intellectual Architecture"
          title="Living Board of Inquiries"
          subtitle="Open conceptual inquiries, ongoing hypotheses, and philosophical investigations"
          description="In our studio, an idea is not a private asset to hoard; it is a hypothesis to be pressure-tested against the world. We share our active inquiries in real-time."
        />

        {/* Status Filter */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-dark/10 pb-6">
          {statuses.map((st) => (
            <button
              key={st}
              onClick={() => setFilterStatus(st)}
              className={`px-4 py-2 text-xs font-semibold tracking-label uppercase rounded-[2px] transition-all duration-200 border ${
                filterStatus === st
                  ? 'bg-dark text-cream border-dark'
                  : 'bg-cream-dark/30 text-dark/70 border-dark/20 hover:border-dark/60'
              }`}
            >
              {st}
            </button>
          ))}
        </div>

        {/* Ideas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((idea) => (
            <IdeaCard key={idea.slug} idea={idea} />
          ))}
        </div>
      </div>
    </div>
  );
}
