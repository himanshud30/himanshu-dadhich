import React from 'react';
import type { Metadata } from 'next';
import SectionHeader from '@/components/common/SectionHeader';
import NewsletterForm from '@/components/common/NewsletterForm';
import { newsletterIssues, newsletterTerritories } from '@/data/newsletter';

export const metadata: Metadata = {
  title: 'Indian Content Industry Reports & Dispatches · Himanshu Dadhich',
  description: 'Deep dives analyzing how the Indian content industry is evolving across brands, companies, creators, and culture.',
};

export default function NewsletterPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="Industry Analysis & Dispatches"
          title="Indian Content Industry Reports"
          subtitle="Bi-weekly breakdowns across brands, companies, creators, and culture"
          description="How Indian brands, tech startups, and independent creators are building attention, distribution, and enduring stories."
        />

        {/* Subscribe Banner */}
        <div className="p-8 md:p-12 bg-dark text-cream rounded-[2px] border border-cream/15 my-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-sandstone">
              The Dispatch
            </span>
            <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-display">
              Read the Fortnightly Analysis
            </h2>
            <p className="text-xs sm:text-sm text-cream/75 leading-relaxed">
              No generic tips or recycled tweets. Practical breakdowns on what is actually working in the Indian content and brand ecosystem.
            </p>
          </div>

          <div className="lg:col-span-6">
            <NewsletterForm light={true} />
          </div>
        </div>

        {/* Core Territories */}
        <div className="mb-16">
          <span className="text-xs uppercase font-semibold tracking-[0.2em] text-sandstone block mb-4">
            Verticals Analyzed:
          </span>
          <div className="flex flex-wrap gap-2">
            {newsletterTerritories.map((t, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 bg-cream-dark/50 border border-dark/15 text-dark text-xs font-medium rounded-[2px]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Archive Issues List */}
        <div>
          <h3 className="font-display text-3xl uppercase tracking-display text-dark mb-6">
            Selected Issue Archive
          </h3>

          <div className="space-y-4">
            {newsletterIssues.map((issue) => (
              <div
                key={issue.slug}
                className="p-6 bg-cream border border-dark/15 hover:border-dark/35 transition-all duration-200 rounded-[2px] shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-[10px] text-muted uppercase tracking-wider">
                    <span className="font-bold text-sandstone">
                      Dispatch #{String(issue.number).padStart(2, '0')}
                    </span>
                    <span>&middot;</span>
                    <span>{issue.publishedAt}</span>
                  </div>

                  <h4 className="font-display text-xl sm:text-2xl uppercase tracking-display text-dark">
                    {issue.title}
                  </h4>

                  <p className="text-xs text-dark/70 max-w-3xl line-clamp-2">
                    {issue.excerpt}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-2">
                  {issue.territories.map((cat, i) => (
                    <span
                      key={i}
                      className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-dark/5 text-dark/60 rounded-[2px] hidden md:inline-block"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
