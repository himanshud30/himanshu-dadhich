import React from 'react';
import SectionHeader from '@/components/common/SectionHeader';
import SeriesCard from '@/components/cards/SeriesCard';
import { series } from '@/data/series';

export default function CurrentSeriesSection() {
  return (
    <section className="py-24 md:py-32 bg-dark text-cream border-b border-cream/10 relative">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="Original Content Series"
          title="Episodic Inquiries & Documentaries"
          subtitle="Long-form cinema and philosophical explorations produced by TLR"
          actionText="Explore All Series"
          actionHref="/series"
          light={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {series.map((item) => (
            <SeriesCard key={item.slug} series={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
