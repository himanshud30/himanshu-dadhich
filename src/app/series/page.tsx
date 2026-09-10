import React from 'react';
import type { Metadata } from 'next';
import SectionHeader from '@/components/common/SectionHeader';
import SeriesCard from '@/components/cards/SeriesCard';
import { series } from '@/data/series';

export const metadata: Metadata = {
  title: 'Original Content Series & Films',
  description: 'Episodic inquiries, long-form documentary films, and cultural meditations directed by Himanshu Dadhich.',
};

export default function SeriesPage() {
  return (
    <div className="py-16 md:py-24 bg-dark text-cream min-h-screen">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="Episodic Documentary Canon"
          title="Original Content Series"
          subtitle="Long-form storytelling and philosophical explorations created by TLR Studio"
          description="Each series investigates a fundamental human question through cinema, oral history, and immersive field inquiries."
          light={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {series.map((item) => (
            <SeriesCard key={item.slug} series={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
