import React from 'react';
import SectionHeader from '@/components/common/SectionHeader';
import IdeaCard from '@/components/cards/IdeaCard';
import { ideas } from '@/data/ideas';

export default function IdeasPreviewSection() {
  return (
    <section className="py-24 md:py-32 border-b border-dark/15 bg-cream-dark/20">
      <div className="max-w-site mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="Intellectual Architecture"
          title="Living Board of Inquiries"
          subtitle="Open conceptual inquiries, hypotheses, and work-in-progress research"
          actionText="Explore Full Board"
          actionHref="/ideas"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ideas.slice(0, 6).map((idea) => (
            <IdeaCard key={idea.slug} idea={idea} />
          ))}
        </div>
      </div>
    </section>
  );
}
